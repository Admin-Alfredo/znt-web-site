import React, { useEffect, useState } from 'react'
import {
  BarItemBottom,
  BarItemMiddle,
  BarItemTop,
  Contanier,
  DropdownJustify,
  Logo,
  Navbar,
  NavbarList,
  NavItem,
  WrapperTopBarVisivble
} from './styles'
import Link from 'next/link'
import {
  BloggerIcon,
  MobDeskIcon,
  WebAppIcon,
  WebSiteIcon,
  WrapIcon
} from '../Util'



export default function Header() {
  const [dropdownState, setDropdownState] = useState(false)
  // const [navbar, setNavbar] = useState({ btnDropdownColor: '#121214', bgColor: '#fff' })//#b31697
  // function fadeInColorToBar() {
  //   if (window.scrollY >= window.innerHeight) {
  //     console.log("SCROLL...")
  //     setNavbar({ ...navbar, bgColor: '#491fc8', btnDropdownColor: '#fff' })
  //   } else {
  //     console.log("SCROLL2...")
  //     setNavbar({ ...navbar, bgColor: '#fff', btnDropdownColor: '#121214' })
  //   }
  //  }
  // useEffect(() => {
  //   window.addEventListener('scroll', fadeInColorToBar)
  //   return (() => window.removeEventListener('scroll', fadeInColorToBar))
  // }, [])
  return (
    <Contanier>
      <WrapperTopBarVisivble>
        <Logo>LOGO</Logo>
        <DropdownJustify onClick={() => {
          setDropdownState(!dropdownState)
        }} className={dropdownState && 'on'}>
          <BarItemTop />
          <BarItemMiddle />
          <BarItemBottom />
        </DropdownJustify>
      </WrapperTopBarVisivble>
      <Navbar>
        <NavbarList style={{ height: !dropdownState ? '0' : '485px' }}>
          <NavItem>
            <Link href="/">Serviços</Link>
            <NavbarList className="sub-list_service">
              <NavItem className='service-Item'>
                <WrapIcon style={{ marginRight: 10 }}>
                  <BloggerIcon size={30} />
                </WrapIcon>
                <Link href='/#level_1'>Criação de Blogs</Link>
              </NavItem>

              <NavItem className='service-Item'>
                <WrapIcon style={{ marginRight: 10 }}>
                  <WebSiteIcon size={30} />
                </WrapIcon>
                <Link href='/#level_2'>Criação de Site empresarial</Link>
              </NavItem>
              <NavItem className='service-Item'>
                <WrapIcon style={{ marginRight: 10 }}>
                  <WebAppIcon size={30} />
                </WrapIcon>
                <Link href='/#level_3'>Criação de Web App</Link>
              </NavItem>

              <NavItem className='service-Item'>
                <WrapIcon style={{ marginRight: 10 }}>
                  <MobDeskIcon size={30} />
                </WrapIcon>

                <Link href='/#level_4'>Criação de Aplicação Mobile e Desktop</Link>
              </NavItem>
            </NavbarList>
          </NavItem>
          <NavItem>
            <Link href="/">Produtos</Link>
          </NavItem>
          <NavItem>
            <Link href="/">Blog</Link>
          </NavItem>
          <NavItem>
            <Link href="/">Contactos</Link>
          </NavItem>
        </NavbarList>
      </Navbar>
    </Contanier>
  )
}


