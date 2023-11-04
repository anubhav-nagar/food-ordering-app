import { useState } from "react";
import Accordion from "./Accordion";

const Contact = () => {
  const [visibleSection, setVisibleSection] = useState("a1");
  const [expandedButton, setExpandedButton] = useState("a1");
  return (
    <>
      <div className="bg-slate-100 h-screen pt-10">
        <h2 className="ml-4 text-xl font-bold mb-4">FAQs:</h2>
        <Accordion visibleSection={visibleSection} setVisibleSection={setVisibleSection} expandedButton={expandedButton} setExpandedButton={setExpandedButton} />
      </div>
    </>
  );
};

export default Contact;
