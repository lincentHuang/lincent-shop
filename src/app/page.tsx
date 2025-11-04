import Image from "next/image";
import "../styles/test.scss";
import { HomeView } from "@/views/home";
import axios from "axios";

export default function Home() {
  return (
    <div className="flex items-center justify-center font-sans dark:bg-black">
      <HomeView />
    </div>
  );
}
