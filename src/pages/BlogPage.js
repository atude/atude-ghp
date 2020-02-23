import React, { useState } from 'react';
import '../components/Components.css';
import { Grid, Slide, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Paper, Fab } from '@material-ui/core';
import { ChevronDownCircleOutline, ArrowUpBold, Label, LabelOutline, LayersSearch } from 'mdi-material-ui';
import Blog from '../assets/Blog.json';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../components/CodeBlock';

export const BlogPage = (props) => {
  const { mainColor, currentScheme } = props;
  const tBase = 600;
  const [blogPost, setBlogPost] = useState("");
  const [selectedPost, setSelectedPost] = useState("");

  const getBlogContent = async (linkRef) => {
    const ref = require(`../assets/blog/${linkRef}`);
    const res = await fetch(ref);
    const resMd = await res.text();
    setBlogPost(resMd);
  }

  return (
    <Grid 
      container 
      spacing={16} 
      direction="row" 
      alignItems="flex-start" 
      justify="center"
      style={{maxWidth: "1200px", margin: 'auto'}}
    >
      <Slide 
        timeout={tBase} direction="right"
        in mountOnEnter
      >
        <Grid item xs={12} sm={12} md={3}>
          <Paper 
            className="HorizontalContainer"
            style={{cursor: "default", padding: "15px 20px 15px 20px"}}
          >
            <Typography style={{color: mainColor}} variant="button">
              Research Topics
            </Typography>
            <LayersSearch style={{color: mainColor, cursor: "default"}}/>
          </Paper>
          {Object.keys(Blog).map((blogCategory, i) => (
            <ExpansionPanel key={blogCategory + i}>
              <ExpansionPanelSummary expandIcon={<ChevronDownCircleOutline/>}>
                <Typography>{blogCategory}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div>
                  {Object.keys(Blog[blogCategory]).map((blogRef) => (
                    <div 
                      key={blogRef}
                      className="BlogTopicContainer" 
                      style={{
                        marginLeft: selectedPost === blogRef ? "8px" : null
                      }}
                      onClick={() => { 
                        getBlogContent(Blog[blogCategory][blogRef]);
                        setSelectedPost(blogRef);
                      }}
                    >
                      {selectedPost === blogRef ? 
                        <Label style={{color: mainColor}}/>
                        :
                        <LabelOutline style={{color: mainColor}}/>
                      }
                      <Typography style={{marginLeft: "12px"}}>
                        {blogRef}
                      </Typography>
                    </div>
                  ))}
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
          
        </Grid>
      </Slide>
      <Grid item xs={12} sm={12} md={9}>      
        {!!blogPost ? 
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
          :
          <div style={{textAlign: "center", width: "50%", margin: "auto"}}>
            <br/><br/>
            <LayersSearch style={{color: currentScheme.lightGray, width: "10rem", height: "10rem"}}/>
            <br/><br/>
            <Typography variant="button" style={{color: currentScheme.lightGray}}>
              You can find my research topics for software development here. Click a 
              topic on the sidebar to find out more.
            </Typography>
        </div>
        }
        <br/><br/><br/>
      </Grid>

      <div className="DownloadFAB">
        <Fab size="medium" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        style={{color: "white", backgroundColor: mainColor, opacity: "0.8"}}>
          <ArrowUpBold/>
        </Fab>
      </div>
    </Grid>
  );
}

export default BlogPage;