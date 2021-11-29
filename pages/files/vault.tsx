import React, { useCallback } from "react";
import { Segment } from "semantic-ui-react";
import styled from "styled-components";
import { BtnUpload } from "../../components/BtnUpload";
import FilesTable from "../../components/FilesTable";
import SideLayout from "../../components/SideLayout";
import UploadModal from "../../components/UploadModal";
import User from "../../components/User";
import { useUserCrypto } from "../../lib/crypto/useUserCrypto";
import useInputFile from "../../lib/hooks/useInputFile";
import { useContextWrapLoginUser, useFiles } from "../../lib/wallet/hooks";
import { SaveFile } from "../../lib/wallet/types";

function Vault(p: { className?: string }) {
    const user = useContextWrapLoginUser()
    const wFiles = useFiles();
    const uc = useUserCrypto()
    const wInputFile = useInputFile()

    const _onClose = () => wInputFile.setFile(undefined);

    const _onSuccess = useCallback((res: SaveFile) => {
        wInputFile.setFile(undefined)
        const filterFiles = wFiles.files.filter((f) => f.Hash !== res.Hash);

        wFiles.setFiles([res, ...filterFiles]);
    }, [wFiles]);

    return <SideLayout path={'/files/vault'}>
        <Segment basic className={p.className}>
            <User />
            <Segment basic className="contentPanel">
                <Segment basic textAlign={'center'} className={"font-sans-semibold uploadPanel"}>
                    <input
                        onChange={wInputFile._onInputFile}
                        ref={wInputFile.inputRef}
                        style={{ display: 'none' }}
                        type={'file'}
                    />
                    <div className={'upSlog'}>
                        <div className="title">Vault</div>
                        <div className="content font-sans-regular">This is your personal file vault which is 100% private, 100% secure and 100% owned by YOU. Every file will be encrypted by a locally-stored encryption key.</div>
                    </div>
                    <BtnUpload
                        onClickUpFile={wInputFile._onClickUpFile}
                        onClickUpFolder={wInputFile._onClickUpFolder}
                    />
                    {
                        wInputFile.file && <UploadModal
                            type="vault"
                            file={wInputFile.file}
                            user={user}
                            onClose={_onClose}
                            onSuccess={_onSuccess}
                            uc={uc}
                        />
                    }
                </Segment>
                <div className="line" />
                <FilesTable type="vault" files={wFiles.files} />
            </Segment>
        </Segment>
    </SideLayout>
}

export default React.memo(styled(Vault)`
  padding: unset !important;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contentPanel {
    max-width: 100rem;
    width: 100%;
    margin: unset !important;
    padding: unset !important;
  }

  .line {
    margin: 0 2.3rem;
    border-bottom: solid 1px var(--line-color) !important;
  }
  
  .uploadPanel {
    width: 100%;
    justify-content: space-between;
    margin: unset !important;
    white-space: pre-wrap;
    padding: 3.14rem 2.3rem 4.2857rem 2.3rem;
    color: var(--main-color);
    display: flex;
    align-items: flex-end;

    .upSlog {
      display: inline-block;
      cursor: default;
      padding-right: 1rem;
      max-width: 58rem;
      min-width: 24rem;
      text-align: left;
      .title {
        display: inline-block;
        font-size: 2.285714rem;
        line-height: 4.285714rem;
        border-bottom: 5px solid #A7ECC9;
      }
      .content {
        font-size: 1.7rem;
        line-height: 2.357143rem;
        white-space: pre-wrap;
        margin-top: 1.857143rem;
      }
    }
  }

`)
