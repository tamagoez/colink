import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import Forbitten from "../components/Forbitten";
import allowpages from "../files/allowpages.json";

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
    return (
      <>
        <NavBar />
        <div className="ml-2 mt-4">
          <Forbitten />
        </div>
      </>
    );
  }
}

export function reportWebVitals(metric) {
  console.log(metric);
}

export default MyApp;
