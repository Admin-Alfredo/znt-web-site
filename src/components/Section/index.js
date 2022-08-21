import React from 'react'
import Link  from 'next/link'
import HeroAnimationFrame from '../HeroAnimationFrame'
import { ButtonSectionPrimary, ButtonSectionSegundary, SubTitle } from '../Util'
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
            <Link href="/">
              <ButtonSectionPrimary>encomendar</ButtonSectionPrimary>
            </Link>
            <Link href="/">
              <ButtonSectionSegundary>mais info</ButtonSectionSegundary>
            </Link>
          </WrapperSectionButtons>
        </Card>
      </WrapperContent>
    </Container>
  )
}

