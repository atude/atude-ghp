import React from 'react';
import '../components/Components.css';
import ContentCard from '../components/ContentCard.js';
import { Grid } from '@material-ui/core';
import { OpenInNew, Forum } from 'mdi-material-ui';
import ContactContent from '../components/ContactContent';
import Database from '../assets/Database';
import AnchoredSubheading from '../components/AnchoredSubheading';
import { getRoutes } from '../Routes';
 
const ContactPage = (props) => {
  const { mainColor, prevColor, currentScheme, isDark, sectionId } = props;

  return (
    <div>
      <AnchoredSubheading 
        id={sectionId}
        color={mainColor}
        prevColor={prevColor}
        title={getRoutes(currentScheme)[sectionId].title}
        icon={getRoutes(currentScheme)[sectionId].icAppbar}
        currentScheme={currentScheme}
      />
      <Grid container direction="row" alignItems="stretch" justify="center" spacing={24}>
        <Grid item xs={12} sm={6}>
          <ContentCard mainColor={mainColor} currentScheme={currentScheme} isDark={isDark}
            headingIcon={
              <OpenInNew 
                style={{ color: mainColor }} 
                fontSize="large" 
                className="ContentCardHeadIcon"
              />
            }
            heading="Links" 
            body=""
            content={
              <ContactContent 
                mainColor={mainColor} 
                isLinks={true} 
                source={Database.Contact.Links} 
                currentScheme={currentScheme}
              />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContentCard 
            mainColor={mainColor} 
            currentScheme={currentScheme} 
            isDark={isDark}
            headingIcon={
              <Forum 
                style={{ color: mainColor }} 
                fontSize="large" 
                className="ContentCardHeadIcon"
              />
            }
            heading="Contact" 
            body=""
            content={
              <ContactContent 
                mainColor={mainColor} 
                isLinks={false} 
                source={Database.Contact.Contact} 
                currentScheme={currentScheme}
              />
            }
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactPage;