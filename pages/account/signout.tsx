import { Signout } from "../../lib/supabaseFunc";
import { useRouter } from "next/router";

export default function SignoutPage() {
  Signout();
  const router = useRouter();
  router.push("/");
  return <></>;
}
