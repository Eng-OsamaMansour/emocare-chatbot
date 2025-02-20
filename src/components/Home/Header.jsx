import React from 'react';
import '../../assets/styles/Home/header.css';

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          <img src="/assets/img/emocare-logo.png" alt="EmoCare Logo" />
          <h1 className="sitename">EmoCare</h1>
        </a>
        <a className="btn-getstarted flex-md-shrink-0" href="/login">
          البدء
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#contact">تواصل معنا</a>
            </li>
            <li>
              <a href="#team">فريق العمل</a>
            </li>
            <li>
              <a href="#pricing">الاسعار</a>
            </li>
            <li>
              <a href="#services">الخدمات</a>
            </li>
            <li>
              <a href="#about">من نحن</a>
            </li>
            <li>
              <a href="#hero" className="active">
                 الرئسية
                <br />
              </a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>

      </div>
    </header>
  );
};

export default Header;