"use client"
const API_URL = process.env.NEXT_PUBLIC_API_URL

export const googleSignIn = async () => {
    try {
      window.location.href = `${API_URL}auth/google`
    } catch (error) {
        console.log("Invalid API Link")
    }
}