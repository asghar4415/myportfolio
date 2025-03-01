import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className=" relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16  md:pt-20 md:pb-20 lg:pt-20 "
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I CRAFT STUNNING BRANDS, BUILD IMPACTFUL WEBSITES, AND CREATE ENGAGING CONTENT."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I specialize in developing both frontend and backend solutions for brands, startups, and businesses, creating seamless digital experiences that make an impact. With a strong background in web development, I bring ideas to life through clean, efficient code."
              }
            />
            <AnimatedBody
              text={
                "Beyond coding, I’m also a content creator, helping brands establish and grow their digital presence through engaging media. I’m passionate about storytelling through technology."
              }
              
            />
            <AnimatedBody
              text={
                "When I’m not building or creating, you’ll find me playing football or volleyball, capturing moments through photography and videography, or growing my Page."
              }
            />
            <AnimatedBody
              text={
                "I’m always open to new opportunities and collaborations—let’s create something amazing together!"
              }
            />
            
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            
           
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
