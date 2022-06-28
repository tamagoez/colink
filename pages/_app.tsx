import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const address = router.pathname;
  console.log(address);
  let enableaccess = false;
  if (typeof window === "undefined") {
    enableaccess = true;
  } else {
    if (
      address === "/" ||
      address === "/_error" ||
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
        <h1>現在開発中のためアクセスできません!</h1>
      </>
    );
  }
}

export function reportWebVitals(metric) {
  console.log(metric);
}

export default MyApp;
