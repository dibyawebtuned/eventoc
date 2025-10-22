"use client"
import React from 'react'
import BrandPage from './brand'
import Header from "@/component/Nav";
import Footer from "@/component/Footer";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
      <BrandPage />
      </main>
      
      <Footer />
    </div>
  )
}

export default page
