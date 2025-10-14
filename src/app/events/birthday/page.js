"use client"
import React from 'react'
import BirthdayComponent from './BirthdayComponent'
import Header from "@/component/Nav";
import Footer from "@/component/Footer";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <BirthdayComponent />
      </main>


      <Footer />

    </div>
  )
}

export default page
