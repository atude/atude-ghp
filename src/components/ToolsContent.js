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
    if(!setColor) setColor = "#fff";

    const cStyle = {color: setColor, fontSize: "21px", marginLeft: "7px"};
    const mainStyle = {color: setColor, fontSize: "28px", marginLeft: "5px", marginRight: "5px"};
    const iconSwitch = {
      "Web & App Development": <Iframe style={mainStyle}/>,
      "Data Management & Services": <Server style={mainStyle}/>,
      "Design Frameworks": <DeveloperBoard style={mainStyle}/>, 
      "Design Tools": <FormatColorFill style={mainStyle}/>, 
      "Devops": <Infinity style={mainStyle}/>,

      "React": <ReactIcon style={cStyle}/>,
      "React Native": <ReactIcon style={cStyle}/>,
      "React Native Elements": <ReactIcon style={cStyle}/>,
      "Material UI": <MaterialUi style={cStyle}/>, 
      "Unity": <Unity style={cStyle}/>,
      "GitHub": <GithubCircle style={cStyle}/>,
      "GitLab": <Gitlab style={cStyle}/>,
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
        <g transform="translate(0.000000,800.000000) scale(0.10000,-0.100000)"><path stroke={setColor} strokeWidth="300" d="M5380 7073 c-69 -12 -152 -38 -218 -68 -40 -19 -714 -404 -1498 -857 -1035 -597 -1430 -830 -1439 -848 -7 -14 -148 -524 -314 -1133 -281 -1029 -302 -1110 -291 -1143 14 -41 60 -74 105 -74 22 0 251 127 825 459 437 252 796 458 797 457 0 0 -122 -449 -273 -996 -200 -726 -273 -1003 -268 -1025 4 -23 142 -167 567 -593 614 -614 599 -602 673 -566 21 11 42 26 47 34 5 9 131 471 281 1029 l271 1013 398 237 c219 130 424 258 457 284 111 89 212 230 282 397 41 95 630 2248 649 2371 7 43 9 118 6 179 -22 409 -317 751 -719 834 -72 15 -273 20 -338 9z m330 -234 c308 -82 524 -374 508 -689 -5 -85 -30 -184 -227 -910 -122 -448 -224 -823 -227 -833 -4 -14 -17 0 -49 55 -111 190 -300 334 -531 404 -81 25 -103 28 -249 28 -145 0 -168 -3 -248 -27 -48 -15 -118 -43 -155 -61 -37 -19 -643 -368 -1347 -774 -704 -407 -1281 -739 -1282 -738 -1 0 114 423 254 938 l256 938 1414 816 c936 540 1439 825 1486 841 129 45 255 49 397 12z m-627 -2175 c204 -46 376 -179 463 -359 54 -112 68 -182 68 -330 0 -121 -2 -136 -31 -211 -53 -141 -135 -250 -248 -328 -125 -88 -2229 -1327 -2233 -1316 -3 8 515 1901 522 1907 10 10 1016 587 1045 599 123 53 283 67 414 38z m-925 -2868 l-213 -796 -422 422 c-239 239 -419 426 -414 431 12 12 1255 745 1259 742 1 -1 -93 -361 -210 -799z"/></g>
      </SvgIcon>
    }

    return iconSwitch[type];
  }

  render() {
    const tools = Database["Toolset"];
    const colorSet = this.props.currentScheme.colorSet;
    const width = this.state.width;
    
    return (
      <Grid container direction="column" spacing={24} className="ToolsContainer">
        {Object.keys(tools).map((toolskey, i) => (
          <Grid item key={`${i}_tools`} container spacing={width < mdBreakpoint ? 24 : 8} 
            direction="row" alignItems="center" justify="flex-start"
          >
            <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
              {this.getIconTools(toolskey, Object.values(colorSet)[i])}
            </Grid>
            <Grid item xs={9} sm={9} md={5} lg={4} xl={4}>
              <Typography gutterBottom variant="button" style={{color: Object.values(colorSet)[i], display: "flex", verticalAlign: "middle"}}>
                {toolskey}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
              <Grid container spacing={8} direction="row" alignItems="center"
                justify={width < mdBreakpoint ? "flex-start" : "flex-end"}
              >
                {tools[toolskey].map(key => (
                  <Grid item key={key}>
                    <Chip variant="default" icon={this.getIconTools(key)} 
                    label={key} 
                    style={{
                      color: "#fff",
                      backgroundColor: Object.values(colorSet)[i],
                    }}/>
                  </Grid>
              ))}
            </Grid>
          </Grid>
            {width < mdBreakpoint && i != Object.keys(tools).length - 1 &&
              <Divider style={{ width: "100%", marginTop: "25px", marginBottom: "15px" }} />
            }
        </Grid>
        ))}
      </Grid>
    );
  }
}

export default ToolsContent;