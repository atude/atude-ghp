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
        <Typography style={{fontSize: "13px"}} variant="body1">
          {body}
        </Typography>

        {content !== undefined && content}
      </Paper>
    );
  }
}

export default ContentCard;