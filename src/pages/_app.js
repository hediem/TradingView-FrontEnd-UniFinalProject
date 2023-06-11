//style & CSS
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.scss'
// import styles from "@/styles/Home.module.css";

import Layout from "../components/layout/Layout";

import UserContextProvider from "../contexts/userContext";
import SymbolContextProvider from "@/contexts/symbolContext";

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <SymbolContextProvider>
        <Layout>
          <div style={{ backgroundColor: "#F5F5F5", height: "auto", paddingBottom: "20px" }}>
            <Component {...pageProps} />
          </div>
        </Layout>
      </SymbolContextProvider>
    </UserContextProvider>
  )
}
