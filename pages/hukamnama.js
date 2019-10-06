import React from 'react';
import Layout from '../components/Layout';

const tempHtml = {
  __html: `
    <div class="row" id="content-root">
      <h4 class="breadcrumb"><a href="/">Home</a> › <span class="breadcrumbLast">Daily Hukamnama from Sri Harmandir Sahib, Amritsar Oct 6, 2019</span></h4>
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
                          <input class="short-url-input" type="text" readonly="" value="http://sttm.co/h">
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
              <a href="/hukamnama?date=2019/10/5">
                  <svg viewBox="0 0 320 512" width="1em" height="1em" class="chevron " style="transform: rotate(0deg);">
                      <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                  </svg>
              </a>
          </div>
          <div class="meta">
              <h4><a href="/shabad?id=2685">Open Shabad</a></h4>
              <h4 class="gurbani-font">rwgu jYqsrI - sRI gurU gRMQ swihb jI - <a href="/ang?ang=706&amp;source=G">AMg 706</a></h4>
              <h4>Raag Jaithsree - Sri Guru Granth Sahib Ji - <a href="/ang?ang=706&amp;source=G">Ang 706</a></h4>
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
                      <div id="line-30321" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> slok </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">salok ||</div>
                          <blockquote class="translation english">Shalok:</blockquote>
                          <div class="share">
                              <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=2685&amp;highlight=30321">
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
                      <div id="line-30322" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> mn </span><span class=""> ieCw </span><span class=""> dwn </span><span class=""> krxM </span><span class=""> srbqR </span><span class=""> Awsw </span><span class=""> pUrnh </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">man ichhaa dhaan karana(n) sarabatr aasaa pooraneh ||</div>
                          <blockquote class="translation english">He grants our hearts' desires, and fulfills all our hopes.</blockquote>
                          <div class="share">
                              <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=2685&amp;highlight=30322">
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
                      <div id="line-30323" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> KMfxM </span><span class=""> kil </span><span class=""> klysh </span><span class=""> pRB </span><span class=""> ismir </span><span class=""> nwnk </span><span class=""> nh </span><span class=""> dUrxh </span><span class=""> ]1] </span></div>
                          </div>
                          <div class="transliteration english">kha(n)ddana(n) kal kaleseh prabh simar naanak neh dhooraneh ||1||</div>
                          <blockquote class="translation english">He destroys pain and suffering; remember God in meditation, O Nanak - He is not far away. ||1||</blockquote>
                          <div class="share">
                              <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=2685&amp;highlight=30323">
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
                      <div id="line-30324" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> hiB </span><span class=""> rMg </span><span class=""> mwxih </span><span class=""> ijsu </span><span class=""> sMig </span><span class=""> qY </span><span class=""> isau </span><span class=""> lweIAY </span><span class=""> nyhu </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">habh ra(n)g maaneh jis sa(n)g tai siau laieeaai neh ||</div>
                          <blockquote class="translation english">Love Him, with whom you enjoy all pleasures.</blockquote>
                          <div class="share">
                              <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=2685&amp;highlight=30324">
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
                      <div id="line-30325" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> so </span><span class=""> shu </span><span class=""> ibMd </span><span class=""> n </span><span class=""> ivsrau </span><span class=""> nwnk </span><span class=""> ijin </span><span class=""> suMdru </span><span class=""> ricAw </span><span class=""> dyhu </span><span class=""> ]2] </span></div>
                          </div>
                          <div class="transliteration english">so sahu bi(n)dh na visarau naanak jin su(n)dhar rachiaa dheh ||2||</div>
                          <blockquote class="translation english">Do not forget that Lord, even for an instant; O Nanak, He fashioned this beautiful body. ||2||</blockquote>
                          <div class="share">
                              <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=2685&amp;highlight=30325">
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
                      <div id="line-30326" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> pauVI </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">pauRee ||</div>
                          <blockquote class="translation english">Pauree:</blockquote>
                          <div class="share">
                              <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=2686&amp;highlight=30326">
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
                      <div id="line-30327" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> jIau </span><span class=""> pRwn </span><span class=""> qnu </span><span class=""> Dnu </span><span class=""> dIAw </span><span class=""> dIny </span><span class=""> rs </span><span class=""> Bog </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">jeeau praan tan dhan dheeaa dheene ras bhog ||</div>
                          <blockquote class="translation english">He gave you your soul, breath of life, body and wealth; He gave you pleasures to enjoy.</blockquote>
                          <div class="share">
                              <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=2686&amp;highlight=30327">
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
                      <div id="line-30328" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> igRh </span><span class=""> mMdr </span><span class=""> rQ </span><span class=""> Asu </span><span class=""> dIey </span><span class=""> ric </span><span class=""> Bly </span><span class=""> sMjog </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">gireh ma(n)dhar rath as dhe'ee rach bhale sa(n)jog ||</div>
                          <blockquote class="translation english">He gave you households, mansions, chariots and horses; He ordained your good destiny.</blockquote>
                          <div class="share">
                              <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=2686&amp;highlight=30328">
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
                      <div id="line-30329" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> suq </span><span class=""> binqw </span><span class=""> swjn </span><span class=""> syvk </span><span class=""> dIey </span><span class=""> pRB </span><span class=""> dyvn </span><span class=""> jog </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">sut banitaa saajan sevak dhe'ee prabh dhevan jog ||</div>
                          <blockquote class="translation english">He gave you your children, spouse, friends and servants; God is the all-powerful Great Giver.</blockquote>
                          <div class="share">
                              <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=2686&amp;highlight=30329">
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
                      <div id="line-30330" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> hir </span><span class=""> ismrq </span><span class=""> qnu </span><span class=""> mnu </span><span class=""> hirAw </span><span class=""> lih </span><span class=""> jwih </span><span class=""> ivjog </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">har simarat tan man hariaa leh jaeh vijog ||</div>
                          <blockquote class="translation english">Meditating in remembrance on the Lord, the body and mind are rejuvenated, and sorrow departs.</blockquote>
                          <div class="share">
                              <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=2686&amp;highlight=30330">
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
                      <div id="line-30331" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> swDsMig </span><span class=""> hir </span><span class=""> gux </span><span class=""> rmhu </span><span class=""> ibnsy </span><span class=""> siB </span><span class=""> rog </span><span class=""> ]3] </span></div>
                          </div>
                          <div class="transliteration english">saadhasa(n)g har gun ramahu binase sabh rog ||3||</div>
                          <blockquote class="translation english">In the Saadh Sangat, the Company of the Holy, chant the Praises of the Lord, and all your sickness shall vanish. ||3||</blockquote>
                          <div class="share">
                              <a role="button" aria-label="Go to shabad" title="Go to shabad" href="/shabad?id=2686&amp;highlight=30331">
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
                      <a href="/hukamnama?date=2019/10/5">
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

const Hukamnama = () => {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={tempHtml}></div>
    </Layout>
  );
};

export default Hukamnama;
