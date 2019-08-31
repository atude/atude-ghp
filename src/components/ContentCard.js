import React from 'react';
import './Components.css';
import { Paper, Typography } from '@material-ui/core';

class ContentCard extends React.Component {

  render() {
    const { headingIcon, heading, body, content, mainColor } = this.props;
    return (
      <Paper className="ContentCard">
        {/* Heading */}
        {headingIcon}
        <Typography style={{color: mainColor, fontSize: "26px"}} variant="h2">
          {heading}
        </Typography>
        <br/>
        {/* Body */}
          {Object.keys(body).map((key, i) => (
            <div key={key}>
              <Typography style={{color: mainColor, fontSize: "14px", paddingBottom: "3px"}} variant="button">
                {key !== "" && key}
              </Typography>
              <Typography style={{fontSize: "14px"}} variant="body1">
                {body[key]}
              </Typography>
              {Object.keys(body).length-1 !== i && <br/>}
            </div>
          ))}

        {content !== undefined && content}
      </Paper>
    );
  }
}

export default ContentCard;