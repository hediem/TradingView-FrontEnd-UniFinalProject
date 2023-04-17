//style & CSS
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.scss'
// import styles from "@/styles/Home.module.css";

import Layout from "../components/layout/Layout";

import UserContextProvider from "../contexts/userContext";

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Layout>
        <div style={{ backgroundColor: "#F5F5F5", height: "94vh" }}>
          <Component {...pageProps} />
        </div>
      </Layout>

    </UserContextProvider>
  )
}
