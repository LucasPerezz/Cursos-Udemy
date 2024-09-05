import Navbar from "@/components/navbar/Navbar";
import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center p-24">
                <span className="text-lg">Hola Mundo</span>
                {children}
            </main>
        </>
    )
}