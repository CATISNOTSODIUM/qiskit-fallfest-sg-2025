"use client"
import Footer from "@/components/common/footer";
import NavigationBar from "@/components/common/navbar";
import CommonTitleCard from "@/components/titlecard";
import React from "react";
import RegistrationForm from "./form";

/**
 * Registration page
 */
export default function Registration() {
 

  return (
    <div className="font-sans min-mx-4 px-4 sm:px-0 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16">
      <NavigationBar />
      <main className="max-w-[900px] dark flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <CommonTitleCard title="Registration Form" />
        <RegistrationForm/>
      </main>
      <Footer />
    </div>
  );
}
