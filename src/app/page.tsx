import Image from "next/image";
import styles from "./page.module.css";
import LuxuryCarHero from "@/components/Hero";

export default function Home() {
  return (
    <div className='bg-black'>
      <LuxuryCarHero/>
    </div>
  );
}
