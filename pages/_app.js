import App from 'next/app'
import { CounterProvider } from '../components/AppContext'

class STTM extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <CounterProvider>
        <Component {...pageProps} />
      </CounterProvider>
    )
  }
}

export default STTM
