import styled from "styled-components";
import {Container as ContainerBackgroundHero } from '../HeroAnimationFrame/styles'

export const Container = styled.div`
  position: relative;
  /* background: ${props => props.theme.light}; */
  /* margin-bottom:50px; */
  /* margin-top:50px; */
  padding: 15px;
  display: flex;
  width: 100%;
  /* height: 300px; */
  flex-direction: column;
`

export const WrapperSectionTitle = styled.div`

`

export const WrapperHeroIcon =styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 100px;
  width: 100px;
`
export const WrapperHeroTextAndTitle = styled.div`
  position: relative;
  padding: 0px 0px 20px 20px;
`
export const WrapperText = styled.div`
  position: relative;
  max-width: 300px;
  > p{
    font-family: Roboto-Light;
    line-height: 30px;
    color: ${props => props.colortext ? props.colortext : props.theme.light};
    font-size: 1rem;
    color: #333;
  }
`
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const WrapperAnimationFrame = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: transparent;
`
export const WrapperSectionButtons = styled.div`
  /* padding: 20px;
  margin-top: 20px; */
`


