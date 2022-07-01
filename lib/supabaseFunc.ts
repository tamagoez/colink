import supabase from "./supabaseClient";
import { ErrorToast } from "../components/Toast";

export async function Login(email, password) {
  try {
    const { error } = await supabase.auth.signIn({
      email: email,
      password: password
    });
    if (error) throw error;
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
    ErrorToast("Signup", error);
    console.log("error", error);
  }
}

export async function Signout() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    ErrorToast("Signout");
    console.log("error", error);
  }
}

export function LoginCheck() {
  return false;
}
