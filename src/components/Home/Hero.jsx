import React from 'react';
import '../../assets/styles/Home/hero.css';

const Hero = () => {
  return (
    /* Hero Section */
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              صحتك العقلية هي أولويتنا
            </h1>
            <p data-aos="fade-up" data-aos-delay={100}>
           .الدعم الصحي العقلي المدعوم بالذكاء الاصطناعي لمساعدتك على الشعور بالتحسن في أي وقت، وفي أي مكان
            </p>
            <div
              className="d-flex flex-column flex-md-row"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <a href="/login" className="btn-get-started">
              <i className="bi bi-arrow-left  " />
                البدء                
              </a>
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0"
              >
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
          >
            <img
              src="/assets/img/hero-img.png"
              className="img-fluid animated"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
    /* /Hero Section */
  );
};

export default Hero;