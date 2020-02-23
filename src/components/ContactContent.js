import React from 'react';
import '../components/Components.css';
import { Grid, Typography } from '@material-ui/core';
import { GithubCircle, Linkedin, EmailMarkAsUnread, Discord, GooglePlay } from 'mdi-material-ui';

class ContactContent extends React.Component {

  getIconObj = (type) => {
    const cStyle = {fontSize: "38px", color: this.props.currentScheme.lightGray};

    const icons = {
      "GitHub": <GithubCircle style={cStyle} className="ContactIcon"/>,
      "Play Store": <GooglePlay style={cStyle} className="ContactIcon"/>,
      "LinkedIn": <Linkedin style={cStyle} className="ContactIcon"/>,
      "Email": <EmailMarkAsUnread style={cStyle} />,
      "Discord": <Discord style={cStyle} />,
    };

    return icons[type];
  }

  getIcon = (name, link) => {
    return (
      <Grid item xs={3}
        component="a" href={link} ref="noopener noreferrer" target="_blank"
      >
        {this.getIconObj(name)}
      </Grid>
    );
  }

  getName = (name, desc, link) => {
    return (
      <Grid item xs={9}>
        <Typography variant="button" style={{textDecoration: "none", fontSize: "15px", color: this.props.mainColor}}
        component="a" href={link} ref="noopener noreferrer" target="_blank">
          {name}
        </Typography>
        <Typography style={{fontSize: "12px", color: this.props.currentScheme.lightGray, wordWrap: "break-word"}} variant="body1">
          {desc}
        </Typography>
      </Grid>
    );
  }

  render() {    
    const { source, isLinks } = this.props;
    
    return(
      <Grid container direction="column" alignItems="flex-start" justify="center" spacing={24} className="ContactContentCont">
        {Object.keys(source).map(key => (
          <Grid container direction="row" key={key} xs={12} sm={12} md={12} lg={12} xl={12} item>
            {this.getIcon(key, isLinks ? source[key][0] : null)}
            {isLinks ? this.getName(key, source[key][1], source[key][0]) : this.getName(key, source[key])}
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default ContactContent;