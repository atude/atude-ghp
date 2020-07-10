import React from 'react';
import './Components.css';
import { Grid, Typography, Chip, SvgIcon, Divider } from '@material-ui/core';
import {
  React as ReactIcon,
  Unity, 
  GithubCircle, 
  MaterialUi, 
  FormatColorFill, 
  Infinity, 
  Server,
  Iframe,
  DeveloperBoard,
  Gitlab,
  SwapVertical,
  Firebase,
  Graphql,
  Docker,
  TimelineText,
  BugCheck,
  Cloud,
} from 'mdi-material-ui';
import Database from '../assets/Database';

const mdBreakpoint = 960;

class ToolsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  getIconTools = (type, setColor) => {
    if (!setColor) setColor = this.props.currentScheme.bg;

    const cStyle = {color: setColor, fontSize: "21px", marginLeft: "7px"};
    const mainStyle = {color: setColor, fontSize: "28px", marginLeft: "5px", marginRight: "5px"};
    const iconSwitch = {
      "Frontend": <Iframe style={mainStyle}/>,
      "Backend": <Server style={mainStyle}/>,
      "API": <TimelineText style={mainStyle}/>,
      "Testing": <BugCheck style={mainStyle}/>,
      "Devops": <Infinity style={mainStyle}/>,
      "Cloud Services": <Cloud style={mainStyle}/>,
      "UI": <DeveloperBoard style={mainStyle}/>, 
      "Design": <FormatColorFill style={mainStyle}/>, 

      "React": <ReactIcon style={cStyle}/>,
      "React Native": <ReactIcon style={cStyle}/>,
      "React Native Elements": <ReactIcon style={cStyle}/>,
      "Material UI": <MaterialUi style={cStyle}/>, 
      "Unity": <Unity style={cStyle}/>,
      "GitHub": <GithubCircle style={cStyle}/>,
      "GitLab CI": <Gitlab style={cStyle}/>,
      "Docker": <Docker style={cStyle}/>,
      "REST": <SwapVertical style={cStyle}/>,
      "GraphQL": <Graphql style={cStyle}/>,
      "Firebase": <Firebase style={cStyle}/>,
      

      //Direct inject icons
      "GIMP": 
      <SvgIcon viewBox="0 0 50 50" style={cStyle}>
        <path d="M41.191 6.02c-1.136-.137-1.761 1.207-2.402 2.847-1.691 4.344-6.66 7.113-11.02 8.024a6.47 6.47 0 0 0-7.414.605c-4.304-.34-7.492-5.004-7.527-5.055L11 9.711v9.637a5.426 5.426 0 0 0-.844 1.93c-2.05-1.434-4.437-1.731-6.195-.56-.977.65-1.621 1.669-1.86 2.942-.347 1.848.2 3.961 1.493 5.805 1.594 2.262 3.89 3.547 5.969 3.547a4.41 4.41 0 0 0 2.476-.73c.98-.65 1.625-1.669 1.863-2.942a6.293 6.293 0 0 0 .082-1.563c.489.141.996.223 1.516.223.164 0 .324-.016.488-.031.02.59-.015 1.172-.12 1.734-.34 1.82-1.282 3.29-2.723 4.246a5.79 5.79 0 0 1-1.235.617c1.07.676 2.246 1.332 3.371 1.825 4.024 1.761 7.778 2.636 11.156 2.636 2.844 0 5.41-.636 7.657-1.875.523.285 1.047.555 1.562.79 2.723 1.242 5.418 2.144 7.422 2.507.04.227.086.457.16.696.739 2.394 4.707 3.601 5.496 3.82l1.266.347V44c.004-1.64-.113-5.594-1.23-6.8-.997-1.079-2.329-1.454-3.524-1.032-1.414-1.184-3.547-2.5-6.031-3.7 4.48-6.863 3.922-20.25 3.515-23.366-.21-1.579-.39-2.942-1.539-3.082zM24.5 18c2.48 0 4.5 2.02 4.5 4.5 0 .281-.035.555-.082.824A2.998 2.998 0 0 0 26 21c-.086 0-.164.02-.25.027.71.118 1.25.73 1.25 1.473a1.5 1.5 0 0 1-3 0c0-.406.164-.773.426-1.043A2.988 2.988 0 0 0 23 24c0 1.422.992 2.61 2.324 2.918-.27.047-.543.082-.824.082-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5zm-9 1c1.137 0 2.191.555 2.844 1.465-.121.36-.203.73-.266 1.113A2.47 2.47 0 0 0 16.5 21c-.07 0-.137.016-.207.02a1.249 1.249 0 0 1-.21 2.48 1.248 1.248 0 1 1-.895-2.121 2.493 2.493 0 0 0 .843 4.574A3.443 3.443 0 0 1 15.5 26a3.477 3.477 0 0 1-2.047-.66l-.09-.063a9.296 9.296 0 0 0-.957-1.742c-.11-.152-.226-.297-.34-.441A3.37 3.37 0 0 1 12 22.5c0-1.93 1.57-3.5 3.5-3.5zM6 22c1.105 0 2 1.117 2 2.5S7.105 27 6 27s-2-1.117-2-2.5.895-2.5 2-2.5zm25 6s1.234.563 2.117 1.465l.016.015c.086.086.168.176.242.27.398.484.668 1.047.61 1.66l.003.004c-.008.086-.02.176-.039.262-.058.222-.168.449-.308.683 1.23.407 2.535.91 3.875 1.516 2.46 1.125 4.683 2.422 6.132 3.559-.195.289-.351.62-.464.988-1.809-.352-4.215-1.168-6.696-2.297-1.484-.68-3.047-1.64-4.367-2.527a5.619 5.619 0 0 1-1.324.32C26.668 34.461 20 32 20 32s11.863.656 11.863-1.656C31.863 29.19 31 28 31 28z"/>
      </SvgIcon>,

      "Photoshop":
      <SvgIcon viewBox="-50 -50 350 350" style={cStyle}>
        <path d="M45.213 211.003v-61.364c3.273.319 7.133.485 11.346.485 25.676 0 46.436-6.773 60.043-19.594 11.146-10.589 17.287-26.365 17.287-44.42 0-17.536-7.334-33.392-20.109-43.494-12.559-10.045-31.014-14.929-56.42-14.929-22.008 0-40.605 1.266-55.279 3.764A2.498 2.498 0 0 0 0 33.915v177.088a2.5 2.5 0 0 0 2.5 2.5h40.213a2.5 2.5 0 0 0 2.5-2.5zm0-97.664V64.405c2.455-.471 7.066-1.094 14.275-1.094 18.551 0 29.19 8.698 29.19 23.863 0 16.776-12.105 26.793-32.385 26.793-4.865 0-8.33-.192-11.08-.628zM206.76 129.02c-16.568-5.798-19.363-8.559-19.363-12.553 0-7.093 8.109-8.152 12.945-8.152 10.268 0 20.979 3.852 27.031 7.15a2.5 2.5 0 0 0 3.617-1.572l7.191-27.959a2.5 2.5 0 0 0-1.303-2.858c-7.465-3.732-21.332-7.721-37.869-7.721-32.674 0-55.494 18.549-55.494 45.065-.221 12.937 6.317 30.649 38.725 41.558 15.742 5.248 17.465 7.975 17.465 12.542 0 2.082 0 8.418-14.809 8.418-11.094 0-26.072-4.927-33.588-9.491a2.5 2.5 0 0 0-3.725 1.536l-7.189 29.028a2.5 2.5 0 0 0 1.238 2.8c10.998 5.944 26.768 9.354 43.264 9.354 36.365 0 58.955-17.08 58.955-44.608-.288-20.691-11.732-33.811-37.091-42.537z"/>      
      </SvgIcon>,

      "XD":
      <SvgIcon viewBox="-100 -100 812 657" style={cStyle}>
        <path d="M244.8 2.3c-1.2 1.3-6.4 11.4-11.5 22.3-14.4 30.5-49 105.5-58.8 127.7l-8.8 19.8-7.4-16.3C132.5 99.3 89.5 7.9 86.6 3.5L85 1H44.9C8 1 4.9 1.1 4.3 2.7c-.5 1.2 17.6 38 55.1 112.5 30.7 61 55.6 111.4 55.4 112.1-.2.7-26.1 50.4-57.5 110.3C25.8 397.6 0 447.2 0 447.8c0 2.8 4.6 3.2 39.2 3.2 26 0 36-.4 37.8-1.3 1.8-.8 4.6-5.4 9.7-15.7 13.5-27 50.4-105.9 66.5-142 3.3-7.4 6.3-13.8 6.7-14.2.3-.4 6.9 12.3 14.5 28.3 36.4 76.5 67.9 140.6 70.2 142.7l2.5 2.2h39.4c39.3 0 39.4 0 40.6-2.1.9-1.8.6-3.2-2.3-8.8-1.9-3.6-28.4-54.5-58.8-113s-55.3-106.9-55.3-107.5c0-.6 19.5-38.7 43.3-84.6C320.2 7.2 321.2 5.3 320.8 2.8l-.3-2.3-36.8-.3-36.8-.2-2.1 2.3zM535.7 1.7c-.4.3-.7 26-.7 57V115l-11.7-.6c-13.8-.7-33.4.8-47.7 3.7C393.8 134.6 343 204.9 346.3 297c1.9 51.5 16.5 90.9 44.1 118.6 18.9 18.9 40.6 30.5 68.6 36.8 43.1 9.6 97.3 3.4 142.5-16.5 10.2-4.4 11.6-6 9.9-11.7-.4-1.5-1-97.2-1.3-212.7l-.6-210-36.6-.3c-20.1-.1-36.8.1-37.2.5zm-6.4 178l5.7 1.6v205.6l-5.7 1.8c-4.6 1.4-9.3 1.8-22.3 1.8-14.2 0-17.6-.3-24.3-2.3-26-7.5-43.7-25.4-53-53.4-7.8-23.3-9.3-58.2-3.8-83.4 9-41.2 35.9-68.2 73.2-73.4 8.3-1.1 22.9-.3 30.2 1.7z"/>
      </SvgIcon>,

      "Expo": 
      <SvgIcon viewBox="0 0 256 256" style={cStyle}>
        <path d="M46 178.5c.3 3.62 1.56 7.24 4.89 12.1 3.94 5.77 10.72 8.94 15.66 3.85 3.34-3.43 39.42-66.5 56.81-90.4a5.18 5.18 0 0 1 8.5 0c17.39 23.9 53.47 86.97 56.8 90.4 4.94 5.09 11.73 1.92 15.67-3.85 3.88-5.68 4.95-9.66 4.95-13.92 0-2.9-56.19-107.49-61.85-116.19-5.45-8.37-7.1-10.2-16.31-10.49h-7.02c-9.21.3-10.87 2.12-16.31 10.49-5.55 8.52-59.55 108.98-61.79 115.87v2.14z"/>
      </SvgIcon>,

      "React Native Paper":
      <SvgIcon viewBox="0 0 800 800" style={cStyle}>
        <g transform="translate(0, 800) scale(0.1, -0.1)"><path stroke={setColor} strokeWidth="300" d="M5380 7073 c-69 -12 -152 -38 -218 -68 -40 -19 -714 -404 -1498 -857 -1035 -597 -1430 -830 -1439 -848 -7 -14 -148 -524 -314 -1133 -281 -1029 -302 -1110 -291 -1143 14 -41 60 -74 105 -74 22 0 251 127 825 459 437 252 796 458 797 457 0 0 -122 -449 -273 -996 -200 -726 -273 -1003 -268 -1025 4 -23 142 -167 567 -593 614 -614 599 -602 673 -566 21 11 42 26 47 34 5 9 131 471 281 1029 l271 1013 398 237 c219 130 424 258 457 284 111 89 212 230 282 397 41 95 630 2248 649 2371 7 43 9 118 6 179 -22 409 -317 751 -719 834 -72 15 -273 20 -338 9z m330 -234 c308 -82 524 -374 508 -689 -5 -85 -30 -184 -227 -910 -122 -448 -224 -823 -227 -833 -4 -14 -17 0 -49 55 -111 190 -300 334 -531 404 -81 25 -103 28 -249 28 -145 0 -168 -3 -248 -27 -48 -15 -118 -43 -155 -61 -37 -19 -643 -368 -1347 -774 -704 -407 -1281 -739 -1282 -738 -1 0 114 423 254 938 l256 938 1414 816 c936 540 1439 825 1486 841 129 45 255 49 397 12z m-627 -2175 c204 -46 376 -179 463 -359 54 -112 68 -182 68 -330 0 -121 -2 -136 -31 -211 -53 -141 -135 -250 -248 -328 -125 -88 -2229 -1327 -2233 -1316 -3 8 515 1901 522 1907 10 10 1016 587 1045 599 123 53 283 67 414 38z m-925 -2868 l-213 -796 -422 422 c-239 239 -419 426 -414 431 12 12 1255 745 1259 742 1 -1 -93 -361 -210 -799z"/></g>
      </SvgIcon>,

      "Immer": 
      <SvgIcon viewBox="0 0 325 325" style={cStyle}>  
        <path d="M 110.25,83.00 C 125.62,89.38 143.50,105.62 159.38,127.88 159.38,127.88 167.38,138.88 167.38,138.88 167.38,138.88 170.12,133.50 170.12,133.50 180.00,113.75 197.25,94.62 211.50,87.62 231.88,77.50 255.13,80.38 273.88,95.12 282.62,102.12 293.88,117.75 296.75,127.00 297.50,129.50 297.25,129.62 288.25,129.00 281.75,128.62 277.25,129.00 273.25,130.38 273.25,130.38 267.62,132.38 267.62,132.38 267.62,132.38 265.00,128.12 265.00,128.12 261.50,122.50 252.25,114.25 247.00,112.00 226.00,103.25 204.88,115.50 185.12,147.88 185.12,147.88 179.88,156.38 179.88,156.38 179.88,156.38 190.25,169.62 190.25,169.62 211.00,196.12 227.25,210.00 237.88,210.00 244.63,210.00 251.00,207.00 257.50,200.62 257.50,200.62 263.12,195.00 263.12,195.00 263.12,195.00 268.75,197.88 268.75,197.88 273.25,200.00 276.50,200.62 284.62,200.62 290.38,200.62 295.00,200.75 295.00,201.00 295.00,201.12 293.75,203.75 292.38,206.62 283.75,223.50 270.88,236.62 256.25,243.62 247.25,248.00 246.38,248.12 233.12,248.12 219.50,248.12 219.00,248.00 209.38,243.25 201.00,239.12 197.00,236.00 185.62,224.50 178.00,216.88 168.62,206.00 164.88,200.38 164.88,200.38 157.88,190.00 157.88,190.00 157.88,190.00 151.25,201.25 151.25,201.25 130.62,236.00 107.12,250.88 79.75,246.38 74.75,245.50 67.00,243.12 62.50,240.88 49.38,234.50 34.38,217.75 29.00,203.75 29.00,203.75 27.75,200.62 27.75,200.62 27.75,200.62 36.12,201.00 36.12,201.00 42.25,201.38 46.25,200.75 51.00,199.00 51.00,199.00 57.50,196.50 57.50,196.50 57.50,196.50 59.25,199.88 59.25,199.88 62.12,205.25 70.88,213.38 77.25,216.38 81.38,218.38 85.38,219.25 91.25,219.25 101.88,219.38 110.75,215.12 121.00,204.88 129.25,196.88 143.75,176.25 143.75,172.75 143.75,168.00 112.63,130.88 103.12,124.25 90.13,115.38 77.62,117.12 66.25,129.62 60.38,136.12 59.75,136.38 57.75,134.50 54.13,131.25 45.12,128.75 37.38,128.75 32.50,128.75 30.00,128.25 30.00,127.25 30.00,124.25 40.25,108.62 47.00,101.38 60.62,86.62 74.50,80.12 92.50,80.12 100.75,80.00 104.62,80.75 110.25,83.00 Z M 294.75,139.50 C 316.75,148.62 316.75,181.38 294.75,190.50 285.12,194.62 272.00,192.25 264.50,185.25 254.00,175.38 253.50,156.50 263.50,145.75 270.75,138.00 284.62,135.25 294.75,139.50 Z M 49.75,142.38 C 58.88,147.12 63.75,155.12 63.75,165.62 63.75,180.75 53.25,191.25 38.12,191.25 23.12,191.25 12.50,180.75 12.50,165.62 12.50,155.00 17.38,147.12 26.88,142.12 32.25,139.25 44.00,139.38 49.75,142.38 Z" />
      </SvgIcon>,

      "Express":
      <SvgIcon viewBox="0 0 128 128" style={cStyle}>
        <g transform="translate(6.4, 6.4) scale(0.9, 0.9)"><path d="M126.67,98.44c-4.56,1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89,76,81.85,85.2,75.14,94.77c-2.4,3.42-4.92,4.91-9.4,3.7L92.66,62.34,67.6,29.71c4.31-.84,7.29-.41,9.93,3.45,5.83,8.52,12.26,16.63,18.67,25.21C102.65,49.82,109,41.7,115,33.26c2.41-3.42,5-4.72,9.33-3.46-3.28,4.35-6.49,8.63-9.72,12.88-4.36,5.73-8.64,11.53-13.16,17.14-1.61,2-1.35,3.3.09,5.19C109.9,76,118.16,87.1,126.67,98.44Z" /><path d="M1.33,61.74c.72-3.61,1.2-7.29,2.2-10.83,6-21.43,30.6-30.34,47.5-17.06C60.93,41.64,63.39,52.62,62.9,65H7.1c-.84,22.21,15.15,35.62,35.53,28.78,7.15-2.4,11.36-8,13.47-15,1.07-3.51,2.84-4.06,6.14-3.06-1.69,8.76-5.52,16.08-13.52,20.66-12,6.86-29.13,4.64-38.14-4.89C5.26,85.89,3,78.92,2,71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33,64.78,1.33,61.74ZM7.2,60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63,32.56,7.85,43.7,7.2,60.25Z" /></g>
        </SvgIcon>,
      
      "Apollo":
      <SvgIcon viewBox="0 0 256 256" style={cStyle}>
        <g transform="translate(12.8, 12.8) scale(0.9, 0.9)"><path d="M160.227,178.5186 L187.857,178.5186 L143.75,64.0486 L113.201,64.0486 L69.094,178.5186 L96.726,178.5186 L103.934,159.1286 L145.609,159.1286 L138.065,137.6726 L110.625,137.6726 L128.475,88.4186 L160.227,178.5186 Z M251.339,93.768 C250.357,90.232 246.705,88.155 243.154,89.141 C239.617,90.123 237.544,93.787 238.526,97.324 C241.299,107.309 242.704,117.63 242.704,128 C242.704,191.248 191.248,242.702 128,242.702 C64.752,242.702 13.297,191.248 13.297,128 C13.297,64.751 64.752,13.296 128,13.296 C154.793,13.296 180.718,22.814 201.179,39.752 C200.383,41.652 199.941,43.737 199.941,45.925 C199.941,54.76 207.103,61.922 215.938,61.922 C224.773,61.922 231.935,54.76 231.935,45.925 C231.935,37.09 224.773,29.928 215.938,29.928 C214.237,29.928 212.6,30.199 211.062,30.691 C188.022,11.056 158.513,0 128,0 C57.421,0 0,57.42 0,128 C0,198.579 57.421,255.999 128,255.999 C198.579,255.999 256,198.579 256,128 C256,116.428 254.433,104.91 251.339,93.768 Z"></path></g>
      </SvgIcon>,
      
      "Node":
      <SvgIcon viewBox="0 0 600 600" style={cStyle}>
        <g transform="translate(60, 60) scale(0.9, 0.95)"><path d="m485.291 129.408-224-128c-3.285-1.877-7.296-1.877-10.581 0l-224 128c-3.328 1.899-5.376 5.44-5.376 9.259v234.667c0 3.819 2.048 7.36 5.376 9.259l224 128c1.643.939 3.456 1.408 5.291 1.408s3.648-.469 5.291-1.408l224-128c3.328-1.899 5.376-5.44 5.376-9.259v-234.667c-.001-3.819-2.049-7.36-5.377-9.259z"/></g>
      </SvgIcon>,

      "Redux": 
      <SvgIcon viewBox="0 0 100 100" style={cStyle}>
        <g fill={setColor}><path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"/><path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"/><path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"/></g>
      </SvgIcon>,

      "Redux Saga": 
      <SvgIcon width="2500" height="1515" 
        viewBox="0 0 66 40" preserveAspectRatio="xMinYMin meet"
        transform="translate(4, 5) scale(1.1, 1.1)"
      >
        <path fill={setColor} d="M35.259 14.782a2.591 2.591 0 0 1 3.891-2.243c2.348-.862 4.963-1.313 7.682-1.313 7.281 0 13.526 3.252 15.637 7.932-.018 1.108-1.592 1.624-2.22.944-1.731-3.759-7.199-6.465-13.417-6.465-2.26 0-4.429.345-6.393 1.004a2.592 2.592 0 1 1-5.18.141zm29.113 9.644a2.592 2.592 0 1 0-4.626 1.605c-.828 1.273-2.115 2.426-3.764 3.352-2.547 1.428-5.796 2.215-9.151 2.215-2.905 0-5.694-.575-8.068-1.665-1.604-.737-2.938-1.667-3.935-2.738-.661-.385-2.189.843-1.635 1.779 2.994 3.114 8.072 5.036 13.638 5.036 3.761 0 7.43-.896 10.331-2.524 2.126-1.193 3.776-2.738 4.814-4.476a2.594 2.594 0 0 0 2.396-2.584z"/>
        <path fill={setColor} d="M14.435 29.29c-2.364-3.065-3.703-7.39-3.703-12.06 0-4.25 1.121-8.261 3.156-11.295C16.021 2.752 18.907 1 22.013 1c2.831 0 5.53 1.492 7.601 4.2 1.955 2.558 3.227 6.047 3.58 9.826a24.983 24.983 0 0 0-2.591-1.243C29.6 7.776 26.064 3.411 22.013 3.411c-2.277 0-4.452 1.373-6.124 3.867-1.771 2.641-2.747 6.176-2.747 9.953 0 4.152 1.227 8.094 3.31 10.724a2.592 2.592 0 1 1-2.017 1.335zm18.443-12.781c-4.232-2.444-8.954-3.414-12.862-2.732a2.592 2.592 0 1 0 .733 2.317c3.289-.486 7.282.4 10.923 2.503 4.447 2.567 7.592 6.552 8.207 10.247.767.32 1.604.594 2.51.807-.236-4.8-3.919-9.915-9.511-13.142zm.639 19.98c-2.334.297-4.982-.074-7.586-1.048-.748.578-1.54 1.12-2.372 1.621 2.766 1.27 5.664 1.937 8.352 1.937.651 0 1.291-.039 1.912-.118 3.219-.409 5.77-1.861 7.237-4.105a22.276 22.276 0 0 1-2.45-.745c-1.129 1.317-2.898 2.179-5.093 2.458zm-2.581-9.472a2.592 2.592 0 1 0-2.151-1.105c-.493 1.186-1.216 2.373-2.138 3.504-1.426 1.748-3.301 3.32-5.422 4.545-2.961 1.711-6.15 2.629-9.083 2.628-.306 0-.61-.01-.91-.03-2.996-.201-5.272-1.398-6.411-3.369-2.018-3.496-.006-8.754 4.686-12.621a24.79 24.79 0 0 1-.21-2.594l-.133-.185c-3.056 2.197-5.406 5.033-6.619 7.983-1.285 3.126-1.218 6.188.188 8.622 1.553 2.689 4.514 4.313 8.337 4.57.351.023.706.035 1.064.035 3.355 0 6.97-1.03 10.296-2.951 3.965-2.288 7.009-5.556 8.506-9.032z"/>
      </SvgIcon>,

      "CircleCI": 
      <SvgIcon viewBox="-10 -6 120 120" style={cStyle}>
        <path d="m 38.6,52.6 c 0,-6.9 5.6,-12.5 12.5,-12.5 6.9,0 12.5,5.6 12.5,12.5 0,6.9 -5.6,12.5 -12.5,12.5 C 44.2,65.2 38.6,59.5 38.6,52.6 Z M 51.1,0 C 26.5,0 5.9,16.8 0.1,39.6 0.1,39.8 0,39.9 0,40.1 c 0,1.4 1.1,2.5 2.5,2.5 l 21.2,0 c 1,0 1.9,-0.6 2.3,-1.5 l 0,0 C 30.4,31.6 39.9,25 51.1,25 66.3,25 78.7,37.4 78.7,52.6 78.7,67.8 66.3,80.2 51.1,80.2 40,80.2 30.4,73.6 26,64.1 l 0,0 c -0.4,-0.9 -1.3,-1.5 -2.3,-1.5 l -21.2,0 c -1.4,0 -2.5,1.1 -2.5,2.5 0,0.2 0,0.3 0.1,0.5 5.8,22.8 26.4,39.6 51,39.6 29.1,0 52.7,-23.6 52.7,-52.7 C 103.8,23.5 80.2,0 51.1,0 Z" />
      </SvgIcon>,

      "Heroku":
      <SvgIcon viewBox="0 0 24 24" style={cStyle}>
        <path d="M17,3H7C5.9,3,5,3.9,5,5v14c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V5C19,3.9,18.1,3,17,3z M8,18v-3l2,1.5L8,18z M16,18h-2 c0,0,0-3.103,0-5.027c0-0.576-0.542-2.203-5.988,0.027C8,13.034,8,6.014,8,6.014L10,6v4.369c0,0,6-1.757,6,2.631V18z M15.008,8 C14.406,8,13.302,7.999,13,7.999C13.632,7.036,14.128,6,14.128,6h1.882C16.01,6,15.754,6.827,15.008,8z"/>
      </SvgIcon>,

      "Jest":
      <SvgIcon viewBox="-25 -25 306 323" style={cStyle}>
        <path fill={setColor} d="M239.972557,139.203 C239.972557,124.669 228.190557,112.887 213.656557,112.887 C212.721557,112.887 211.799557,112.937 210.890557,113.032 L247.035557,6.427 L93.431557,6.427 L129.525557,112.94 C128.996557,112.908 128.464557,112.887 127.926557,112.887 C113.392557,112.887 101.610557,124.669 101.610557,139.203 C101.610557,150.951 109.309557,160.897 119.936557,164.281 C114.323557,174.003 107.261557,182.759 99.243557,190.323 C88.340557,200.609 75.862557,208.408 62.367557,213.214 C46.299557,204.96 38.711557,186.602 45.558557,170.507 C46.331557,168.69 47.120557,166.847 47.875557,165.013 C59.515557,162.296 68.189557,151.86 68.189557,139.392 C68.189557,124.858 56.407557,113.076 41.873557,113.076 C27.338557,113.076 15.556557,124.858 15.556557,139.392 C15.556557,148.305 19.991557,156.176 26.769557,160.937 C20.255557,175.768 10.681557,191.288 7.69855701,209.276 C4.12355701,230.835 7.68755701,253.719 26.332557,266.642 C69.756557,296.738 116.892557,247.985 166.591557,235.729 C184.602557,231.287 204.373557,232.003 220.242557,222.812 C232.159557,215.91 240.015557,204.472 242.245557,191.63 C244.447557,178.944 241.236557,166.313 233.852557,156.071 C237.671557,151.503 239.972557,145.623 239.972557,139.203 L239.972557,139.203 Z M154.240557,139.296 C154.240557,139.265 154.243557,139.234 154.243557,139.203 C154.243557,129.659 149.161557,121.301 141.557557,116.688 L170.285557,58.597 L199.063557,117.304 C191.996557,122.022 187.339557,130.068 187.339557,139.203 C187.339557,139.395 187.350557,139.584 187.354557,139.775 L154.240557,139.296 L154.240557,139.296 Z" ></path>
      </SvgIcon>,

      "Puppeteer": 
      <SvgIcon viewBox="-35 -75 460 460" style={cStyle}>
        <path fill={setColor} d="M272.169 35.748 L 200.570 71.121 129.739 36.140 C 90.782 16.901,58.114 1.159,57.145 1.159 C 56.176 1.159,43.444 6.984,28.851 14.104 L 2.319 27.048 2.319 42.408 L 2.319 57.768 19.420 66.676 C 28.826 71.575,37.278 76.309,38.203 77.196 C 39.780 78.708,37.965 108.991,33.989 147.517 L 33.337 153.831 17.248 161.810 L 1.159 169.789 1.159 185.754 L 1.159 201.720 13.823 208.071 C 20.787 211.564,26.717 214.829,26.999 215.327 C 28.365 217.736,25.315 233.520,21.774 242.366 L 17.847 252.174 11.683 252.799 C 1.197 253.862,0.000 256.249,-0.000 276.096 L -0.000 292.352 3.389 295.741 L 6.778 299.130 199.420 299.130 L 392.062 299.130 395.452 295.741 L 398.841 292.352 398.841 276.096 C 398.841 256.910,397.575 254.101,388.370 252.857 L 383.319 252.174 379.389 242.366 C 377.166 236.819,375.056 229.012,374.532 224.395 C 373.429 214.686,372.771 215.474,388.696 207.429 L 400.000 201.718 400.000 185.753 L 400.000 169.789 383.911 161.810 L 367.822 153.831 367.171 147.517 C 363.194 108.991,361.380 78.708,362.956 77.196 C 363.881 76.309,372.333 71.575,381.739 66.676 L 398.841 57.768 398.841 42.482 L 398.841 27.195 386.377 20.962 C 379.522 17.534,367.130 11.499,358.841 7.552 L 343.768 0.375 272.169 35.748 M95.576 106.107 L 112.892 115.139 82.987 130.101 C 66.539 138.330,52.798 144.779,52.452 144.433 C 51.807 143.788,55.233 96.360,56.416 89.557 L 57.073 85.780 67.667 91.427 C 73.494 94.533,86.053 101.139,95.576 106.107 M347.180 116.345 C 348.261 131.553,348.905 144.235,348.611 144.529 C 348.318 144.822,334.654 138.346,318.246 130.138 L 288.415 115.213 316.070 100.550 C 335.049 90.487,343.960 86.327,344.471 87.291 C 344.880 88.064,346.099 101.138,347.180 116.345 M271.827 193.697 L 343.098 229.714 348.300 227.413 L 353.502 225.112 355.286 229.947 C 356.858 234.209,359.387 247.302,359.412 251.304 C 359.418 252.457,326.884 252.754,200.580 252.754 C 74.276 252.754,41.741 252.457,41.748 251.304 C 41.772 247.302,44.301 234.209,45.874 229.947 L 47.658 225.112 52.856 227.411 L 58.055 229.711 129.027 193.778 C 168.062 174.014,200.125 157.808,200.278 157.763 C 200.431 157.718,232.628 173.888,271.827 193.697 M36.031 267.737 C 43.500 275.205,38.390 287.536,27.826 287.536 C 17.263 287.536,12.153 275.205,19.621 267.737 C 22.279 265.079,24.049 264.348,27.826 264.348 C 31.603 264.348,33.373 265.079,36.031 267.737 M70.814 267.737 C 78.282 275.205,73.172 287.536,62.609 287.536 C 58.832 287.536,57.062 286.805,54.404 284.147 C 46.935 276.679,52.045 264.348,62.609 264.348 C 66.386 264.348,68.156 265.079,70.814 267.737 M105.596 267.737 C 113.065 275.205,107.955 287.536,97.391 287.536 C 93.614 287.536,91.844 286.805,89.186 284.147 C 81.718 276.679,86.828 264.348,97.391 264.348 C 101.168 264.348,102.938 265.079,105.596 267.737" fillRule="evenodd"/>      
      </SvgIcon>,

      "Vercel":
      <SvgIcon width="116" height="100" viewBox="0 0 116 100" transform="scale(0.7, 0.7) translate(3, 0)">
        <path fill={setColor} fill-rule="evenodd" clip-rule="evenodd" d="M57.5 0L115 100H0L57.5 0z"/>
      </SvgIcon>,

      "Figma":
      <SvgIcon viewBox="0 0 24 24" transform="scale(0.7, 0.7) translate(2, 0)">
        <path fill={setColor} d="M12 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM4 20a4 4 0 0 1 4-4h4v4a4 4 0 1 1-8 0zM12 0v8h4a4 4 0 1 0 0-8h-4zM4 4a4 4 0 0 0 4 4h4V0H8a4 4 0 0 0-4 4zM4 12a4 4 0 0 0 4 4h4V8H8a4 4 0 0 0-4 4z"/>
      </SvgIcon>
    }

