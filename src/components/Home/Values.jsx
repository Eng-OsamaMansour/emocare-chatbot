import React from 'react';
import '../../assets/styles/Home/values.css';

const Values = () => {
  return (
    <>
      {/* Values Section */}
      <section id="values" className="values section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>قيمنا</h2>
          <p>
          ما نمثله
            <br />
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="card">
                <img src="assets/img/values-1.png" className="img-fluid" alt="Empathy" />
                <h3>التعاطف</h3>
                <p>
                  نحن نعطي الأولوية للتفاهم والتعاطف في كل تفاعل، لضمان شعور المستخدمين بالدعم والاهمية
                </p>
              </div>
            </div>
            {/* End Card Item */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="card">
                <img src="assets/img/values-2.png" className="img-fluid" alt="Innovation" />
                <h3>الابتكار</h3>
                <p>
                نحن نستفيد من التكنولوجيا المتطورة لتوفير حلول فعالة وسهلة الوصول للصحة العقلية
                </p>
              </div>
            </div>
            {/* End Card Item */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="card">
                <img src="assets/img/values-3.png" className="img-fluid" alt="Integrity" />
                <h3>النزاهة</h3>
                <p>
                نحن ملتزمون بالشفافية والصدق والممارسات الأخلاقية في كل ما نقوم به.
                </p>
              </div>
            </div>
            {/* End Card Item */}
          </div>
        </div>
      </section>
      {/* /Values Section */}
    </>
  );
};

export default Values;