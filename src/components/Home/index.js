import React, { useEffect } from 'react'
import HeroAnimationFrame from '../HeroAnimationFrame'
import Section from '../Section'
import SectionDatas from '../Section/datas'
import Link from 'next/link'
import { Title, Button, ButtonLink, ButtonHeroPrimary, ButtonHeroSegundary, WrapIcon } from '../Util'
import {
  Contanier,
  Hero,
  WrapperHeroTitle,
  ContentMain,
  Footer,
  ButtonsGroupHero,
  WrapperHeroContent,
  FooterLine
} from './styles'
import { FaFacebook, FaTwitter, FaBlogger } from 'react-icons/fa'


export default function Home() {
  useEffect(function () {
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
    return (() => { window.removeEventListener('scroll', showSection) })
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
      <h2 style={{ fontSize: '3.8rem', color: '#646464', padding: '0 15px' }}>Quero ter um...</h2>
      <ContentMain>
        {SectionDatas?.map((data, key) => (<Section data={data} key={key} />))}
      </ContentMain>
      <Footer>
        <FooterLine style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="https://www.twitter.com/">
            <WrapIcon>
              <FaTwitter color='#fff' size={30} />
            </WrapIcon>
          </a>
          <a href="https://www.facebook.com/">
            <WrapIcon>
              <FaFacebook color="#fff" size={30} />
            </WrapIcon>
          </a>
          <a href="https://blog.zenite.com/">
            <WrapIcon>
              <FaBlogger color="#fff" size={30} />
            </WrapIcon>
          </a>
        </FooterLine>
        <FooterLine style={{ display: 'flex', justifyContent: 'center', margin: '15px auto' }}>
          <Link href="/"><span className='link'>Contatos</span></Link> |
          <Link href="/"><span className='link'> Sobre nós</span></Link>
        </FooterLine>
        <FooterLine style={{ display: 'flex', justifyContent: 'center' }}>
          <span className="by-znt">powered by Zénitech</span>
        </FooterLine>
      </Footer>
    </Contanier>
  )
}
