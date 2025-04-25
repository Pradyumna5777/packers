import React, { useEffect } from "react";
import FloatingWhatsApp from "../components/FloatingWhatsapp";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const animations = gsap.utils.toArray(".animate-on-scroll").map((el, i) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play reverse play reverse", // Repeats on every scroll
            markers: false,
          },
        }
      )
    );

    return () => {
      animations.forEach(anim => anim.scrollTrigger?.kill());
    };
  }, []);

  const OverlayImage = ({ src, alt, overlayText }) => (
    <div className="relative w-full h-full rounded-xl shadow-lg overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
        <p className="text-white text-lg md:text-2xl font-semibold text-center">
          {overlayText}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>About Thermo Packers</title>
        <meta
          name="description"
          content="Learn about Thermo Packers, a leading provider of EPS thermocol packaging and insulation products."
        />
        <link rel="canonical" href="https://www.thermopackers.com/about" />
        <meta property="og:title" content="About Thermo Packers" />
        <meta
          property="og:description"
          content="Discover the mission, values, and commitment behind Thermo Packers, a trusted name in EPS packaging and insulation."
        />
        <meta property="og:url" content="https://www.thermopackers.com/about" />
        <meta property="og:image" content="https://www.thermopackers.com/images/about1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen mt-[10vh] bg-gradient-to-br from-orange-50 via-white to-orange-100 p-6 md:p-16 text-gray-800">
        <FloatingWhatsApp />

        <div className="max-w-6xl mx-auto space-y-24">
          <section className="grid md:grid-cols-2 gap-10 items-center animate-on-scroll">
            <div>
              <h1 className="drop-shadow-md text-4xl md:text-5xl font-extrabold text-[#B0BC27] mb-6">
                People and Packaging with a Purpose
              </h1>
              <p className="drop-shadow-md text-lg md:text-xl leading-relaxed text-gray-700">
                We bring more to packaging than just the package. Our integrated packaging
                solutions help define brand personalities, create unique customer
                experiences, and enhance the quality of products and life for people
                worldwide. All in service of our purpose: <strong>Better Packaging. Better Life.</strong>
              </p>
            </div>
            <OverlayImage src="/images/about1.jpg" alt="People and Packaging" overlayText="People and Packaging with a Purpose" />
          </section>

          <section className="grid md:grid-cols-2 gap-10 items-center animate-on-scroll">
            <OverlayImage src="/images/better-packaging.jpg" alt="Better Packaging" overlayText="Better Packaging, Better Life" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold drop-shadow-md text-[#B0BC27] mb-4">
                Better Packaging, Better Life
              </h2>
              <p className="text-md md:text-lg drop-shadow-md leading-relaxed text-gray-700">
                We believe people build businesses by doing the right thing. Learn more
                about our commitments to our stakeholders, community, and environment.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-10 items-center animate-on-scroll">
            <div>
              <h2 className="text-3xl drop-shadow-md md:text-4xl font-bold text-[#B0BC27] mb-4">
                The Power of Purpose
              </h2>
              <p className="text-md md:text-lg drop-shadow-md leading-relaxed text-gray-700">
                It’s not so much what you do, but why you do it. At Thermo Packers, our
                purpose today can be found in the beliefs of our founders and the journey
                we've followed for over 20 years.
              </p>
            </div>
            <OverlayImage src="/images/success.avif" alt="Purpose" overlayText="Purpose and Progress" />
          </section>

          <section className="grid md:grid-cols-2 gap-10 items-center animate-on-scroll">
            <OverlayImage src="/images/pack.avif" alt="Quality" overlayText="Uncompromising Quality" />
            <div>
              <h2 className="text-3xl md:text-4xl drop-shadow-md font-bold text-[#B0BC27] mb-4">
                Quality System
              </h2>
              <p className="text-md md:text-lg drop-shadow-md leading-relaxed text-gray-700">
                Our purpose drives our commitment to quality. From life-saving vaccines
                to vehicle safety and fuel economy—our quality control is thorough and
                uncompromising. Reports available on request.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-10 items-center animate-on-scroll">
            <div>
              <h2 className="text-3xl md:text-4xl drop-shadow-md font-bold text-[#B0BC27] mb-4">
                A Driving Force
              </h2>
              <p className="text-md md:text-lg drop-shadow-md leading-relaxed text-gray-700">
                Our purpose drives our culture, product development, and relationships.
                Every action, decision, and innovation is tied to creating a better
                package—and a better life—for someone.
              </p>
            </div>
            <OverlayImage src="/images/last.avif" alt="Driving Force" overlayText="Driven by Purpose" />
          </section>

          <section className="grid md:grid-cols-3 gap-6 animate-on-scroll">
            {[
              {
                title: "Mission",
                text: "To provide packaging solutions that improve products and lives, while maintaining the highest standards of integrity and innovation.",
              },
              {
                title: "Commitment",
                text: "We never compromise on quality. Our dedicated team ensures every product meets stringent quality benchmarks.",
              },
              {
                title: "Culture",
                text: "Our culture of purpose drives every decision, inspires innovation, and fosters an environment where excellence thrives.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <h3 className="text-xl drop-shadow-md font-semibold text-[#B0BC27] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm drop-shadow-md text-gray-600">{item.text}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
