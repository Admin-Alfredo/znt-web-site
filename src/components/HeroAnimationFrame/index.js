import React, { useEffect } from 'react'
import { setAnimateClass } from '../Util/methods'
import {
  Container,
  FrameDevice,
  FrameDeviceUtilBase,
  WrapperContent
} from './styles'
export default function HeroAnimationFrame() {
  const classAnimation = [
    'device_initial-scale',
    'device-justify_desktop',
    'device-transform_laptop',
    'laptop-teclado',
    'base-util_initil-color'
  ]


  useEffect(() => {
    const frameAnime = document.getElementById('frame-animate')
    const frameUtilBase = document.getElementById('frame-util-base')
    const btnHomeMobile = document.querySelector('.button-home_mobile')
    setAnimateClass(frameAnime, 0)
      .then((classList) => {
        console.log("Animate 1: INITIAL COLOR...")
        classList.add('device_initial-color')
        frameUtilBase.classList.add('base-util_initil-color')
        return setAnimateClass(frameAnime, 1000)
      })
      .then((classList) => {
        console.log("Animate 2: INITIAL SCALE ...")
        classList.add('device_initial-scale')

        return setAnimateClass(frameAnime, 1000)
      })
      .then((classList) => {
        console.log("Animate 3: JUSTIFY DESKTOP...")
        classList.add('device-justify_desktop')
        return setAnimateClass(frameAnime, 1000)
      })
      .then((classList) => {
        console.log("Animate 4: TRANSFORM LAPTOP...")
        classList.add('device-transform_laptop')

        return setAnimateClass(frameUtilBase, 0)
      })
      .then((classList) => {
        console.log("Animate 5: ADD KEYBOARD")
        classList.add('laptop-teclado')
        return setAnimateClass(frameAnime, 3000)
      })
      .then((classList) => {
        console.log("Animate 6: TRANSFORM TABLET")
        classList.add('device-transform_tablet')
        return setAnimateClass(frameAnime, 1000)
      })
      .then((classList) => {
        console.log("Animate 7: TRANSFORM MOBILE")
        classList.add('device-transform_mobile')
      })
  }, [])
  return (
    <Container>
      <FrameDevice id="frame-animate">
        <FrameDeviceUtilBase id="frame-util-base" />
        <WrapperContent >
        </WrapperContent>
      </FrameDevice>
    </Container>
  )
}

