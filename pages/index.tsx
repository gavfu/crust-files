import classNames from "classnames";
import _ from 'lodash';
import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PixelBg } from "../components/effect/PixelBg";
import { Pixel } from "../components/effect/Pixels";
import { Links } from "../components/Links";
// import BgAnim from '../components/effect/BgAnim';
import Logo from "../components/Logo";
import { AppContext } from "../lib/AppContext";
import { CrustGetCRU, CrustWalletDownUrl } from "../lib/config";
import useParallax from "../lib/hooks/useParallax";
import { report } from "../lib/http/report";
import { openDocs } from "../lib/utils";
import { nearConfig } from "../lib/wallet/config";
import { lastUser, LoginUser, useContextWrapLoginUser } from "../lib/wallet/hooks";
interface ItemWallet {
  name: string,
  image: string,
  group: 'Crust' | 'Polkadot' | 'MetaMask' | 'Web 3' | 'WalletConnect'
}

interface Wallet extends ItemWallet {
  onClick: (w: Wallet) => void
}

const IMGS = {
  'Crust': '/images/group_wallet_crust.png',
  'Polkadot': '/images/group_wallet_polkadot.png',
  'MetaMask': '/images/group_wallet_metamask.png',
  'Web 3': '/images/group_wallet_other.png',
  'WalletConnect': '/images/group_wallet_connect.png',
}

interface WalletGroup {
  items: Wallet[],
  group: ItemWallet['group'],
  img: string,
  onClick?: Wallet['onClick'],
}


function WalletItems(p: { gw: WalletGroup }) {
  const { gw } = p
  const count = gw.items.length
  const { data } = useParallax(100, count)
  return <div
    className="wallet_items"
  >
    {
      gw.items.map((w, index) =>
        <div
          key={`wallet_item_${index}`}
          onClick={() => w.onClick(w)}
          className={classNames("wallet_item", { animFinal: data[count - 1 - index].value })}>
          <img className="item_image" src={w.image} />
          <span className="item_name">{w.name}</span>
        </div>)
    }
  </div>
}

