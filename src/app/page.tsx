'use client';
import Image from "next/image";
import styles from "./page.module.css";
import LuxuryCarHero from "@/components/Hero";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className='bg-black'>
      {/* <LuxuryCarHero/> */}
      <Hero />
    </div>
  );
}
