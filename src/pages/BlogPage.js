import React, { useState, useEffect } from 'react';
import '../components/Components.css';
import { Grid, Slide, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Paper, Fab, LinearProgress } from '@material-ui/core';
import { ChevronDownCircleOutline, ArrowUpBold, Label, LabelOutline, LayersSearch } from 'mdi-material-ui';
import Blog from '../assets/Blog.json';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../components/CodeBlock';

import { withRouter } from 'react-router-dom';

const BlogPage = (props) => {
  const [blogPost, setBlogPost] = useState("");
  const [selectedPost, setSelectedPost] = useState("");
  const [loading, setLoading] = useState(false);

  const tBase = 600;
  const baseRef = "https://raw.githubusercontent.com/atude/portfolio-blog/master/";
  const { mainColor, currentScheme } = props;

  // Routing for posts
  useEffect(() => {
    const query = props.location.search;
    if(query) {
      // Cut off ? from front of query
      getBlogContent(query.slice(1));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBlogContent = async (linkRef) => {
    if(linkRef === selectedPost) return;
    
    setSelectedPost(linkRef);
    setLoading(true);

    const res = await fetch(`${baseRef}${linkRef}`);
    const resMd = await res.text();
    setBlogPost(resMd);
    setLoading(false);
    // Push to browser history
    props.history.push(`/blog?${linkRef}`);
  }

  return (
    <div style={{maxWidth: "1200px", margin: "auto"}}>
      <Grid 
        container 
        spacing={16} 
        direction="row" 
        alignItems="flex-start" 
        justify="center"
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
                          marginLeft: selectedPost === Blog[blogCategory][blogRef] ? "8px" : null
                        }}
                        onClick={() => { 
                          getBlogContent(Blog[blogCategory][blogRef]);
                        }}
                      >
                        {selectedPost === Blog[blogCategory][blogRef] ? 
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
          {!loading ? 
            (!!blogPost ? 
              <Paper className="MarkdownContainer">
                <ReactMarkdown
                  renderers={{
                    root: (props) => (
                      <div className="MarkdownMainText" style={{ color: currentScheme.lightGray }}>
                        {props.children}
                      </div> 
                    ),
                    code: CodeBlock,
                    inlineCode: (props) => (
                      <code className="MarkdownInlineCode">
                        {props.value}
                      </code>
                    ),
                    link: (props) => (
                      <a 
                        href={props.href} 
                        style={{color: mainColor}}
                      >
                        {props.children}
                      </a>
                    ),
                    heading: (props) => {
                      switch(props.level) {
                        case 1: return <h1 style={{color: mainColor}}>{props.children}</h1>;
                        case 2: return <><h2 style={{color: mainColor}}>{props.children}</h2><hr style={{border: 0, height: "1px", backgroundColor: mainColor}}/></>;
                        case 3: return <h3 style={{color: mainColor}}>{props.children}</h3>;
                        case 4: return <h4 style={{color: mainColor}}>{props.children}</h4>;
                        case 5: return <h5>{props.children}</h5>;
                        case 6: return <h6>{props.children}</h6>;
                        default: return props.children;
                      }
                    },
                    listItem: (props) => (
                      <li>{props.children}</li>
                    ),
                    blockquote: (props) => (
                      <blockquote
                        className="MarkdownBlockQuote" 
                        style={{ borderLeft: `4px solid ${mainColor}`, color: currentScheme.lightGray }}
                      >
                        {props.children}
                      </blockquote>
                    ),
                    strong: (props) => <strong style={{color: mainColor}}>{props.children}</strong>
                  }}
                  linkTarget={"_blank"}
                  source={blogPost}
                  escapeHtml={false}
                />
              </Paper>
              :
              <div style={{textAlign: "center", width: "70%", margin: "auto"}}>
                <br/><br/>
                <LayersSearch style={{color: currentScheme.lightGray, width: "10rem", height: "10rem"}}/>
                <br/><br/>
                <Typography variant="body1" style={{color: currentScheme.lightGray}}>
                  You can find my research topics for software development here. 
                  Choose a topic to find out more.
                </Typography>
              </div>
              )
            :
            <LinearProgress style={{backgroundColor: mainColor}}/>
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
    </div>
  );
}

export default withRouter(BlogPage);