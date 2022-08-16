import React from 'react'
import HeroAnimationFrame from '../HeroAnimationFrame'
import { BloggerIcon, Button, ButtonLink, MobDeskIcon, SubTitle, Text, WebAppIcon, WebSiteIcon } from '../Util'
import {
  Container,
  Hero,
  WrapperSectionButtons,
  WrapperContent,
  WrapperText,
  WrapperAnimationFrame,
  TextSection,

} from './styles'

export default function Section(props) {
  const { title, texts, links, AnimationComponent } = props.data
  console.log(props.data)
  return (
    <Container {...props}>
        <SubTitle>{title}</SubTitle>
        <WrapperContent>
          <WrapperAnimationFrame>
            <AnimationComponent />
          </WrapperAnimationFrame>
          <WrapperText>
            {texts?.map(text => <TextSection>{text}</TextSection>)}
          </WrapperText>
        </WrapperContent>
        <WrapperSectionButtons> 
              
        </WrapperSectionButtons>
    </Container>
  )
}

