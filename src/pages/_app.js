import Head from 'next/head'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ContextProvider } from '../context'
import { GlobalStyles, theme } from '../styles'
export default function ({ Component, pageProps }) {
  const [titulo, setTitulo] = useState("Zénite | página inicial")
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Head>
          <title>{titulo}</title>
        </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </ContextProvider>
    </ThemeProvider>
  )
}
