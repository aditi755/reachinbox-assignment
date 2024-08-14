'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import Login from "./Login/page";
export default function Home() {
  useEffect(() => {
    document.body.className = 'dark-mode'; // Apply light mode by default
  }, []);

  return (
    <main className="">
   <Login />
    </main>
  );
}
