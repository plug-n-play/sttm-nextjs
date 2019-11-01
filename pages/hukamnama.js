import React from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const BreadCrumb = ({ dateObj }) => {
  const months = [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];
  const month = months[dateObj.month];

  return (
    <h4 className="breadcrumb">
      <a href="/">Home</a> ›{' '}
      <span className="breadcrumbLast">
        Daily Hukamnama from Sri Harmandir Sahib, Amritsar {month}{' '}
        {dateObj.date}, {dateObj.year}
      </span>
    </h4>
  );
};

const ShabadControllers = () => (
  <>
    <div id="shabad-controllers">
      <a className="display-options-toggle shabad-controller-toggle active">
        <svg width="1em" height="1em" viewBox="0 0 640 512">
          <path d="M592 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h245.1v32h-160c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-160v-32H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h512v288z"></path>
        </svg>
        <span className="display-options-label">Display</span>
      </a>
      <a className="font-options-toggle shabad-controller-toggle active">
        <svg width="1em" height="1em" viewBox="0 0 576 512">
          <path d="M576 80v40c0 6.6-5.4 12-12 12H160v8c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-8H12c-6.6 0-12-5.4-12-12V80c0-6.6 5.4-12 12-12h84v-8c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v8h404c6.6 0 12 5.4 12 12zm-12 148h-84v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h404v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0 160H288v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h212v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h276c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12z"></path>
        </svg>
        <span className="display-options-label">Font</span>
      </a>
      <a className="shabad-controller-toggle active">
        <span className="custom-fa">ੳਅ</span>
        <span className="display-options-label">Larivaar</span>
      </a>
      <a className="shabad-controller-toggle active">
        <span className="custom-fa custom-fa-assist">ੳ</span>
        <span className="display-options-label">Assist</span>
      </a>
    </div>

    <div className="display-options">
      <div className="display-option-type">
        <div className="display-option-header">Transliteration</div>
        <div className="display-option-content">
          <a className="display-option-toggle active">english</a>
        </div>
      </div>
      <div className="display-option-type">
        <div className="display-option-header">Translation</div>
        <div className="display-option-content">
          <a className="display-option-toggle ">punjabi</a>
          <a className="display-option-toggle active">english</a>
          <a className="display-option-toggle ">spanish</a>
        </div>
      </div>
      <div className="display-option-type">
        <div className="display-option-header">Split View</div>
        <div className="display-option-content">
          <a className="display-option-toggle ">Enable</a>
        </div>
      </div>
      <div className="display-option-type">
        <div className="display-option-header">Dark Mode</div>
        <div className="display-option-content">
          <a className="display-option-toggle ">Enable</a>
        </div>
      </div>
      <div className="display-option-type">
        <div className="display-option-header">Center-Align</div>
        <div className="display-option-content">
          <a
            className="display-option-toggle
                           active"
          >
            Disable
          </a>
        </div>
      </div>
      <div className="display-option-type">
        <div className="display-option-header">Reset Display</div>
        <div className="display-option-content">
          <a className="display-option-toggle">Reset</a>
        </div>
      </div>
    </div>

    <div className="font-options">
      <div className="font-option-type">
        <div className="font-option-header">Font</div>
        <select>
          <option value="anmol_lipi">Anmol Lipi</option>
          <option value="anmol_bold">Anmol Lipi Bold</option>
          <option value="notosans">Noto Sans</option>
          <option value="notosans_bold">Noto Sans Bold</option>
          <option value="gurmukhi_normal">Gurbani Akhar</option>
          <option value="gurmukhi_heavy">Gurbani Akhar Heavy</option>
          <option value="gurmukhi_thick">Gurbani Akhar Thick</option>
          <option value="unicode_font">Unicode</option>
        </select>
      </div>
      <div className="font-option-type">
        <div className="font-option-header">Font Size</div>
        <small className="gurbani-font">A</small>
        <input type="range" min="5" max="50" value="20" />
        <big className="gurbani-font">A</big>
      </div>
      <div className="display-option-type">
        <div className="font-option-header">Reset Font</div>
        <div className="display-option-content">
          <a className="display-option-toggle">Reset</a>
        </div>
      </div>
    </div>
  </>
);

