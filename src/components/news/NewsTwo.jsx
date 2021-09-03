import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";
import Reveal from "react-reveal/Reveal";

import data from '../../projects'

Modal.setAppElement("#root");

const NewsTwo = () => {

  const [allProjects , setAllProjects] = useState(data());
  const [showAll, setShowAll] = useState(false);
  function ShowMore(){
    setShowAll(!showAll);
  }




  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [currentProject, setCurrentProject] = useState(allProjects[0])

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  async function switchModal(id){
    await setCurrentProject(allProjects.filter((item) => {
      if(item.id === id){
        return true
      }
    })[0])
    setIsOpen(!isOpen);
  }

  return (
    <div className="shane_tm_section"  id="portfolio">
      <div className="shane_tm_news">
        <div className="container">
          <div className="shane_tm_title">
            <span>Protfolio</span>
            <h3>My Work</h3>
          </div>
          {/* End shane_tm_title */}
          <div className="news_list">
            <ul>
              <Reveal effect="fadeInLeft">
              {allProjects.map((singelProject) => (

<li >
<div className="list_inner" key={singelProject.id}>
  <div className="image" onClick={() => switchModal(singelProject.id)}>
    <img src={singelProject.mainImage} alt="thumb" />
    <div
      className="main"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + singelProject.mainImage
        })`,
      }}
    ></div>
  </div>
  {/* End image */}

  <div className="details">
    <h3 className="title" onClick={() => switchModal(singelProject.id)}>
      {singelProject.title}
    </h3>
    <p className="date">
      Tags : {singelProject.tags.map((tag) => (
        tag +', '
      ))}
    </p>
  </div>
  {/* End details */}

  {/* START MODAL */}
  <Modal
    isOpen={isOpen}
    onRequestClose={() => switchModal(singelProject.id)}
    contentLabel="My dialog"
    className="custom-modal"
    overlayClassName="custom-overlay"
    closeTimeoutMS={500}
  >
    <div className="shane_tm_modalbox_news">
      <button
        className="close-modal"
        onClick={toggleModalOne}
      >
        <img src="/img/svg/cancel.svg" alt="close icon" />
      </button>
      {/* End close icon */}
      <div className="box_inner">
        <div className="description_wrap scrollable">
          <div className="image">
            <img
              src={currentProject.secunderyImage}
              alt="thumb"
            />
            <div
              className="main"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + currentProject.secunderyImage
                })`,
              }}
            ></div>
          </div>
          {/* End image */}
          <div className="details">
            <h3 className="title">
              {currentProject.title}
            </h3>
            <p className="date">
      Tags : {currentProject.tags.map((tag) => (
        tag +', '
      ))}
    </p>
          </div>
          {/* End details */}
          <div className="description">
            <p dangerouslySetInnerHTML={{
    __html: currentProject.discription
  }}>
              
            </p>
          </div>
          {/* End description */}
          <div className="news_share">
            <Social />
            {/* End social share */}
          </div>
          {/* End news share */}
        </div>
      </div>
      {/* End box inner */}
    </div>
    {/* End modal box news */}
  </Modal>
  {/* End modal */}
</div>
</li>
              ))}
                
                {/* End single blog */}
              </Reveal>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTwo;
