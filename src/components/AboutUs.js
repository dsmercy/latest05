import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import bread from '../assets/images/Group 41826.png';
import group from '../assets/images/Group 41828.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper.min.css'
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
import swip from '../assets/images/Rectangle 46.png';
import mobile from '../assets/images/Group 41834.png';
import google from '../assets/images/app-store-google-play-logo 4.png';
import iphone from '../assets/images/app-store-google-play-logo 3.png';
import brand from '../assets/images/image 8.png';
import brandOne from '../assets/images/image 9.png';
import brandTwo from '../assets/images/image 10.png';
import brandThree from '../assets/images/image 11.png';
import brandFour from '../assets/images/image 12.png';
import line from '../assets/images/Vector 20.png';


const AboutUs = () => {
    return (
        <>
            <Header />

            <div className='about-us'>
                <div className='about-bread'>
                    <div className='about-bread-inner'>
                        <h4>About Us</h4>
                        <p>Get the latest news, updates and tips</p>
                    </div>
                    <div className=''>
                        <img src={bread} alt="image" />
                    </div>

                </div>
                <Container>
                    <div className='about-poppins-job'>

                        <h4>About Poppin’ <span>Jobs</span></h4>
                        <p>At Poppin' Jobs, we're on a mission to empower youth and shape the future workforce. Our commitment is to bridge the gap between ambitious individuals and opportunities that drive personal and professional growth. As the go-to platform for internships, volunteer positions, and job searches, we utilize GPS technology to connect users with opportunities in their desired locations. Poppin' Jobs is more than just a service; it's a catalyst for propelling careers forward and contributing to the foundation of our future workforce.</p>

                    </div>


                    <div className='about-what-we'>
                        <Row>
                            <Col lg={6} sm={12}>
                                <img src={group} alt="image" />

                            </Col>
                            <Col lg={6} sm={12}>
                                <h4>What we can do</h4>
                                <p>At Poppin' Jobs, we redefine the job search experience for both companies and job seekers. For businesses, our platform streamlines recruitment with GPS technology, ensuring targeted access to a pool of talented youth. We prioritize efficiency, offering a seamless hiring process.
                                </p>
                                <p>Job seekers benefit from a diverse array of opportunities, from internships to jobs, tailored to their aspirations. Our unique GPS feature allows users to discover opportunities in their preferred locations, setting us apart from traditional job boards. Join Poppin' Jobs for a revolutionary approach to connecting talent with exciting career and volunteer prospects.
                                </p>

                            </Col>
                        </Row>

                    </div>
                </Container>

                <div className='about-meet'>
                    <Container>
                        <h4>Meet Our Team</h4>
                        <p>Get to know the architects of youth empowerment</p>


                        <Swiper
                            breakpoints={{
                                1200: {
                                    width: 1200,
                                    slidesPerView: 4,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },
                                425: {
                                    width: 425,
                                    slidesPerView: 1,
                                },
                                320: {
                                    width: 375,
                                    slidesPerView: 1,
                                },
                                320: {
                                    width: 320,
                                    slidesPerView: 1,
                                },
                            }}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={4}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='swiper-head'>
                                    <img src={swip} alt="image" />
                                    <h4>Cameron</h4>
                                    <p>Frontend Developer</p>
                                    <div className='swiper-rating'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <span>4.0</span>

                                    </div>
                                    <span><i className='fa fa-map-marker'></i> New York, US</span>
                                    <div className='swiper-social-icon'>
                                        <span><i className='fa fa-facebook-f'></i></span>
                                        <span><i className='fa fa-instagram'></i></span>
                                        <span><i className='fa fa-twitter'></i></span>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='swiper-head'>
                                    <img src={swip} alt="image" />
                                    <h4>Cameron</h4>
                                    <p>Frontend Developer</p>
                                    <div className='swiper-rating'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <span>4.0</span>

                                    </div>
                                    <span><i className='fa fa-map-marker'></i> New York, US</span>
                                    <div className='swiper-social-icon'>
                                        <span><i className='fa fa-facebook-f'></i></span>
                                        <span><i className='fa fa-instagram'></i></span>
                                        <span><i className='fa fa-twitter'></i></span>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='swiper-head'>
                                    <img src={swip} alt="image" />
                                    <h4>Cameron</h4>
                                    <p>Frontend Developer</p>
                                    <div className='swiper-rating'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <span>4.0</span>

                                    </div>
                                    <span><i className='fa fa-map-marker'></i> New York, US</span>
                                    <div className='swiper-social-icon'>
                                        <span><i className='fa fa-facebook-f'></i></span>
                                        <span><i className='fa fa-instagram'></i></span>
                                        <span><i className='fa fa-twitter'></i></span>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='swiper-head'>
                                    <img src={swip} alt="image" />
                                    <h4>Cameron</h4>
                                    <p>Frontend Developer</p>
                                    <div className='swiper-rating'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <span>4.0</span>

                                    </div>
                                    <span><i className='fa fa-map-marker'></i> New York, US</span>
                                    <div className='swiper-social-icon'>
                                        <span><i className='fa fa-facebook-f'></i></span>
                                        <span><i className='fa fa-instagram'></i></span>
                                        <span><i className='fa fa-twitter'></i></span>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='swiper-head'>
                                    <img src={swip} alt="image" />
                                    <h4>Cameron</h4>
                                    <p>Frontend Developer</p>
                                    <div className='swiper-rating'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <span>4.0</span>

                                    </div>
                                    <span><i className='fa fa-map-marker'></i> New York, US</span>
                                    <div className='swiper-social-icon'>
                                        <span><i className='fa fa-facebook-f'></i></span>
                                        <span><i className='fa fa-instagram'></i></span>
                                        <span><i className='fa fa-twitter'></i></span>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='swiper-head'>
                                    <img src={swip} alt="image" />
                                    <h4>Cameron</h4>
                                    <p>Frontend Developer</p>
                                    <div className='swiper-rating'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <span>4.0</span>

                                    </div>
                                    <span><i className='fa fa-map-marker'></i> New York, US</span>
                                    <div className='swiper-social-icon'>
                                        <span><i className='fa fa-facebook-f'></i></span>
                                        <span><i className='fa fa-instagram'></i></span>
                                        <span><i className='fa fa-twitter'></i></span>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='swiper-head'>
                                    <img src={swip} alt="image" />
                                    <h4>Cameron</h4>
                                    <p>Frontend Developer</p>
                                    <div className='swiper-rating'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <span>4.0</span>

                                    </div>
                                    <span><i className='fa fa-map-marker'></i> New York, US</span>
                                    <div className='swiper-social-icon'>
                                        <span><i className='fa fa-facebook-f'></i></span>
                                        <span><i className='fa fa-instagram'></i></span>
                                        <span><i className='fa fa-twitter'></i></span>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='swiper-head'>
                                    <img src={swip} alt="image" />
                                    <h4>Cameron</h4>
                                    <p>Frontend Developer</p>
                                    <div className='swiper-rating'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <span>4.0</span>

                                    </div>
                                    <span><i className='fa fa-map-marker'></i> New York, US</span>
                                    <div className='swiper-social-icon'>
                                        <span><i className='fa fa-facebook-f'></i></span>
                                        <span><i className='fa fa-instagram'></i></span>
                                        <span><i className='fa fa-twitter'></i></span>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='swiper-head'>
                                    <img src={swip} alt="image" />
                                    <h4>Cameron</h4>
                                    <p>Frontend Developer</p>
                                    <div className='swiper-rating'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <span>4.0</span>

                                    </div>
                                    <span><i className='fa fa-map-marker'></i> New York, US</span>
                                    <div className='swiper-social-icon'>
                                        <span><i className='fa fa-facebook-f'></i></span>
                                        <span><i className='fa fa-instagram'></i></span>
                                        <span><i className='fa fa-twitter'></i></span>
                                    </div>

                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Container>

                </div>

                <Container>
                    <div className='about-million'>
                    <Row>
                        <Col lg={4} sm={12}>
                        <div className='about-million-inner'>
                            <h4>7million</h4>
                            <p>Completed Jobs</p>
                        </div>
                        </Col>
                        <Col lg={4} sm={12}>
                        <div className='about-million-inner'>
                            <h4>30k+</h4>
                            <p>Worldwide Client</p>
                        </div>
                        </Col>
                        <Col lg={4} sm={12}>
                        <div className='about-million-inner'>
                            <h4>13billion</h4>
                            <p>Dollar Payout</p>
                        </div>
                        </Col>
                     
                    </Row>
                     
                      

                     


                    </div>
                </Container>

                <div className='about-download'>
                    <Container>
                        <Row>
                            <Col lg={6} sm={12}  className="align-self-center" >
                            <div className='about-download-left'>
                                <h4>Download our App Today</h4>
                                <p>Discover, Apply, Succeed. Your Next Opportunity is a Tap Away: Download Poppin' Jobs now!</p>
                               <img src={google} alt="image" />
                               <img src={iphone} alt="image" />
                               
                               </div>
                            </Col>
                            <Col lg={6} sm={12}>
                            <div className='about-download-right'>
                                <img src={mobile} alt="image" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


                <div className='brand'>
                <Container>
               
                   
                    <Swiper
                            breakpoints={{
                                1200: {
                                    width: 1200,
                                    slidesPerView: 4,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },
                                425: {
                                    width: 425,
                                    slidesPerView: 1,
                                },
                                320: {
                                    width: 375,
                                    slidesPerView: 1,
                                },
                                320: {
                                    width: 320,
                                    slidesPerView: 1,
                                },
                            }}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={4}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                             <div className='brand-inner'> <img src={brand} alt="image" /></div>
                            </SwiperSlide>
                            <SwiperSlide>
                    <div className='brand-inner'>  <img src={brandOne} alt="image" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='brand-inner'>  <img src={brandTwo} alt="image" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='brand-inner'>  <img src={brandThree} alt="image" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='brand-inner'>  <img src={brandFour} alt="image" /></div>
                    </SwiperSlide>
                    </Swiper>
             
                
                    
                   
                    
                   
                    </Container>
                </div>

                <Container>
                    <div className='about-never'>
                    <Row>
                        <Col lg={6} sm={12}>
                            <h4>Never want to miss any job news</h4>
                            {/* <img src={line} alt="image" /> */}
                        </Col>
                        <Col lg={6} sm={12}>
                            <input type="text" name="" className='form-control' placeholder='Enter email' />
                            <Button variant=''>Subscribe</Button>
                        </Col>
                    </Row>

                    </div>
                </Container>


            </div>



            <Footer />
        </>
    )
}

export default AboutUs
