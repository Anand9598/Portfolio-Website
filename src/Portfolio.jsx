import React from 'react';
import './style.css'; 

const Portfolio = () => {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };

  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Anand Tiwari</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Anand Tiwari</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img src="/assets/profile-pic.png" alt="" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Anand Tiwari</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('/assets/resume-example.pdf')}
            >
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => window.location.href='./#contact'}>
              Contact Info
            </button>
          </div>
          {/* socail media links */}
          <div id="socials-container">
            <img
              src="/assets/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => window.location.href='https://www.linkedin.com/in/anand-tiwari-773a99233/'}
            />
            <img
              src="/assets/github.png"
              alt="My Github profile"
              className="icon"
              onClick={() => window.location.href='https://github.com/Anand9598'}
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="/assets/about-pic.png"
              alt="Profile"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="/assets/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                {/* <h3>Experience</h3> */}
                <p> Fresher <br />Frontend Development</p>
              </div>
              <div className="details-container">
                <img
                  src="/assets/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>B.Tech. Bachelors Degree<br />Computer Science and Engineering</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus sint
                delectus velit in eos quo officiis explicabo deleniti dignissimos.
                Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                reiciendis ea magnam? Nulla, impedit fuga!
              </p>
            </div>
          </div>
        </div>
        <img
          src="/assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => window.location.href='./#experience'}
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">SKILLS</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                {/* Experience articles here */}
                
                <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  
                </div>
              </article>

              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  
                </div>
              </article>

              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  
                </div>
              </article>

              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React Js</h3>
                </div>
              </article>

              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>C++</h3>
                </div>
              </article>

              <article>
                <img
                  src="./assets/checkmark.png"
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>MySQL</h3>
                </div>
              </article>

              </div>
            </div>

            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container"> 
                {/* More experience articles here */}
               </div> 
             </div>

          </div>
        </div>
        <img
          src="/assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => window.location.href='./#projects'}
        />
      </section>
      <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project-1.png"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Food Delivery Website</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => { window.location.href = 'https://github.com/Anand9598'; }}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => { window.location.href = 'https://deluxe-souffle-d73f72.netlify.app/'; }}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project-2.png"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">To-do List</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => { window.location.href = 'https://github.com/Anand9598'; }}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => { window.location.href = 'https://main--celebrated-muffin-11a7b3.netlify.app/'; }}
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src="./assets/project-3.png"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Social Media Clone</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => { window.location.href = 'https://github.com/Anand9598'; }}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => { window.location.href = 'https://main--keen-cheesecake-27db51.netlify.app/'; }}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => { window.location.href = './#contact'; }}
      />
    </section>

      <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./assets/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:anandtiwari4009@gmail.com">anandtiwari4009@gmail.com@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src="./assets/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/anand-tiwari-773a99233">LinkedIn</a></p>
        </div>
      </div>
    </section>

      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2024 Anand Tiwari. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Portfolio;
