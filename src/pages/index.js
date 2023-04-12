import { useRouter } from "next/router";

//context
import UserContextProvider from "../contexts/userContext";

//layout
import Layout from "../components/layout/Layout";
import Profile from "./profile";

export default function Home() {
  const router = useRouter()
  const path = router.pathname;

  return (
    <>
      <div>

      </div>
    </>
  );
}
