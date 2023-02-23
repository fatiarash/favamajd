import React from "react";

function Welcome({ setIsSubmitted }) {
  const goBack = () => {
    setIsSubmitted(false);
  };
  return (
    <div
      className={
        "w-full h-screen flex flex-col gap-10 items-center justify-center"
      }
    >
      <p className={"text-yellow text-9xl"}>WELCOME TO THE WEBSITE</p>
      <button
        className={"p-5 bg-yellow rounded-md text-[#14435E] text-2xl"}
        onClick={goBack}
      >
        Back-LogIN
      </button>
    </div>
  );
}

export default Welcome;
