import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const HeadingContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5em;
  padding-top: 2em;
`;

const AnchoredSubheading = (props) => {
  const { color, title, icon, id } = props;
  return (
    <HeadingContainerStyled id={id} className="ReferenceAnchor">
      <Typography 
        className="AppbarText" 
        style={{ 
          fontSize: "32px", 
          color,
        }} 
        variant="h2" 
        inline
      >
        {title}
      </Typography>
      {icon}
    </HeadingContainerStyled>
  );
}

export default AnchoredSubheading;