    return iconSwitch[type];
  }

  render() {
    const tools = Database["Toolset"];
    const colorSet = this.props.currentScheme.colorSet;
    const width = this.state.width;
    
    return (
      <Grid container direction="column" spacing={16} className="ToolsContainer">
        {Object.keys(tools).map((toolskey, i) => (
          <Grid item key={`${i}_tools`} container spacing={width < mdBreakpoint ? 16 : 8} 
            direction="row" alignItems="center" justify="flex-start"
          >
            <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
              {this.getIconTools(toolskey, Object.values(colorSet)[i])}
            </Grid>
            <Grid item xs={9} sm={9} md={3} lg={2} xl={2}>
              <Typography gutterBottom variant="button" style={{color: Object.values(colorSet)[i], display: "flex", verticalAlign: "middle"}}>
                {toolskey}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
              <Grid container spacing={8} direction="row" alignItems="center"
                justify={width < mdBreakpoint ? "flex-start" : "flex-end"}
              >
                {tools[toolskey].map(key => (
                  <Grid item key={key}>
                    <Chip variant="default" icon={this.getIconTools(key)} 
                      label={<span style={{paddingLeft: "4px"}}>{key}</span>}
                      la 
                      style={{
                        color: this.props.currentScheme.bg,
                        backgroundColor: Object.values(colorSet)[i],
                      }}/>
                  </Grid>
              ))}
            </Grid>
          </Grid>
            {width < mdBreakpoint && i !== Object.keys(tools).length - 1 &&
              <Divider style={{ width: "100%", marginTop: "25px", marginBottom: "15px" }} />
            }
        </Grid>
        ))}
      </Grid>
    );
  }
}

export default ToolsContent;