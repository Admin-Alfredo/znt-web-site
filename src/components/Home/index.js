import React, { useEffect } from 'react'
import HeroAnimationFrame from '../HeroAnimationFrame'
import Section from '../Section'
import SectionDatas from '../Section/datas'
import Link from 'next/link'
import { Title, Button, ButtonLink, ButtonHeroPrimary, ButtonHeroSegundary } from '../Util'
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

  useEffect(function () {
    NodeList.prototype.filter = Array.prototype.filter
    const sections = document.querySelectorAll('.section')
    let loadSections = false;
    function showSection() {
      const scroll = window.scrollY
      sections.forEach((section, index) => {
        const viewportTop = Math.round(section.getBoundingClientRect().top)
        console.log("section: ", index, "view :", (window.innerHeight - viewportTop))
        if ((window.innerHeight - viewportTop) >= 230 && !section.classList.contains('show')) {
          section.classList.add('show')
        }
      })
    }
    window.addEventListener('scroll', showSection)
    return (() => {window.removeEventListener('scroll', showSection) })
  }, [])


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
            <Link href="/">
              <ButtonHeroPrimary>encomendar</ButtonHeroPrimary>
            </Link>
            <Link href="/">
              <ButtonHeroSegundary>ver planos</ButtonHeroSegundary>
            </Link>
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
