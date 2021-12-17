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

  return <SideLayout path={'/twitter-poc'}>
    <Segment basic className={className}>
      <User />
      <Segment basic className="mcontent">
        <Segment basic className={"mcard"}>
          <div className="title font-sans-semibold">
            {t('Directly tweet text with hashtags')}
          </div>
          <div className="text font-sans-regular">
            1. Self-customized UI <br/>
            2. No need to load twitter script
          </div>
          <div className="text font-sans-regular">
            <span className="bold-text font-sans-semibold">Ref: </span>
            <a target={'_blank'} href="https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview">https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview</a>
          </div>
          <div className={'btns'}>
            <a target={"_blank"} href="https://twitter.com/intent/tweet?text=Welcome%20to%20Crust%20Files&hashtags=metaverse,crust&url=https://files.crustapps.net">Quick Tweet</a>
          </div>
        </Segment>

        <Segment basic className={"mcard"}>
          <div className="title font-sans-semibold">
            {t('Tweet with standard Tweet Button')}
          </div>
          <div className="text font-sans-regular">
            1. With standard twitter widgets <br/>
            2. Need load twitter script
          </div>
          <div className="text font-sans-regular">
            <span className="bold-text font-sans-semibold">Ref: </span>
            <a target={'_blank'} href="https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview">https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview</a>
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
    <Script id="show-banner" strategy="afterInteractive">
      {`
        window.twttr = (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);

          t._e = [];
          t.ready = function(f) {
            t._e.push(f);
          };

          return t;
        }(document, "script", "twitter-wjs"));
      `}
    </Script>
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
