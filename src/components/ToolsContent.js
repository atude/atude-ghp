import React from 'react';
import './Components.css';
import { Grid, Typography, Chip } from '@material-ui/core';
import { VisualStudio, React as ReactIcon, Unity, GithubCircle, Adobe, MaterialUi, 
  CellphoneAndroid, FormatColorFill, DeveloperBoard, Office, Babel, Brush, NpmVariantOutline, Iframe } from 'mdi-material-ui';
import Database from '../assets/Database';
import colorSet from '../assets/colorsetdark';

class ToolsContent extends React.Component {

  getIconTools = (type, setColor) => {
    const cStyle = {color: setColor, fontSize: "21px", marginLeft: "7px"};
    const mainStyle = {color: setColor, fontSize: "28px", marginLeft: "5px", marginRight: "5px"};

    switch(type){
      case "Web Development & Design": return <Iframe style={mainStyle}/>; 
      case "App Development": return <CellphoneAndroid style={mainStyle}/>; 
      case "Design & Graphics": return <FormatColorFill style={mainStyle}/>; 
      case "Other": return <DeveloperBoard style={mainStyle}/>; 

      case "React": return <ReactIcon style={cStyle}/>; 
      case "Material UI": return <MaterialUi style={cStyle}/>; 
      case "Babel": return <Babel style={cStyle}/>; 
      case "NPM": return <NpmVariantOutline style={cStyle}/>; 
      case "GIMP": return <Brush style={cStyle}/>
      case "Unity": return <Unity style={cStyle}/>;
      case "Visual Studio": return <VisualStudio style={cStyle}/>;
      case "GitHub": return <GithubCircle style={cStyle}/>;
      case "XD": return <Adobe style={cStyle}/>;
      case "Photoshop": return <Adobe style={cStyle}/>;
      case "Office": return <Office style={cStyle}/>;
      default: return;
    }
  }

  render() {
    const tools = Database["Toolset"];
    
    return (
      <Grid container direction="column" spacing={24} className="ToolsContainer">
        {Object.keys(tools).map((toolskey, i) => (
          <Grid item key={`${i}_tools`} container spacing={8} direction="row" alignItems="center" justify="flex-start">
            <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
              {this.getIconTools(toolskey, Object.values(colorSet)[i])}
            </Grid>
            <Grid item xs={9} sm={9} md={5} lg={4} xl={4}>
              <Typography gutterBottom variant="button" style={{color: Object.values(colorSet)[i], display: "flex", verticalAlign: "middle"}}>
                {toolskey}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
            <Grid container spacing={8} direction="row" alignItems="center" justify="flex-end">
              {tools[toolskey].map(key => (
                <Grid item key={key}>
                  <Chip variant="outlined" icon={this.getIconTools(key, Object.values(colorSet)[i])} 
                  label={key} color="primary"
                  style={{
                    borderColor: Object.values(colorSet)[i], 
                    color: Object.values(colorSet)[i],
                  }}/>
                </Grid>
              ))}
          </Grid>
          </Grid>
        </Grid>
        ))}
      </Grid>
    );
  }
}

export default ToolsContent;