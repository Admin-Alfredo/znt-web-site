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
  width: 100,
  height: 60,
  halfWidth: function () {
    return this.width / 2
  },
  halfHeight: function () {
    return this.height / 2
  },
}

const mobile = {
  width: 100,
  height: 60,
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
  width: ${desktop.width}px;
  height: ${desktop.height}px;
  background: linear-gradient(-30deg,#000  50%,  #333 10%);
  left: calc(50% - ${desktop.halfWidth()}px);
  transition: .5s ease-in-out;

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
  
  &.laptop{
    border-radius: 10px 10px 0px 0px;
    width: 180px;
    height: 110px;
    background: linear-gradient(-30deg,#000  50%,  #333 10%);
    left: calc(50% - ${desktop.halfWidth()}px);
  }
  &.laptop > .display::after{
    /* CAMERAA LAPTOP */
    content: '';
    width: 6px;
    height: 6px;
    background: radial-gradient(#111, #333);
    position: absolute;
    border: 1px  solid #111;
    border-radius: 10px;
    left: calc(50% - (6px / 2));
    top: -10px;
  }
  
  &.laptop > .base{
    --width: 180px;
    --height: 10px;
    width: var(--width);
    left: calc(50% - (var(--width) / 2));
    bottom: calc(0% - var(--height));
  } 
  &.laptop > .base > .teclado{
    display: block;
    border-radius: 0px 0px 50px 50px;
    height: 5px;
    width: 200px;
    background: red;
    position: relative;
    left: calc(50% - (200px / 2));
    bottom:-10px ;
    background: #000;
  }
`
export const Display = styled.div.attrs({ className: 'display' })``
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
