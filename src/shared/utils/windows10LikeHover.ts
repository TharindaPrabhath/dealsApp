import { MouseEvent } from "react";

const makeWindows10LikeHover = (event:MouseEvent, element:HTMLElement) => {

    // getting cureent position coordinates
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    const rectX = element.getBoundingClientRect().left;
    const rectY = element.getBoundingClientRect().top;

    // calculating relative values
    const clientX = x-rectX;
    const clientY = y-rectY;

    // applying styles
    element.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px , rgba(255,255,255,0.2),rgba(255,255,255,0) )`;
    element.style.borderImage = `radial-gradient(20% 75% at ${clientX}px ${clientY}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.1) ) 1 / 1px / 0px stretch `;
}

export default makeWindows10LikeHover;