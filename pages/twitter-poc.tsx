import React, { useCallback, useContext, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Segment } from "semantic-ui-react";
import styled from "styled-components";
import Script from 'next/script'
import SideLayout from "../components/SideLayout";
import User from "../components/User";

export interface Props {
  className?: string
}

function Index(props: Props) {
  const { className } = props
  const { t } = useTranslation()

  // Note: Current shareFileUrl need to be tweaked to correctly disply twitter card
  // const sharedFileUrl = 'https://files.decoo.cloud/files/receive/?cid=QmV91s7ByB7UKhyBBGbvt3GXaaMs7mr84UZZsPX4QrMTKG&options=%7B%22name%22:%22Sprint%20C1%E9%9C%80%E6%B1%82%E6%80%BB%E7%BB%93%2012-10.docx%22,%22encrypted%22:false,%22gateway%22:%22https://gw.crustapps.net%22,%22fromAccount%22:%220x7c04b1223e620d5f8bed5c664c23f9417d5c21c5%22,%22fromWallet%22:%22metamask-Polygon%22,%22from%22:%22%22,%22isDir%22:false%7D';
  const sharedFileUrl = 'https://files.decoo.cloud/files/receive?cid=QmV91s7ByB7UKhyBBGbvt3GXaaMs7mr84UZZsPX4QrMTKG&options=%7B%22name%22:%22Sprint%20C1%E9%9C%80%E6%B1%82%E6%80%BB%E7%BB%93%2012-10.docx%22,%22encrypted%22:false,%22gateway%22:%22https://gw.crustapps.net%22,%22fromAccount%22:%220x7c04b1223e620d5f8bed5c664c23f9417d5c21c5%22,%22fromWallet%22:%22metamask-Polygon%22,%22from%22:%22%22,%22isDir%22:false%7D';

  return <SideLayout path={'/twitter-poc'}>
    <Segment basic className={className}>
      <User />
      <Segment basic className="mcontent">
        <Segment basic className={"mcard"}>
          <div className="title font-sans-semibold">
            {t('Tweet with Web Intent')}
          </div>
          <div className="text font-sans-regular">
            <span className="bold-text font-sans-semibold">Ref: </span>
            <a target={'_blank'} rel="noreferrer" href="https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview">https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview</a>
          </div>
          <div className={'btns'}>
            <a target={"_blank"} rel="noreferrer" href={`https://twitter.com/intent/tweet?text=Welcome%20to%20Crust%20Files&hashtags=metaverse,crust&url=${sharedFileUrl}`}>Quick Tweet</a>
          </div>
        </Segment>

        <Segment basic className={"mcard"}>
          <div className="title font-sans-semibold">
            {t('Tweet with Tweet Button')}
          </div>
          <div className="text font-sans-regular">
            <span className="bold-text font-sans-semibold">Ref: </span>
            <a target={'_blank'} rel="noreferrer" href="https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview">https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview</a>
          </div>
          <div className={'btns'}>
            <a className={"twitter-share-button"}
              href="https://twitter.com/intent/tweet?text=Welcome%20to%20Crust%20Files&hashtags=metaverse,crust&url=https://files.crustapps.net"
              data-size="large">
              Tweet
            </a>
          </div>
        </Segment>

      </Segment>
    </Segment>
    <Script src="https://platform.twitter.com/widgets.js" strategy="afterInteractive" />
  </SideLayout>
}

export default React.memo<Props>(styled(Index)`
  padding: unset !important;

  .mcontent {
    margin: unset !important;
    padding: 0 0 3rem 0 !important;
    overflow: auto;
  }
  .mcard {
    padding: 1.71rem !important;
    box-shadow: 0 0.71rem 1.71rem 0 rgba(0, 0, 0, 0.06) !important;
    border-radius: 1.14rem !important;
    border: 0.07rem solid #EEEEEE !important;
    margin: 2.21rem 2.29rem 0 2.39rem !important;
  
    .title {
      font-size: 1.3rem !important;
      font-weight: 600;
      color: var(--main-color);
      padding-bottom: 1.14rem;
      .cru-fo {
        margin-right: 0.8rem;
      }
    }

    .text {
      font-size: 1rem;
      color: var(--secend-color);
      line-height: 1.57rem;
    }
    .icon {
      margin-left: 1rem;
      font-size: 1.428571rem;
      position: relative;
      top: 3px;
      cursor: pointer;
    }
    .bold-text {
      color: var(--main-color);
    }
    
    a {
      text-decoration: underline;
      line-height: 1.2rem;
      cursor: pointer;
    }

    .btns {
      margin-top: 1.7rem;
    }
  }
`)
