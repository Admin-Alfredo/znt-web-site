import styled from "styled-components";
import { Container as ContainerBackgroundHero } from '../HeroAnimationFrame/styles'
import { Text } from '../Util'

export const Container = styled.div.attrs({ className: 'section' })`
  position: relative;
  padding: 0px;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 100px;

  &.show .card{
    transform: translateY(-15%);
    opacity: 1;
  }
  &.show .display-section{
    transform: scale(1.1);
    opacity: 1;
  }
`

export const WrapperSectionTitle = styled.div`

`

export const WrapperHeroIcon = styled.div`
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
export const WrapperText = styled.div.attrs({ className: 'section-text' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /**  */
  & > p{
    text-align: center;
  }
`
export const Card = styled.div.attrs({className: 'card'})`
  min-height: 200px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* trasition */
  transition: .8s cubic-bezier(0.26,-0.13, 0.57, 0.97);
  transition-delay: .4s;
  transform: translateY(15%);
  opacity: 0;
  /* estilo do card text */
  padding: 10px 5px;
  background-color: #fff;
  box-shadow: -1px -1px 20px #9b929a3a;
  border-radius: 10px;

  &::after{
    content: '';
    position: absolute;
    background: transparent;
    left:50%;
    top:-25px;
    transform: translateX(-50%);
    border-bottom: 25px solid #fff;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
  }
`
export const TextSection = styled(Text)`
  font-size: 1.1rem;
  font-weight: 600;
  color: #646464;
  text-shadow: 0px 1px 1px #fcf6fb;
`
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const WrapperAnimationFrame = styled.div.attrs({ className: 'display-section' })`
  position: relative;
  width: 100%;
  height: 200px;
  background: transparent;
  transition: .8s linear;
  opacity: 0;

`
export const WrapperSectionButtons = styled.div`
  /* padding: 20px;
  margin-top: 20px; */
`


