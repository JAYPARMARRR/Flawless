const Login_Flawless = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center  ">
        <div className=" h-3/5    w-60 ">
          <h1 className="text-4xl text-midPink text-center ">Flawless...</h1>

          <label className="flex mt-5  "> User Name😄</label>
          <input
            type="email "
            className="p-1 w-60 border-b rounded border-stone-600 outline-none "
            required
          />

          <label className=""> Password 🙈</label>
          <input
            type="password"
            className="p-1 w-60 rounded border-b border-stone-600  outline-none "
          />
          <button
            type="submit"
            className="border-black border px-6 py-3 rounded text-black hover:bg-lightGray hover:text-midPink duration-500 ml-16 mt-5"
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Login_Flawless;
