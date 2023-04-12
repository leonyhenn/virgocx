import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Main from './App';

export default function Home() {
  return (
    <main>
      <Main/>
    </main>
  )
}
