import React from 'react';
import '../components/Components.css';
import ContentCard from '../components/ContentCard.js';
import { Grid, Slide } from '@material-ui/core';
import { OpenInNew, Forum, TooltipAccount } from 'mdi-material-ui';
import ContactContent from '../components/ContactContent';
import ContactForm from '../components/ContactForm';
import Database from '../assets/Database';

const tBase = 700;
const tAdd = 300;
 
const ContactPage = (props) => {
  const { mainColor, currentScheme, isDark } = props;

  return (
    <div className="ParentCenterContainer">
      <Grid container spacing={24} direction="row" alignItems="stretch" justify="center">
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} container 
        direction="row" alignItems="stretch" justify="center">
          <Grid item xs={12} style={{paddingBottom: "24px"}}>
            <Slide in direction="right" timeout={tBase}>
              <ContentCard mainColor={mainColor} currentScheme={currentScheme} isDark={isDark}
                headingIcon={<OpenInNew style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
                heading="Links" 
                body=""
                content={<ContactContent mainColor={mainColor} isLinks={true} source={Database.Contact.Links} currentScheme={currentScheme}/>}
              />
            </Slide>
          </Grid>
          <Grid item xs={12}>
            <Slide in direction="right" timeout={tBase+tAdd}>
              <ContentCard mainColor={mainColor} currentScheme={currentScheme} isDark={isDark}
                headingIcon={<Forum style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
                heading="Contact" 
                body=""
                content={<ContactContent mainColor={mainColor} isLinks={false} source={Database.Contact.Contact} currentScheme={currentScheme}/>}
              />
            </Slide>
        </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Slide in direction="left" timeout={tBase+(tAdd*2)}>
            <ContentCard mainColor={mainColor} currentScheme={currentScheme} isDark={isDark}
              headingIcon={<TooltipAccount style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
              heading="Get in Touch" 
              body={Database["Contact Form"]}
              content={<ContactForm currentScheme={currentScheme}/>}
            />
          </Slide>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactPage;