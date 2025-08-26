import { ModeToggle } from "../BgThemes/mode-toggle";
import { Separator } from "../ui/separator";
import logoXlLight from "@/assets/mantik/logo-xl.png";
import logoXlDark from "@/assets/mantik/logo-xl-bl.png";
import { NavLink } from "react-router-dom";

function Footer() {

  const navigation = [
    {name: "Home", href:"/"},
    {name: "About", href:"/about"},
    {name: "Services", href:"/services"},
    {name: "Gallery", href:"/gallery"},
    {name: "Contact Us", href:"/contact"},
  ]

  return (
    <footer className="w-full bottom-0 bg-transparent">
      {/* <div className="absolute -z-50 w-full m-auto items-center bg-[url(./img/bg2.jpg)] bg-cover bg-center overflow-hidden">
      </div> */}
      <div className="mx-auto max-w-7xl pt-10 border-t flex flex-col items-center space-y-4">
        <div className="w-full text-base flex flex-col md:flex-row justify-between items-left px-5 space-y-20 mb-10 md:space-y-0">

          {/* Logo and description */}

          <div className="md:w-1/3 w-full space-y-4">
            <div className="flex items-center justify-between">
              <img
                src={logoXlLight}
                alt="Mantik Enterprises"
                className="h-12 hidden dark:block"
              />
              <img
                src={logoXlDark}
                alt="Mantik Enterprises"
                className="h-12 dark:hidden"
              />
              <ModeToggle />
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">
              <span className="uppercase">Mantik Enterprises,</span> excels in
              premium glass solutions, specializing in V-groove designs and
              offering top brands like SGG and MG. Our services include CEP,
              beveling, glass cutting, installation, and custom job work,
              ensuring exceptional quality for all needs.
            </p>
          </div>

          {/* Usefull Links */}

          <div className="md:w-1/3 w-full h-full flex flex-col justify-between text-left md:text-center">
            <h4 className="text-lg  font-semibold pb-4 tracking-widest">Usefull Links</h4>
            <div className="text-neutral-600 dark:text-neutral-400">
              <ul className="space-y-2">
                  {navigation.map((item) => (
                      <li key={item.name}>
                        <NavLink to={item.href} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={({ isActive }) =>
                          `text-neutral-600 dark:text-neutral-400 hover:text-primary ${
                            isActive ? "text-orange-500 dark:text-orange-400" : ""
                        }`}>
                          {item.name}
                        </NavLink> 
                      </li>
                    ))}
              </ul>
            </div>
          </div>

          {/* Contact Us */}

          <div className="md:w-1/3 text-base w-full h-full flex flex-col justify-between text-left ">
            <h4 className="text-lg font-semibold pb-4 tracking-widest">Office</h4>
            <div className="text-neutral-600 dark:text-neutral-400">
              <ul className="space-y-2">
                <li>
                  Email: <a href="mailto:the.raj2301@gmail.com" className="active:text-primary hover:text-primary">the.raj2301@gmail.com</a>
                </li>
                <li>
                  Phone: <a href="tel:+917738339185" className="active:text-primary hover:text-primary">+91 77383 39185</a>
                </li>
                <li>
                  Adress: 
                  <p className="select-all">
                    Unit NO: 1, Ghaswala Estate, Swami Vivekananda Rd, opp. 24 Karat, Jogeshwari West, Mumbai-400102
                  </p>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <Separator />
        <div className="text-neutral-600 text-sm md:text-base flex flex-col md:flex-row items-center justify-between w-full pb-4 px-4">
          <p>© 2025 Mantik Enterprises. All rights reserved.</p>
          <div className="space-x-2 flex">
            <p>
            Designed By: 
            </p>
            <a href="https://www.instagram.com/the.raj2301/" target="_blank" className="text-[#DB3358] hover:text-chart-2 focus:text-chart-2">the.raj2301</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
