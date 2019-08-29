import Link from 'next/link'

const Header = (props) => {
  return (
    <>
      <div className={ !props.homepage ? "top-bar no-select" : ""}>
        <div className="top-bar-wrapper row">
          <div className="top-bar-title"><a href="/"></a></div>

          <div id="responsive-menu">
            <div className="top-bar-left">
              {
                !props.homepage &&
                <form action="/search" id="top-bar-search-form" className="search-form">
                  <ul className="menu">
                    <li><input name="type" className="hidden" id="search-type-value" hidden="" /></li>
                    <li><input name="source" className="hidden" id="search-source-value" hidden="" /></li>
                    {/* TODO: Check removal of value */}
                    {/* <li><input name="source" className="hidden" id="search-source-value" hidden="" value="all" /></li> */}
                    <li>
                      <div id="search-container">
                        <input type="search" id="search" autoComplete="off" autoCapitalize="none" autoCorrect="off" spellCheck="false" required="" name="q" className="" placeholder="jo mange thakur apne te soi" title="Enter 4 words minimum." pattern="(\w+\W+){3,}\w+\W*" />
                        <button type="button" className="clear-search-toggle">
                          <svg width=".9em" height=".9em" viewBox="0 0 384 512">
                            <path d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"></path>
                          </svg>
                        </button>
                        <button className="gurmukhi-keyboard-toggle " type="button">
                          <svg width="1em" height="1em" viewBox="0 0 576 512">
                            <path d="M528 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm8 336c0 4.411-3.589 8-8 8H48c-4.411 0-8-3.589-8-8V112c0-4.411 3.589-8 8-8h480c4.411 0 8 3.589 8 8v288zM170 270v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-336 82v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm384 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zM122 188v-28c0-6.627-5.373-12-12-12H82c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm-98 158v-16c0-6.627-5.373-12-12-12H180c-6.627 0-12 5.373-12 12v16c0 6.627 5.373 12 12 12h216c6.627 0 12-5.373 12-12z"></path>
                          </svg>
                        </button>
                        <button type="submit">
                          <svg fill="#fff" width=".9em" height=".9em" viewBox="0 0 512 512">
                            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                          </svg>
                        </button>
                        <div className="gurmukhi-keyboard gurbani-font ">
                          <div className="page" id="gurmukhi-keyboard-page-1">
                            <div className="keyboard-row">
                              <div className="keyboard-row-set">
                                <button data-value="a" type="button">a</button>
                                <button data-value="A" type="button">A</button>
                                <button data-value="e" type="button">e</button>
                                <button data-value="s" type="button">s</button>
                                <button data-value="h" type="button">h</button>
                              </div>
                              <div className="keyboard-row-set">
                                <button data-value="k" type="button">k</button>
                                <button data-value="K" type="button">K</button>
                                <button data-value="g" type="button">g</button>
                                <button data-value="G" type="button">G</button>
                                <button data-value="|" type="button">|</button>
                              </div>
                            </div>

                            <div className="keyboard-row">
                              <div className="keyboard-row-set">
                                <button data-value="c" type="button">c</button>
                                <button data-value="C" type="button">C</button>
                                <button data-value="j" type="button">j</button>
                                <button data-value="J" type="button">J</button>
                                <button data-value="\" type="button">\</button>
                              </div>

                              <div className="keyboard-row-set">
                                <button data-value="t" type="button">t</button>
                                <button data-value="T" type="button">T</button>
                                <button data-value="f" type="button">f</button>
                                <button data-value="F" type="button">F</button>
                                <button data-value="x" type="button">x</button>
                              </div>
                            </div>
                          <div className="keyboard-row">
                            <div className="keyboard-row-set"><button data-value="q" type="button">q</button><button data-value="Q" type="button">Q</button><button data-value="d" type="button">d</button><button data-value="D" type="button">D</button><button data-value="n" type="button">n</button></div>
                            <div className="keyboard-row-set"><button data-value="p" type="button">p</button><button data-value="P" type="button">P</button><button data-value="b" type="button">b</button><button data-value="B" type="button">B</button><button data-value="m" type="button">m</button></div>
                          </div>
                          <div className="keyboard-row">
                            <div className="keyboard-row-set">
                              <button data-value="X" type="button">X</button>
                              <button data-value="r" type="button">r</button>
                              <button data-value="l" type="button">l</button>
                              <button data-value="v" type="button">v</button>
                              <button data-value="V" type="button">V</button>
                            </div>
                            <div className="keyboard-row-set">
                              <button type="button">&nbsp;</button>
                              <button type="button" data-action="page-1" title="Page 1" className="active">1</button>
                              <button type="button" data-action="page-2" title="Page 2" className="">2</button>
                              <button type="button" data-action="bksp" title="Backspace">
                                <svg width="1em" height="1em" viewBox="0 0 448 512">
                                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path>
                                </svg>
                              </button>
                              <a href="/help#Web-how-to-type-gurmukhi-with-keyboard"><button type="button">?</button></a>
                            </div>
                          </div>
                        </div>

                        </div>
                      </div>
                    </li>
                  </ul>
                </form>
              }
            </div>

            <div className="top-bar-right">
              <span role="button" aria-label="Open menu" className="button" id="open-mobile-menu">
                <svg viewBox="0 0 448 512" width="1em" height="1em">
                  <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                </svg>
              </span>
              <ul className="menu header-menu">
                <li>
                  <Link href="/hukamnama">
                    <a>Hukamnama</a>
                  </Link>

                </li>
                <li><a href="/random-shabad">Random Shabad</a></li>
                <li><a href="/sundar-gutka">Sundar Gutka</a></li>
                <li><a href="/indices">Index</a></li>
                <li className="close"><span role="button" aria-label="Close menu">Close</span></li>
              </ul>
            </div>
          </div>

          {
            !props.homepage &&
            <div id="search-options">
              <select name="type" id="search-type">
                <option value="0">First letter each word from start (Gurmukhi)</option>
                <option value="1">First letter each word anywhere (Gurmukhi)</option>
                <option value="2">Full Word (Gurmukhi)</option>
                <option value="3">Full Word Translation (English)</option>
                <option value="4">Romanized Gurmukhi (English)</option>
                <option value="5">Ang</option>
              </select>
              <select name="source">
                <option value="all">All Sources</option>
                <option value="G">Guru Granth Sahib Ji</option>
                <option value="D">Dasam Granth Sahib</option>
                <option value="B">Bhai Gurdas Ji Vaaran</option>
                <option value="A">Amrit Keertan</option>
                <option value="S">Bhai Gurdas Singh Ji Vaaran</option>
                <option value="N">Bhai Nand Lal Ji Vaaran</option>
                <option value="R">Rehatnamas &amp; Panthic Sources</option>
              </select>
            </div>
          }

        </div>
      </div>
    </>
  )
}

export default Header