function Home({ className }: { className?: string }) {
  const { t } = useTranslation()
  const user = useContextWrapLoginUser()
  const { alert } = useContext(AppContext)
  // const [error, setError] = useState('');
  const setError = (data: string) => {
    if (data) {
      alert.error(data)
    }
  }
  const setLogined = (u: LoginUser) => {
    user.setLoginUser(u)
    report({
      type: 1,
      walletType: u.wallet,
      address: u.account,
      data: {}
    })
  }
  const _onClickCrust = useCallback(async () => {
    try {
      setError('')
      await user.crust.init()
      if (!user.crust.provider) {
        setError(`Crust Wallet not installed`)
        return
      }
      const accounts = await user.crust.login()
      const last = lastUser('crust')
      if (last && accounts.includes(last.account)) {
        setLogined(last)
      } else if (accounts.length > 0) {
        setLogined({
          account: accounts[0],
          wallet: 'crust',
        })
      }
    } catch (e) {
      console.error(e)
    }
  }, [user, t])

  const _onClickCrustDown = useCallback(() => {
    window.open(CrustWalletDownUrl, '_blank')
  }, [])

  const _onClickCrustGetCru = useCallback(() => {
    window.open(CrustGetCRU, '_blank')
  }, [])

  const _onClickPolkadotJs = useCallback(async () => {
    try {
      setError('')
      await user.polkadotJs.init()
      if (!user.polkadotJs.provider) {
        setError(`Polkadot (.js Extension) not installed`)
        return
      }
      const accounts = await user.polkadotJs.login()
      const last = lastUser('polkadot-js')
      if (last && accounts.includes(last.account)) {
        setLogined(last)
      } else if (accounts.length > 0) {
        setLogined({
          account: accounts[0],
          wallet: 'polkadot-js'
        })
      }
    } catch (e) {
      console.error(e)
    }
  }, [user, t])

  const _onClickMetamask = useCallback(async (w: Wallet) => {
    setError('')
    await user.metamask.init()
    const ethReq = user.metamask.ethereum?.request;
    if (user.metamask.isInstalled && ethReq) {
      ethReq<string[]>({
        method: 'eth_requestAccounts'
      })
        .then((res) => {
          console.info('accounts:', res);
          const selectedAddress = user.metamask.ethereum?.selectedAddress;
          const wallet: LoginUser['wallet'] =
            w.name === 'Polygon' ? 'metamask-Polygon' :
              w.name === 'Moonriver' ? 'metamask-Moonriver' :
                'metamask'
          if (selectedAddress && res.includes(selectedAddress)) {
            setLogined({
              account: selectedAddress,
              wallet
            });
          } else if (res.length) {
            setLogined({
              account: res[0],
              wallet
            });
          }
        })
        .catch((error) => {
          console.error('accountsError:', error);
        });
    } else {
      setError(`MetaMask not installed`)
    }
  }, [user, t]);

  const _onClickNear = useCallback(async () => {
    setError('')
    await user.near.init()
    await user.near.wallet.requestSignIn(nearConfig.contractName, 'Crust Files');
  }, [user, t]);

  useEffect(() => {
    user.near.init()
      .then(() => {
        if (user.near.keyPair && user.near.wallet.isSignedIn()) {
          setLogined({
            account: user.near.wallet.getAccountId() as string,
            wallet: 'near',
            pubKey: user.near.keyPair.getPublicKey().toString().substring(8)
          })
        }
      })
      .catch(console.error)
  }, [user])

  const _onClickFlow = useCallback(async () => {
    setError('')
    await user.flow.init()
    const fcl = user.flow.fcl;
    if (!fcl) return;
    // eslint-disable-next-line
    let flowUser = await fcl.currentUser().snapshot();
    // eslint-disable-next-line
    if (!flowUser.loggedIn) {
      await fcl.authenticate();
    }

    // eslint-disable-next-line
    flowUser = await fcl.currentUser().snapshot();
    setLogined({
      // eslint-disable-next-line
      account: flowUser.addr,
      wallet: 'flow'
    });
  }, [user]);

  const _onClickSolana = useCallback(async () => {
    setError('')
    await user.solana.init()
    if (!user.solana.isInstalled) {
      setError(`Solana (Phantom Wallet) not installed`)
    }

    // eslint-disable-next-line
    if (user.solana.solana.isConnected) {
      setLogined({
        // eslint-disable-next-line
        account: user.solana.solana.publicKey.toBase58(),
        wallet: 'solana'
      });

      return;
    }

    // eslint-disable-next-line
    user.solana.solana.connect();
    // eslint-disable-next-line
    user.solana.solana.on('connect', () => {
      setLogined({
        // eslint-disable-next-line
        account: user.solana.solana.publicKey.toBase58(),
        wallet: 'solana'
      });
    });
  }, [user, t]);

  const _onClickElrond = useCallback(async () => {
    setError('')
    await user.elrond.init()
    if (!user.elrond.provider) {
      setError(`Elrond (Maiar Wallet) not installed`)
      return
    }
    await user.elrond.provider.login({
      callbackUrl: encodeURIComponent(
        `${window.location.origin}/#/files`
      )
    });
    const { address } = user.elrond.provider.account;

    setLogined({
      // eslint-disable-next-line
      account: address,
      wallet: 'elrond'
    });
  }, [user, t])

  const _onClickWalletConnect = useCallback(async () => {
    await user.walletConnect.init()
    try {
      await user.walletConnect.connect.killSession()
    } catch (e) {
      console.error(e)
    }
    await user.walletConnect.connect?.createSession()
    user.walletConnect.connect?.on("connect", (_, payload) => {
      const { accounts } = payload.params[0];
      setLogined({
        account: accounts[0],
        wallet: 'wallet-connect'
      })
    })
  }, [user])

  const wallets = useMemo<Wallet[]>(() => {
    return [
      {
        group: 'Crust',
        name: 'Crust Wallet',
        image: '/images/wallet_crust.png',
        onClick: _onClickCrust,
      },
      {
        group: 'Crust',
        name: 'Download',
        image: '/images/crust_down.png',
        onClick: _onClickCrustDown,
      },
      {
        group: 'Crust',
        name: 'Get CRU',
        image: '/images/crust_get_cru.png',
        onClick: _onClickCrustGetCru,
      },

      {
        group: 'MetaMask',
        name: 'Ethereum',
        image: '/images/wallet_ethereum.png',
        onClick: _onClickMetamask,
      },
      {
        group: 'MetaMask',
        name: 'Polygon',
        image: '/images/wallet_polygon.png',
        onClick: _onClickMetamask,
      },
      {
        group: 'MetaMask',
        name: 'Moonriver',
        image: '/images/wallet_moonriver.png',
        onClick: _onClickMetamask,
      },
      {
        group: 'Web 3',
        name: 'Near',
        image: '/images/wallet_near.png',
        onClick: _onClickNear,
      },
      {
        group: 'Web 3',
        name: 'Elrond',
        image: '/images/wallet_elrond.png',
        onClick: _onClickElrond,
      },
      {
        group: 'Web 3',
        name: 'Solana',
        image: '/images/wallet_solana.png',
        onClick: _onClickSolana,
      },
      {
        group: 'Web 3',
        name: 'Flow',
        image: '/images/wallet_flow.png',
        onClick: _onClickFlow,
      },
      {
        group: 'Polkadot',
        name: 'Polkadot',
        image: '/images/wallet_polkadot.png',
        onClick: _onClickPolkadotJs,
      },


      {
        group: 'WalletConnect',
        name: 'WalletConnect',
        image: '/images/wallet_connect.png',
        onClick: _onClickWalletConnect,
      }
    ]
  }, [_onClickCrust, _onClickCrustDown, _onClickCrustGetCru, _onClickPolkadotJs, _onClickMetamask, _onClickNear, _onClickFlow, _onClickSolana, _onClickElrond, _onClickWalletConnect])

  const groupWallets = useMemo<WalletGroup[]>(() => {
    const groupObj = _.groupBy(wallets, 'group')
    const keys = _.keys(groupObj)
    return _.map(keys, (key) => {
      const items = groupObj[key]
      const group = key
      const g: WalletGroup = {
        items,
        group,
        img: IMGS[key]
      }
      if (g.items.length === 1) {
        g.onClick = g.items[0].onClick
      }
      return g
    })
  }, [wallets])

  const [hoverWalletGroup, setHoverWalletGroup] = useState<WalletGroup | null>(null)
  const { data } = useParallax(100, 5)

  return (

    <div className={className}>
      <div className="left_panel">
        {/* <BgAnim /> */}
        <PixelBg className="bg" />
        <div className="panel">
          <Logo className={"logo"} />
          <div className="docs" onClick={() => openDocs('/docs/CrustFiles_Welcome')}>Docs</div>
          <div style={{ flex: 1 }} />
          <div className="slog font-sans-semibold">
            Your<br />
            first personal<br />
            <span>Web3.0</span> storage<br />
            in the <span>Metaverse</span>.
          </div>
          <div style={{ flex: 1 }} />
          <Links className="links" />
        </div>
      </div>
      <div className="center_panel">
        <div className="cosmos" />
        <Pixel className="pixel_left" width={'8.57rem'} position="left" fullH={true} />
        <Pixel className="pixel_right" width={'8.57rem'} position="right" fullH={true} color="#E46A11" fillColor="#FF8D00" />
      </div>
      <div className="right_panel">
        <div style={{ flex: 1 }} />
        <div className="wallets_title">Sign-in with a Wallet</div>
        <div className={"wallets"} style={{ alignItems: hoverWalletGroup ? 'flex-start' : 'center' }}>
          {
            groupWallets.map((gw, index) =>
              <div
                key={`wallet_group_${index}`}
                onClick={() => {
                  if (gw.onClick) {
                    gw.onClick(gw.items[0])
                  }
                }}
                style={{ opacity: hoverWalletGroup && hoverWalletGroup.group !== gw.group ? 0.4 : 1 }}
                onMouseEnter={() => setHoverWalletGroup(() => gw)}
                onMouseLeave={() => setHoverWalletGroup(() => null)}
                className={classNames("wallet_group", { animFinal: data[index].value })}>
                <img className="image" src={gw.img} />
                <span className="text">{gw.group}</span>
                {
                  gw.items.length > 1 && hoverWalletGroup && hoverWalletGroup.group === gw.group &&
                  <>
                    <img className="arrow" src="/images/arrow_fill.png" />
                    <WalletItems gw={gw} />
                  </>
                }
              </div>
            )
          }
        </div>
        <div style={{ flex: 2 }} />
      </div>
    </div>

  )
}

