"use client"
import React from 'react'
import Contact_Component from "./contact_component";
import Header from "../../component/Nav";
import Footer from "../../component/Footer";

const page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">
                <Contact_Component />
            </main>

            <Footer />
        </div>
    )
}

export default page