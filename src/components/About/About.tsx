// import Card from "../Home/card";
// import PageIdentifier from "../Home/page_identifier";

import { CiMail } from "react-icons/ci";
import { MdPhoneInTalk } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";

import PageIdentifier from "../Home/page_identifier";

import aboutImage from "@/assets/about.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <PageIdentifier title="About" tab_link="/about" />

      <div className="">
        {/* Main Section */}
        <section className="max-w-7xl mx-auto px-4 py-12 text-center bg-background">
          <div>
            <h1 className="w-full md:w-2/3 mx-auto text-lg md:text-xl text-orange-500 font-semibold pb-12 px-4 md:px-26">
              Shaping spaces with precision and creativity. Highlighting the
              beauty of glass through artful engraving, we redefine elegance in
              every design.
            </h1>
          </div>
          <div className="flex flex-col md:flex-row">
            {/* -------------------- Left Image Panel ------------------ */}
            <div className="w-full md:w-1/3 shadow-2xl">
              <img className="w-full" src={aboutImage} alt="About" />
            </div>
            {/* -------------------- Right About Panel ------------------ */}
            <div className="px-2 py-6 md:py-0 md:px-12 w-full md:w-2/3">
              <div className="text-start">
                <p className="text-lg tracking-wide leading-normal">
                  Welcome to <strong>MANTIK ENTERPRISES</strong>, your trusted
                  destination for premium glass solutions and expert engraving
                  services. Located in the heart of Mumbai, we specialize in
                  offering high-quality glass products and innovative designs
                  tailored to meet your needs. We provide an extensive range of
                  glass services, including precision cutting, custom
                  installations, and specialized V-groove engraving, which adds
                  a touch of sophistication to any space. Our product portfolio
                  includes:
                </p>
                <ul className="list-disc ml-6 mt-2 columns-2 md:columns-3">
                  <li>Glass Engraving</li>
                  <li>Clear Float Glass</li>
                  <li>Toughened Glass</li>
                  <li>Extra Clear Glass</li>
                  <li>Fabric Laminated Glass</li>
                  <li>And more...</li>
                </ul>
                <br />
                <p>
                  With a commitment to craftsmanship, attention to detail, and
                  exceptional customer service, we work closely with architects,
                  designers, and homeowners to bring their visions to life.
                  Whether it’s enhancing interiors with decorative glass or
                  providing durable, functional solutions, we deliver unmatched
                  quality every time.
                  <br />
                  <br />
                  Discover how we can transform your spaces with glass.{" "}
                  <span>Contact us</span> today!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-slate-500 dark:bg-orange-500 ">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2">
            {/* Mission */}
            <div className="p-12 md:p-28 md:bg-background">
              <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
              <p className="text-lg text-gray-800 dark:text-gray-300">
                To deliver premium glass solutions with precision, style, and
                lasting quality for every space.
              </p>
            </div>

            {/* Vision */}
            <div className="p-12 md:p-28">
              <h3 className="text-3xl font-bold mb-2 text-background">
                Our Vision
              </h3>
              <p className="text-lg text-secondary">
                To be recognized as an industry leader in glass innovation,
                creativity, and trust.
              </p>
            </div>

            {/* Values */}
            <div className="p-12 md:p-28">
              <h3 className="text-3xl font-bold mb-2 text-background">
                Our Values
              </h3>
              <p className="text-lg text-secondary">
                Quality, transparency, and customer satisfaction guide every
                decision and detail.
              </p>
            </div>

            {/* Commitment */}
            <div className="p-12 md:p-28 md:bg-background">
              <h3 className="text-3xl font-bold mb-2">Our Commitment</h3>
              <p className="text-lg text-gray-800 dark:text-gray-300">
                We’re committed to delivering consistent excellence and forming
                lasting client relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-7xl mx-auto px-4 py-32 bg-background">
          <h2 className="text-5xl font-bold text-center mb-16">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="py-32 px-6 bg-slate-500 dark:bg-orange-500 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-background">
                Quality Assurance
              </h3>
              <p className="text-secondary">
                We source the finest materials and maintain strict quality
                standards across all our products.
              </p>
            </div>
            <div className="py-32 px-6 bg-slate-500 dark:bg-orange-500 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-background">
                Experienced Team
              </h3>
              <p className="text-secondary">
                Our skilled professionals bring years of experience in glass
                design, cutting, installation, and finishing.
              </p>
            </div>
            <div className="py-32 px-6 bg-slate-500 dark:bg-orange-500 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-background">
                Customer First
              </h3>
              <p className="text-secondary">
                We prioritize your satisfaction by offering personalized
                solutions and reliable support.
              </p>
            </div>
          </div>
        </section>

        {/* Have a Project to Discuss? */}
        <section className="bg-slate-500 dark:bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 py-32">
          <h2 className="text-5xl font-bold text-center mb-28">
            Have a Project to Discuss?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <a href="tel:+917738339185" className="py-8 px-6 bg-background rounded-lg cursor-pointer hover:shadow-2xl">
              <div className="text-lg justify-center py-5 flex text-primary">
                <span className=" p-10 border rounded-full text-6xl"><MdPhoneInTalk /></span>
              </div>
              <p className="text-primary">+91 77383 39185</p>
            </a>
            <a href="mailto:the.raj2301@gmail.com" className="py-8 px-6 bg-background rounded-lg cursor-pointer hover:shadow-2xl">
              <div className="text-lg justify-center py-5 flex text-primary">
                <span className=" p-10 border rounded-full text-6xl"><CiMail /></span>
              </div>
              <p className="text-primary">the.raj2301@gmail.com</p>
            </a>
            <NavLink to="/contact" className="py-8 px-6 bg-background rounded-lg cursor-pointer hover:shadow-2xl">
              <div className="text-lg justify-center py-5 flex text-primary">
                <span className=" p-10 border rounded-full text-6xl"><LiaFileInvoiceSolid /></span>
              </div>
              <p className="text-primary">Request a quote.</p>
            </NavLink>
          </div>
        </div>
        </section>

        {/* Optional: Team Section */}
        {/* <section className="bg-gray-100 dark:bg-neutral-800 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10">
            Our passionate team members work hard to deliver the best experience.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            // Add your team cards here
          </div>
        </div>
      </section> */}
      </div>

      {/* <PageIdentifier title="About" tab_link="/about" />
    <div className="max-w-7xl mx-auto justify-center items-center">
      <Card />
      <div className="w-full flex justify-center items-center">
        <h1 className="text-2xl md:text-5xl font-bold p-20 text-neutral-400 dark:text-neutral-700">
          About Section Is Under Development
        </h1>
      </div>
    </div> */}
    </>
  );
};

export default About;
