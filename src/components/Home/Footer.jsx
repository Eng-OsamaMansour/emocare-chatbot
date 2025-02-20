import React from 'react';
import '../../assets/styles/Home/footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-newsletter"></div>
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="d-flex align-items-center">
              <span className="sitename">إيموكير</span>
            </a>
            <div className="footer-contact pt-3">
              <p>123 شارع العافية</p>
              <p>نيويورك، NY 10001</p>
              <p className="mt-3">
                <strong>الهاتف:</strong> <span>+1 234 567 890</span>
              </p>
              <p>
                <strong>البريد الإلكتروني:</strong> <span>support@emocare.com</span>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>روابط مفيدة</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">الرئيسية</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">من نحن</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">خدماتنا</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">الفريق</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>خدماتنا</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">الدردشة الآلية</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">الدردشة الصوتية</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">الدردشة مع الطبيب</a>
              </li>
              <li>
                <i className="bi bi-chevron-right" /> <a href="#">متتبع المزاج</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4>تابعنا</h4>
            <p>
              ابق على تواصل معنا للحصول على آخر التحديثات ونصائح الصحة النفسية.
            </p>
            <div className="social-links d-flex">
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
        </div>
      </div>
      <div className="container copyright text-center mt-4">
        <p>
          © <span>حقوق النشر</span>{" "}
          <strong className="px-1 sitename">إيموكير</strong>{" "}
          <span>جميع الحقوق محفوظة</span>
        </p>
        <div className="credits">
          تصميم بواسطة <a href="">حنين</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;