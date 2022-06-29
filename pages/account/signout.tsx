import { Signout } from "../../lib/supabaseFunc";
import { useRouter } from "next/router";

export default function SignoutPage() {
  const router = useRouter();
  if (typeof window !== undefined) {
    Signout();
    router.push("/");
  }
  return <></>;
}
