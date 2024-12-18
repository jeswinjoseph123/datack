"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Title from "@/public/images/icon/section-title.png";
import One from "@/public/images/testimonial/Screenshot 2024-12-15 212436 (1).png";
import Two from "@/public/images/testimonial/Screenshot 2024-12-15 212436 (1).png";

const Testimonial = () => {
  return (
    <section
      className="testimonial-area bg-image pt-120 pb-120"
      style={{
        backgroundImage: "url(/images/bg/pexels-a-darmel-7641857.jpg)",
      }}
      id="testimonial-section"
    >
      <div className="container">
        <div className="row g-4">
          <div
            className="col-lg-6 "
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="talk-us__item">
              <div className="section-header mb-30">
                <h5 className="text-white">
                  <svg
                    width="28"
                    height="12"
                    viewBox="0 0 28 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.75"
                      y="0.75"
                      width="18.5"
                      height="10.5"
                      rx="5.25"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <rect x="8" width="20" height="12" rx="6" fill="white" />
                  </svg>
                  TALK TO US
                </h5>
                <h2 className="text-white">How May We Help You!</h2>
              </div>
              <form action="#">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="name">Your name*</label>
                    <input type="text" id="name" placeholder="Robot fox" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email">Your Email*</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="info@example.com"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="subject">subject*</label>
                    <input type="text" id="subject" placeholder="Subject" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="number">Your Phone*</label>
                    <input
                      type="text"
                      id="number"
                      placeholder="+1253 457 7840"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="massage">Message*</label>
                    <textarea
                      id="massage"
                      placeholder="Write Message"
                    ></textarea>
                  </div>
                </div>
                <button>Sand Message</button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 ps-2 ps-lg-5">
            <div className="section-header mb-40">
              <h5
                className=""
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1500"
              >
                <Image className="me-1" src={Title} alt="icon" priority />
                CLIENTS REVIEW
              </h5>
              <h2
                className=""
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                What They Say About Our
              </h2>
              <p
                className=""
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                Our customers are at the heart of everything we do. Hear
                firsthand how our innovative solutions and dedicated support
                have transformed their businesses. These stories inspire us to
                keep delivering excellence every step of the way.
              </p>
            </div>
            <div
              className="swiper testimonial__slider "
              data-aos="fade-down"
              data-aos-delay="0"
              data-aos-duration="1500"
            >
              <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                freeMode={true}
                speed={300}
                loop={true}
                roundLengths={true}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                className="swiper-wrapper"
                navigation={{
                  nextEl: ".testimonial__arry-next",
                  prevEl: ".testimonial__arry-prev",
                }}
              >
                <SwiperSlide>
                  <div>
                    <div className="testimonial__item">
                      <svg
                        className="coma"
                        width="50"
                        height="37"
                        viewBox="0 0 50 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      <div className="d-flex align-items-center gap-3">
                        <Image src={One} alt="Image" priority />
                        <div className="testi-info">
                          <h4>Sarah Johnson</h4>
                          <p>Web Developer</p>
                          <div className="star mt-1">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star disable"></i>
                          </div>
                        </div>
                      </div>
                      <p className="mt-30">
                        “Scion Datack transformed the way we operate! Their
                        tailored IT solutions streamlined our processes, saved
                        us time, and boosted our efficiency. Highly recommend
                        their services to any business seeking innovation.”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <div className="testimonial__item">
                      <svg
                        className="coma"
                        width="50"
                        height="37"
                        viewBox="0 0 50 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      <div className="d-flex align-items-center gap-3">
                        <Image src={Two} alt="Image" priority />
                        <div className="testi-info">
                          <h4>Mark Thompson</h4>
                          <p>Web Designer</p>
                          <div className="star mt-1">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star disable"></i>
                          </div>
                        </div>
                      </div>
                      <p className="mt-30">
                        “ The team at Scion Datack exceeded our expectations.
                        From designing a user-friendly website to building our
                        mobile app, they delivered exceptional results at every
                        stage of development. Truly a game-changer for our
                        company!”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div
              className="testimonial__arry-btn mt-40 "
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <button className="arry-prev testimonial__arry-prev">
                <i className="fa-light fa-chevron-left"></i>
              </button>
              <button className="arry-next testimonial__arry-next active">
                <i className="fa-light fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
