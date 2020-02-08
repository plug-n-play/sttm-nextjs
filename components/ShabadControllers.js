import { useGlobalState, useDispatchCount } from './AppContext'

const OptionsHeader = () => {
  const dispatch = useDispatchCount()
  const { isDisplayPaneVisible, isFontPaneVisible, isLarivaarEnabled, isLarivaarAssistEnabled } = useGlobalState()

  const clsDisplayOptionStatus = isDisplayPaneVisible ? 'active' : ''
  const clsFontOptionStatus = isFontPaneVisible ? 'active' : ''
  const clsLarivaarOptionStatus = isLarivaarEnabled ? 'active' : ''
  const clsLarivaarAssistOptionStatus = isLarivaarAssistEnabled ? 'active' : ''

  return (
    <div id="shabad-controllers">
      <a className={`display-options-toggle shabad-controller-toggle ${clsDisplayOptionStatus}`} onClick={() => dispatch({ type: 'TOGGLE_DISPLAY_OPTIONS' })} >
        <svg width="1em" height="1em" viewBox="0 0 640 512">
          <path d="M592 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h245.1v32h-160c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-160v-32H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h512v288z"></path>
        </svg>
        <span className="display-options-label">Display</span>
      </a>
      <a className={`font-options-toggle shabad-controller-toggle ${clsFontOptionStatus}`} onClick={() => dispatch({ type: 'TOGGLE_FONT_OPTIONS' })} >
        <svg width="1em" height="1em" viewBox="0 0 576 512">
          <path d="M576 80v40c0 6.6-5.4 12-12 12H160v8c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24v-8H12c-6.6 0-12-5.4-12-12V80c0-6.6 5.4-12 12-12h84v-8c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24v8h404c6.6 0 12 5.4 12 12zm-12 148h-84v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h404v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12zm0 160H288v-8c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v8H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h212v8c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-8h276c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12z"></path>
        </svg>
        <span className="display-options-label">Font</span>
      </a>
      <a className={`shabad-controller-toggle ${clsLarivaarOptionStatus}`}
        onClick={() => dispatch({ type: 'TOGGLE_LARIVAAR' })}
      >
        <span className="custom-fa">ੳਅ</span>
        <span className="display-options-label">Larivaar</span>
      </a>

      {clsLarivaarOptionStatus && <a className={`shabad-controller-toggle ${clsLarivaarAssistOptionStatus}`} onClick={() => dispatch({ type: 'TOGGLE_LARIVAAR_ASSIST' })} >
        <span className="custom-fa custom-fa-assist">ੳ</span>
        <span className="display-options-label">Assist</span>
      </a>}
    </div >
  )
}

/**
 *
 * <Control heading="Split View" condition={isSplitViewEnabled} onClickListener={toggleSplitView} />
 */
const Control = ({ heading, condition, onClickListener }) => {
  const cls = `display-option-toggle ${condition ? 'active' : ''}`
  const status = condition ? "Disable" : "Enable"

  return (
    <div className="display-option-type" >
      <div className="display-option-header">{heading}</div>
      <div className="display-option-content">
        <a className={cls} onClick={onClickListener}>
          {status}
        </a>
      </div>
    </div >
  )
}

const Transliteration = () => {
  const dispatch = useDispatchCount()
  const { isEngTransliterationActive, isHindiTransliterationActive, isShahmukhiTransliterationActive } = useGlobalState()

  const clsTransEng = `display-option-toggle ${isEngTransliterationActive ? 'active' : ''}`

  const clsTransHindi = `display-option-toggle ${isHindiTransliterationActive ? 'active' : ''}`

  const clsTransShahmukhi = `display-option-toggle ${isShahmukhiTransliterationActive ? 'active' : ''}`

  return (<div className="display-option-type">
    <div className="display-option-header">Transliteration</div>
    <div className="display-option-content">
      <a className={clsTransEng} onClick={() => dispatch({ type: 'TOGGLE_TRANSLITERATE_ENG' })}>english</a>
      <a className={clsTransHindi} onClick={() => dispatch({ type: 'TOGGLE_TRANSLITERATE_HINDI' })}>hindi</a>
      <a className={clsTransShahmukhi} onClick={() => dispatch({ type: 'TOGGLE_TRANSLITERATE_SHAHMUKHI' })}>shahmukhi</a>
    </div>
  </div >
  )
}

const Translation = () => {
  const dispatch = useDispatchCount()
  const { isPunjabiTranslationActive, isEngTranslationActive, isSpanishTranslationActive } = useGlobalState()

  const clsTransPunjabi = `display-option-toggle ${isPunjabiTranslationActive ? 'active' : ''}`

  const clsTransEng = `display-option-toggle ${isEngTranslationActive ? 'active' : ''}`

  const clsTransSpanish = `display-option-toggle ${isSpanishTranslationActive ? 'active' : ''}`

  return (<div className="display-option-type">
    <div className="display-option-header">Transliteration</div>
    <div className="display-option-content">

      <a className={clsTransPunjabi} onClick={() => dispatch({ type: 'TOGGLE_TRANSLATE_PUNJABI' })}>Punjabi</a>

      <a className={clsTransEng} onClick={() => dispatch({ type: 'TOGGLE_TRANSLATE_ENG' })}>English</a>

      <a className={clsTransSpanish} onClick={() => dispatch({ type: 'TOGGLE_TRANSLATE_SPANISH' })}>Spanish</a>
    </div>
  </div>)
}

const FontFaceSelect = () => {
  return (
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
  )
}

const ShabadControllers = () => {
  const { isDarkModeActive, isCenterAligned, isSplitViewEnabled, isDisplayPaneVisible, isFontPaneVisible } = useGlobalState()

  const dispatch = useDispatchCount()

  return (
    <>
      <OptionsHeader />

      {isDisplayPaneVisible &&
        <div className="display-options">
          <Transliteration />
          <Translation />

          <Control heading="Split View" condition={isSplitViewEnabled} onClickListener={() => dispatch({ type: 'TOGGLE_SPLIT_VIEW' })} />

          <Control heading="Dark Mode" condition={isDarkModeActive} onClickListener={() => dispatch({ type: 'TOGGLE_DARK_MODE' })} />

          <Control heading="Center-Align" condition={isCenterAligned} onClickListener={() => dispatch({ type: 'TOGGLE_CENTER_ALIGNED' })} />

          <div className="display-option-type">
            <div className="display-option-header">Reset Display</div>
            <div className="display-option-content">
              <a className="display-option-toggle" onClick={() => dispatch({ type: 'RESET_DISPLAY_SETTINGS' })}>Reset</a>
            </div>
          </div>
        </div>
      }

      {
        isFontPaneVisible && <div className="font-options">
          <FontFaceSelect />
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
        </div>}
    </>
  )
};

export default ShabadControllers