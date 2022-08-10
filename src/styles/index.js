import styled, { createGlobalStyle } from "styled-components";
export const theme = {
  light: '#fff',
  dark: '#121214',
  color_orange: '#d9441d',
  color_blue_primary: '#3151dd',
  color_blue_segundary: '#491fc8',
  color_blue_tertiary: '#3a10ba',
  color_red: '#ce2e2e',
  color_yellow: '#c4fb31',
  color_lilac: '#801ad6',
  color_violet: '#b31697',

  primary_color: '#b31697'
}

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 16px Roboto, sans-serif;
  }
   html, body{
    width: 100%;
  }
  body::-webkit-scrollbar-thumb{}
  body::-webkit-scrollbar{width: 0;}
   
`
export const TemplateMain = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;  
  background-color: #fcf6fb;
`