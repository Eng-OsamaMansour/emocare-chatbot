import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS SDK
import "../../assets/styles/Home/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJS credentials
    const serviceID = "service_rfwlfdv";
    const templateID = "template_sk1jypj";
    const userID = "3UjHuJ-kWTM5sY_oa";

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          // Show success message
          document.querySelector(".sent-message").style.display = "block";
          document.querySelector(".loading").style.display = "none";
          // Reset the form
          form.current.reset();

          // Hide success message after 5 seconds
          setTimeout(() => {
            document.querySelector(".sent-message").style.display = "none";
          }, 5000); // 5000 milliseconds = 5 seconds
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          // Hide loading message
          document.querySelector(".loading").style.display = "none";
        }
      );

    // Show loading message
    document.querySelector(".loading").style.display = "block";
    document.querySelector(".sent-message").style.display = "none";
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>اتصل بنا</h2>
          <p>ابقى على تواصل</p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-item" data-aos="fade" data-aos-delay={200}>
                    <i className="bi bi-geo-alt" />
                    <h3>العنوان</h3>
                    <p>123 شارع العافية</p>
                    <p>نيويورك، NY 10001</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div className="info-item" data-aos="fade" data-aos-delay={300}>
                    <i className="bi bi-telephone" />
                    <h3>اتصل بنا</h3>
                    <p>+1 234 567 890</p>
                    <p>+1 987 654 321</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div className="info-item" data-aos="fade" data-aos-delay={400}>
                    <i className="bi bi-envelope" />
                    <h3>راسلنا عبر البريد الإلكتروني</h3>
                    <p>support@emocare.com</p>
                    <p>info@emocare.com</p>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div className="info-item" data-aos="fade" data-aos-delay={500}>
                    <i className="bi bi-clock" />
                    <h3>ساعات العمل</h3>
                    <p>الاثنين - الجمعة</p>
                    <p>9:00 صباحًا - 6:00 مساءً</p>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
            </div>
            <div className="col-lg-6">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="from_name" 
                      className="form-control"
                      placeholder="اسمك"
                      required
                    />
                  </div>
                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      name="from_email" 
                      placeholder="بريدك الإلكتروني"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject" 
                      placeholder="الموضوع"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message" 
                      rows={6}
                      placeholder="رسالة"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 text-center">
                    <div className="loading">جارٍ التحميل</div>
                    <div className="sent-message">
                      تم إرسال رسالتك. شكرا لك!
                    </div>
                    <button type="submit">إرسال الرسالة</button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
      {/* /Contact Section */}
    </>
  );
};

export default Contact;