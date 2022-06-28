import { IoMail } from "react-icons/io5";
import { MdPassword } from "react-icons/md";

export default function Login() {
  return (
    <>
      <div className="pt-2 form-control w-full h-full flex justify-center items-center">
        <h1 className="font-bold text-3xl pt-1 pb-4">Login</h1>
        <label className="input-group justify-center w-3/4">
          <span>
            <IoMail />
          </span>
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full"
          />
        </label>
        <label className="pt-3 input-group justify-center w-3/4">
          <span>
            <MdPassword />
          </span>
          <input
            type="password"
            placeholder="Your password"
            className="input input-bordered w-full"
          />
        </label>
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
        <p className="py-4" />
        <button className="btn btn-primary w-3/4">Login</button>
        <p className="pt-1" />
        <button className="btn btn-secondary w-3/4">or Signup</button>
      </div>
    </>
  );
}
