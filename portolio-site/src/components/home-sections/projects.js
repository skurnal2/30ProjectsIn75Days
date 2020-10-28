//Imports
import React from "react";

//Images
import sunshine_url from "../../images/sunshine-meme.gif";
import geo_covid_url from "../../images/geo-covid.JPG";
import highway_dodge_url from "../../images/highway_dodge.JPG";
import bee_chat_url from "../../images/bee-chat.JPG";
import la_auto_detail_url from "../../images/la-auto-detail.JPG";
import wallify_url from "../../images/wallify.JPG";
import color_app_url from "../../images/color-app.JPG";
import digital_resume_url from "../../images/digital-resume.jpg";
import portfolio_site_url from "../../images/portfolio-site.JPG";

const Projects = () => {

  function goToThisLink(item) {
    switch(item) {
      case 'resume':
        window.location.href='https://github.com/skurnal2/ResumeAssignment';
        break;
      case 'sunshine':
        window.location.href='https://github.com/skurnal2/ReactProjects/tree/master/sunshine-meme-generator';
        break;
      case 'geo_covid':
        window.location.href='https://github.com/skurnal2/ReactProjects/tree/master/geo-covid';
        break;
      case 'highway_dodge':
        window.location.href='https://github.com/skurnal2/HighwayDodge';
        break;
      case 'bee_chat':
        window.location.href='https://github.com/skurnal2/ReactProjects/tree/master/bee-chat-web';
        break;
      case 'la_auto':
        window.location.href='http://laautodetail.com/';
        break;
      case 'wallify':
        window.location.href='https://github.com/skurnal2/ReactProjects/tree/master/wallify';
        break;
      case 'color_app':
        window.location.href='https://github.com/skurnal2/ColorApp';
        break;
      case 'portfolio_site':
        window.location.href='https://github.com/skurnal2/ReactProjects/tree/master/portolio-site';
        break;
    }
  }

  return (
    <div className="projects">
      <div className="projects-inner">
        <h4>My Projects</h4>
        <div className="projects-container">
          <div onClick={() => goToThisLink('resume')}>
            <img src={digital_resume_url} alt="Siddharth Kurnal Digital Resume" />
            <div>Digital Resume</div>
          </div>
          <div onClick={() => goToThisLink('sunshine')}>
            <img src={sunshine_url} alt="Sunshine Meme Generator" />
            <div>Sunshine Meme Generator</div>
          </div>
          <div onClick={() => goToThisLink('geo_covid')}>
            <img src={geo_covid_url} alt='Geo Covid' />
            <div>Geo Covid</div>
          </div>
          <div onClick={() => goToThisLink('highway_dodge')}>
            <img src={highway_dodge_url} alt='Highway Dodge' />
            <div>Highway Dodge</div>
          </div>
          <div onClick={() => goToThisLink('bee_chat')}>
            <img src={bee_chat_url} alt="Bee Chat" />
            <div>BeeChat</div>
          </div>
          <div onClick={() => goToThisLink('la_auto')}>
            <img src={la_auto_detail_url} alt="LA Auto Detail" />
            <div>LA Auto Detail</div>
          </div>
          <div onClick={() => goToThisLink('wallify')}>
            <img src={wallify_url} alt="Wallify" />
            <div>Wallify</div>
          </div>
          <div onClick={() => goToThisLink('color_app')}>
            <img src={color_app_url} alt="Color App" />
            <div>ColorApp</div>
          </div>
          <div onClick={() => goToThisLink('portfolio_site')}>
            <img src={portfolio_site_url} alt="Portfolio Site" />
            <div>Potfolio Site</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
