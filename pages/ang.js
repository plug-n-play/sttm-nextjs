import React from 'react';
import Layout from '../components/Layout';

const tempHtml = {
  __html: `
  <div class="row" id="content-root">
    <h4 class="breadcrumb"><a href="/">Home</a> › <span class="breadcrumbLast">Ang</span></h4>
    <div id="controls-wrapper" class="no-select ">
        <div id="share-menu">
            <ul class="share-buttons">
                <li>
                    <a title="Open Share Dialog">
                        <svg width="1em" height="1em" viewBox="0 0 448 512">
                            <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path>
                        </svg>
                        <span class="sr-only">Open Share Dialog</span>
                    </a>
                <li>
                    <button>
                        <svg width="1em" height="1em" viewBox="0 0 448 512">
                            <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
                        </svg>
                    </button>
                </li>
                <li class="show-on-desktop">
                    <button>
                        <svg height="1em" width="1em" viewBox="0 0 640 512">
                            <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
                        </svg>
                    </button>
                </li>
                <li>
                    <a id="copy-short-url" class="copy">
                        <input class="short-url-input" type="text" readonly="" value="http://sttm.co/a/14">
                        <svg width="1em" height="1em" viewBox="0 0 448 512" class="short-url-icon">
                            <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                        </svg>
                        <span class="sr-only">Copy URL</span>
                    </a>
                </li>
                </li>
            </ul>
        </div>
        <div id="shabad-controllers">
            <a class="display-options-toggle shabad-controller-toggle ">
                <svg width="1em" height="1em" viewBox="0 0 640 512">
                    <path d="M592 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h245.1v32h-160c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-160v-32H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h512v288z"></path>
                </svg>
                <span>Display</span>
            </a>
            <a class="font-options-toggle shabad-controller-toggle ">
                <svg width="1em" height="1em" viewBox="0 0 576 512">
                    <path d="M576 80v40c0 6.6-5.4 12-12 12H160v8c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-8H12c-6.6 0-12-5.4-12-12V80c0-6.6 5.4-12 12-12h84v-8c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v8h404c6.6 0 12 5.4 12 12zm-12 148h-84v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h404v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0 160H288v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h212v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h276c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12z"></path>
                </svg>
                <span>Font</span>
            </a>
            <a class="shabad-controller-toggle "><span class="custom-fa">ੳਅ</span><span>Larivaar</span></a>
        </div>
    </div>
    <div id="metadata">
        <div class="shabad-nav left">
            <a href="/ang?source=G&amp;ang=13">
                <svg viewBox="0 0 320 512" width="1em" height="1em" class="chevron " style="transform: rotate(0deg);">
                    <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                </svg>
            </a>
        </div>
        <div class="meta">
            <h4 class="gurbani-font">sRI gurU gRMQ swihb jI - <a href="/ang?ang=14&amp;source=G">AMg 14</a></h4>
            <h4>Sri Guru Granth Sahib Ji - <a href="/ang?ang=14&amp;source=G">Ang 14</a></h4>
        </div>
        <div class="shabad-nav right">
            <a role="button" aria-label="next">
                <svg viewBox="0 0 320 512" width="1em" height="1em" class="chevron " style="transform: rotate(180deg);">
                    <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                </svg>
            </a>
        </div>
    </div>
    <div id="shabad" class="shabad display">
        <div class="shabad-container">
            <div class="shabad-content ">
                <div class="mixed-view-baani">
                    <div id="line-588" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> &lt;&gt; </span><span class=""> siqgur </span><span class=""> pRswid </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">ikOankaar satigur prasaadh ||</div>
                        <blockquote class="translation english">One Universal Creator God. By The Grace Of The True Guru:</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=588">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-589" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> rwgu </span><span class=""> isrIrwgu </span><span class=""> mhlw </span><span class=""> pihlw </span><span class=""> 1 </span><span class=""> Gru </span><span class=""> 1 </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">raag sireeraag mahalaa pahilaa 1 ghar pehilaa ||</div>
                        <blockquote class="translation english">Raag Siree Raag, First Mehla, First House:</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=589">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-590" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> moqI </span><span class=""> q </span><span class=""> mMdr </span><span class=""> aUsrih </span><span class=""> rqnI </span><span class=""> q </span><span class=""> hoih </span><span class=""> jVwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">motee ta ma(n)dhar uoosareh ratanee ta hoh jaRaau ||</div>
                        <blockquote class="translation english">If I had a palace made of pearls, inlaid with jewels,</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=590">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-591" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> ksqUir </span><span class=""> kuMgU </span><span class=""> Agir </span><span class=""> cMdin </span><span class=""> lIip </span><span class=""> AwvY </span><span class=""> cwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">kasatoor ku(n)goo agar cha(n)dhan leep aavai chaau ||</div>
                        <blockquote class="translation english">scented with musk, saffron and sandalwood, a sheer delight to behold</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=591">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-592" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> mqu </span><span class=""> dyiK </span><span class=""> BUlw </span><span class=""> vIsrY </span><span class=""> qyrw </span><span class=""> iciq </span><span class=""> n </span><span class=""> AwvY </span><span class=""> nwau </span><span class=""> ]1] </span></div>
                        </div>
                        <div class="transliteration english">mat dhekh bhoolaa veesarai teraa chit na aavai naau ||1||</div>
                        <blockquote class="translation english">-seeing this, I might go astray and forget You, and Your Name would not enter into my mind. ||1||</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=592">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-593" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> hir </span><span class=""> ibnu </span><span class=""> jIau </span><span class=""> jil </span><span class=""> bil </span><span class=""> jwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">har bin jeeau jal bal jaau ||</div>
                        <blockquote class="translation english">Without the Lord, my soul is scorched and burnt.</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=593">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-594" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> mY </span><span class=""> Awpxw </span><span class=""> guru </span><span class=""> pUiC </span><span class=""> dyiKAw </span><span class=""> Avru </span><span class=""> nwhI </span><span class=""> Qwau </span><span class=""> ]1] </span><span class=""> rhwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">mai aapanaa gur poochh dhekhiaa avar naahee thaau ||1|| rahaau ||</div>
                        <blockquote class="translation english">I consulted my Guru, and now I see that there is no other place at all. ||1||Pause||</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=594">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-595" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> DrqI </span><span class=""> q </span><span class=""> hIry </span><span class=""> lwl </span><span class=""> jVqI </span><span class=""> pliG </span><span class=""> lwl </span><span class=""> jVwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">dharatee ta heere laal jaRatee palagh laal jaRaau ||</div>
                        <blockquote class="translation english">If the floor of this palace was a mosaic of diamonds and rubies, and if my bed was encased with rubies,</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=595">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-596" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> mohxI </span><span class=""> muiK </span><span class=""> mxI </span><span class=""> sohY </span><span class=""> kry </span><span class=""> rMig </span><span class=""> pswau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">mohanee mukh manee sohai kare ra(n)g pasaau ||</div>
                        <blockquote class="translation english">and if heavenly beauties, their faces adorned with emeralds, tried to entice me with sensual gestures of love</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=596">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-597" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> mqu </span><span class=""> dyiK </span><span class=""> BUlw </span><span class=""> vIsrY </span><span class=""> qyrw </span><span class=""> iciq </span><span class=""> n </span><span class=""> AwvY </span><span class=""> nwau </span><span class=""> ]2] </span></div>
                        </div>
                        <div class="transliteration english">mat dhekh bhoolaa veesarai teraa chit na aavai naau ||2||</div>
                        <blockquote class="translation english">-seeing these, I might go astray and forget You, and Your Name would not enter into my mind. ||2||</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=597">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-598" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> isDu </span><span class=""> hovw </span><span class=""> isiD </span><span class=""> lweI </span><span class=""> iriD </span><span class=""> AwKw </span><span class=""> Awau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">sidh hovaa sidh laiee ridh aakhaa aau ||</div>
                        <blockquote class="translation english">If I were to become a Siddha, and work miracles, summon wealth</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=598">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-599" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> gupqu </span><span class=""> prgtu </span><span class=""> hoie </span><span class=""> bYsw </span><span class=""> loku </span><span class=""> rwKY </span><span class=""> Bwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">gupat paragaT hoi baisaa lok raakhai bhaau ||</div>
                        <blockquote class="translation english">and become invisible and visible at will, so that people would hold me in awe</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=599">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-600" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> mqu </span><span class=""> dyiK </span><span class=""> BUlw </span><span class=""> vIsrY </span><span class=""> qyrw </span><span class=""> iciq </span><span class=""> n </span><span class=""> AwvY </span><span class=""> nwau </span><span class=""> ]3] </span></div>
                        </div>
                        <div class="transliteration english">mat dhekh bhoolaa veesarai teraa chit na aavai naau ||3||</div>
                        <blockquote class="translation english">-seeing these, I might go astray and forget You, and Your Name would not enter into my mind. ||3||</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=600">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-601" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> sulqwnu </span><span class=""> hovw </span><span class=""> myil </span><span class=""> lskr </span><span class=""> qKiq </span><span class=""> rwKw </span><span class=""> pwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">sulataan hovaa mel lasakar takhat raakhaa paau ||</div>
                        <blockquote class="translation english">If I were to become an emperor and raise a huge army, and sit on a throne,</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=601">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-602" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> hukmu </span><span class=""> hwslu </span><span class=""> krI </span><span class=""> bYTw </span><span class=""> nwnkw </span><span class=""> sB </span><span class=""> vwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">hukam haasal karee baittaa naanakaa sabh vaau ||</div>
                        <blockquote class="translation english">issuing commands and collecting taxes-O Nanak, all of this could pass away like a puff of wind.</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=602">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-603" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> mqu </span><span class=""> dyiK </span><span class=""> BUlw </span><span class=""> vIsrY </span><span class=""> qyrw </span><span class=""> iciq </span><span class=""> n </span><span class=""> AwvY </span><span class=""> nwau </span><span class=""> ]4]1] </span></div>
                        </div>
                        <div class="transliteration english">mat dhekh bhoolaa veesarai teraa chit na aavai naau ||4||1||</div>
                        <blockquote class="translation english">Seeing these, I might go astray and forget You, and Your Name would not enter into my mind. ||4||1||</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=54&amp;highlight=603">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-604" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> isrIrwgu </span><span class=""> mhlw </span><span class=""> 1 </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">sireeraag mahalaa pehilaa ||</div>
                        <blockquote class="translation english">Siree Raag, First Mehla:</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=55&amp;highlight=604">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-605" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> koit </span><span class=""> kotI </span><span class=""> myrI </span><span class=""> Awrjw </span><span class=""> pvxu </span><span class=""> pIAxu </span><span class=""> AipAwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">koT koTee meree aarajaa pavan peean apiaau ||</div>
                        <blockquote class="translation english">If I could live for millions and millions of years, and if the air was my food and drink,</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=55&amp;highlight=605">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-606" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> cMdu </span><span class=""> sUrju </span><span class=""> duie </span><span class=""> guPY </span><span class=""> n </span><span class=""> dyKw </span><span class=""> supnY </span><span class=""> saux </span><span class=""> n </span><span class=""> Qwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">cha(n)dh sooraj dhui gufai na dhekhaa supanai saun na thaau ||</div>
                        <blockquote class="translation english">and if I lived in a cave and never saw either the sun or the moon, and if I never slept, even in dreams</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=55&amp;highlight=606">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-607" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> BI </span><span class=""> qyrI </span><span class=""> kImiq </span><span class=""> nw </span><span class=""> pvY </span><span class=""> hau </span><span class=""> kyvfu </span><span class=""> AwKw </span><span class=""> nwau </span><span class=""> ]1] </span></div>
                        </div>
                        <div class="transliteration english">bhee teree keemat naa pavai hau kevadd aakhaa naau ||1||</div>
                        <blockquote class="translation english">-even so, I could not estimate Your Value. How can I describe the Greatness of Your Name? ||1||</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=55&amp;highlight=607">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-608" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> swcw </span><span class=""> inrMkwru </span><span class=""> inj </span><span class=""> Qwie </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">saachaa nira(n)kaar nij thai ||</div>
                        <blockquote class="translation english">The True Lord, the Formless One, is Himself in His Own Place.</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=55&amp;highlight=608">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-609" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> suix </span><span class=""> suix </span><span class=""> AwKxu </span><span class=""> AwKxw </span><span class=""> jy </span><span class=""> BwvY </span><span class=""> kry </span><span class=""> qmwie </span><span class=""> ]1] </span><span class=""> rhwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">sun sun aakhan aakhanaa je bhaavai kare tamai ||1|| rahaau ||</div>
                        <blockquote class="translation english">I have heard, over and over again, and so I tell the tale; as it pleases You, Lord, please instill within me the yearning for You. ||1||Pause||</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=55&amp;highlight=609">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-610" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> kusw </span><span class=""> ktIAw </span><span class=""> vwr </span><span class=""> vwr </span><span class=""> pIsix </span><span class=""> pIsw </span><span class=""> pwie </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">kusaa kaTeeaa vaar vaar peesan peesaa pai ||</div>
                        <blockquote class="translation english">If I was slashed and cut into pieces, over and over again, and put into the mill and ground into flour,</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=55&amp;highlight=610">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-611" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> AgI </span><span class=""> syqI </span><span class=""> jwlIAw </span><span class=""> Bsm </span><span class=""> syqI </span><span class=""> ril </span><span class=""> jwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">agee setee jaaleeaa bhasam setee ral jaau ||</div>
                        <blockquote class="translation english">burnt by fire and mixed with ashes</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=55&amp;highlight=611">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-612" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> BI </span><span class=""> qyrI </span><span class=""> kImiq </span><span class=""> nw </span><span class=""> pvY </span><span class=""> hau </span><span class=""> kyvfu </span><span class=""> AwKw </span><span class=""> nwau </span><span class=""> ]2] </span></div>
                        </div>
                        <div class="transliteration english">bhee teree keemat naa pavai hau kevadd aakhaa naau ||2||</div>
                        <blockquote class="translation english">-even then, I could not estimate Your Value. How can I describe the Greatness of Your Name? ||2||</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=55&amp;highlight=612">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-613" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> pMKI </span><span class=""> hoie </span><span class=""> kY </span><span class=""> jy </span><span class=""> Bvw </span><span class=""> sY </span><span class=""> AsmwnI </span><span class=""> jwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">pa(n)khee hoi kai je bhavaa sai asamaanee jaau ||</div>
                        <blockquote class="translation english">If I was a bird, soaring and flying through hundreds of heavens,</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=55&amp;highlight=613">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-614" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> ndrI </span><span class=""> iksY </span><span class=""> n </span><span class=""> AwvaU </span><span class=""> nw </span><span class=""> ikCu </span><span class=""> pIAw </span><span class=""> n </span><span class=""> Kwau </span><span class=""> ] </span></div>
                        </div>
                        <div class="transliteration english">nadharee kisai na aavuoo naa kichh peeaa na khaau ||</div>
                        <blockquote class="translation english">and if I was invisible, neither eating nor drinking anything</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=55&amp;highlight=614">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="line-615" class="line">
                        <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                            <div class=" gurlipi"><span class=""> BI </span><span class=""> qyrI </span><span class=""> kImiq </span><span class=""> nw </span><span class=""> pvY </span><span class=""> hau </span><span class=""> kyvfu </span><span class=""> AwKw </span><span class=""> nwau </span><span class=""> ]3] </span></div>
                        </div>
                        <div class="transliteration english">bhee teree keemat naa pavai hau kevadd aakhaa naau ||3||</div>
                        <blockquote class="translation english">-even so, I could not estimate Your Value. How can I describe the Greatness of Your Name? ||3||</blockquote>
                        <div class="share">
                            <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=55&amp;highlight=615">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                                </svg>
                            </a>
                            <a class="copy" role="button" aria-label="Copy to clipboard" title="Copy to clipboard">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z"></path>
                                </svg>
                            </a>
                            <a class="facebook" role="button" aria-label="Share on facebook" title="Share on facebook">
                                <svg width="1em" height="1em" viewBox="0 0 264 512">
                                    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pagination">
                <div class="shabad-nav left">
                    <a href="/ang?source=G&amp;ang=13">
                        <svg viewBox="0 0 320 512" width="1em" height="1em" class="chevron " style="transform: rotate(0deg);">
                            <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                        </svg>
                        <span>Previous</span>
                    </a>
                </div>
                <div class="shabad-nav right">
                    <a role="button" aria-label="next">
                        <span>Next</span>
                        <svg viewBox="0 0 320 512" width="1em" height="1em" class="chevron " style="transform: rotate(180deg);">
                            <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div id="progressbar-root">
        <div class="progressbar" style="transform: scaleX(0) translateZ(0px); transform-origin: 0px 0px;"></div>
    </div>
  </div>
  `
};

const Ang = () => {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={tempHtml}></div>
    </Layout>
  );
};

export default Ang;
