"use client";
import React from 'react'
import Header from "@/component/Nav";
import Footer from "@/component/Footer";
import MusicPage from './music';

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <MusicPage />
      </main>


      <Footer />

    </div>
  )
}

export default page
