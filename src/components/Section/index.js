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
  Card
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
        <Card>
          <WrapperText>
            {texts?.map((text, key) => <TextSection key={key}>{text}</TextSection>)}
          </WrapperText>
          <WrapperSectionButtons>

          </WrapperSectionButtons>
        </Card>
      </WrapperContent>
    </Container>
  )
}

