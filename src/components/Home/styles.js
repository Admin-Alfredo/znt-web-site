import styled from 'styled-components'

export const Contanier = styled.div`
  width: 100%;
`
export const Hero = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 60px 0;
  margin-bottom: 60px;
  position: relative;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center;   #ed146b#710ef6*/
  background: linear-gradient(-145deg,  ${props => props.theme.color_blue_segundary} , #910eb7 80%);
  transform: translateY(-10px) skewY(-5deg);
  transform-style: initial;
`
export const WrapperHeroContent = styled.div`
  position:relative;
  width: 100%;
  transform:skewY(5deg);
  display: flex;
  flex-direction:column;
  justify-content: center;
`
export const WrapperHeroTitle = styled.div`
  position:relative;
  width: 100%;
  margin-top: 150px;
`
export const ButtonsGroupHero = styled.div`
  position:relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 40px 0;
`
export const ContentMain = styled.main`
  width:100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding: 0px 15px;
`
export const Footer = styled.footer`
  height: 35vh;
  width: 100%;
  background-color: #910eb7;
  padding: 20px;
  display: flex;
  flex-direction: column;
` 
export const FooterLine = styled.div`
  display: flex;
  & > a{
    margin: 10px;
  }
  & .by-znt{
    font-size: 1.3rem;
    color: #fff;

  }
  & .link{
    font-size: 1.2rem;
    font-family: Roboto-Bold;
    cursor: pointer;
    margin: 0px 10px;
    transition:  .3s ease-in;
    &:hover{
      color: ${props => props.theme.color_blue_segundary}
    }
  }
` 
