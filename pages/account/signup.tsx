import { Signup } from "../../lib/supabaseFunc";
import { IoMail } from "react-icons/io5";
import { MdPassword } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import Meta from "../../lib/Meta";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Meta title="Signup" description="Signup to Colink" />
      <div className="pt-2 form-control w-full h-full flex justify-center items-center">
        <h1 className="font-bold text-3xl pt-1 pb-4">Signup</h1>
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
        <p className="py-4" />
        <button
          className="btn btn-primary w-3/4"
          onClick={() => Signup(email, password)}
        >
          Signup
        </button>
        <p className="pt-1" />
        <Link href="/account/login" passHref>
          <a className="btn btn-secondary w-3/4">or Login</a>
        </Link>
      </div>
    </>
  );
}
