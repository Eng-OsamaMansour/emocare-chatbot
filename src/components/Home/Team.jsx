import React from 'react';
import '../../assets/styles/Home/team.css';

const Team = () => {
  return (
    <>
      {/* Team Section */}
      <section id="team" className="team section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>الفريق</h2>
          <p>تعرف على فريقنا المخصص</p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            {/* Team Member 1: Osama Mansour (Leader) */}
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/Osama.jpg"
                    className="img-fluid"
                    alt="Osama Mansour"
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>أسامة منصور</h4>
                  <span>AI Programming with Python</span>
                  <p>
                    أسامة، قائد فريقنا، يشرف على تطوير الذكاء الاصطناعي ويضمن أن يقدم روبوت الدردشة لدينا حلولًا متقدمة.
                  </p>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            {/* Team Member 2: Haneen Alhajali */}
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/HaneenLogo.jpg"
                    className="img-fluid"
                    alt="Haneen Alhajali"
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>حنين الحاج علي</h4>
                  <span>Front End Web Development</span>
                  <p>
                    حنين هي مطورة واجهات أمامية ماهرة تضمن أن تكون منصتنا سهلة الاستخدام وجذابة بصريًا ومتجاوبة.
                  </p>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            {/* Team Member 3: Hamza Barabrah */}
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt="Hamza Barabrah"
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>حمزة برابرة</h4>
                  <span>Data Analyst</span>
                  <p>
                    حمزة متخصص في تحليل البيانات، مما يساعدنا على اتخاذ قرارات مستندة إلى البيانات لتحسين أداء روبوت الدردشة الخاص بنا.
                  </p>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            {/* Team Member 4: Sarah Hassouneh */}
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt="Sarah Hassouneh"
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>سارة حسونة</h4>
                  <span>AI Programming with Python</span>
                  <p>
                    سارة شغوفة بالذكاء الاصطناعي وتساهم في تطوير الميزات الذكية لروبوت الدردشة الخاص بنا.
                  </p>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            {/* Team Member 5: Yasmin Shkarnah */}
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt="Yasmin Shkarnah"
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>ياسمين شكرنة</h4>
                  <span>Intro to Programming</span>
                  <p>
                    ياسمين تجلب وجهات نظر جديدة ومهارات برمجة أساسية لفريقنا.
                  </p>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            {/* Team Member 6: Hamza Ghaith */}
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt="Hamza Ghaith"
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>حمزة غيث</h4>
                  <span>AI Programming with Python</span>
                  <p>
                    حمزة، طالب طب لديه شغف بالبرمجة، يساهم في تطوير الذكاء الاصطناعي لروبوت الدردشة الخاص بنا.
                  </p>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            {/* Team Member 7: Abdullah Abu Aiysh */}
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt="Abdullah Abu Aiysh"
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>عبد الله أبو عيش</h4>
                  <span>Intro to Programming</span>
                  <p>
                    عبد الله يجلب خبرة برمجة أساسية، مما يساعد على سد الفجوة بين الأفكار والتنفيذ.
                  </p>
                </div>
              </div>
            </div>
            {/* End Team Member */}

            {/* Team Member 8: Aziz Issa */}
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src="/assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt="Aziz Issa"
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>عزيز عيسى</h4>
                  <span>Front End Web Development</span>
                  <p>
                    عزيز يركز على إنشاء تجارب مستخدم سلسة، مما يضمن أن تكون منصتنا بديهية وسهلة الوصول.
                  </p>
                </div>
              </div>
            </div>
            {/* End Team Member */}
          </div>
        </div>
      </section>
      {/* /Team Section */}
    </>
  );
};

export default Team;