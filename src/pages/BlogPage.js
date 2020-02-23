import React, { useState, useEffect } from 'react';
import '../components/Components.css';
import { Grid, Slide, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Button, Paper } from '@material-ui/core';
import { ChevronDownCircleOutline } from 'mdi-material-ui';
import Blog from '../assets/Blog.json';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../components/CodeBlock';

export const BlogPage = (props) => {
  const { mainColor, currentScheme } = props;
  const tBase = 500;
  const tAdd = 200;
  const [blogPost, setBlogPost] = useState("");

  const getBlogContent = async (linkRef) => {
    const ref = require(`../assets/blog/${linkRef}`);
    const res = await fetch(ref);
    const resMd = await res.text();
    setBlogPost(resMd);
  }

  return (
    <Grid 
      container 
      spacing={24} 
      direction="row" 
      alignItems="flex-start" 
      justify="center"
      style={{maxWidth: "1200px", margin: 'auto'}}
    >
      <Grid item xs={12} sm={12} md={3}>
        <Paper>
          <Typography className="ResearchTopicsHeader">Research Topics</Typography>
        </Paper>
        {Object.keys(Blog).map((blogCategory, i) => (
          <Slide 
            timeout={tBase + i * tAdd} direction="right"
            in mountOnEnter
          >
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ChevronDownCircleOutline/>}>
                <Typography>{blogCategory}</Typography>
              </ExpansionPanelSummary>
              
              {Object.keys(Blog[blogCategory]).map((blogRef) => (
                <ExpansionPanelDetails>
                  <Button 
                    onClick={() => 
                      getBlogContent(Blog[blogCategory][blogRef])
                    }
                  >
                    {blogRef}
                  </Button>
                </ExpansionPanelDetails>
              ))}
              
            </ExpansionPanel>
          </Slide>
        ))}
        
      </Grid>
      <Grid item xs={12} sm={12} md={9} justify="center">      
        <Slide 
          timeout={tBase + tAdd} direction="left"
          in mountOnEnter
        >
          <Paper className="MarkdownContainer">
            <ReactMarkdown
              renderers={{
                root: (props) => (
                  <div style={{ color: currentScheme.lightGray }}>
                    {props.children}
                  </div> 
                ),
                code: CodeBlock
              }}
              source={blogPost}
              escapeHtml={false}
            />
          </Paper>
        </Slide>
      </Grid>
    </Grid>
  );
}

export default BlogPage;