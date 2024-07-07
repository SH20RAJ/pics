'use client'

import { useEffect } from "react"

export default function Theme() {

    useEffect(() => {
        const darkMode = localStorage.getItem("darkMode")
            //toggle theme classlist to dark
        if (darkMode) {
            const isDarkMode = JSON.parse(darkMode)
            if (isDarkMode) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }

    },[])

  return 
}
