import { useReducer, useContext, createContext } from 'react'

const CounterStateContext = createContext()
const CounterDispatchContext = createContext()

const initialState = {
  loading: true,

  isDisplayPaneVisible: false,
  isFontPaneVisible: false,
  isLarivaarEnabled: false,
  isLarivaarAssistEnabled: false,

  isDarkModeActive: false,
  isCenterAligned: false,
  isUnicodeActive: true,

  isSplitViewEnabled: false,

  isEngTransliterationActive: false,
  isHindiTransliterationActive: false,
  isShahmukhiTransliterationActive: false,

  isPunjabiTranslationActive: false,
  isEngTranslationActive: false,
  isSpanishTranslationActive: false,

  selectedFontFamily: 'gurmukhi_heavy',
  selectedFontSize: '36px'
}

const getUserPreferences = () => {
  const loading = false

  if (localStorage.getItem('UserPreferenceSet') === 'true') {
    const isEngTransliterationActive = localStorage.getItem('isEngTransliterationActive') === 'true' ? true : false
    const isHindiTransliterationActive = localStorage.getItem('isHindiTransliterationActive') === 'true' ? true : false
    const isShahmukhiTransliterationActive = localStorage.getItem('isShahmukhiTransliterationActive') === 'true' ? true : false

    const isUnicode = localStorage.getItem('isUnicode ') === 'true' ? true : false

    const isPunjabiTranslationActive = localStorage.getItem('isPunjabiTranslationActive ') === 'true' ? true : false
    const isEnglishTranslationActive = localStorage.getItem('isEnglishTranslationActive ') === 'true' ? true : false
    const isSpanishTranslationActive = localStorage.getItem('isSpanishTranslationActive') === 'true' ? true : false

    const selectedFontSize = localStorage.getItem('selectedFontSize') || initialState.selectedFontSize
    const selectedFontFamily = localStorage.getItem('selectedFontFamily') || initialState.selectedFontFamily

    const isDarkModeActive = localStorage.getItem('isDarkModeActive') === 'true' ? true : false
    const isCenterAligned = localStorage.getItem('isCenterAligned') === 'true' ? true : false

    const isLarivaarEnabled = localStorage.getItem('isLarivaarEnabled') === 'true' ? true : false
    const isLarivaarAssistEnabled = localStorage.getItem('isLarivaarAssistEnabled') === 'true' ? true : false
    const isSplitViewEnabled = localStorage.getItem('isSplitViewEnabled') === 'true' ? true : false

    return {
      loading, isDarkModeActive, isCenterAligned, isLarivaarEnabled, isLarivaarAssistEnabled, isSplitViewEnabled, isEngTransliterationActive, isHindiTransliterationActive, isShahmukhiTransliterationActive, isPunjabiTranslationActive, isEnglishTranslationActive, isSpanishTranslationActive, selectedFontSize, selectedFontFamily, isUnicode
    }
  }

  return { ...initialState, loading }

}

const reducer = (state, action) => {
  let s = { ...state }
  switch (action.type) {
    case 'LOADED':
      return getUserPreferences()

    case 'RESET_DISPLAY_SETTINGS':
      localStorage.removeItem('UserPreferenceSet')
      s = initialState
      s.loading = false
      s.isDisplayPaneVisible = true
      s.isFontPaneVisible = state.isFontPaneVisible
      s.selectedFontFamily = state.selectedFontFamily
      s.selectedFontSize = state.selectedFontSize
      return s

    case 'TOGGLE_DISPLAY_OPTIONS':
      s.isDisplayPaneVisible = !s.isDisplayPaneVisible
      break
    case 'TOGGLE_FONT_OPTIONS':
      s.isFontPaneVisible = !s.isFontPaneVisible
      break

    case 'TOGGLE_TRANSLITERATE_ENG':
      localStorage.setItem('isEngTransliterationActive', !s.isEngTransliterationActive)
      s.isEngTransliterationActive = !s.isEngTransliterationActive
      break
    case 'TOGGLE_TRANSLITERATE_HINDI':
      localStorage.setItem('isHindiTransliterationActive', !s.isHindiTransliterationActive)
      s.isHindiTransliterationActive = !s.isHindiTransliterationActive
      break
    case 'TOGGLE_TRANSLITERATE_SHAHMUKHI':
      localStorage.setItem('isShahmukhiTransliterationActive', !s.isShahmukhiTransliterationActive)
      s.isShahmukhiTransliterationActive = !s.isShahmukhiTransliterationActive
      break

    case 'TOGGLE_TRANSLATE_PUNJABI':
      localStorage.setItem('isPunjabiTranslationActive', !s.isPunjabiTranslationActive)
      s.isPunjabiTranslationActive = !s.isPunjabiTranslationActive
      break
    case 'TOGGLE_TRANSLATE_ENG':
      localStorage.setItem('isEngTranslationActive', !s.isEngTranslationActive)
      s.isEngTranslationActive = !s.isEngTranslationActive
      break
    case 'TOGGLE_TRANSLATE_SPANISH':
      localStorage.setItem('isSpanishTranslationActive', !s.isSpanishTranslationActive)
      s.isSpanishTranslationActive = !s.isSpanishTranslationActive
      break

    case 'TOGGLE_DARK_MODE':
      localStorage.setItem('isDarkModeActive', !s.isDarkModeActive)
      s.isDarkModeActive = !s.isDarkModeActive
      break
    case 'TOGGLE_CENTER_ALIGNED':
      localStorage.setItem('isCenterAligned', !s.isCenterAligned)
      s.isCenterAligned = !s.isCenterAligned
      break

    case 'TOGGLE_LARIVAAR':
      localStorage.setItem('isLarivaarEnabled', !s.isLarivaarEnabled)
      s.isLarivaarEnabled = !s.isLarivaarEnabled
      break
    case 'TOGGLE_LARIVAAR_ASSIST':
      localStorage.setItem('isLarivaarAssistEnabled', !s.isLarivaarAssistEnabled)
      s.isLarivaarAssistEnabled = !s.isLarivaarAssistEnabled
      break

    case 'TOGGLE_SPLIT_VIEW':
      localStorage.setItem('isSplitViewEnabled', !s.isSplitViewEnabled)
      s.isSplitViewEnabled = !s.isSplitViewEnabled
      break
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }

  localStorage.setItem('UserPreferenceSet', 'true')

  return s
}

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CounterDispatchContext.Provider value={dispatch}>
      <CounterStateContext.Provider value={state}>
        {children}
      </CounterStateContext.Provider>
    </CounterDispatchContext.Provider>
  )
}

export const useGlobalState = () => useContext(CounterStateContext)
export const useDispatchCount = () => useContext(CounterDispatchContext)