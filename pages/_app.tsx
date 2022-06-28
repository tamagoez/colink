import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const address = router.pathname;
  console.log(address);
  if (
    address === "/" ||
    address === "/_error" ||
    localStorage.getItem("permit") === "true"
  ) {
    return (
      <>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </>
    );
  } else {
    console.info("forbitten");
    return (
      <>
        <h1>現在開発中のためアクセスできません!</h1>
      </>
    );
  }
}

export function reportWebVitals(metric) {
  console.log(metric);
}

export default MyApp;
