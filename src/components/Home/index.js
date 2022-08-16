import React from 'react'
import HeroAnimationFrame from '../HeroAnimationFrame'
import Section from '../Section'
import SectionDatas from '../Section/datas'
import Link from 'next/link'
import { Title, Button, ButtonLink, ButtonHeroPrimary } from '../Util'
import {
  Contanier,
  Hero,
  WrapperHeroTitle,
  ContentMain,
  Footer,
  ButtonsGroupHero,
  WrapperHeroContent
} from './styles'


export default function Home() {
  return (
    <Contanier>
      <Hero>
        <WrapperHeroContent>
          <HeroAnimationFrame />
          <WrapperHeroTitle>
            <Title>
              <span>Cria seu site e</span>
              <span>Dá visiblidade a</span>
              <span>seu negócio</span>
            </Title>
          </WrapperHeroTitle>
          <ButtonsGroupHero>
            <ButtonHeroPrimary href="/">
              <a>encomendar</a>
            </ButtonHeroPrimary>
            <ButtonLink href="/">ver planos</ButtonLink>
          </ButtonsGroupHero>
        </WrapperHeroContent>
      </Hero>
      <ContentMain>
        {SectionDatas?.map((data, key) => (<Section data={data} key={key} />))}
      </ContentMain>
      <Footer>

      </Footer>
    </Contanier>
  )
}
