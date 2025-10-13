"Use Client"
import React from 'react'
import FAQ_Compoenent from "./faq_component";
import Header from "../../component/Nav";
import Footer from "../../component/Footer";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <FAQ_Compoenent />
      </main>

      <Footer />
    </div>
  )
}

export default page
