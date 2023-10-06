import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Login_Flawless = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const Navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();

    messageApi.open({
      type: "success",
      content: " log in successfully",
      duration: 3,
    });
    Navigate("/Main_Flawless");
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center  ">
        {contextHolder}
        <form onSubmit={Submit}>
          <div className=" h-3/5    w-60 ">
            <h1 className="text-4xl text-midPink text-center ">Flawless...</h1>

            <label className="flex mt-5  "> User Name😄</label>
            <input
              type="email "
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="p-1 w-60 border-b rounded border-stone-600 outline-none "
              required
            />

            <label className=""> Password 🙈</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className="p-1 w-60 rounded border-b border-stone-600  outline-none "
            />

            <button
              type="submit"
              className="border-black border px-6 py-3 rounded text-black hover:bg-lightGray hover:text-midPink duration-500 ml-16 mt-5"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login_Flawless;
