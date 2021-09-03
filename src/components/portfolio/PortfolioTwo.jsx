import React,  { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Reveal from "react-reveal/Reveal";
import Social from "../Social";
import Modal from "react-modal";
import data from '../../projects'

const PortfolioTwo = () => {
  const [allProjects , setAllProjects] = useState(data());
  const [showAll, setShowAll] = useState(false);
  function ShowMore(){
    setShowAll(!showAll);
  }

  function Clickinshtainovitch(){
    console.log('this is working!');
  }

  return (
    <div className="shane_tm_section">
      <SimpleReactLightbox>
        <div className="shane_tm_portfolio">
          <div className="container">
            <div className="positon-relative">
              <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left">
                    <span>Portfolio</span>
                    <h3>My Projects</h3>
                  </div>
                </div>
              </div>
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                <Tabs>
                  <TabList>
                    <Tab>All</Tab>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>WordPress</Tab>
                    <Tab>Other</Tab>
                  </TabList>
                  {/* End tablist */}
                  <div className="portfolio_list">
                    <SRLWrapper>
                      <TabPanel>
                      <ul className="gallery_zoom">
                      
                            {showAll && allProjects.map((singelProject) => (
                                <li>
                                  <div className="inner">
                                    <div className="entry shane_tm_portfolio_animation_wrap">
                                      <a href={singelProject.image}>
                                        <img
                                          src={singelProject.image}
                                          alt={singelProject.title}
                                         onClick={() => Clickinshtainovitch()}/>
                                        
                                      </a>
                                    </div>
                                    <div className="mobile_title">
                                     <h3>{singelProject.title}</h3>
                                      <span>{singelProject.tags.map((tag)=>(
                                        tag + ', '
                                      ))}</span>
                                    </div>
                                  </div>
                                </li>
                               ))}
                                {!showAll && allProjects.slice(0,6).map((singelProject) => (
                                <li>
                                  <div className="inner">
                                    <div className="entry shane_tm_portfolio_animation_wrap">
                                      <a href={singelProject.image}>
                                        <img
                                          src={singelProject.image}
                                          alt={singelProject.title}
                                          onClick={()=> Clickinshtainovitch()}
                                        />
                                        
                                      </a>
                                    </div>
                                    <div className="mobile_title">
                                      <h3>{singelProject.title}</h3>
                                      <button style={{zIndex:5}} onClick={()=> Clickinshtainovitch()}>This is a button</button>
                                      <span>{singelProject.tags.map((tag)=>(
                                        tag + ', '
                                      ))}</span>
                                    </div>
                                  </div>
                                </li>
                               ))}
                               {!showAll && <li><button onClick={() => ShowMore()}>Show More</button></li>}
                               {showAll && <li><button onClick={() => ShowMore()}>Show Less</button></li>}

                          {/* End single image block */}
                        </ul>
                      </TabPanel>
                      {/* END ALL PORTFOLIO GALLERY */}

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/music.jpg">
                                  <img
                                    src="/img/portfolio/music.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Blue Lemon</h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/14.jpg">
                                  <img
                                    src="/img/portfolio/14.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Sweet Cherry</h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End portfolio list */}
                      </TabPanel>

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/24.jpg">
                                  <img
                                    src="/img/portfolio/24.jpg"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Sweet Fruit</h3>
                                <span>Design</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/15.jpg">
                                  <img
                                    src="/img/portfolio/15.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Good Present</h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* End single image block */}
                      </TabPanel>

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/11.jpg">
                                  <img
                                    src="/img/portfolio/11.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Blue Lemon</h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/16.jpg">
                                  <img
                                    src="/img/portfolio/16.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Sweet Cherry</h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* End single image block */}
                      </TabPanel>


                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/11.jpg">
                                  <img
                                    src="/img/portfolio/11.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Blue Lemon</h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/16.jpg">
                                  <img
                                    src="/img/portfolio/16.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Sweet Cherry</h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* End single image block */}
                      </TabPanel>




                    </SRLWrapper>
                    {/* End tabpanel */}
                  </div>
                  {/* End list wrapper */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>
    </div>
  );
};

export default PortfolioTwo;
