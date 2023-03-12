import { Inter } from 'next/font/google'
import Card from "@/components/Card"
import Pagination from '@/components/Pagination'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className="container my-12 mx-auto grid grid-cols-1 gap-2 md:gap-3 lg:gap-4  lg:grid-cols-3  md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>

      <Pagination />

    </>
  )
}
