import React from 'react';
import Layout from '../components/Layout';

const tempHtml = {
  __html: `
    <div class="row" id="content-root">
      <h4 class="breadcrumb"><a href="/">Home</a> › <span class="breadcrumbLast">Shabad</span></h4>
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
                          <input class="short-url-input" type="text" readonly="" value="http://sttm.co/s/2892/">
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
              <a href="/shabad?id=2891">
                  <svg viewBox="0 0 320 512" width="1em" height="1em" class="chevron " style="transform: rotate(0deg);">
                      <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                  </svg>
              </a>
          </div>
          <div class="meta">
              <h4 class="gurbani-font">rwgu sUhI - sRI gurU gRMQ swihb jI - <a href="/ang?ang=769&amp;source=G">AMg 769</a></h4>
              <h4>Raag Soohee - Sri Guru Granth Sahib Ji - <a href="/ang?ang=769&amp;source=G">Ang 769</a></h4>
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
                      <div id="line-32810" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> sUhI </span><span class=""> mhlw </span><span class=""> 3 </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">soohee mahalaa teejaa ||</div>
                          <blockquote class="translation english">Soohee, Third Mehla:</blockquote>
                          <div class="share">
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
                      <div id="line-32811" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> jug </span><span class=""> cwry </span><span class=""> Dn </span><span class=""> jy </span><span class=""> BvY </span><span class=""> ibnu </span><span class=""> siqgur </span><span class=""> sohwgu </span><span class=""> n </span><span class=""> hoeI </span><span class=""> rwm </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">jug chaare dhan je bhavai bin satigur sohaag na hoiee raam ||</div>
                          <blockquote class="translation english">The soul-bride may wander throughout the four ages, but still, without the True Guru, she will not find her True Husband Lord.</blockquote>
                          <div class="share">
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
                      <div id="line-32812" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> inhclu </span><span class=""> rwju </span><span class=""> sdw </span><span class=""> hir </span><span class=""> kyrw </span><span class=""> iqsu </span><span class=""> ibnu </span><span class=""> Avru </span><span class=""> n </span><span class=""> koeI </span><span class=""> rwm </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">nihachal raaj sadhaa har keraa tis bin avar na koiee raam ||</div>
                          <blockquote class="translation english">The Kingdom of the Lord is permanent, and forever unchanging; there is no other than Him.</blockquote>
                          <div class="share">
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
                      <div id="line-32813" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> iqsu </span><span class=""> ibnu </span><span class=""> Avru </span><span class=""> n </span><span class=""> koeI </span><span class=""> sdw </span><span class=""> scu </span><span class=""> soeI </span><span class=""> gurmuiK </span><span class=""> eyko </span><span class=""> jwixAw </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">tis bin avar na koiee sadhaa sach soiee guramukh eko jaaniaa ||</div>
                          <blockquote class="translation english">There is no other than Him - He is True forever; the Gurmukh knows the One Lord.</blockquote>
                          <div class="share">
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
                      <div id="line-32814" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> Dn </span><span class=""> ipr </span><span class=""> mylwvw </span><span class=""> hoAw </span><span class=""> gurmqI </span><span class=""> mnu </span><span class=""> mwinAw </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">dhan pir melaavaa hoaa guramatee man maaniaa ||</div>
                          <blockquote class="translation english">That soul-bride, whose mind accepts the Guru's Teachings, meets her Husband Lord.</blockquote>
                          <div class="share">
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
                      <div id="line-32815" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> siqguru </span><span class=""> imilAw </span><span class=""> qw </span><span class=""> hir </span><span class=""> pwieAw </span><span class=""> ibnu </span><span class=""> hir </span><span class=""> nwvY </span><span class=""> mukiq </span><span class=""> n </span><span class=""> hoeI </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">satigur miliaa taa har paiaa bin har naavai mukat na hoiee ||</div>
                          <blockquote class="translation english">Meeting the True Guru, she finds the Lord; without the Lord's Name, there is no liberation.</blockquote>
                          <div class="share">
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
                      <div id="line-32816" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> nwnk </span><span class=""> kwmix </span><span class=""> kMqY </span><span class=""> rwvy </span><span class=""> min </span><span class=""> mwinAY </span><span class=""> suKu </span><span class=""> hoeI </span><span class=""> ]1] </span></div>
                          </div>
                          <div class="transliteration english">naanak kaaman ka(n)tai raave man maaniaai sukh hoiee ||1||</div>
                          <blockquote class="translation english">O Nanak, the soul-bride ravishes and enjoys her Husband Lord; her mind accepts Him, and she finds peace. ||1||</blockquote>
                          <div class="share">
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
                      <div id="line-32817" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> siqguru </span><span class=""> syiv </span><span class=""> Dn </span><span class=""> bwlVIey </span><span class=""> hir </span><span class=""> vru </span><span class=""> pwvih </span><span class=""> soeI </span><span class=""> rwm </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">satigur sev dhan baalaRe'e har var paaveh soiee raam ||</div>
                          <blockquote class="translation english">Serve the True Guru, O young and innocent bride; thus you shall obtain the Lord as your Husband.</blockquote>
                          <div class="share">
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
                      <div id="line-32818" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> sdw </span><span class=""> hovih </span><span class=""> sohwgxI </span><span class=""> iPir </span><span class=""> mYlw </span><span class=""> vysu </span><span class=""> n </span><span class=""> hoeI </span><span class=""> rwm </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">sadhaa hoveh sohaaganee fir mailaa ves na hoiee raam ||</div>
                          <blockquote class="translation english">You shall be the virtuous and happy bride of the True Lord forever; and you shall never again wear soiled clothes.</blockquote>
                          <div class="share">
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
                      <div id="line-32819" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> iPir </span><span class=""> mYlw </span><span class=""> vysu </span><span class=""> n </span><span class=""> hoeI </span><span class=""> gurmuiK </span><span class=""> bUJY </span><span class=""> koeI </span><span class=""> haumY </span><span class=""> mwir </span><span class=""> pCwixAw </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">fir mailaa ves na hoiee guramukh boojhai koiee haumai maar pachhaaniaa ||</div>
                          <blockquote class="translation english">Your clothes shall never again be soiled; how rare are those few, who, as Gurmukh, recognize this, and conquer their ego.</blockquote>
                          <div class="share">
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
                      <div id="line-32820" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> krxI </span><span class=""> kwr </span><span class=""> kmwvY </span><span class=""> sbid </span><span class=""> smwvY </span><span class=""> AMqir </span><span class=""> eyko </span><span class=""> jwixAw </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">karanee kaar kamaavai sabadh samaavai a(n)tar eko jaaniaa ||</div>
                          <blockquote class="translation english">So make your practice the practice of good deeds; merge into the Word of the Shabad, and deep within, come to know the One Lord.</blockquote>
                          <div class="share">
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
                      <div id="line-32821" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> gurmuiK </span><span class=""> pRBu </span><span class=""> rwvy </span><span class=""> idnu </span><span class=""> rwqI </span><span class=""> Awpxw </span><span class=""> swcI </span><span class=""> soBw </span><span class=""> hoeI </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">guramukh prabh raave dhin raatee aapanaa saachee sobhaa hoiee ||</div>
                          <blockquote class="translation english">The Gurmukh enjoys God, day and night, and so obtains true glory.</blockquote>
                          <div class="share">
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
                      <div id="line-32822" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> nwnk </span><span class=""> kwmix </span><span class=""> ipru </span><span class=""> rwvy </span><span class=""> Awpxw </span><span class=""> riv </span><span class=""> rihAw </span><span class=""> pRBu </span><span class=""> soeI </span><span class=""> ]2] </span></div>
                          </div>
                          <div class="transliteration english">naanak kaaman pir raave aapanaa rav rahiaa prabh soiee ||2||</div>
                          <blockquote class="translation english">O Nanak, the soul-bride enjoys and ravishes her Beloved; God is pervading and permeating everywhere. ||2||</blockquote>
                          <div class="share">
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
                      <div id="line-32823" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> gur </span><span class=""> kI </span><span class=""> kwr </span><span class=""> kry </span><span class=""> Dn </span><span class=""> bwlVIey </span><span class=""> hir </span><span class=""> vru </span><span class=""> dyie </span><span class=""> imlwey </span><span class=""> rwm </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">gur kee kaar kare dhan baalaRe'e har var dhei milaae raam ||</div>
                          <blockquote class="translation english">Serve the Guru, O young and innocent soul-bride, and he will lead to you meet your Husband Lord.</blockquote>
                          <div class="share">
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
                      <div id="line-32824" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> hir </span><span class=""> kY </span><span class=""> rMig </span><span class=""> rqI </span><span class=""> hY </span><span class=""> kwmix </span><span class=""> imil </span><span class=""> pRIqm </span><span class=""> suKu </span><span class=""> pwey </span><span class=""> rwm </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">har kai ra(n)g ratee hai kaaman mil preetam sukh paae raam ||</div>
                          <blockquote class="translation english">The bride is imbued with the Love of her Lord; meeting with her Beloved, she finds peace.</blockquote>
                          <div class="share">
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
                      <div id="line-32825" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> imil </span><span class=""> pRIqm </span><span class=""> suKu </span><span class=""> pwey </span><span class=""> sic </span><span class=""> smwey </span><span class=""> scu </span><span class=""> vrqY </span><span class=""> sB </span><span class=""> QweI </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">mil preetam sukh paae sach samaae sach varatai sabh thaiee ||</div>
                          <blockquote class="translation english">Meeting her Beloved, she finds peace, and merges in the True Lord; the True Lord is pervading everywhere.</blockquote>
                          <div class="share">
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
                      <div id="line-32826" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> scw </span><span class=""> sIgwru </span><span class=""> kry </span><span class=""> idnu </span><span class=""> rwqI </span><span class=""> kwmix </span><span class=""> sic </span><span class=""> smweI </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">sachaa seegaar kare dhin raatee kaaman sach samaiee ||</div>
                          <blockquote class="translation english">The bride makes Truth her decorations, day and night, and remains absorbed in the True Lord.</blockquote>
                          <div class="share">
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
                      <div id="line-32827" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> hir </span><span class=""> suKdwqw </span><span class=""> sbid </span><span class=""> pCwqw </span><span class=""> kwmix </span><span class=""> lieAw </span><span class=""> kMiT </span><span class=""> lwey </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">har sukhadhaataa sabadh pachhaataa kaaman liaa ka(n)tt laae ||</div>
                          <blockquote class="translation english">The Lord, the Giver of peace, is realized through His Shabad; He hugs His bride close in His embrace.</blockquote>
                          <div class="share">
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
                      <div id="line-32828" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> nwnk </span><span class=""> mhlI </span><span class=""> mhlu </span><span class=""> pCwxY </span><span class=""> gurmqI </span><span class=""> hir </span><span class=""> pwey </span><span class=""> ]3] </span></div>
                          </div>
                          <div class="transliteration english">naanak mahalee mahal pachhaanai guramatee har paae ||3||</div>
                          <blockquote class="translation english">O Nanak, the bride obtains the Mansion of His Presence; through the Guru's Teachings, she finds her Lord. ||3||</blockquote>
                          <div class="share">
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
                      <div id="line-32829" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> sw </span><span class=""> Dn </span><span class=""> bwlI </span><span class=""> Duir </span><span class=""> mylI </span><span class=""> myrY </span><span class=""> pRiB </span><span class=""> Awip </span><span class=""> imlweI </span><span class=""> rwm </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">saa dhan baalee dhur melee merai prabh aap milaiee raam ||</div>
                          <blockquote class="translation english">The Primal Lord, my God, has united His young and innocent bride with Himself.</blockquote>
                          <div class="share">
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
                      <div id="line-32830" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> gurmqI </span><span class=""> Git </span><span class=""> cwnxu </span><span class=""> hoAw </span><span class=""> pRBu </span><span class=""> riv </span><span class=""> rihAw </span><span class=""> sB </span><span class=""> QweI </span><span class=""> rwm </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">guramatee ghaT chaanan hoaa prabh rav rahiaa sabh thaiee raam ||</div>
                          <blockquote class="translation english">Through the Guru's Teachings, her heart is illumined and enlightened; God is permeating and pervading everywhere.</blockquote>
                          <div class="share">
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
                      <div id="line-32831" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> pRBu </span><span class=""> riv </span><span class=""> rihAw </span><span class=""> sB </span><span class=""> QweI </span><span class=""> mMin </span><span class=""> vsweI </span><span class=""> pUrib </span><span class=""> iliKAw </span><span class=""> pwieAw </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">prabh rav rahiaa sabh thaiee ma(n)n vasaiee poorab likhiaa paiaa ||</div>
                          <blockquote class="translation english">God is permeating and pervading everywhere; He dwells in her mind, and she realizes her pre-ordained destiny.</blockquote>
                          <div class="share">
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
                      <div id="line-32832" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> syj </span><span class=""> suKwlI </span><span class=""> myry </span><span class=""> pRB </span><span class=""> BwxI </span><span class=""> scu </span><span class=""> sIgwru </span><span class=""> bxwieAw </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">sej sukhaalee mere prabh bhaanee sach seegaar banaiaa ||</div>
                          <blockquote class="translation english">On his cozy bed, she is pleasing to my God; she fashions her decorations of Truth.</blockquote>
                          <div class="share">
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
                      <div id="line-32833" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> kwmix </span><span class=""> inrml </span><span class=""> haumY </span><span class=""> mlu </span><span class=""> KoeI </span><span class=""> gurmiq </span><span class=""> sic </span><span class=""> smweI </span><span class=""> ] </span></div>
                          </div>
                          <div class="transliteration english">kaaman niramal haumai mal khoiee guramat sach samaiee ||</div>
                          <blockquote class="translation english">The bride is immaculate and pure; she washes away the filth of egotism, and through the Guru's Teachings, she merges in the True Lord.</blockquote>
                          <div class="share">
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
                      <div id="line-32834" class="line">
                          <div class="gurmukhi gurbani-display gurbani-font " style="font-size: 2em; font-family: gurmukhi_heavy;">
                              <div class=" gurlipi"><span class=""> nwnk </span><span class=""> Awip </span><span class=""> imlweI </span><span class=""> krqY </span><span class=""> nwmu </span><span class=""> nvY </span><span class=""> iniD </span><span class=""> pweI </span><span class=""> ]4]3]4] </span></div>
                          </div>
                          <div class="transliteration english">naanak aap milaiee karatai naam navai nidh paiee ||4||3||4||</div>
                          <blockquote class="translation english">O Nanak, the Creator Lord blends her into Himself, and she obtains the nine treasure of the Naam. ||4||3||4||</blockquote>
                          <div class="share">
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
                      <a href="/shabad?id=2891">
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
              <div class="relatedShabadWrapper">
                  <h3>Related Shabads</h3>
                  <div class="relatedShabadContainer">
                      <a class="relatedShabad" href="/shabad?id=2894" target="_blank" data-shabad-id="2894">
                          <div>
                              <h3 class="relatedShabadTitle gurbani-font"><span class=""> jy </span><span class=""> loVih </span><span class=""> vru </span><span class=""> bwlVIey </span><span class=""> qw </span><span class=""> gur </span><span class=""> crxI </span><span class=""> icqu </span><span class=""> lwey </span><span class=""> rwm </span><span class=""> ] </span></h3>
                              <p class="transliteration">je loReh var baalaRe'e taa gur charanee chit laae raam ||</p>
                              <blockquote class="translation english ">If you long for your Husband Lord, O young and innocent bride, then focus your consciousness on the Guru's feet.</blockquote>
                          </div>
                          <p><span class="gurbani-font">sRI gurU gRMQ swihb jI 771</span><br>Sri Guru Granth Sahib Ji 771</p>
                      </a>
                      <a class="relatedShabad" href="/shabad?id=5478" target="_blank" data-shabad-id="5478">
                          <div>
                              <h3 class="relatedShabadTitle gurbani-font"><span class=""> sdw </span><span class=""> scy </span><span class=""> ky </span><span class=""> gux </span><span class=""> gwvW </span><span class=""> BweI </span><span class=""> sdw </span><span class=""> scy </span><span class=""> kY </span><span class=""> sMig </span><span class=""> rhwau </span><span class=""> ] </span></h3>
                              <p class="transliteration">sadhaa sache ke gun gaavaa(n) bhaiee sadhaa sache kai sa(n)g rahaau ||</p>
                              <blockquote class="translation english ">I sing forever the Glorious Praises of the True Lord; I shall remain with the True One forever.</blockquote>
                          </div>
                          <p><span class="gurbani-font">sRI gurU gRMQ swihb jI 1419</span><br>Sri Guru Granth Sahib Ji 1419</p>
                      </a>
                      <a class="relatedShabad" href="/shabad?id=1647" target="_blank" data-shabad-id="1647">
                          <div>
                              <h3 class="relatedShabadTitle gurbani-font"><span class=""> hm </span><span class=""> Gry </span><span class=""> swcw </span><span class=""> soihlw </span><span class=""> swcY </span><span class=""> sbid </span><span class=""> suhwieAw </span><span class=""> rwm </span><span class=""> ] </span></h3>
                              <p class="transliteration">ham ghare saachaa sohilaa saachai sabadh suhaiaa raam ||</p>
                              <blockquote class="translation english ">Within my home, the true wedding songs of rejoicing are sung; my home is adorned with the True Word of the Shabad.</blockquote>
                          </div>
                          <p><span class="gurbani-font">sRI gurU gRMQ swihb jI 439</span><br>Sri Guru Granth Sahib Ji 439</p>
                      </a>
                      <a class="relatedShabad" href="/shabad?id=3155" target="_blank" data-shabad-id="3155">
                          <div>
                              <h3 class="relatedShabadTitle gurbani-font"><span class=""> myrw </span><span class=""> hir </span><span class=""> pRBu </span><span class=""> syjY </span><span class=""> AwieAw </span><span class=""> mnu </span><span class=""> suiK </span><span class=""> smwxw </span><span class=""> rwm </span><span class=""> ] </span></h3>
                              <p class="transliteration">meraa har prabh sejai aaiaa man sukh samaanaa raam ||</p>
                              <blockquote class="translation english ">My Lord God has come to my bed, and my mind is merged with the Lord.</blockquote>
                          </div>
                          <p><span class="gurbani-font">sRI gurU gRMQ swihb jI 844</span><br>Sri Guru Granth Sahib Ji 844</p>
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

const RandomShabad = () => {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={tempHtml}></div>
    </Layout>
  );
};

export default RandomShabad;
