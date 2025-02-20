import React from 'react';
import '../../assets/styles/Home/pricing.css';

const Pricing = () => {
  return (
    <>
      {/* Pricing Section */}
      <section id="pricing" className="pricing section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>الأسعار</h2>
          <p>
            خطط ميسورة التكلفة للجميع
            <br />
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="pricing-tem">
                <h3 style={{ color: "#20c997" }}>الخطة المجانية</h3>
                <div className="price">
                  <sup>$</sup>0<span> / شهر</span>
                </div>
                <div className="icon">
                  <i className="bi bi-box" style={{ color: "#20c997" }} />
                </div>
                <ul>
                  <li>الوصول إلى روبوت الدردشة الأساسي</li>
                  <li>تتبع المزاج</li>
                  <li>نصائح يومية للصحة النفسية</li>
                  <li className="na">دعم صوتي</li>
                  <li className="na">دعم العملاء الأولوية</li>
                </ul>
                <a href="#" className="btn-buy">
                  ابدأ الآن
                </a>
              </div>
            </div>
            {/* End Pricing Item */}
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="pricing-tem">
                <span className="featured">مميز</span>
                <h3 style={{ color: "#0dcaf0" }}>خطة المبتدئين</h3>
                <div className="price">
                  <sup>$</sup>19<span> / شهر</span>
                </div>
                <div className="icon">
                  <i className="bi bi-send" style={{ color: "#0dcaf0" }} />
                </div>
                <ul>
                  <li>جميع ميزات الخطة المجانية</li>
                  <li>دعم صوتي</li>
                  <li>موارد مخصصة</li>
                  <li>تقارير تقدم أسبوعية</li>
                  <li className="na">استشارة مباشرة مع الطبيب</li>
                </ul>
                <a href="#" className="btn-buy">
                  ابدأ الآن
                </a>
              </div>
            </div>
            {/* End Pricing Item */}
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="pricing-tem">
                <h3 style={{ color: "#dd9b1f" }}>الخطة المميزة</h3>
                <div className="price">
                  <sup>$</sup>29<span> / شهر</span>
                </div>
                <div className="icon">
                  <i className="bi bi-airplane" style={{ color: "#dd9b1f" }} />
                </div>
                <ul>
                  <li>جميع ميزات خطة المبتدئين</li>
                  <li>استشارة مباشرة مع الطبيب</li>
                  <li>تحليلات متقدمة للمزاج</li>
                  <li>دعم الأولوية على مدار الساعة</li>
                  <li>ندوات حصرية للصحة النفسية</li>
                </ul>
                <a href="#" className="btn-buy">
                  ابدأ الآن
                </a>
              </div>
            </div>
            {/* End Pricing Item */}
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="pricing-tem">
                <h3 style={{ color: "#0d6efd" }}>الخطة النهائية</h3>
                <div className="price">
                  <sup>$</sup>49<span> / شهر</span>
                </div>
                <div className="icon">
                  <i className="bi bi-rocket" style={{ color: "#0d6efd" }} />
                </div>
                <ul>
                  <li>جميع ميزات الخطة المميزة</li>
                  <li>استشارات غير محدودة مع الطبيب</li>
                  <li>خطط علاج مخصصة</li>
                  <li>الوصول إلى خطة العائلة</li>
                  <li>مدرب صحة نفسية مخصص</li>
                </ul>
                <a href="#" className="btn-buy">
                  ابدأ الآن
                </a>
              </div>
            </div>
            {/* End Pricing Item */}
          </div>
          {/* End pricing row */}
        </div>
      </section>
      {/* /Pricing Section */}
    </>
  );
};

export default Pricing;