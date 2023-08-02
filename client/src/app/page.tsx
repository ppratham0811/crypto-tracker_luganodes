import Layout from "./layout";
import axios from "axios";
import Main from "@/components/Main/Main";

export default async function Home() {
  return (
    <>
      <main className="text-white">
        <div className="py-8 mb-8">
          <Main />
        </div>
      </main>
    </>
  );
}
