import React from "react";
import myImage from "../img/myImage.png";
import tachyons from "tachyons";

import stock from "../img/files/Maksym_Mitusov_CV.pdf";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { 
          id: "HTML5_skill", 
          content: "HTML5", 
          porcentage: "75%", 
          value: "75"
        },         
        {
          id: "CSS3_skill", 
          content: "CSS3", 
          porcentage: "70%", 
          value: "70"
        },
        { 
          id: "Python_skill",
          content: "Python",
          porcentage: "60%",
          value: "60"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "NodeJS_skill",
          content: "NodeJS",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "SQL_skill",
          content: "SQL",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "Git/GitHub_skill",
          content: "Git/GitHub",
          porcentage: "85%",
          value: "85"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            `Hello, I'm Maksym! I'm experienced Full Stack Developer that loves innovation and new technological advancements. I started my career as the Python Developer and then shifted to JS/ React.js/ Node.js direction that I would like to keep mastering farther on.`
        },
        {
          id: "second-p-about",
          content:
            "What I like about my job is that I can see the results of my effort right away. Also, what I appreciate is that I'm being surrounded by very intelligent and nice people. Since, I believe that communication and teamwork are as important as professional skills should be!"
        },
        // {
        //   id: "third-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        // }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>

                            <div className="tc pt4">
                                <a 
                                    className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black f5-ns"  
                                    href={stock}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                  <div className="white">
                                    My Resume
                                  </div>
                                </a>
                            </div>                          

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
