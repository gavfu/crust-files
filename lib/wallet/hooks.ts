import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import store from 'store';
import { Member } from '../http/types';
import { formatToCrustAccount } from "../utils";
import { Crust } from './Crust';
import { Elrond } from "./Elrond";
import { FlowM } from './Flow';
import { Metamask } from './Metamask';
import { MWalletConnect } from "./MWalletConnect";
import { NearM } from './Near';
import { PolkadotJs } from "./PolkadotJs";
import { SolanaM } from './SolanaM';
import { SaveFile } from './types';

// eslint-disable-next-line
const fcl = require('@onflow/fcl');

export interface Files {
  files: SaveFile[],
  isLoad: boolean,
}

type KEYS_FILES = 'files' | 'pins:files'

export interface WrapFiles extends Files {
  setFiles: (files: SaveFile[]) => void,
  deleteItem: (f: SaveFile) => void,
  key: KEYS_FILES,
}

export interface UseSign {
  sign?: (data: string, password?: string) => Promise<string>
}

type KEYS = 'files:login' | 'pins:login'

export class LoginUser {
  account = '';
  pubKey?: string;
  wallet: 'crust' | 'polkadot-js' | 'metamask' | 'metamask-Moonriver' | 'metamask-Polygon' |
    'near' | 'flow' | 'solana' | 'elrond' | 'wallet-connect';
  key?: KEYS = 'files:login';

}

export const WalletName: { [k in LoginUser['wallet']]: string } = {
  "crust": 'Crust Wallet',
  "metamask": 'MetaMask',
  "metamask-Polygon": "MetaMask",
  "metamask-Moonriver": "MetaMask",
  "polkadot-js": "Polkadot Extension",
  "near": "Near Wallet",
  "elrond": "Elrond(Maiar Wallet)",
  "flow": "Flow Wallet",
  "solana": "Solana(Phantom Wallet)",
  "wallet-connect": "WalletConnect"
}


const NEED_REMEMBER_WALLET: LoginUser['wallet'][] = [
  'crust',
  'polkadot-js'
]

export function lastUser(wallet: LoginUser['wallet'], key: KEYS = 'files:login'): LoginUser | undefined {
  return store.get(`${key}:${wallet}:last`) as LoginUser
}

export function saveLastUser(wallet: LoginUser['wallet'], data: LoginUser, key: KEYS = 'files:login') {
  store.set(`${key}:${wallet}:last`, data)
}


export interface WrapLoginUser extends LoginUser {
  nickName?: string;
  setNickName: Dispatch<SetStateAction<string>>;
  member?: Member;
  setMember: Dispatch<SetStateAction<Member>>
  isLoad: boolean
  accounts?: string[]
  setLoginUser: (u: LoginUser) => void
  logout: () => void
  sign?: (data: string, account?: string) => Promise<string>
  crust: Crust,
  polkadotJs: PolkadotJs,
  metamask: Metamask,
  near: NearM,
  flow: FlowM,
  solana: SolanaM,
  elrond: Elrond,
  walletConnect: MWalletConnect,
}

const defFilesObj: Files = { files: [], isLoad: true };

const initPinTime = (fileObj: Files) => {
  fileObj.files.forEach((file) => {
    if (!file.PinTime) file.PinTime = new Date().getTime()
  })
}

export function useFiles(key: KEYS_FILES = 'files'): WrapFiles {
  const [filesObj, setFilesObj] = useState<Files>(defFilesObj);

  useEffect(() => {
    try {
      const f = store.get(key, defFilesObj) as Files;

      f.isLoad = false;

      if (f !== defFilesObj) {
        // init file.PinTime
        initPinTime(f)
        setFilesObj(f);
      }
    } catch (e) {
      console.error(e);
    }
  }, [key]);
  const setFiles = useCallback((nFiles: SaveFile[]) => {
    const nFilesObj = { ...filesObj, files: nFiles };
    // init file.PinTime
    initPinTime(nFilesObj)
    setFilesObj(nFilesObj);
    store.set(key, nFilesObj);
  }, [filesObj, key]);

  const deleteItem = useCallback((f: SaveFile) => {
    if (f.Hash) {
      setFiles(filesObj.files.filter(file => file.Hash !== f.Hash))
    }
  }, [filesObj, setFiles])

  return useMemo(() => ({ ...filesObj, setFiles, deleteItem, key }), [filesObj, setFiles, deleteItem, key]);
}

