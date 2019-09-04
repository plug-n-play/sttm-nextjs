import React from 'react';

const Baani = () => {
  return (
    <div className="row" id="content-root">
      <h4 className="breadcrumb">
        <a href="/">Home</a> › <span className="breadcrumbLast">Shabad</span>
      </h4>
      <div id="shabad" className="shabad display">
        <div className="shabad-container">
          <div className="shabad-content ">
            <div className="mixed-view-baani">
              <div id="line-47511" className="line">
                <div className="gurmukhi gurbani-display gurbani-font ">
                  <div className=" gurlipi">
                    <span className=""> quKwrI </span>
                    <span className=""> mhlw </span>
                    <span className=""> 1 </span>
                    <span className=""> ] </span>
                  </div>
                </div>
                <blockquote className="translation english">
                  Tukhaari, First Mehla:
                </blockquote>
                <div className="share">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baani;