export default React.memo(styled(Home)`
  color: white;
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 40rem;
  overflow-x: auto;
  .left_panel {
    background-color: #000000;
    flex: 1;
    height: 100%;
    position: relative;
    .bg {
      overflow: hidden;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 0;
    }
    .panel {
      z-index: 1;
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      overflow: auto;
      position: relative;
    }
    .docs {
      cursor: pointer;
      position: absolute;
      top: 3.57rem;
      right: 2.3rem;
      font-size: 1.29rem;
      line-height: 1.79rem;
      font-weight: 600;
    }

    .slog {
      font-size: 6.14rem;
      line-height: 8.36rem;
      width: 52.14rem;
      span {
        color: var(--primary-color)
      }
    }

    .links {
      width: 52.14rem;
      height: 7.14rem;
      margin-bottom: 3rem;
      flex-shrink: 0;
    }
  }
  .center_panel {
    width: 25.71rem;
    height: 100%;
    flex-shrink: 0;
    position: relative;
    .cosmos {
      width: calc(100% - 5.71rem);
      margin-left: 2.86rem;
      height: 100%;
      background: url("/images/cosmos.png");
      background-size: contain;
      background-position: center;
      background-repeat: repeat-y;
    }
    .pixel_left {
      position: absolute;
      left: 0;
      top: 0;
    }
    .pixel_right {
      position: absolute;
      right: 0;
      top: 0;
    }
 
  }
  .right_panel {
    background-color: var(--primary-color);
    width: 21.07rem;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    margin-left: 3.5rem;
    margin-top: 3rem;
    align-self: flex-start;
  }

  .wallets_title {
    font-weight: 600;
    font-size: 1.71rem;
    line-height: 2.36rem;
  }
  .wallets {
    height: min-content;
    display: flex;
    width: 100%;
    flex-direction: column;
    overflow: visible;
    flex-shrink: 0;
    &:hover {
      .wallet_group{
        .image,.text {
          position: relative;
          transform: translateX(-3.93rem);
        }
      }
    }
    .wallet_group {
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: visible;
      width: 100%;
      text-align: center;
      padding-top: 2rem;
      position: relative;
      cursor: pointer;
      /* transition: all cubic-bezier(.41, .19, .21, 1.25) 1.2s; */
      /* transform: translateX(-57.14rem); */
      
      &:hover {
        .image,.text {
          filter: drop-shadow(0rem .29rem 1.14rem rgba(255, 255, 255, 0.5));
          position: relative;
        }
      }

      .image {
        transition: all ease-in-out 300ms;
        width: 5rem;
        height: 5rem;
        display: block;
      }
      .text {
        transition: all ease-in-out 300ms;
        font-size: 1.2857rem;
        line-height: 2.357rem;
      }
      .arrow {
        position: absolute;
        top: 4rem;
        right: 9.285714rem;
        width: .71rem;
        height: 1.14rem;
      }
      .wallet_items {
        position: absolute;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        align-items: flex-start;
        width: 6.86rem;
        padding-right: 1rem;
        top: 1rem;
        right: 2rem;
        z-index: 2;
      }
    }
    .wallet_item {
      display: inline-block;
      width: 5.857rem;
      text-align: center;
      cursor: pointer;
      padding-top: 1.714286rem;
      transform: translateX(7.14rem);
      transition: all cubic-bezier(.41, .19, .21, 1.25) 300ms;
      .item_image {
        margin-left: 1.14rem;
        width: 3.57rem;
        height: 3.57rem;
      }
      .item_text {
        font-size: 0.857rem;
        line-height: 1.43rem;
      }
    }

    .spaceLeft {
      margin-left: 1.4rem;
    }

    .animFinal {
      transform: none;
    }
  }

  @media screen and (max-width: 1440px) {
      .links, .slog {
        font-size: 4rem !important;
        width: 40rem !important;
        line-height: 6rem !important;
        padding-left: 2rem;
      }
    }
`)
