import React from 'react';
import './Section.css';

export enum Color {
  Cream = "cream",
  Red = "red",
  Gray = "gray"
}

export enum Clouds {
  Top,
  Bottom,
  Both,
}

interface SectionProps {
  color: Color
  clouds?: Clouds
  children: React.ReactNode
  nav?: boolean
}

function shouldRender(pos: string, clouds?: Clouds) {
  return clouds === Clouds.Both ||
    (pos === "top" && clouds === Clouds.Top) ||
    (pos === "bottom" && clouds === Clouds.Bottom);
}

const Cloud = (pos: string, color: Color, clouds?: Clouds) => {
  let className = "cloud " + color;

  if (pos === "bottom") {
    className += " flip";
  }

  console.log("Cloud Class", className);
  if (shouldRender(pos, clouds)) {
    return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice">
        <path className={className} d="M265.8 3.5c-10.9 0-15.9 6.2-15.9 6.2s-3.6-3.5-9.2-.9c-9.1 4.1-4.4 13.4-4.4 13.4s-1.2.2-1.9.9c-.6.7-.5 1.9-.5 1.9s-1-.5-2.3-.2c-1.3.3-1.6 1.4-1.6 1.4s.4-3.4-1.5-5c-3.9-3.4-8.3-.2-8.3-.2s-.6-.7-.9-.9c-.4-.2-1.2-.2-1.2-.2s-4.4-3.6-11.5-2.6-10.4 7.9-10.4 7.9-.5-3.3-3.9-4.9c-4.8-2.4-7.4 0-7.4 0s2.4-4.1-1.9-6.4-6.2 1.2-6.2 1.2-.9-.5-2.1-.5-2.3 1.1-2.3 1.1.1-.7-1.1-1.1c-1.2-.4-2 0-2 0s3.6-6.8-3.5-8.9c-6-1.8-7.9 2.6-8.4 4-.1-.3-.4-.7-.9-1.1-1-.7-1.3-.5-1.3-.5s1-4-1.7-5.2c-2.7-1.2-4.2 1.1-4.2 1.1s-3.1-1-5.7 1.4-2.1 5.5-2.1 5.5-.9 0-2.1.7-1.4 1.7-1.4 1.7-1.7-1.2-4.3-1.2c-2.6 0-4.5 1.2-4.5 1.2s-.7-1.5-2.8-2.4c-2.1-.9-4 0-4 0s2.6-5.9-4.7-9c-7.3-3.1-12.6 3.3-12.6 3.3s-.9 0-1.9.2c-.9.2-1.5.9-1.5.9S99.4 3 94.9 3.9c-4.5.9-5.7 5.7-5.7 5.7s-2.8-5-12.3-3.9-11.1 6-11.1 6-1.2-1.4-4-.7c-.8.2-1.3.5-1.8.9-.9-2.1-2.7-4.9-6.2-4.4-3.2.4-4 2.2-4 2.2s-.5-.7-1.2-.7h-1.4s-.5-.9-1.7-1.4-2.4 0-2.4 0-2.4-1.2-4.7 0-3.1 4.1-3.1 4.1-1.7-1.4-3.6-.7c-1.9.7-1.9 2.8-1.9 2.8s-.5-.5-1.7-.2c-1.2.2-1.4.7-1.4.7s-.7-2.3-2.8-2.8c-2.1-.5-4.3.2-4.3.2s-1.7-5-11.1-6c-3.8-.4-6.6.2-8.5 1v21.2h283.5V11.1c-.9.2-1.6.4-1.6.4s-5.2-8-16.1-8z"></path>
      </svg>
    );
  }
  else {
    return (<div></div>);
  }
}

export const Section = (props: SectionProps) => {
  return (
    <div>
      {Cloud("top", props.color, props.clouds)}
      <div className={props.color + " section" + (props.nav ? " nav" : "")}>
        {props.children}
      </div>
      {Cloud("bottom", props.color, props.clouds)}
    </div>
  );
}

export default Section;