const ShareMenu = () => (
  <div id="share-menu">
    <ul className="share-buttons">
      <li>
        <a title="Open Share Dialog">
          <svg width="1em" height="1em" viewBox="0 0 448 512">
            <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path>
          </svg>
          <span className="sr-only">Open Share Dialog</span>
        </a>
      </li>

      <li>
        <button>
          <svg width="1em" height="1em" viewBox="0 0 448 512">
            <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
          </svg>
        </button>
      </li>

      <li className="show-on-desktop">
        <button>
          <svg height="1em" width="1em" viewBox="0 0 640 512">
            <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
          </svg>
        </button>
      </li>

      <li>
        <a id="copy-short-url" className="copy">
          <input
            className="short-url-input"
            type="text"
            readOnly=""
            //  TODO:
            // value="http://sttm.co/h"
          />
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 448 512"
            className="short-url-icon"
          >
            <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
          </svg>
          <span className="sr-only">Copy URL</span>
        </a>
      </li>
    </ul>
  </div>
);

const MetaData = ({ info }) => {
  return (
    <div id="metadata">
      <div className="meta">
        <h4>
          <a href="/shabad?id=2408">Open Shabad</a>
        </h4>
        <h4 className="gurbani-font">
          {info.raag &&
            info.raag.gurmukhi &&
            info.raag.gurmukhi !== 'null' &&
            info.raag.gurmukhi}{' '}
          {info.writer && info.writer.gurmukhi} {' - '}
          {info.source.gurmukhi} {/* TODO: Add Link */}
          <a
            href={`/ang?ang=${info.source.pageNo}&source=${info.source.sourceId}`}
          >
            {info.source.sourceId == 'G' ? 'AMg' : 'pMnw'} {info.source.pageNo}
          </a>
        </h4>
        <h4>
          {info.raag &&
            info.raag.english &&
            info.raag.english !== 'null' &&
            info.raag.english}
          {info.writer && info.writer.english}
          {info.source.english} - {/* TODO: Add Link */}
          <a
            href={`/ang?ang=${info.source.pageNo}&source=${info.source.sourceId}`}
          >
            {info.source.sourceId == 'G' ? 'Ang' : 'Pannaa'}{' '}
            {info.source.pageNo}
          </a>
        </h4>
      </div>
    </div>
  );
};

const SocialShare = () => (
  <div className="share">
    <a
      role="button"
      aria-label="Go to shabad"
      title="Go to shabad"
      href="/shabad?id=2408&amp;highlight=27559"
    >
      <svg width="1em" height="1em" viewBox="0 0 448 512">
        <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
      </svg>
    </a>
    <a
      className="copy"
      role="button"
      aria-label="Copy to clipboard"
      title="Copy to clipboard"
    >
      <svg width="1em" height="1em" viewBox="0 0 448 512">
        <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
      </svg>
    </a>
    <a
      className="facebook"
      role="button"
      aria-label="Share on facebook"
      title="Share on facebook"
    >
      <svg width="1em" height="1em" viewBox="0 0 264 512">
        <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
      </svg>
    </a>
  </div>
);

const LarivaarAssist = ({ verse, fontIdentifierClass }) => {
  const arr = verse.split(' ');
  return (
    <div className={`larivaar ${fontIdentifierClass}`}>
      {arr.map((i, index) => {
        return index % 2 === 1 ? (
          <span className="alter-color" key={index}>
            {i}
          </span>
        ) : (
          <span key={index}>{i}</span>
        );
      })}
      <div className="alter-color"></div>
      <style jsx>{`
        .alter-color {
          color: rgb(243, 156, 29);
        }
      `}</style>
    </div>
  );
};

// TODO: Move this
const defaultSettings = {
  showLarivaar: true,
  showLarivaarAssist: true,
  showUnicode: true,
  centerAlign: true,
  darkMode: false,
  splitView: true,
  selectedFontFamily: 'gurmukhi_normal',
  selectedFontSize: '2em',
  showTransliteration: true,
  translation: {
    showPunjabi: false,
    showEnglish: false,
    showSpansish: false
  }
};

