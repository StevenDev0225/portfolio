import React from "react";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "Block_Chain", content: "BlockChain", porcentage: "100%", value: "100" },
        { id: "CSS3_skill", content: "Smart Contract", porcentage: "95%", value: "95" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "PHP_skill", content: "Django", porcentage: "100%", value: "100" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "95%",
          value: "95"
        },
        {
          id: "VanillaJS_skill",
          content: "VanillaJS",
          porcentage: "100%",
          value: "100"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "100%",
          value: "100"
        }, 
        {
          id: "Shopify_skill",
          content: "Shopify",
          porcentage: "100%",
          value: "100"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Experienced Senior Full-Stack Developer with a strong track record in designing and delivering scalable, high-performance web applications. Proficient in Django and Vue.js, with extensive experience leveraging AWS serverless technologies to build robust and cost-efficient solutions. Adept at developing complex projects across financial, insurance, and e-commerce domains, driving enhanced functionality, user engagement, and business growth.Skilled in integrating diverse APIs, managing large datasets, and optimizing workflows for seamless application performance. In addition to full-stack development, experienced in WordPress and Shopify development, including custom theme and plugin creation, responsive design, and e-commerce optimization, enabling clients to launch professional, user-friendly online platforms. Passionate about leveraging technology to solve real-world problems and deliver exceptional digital experiences."
        }
       
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
