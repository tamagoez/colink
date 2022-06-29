import supabase from "./supabaseClient";
import { useToast } from "@chakra-ui/react";

export async function Login(email, password) {
  const toast = useToast();
  try {
    const { error } = await supabase.auth.signIn({
      email: email,
      password: password
    });
    if (error) throw error;
  } catch (error) {
    toast({
      title: "An error occurred!",
      description: error.error_description || error,
      status: "error",
      duration: 9000,
      isClosable: false
    });
    console.log("error", error);
  }
}

export async function Signup(email, password) {
  const toast = useToast();
  try {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password
    });
    if (error) throw error;
  } catch (error) {
    toast({
      title: "An error occurred!",
      description: error.error_description || error,
      status: "error",
      duration: 9000,
      isClosable: false
    });
    console.log("error", error);
  }
}

export async function Signout() {
  const toast = useToast();
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    toast({
      title: "An error occurred!",
      description: error.error_description || error,
      status: "error",
      duration: 9000,
      isClosable: false
    });
    console.log("error", error);
  }
}

export function LoginCheck() {
  return false;
}
