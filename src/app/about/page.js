"use client"
import React from 'react'
import About_Component from "./about_component";
import Header from "../../component/Nav";
import Footer from "../../component/Footer";

const page = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main>
                <About_Component />
            </main>

            <Footer />
        </div>
    )
}

export default page
