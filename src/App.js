import React, { useState } from "react";
import KA2 from "./asset/KA2.svg";
import global from "./asset/global.svg";
import icondown from "./asset/icondown.svg";
import image1 from "./asset/image1.png";
import image2 from "./asset/image2.png";
import image3 from "./asset/image3.png";
import image4 from "./asset/image4.jpg";
import image5 from "./asset/image5.png";
import image6 from "./asset/image6.png";
import image7 from "./asset/image7.png";
import image8 from "./asset/image8.png";
import image9 from "./asset/image9.png";
import image10 from "./asset/image10.png";
import image11 from "./asset/image11.png";
import image12 from "./asset/image12.png";
import earth from "./asset/Earth.svg";
import gmail from "./asset/gmail.svg";
import iconsignup from "./asset/iconsignup.svg";
import searchresults from "./asset/searchresults.svg";
import iconphone from "./asset/iconphone.svg";
import arrowupright from "./asset/arrowupright.svg";
import arrowupleft from "./asset/arrowupleft.svg";

import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3, image4];

  // Tính toán vị trí các hình
  const getOrderedImages = () => {
    const beforeCurrent = images.slice(0, currentIndex);
    const afterCurrent = images.slice(currentIndex);
    return [...afterCurrent, ...beforeCurrent]; // Sắp xếp lại danh sách hình
  };

  const orderedImages = getOrderedImages();

  return (
    <div class="App">
      {/* Background */}
      <div class="background">
        {/* Header */}
        <header class="header">
          <div class="container">
            <div class="KA2">
              <img src={KA2} class="logo" alt="ka2" />
            </div>
            <nav class="navbar">
              <ul class="nav-links">
                <li>
                  <a href="#home">Về chúng tôi</a>
                </li>
                <li>
                  <a href="#about">Dịch vụ</a>
                </li>
                <li>
                  <a href="#services">Sản phẩm</a>
                </li>
                <li>
                  <a href="#contact">Tin tức & Thị trường</a>
                </li>
                <li>
                  <a href="#about">Nhân lực</a>
                </li>
                <li>
                  <a href="#services">Video & Hình ảnh</a>
                </li>
                <li>
                  <a href="#contact">Liên hệ</a>
                </li>
              </ul>
            </nav>
            <div class="language">
              <img src={global} class="global" alt="language" />
              <h4>VI</h4>
              <img src={icondown} class="icondown" alt="icondown" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main class="carousel-wrapper">
          {/* Left Content */}
          <div class="left-content">
            <h1>HẬU CẦN</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam
              id. Eu odio et cras nisi eu congue faucibus sit. Pretium proin
              dignissim urna aenean rhoncus feugiat. Dui phasellus sed tellus
              nunc.
            </p>
            <button class="cta-button">
              Tìm hiểu ngay
              <span class="cta-icon">➜</span>
            </button>
          </div>

          {/* Carousel */}
          <div class="carousel">
            {orderedImages.map((image, index) => (
              <div
                key={index}
                class={`image-container ${
                  index === 0 ? "main-image" : "queued-image"
                }`}
                onClick={() =>
                  setCurrentIndex((currentIndex + index) % images.length)
                }
              >
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </main>

        {/* Dots */}
        <div class="dots">
          {images.map((_, index) => (
            <span
              key={index}
              class={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      <div class="main-container">
        <div class="left-content">
          <h1>VỀ CHÚNG TÔI</h1>
          <h3 class="leftc-para">
            Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam id.
            Eu odio et cras nisi eu congue faucibus sit. Pretium proin dignissim
            urna aenean Varius nisi amet nullam id. Eu odio et cras nisi eu.
          </h3>
          <div class="stats">
            <div class="stat-item">
              <h2>27 +</h2>
              <p>Varius nisi amet nullam id</p>
            </div>
            <div class="stat-item">
              <h2>100 +</h2>
              <p>Varius nisi amet nullam id</p>
            </div>
            <div class="stat-item">
              <h2>50 +</h2>
              <p>Varius nisi amet nullam id</p>
            </div>
            <div class="stat-item">
              <h2>1000 +</h2>
              <p>Varius nisi amet nullam id</p>
            </div>
          </div>
          <button class="cta-button">
            <p class="text-button">Tìm hiểu thêm</p>
            <img src={arrowupright} class="arrowupright" alt="arrowupright" />
          </button>
        </div>

        {/* Right Content */}
        <div class="right-content">
          <img src={earth} class="earth" alt="earth" />
        </div>
      </div>

      <div class="service-section">
        <div class="service-background">
          <div class="service-content">
            <h1 class="service-title">DỊCH VỤ CỦA CHÚNG TÔI</h1>

            <div class="service-circle">
              <img src={image10} class="image10" alt="image10" />

              <div class="service-circle2">
                <div class="service-circle3"></div>
              </div>
            </div>

            <button class="cta-button">
              Tìm hiểu thêm
              <span class="cta-icon">➜</span>
            </button>
          </div>
        </div>

        <div class="service-background2">
          <p class="service-description">Cung cấp giải pháp về hậu cần</p>
          <div class="arrow-button">
            <span>➜</span>
          </div>
        </div>
      </div>

      <div class="partner-section">
        <h2 class="partner-title">ĐỐI TÁC CỦA CHÚNG TÔI</h2>
        <div class="logo-slider">
          <div class="logo-track">
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
            <img src={KA2} class="logo-track" alt="ka2" />
          </div>
        </div>
      </div>
      <div class="reason-section">
        <div class="reason-left">
          <div class="image-stack">
            <div class="image-wrapper image-primary-wrapper">
              <img src={image11} class="image-primary" alt="PrimaryImage" />
            </div>
            <div class="image-wrapper image-secondary-wrapper">
              <img src={image12} class="image-secondary" alt="SecondaryImage" />
            </div>
          </div>
        </div>

        <div class="reason-right">
          <h2 class="reason-title">LÝ DO CHỌN CHÚNG TÔI</h2>
          <p class="reason-description">
            Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam id.
            Eu odio et cras nisi eu congue faucibus sit. Pretium proin dignissim
            urna aenean Varius nisi amet nullam id. Eu odio et cras nisi eu.
          </p>
          <div class="reason-cards">
            <div class="reason-card">
              <div class="card-icon">🌟</div>
              <div class="card-text">
                <h3 class="card-title">Độ uy tín</h3>
                <p class="card-description">
                  Lorem ipsum dolor sit amet consectetur. Varius nisi amet
                  nullam id.
                </p>
              </div>
            </div>
            <div class="reason-card">
              <div class="card-icon">🌟</div>
              <h3 class="card-title">Độ uy tín</h3>
              <p class="card-description">
                Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam
                id.
              </p>
            </div>
            <div class="reason-card">
              <div class="card-icon">🌟</div>
              <h3 class="card-title">Độ uy tín</h3>
              <p class="card-description">
                Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam
                id.
              </p>
            </div>
            <div class="reason-card">
              <div class="card-icon">🌟</div>
              <h3 class="card-title">Độ uy tín</h3>
              <p class="card-description">
                Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam
                id.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="testimonial-section">
        <h2 class="testimonial-title">KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI</h2>
        <div class="testimonial-navigation">
          <button class="prev-button">‹</button>
          <div class="testimonial-dots">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
          <button class="next-button">›</button>
        </div>
        <div class="testimonial-container">
          <div class="testimonial-card">
            <div class="testimonial-card1">
              <img src={image7} alt="Ms Taylor" class="testimonial-avatar" />
              <p class="testimonial-text">
                “ Eu odio et cras nisi eu congue faucibus sit. Pretium proin
                dignissim urna aenean Varius nisi amet nullam id. Eu odio et
                cras nisi eu. ”
              </p>
            </div>
            <div class="testimonial-card2">
              <div class="wrapper-testimonial-card2">
                <h3 class="testimonial-name">Ms Taylor</h3>
                <p class="testimonial-role">Founder ABC</p>
              </div>
              <img
                src={searchresults}
                alt="searchresults"
                class="searchresults"
              />
            </div>
          </div>

          <div class="testimonial-card">
            <div class="testimonial-card1">
              <img src={image8} alt="Ms David" class="testimonial-avatar" />
              <p class="testimonial-text">
                “ Eu odio et cras nisi eu congue faucibus sit. Pretium proin
                dignissim urna aenean Varius nisi amet nullam id. Eu odio et
                cras nisi eu. ”
              </p>
            </div>
            <div class="testimonial-card2">
              <div class="wrapper-testimonial-card2">
                <h3 class="testimonial-name">Ms David</h3>
                <p class="testimonial-role">Founder ABC</p>
              </div>
              <img
                src={searchresults}
                alt="searchresults"
                class="searchresults"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="news-section">
        <div class="news-header">
          <h2 class="news-title">TIN TỨC</h2>
          <div class="news-controls">
            <a href="#" class="view-all">
              Xem tất cả
            </a>
            <button class="news-nav prev">←</button>
            <button class="news-nav next">→</button>
          </div>
        </div>
        <div class="news-grid">
          <div class="news-card">
            <img src={image5} alt="Warehouse" class="news-image" />
            <div class="news-info">
              <span class="news-tag">Tin nội bộ</span>
              <span class="news-date">20-11-2024</span>
              <p class="news-description">
                Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam
                id
              </p>
            </div>
          </div>
          <div class="news-card">
            <img src={image6} alt="Teamwork" class="news-image" />
            <div class="news-info">
              <span class="news-tag">Tin thị trường</span>
              <span class="news-date">18-11-2024</span>
              <p class="news-description">
                Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam
                id
              </p>
            </div>
          </div>
          <div class="news-card">
            <img src={image9} alt="Hands" class="news-image" />
            <div class="news-info">
              <span class="news-tag">Tin thị trường</span>
              <span class="news-date">18-11-2024</span>
              <p class="news-description">
                Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam
                id
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-wrapper1">
            <div class="footerlogo">
              <img src={KA2} class="footer-logo" alt="ka2" />
              <p class="footer-description">
                Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam
                id. Eu odio et cras nisi eu congue faucibus sit. Pretium proin
                dignissim
              </p>
            </div>
            <div>
              <div class="subscribe-form">
                <p class="text-form"> Đăng ký nhận thông tin </p>
                <div class="input-mail">
                  <div class="email-form">
                    <img src={gmail} class="footer-gmail" alt="gmail" />
                    <input
                      type="email"
                      placeholder="Nhập Email của bạn"
                      class="subscribe-input"
                    />
                  </div>

                  <button class="subscribe-button">
                    Đăng ký ngay{" "}
                    <img
                      src={iconsignup}
                      class="footer-iconsignup"
                      alt="iconsignup"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-wrapper2">
            <div class="footer-links">
              <h4>Công ty</h4>
              <ul>
                <li>
                  <a href="#">Về chúng tôi</a>
                </li>
                <li>
                  <a href="#">Dịch vụ</a>
                </li>
                <li>
                  <a href="#">Sản phẩm</a>
                </li>
                <li>
                  <a href="#">Tin tức & Thị trường</a>
                </li>
                <li>
                  <a href="#">Nhân lực</a>
                </li>
              </ul>
            </div>
            <div class="footer-links">
              <h4>Dịch vụ</h4>
              <ul>
                <li>
                  <a href="#">Logistic</a>
                </li>
                <li>
                  <a href="#">Giải pháp kinh doanh hàng hoá quốc tế</a>
                </li>
                <li>
                  <a href="#">Outsourcing về hàng hoá</a>
                </li>
              </ul>
            </div>
            <div class="footer-contact-section">
              <h4>Liên lạc</h4>
              <ul>
                <div class="contact-icon-p">
                  <img src={iconphone} class="phonephone" alt="iconphone" />
                  <div>
                    <li>
                      <a href="tel:+84124567888">+84 124.567.888</a>
                    </li>
                    <li>(8:30 - 17:30)</li>
                  </div>
                </div>
                <div class="contact-icon-g">
                  <img src={gmail} class="gmailgmail" alt="gmail" />
                  <li>
                    <a href="mailto:hbfbfdh@gmail.com">hbfbfdh@gmail.com</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>All rights reserved.</p>
          <a href="#" class="back-to-top">
            <img src={arrowupleft} class="arrowupleft" alt="arrowupleft" />
          </a>
        </div>
        <div class="footer-social-icons">
          <a href="#">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i class="fab fa-tiktok"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