export function useSign(wUser: WrapLoginUser): UseSign {
  const [state, setState] = useState<UseSign>({});

  useEffect(() => {
    if (!wUser.account) return;
    if (wUser.wallet === 'near') {
      setState((o) => ({
        ...o, sign: async (data) => {
          return wUser.near.sign(data)
        }
      }))
    }

    if (wUser.wallet === 'flow') {
      setState((o) => ({
        ...o, sign: async (data) => {
          return wUser.flow.sign(data)
        }
      }))
    }

    if (wUser.wallet === 'solana') {
      setState((o) => ({
        ...o, sign: async (data) => {
          return wUser.solana.sign(data)
        }
      }))
    }

    if (wUser.wallet.startsWith('metamask')) {
      setState((o) => ({
        ...o, sign: async (data) => {
          return wUser.metamask.sign(data, wUser.account)
        }
      }))
    }
    if (wUser.wallet === 'crust') {
      setState((o) => ({
        ...o, sign: async (data, account) => {
          return wUser.crust.sign(data, account)
        }
      }))
    }
    if (wUser.wallet === 'polkadot-js') {
      setState((o) => ({
        ...o, sign: async (data, account) => {
          return wUser.polkadotJs.sign(data, account)
        }
      }))
    }
    if (wUser.wallet === 'elrond') {
      setState((o) => ({
        ...o, sign: async () => {
          return wUser.elrond.sign()
        }
      }))
    }
    if (wUser.wallet === 'wallet-connect') {
      setState((o) => ({
        ...o, sign: async (data) => {
          return wUser.walletConnect.sign(data, wUser.account)
        }
      }))
    }
  }, [wUser]);

  return state;
}

const defLoginUser: LoginUser = { account: '', wallet: 'crust', key: 'files:login' };

