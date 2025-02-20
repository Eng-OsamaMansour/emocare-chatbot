import React from 'react';
import '../../assets/styles/Home/about.css';

const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
          <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay={200}
            >
              <img src="/assets/img/about.jpg" className="img-fluid" alt="About EmoCare" />
            </div>
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="content">
                <h3>من نحن ؟</h3>
                <h2>
                .تعزيز الصحة العقلية من خلال حلول الذكاء الاصطناعي المبتكرة
                </h2>
                <p>
                 نحن ملتزمون بتقديم دعم فعال وميسور للصحة العقلية. تم تصميم روبوت المحادثة المدعوم بالذكاء الاصطناعي لمساعدتك في التنقل في رحلتك المتعلقة بالصحة العقلية باستخدام موارد مخصصة وآليات مواجهة
                </p>
                <div className="text-center text-lg-start">
                  <a
                    href="#"
                    className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    
                    <i className="bi bi-arrow-left" />
                    <span> قراءة المزيد </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
    </>
  );
};

export default About;