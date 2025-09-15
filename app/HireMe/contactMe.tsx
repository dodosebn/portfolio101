"use client";
import ContactDetails from "./customs/contactMaps";
import FormItself from "@/components/utils/formItself";

const ContactMe: React.FC = () => {
  return (
    <div className="px-4">
      <h1 className="lg:text-2xl text-xl text-center font-semibold pb-5">
        <span className="text-2xl text-gradient-animated">Contact me!</span>
        <br />
        <span className="text-gradient-animated">
          I'm always open to new opportunities and excited to collaborate on
          innovative projects.
        </span>
      </h1>

      <div className="flex lg:flex-row flex-col justify-center mx-auto text-center mt-5">
        <FormItself />
        <div className="lg:border-l-2 border-b-2 border-gray-400 lg:mx-4 my-4"></div>
        <div>
          {ContactDetails.map((item) => (
            <div key={item.id} className="flex gap-2 p-2 items-center">
              <item.logo />
              <span>{item.content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
