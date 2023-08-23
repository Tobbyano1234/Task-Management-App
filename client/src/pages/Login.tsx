import logo from "../assets/RadicallX-Black-Logo 1.svg"

export const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-purple-300 p-0"></div>

      <div className="flex-col w-1/2">
        <div className="mt-77 ml-278 mr-278">
          <img src={logo} alt="logo" />
        </div>
        <div className="mt-198 align border-8 border-cyan-500 m-60">
          <h3>Login</h3>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
        </div>
      </div>
    </div>
  );
};
