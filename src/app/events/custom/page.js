"use client";
import React from 'react'
import CustomPage from './custom';
import Header from "@/component/Nav";
import Footer from "@/component/Footer";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <CustomPage />
      </main>

      <Footer />
    </div>
  )
}

export default page
