import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import Forbitten from "../components/Forbitten";
import allowpages from "../files/allowpages.json";
import { ErrorToast } from "../components/Toast";
import { FirstCheck, LoginCheck } from "../lib/supabaseFunc";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const address = router.pathname;
  console.log(address);
  let enableaccess = false;
  if (typeof window === "undefined") {
    enableaccess = true;
  } else {
    if (
      allowpages.includes(address) ||
      localStorage.getItem("permit_access") === "true"
    ) {
      enableaccess = true;
    }
  }
  async function checkfirst() {
    if (
      typeof window !== "undefined" &&
      address !== "/account/initialization" &&
      (await FirstCheck()) === true &&
      LoginCheck() === true
    ) {
      window.location.replace("/account/initialization");
    }
  }
  checkfirst()
  if (enableaccess) {
    return (
      <>
        <NavBar />
        <ChakraProvider>
          <div className="ml-1">
            <Component {...pageProps} />
          </div>
        </ChakraProvider>
      </>
    );
  } else {
    console.info("forbitten");
    // ErrorToast("Forbitten", "You don't have permission to access this page.");
    return (
      <>
        <NavBar />
        <ChakraProvider>
          <div className="ml-2 mt-4">
            <Forbitten />
          </div>
        </ChakraProvider>
      </>
    );
  }
}

export function reportWebVitals(metric) {
  console.log(metric);
}

export default MyApp;
