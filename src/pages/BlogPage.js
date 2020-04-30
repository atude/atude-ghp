import React, { useState, useEffect } from 'react';
import '../components/Components.css';
import { Grid, Slide, Typography, Fab, LinearProgress, Button, CircularProgress, Divider } from '@material-ui/core';
import { ChevronDownCircleOutline, ArrowUpBold, Label, LabelOutline, LayersSearch, ChevronLeft, ChevronRight } from 'mdi-material-ui';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../components/CodeBlock';

import { withRouter } from 'react-router-dom';

const tBase = 600;

const BlogPage = (props) => {
  const [blogRef, setBlogRef] = useState({});
  const [blogPost, setBlogPost] = useState("");
  const [selectedPost, setSelectedPost] = useState("");
  const [flattenedPosts, setFlattenedPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(false);

  const baseRef = "https://raw.githubusercontent.com/atude/portfolio-blog/master/";
  const { mainColor, currentScheme, isDark } = props;

  // Load blog reference 
  useEffect(() => {
    const fetchBlogRef = async () => {
      setLoadingIndex(true);
      const res = await fetch(`${baseRef}blog.json`);
      const resJson = await res.json();
      setBlogRef(resJson);
      setFlattenedPosts(
        [].concat(...Object.values(resJson)
        .map(postArray => Object.values(postArray)))
      );

      const query = props.location.search;
      if(query) {
        // Cut off ? from front of query
        getBlogContent(query.slice(1));
      }

      setLoadingIndex(false);
    }

    fetchBlogRef();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBlogContent = async (linkRef) => {
    if(linkRef === selectedPost) return;
    setLoading(true);

    setSelectedPost(linkRef);

    const res = await fetch(`${baseRef}${linkRef}`);
    const resMd = await res.text();
    setBlogPost(resMd);
    setLoading(false);
    // Push to browser history
    props.history.push(`/blog?${linkRef}`);
  }

  const getAdjacentPostRef = (direction) => {
    return flattenedPosts[flattenedPosts.indexOf(selectedPost) + direction];
  }

  if (loadingIndex) {
    return <CircularProgress className="AbsoluteCentered" color="primary"/>;
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
            <div 
              className={`${isDark ? "StandardCardDark" : "StandardCard"}`}
              style={{cursor: "default", padding: "15px 20px 15px 20px"}}
            >
              <div className="HorizontalContainer" 
                style={{
                  paddingBottom: "10px",
                }}
              >
                <Typography style={{color: mainColor}} variant="button">
                  Topics
                </Typography>
                <LayersSearch style={{color: mainColor, cursor: "default"}}/>
              </div>
              {Object.keys(blogRef).map((blogCategory, i) => (
                <div>
                  <Typography 
                    variant="button" 
                    color="textSecondary"
                    style={{ marginBottom: "10px" }}
                  >
                    {blogCategory}
                  </Typography>
                  <Divider style={{marginBottom: "10px"}}/>
                  <div>
                    {Object.keys(blogRef[blogCategory]).map((blogPostRef) => (
                      <div 
                        key={blogPostRef}
                        className="BlogTopicContainer" 
                        style={{
                          marginLeft: selectedPost === blogRef[blogCategory][blogPostRef] ? "8px" : null
                        }}
                        onClick={() => { 
                          getBlogContent(blogRef[blogCategory][blogPostRef]);
                        }}
                      >
                        {selectedPost === blogRef[blogCategory][blogPostRef] ? 
                          <Label style={{color: mainColor}}/>
                          :
                          <LabelOutline style={{color: mainColor}}/>
                        }
                        <Typography color="textSecondary" style={{marginLeft: "12px", fontSize: "13px"}}>
                          {blogPostRef}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              </div>
          </Grid>
        </Slide>
        <Grid item xs={12} sm={12} md={9}>      
          {!loading ? 
            (!!blogPost ? 
              <>
                <div className={`MarkdownContainer ${isDark ? "StandardCardDark" : "StandardCard"}`}>
                  <ReactMarkdown
                    renderers={{
                      root: (props) => (
                        <div className="MarkdownMainText" style={{ color: currentScheme.lightGray }}>
                          {props.children}
                        </div> 
                      ),
                      code: CodeBlock,
                      inlineCode: (props) => (
                        <code className="MarkdownInlineCode" style={{color: mainColor, backgroundColor: currentScheme.bgSecond}}>
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
                        <li style={{color: mainColor}}>
                          <span style={{color: currentScheme.lightGray}}>
                            {props.children}
                          </span>
                        </li>
                      ),
                      blockquote: (props) => (
                        <blockquote
                          className="MarkdownBlockQuote" 
                          style={{ 
                            borderLeft: `2px solid ${mainColor}`, 
                            color: currentScheme.lightGray,
                            //Last 2 digits are transparency suffix
                            backgroundColor: mainColor + "15",
                          }}
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
                </div>
                <div className="BlogNextPrevContainer">
                  {!!getAdjacentPostRef(-1) && 
                    <Button 
                      onClick={() => getBlogContent(getAdjacentPostRef(-1))}
                      style={{color: mainColor}}
                    >
                      <ChevronLeft/>
                      Previous Post: {getAdjacentPostRef(-1).split("_")[1].slice(0, -3).split(/(?=[A-Z])/).join(" ")}
                    </Button>
                  }
                  &nbsp;&nbsp;&nbsp;
                  {!!getAdjacentPostRef(1) && 
                    <Button 
                      onClick={() => getBlogContent(getAdjacentPostRef(1))}
                      style={{color: mainColor}}
                    >
                      Next Post: {getAdjacentPostRef(1).split("_")[1].slice(0, -3).split(/(?=[A-Z])/).join(" ")}
                      <ChevronRight/>
                    </Button>
                  }
                </div>
              </>
              :
              <div style={{textAlign: "center", width: "70%", margin: "auto"}}>
                <br/><br/>
                <LayersSearch style={{color: currentScheme.lightGray, width: "10rem", height: "10rem"}}/>
                <br/><br/>
                <Typography variant="body1" style={{color: currentScheme.lightGray}}>
                  You can find my research topics here. 
                  Choose a topic to find out more.
                </Typography>
              </div>
              )
            :
            <LinearProgress color="primary"/>
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