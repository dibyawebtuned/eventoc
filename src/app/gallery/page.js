"use client"
import React from 'react'
import Gallery_Component from "./gallery_component";
import Header from "../../component/Nav";
import Footer from "../../component/Footer";


const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Gallery_Component />
      </main>

      <Footer />
    </div>
  )
}

export default page
