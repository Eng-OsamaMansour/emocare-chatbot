import React from 'react';
import '../../assets/styles/Home/services.css';

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section id="services" className="services section">
        {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>الخدمات</h2>
            <p>
              استكشف خدمات الصحة النفسية لدينا
              <br />
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-item item-cyan position-relative">
            <i className="bi bi-activity icon" />
            <h3>روبوت الدردشة المدعوم بالذكاء الاصطناعي</h3>
            <p>
              يقدم روبوت الدردشة المدعوم بالذكاء الاصطناعي دعمًا فوريًا للصحة النفسية، ويقدم آليات التكيف والموارد المصممة خصيصًا لاحتياجاتك.
            </p>
            <a href="#" className="read-more stretched-link">
              <i className="bi bi-arrow-left" /><span>اقرأ المزيد</span> 
            </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-item item-orange position-relative">
            <i className="bi bi-broadcast icon" />
            <h3>دعم قائم على الصوت</h3>
            <p>
              الوصول إلى روبوت الدردشة لدينا من خلال الأوامر الصوتية لتجربة مريحة وخالية من اليدين.
            </p>
            <a href="#" className="read-more stretched-link">
              <i className="bi bi-arrow-left" /><span>اقرأ المزيد</span> 
            </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-item item-teal position-relative">
            <i className="bi bi-easel icon" />
            <h3>تتبع المزاج</h3>
            <p>
              تتبع مزاجك بمرور الوقت واحصل على رؤى حول صحتك العاطفية باستخدام تحليلاتنا المتقدمة.
            </p>
            <a href="#" className="read-more stretched-link">
              <i className="bi bi-arrow-left" /><span>اقرأ المزيد</span> 
            </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="service-item item-red position-relative">
            <i className="bi bi-bounding-box-circles icon" />
            <h3>استشارات الأطباء</h3>
            <p>
              تواصل مع محترفي الصحة النفسية المرخصين للحصول على نصائح ودعم شخصي.
            </p>
            <a href="#" className="read-more stretched-link">
              <i className="bi bi-arrow-left" /><span>اقرأ المزيد</span> 
            </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="service-item item-indigo position-relative">
            <i className="bi bi-calendar4-week icon" />
            <h3>خطط مخصصة</h3>
            <p>
              احصل على خطط صحة نفسية مخصصة بناءً على احتياجاتك وأهدافك الفريدة.
            </p>
            <a href="#" className="read-more stretched-link">
              <i className="bi bi-arrow-left" /><span>اقرأ المزيد</span> 
            </a>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="service-item item-pink position-relative">
            <i className="bi bi-chat-square-text icon" />
            <h3>دعم على مدار الساعة</h3>
            <p>
              الوصول إلى خدماتنا في أي وقت ومن أي مكان، مع دعم على مدار الساعة لاحتياجاتك النفسية.
            </p>
            <a href="#" className="read-more stretched-link">
              <i className="bi bi-arrow-left" /><span>اقرأ المزيد</span> 
            </a>
                </div>
              </div>
              {/* End Service Item */}
          </div>
        </div>
      </section>
      {/* /Services Section */}
    </>
  );
};

export default Services;