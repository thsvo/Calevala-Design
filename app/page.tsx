import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6 mt-4 md:mt-8">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-sm">
              <span className="text-yellow-400">Bringing AI to life - </span>
              <span className="text-yellow-400">turning data into  <span className="text-green-500">iterative </span>  action. </span>
             
            </h1>
            <blockquote className="text-lg md:text-xl italic mt-4 text-shadow-sm">
              &quot;Echoes of the past, amplified for tomorrow&apos;s markets.&quot;
            </blockquote>

            <div className="mt-8">
              {/* <Link
                href="/companies"
                className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-md transition-colors"
              >
                Explore Our Companies
              </Link> */}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[500px] w-full">
            <div 
              className="absolute inset-0 bg-cover bg-center rounded-lg opacity-40 h-[550px] w-800px]"
              style={{
                backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/button-sportathlete-left.jpg-tViEJ7b3QEKk4Qi8xarpgFBnzHm521.jpeg')`
              }}
            />
            {/* <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/button-sportathlete-left.jpg-tViEJ7b3QEKk4Qi8xarpgFBnzHm521.jpeg"
              alt="AI Background"
              fill
              className="object-cover rounded-lg"
              priority
            /> */}
          </div>
        </section>
      </div>
    </main>
  )
}

