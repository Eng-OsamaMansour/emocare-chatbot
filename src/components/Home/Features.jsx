import React from 'react';
import '../../assets/styles/Home/features.css';

const Features = () => {
  return (
    <>
      {/* Features Section */}
      <section id="features" className="features section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>الميزات</h2>
          <p>
          مميزاتنا المتقدمة
            <br />
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-5">
            <div className="col-xl-6" data-aos="zoom-out" data-aos-delay={100}>
              <img src="/assets/img/features.png" className="img-fluid" alt="Features" />
            </div>
            <div className="col-xl-6 d-flex">
              <div className="row align-self-center gy-4">
                <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                  <div className="feature-box d-flex align-items-center">
                    <h3>مدعوم بالذكاء الاصطناعي</h3>
                    <i className="bi bi-check" />
                  </div>
                </div>
                {/* End Feature Item */}
                <div className="col-md-6" data-aos="fade-up" data-aos-delay={300}>
                  <div className="feature-box d-flex align-items-center">
                    <h3>الدعم الصوتي</h3>
                    <i className="bi bi-check" />
                  </div>
                </div>
                {/* End Feature Item */}
                <div className="col-md-6" data-aos="fade-up" data-aos-delay={400}>
                  <div className="feature-box d-flex align-items-center">
                    <h3>تتبع الحالة المزاجية</h3>
                    <i className="bi bi-check" />
                  </div>
                </div>
                {/* End Feature Item */}
                <div className="col-md-6" data-aos="fade-up" data-aos-delay={500}>
                  <div className="feature-box d-flex align-items-center">
                    <h3>تخصيص الموارد</h3>
                    <i className="bi bi-check" />
                  </div>
                </div>
                {/* End Feature Item */}
                <div className="col-md-6" data-aos="fade-up" data-aos-delay={600}>
                  <div className="feature-box d-flex align-items-center">
                    <h3>24/7 متوفر</h3>
                    <i className="bi bi-check" />
                  </div>
                </div>
                {/* End Feature Item */}
                <div className="col-md-6" data-aos="fade-up" data-aos-delay={700}>
                  <div className="feature-box d-flex align-items-center">
                    <h3>آمن وسري</h3>
                    <i className="bi bi-check" />
                  </div>
                </div>
                {/* End Feature Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Features Section */}
    </>
  );
};

export default Features;