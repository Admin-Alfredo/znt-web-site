import styled from 'styled-components'

export const Contanier = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.color ? props.color : props.theme.light};
  box-shadow:0px 0.003rem 15px #12121230;
  
`
export const WrapperTopBarVisivble = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 10px;
`
export const Logo = styled.div`

`
export const Navbar = styled.nav`
  background-color:${props => props.theme.light};
  overflow-y: auto;
`
export const NavbarList = styled.ul`
  max-height: calc(100vh - 60px);
  list-style: none;
  transition: .4s;
  /* overflow: hidden; */
  & > li.service-Item{
    padding: 25px 7px;
    display: flex;
    align-items: center;
  }
`
export const NavItem = styled.li`
  padding: 25px 15px;
  & > a{
    text-decoration: none;
    padding: 5px ;
    font-size: 16px;
    color: ${props => props.theme.dark};
    font-family: Roboto-Bold;
    white-space: nowrap;
}
`
export const DropdownJustify = styled.div.attrs({ className: "collapse-navbar" })`
  height: 27px;
  width: 40px;
  position: relative;
  cursor: pointer;
  &.collapse-navbar.on > .item-bar_top{
    top: calc(50% - 2px);
    transform: translateY(-1px)  rotate(45deg);
  }
   &.collapse-navbar.on > .item-bar_bottom{
    bottom: calc(50% - 2px);
    transform: translateY(-1px) rotate(-45deg); 
  }
  &.collapse-navbar.on > .item-bar_middle{    
    display: none;
  }
  & > div{
    background-color: ${props => props.color ? props.color : props.theme.dark};
  }
`

const DropdownItem = styled.div`
  transform-origin: 50% 50%;
  width: 100%;
  height: 4px;
  position: absolute;
  
  transition: .3s;
`

export const BarItemTop = styled(DropdownItem).attrs({ className: "item-bar_top" })`
  top: 0;
`
export const BarItemMiddle = styled(DropdownItem).attrs({ className: "item-bar_middle" })`
  top: 50%;
  transform: translateY(-2px);
`
export const BarItemBottom = styled(DropdownItem).attrs({ className: "item-bar_bottom" })`
  bottom: 0%;
`