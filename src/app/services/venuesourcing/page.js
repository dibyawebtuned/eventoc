"use client"
import React from 'react'
import VenueSourcingComponent from './VenueSourcingComponent'
import Header from "@/component/Nav";
import Footer from "@/component/Footer";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <VenueSourcingComponent />
      </main>

      <Footer />
    </div>
  )
}

export default page
