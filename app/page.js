import Blog from "@/components/Blog";
import CounterItems from "@/components/CounterItems";
import CTA from "@/components/CTA";
import Services from "@/components/Services";
import ClientSlider from "@/components/sliders/ClientSlider";
import { TestimonialSlider1 } from "@/components/sliders/TestimonialSlider";
import RiddaLayout from "@/layout/RiddaLayout";
import Link from "next/link";

const page = () => {
  return (
    <RiddaLayout>
      {/* Hero Area Start */}
      <section className="hero-area-four bgc-black text-white rel z-2">
        <div className="container px-xxl-0 bordered-x pt-180 rpt-90">
          <div className="row pt-50">
            <div className="col-xl-10">
              <div
                className="hero-content-four"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>AI & Digital Innovation</h1>
                <p>
                At Rathisoft Innovation, we transform ideas into intelligent, scalable digital solutions. As a full-service AI and IT technology agency, we specialize in delivering cutting-edge services that drive growth, efficiency, and brand excellence in today’s fast-evolving digital landscape
                </p>
                <Link
                  href="/project-grid"
                  className="theme-btn mt-30 rmt-15 mb-65 rmb-30"
                >
                  <span>Explore Our Projects</span>
                </Link>
                <h5>100+ Trusted Clients</h5>
                <div className="trusted-clients mt-25">
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={50}
                    src="/assets/images/hero/author1.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                    src="/assets/images/hero/author2.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={150}
                    src="/assets/images/hero/author3.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={200}
                    src="/assets/images/hero/author4.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={250}
                    src="/assets/images/hero/author5.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={300}
                    src="/assets/images/hero/author6.jpg"
                    alt="Author"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-area-shapes">
          <div className="shape">
            <img src="/assets/images/shapes/hero-shape.png" alt="Shape" />
          </div>
          <div className="hero-image">
            <img src="/assets/images/hero/hero-four.jpg" alt />
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Counter Area start */}
      <div className="counter-area bgc-black pt-120 rpt-100 rel z-1">
        <div className="row gap-80 align-items-center">
          <div
            className="col-xxl-5"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="counter-left-image">
              <img src="/assets/images/counter/counter.jpg" alt="Counter" />
            </div>
          </div>
          <div className="col-xxl-7">
            <CounterItems />
          </div>
        </div>
        <div className="container text-white blank-container bordered-x" />
        <div className="counter-shapes">
          <div className="shape">
            <img src="/assets/images/shapes/counter.png" alt="Shape" />
          </div>
          <span className="marquee-wrap">
            <span className="marquee-inner left">
              <span className="marquee-item">Web Design Agency</span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">Web Design Agency</span>
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">Web Design Agency</span>
            </span>
          </span>
        </div>
      </div>
      {/* Counter Area end */}
      {/* About Area start */}
      <section className="about-area rel z-1">
        <div className="container bordered-x pt-130 rpt-100 pb-100">
          <div className="row px-xl-5 justify-content-between align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="about-circles rmb-55">
                <div
                  className="circle"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Development
                </div>
                <div
                  className="circle mx-auto bgc-black text-white"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Web Design
                </div>
                <div
                  className="circle ms-auto bgc-primary"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Mobile Apps Design
                </div>
              </div>
            </div>
            <div
              className="col-lg-7"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-content-four">
                <div className="section-title mb-40">
                  <span className="subtitle mt-10 mb-15">About Agency</span>
                  <h2>
                    Technology Transforming Ideas into Reality Empowering Brands
                    with Engaging <span>Rathisoft</span> Agency
                  </h2>
                </div>
                <p>
                We don’t just code, we innovate. At Rathisoft, we combine AI, creativity, and engineering excellence to empower brands with next-generation digital experiences.

Our team of experts is passionate about pushing boundaries, solving complex challenges, and delivering solutions that are not only functional but future-proof.
                </p>
                <ul className="list-style-one my-30">
                  <li>3D Animation & Motion Design</li>
                  <li>SEO & Digital Marketing</li>
                  <li>Web Design & Development</li>
                  <li>Mobile & iOS App Development</li>
                  <li>AI & Digital Innovation</li>
                  <li>Custom Software & IT Solutions</li>

                </ul>
                {/* <Link
                  href="/project-list"
                  className="theme-btn style-two"
                  data-hover="Explore Our Projects"
                >
                  <span>Explore Our Projects</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container bordered-x px-0">
          <img src="/assets/images/about/about.png" alt="About" />
        </div>
      </section>
      {/* About Area end */}
      {/* Services Area Start */}
      <Services />
      {/* Services Area End */}
      {/* Working Process Area Start */}
      <section className="working-process-area bgc-black text-white rel z-1">
        <div className="container bordered-x pt-130 rpt-100 pb-80 rpb-50">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title mb-50 text-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle mt-10 mb-15">How IT Works</span>
                <h2>Step by Step Working Process</h2>
              </div>
            </div>
          </div>
          <div className="row gap-50 justify-content-center rel">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="work-process-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="/assets/images/work-process/work-process1.jpg"
                    alt="Work Process"
                  />
                </div>
                <div className="circle" />
                <div className="content">
                  <h5>
                    Discovery and
                    <br /> Strategy
                  </h5>
                  <p>
                  We analyze your goals, audience, and market to build a winning tech strategy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="work-process-item"
                data-aos="flip-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <h5>
                    Design and
                    <br /> Prototyping
                  </h5>
                  <p>
                  Our designers create intuitive, brand-aligned UI/UX prototypes.
                  </p>
                </div>
                <div className="circle" />
                <div className="image">
                  <img
                    src="/assets/images/work-process/work-process2.jpg"
                    alt="Work Process"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="work-process-item"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="/assets/images/work-process/work-process3.jpg"
                    alt="Work Process"
                  />
                </div>
                <div className="circle" />
                <div className="content">
                  <h5>
                    Development
                    <br /> and Testing
                  </h5>
                  <p>
                  We build with precision, using agile methods and rigorous QA testing.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="work-process-item"
                data-aos="flip-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <h5>
                    Launch and
                    <br /> Support
                  </h5>
                  <p>
                  Deploy with confidence and enjoy continuous optimization and support.
                  </p>
                </div>
                <div className="circle" />
                <div className="image">
                  <img
                    src="/assets/images/work-process/work-process4.jpg"
                    alt="Work Process"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="work-process-line">
                <img
                  src="/assets/images/work-process/work-step-line.png"
                  alt="Line"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="work-process-shapes" />
      </section>
      {/* Working Process Area End */}
      {/* Projects Area start */}
      <section className="project-area rel z-1">
        <div className="container bordered-x px-sm-0 py-130 rpy-100">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle mb-15">Popular Works</span>
                <h2>Explore Our Latest Projects</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div
                className="project-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a
                  href="/assets/images/projects/project-image1.jpg"
                  className="image"
                >
                  <img
                    src="/assets/images/projects/project-image1.jpg"
                    alt="Project"
                  />
                </a>
                <div className="content">
                  {/* <span className="category">Marketing</span> */}
                  <h4>
                    <Link href="project-details">Website Development</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="project-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a
                  href="/assets/images/projects/project-image2.jpg"
                  className="image"
                >
                  <img
                    src="/assets/images/projects/project-image2.jpg"
                    alt="Project"
                  />
                </a>
                <div className="content">
                  {/* <span className="category">Marketing</span> */}
                  <h6>
                    <Link href="project-details">Website Development</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="project-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a
                  href="/assets/images/projects/project-image2.jpg"
                  className="image"
                >
                  <img
                    src="/assets/images/projects/project-image2.jpg"
                    alt="Project"
                  />
                </a>
                <div className="content">
                  {/* <span className="category">Marketing</span> */}
                  <h6>
                    <Link href="project-details">Website Development</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div
                className="project-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a
                  href="/assets/images/projects/project-image4.jpg"
                  className="image"
                >
                  <img
                    src="/assets/images/projects/project-image4.jpg"
                    alt="Project"
                  />
                </a>
                <div className="content">
                  {/* <span className="category">Marketing</span> */}
                  <h4>
                    <Link href="project-details">AI Development</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div
                className="project-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a
                  href="/assets/images/projects/project-image5.jpg"
                  className="image"
                >
                  <img
                    src="/assets/images/projects/project-image5.jpg"
                    alt="Project"
                  />
                </a>
                <div className="content">
                  {/* <span className="category">Marketing</span> */}
                  <h4>
                    <Link href="project-details">Mobile App Development</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="project-item"
                data-aos="zoom-in"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <a
                  href="/assets/images/projects/project-image6.jpg"
                  className="image"
                >
                  <img
                    src="/assets/images/projects/project-image6.jpg"
                    alt="Project"
                  />
                </a>
                <div className="content">
                  {/* <span className="category">Marketing</span> */}
                  <h6>
                    <Link href="project-details">Website Development</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <Link
                href="project-grid"
                className="theme-btn style-two mt-20"
                data-hover="Explore Projects"
              >
                <span>Explore Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Area end */}
      {/* Testimonials Area Start */}
      <section className="testimonials-two-area rel z-1">
        <div className="container px-0 bordered-x pt-130 rpt-100 pb-170 rpb-140">
          <div className="testimonials-and-clients bgc-white br-10 bordered">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="testimonials-content rmb-55"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-30">
                    <span className="subtitle mt-10 mb-15">
                      Out Testimonials
                    </span>
                    <h6>Trusted by startups and growing brands worldwide

</h6>
                    <h2>13+ Customer Say About Our Services</h2>
                  </div>
                  <p>
                  Rathisoft transformed our outdated website into an AI-powered platform that handles 10x more traffic with half the effort.
                  </p>
                  <div className="testimonial-dots mt-45" />
                </div>
              </div>
              <div className="col-lg-7">
                <TestimonialSlider1 />
              </div>
            </div>
            <div
              className="text-center mt-45 mb-40"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
             
            </div>
            {/* <ClientSlider /> */}
          </div>
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* Blog Area start */}
      {/* <Blog /> */}
      {/* Blog Area end */}
      {/* CTA Area start */}
      <CTA />
      {/* CTA Area end */}
    </RiddaLayout>
  );
};
export default page;
