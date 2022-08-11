import styled from "styled-components";
import Link from 'next/link'
import { FaBlogger, FaGlobe, FaGlobeAfrica, FaMicrochip } from "react-icons/fa";

export const WrapIcon = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color ? props.color : props.theme.text};
`
export const BloggerIcon = styled(FaBlogger)`
  color: ${props => props.theme.color_orange};
`
export const WebSiteIcon = styled(FaGlobeAfrica)`
  color: ${props => props.theme.color_blue_primary};
`
export const WebAppIcon = styled(FaGlobe)`
  color: ${props => props.theme.color_blue_segundary};
`
export const MobDeskIcon = styled(FaMicrochip)`
  color: ${props => props.theme.color_violet};
`

export const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
  text-align: center;
  font-weight: 500;
  margin: 0px 5px;
  cursor: pointer;
  background-color: ${props => props.theme.primary_color ? props.theme.primary_color : props.theme.dark};
  padding: 10px 15px;
  color: ${props => props.color ? props.color : props.theme.light};
  margin: 4px;
  font-family: Roboto-Bold;
  font-size:1.3rem;

`

export const ButtonLink = function (props) {
  return (
    <Link {...props} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'white' }}>
      {props.children}
    </Link>
  )
}
export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 3.1rem;
  font-family: Roboto-Black;
  letter-spacing: -2px;
  color: #fff;
  > span{
    font: inherit;
    text-align: center;
  }

`
export const SubTitle = styled.h2`
  font-size: 2.1rem;
  font-family: Roboto;
  margin: 15px 0px;
  color: #500843;
`

export const Text = styled.p`
  font-family: Roboto-Light;
  line-height: 30px;
  font-size: 1rem;
  color: #333;
`