const Verse = ({ verseDetails }) => {
  const showUnicode = defaultSettings.showUnicode;
  const showLarivaar = defaultSettings.showLarivaar;
  const showLarivaarAssist = defaultSettings.showLarivaarAssist;
  const selectedFontSize = defaultSettings.selectedFontSize;
  return (
    <div className="gurmukhi gurbani-display gurbani-font">
      {/**
       * Larivaar
       *    Unicode
       *        1. with Larivaar assist
       *        2. without Larivaar assist
       *    Non-Unicode
       *        3. with Larivaar assist
       *        4. without Larivaar assist
       */}

      {// #1
      showLarivaar && showUnicode && showLarivaarAssist && (
        <LarivaarAssist
          verse={verseDetails.verse.unicode}
          fontIdentifierClass="unicode"
        />
      )}

      {// #2
      showLarivaar && showUnicode && !showLarivaarAssist && (
        <div className="larivaar unicode">{verseDetails.larivaar.unicode}</div>
      )}

      {// #3
      showLarivaar && !showUnicode && !showLarivaarAssist && (
        <div class="larivaar gurlipi">{verseDetails.larivaar.gurmukhi}</div>
      )}

      {// #4
      showLarivaar && !showUnicode && showLarivaarAssist && (
        <LarivaarAssist
          verse={verseDetails.verse.gurmukhi}
          fontIdentifierClass="unicode"
        />
      )}

      {/*
       * Non-Larivaar
       *    5. Unicode
       *    6. Non-Unicode
       */}

      {// #5
      !showLarivaar && showUnicode && (
        <div className="unicode">{verseDetails.verse.unicode}</div>
      )}
      {// #6
      !showLarivaar && !showUnicode && (
        <div className="gurmukhi gurlipi">{verseDetails.verse.gurmukhi}</div>
      )}

      <style jsx>{`
        div {
          font-family: 'unicode_font';
          font-size: ${selectedFontSize};
        }
        .gurmukhi {
          font-family: ${defaultSettings.selectedFontFamily};
        }
      `}</style>
    </div>
  );
};

const VerseInfo = ({ verseDetails }) => (
  <>
    <div className="transliteration english">
      {verseDetails.transliteration.english}
    </div>
    <blockquote className="translation english">
      {verseDetails.translation.en.bdb}
    </blockquote>
    <blockquote className="translation punjabi gurbani-font">
      <div className="unicode"></div>
    </blockquote>
    <blockquote className="translation spanish">
      {verseDetails.translation.es.sn}
    </blockquote>
    <blockquote className="translation punjabi gurbani-font">
      <div className="unicode">{verseDetails.translation.pu.ss.unicode}</div>
    </blockquote>
  </>
);

const Shabad = ({ verses }) => {
  const i = verses[0];

  return (
    <>
      {verses.map(i => (
        <div id="shabad" className="shabad display" key={i.verseId}>
          <div className="shabad-container">
            <div className="shabad-content  center-align">
              <div className="mixed-view-baani">
                <div id="line-27559" className="line">
                  <Verse verseDetails={i} />
                  <VerseInfo verseDetails={i} />
                  {/* TODO: Test share functionality */}
                  <SocialShare />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Hukamnama = json => (
  <Layout>
    <div className="row" id="content-root">
      <BreadCrumb dateObj={json.date.gregorian} />
      {/* <div>Next stars: {json.stargazers_count}</div> */}
      <div id="controls-wrapper" className="no-select ">
        <ShareMenu />
        <ShabadControllers />
      </div>
      <MetaData info={json.shabads[0].shabadInfo} />
      <Shabad verses={json.shabads[0].verses} />
      <div id="progressbar-root">
        <div
          className="progressbar"
          // TODO: fix following
          // styleName="transform: scaleX(0) translateZ(0px); transform-origin: 0px 0px;"
        ></div>
      </div>
    </div>
  </Layout>
);

Hukamnama.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.banidb.com/v2/hukamnamas/today');
  const json = await res.json();
  console.log(json);
  return json;
};

export default Hukamnama;
