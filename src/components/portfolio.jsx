import React from "react";

//import icons
import { BsLink } from 'react-icons/bs';
import { ImSphere } from 'react-icons/im';
import { GiClick } from 'react-icons/gi';
import { GoMarkGithub } from 'react-icons/go';

//import stock
import img_1 from "../img/1data_extractor2.png";
import img_2 from "../img/2face_recog2.png";
import img_3 from "../img/2face_recog3.png";
import img_4 from "../img/2face_recog4.png";
import img_5 from "../img/3wix.png";
import img_6 from "../img/4robo_friend.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">



{/*-----> Блок картинки!!!!!*/}
            <div className="col-md-4">
              <div className="work-box">
                <a href={img_2} data-lightbox="gallery-aguadeluz"> 
                  <div className="work-img">
                    <img src={img_2} alt="" className="img-fluid" />
                  </div>
                </a>
              </div>

              <div className="work-box-bottom">
                <a href='https://mmitusov.github.io/face-detection/' rel="noopener noreferrer" target="_blank"> {/*-----> Блок описания!!!!!*/}
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">        {/* ----------------------> Ширина текста-описания*/}
                        <h2 className="w-title">Face recognition</h2>
                        <h2 className="w-title">web-application</h2>
                        <div className="w-more tj">      {/* ----------------------> Выравнивание текста*/}
                          <span className="w-ctegory">
                            App has a session management feature with authenticated routes that are
                            built with use of the React.js. The backend is built using Node.js/Express.js with an implementation of RESTful API
                            server. SLQ database is securely store user information such as hashed passwords.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2 tc">                 {/* ----------------------> Ширина значка*/}
                        <div className="w-like">
                          <span ><ImSphere /></span>
                          <h6 className='pv0 blue'>Preview</h6>      
                            {/*<span className="ion-ios-plus-outline"></span>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
                <a
                  href={img_3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={img_4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                {/*<a
                  href={stock3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>*/}
              </div>
            </div>
            
{/*-----> Блок картинки!!!!!*/}
            <div className="col-md-4">
              <div className="work-box">
                <a href={img_1} data-lightbox="gallery-todo">                
                  <div className="work-img">
                    <img src={img_1} alt="" className="img-fluid" />
                  </div>
                </a>
              </div>                

              <div className="work-box-bottom">                
                <a href='https://github.com/mmitusov/web-parser' rel="noopener noreferrer" target="_blank"> {/*-----> Блок описания!!!!!*/}
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">        {/* ----------------------> Ширина текста-описания*/}
                        <h2 className="w-title">Web data extractor</h2>
                        <h2 className="w-title">(backend only)</h2>
                        <div className="w-more tj">      {/* ----------------------> Выравнивание текста*/}
                          <span className="w-ctegory">
                          The purpose of this application is in a constant product price monitoring on the legal basis, 
                          with the following email notification in case of the price growth/decline, product name changing or assortment update. 
                          Web data extractor has been built with use of the following technologies: JavaScript, Node.js, Express.js, Puppeteer.
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-2 tc">                 {/* ----------------------> Ширина значка*/}
                        <div className="w-like">
                          <span ><GoMarkGithub /></span>
                          <h6 className='pv0 blue'>Preview</h6>  
                          {/*<span className="ion-ios-plus-outline"></span>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
                {/*<a
                  href={img_1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={img_1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={img_1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>*/}
              </div>
            </div>

{/*-----> Блок картинки!!!!!*/}
            <div className="col-md-4">            
              <div className="work-box">
                <a href={img_5} data-lightbox="gallery-vmarine"> 
                {/*<a href='https://mitusovmaxim.wixsite.com/my-site' rel="noopener noreferrer" target="_blank"> ------> Делает картинку ссылкой!!!!!*/}
                  <div className="work-img">
                    <img src={img_5} alt="" className="img-fluid" />
                  </div>
                </a>
              </div>

              <div className="work-box-bottom">
                <a href='https://mitusovmaxim.wixsite.com/my-site' rel="noopener noreferrer" target="_blank"> {/*-----> Блок описания!!!!!*/}
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">        {/* ----------------------> Ширина текста-описания*/}
                        <h2 className="w-title">E-commerce shop "FairyToy"</h2>
                        {/*<h2 className="w-title"></h2>*/}
                        <div className="w-more tj">      {/* ----------------------> Выравнивание текста*/}
                          <span className="w-ctegory">
                            This e-commerce shop is built on the basis of the Wix template, the backend and frontend of which has been modified using JavaScript. 
                            Shop's database has been changed and adjusted to the customer's needs.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2 tc">                 {/* ----------------------> Ширина значка*/}
                        <div className="w-like">
                            <span ><ImSphere /></span>
                          <h6 className='pv0 blue'>Preview</h6>                                
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
               {/* <a
                  href={img_5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>*/}
              </div>
            </div>

{/*-----> Блок картинки!!!!!*/}
            <div className="col-md-4">
              <div className="work-box">
                <a href={img_6} data-lightbox="gallery-aguadeluz"> 
                  <div className="work-img">
                    <img src={img_6} alt="" className="img-fluid" />
                  </div>
                </a>
              </div>

              <div className="work-box-bottom">
                <a href='https://mmitusov.github.io/robo-friends/' rel="noopener noreferrer" target="_blank"> {/*-----> Блок описания!!!!!*/}
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-10">        {/* ----------------------> Ширина текста-описания*/}
                        <h2 className="w-title">Robo-friends</h2>
                        <h2 className="w-title">web-application</h2>
                        <div className="w-more tj">      {/* ----------------------> Выравнивание текста*/}
                          <span className="w-ctegory">
                            App is built with JavaScript, React.js and CSS. It includes search capabilities by name of the character, 
                            where all of the character names/emails configurations are randomly generated within app. 
                            Afterward all needed configurations are being fetched from another web-service using RESTful API.
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-2 tc">                 {/* ----------------------> Ширина значка*/}
                        <div className="w-like">
                          <span ><ImSphere /></span>
                          <h6 className='pv0 blue'>Preview</h6>      
                            {/*<span className="ion-ios-plus-outline"></span>*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                
                <a
                  href={img_6}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                {/*<a
                  href={stock2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>*/}
              </div>
            </div>

{/*-----> Блок картинки!!!!!*/}
{/*             <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">MERN</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div> */}

{/*-----> Блок картинки!!!!!*/}
{/*            <div className="col-md-4">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Lorem Ipsum</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap MERN
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock4}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock5}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
