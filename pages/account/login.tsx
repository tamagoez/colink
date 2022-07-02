import { Login, LoginCheck } from "../../lib/supabaseFunc";
import { IoMail } from "react-icons/io5";
import { MdPassword } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Meta from "../../lib/Meta";
import { PulseLoader } from "react-spinners";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  if (LoginCheck()) {
    router.push("/dashboard");
  }
  function loginprocess() {
    setLoading(true);
    Login(email, password);
  }
  return (
    <>
      <Meta title="Login" description="Login to Colink" />
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
        <p className="py-4" />
        <button
          className="btn btn-primary w-3/4"
          onClick={() => loginprocess()}
        >
          {!loading ? "Login" : <PulseLoader size={8} color="#ffffff" />}
        </button>
        <p className="pt-1" />
        <Link href="/account/signup" passHref>
          <a className="btn btn-secondary w-3/4">or Signup</a>
        </Link>
      </div>
    </>
  );
}
