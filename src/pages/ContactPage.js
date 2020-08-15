import React from 'react';
import '../components/Components.css';
import ContentCard from '../components/ContentCard.js';
import { Grid } from '@material-ui/core';
import { OpenInNew, Forum, TooltipAccount } from 'mdi-material-ui';
import ContactContent from '../components/ContactContent';
import ContactForm from '../components/ContactForm';
import Database from '../assets/Database';
import AnchoredSubheading from '../components/AnchoredSubheading';
import { getRoutes } from '../Routes';
 
const ContactPage = (props) => {
  const { mainColor, currentScheme, isDark, sectionId } = props;

  return (
    <div>
      <AnchoredSubheading 
        id={sectionId}
        color={getRoutes(currentScheme)[sectionId].color}
        title={getRoutes(currentScheme)[sectionId].title}
        icon={getRoutes(currentScheme)[sectionId].icAppbar}
      />
      <Grid container spacing={24} direction="row" alignItems="stretch" justify="center">
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} container 
        direction="row" alignItems="stretch" justify="center">
          <Grid item xs={12} style={{paddingBottom: "24px"}}>
            <ContentCard mainColor={mainColor} currentScheme={currentScheme} isDark={isDark}
              headingIcon={<OpenInNew style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
              heading="Links" 
              body=""
              content={<ContactContent mainColor={mainColor} isLinks={true} source={Database.Contact.Links} currentScheme={currentScheme}/>}
            />
          </Grid>
          <Grid item xs={12}>
            <ContentCard mainColor={mainColor} currentScheme={currentScheme} isDark={isDark}
              headingIcon={<Forum style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
              heading="Contact" 
              body=""
              content={<ContactContent mainColor={mainColor} isLinks={false} source={Database.Contact.Contact} currentScheme={currentScheme}/>}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <ContentCard mainColor={mainColor} currentScheme={currentScheme} isDark={isDark}
            headingIcon={<TooltipAccount style={{color: mainColor}} fontSize="large" className="ContentCardHeadIcon"/>}
            heading="Get in Touch" 
            body={Database["Contact Form"]}
            content={<ContactForm currentScheme={currentScheme}/>}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactPage;