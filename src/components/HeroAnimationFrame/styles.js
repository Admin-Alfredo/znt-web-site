import styled from "styled-components";



const desktop = {
  width: 300,
  height: 200,
  halfWidth: function () {
    return this.width / 2
  },
  halfHeight: function () {
    return this.height / 2
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
const cameraColor = "#333"
const borderColor = "#fff"

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`
export const WrapperContent = styled.div.attrs({ className: 'wrapper-content' })`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  position: relative;
  top:0;
  /* display: flex; */
  &::-webkit-scrollbar{
    width: 1px;
  }
`
export const FrameDevice = styled.div`
  position: relative;
  width: ${desktop.width}px;
  height: ${desktop.height}px;
  border-top: 15px solid transparent; 
  border-bottom: 20px solid transparent; 
  border-left: 5px solid transparent; 
  border-right: 5px solid transparent; 
  border-radius: 5px;
  left: calc(50% - ${desktop.halfWidth()}px);
  top: calc(50% - ${desktop.halfHeight()}px);
  transform: scale(2.2);
  transition: .6s cubic-bezier(0.15, -0.03, 0.35, 0.97);
  pointer-events: none;
  &.device_initial-color{
    border-color: ${borderColor}
  }
  &.device_initial-scale{
    transform: scale(1.2, 1);
  }
  &.device-justify_desktop{
    transform: translateY(-100px);
  }
  &.device-transform_laptop{
    width: ${laptop.width}px;
    height: ${laptop.height}px;
    left: calc(50% - (${laptop.width}px / 2));
    top: calc(50% - ${laptop.height}px);
    border-radius: 5px 5px 0px 0px;
  }
  &::after{
    /* artefolante */
    content:'';
    width: 40px;
    height: 3px;
    bottom: calc(0% - ((20px / 2) + 2.5px));
    left: calc(50% - (50px / 2));
    position: absolute;
    background-color: ${cameraColor};
    border-radius: 20px;
  }
  &.device-transform_laptop::before{
    /* camera */
    content:'';
    width: 10px;
    height: 10px;
    top: calc(0% - ((20px / 2) + 2.5px));
    left: calc(50% - (5px / 2));
    position: absolute;
    background-color: ${cameraColor};
    border-radius: 20px;
  }
  &.device-transform_tablet{
    width: ${tablet.width}px;
    height: ${tablet.height}px;
    left: calc(50% - (${tablet.width}px / 2));
    top: calc(50% - ${tablet.height}px);
    border-radius: 5px;
    border-left-width: 12px;
    border-right-width: 10px;
    border-top-width: 4px;
    border-bottom-width: 4px;
  }
  &.device-transform_tablet::before{
    /* camera */
    width: 5px;
    height: 5px;
    top: calc(0% + 22px);
    left:calc(100% + 3px);
    position: absolute;
    border-radius: 10px;
  }
  &.device-transform_tablet::after{
    /* artefolante */
    content:'';
    width: 3px;
    height: 15px;
    bottom: calc(50% - (15px / 2));
    left: calc(0% - 7px);
    position: absolute;
    background-color: ${cameraColor};
    border-radius: 20px;
  }
  &.device-transform_tablet > .frame-util-base{
    opacity: 0;
    height:0;
  }
  &.device-transform_mobile{
    width: ${mobile.width}px;
    height: ${mobile.height}px;
    transform: rotate(-90deg);
    top: calc(50% - (${mobile.height}px * 3));
    overflow:hidden;
  }
  &.device-transform_mobile::after{
    /* Botao Home do Mobile */
    content:'';
    width: 7px;
    height: 7px;
    bottom: calc(50% - (1px));
    left: calc(0% - 10px);
    position: absolute;
    background-color: ${cameraColor};
    border-radius: 20px;
  }
  &.device-transform_mobile > .wrapper-content{
    transform: rotate(90deg);
    width: ${mobile.height}px;
    height: ${mobile.width}px;
    top:-36%;
  }
`
export const ButtomHomeMobile = styled.div.attrs({ className: 'button-home_mobile' })`
  width: 9px;
  height: 9px;
  top: calc(${mobile.width}px + 11px);
  left:calc(50% - (10px / 2));
  position: absolute;
  background-color: ${cameraColor};
  border-radius: 20px;
  z-index:999;
  visibility: hidden;
  transition: .2s ease-in;
  &.show{
    visibility: visible;
  }
`
export const FrameDeviceUtilBase = styled.div.attrs({ className: 'frame-util-base' })`
  pointer-events: none;
  width: calc((${laptop.width}px - 10px) - 20px);
  height: 20px; 
  position: absolute;
  background-color: transparent;
  top:calc(100% + (18px));
  transition: .3s ease-in-out;
  left: calc(50% - (150px / 2));
  &.laptop-teclado{
    width:${laptop.width}px;
    left: calc(50% - (${laptop.width}px / 2));
  }
  &.base-util_initil-color{
    background-color: ${borderColor};
  }
  &.base-util_initil-color::after{
    border-top:25px solid transparent;
    border-right:15px solid ${borderColor};
  }
  &.base-util_initil-color::before{
    border-top:25px solid transparent;
    border-left:15px solid ${borderColor};
  }
  &::after{
    content:'';
    position: absolute;
    left:-13px;
    top:-5px;
    border-top:25px solid transparent;
    border-right:15px solid transparent;
  }
  &::before{
    content:'';
    position: absolute;
    right:-13px;
    top:-5px;
    border-top:25px solid transparent;
    border-left:15px solid transparent;
  }
`