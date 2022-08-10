import React from 'react'
import HeroAnimationFrame from '../HeroAnimationFrame'
import Section from '../Section'
import SectionDatas from '../Section/datas'
import { Title, Button, ButtonLink } from '../Util'
import {
  Contanier,
  Hero,
  WrapperHeroTitle,
  ContentMain,
  Footer,
  ButtonsGroupHero
} from './styles'


export default function Home() {
  return (
    <Contanier>
      <Hero>
        <HeroAnimationFrame />
        <WrapperHeroTitle>
          <Title>
            <span>Cria seu site e</span>
            <span>Dá visiblidade a</span>
            <span>seu negócio</span>
          </Title>
        </WrapperHeroTitle>
        <ButtonsGroupHero>
          <Button>Encomendar</Button>
          <ButtonLink href="/">ver planos</ButtonLink>
        </ButtonsGroupHero>
      </Hero>
      <ContentMain>
        {SectionDatas?.map((data, key)=>(<Section data={data} key={key}/>))}
      </ContentMain>
      <Footer>
        
      </Footer>
    </Contanier>
  )
}