export function useLoginUser(key: KEYS = 'files:login'): WrapLoginUser {
  const [account, setAccount] = useState<LoginUser>(defLoginUser);
  const [accounts, setAccounts] = useState<WrapLoginUser['accounts']>()
  const [nickName, setNickName] = useState('')
  const [member, setMember] = useState<Member>()

  const [isLoad, setIsLoad] = useState(true);
  const crust = useMemo(() => new Crust(), [])
  const polkadotJs = useMemo(() => new PolkadotJs(), [])
  const metamask = useMemo(() => new Metamask(), []);
  const near = useMemo(() => new NearM(), []);
  const flow = useMemo(() => new FlowM(), []);
  const solana = useMemo(() => new SolanaM(), []);
  const elrond = useMemo(() => new Elrond(), []);
  const walletConnect = useMemo(() => new MWalletConnect(), []);
  const r = useRouter()

  const setLoginUser = useCallback((loginUser: LoginUser) => {
    const nAccount = { ...loginUser, key };

    setAccount((old) => {
      if (old.wallet === 'near') {
        // eslint-disable-next-line
        near.wallet?.signOut();
      }

      return nAccount;
    });
    store.set(key, nAccount);
    if (NEED_REMEMBER_WALLET.includes(nAccount.wallet) && nAccount.account) {
      saveLastUser(nAccount.wallet, nAccount)
    }
  }, [near, key]);

  useEffect(() => {
    metamask.onAccountChange = (data) => {
      console.info('accountsChange::', data, account)
      if (!account.wallet.startsWith('metamask')) return
      const accounts = data
      if (accounts.length !== 0) {
        setLoginUser({
          account: accounts[0],
          wallet: account.wallet
        })
      } else {
        setLoginUser(defLoginUser)
      }
    }
  }, [metamask, setLoginUser, account])

  useEffect(() => {
    walletConnect.onAccountChanged = (data) => {
      if (account.wallet !== 'wallet-connect') return
      if (data.length) {
        console.info('wallet-connet:changed:', data)
        setLoginUser({
          account: data[0],
          wallet: account.wallet
        })
      } else {
        setLoginUser(defLoginUser)
      }

    }
    walletConnect.onDisconnect = () => {
      if (account.wallet !== 'wallet-connect') return
      setLoginUser(defLoginUser)
    }
  }, [walletConnect, setLoginUser, account])

  useEffect(() => {
    try {
      const f = store.get(key, defLoginUser) as LoginUser;
      setAccounts(undefined)
      if (f === defLoginUser || f.account === '') {
        setIsLoad(false)
        return;
      }
      if (f.wallet === 'crust') {
        f.account = formatToCrustAccount(f.account)
        crust.init().then(() => crust.getAccounts())
          .then((accounts) => {
            if (accounts.includes(f.account)) {
              setAccounts(accounts)
              setAccount(f)
            }
          })
          .then(() => setIsLoad(false))
      } else if (f.wallet === 'polkadot-js') {
        polkadotJs.init().then(() => polkadotJs.getAccounts())
          .then((accounts) => {
            if (accounts.includes(f.account)) {
              setAccounts(accounts)
              setAccount(f)
            }
          })
          .then(() => setIsLoad(false))
      } else if (f.wallet.startsWith('metamask')) {
        metamask.init()
          .then(() => {
            console.info('doInit::', metamask)
            if (metamask.isAllowed && metamask.accounts.length) {
              setAccount({
                account: metamask.accounts[0],
                wallet: f.wallet
              });
            }
          })
          .then(() => setIsLoad(false))
      } else if (f.wallet === 'near') {
        near.init()
          .then(() => {
            if (near.wallet && near.wallet.isSignedIn() && near.keyPair) {
              setAccount(f)
            }
          })
          .then(() => setIsLoad(false))
      } else if (f.wallet === 'solana') {
        solana.init()
          .then(() => setAccount(f))
          .then(() => setIsLoad(false))
      } else if (f.wallet === 'flow') {
        flow.init()
          .then(() => setAccount(f))
          .then(() => setIsLoad(false))
      } else if (f.wallet === 'elrond') {
        elrond.init()
          .then(() => setAccount(f))
          .then(() => setIsLoad(false))
      } else if (f.wallet === 'wallet-connect') {
        walletConnect.init()
          .then(() => setAccount(f))
          .then(() => setIsLoad(false))
      } else {
        setIsLoad(false)
      }
    } catch (e) {
      setIsLoad(false);
      console.error(e);
    }
  }, [key, r]);

  const logout = useCallback(async () => {
    if (account.wallet === 'flow') {
      // eslint-disable-next-line
      const flowUser = await fcl.currentUser().snapshot();
      // eslint-disable-next-line
      if (flowUser.loggedIn) {
        // eslint-disable-next-line
        await fcl.unauthenticate();
      }
    } else if (account.wallet === 'solana') {
      if (solana.solana && solana.solana?.isConnected) {
        solana.solana.disconnect();
      }
    } else if (account.wallet === 'wallet-connect') {
      await walletConnect.connect?.killSession()
    }

    setLoginUser({ ...defLoginUser });
  }, [setLoginUser, account]);

  const wUser: WrapLoginUser = useMemo(() => {
    const wrapLoginUser: WrapLoginUser = {
      ...account,
      accounts,
      key,
      isLoad,
      setLoginUser,
      logout,
      crust,
      polkadotJs,
      metamask,
      near,
      flow,
      solana,
      elrond,
      walletConnect,
      nickName,
      setNickName,
      setMember,
      member,
    };
    return wrapLoginUser;
  }, [
    account, accounts, isLoad, setLoginUser, logout,
    crust, polkadotJs, metamask, near, flow, solana,
    walletConnect, nickName, member, key
  ]);
  const uSign = useSign(wUser);
  wUser.sign = uSign.sign;
  return wUser;
}

export const ContextWrapLoginUser = React.createContext<WrapLoginUser>(null)

export function useContextWrapLoginUser(): WrapLoginUser {
  return useContext(ContextWrapLoginUser)
}

export const getPerfix = (user: LoginUser): string => {
  if (user.wallet.startsWith('metamask') || user.wallet === 'wallet-connect') {
    return 'eth';
  }

  if (user.wallet === 'near') {
    return 'near';
  }

  if (user.wallet === 'flow') {
    return 'flow';
  }

  if (user.wallet === 'solana') {
    return 'sol';
  }

  if (user.wallet === 'elrond') {
    return 'elrond';
  }

  return 'substrate';
};
