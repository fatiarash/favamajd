import { useState } from "react";

function LoginForm({ setIsSubmitted }) {
  const [errorMessages, setErrorMessages] = useState({});

  const database = [
    {
      username: "user",
      password: "123",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="text-red-600">{errorMessages.message}</div>
    );

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-4"}>
      <input
        className={"w-[371px] h-10 rounded-md bg-white p-2.5 text-black"}
        type={"text"}
        name="uname"
        required
        placeholder="User Name:"
      />
      {renderErrorMessage("uname")}
      <input
        className={"w-[371px] h-10 rounded-md bg-white p-2.5 text-black"}
        type="password"
        name="pass"
        required
        placeholder="Password:"
      />
      {renderErrorMessage("pass")}
      <div className={"flex gap-2"}>
        <select className={"w-[217px] h-10 rounded-md bg-white text-black"}>
          <option className={"w-[217px] h-10"}>English</option>
          <option className={"w-[217px] h-10"}>Pertion</option>
        </select>
        <button type="submit" className={"w-[145px] h-10 bg-yellow rounded-md"}>
          <p className={"text-[#14435E] text-xs"}>Login</p>
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
