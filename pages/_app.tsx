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
  const firstcheck = (async () => {
    await FirstCheck();
  })();
  if (
    process.browser &&
    firstcheck === true &&
    address !== "/account/initialization" &&
    address !== "/account/signout"
  ) {
    router.push("/account/initialization");
  }
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
