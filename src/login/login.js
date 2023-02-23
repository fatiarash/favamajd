"use client";
import { useState } from "react";
import Image from "next/image";
import { Logo } from "../../public/images/login";
import LoginForm from "../login-form/login-form";
import Welcome from "../welcome/welcome";

function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  let text = "Last Login:  <username> <IP Address> <date> <time> ";
  let status = "Status: OK / Failed";

  if (isSubmitted) {
    return <Welcome setIsSubmitted={setIsSubmitted} />;
  }

  return (
    <div className={"w-full h-4 bg-blue"}>
      <div className={"relative"}>
        <Image src={Logo} alt="logo" />
      </div>
      <div className={"flex gap-3 px-7 mt-20"}>
        <LoginForm setIsSubmitted={setIsSubmitted} />
        <div className={"w-px h-[152px] bg-black"} />
        <div>
          <p className={"text-[#3DA0DA] text-base"}>
            SANAM - FavaMajd Cooperation
          </p>
          <p className={"text-gray text-sm mt-1"}>
            Remote Desktop and App Solutions
          </p>
          <p className={"text-gray text-base mt-1"}>Copyright 2014 - 2023</p>
          <p className={"text-base mt-4"}>{text}</p>
          <p className={"text-base"}>{status}</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
