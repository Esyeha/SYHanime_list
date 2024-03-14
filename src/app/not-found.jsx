"use client"

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }
  
  return (
    <>
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center gap-3 flex-col">
            <FileSearch size={38} className="text-color-accent"/>
            <h1 className="text-color-accent text-3xl font-bold">NOT FOUND 404</h1>
            <button onClick={handleBack} className="text-color-primary hover:text-color-accent transition-all underline">Kembali</button>
        </div>
    </div>
    </>
  )
}

export default Page