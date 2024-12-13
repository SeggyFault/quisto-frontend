import Heading from "./Heading";
import Button from "./Button";
import { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleActive = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Header */}
      <div 
        className={`flex justify-start py-[10px] mt-[2px] ${
          isOpen ? "border-0" : "border-b border-grey-200"
        }`} >
        <Heading 
          level={3} 
          className={`text-xl grow text-midnight-400 font-inter ${
            isOpen ? "font-bold" : "font-normal"
          }`}
        >
          {title}
        </Heading>
        <Button 
          onClick={toggleActive} 
          label={`${isOpen ? "-" : "+"}`} 
          className={`w-6 h-6 rounded-full ${
            isOpen ? "text-grey-50 bg-flamingo-300" : "text-flamingo-300 bg-grey-50"
          }`} 
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pt-4 pb-16 pr-[39px] text-grey-300 border-b border-grey-200 font-inter text-base">
            {content}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;