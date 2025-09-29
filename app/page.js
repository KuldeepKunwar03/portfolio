'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Home() {

  const [isDarkMode, setISDarkMode] = useState(false);

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark') {
        setISDarkMode(true);
      } else if (storedTheme === 'light') {
        setISDarkMode(false);
      }
      // If no stored theme, keep the initial useState value
    } catch {}
  }, [])

  useLayoutEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isDarkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      localStorage.theme = 'light';
    }
  },[isDarkMode])

  const toggleDarkMode = () => setISDarkMode((prev) => !prev);

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setISDarkMode={setISDarkMode}/>
    <Header />
    <About isDarkMode={isDarkMode} />
    <Work isDarkMode={isDarkMode} />
    <Contact isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
    </>
  );
}
