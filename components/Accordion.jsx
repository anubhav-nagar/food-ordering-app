import React, { useState } from "react";

const Accordion = ({visibleSection, setVisibleSection, expandedButton, setExpandedButton}) => {
  // const [isHidden, setIsHidden] = useState(true);

  function clickFunctionality(section){
    if(visibleSection==section){
      setVisibleSection("");
      setExpandedButton("");
    }
    else{
      setVisibleSection(section);
      setExpandedButton(section);
    }
  }

  const greater = <span>&gt;</span>
  const lower = <span>&#x76;</span>
  return (
    <>
      <div className="pl-6 w-11/12">
        <div className="border-2 border-slate-800 rounded pl-4 pt-2 pb-2">
          <div className="flex">
            <button onClick={()=>clickFunctionality("a1")} className="mr-3 -mt-1"> {visibleSection==="a1" ? lower : greater}</button>
            <h4 className="font-mono"> What is the delivery radius of your food ordering service?</h4>
          </div>
          <div className="pl-8 text-sm">
            {visibleSection==="a1" && <p>We currently offer delivery within a 10-kilometer radius from our restaurants in Meerut, ensuring that you can enjoy our delicious food in the comfort of your own home.</p>}
          </div>
        </div>
      </div>
      {/* *************New Section*****************/}
      <div className="pt-2 pl-6 w-11/12">
        <div className="border-2 border-slate-800 rounded pl-4 pt-2 pb-2">
          <div className="flex">
            <button onClick={()=>clickFunctionality("a2")} className="mr-3 -mt-1"> {visibleSection==="a2" ? lower : greater}</button>
            <h4 className="font-mono">How can I place an order through the app?</h4>
          </div>
          <div className="pl-8 text-sm">
            {visibleSection==="a2" && <p>Placing an order is easy! Simply download our app from the App Store or Google Play, create an account, browse the menu, select your desired items, and proceed to checkout.</p>}
          </div>
        </div>
      </div>
      {/* *************New Section*****************/}
      <div className="pt-2 pl-6 w-11/12">
        <div className="border-2 border-slate-800 rounded pl-4 pt-2 pb-2">
          <div className="flex">
            <button onClick={()=>clickFunctionality("a3")} className="mr-3 -mt-1"> {visibleSection==="a3" ? lower : greater}</button>
            <h4 className="font-mono">Are there any delivery charges for orders placed through the app?</h4>
          </div>
          <div className="pl-8 text-sm">
            {visibleSection==="a3" && <p>Yes, there might be a nominal delivery fee based on your location and order value. You can view the delivery charges during the checkout process before confirming your order.</p>}
          </div>
        </div>
      </div>
      {/* *************New Section*****************/}
      <div className="pt-2 pl-6 w-11/12">
        <div className="border-2 border-slate-800 rounded pl-4 pt-2 pb-2">
          <div className="flex">
            <button onClick={()=>clickFunctionality("a4")} className="mr-3 -mt-1"> {visibleSection==="a4" ? lower : greater}</button>
            <h4 className="font-mono">What cuisines do you offer on the app?</h4>
          </div>
          <div className="pl-8 text-sm">
            {visibleSection==="a4" && <p>We offer a diverse range of cuisines, including Indian, Chinese, Italian, Mexican, and more. Explore our app to discover a variety of delicious options to satisfy your cravings.</p>}
          </div>
        </div>
      </div>
      {/* *************New Section*****************/}
      <div className="pt-2 pl-6 w-11/12">
        <div className="border-2 border-slate-800 rounded pl-4 pt-2 pb-2">
          <div className="flex">
            <button onClick={()=>clickFunctionality("a5")} className="mr-3 -mt-1"> {visibleSection==="a5" ? lower : greater}</button>
            <h4 className="font-mono">Can I schedule a future order through the app?</h4>
          </div>
          <div className="pl-8 text-sm">
            {visibleSection==="a5" && <p>Of course! Our app allows you to schedule orders in advance, making it convenient for you to plan and enjoy your favorite meals at your preferred time.</p>}
          </div>
        </div>
      </div>
      {/* *************New Section*****************/}
      <div className="pt-2 pl-6 w-11/12">
        <div className="border-2 border-slate-800 rounded pl-4 pt-2 pb-2">
          <div className="flex">
            <button onClick={()=>clickFunctionality("a6")} className="mr-3 -mt-1"> {visibleSection==="a6" ? lower : greater}</button>
            <h4 className="font-mono">How can I track the status of my order placed through the app?</h4>
          </div>
          <div className="pl-8 text-sm">
            {visibleSection==="a6" && <p>You can easily track your order in real-time through the app. Once your order is confirmed, you will receive updates on its preparation, dispatch, and estimated delivery time.</p>}
          </div>
        </div>
      </div>
      {/* *************New Section*****************/}
      <div className="pt-2 pl-6 w-11/12">
        <div className="border-2 border-slate-800 rounded pl-4 pt-2 pb-2">
          <div className="flex">
            <button onClick={()=>clickFunctionality("a7")} className="mr-3 -mt-1"> {visibleSection==="a7" ? lower : greater}</button>
            <h4 className="font-mono">Do you offer any rewards or loyalty programs for frequent app users?</h4>
          </div>
          <div className="pl-8 text-sm">
            {visibleSection==="a7" && <p>Yes, we value our loyal customers! Earn reward points on every order, and redeem them for exciting discounts and special offers on future orders.</p>}
          </div>
        </div>
      </div>
      {/* *************New Section*****************/}
      <div className="pt-2 pl-6 w-11/12">
        <div className="border-2 border-slate-800 rounded pl-4 pt-2 pb-2">
          <div className="flex">
            <button onClick={()=>clickFunctionality("a8")} className="mr-3 -mt-1"> {visibleSection==="a8" ? lower : greater}</button>
            <h4 className="font-mono">What safety measures do you follow to ensure the hygiene of the food ordered through the app?</h4>
          </div>
          <div className="pl-8 text-sm">
            {visibleSection==="a8" && <p>We strictly adhere to stringent hygiene and safety standards in food preparation and delivery. Our partner restaurants are required to maintain high cleanliness and sanitation practices to ensure the quality and safety of your food.</p>}
          </div>
        </div>
      </div>
      {/* *************New Section*****************/}
      <div className="pt-2 pl-6 w-11/12">
        <div className="border-2 border-slate-800 rounded pl-4 pt-2 pb-2">
          <div className="flex">
            <button onClick={()=>clickFunctionality("a9")} className="mr-3 -mt-1"> {visibleSection==="a9" ? lower : greater}</button>
            <h4 className="font-mono">Can I customize my order based on my dietary preferences or allergies through the app?</h4>
          </div>
          <div className="pl-8 text-sm">
            {visibleSection==="a9" && <p>Absolutely! You can customize your order to accommodate your dietary preferences or allergies by using the customization options provided within the app.</p>}
          </div>
        </div>
      </div>
      {/* *************New Section*****************/}
      <div className="pt-2 pl-6 w-11/12">
        <div className="border-2 border-slate-800 rounded pl-4 pt-2 pb-2">
          <div className="flex">
            <button onClick={()=>clickFunctionality("a10")} className="mr-3 -mt-1"> {visibleSection==="a10" ? lower : greater}</button>
            <h4 className="font-mono">How can I provide feedback or rate my experience with the app service?</h4>
          </div>
          <div className="pl-8 text-sm">
            {visibleSection==="a10" && <p>We encourage your feedback! You can rate your experience and provide feedback directly within the app. Your valuable input helps us improve our services and enhance your overall app experience.</p>}
          </div>
        </div>
      </div>
      {/* *************New Section*****************/}
      <div className="pt-2 pl-6 w-11/12">
        <div className="border-2 border-slate-800 rounded pl-4 pt-2 pb-2">
          <div className="flex">
            <button onClick={()=>clickFunctionality("a11")} className="mr-3 -mt-1"> {visibleSection==="a11" ? lower : greater}</button>
            <h4 className="font-mono">What payment methods are accepted on the app?</h4>
          </div>
          <div className="pl-8 text-sm">
            {visibleSection==="a11" && <p>We accept various secure payment methods, including credit/debit cards, net banking, and popular digital wallets. Choose your preferred payment option at the checkout for a seamless and secure transaction.</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
