import React from "react";
import { NavLink } from "react-router-dom";

import header_pic from "@/assets/contact.jpg"

interface PageIdentifierProps{
    title: string;
    tab_link: string;
}

const PageIdentifier: React.FC<PageIdentifierProps> = ({ title, tab_link }) => {
  return (
    <div className="relative w-full">
      {/* Title Overlay */}
      <div className="absolute z-20 w-full justify-center p-16 text-white">
        <h1 className="text-4xl font-bold text-white text-center">{title}</h1>
        <div className="flex justify-center pt-2 gap-2">
        <NavLink to="/">Home</NavLink>
        <span>&rarr;</span>
        <NavLink to={tab_link}>{title}</NavLink>
        </div>
      </div>

      {/* Background Image */}
      <div className="relative brightness-75">
        <img className="w-full h-48 brightness-50 object-cover" src={header_pic} alt={title} />
      </div>
    </div>
  )
}

export default PageIdentifier
