import React, { useCallback, useMemo, useState } from "react";
import { Card, Modal, Progress, Radio, Input } from "semantic-ui-react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { WrapAlert } from "../lib/initAlert";
import Btn from "./Btn";
import { HuoChainUser } from "../lib/wallet/HuoChain";

export interface Props {
  onClose?: () => void;
  onSuccess?: (res: HuoChainUser) => void;
  alert: WrapAlert;
  className?: string;
}

const NOOP = (): void => undefined;

function LoginFormModal(p: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const [account, setAccount] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const { onClose = NOOP, onSuccess = NOOP, alert } = p;

  const _onClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const _onAccountChange = (_, { value }) => {
    setAccount(value);
  };

  const _onPrivateKeyChange = (_, { value }) => {
    setPrivateKey(value);
  };

  const _onSubmit = useCallback(() => {
    if (account === "" || privateKey === "") {
      alert.error("Account and PrivateKey can not empty");
      return;
    }
    onSuccess({ account: account, privateKey: privateKey });
  }, [onSuccess, account, privateKey]);

  const _onCloseInputKey = useCallback(() => {
    setAccount("");
    setPrivateKey("");
    onClose();
  }, []);

  return (
    <Modal className={p.className} onClose={_onClose} open={true}>
      <Modal.Header className="font-sans-semisold">
        {t<string>("Sign in")}
      </Modal.Header>
      <Modal.Content>
        <Card.Group>
          <Card fluid>
            <Card.Content>
              <Card.Header content={"Account"} />
              <Input fluid onChange={_onAccountChange} />
            </Card.Content>
          </Card>
        </Card.Group>
        <Card.Group>
          <Card fluid>
            <Card.Content>
              <Card.Header content={"Private Key"} />
              <Input fluid onChange={_onPrivateKeyChange} />
            </Card.Content>
          </Card>
        </Card.Group>
      </Modal.Content>
      <Modal.Actions>
        <Btn content={"Input"} onClick={_onSubmit} />
        <Btn content={"Cancel"} onClick={_onCloseInputKey} />
      </Modal.Actions>
    </Modal>
  );
}

export default React.memo(styled(LoginFormModal)`
  width: 36.3rem !important;

  .header {
    height: 3.93rem;
    font-size: 1.3rem !important;
    padding: 0 1.14rem !important;
    font-weight: 600 !important;
    line-height: 3.93rem !important;
  }

  .close.icon {
    top: 0.5rem;
    right: 0.6rem;
    color: #666666;
  }

  .content {
    padding: 1rem !important;

    input {
      border: 0.07rem solid #cccccc !important;
      border-radius: 0.57rem !important;
    }

    .btns {
      padding-top: 2.3rem;

      button {
        width: calc(50% - 0.5rem) !important;
        margin: unset;
      }

      button:first-child {
        margin-right: 1rem;
      }
    }
  }
`);
