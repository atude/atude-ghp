import React from 'react';
import './Components.css';
import { Grid, Typography, Chip, Divider } from '@material-ui/core';

import Database from '../assets/Database';
import { mdBreakpoint } from '../utils/layouts';
import { useMediaQuery } from 'react-responsive';
import { toolsIcon } from '../utils/icons';

const tools = Database["Toolset"];

const ToolsContent = (props) => {
  const isMdWidth = useMediaQuery({ query: `(max-width:${mdBreakpoint}px)` });
  const { currentScheme } = props;
  const colorSet = currentScheme.colorSet;
  
  return (
    <Grid container direction="column" spacing={16} className="ToolsContainer">
      {Object.keys(tools).map((toolskey, i) => (
        <Grid 
          item 
          key={`${i}_tools`} 
          container 
          spacing={isMdWidth ? 16 : 8} 
          direction="row" 
          alignItems="center" 
          justify="flex-start"
        >
          <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
            {toolsIcon(toolskey, Object.values(colorSet)[i], currentScheme)}
          </Grid>
          <Grid item xs={9} sm={9} md={3} lg={2} xl={2}>
            <Typography 
              gutterBottom 
              variant="button" 
              style={{
                color: Object.values(colorSet)[i], 
                display: "flex", 
                verticalAlign: "middle"
              }}
            >
              {toolskey}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
            <Grid container spacing={8} direction="row" alignItems="center"
              justify={isMdWidth ? "flex-start" : "flex-end"}
            >
              {tools[toolskey].map(key => (
                <Grid item key={key}>
                  <Chip 
                    variant="default" 
                    icon={toolsIcon(key, undefined, currentScheme)} 
                    label={
                      <span style={{ paddingLeft: "4px" }}>
                        {key}
                      </span>
                    }
                    style={{
                      color: props.currentScheme.bg,
                      backgroundColor: Object.values(colorSet)[i],
                    }}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {!!isMdWidth && i !== Object.keys(tools).length - 1 &&
            <Divider style={{ width: "100%", marginTop: "25px", marginBottom: "15px" }} />
          }
        </Grid>
      ))}
    </Grid>
  );
};

export default ToolsContent;