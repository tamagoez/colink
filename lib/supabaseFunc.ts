import supabase from "./supabaseClient";
import { ErrorToast, SuccessToast } from "../components/Toast";
// import { useRouter } from "next/router";

export function LoginCheck() {
  const user = supabase.auth.user();
  // console.dir(user);
  if (user === null) {
    return false;
  } else {
    return true;
  }
}
export async function FirstCheck() {
  const user = supabase.auth.user;
  if (user === null) {
    return false;
  } else {
    try {
      const { error } = await supabase
        .from("account")
        .select("id")
        .eq("id", user.id);
      if (error) throw error;
      return false;
    } catch (error) {
      return true;
    }
  }
}

export async function Login(email, password) {
  try {
    const { error } = await supabase.auth.signIn({
      email: email,
      password: password
    });
    if (error) throw error;
    if (FirstCheck()) {
      window.location.replace("/account/initialization?status=auth-success");
    } else {
      window.location.replace("/dashboard?status=auth-success");
    }
  } catch (error) {
    ErrorToast("login", error.message);
    console.log("error", error);
  }
}

export async function Signup(email, password) {
  try {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password
    });
    if (error) throw error;
  } catch (error) {
    ErrorToast("signup", error.message);
    console.log("error", error);
  }
}

export async function Signout() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    SuccessToast("Logout", "You are logout from your acount.");
  } catch (error) {
    ErrorToast("logout", error.message);
    console.log("error", error);
  }
}

export function GetUsername(id) {}
