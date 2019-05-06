import React from 'react';
import './Components.css';
import { Paper, Typography } from '@material-ui/core';

class ContentCard extends React.Component {

  render() {
    const { headingIcon, heading, body, content } = this.props;
    return (
      <Paper className="ContentCard">
        {/* Heading */}
        {headingIcon}
        <Typography style={{fontSize: "34px"}} variant="h2" color="primary">
          {heading}
        </Typography>
        <br/>
        {/* Body */}
        <Typography style={{fontSize: "15px"}} variant="body1">
          {body}
        </Typography>

        {content !== undefined && content}
      </Paper>
    );
  }
}

export default ContentCard;