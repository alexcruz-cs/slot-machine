"use client"

import { useState, useEffect } from "react"

export default function SlotMachine()
{
    return (
        
        <main>
            <div className="slots">
                <div className="reel"></div>
                <div className="reel"></div>
                <div className="reel"></div>
            </div>

            <img className="fixed left-0 top-0 h-screen w-auto" src="slotreel.webp"/>
        </main>

    );
}