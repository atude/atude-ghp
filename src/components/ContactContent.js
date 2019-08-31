import React from 'react';
import '../components/Components.css';
import { Grid, Typography } from '@material-ui/core';
import { GithubCircle, Linkedin, EmailMarkAsUnread, Discord, GooglePlay } from 'mdi-material-ui';

const cStyle = {fontSize: "34px"};
const icons = {
  "GitHub": <GithubCircle style={cStyle}/>,
  "Play Store": <GooglePlay style={{fontSize: cStyle.fontSize, color: "#03A9F4"}}/>,
  "LinkedIn": <Linkedin style={{fontSize: cStyle.fontSize, color: "#0077B5"}}/>,
  "Email": <EmailMarkAsUnread style={{fontSize: cStyle.fontSize, color: "#D44638"}}/>,
  "Discord": <Discord style={{fontSize: cStyle.fontSize, color: "#7289da"}}/>,
}

class ContactContent extends React.Component {

  getIconObj = (type) => {
    return icons[type];
  }

  getIcon = (name) => {
    return (
      <Grid item xs={3}>
        {this.getIconObj(name)}
      </Grid>
    );
  }

  getName = (name, desc, link) => {
    return (
      <Grid item xs={9}>
        <Typography variant="button" style={{textDecoration: "none", fontSize: "15px"}}
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
            {this.getIcon(key)}
            {isLinks ? this.getName(key, source[key][1], source[key][0]) : this.getName(key, source[key])}
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default ContactContent;