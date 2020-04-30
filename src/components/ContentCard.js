import React from 'react';
import './Components.css';
import { Typography } from '@material-ui/core';

const ContentCard = (props) => {
  const { headingIcon, heading, body, content, mainColor, isDark } = props;
  return (
    <div className={`ContentCard ${isDark ? "StandardCardDark" : "StandardCard"}`}>
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
            <Typography color="textSecondary" style={{fontSize: "14px"}} variant="body1">
              {body[key]}
            </Typography>
            {Object.keys(body).length-1 !== i && <br/>}
          </div>
        ))}

      {content !== undefined && content}
    </div>
  );
};

export default ContentCard;