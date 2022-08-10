import { useCallback, useEffect, useLayoutEffect, useState } from "react"
import Header from "../components/Header"
import Home from "../components/Home"
import { TemplateMain } from "../styles"

export default function App({children}) {

  return (
    <TemplateMain>

      <Header />
      <Home/>
    </TemplateMain>
  )
}

