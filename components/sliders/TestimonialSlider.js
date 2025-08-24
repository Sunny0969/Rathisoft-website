"use client";
import { sliderProps } from "../../utility/sliderProps";
import Slider from "react-slick";

export const TestimonialSlider1 = () => {
  return (
    <Slider
      {...sliderProps.testimonials2}
      className="testimonials-two-active"
      data-aos="fade-right"
      data-aos-duration={1500}
      data-aos-offset={50}
    >
      {[
        {
          // logo: "assets/images/testimonials/logo3white.png",
          author: "/assets/images/testimonials/author1.jpg",
          text: "We approached Rathisoft for a complete digital transformation of our business. They built us a custom AI-powered inventory management system and redesigned our website from scratch.",
          name: "Ali Raza",
          designation: "Founder of TechMart.pk, Lahore",
        },
        {
          // logo: "/assets/images/testimonials/logo1white.png",
         author: "/assets/images/testimonials/author2.jpg",
          text: "As a startup in Karachi, we needed an iOS app that was fast, secure, and scalable. Rathisoft not only delivered beyond our expectations but also integrated AI chat support and seamless payment solutions. They guided us through every step from idea to App Store launch.",
          name: "Sana Ahmed",
          designation: "CEO of HealthSwift, Karachi ",
        },
        {
          // logo: "/assets/images/testimonials/logo3white.png",
          author: "/assets/images/hero/author1.jpg",
          text: "I was skeptical about digital marketing at first, but the team at Rathisoft proved me wrong. With their SEO and social media strategy, our clinic’s website now ranks on the first page of Google. We’ve seen a doubling of patient inquiries online. Highly recommended!",
          name: "Dr. Faraz Khan",
          designation: "Dental Care Plus, Islamabad",
        },
        {
          // logo: "/assets/images/testimonials/logo1white.png",
          author: "/assets/images/hero/author2.jpg",
          text: "We needed a modern, responsive website for our architecture firm. Rathisoft didn’t just build a site — they created a digital portfolio with 3D animations of our projects. The attention to detail and creativity was outstanding. Our clients are impressed before they even meet us!",
          name: "Nida Jamal",
          designation: "DesignEdge Studio, Hyderabad",
        },
      ].map((testimonial, index) => (
        <div key={index} className="testimonial-item style-two">
          <div className="author-logo">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
            {/* <div className="logo">
              <img src={testimonial.logo} alt="Logo" />
            </div> */}
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export const TestimonialsSlider2 = () => {
  return (
    <Slider className="testimonials-active" {...sliderProps.testimonials}>
      {[
        {
          author: "/assets/images/testimonials/author1.jpg",
          logo: "/assets/images/testimonials/logo1white.png",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "/assets/images/testimonials/author2.jpg",
          logo: "/assets/images/testimonials/logo2white.png",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Thomas L. Brinker",
          designation: "SR Manager",
        },
        {
          author: "/assets/images/testimonials/author1.jpg",
          logo: "/assets/images/testimonials/logo1white.png",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "/assets/images/testimonials/author2.jpg",
          logo: "/assets/images/testimonials/logo2white.png",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Thomas L. Brinker",
          designation: "SR Manager",
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="testimonial-item"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
          data-aos-delay={index * 50}
        >
          <div className="author-logo">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <div className="logo">
              <img src={testimonial.logo} alt="Logo" />
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export const TestimonialsSlider3 = () => {
  return (
    <Slider className="testimonials-two-active" {...sliderProps.testimonials2}>
      {[
        {
          author: "/assets/images/testimonials/author1.jpg",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "/assets/images/testimonials/author2.jpg",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "/assets/images/testimonials/author1.jpg",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "/assets/images/testimonials/author2.jpg",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have helped us reach new heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
      ].map((testimonial, index) => (
        <div key={index} className="testimonial-item style-three">
          <div className="author-logo">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export const TestimonialsSlider4 = () => {
  return (
    <Slider
      {...sliderProps.testimonials3}
      className="testimonials-three-active"
    >
      {[
        {
          // author: "assets/images/testimonials/author1.jpg",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          // author: "assets/images/testimonials/author2.jpg",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "/assets/images/testimonials/author1.jpg",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          author: "/assets/images/testimonials/author2.jpg",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
      ].map((testimonial, index) => (
        <div key={index} className="testimonial-item style-four">
          <div className="author-logo">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export const TestimonialsSlider5 = () => {
  return (
    <Slider {...sliderProps.testimonials2} className="testimonials-two-active">
      {[
        {
          // author: "assets/images/testimonials/author1.jpg",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          // author: "assets/images/testimonials/author2.jpg",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
        {
          // author: "assets/images/testimonials/author1.jpg",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
          {
          // author: "assets/images/testimonials/author2.jpg",
          text: "Working with Rathisoft has been game-changer for our social media presence. Their strategic to approach and attention too detail have help reach heights",
          name: "Randall J. Ferguson",
          designation: "CEO & Founder",
        },
      ].map((testimonial, index) => (
        <div key={index} className="testimonial-item style-four">
          <div className="author-logo">
            <div className="quote">
              <i className="flaticon-quotation-mark" />
            </div>
          </div>
          <div className="text">{testimonial.text}</div>
          <div className="quote-title">
            <div className="author">
              <img src={testimonial.author} alt="Author" />
            </div>
            <h6>{testimonial.name}</h6>
            <span className="designation">/{testimonial.designation}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};
