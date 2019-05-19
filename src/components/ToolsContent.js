import React from 'react';
import './Components.css';
import { Grid, Typography, Tooltip, Chip } from '@material-ui/core';
import { VisualStudio, React as ReactIcon, Unity, GithubCircle, Adobe, MaterialUi, 
  Web, CellphoneAndroid, FormatColorFill, DeveloperBoard } from 'mdi-material-ui';
import TxtChunks from '../assets/txtchunks'
import colorSet from '../assets/colorsetdark.json';

class ToolsContent extends React.Component {

  getIconTools = (type, setColor) => {
    const cStyle = {color: setColor, fontSize: "24px", marginLeft: "5px"};
    const mainStyle = {color: setColor, fontSize: "24px", marginLeft: "5px", marginRight: "5px", float: "left"};

    switch(type){
      case "Web Development & Design": return <Web style={mainStyle} className="ToolsListIcon"/>; 
      case "App Development": return <CellphoneAndroid style={mainStyle} className="ToolsListIcon"/>; 
      case "Design & Graphics": return <FormatColorFill style={mainStyle} className="ToolsListIcon"/>; 
      case "Other": return <DeveloperBoard style={mainStyle} className="ToolsListIcon"/>; 

      case "React": return <ReactIcon style={cStyle} className="ToolsListIcon"/>; 
      case "Material UI": return <MaterialUi style={cStyle} className="ToolsListIcon"/>; 
      case "Unity": return <Unity style={cStyle} className="ToolsListIcon"/>;
      case "Visual Studio": return <VisualStudio style={cStyle} className="ToolsListIcon"/>;
      case "GitHub": return <GithubCircle style={cStyle} className="ToolsListIcon"/>;
      case "XD": return <Adobe style={cStyle} className="ToolsListIcon"/>;
      case "Photoshop": return <Adobe style={cStyle} className="ToolsListIcon"/>;
      default: return;
    }
  }

  render() {
    const tools = TxtChunks["Toolset"];
    
    return (
      <div className="ToolsContainer">
        {Object.keys(tools).map((toolskey, i) => (
          <Grid container spacing={32} direction="row" alignItems="flex-start" justify="space-between">
            <Grid item xs={12} xm md lg xl>
              {this.getIconTools(toolskey, Object.values(colorSet)[i])}
              <Typography inline variant="button" style={{color: Object.values(colorSet)[i]}}>{toolskey}</Typography>
            </Grid>
            <Grid item xs xm md lg xl>
            <Grid container spacing={8} direction="row" alignItems="center" justify="flex-end">
              {tools[toolskey].map(key => (
                <Grid item>
                  <Chip variant="outlined" icon={this.getIconTools(key, Object.values(colorSet)[i])} 
                  label={key} color="primary"
                  style={{
                    borderColor: Object.values(colorSet)[i], 
                    color: Object.values(colorSet)[i]
                  }}/>
                </Grid>
              ))}
          </Grid>
          </Grid>
        </Grid>
        ))}
      </div>
    );
  }
}

export default ToolsContent;