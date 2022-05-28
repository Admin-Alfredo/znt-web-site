import styled from "styled-components";
const desktop = {
  width: 200,
  height: 150,
  displayWidth: 180,
  displayHeight: 120,
  halfWidth: function () {
    return this.width / 2
  },
  halfHeight: function () {
    return this.height / 2
  },
  halfDisplayWidth: function () {
    return this.displayWidth / 2
  },
  halfDisplayHeight: function () {
    return this.displayHeight / 2
  },
}
const laptop = {
  width: 180,
  height: 110,
  halfWidth: function () {
    return this.width / 2
  },
  halfHeight: function () {
    return this.height / 2
  },
}
const tablet = {
  width: 140,
  height: 90,
  halfWidth: function () {
    return this.width / 2
  },
  halfHeight: function () {
    return this.height / 2
  },
}

const mobile = {
  width: 50 ,
  height: 90,
  halfWidth: function () {
    return this.width / 2
  },
  halfHeight: function () {
    return this.height / 2
  },
}

export const Container = styled.div`
  border-radius: 10px;
  position: relative;
  background: linear-gradient(-30deg,#000  50%,  #333 10%);
  transition: .5s ease-in-out;
  
  &.desktop{
    width: ${desktop.width}px;
    height: ${desktop.height}px;
    left: calc(50% - ${desktop.halfWidth()}px);
    top: 0;
  }
  & > .display::after{
    /* CAMERA */
    content: '';
    background: radial-gradient(#111, #333);
    position: absolute;
    border: 1px  solid #111;
    border-radius: 10px;
    visibility: hidden;
  }
  & > .base{ visibility: hidden;}
  & > .base .teclado{visibility: hidden;}
  &.desktop > .base{ visibility: visible}
  &.desktop > .base .teclado{ visibility: visible}

  & > .display{
    --width: 95%;
    --height: 80%;
    position: relative;
    width: ${desktop.displayWidth}px;
    height:${desktop.displayHeight}px;
    background-color: #fff;
    transition:all .5s ease-in-out;
    width: var(--width);
    height: var(--height);
    left: calc(50% - (var(--width)/ 2));
    top: calc(50% - ((var(--height)/ 2)));
  }
  
  /* LAPTOP */
  &.laptop{
    border-radius: 10px 10px 0px 0px;
    width: ${laptop.width}px;
    height: ${laptop.height}px;
    background: linear-gradient(-30deg,#000  50%,  #333 50%);
    left: calc(50% - ${laptop.halfWidth()}px);
  }
  &.laptop > .display::after{
    /* CAMERA LAPTOP */
    content: '';
    width: 6px;
    height: 6px;
    left: calc(50% - (6px / 2));
    top: -10px;
    visibility: visible;
  }
  
  &.laptop > .base{
    visibility: visible;
    --width: 180px;
    --height: 10px;
    width: var(--width);
    left: calc(50% - (var(--width) / 2));
    bottom: calc(0% - var(--height));
  } 
  &.laptop > .base > .teclado{
    visibility: visible;
    display: block;
    border-radius: 0px 0px 50px 50px;
    height: 5px;
    width: 200px;
    background: red;
    position: relative;
    left: calc(50% - (200px / 2));
    bottom:-9px ;
    background: #000;
  }
  /* TABLET */
  &.tablet {
    width: ${tablet.width}px;
    height: ${tablet.height}px;
    border-radius: 8px;
    left: calc(50% - (140px / 2));
  }
  &.tablet > .display{
    width: 90%;
    left: calc(50% - (90% / 2));
    top: calc(50% - (${tablet.halfHeight()}px / 2));
  }
  &.tablet > .base{
    visibility: hidden;
  }
  &.mobile{
    border-radius: 5px;
    width: ${mobile.width}px;
    height: ${mobile.height}px;
    left: calc(50% - ${mobile.halfWidth()}px);
  }
  &.mobile > .display{
    width: 90%;
    left: calc(50% - (90% / 2));
    top: calc(50% - ((var(--height) / 2)));
  }
  &.mobile > .display::after{
    /* content: ''; */
    width: 4px;
    height: 4px;
    left: calc(50% - (6px / 2));
    top: -8px;
    visibility: visible;
  }
  &.mobile > .display::before{
      content: '';
    background: #222;
    position: absolute;
    border-radius: 10px;
    visibility: hidden;
    /* content: ''; */
    width: 7px;
    height: 7px;
    left: calc(50% - (6px / 2));
    bottom: -8px;
    visibility: visible;
  }; 
`

export const Display = styled.div.attrs({ className: 'display' })`

  overflow: auto;
  &::-webkit-scrollbar{
    width: 0;
  }
`;

export const Base = styled.div.attrs({ className: 'base' })`
  --width: 60px;
  --height: 15px;
  --background: #222;
  position: absolute;
  width: var(--width);
  height:var(--height);
  bottom: calc(0% - var(--height));
  left: calc(50% - (var(--width) / 2));
  background: var(--background);
  transition: .5s ease-in-out;
  &.teclado{
    transition: .5s ease-in-out;
    display:none;
  }
  &::after{
    content:'';
    position: absolute;
    right:calc(0% - 10px);
    top:0;
    border-top:var(--height) solid transparent;
    border-left:10px solid var(--background);
  }
  &::before{
    content:'';
    position: absolute;
    left:calc(0% - 10px);
    top:0;
    border-top:var(--height) solid transparent;
    border-right:10px solid var(--background);
  }
`
