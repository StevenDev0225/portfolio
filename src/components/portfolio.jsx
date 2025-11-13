import React from "react";

//import stock
import asp from "../img/aspnet.png";
import asp1 from "../img/aspnet1.png";
import asp2 from "../img/aspnet2.png";

import blockchain from "../img/blockchain.png";
import blockchain1 from "../img/blockchain1.png";
import blockchain2 from "../img/blockchain2.png";

import django from "../img/django1.png";
import django1 from "../img/django2.png";

import node1 from "../img/node1.png";
import node2 from "../img/node2.png";

import react1 from "../img/react1.png";
import react2 from "../img/react2.png";

import wordpress from "../img/wordpress.png"
import shopify from "../img/shopify.png"


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Explore my portfolio to see how I turn ideas into reliable, scalable, and visually engaging solutions.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={asp} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={asp} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">ASP.NET Project</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ASP.NET Core / ASP.NET MVC, C#, Web API, AJAX & JSON, JWT
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
                  href={asp1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={asp2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={blockchain} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={blockchain} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">BlockChain Projects</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            BlockChain, Node.js, JavaScript, MongoDB, Solidity, Rust
                          </span>{" "}
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
                  href={blockchain1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={blockchain2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={django} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={django} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Django Projects</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Django, Python, Html5, CSS3, ReactJS
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
                  href={django1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
               
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={node1} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={node1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Node.js Projects</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            JavaScript, Bootstrap,  ReactJS, GoogleAPI, JIRA
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
                  href={node2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={react1} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={react1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">React Projects</h2>
                        <div className="w-more">
                          <span className="w-ctegory">MERN, MongoDB, JavaScript, Webpack, ReduxToolKit</span>
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
                  href={react2}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>

              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={wordpress} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={wordpress} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Wordpress&Shopify Projects</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap, Theme, Plugin, Php, Elementor Pro
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
                  href={shopify}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={shopify}
                  data-lightbox="gallery-mf"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
