import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import StackSty from "../utils/stackSty";

const ContactIcons = () => {
  const Icons = [
    {
      name: FaXTwitter,
      link: "https://www.linkedin.com/in/orji-dominion-ebubennia-2260542ba/",
      id: 1,
    },
    {
      name: FaWhatsapp,
      link: `https://wa.me/2347069280208?text=${encodeURIComponent(
        "Hey DOMINION, I'm reaching out from your portfolio. "
      )}`,
      id: 2,
    },
    {
      name: FaLinkedin,
      link: "https://www.linkedin.com/in/orji/",
      id: 3,
    },
    { name: IoMailOutline, link: "mailto:orjidominion32@gmail.com", id: 4 },
  ];

  return (
    <div className="flex gap-[1rem]">
      {Icons.map(({ name: Icon, id, link }) => (
        <div
          className="text-3xl lg:text-4xl border border-[#1a1313] dark:border-[#d9d9d9] 
          p-3 rounded-sm"
          key={id}
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            <StackSty stackName={Icon} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactIcons;
