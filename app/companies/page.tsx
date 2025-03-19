import Image from "next/image"
import Navbar from "@/components/navbar"

export default function Companies() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70 z-10"></div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/button-kaze.jpg-pNmck9XFh6nZWJ2GRTkawV6XgHAdZX.jpeg"
          alt="AI Background"
          fill
          className="object-cover object-left opacity-40 md:opacity-60"
          priority
        />
      </div>

      <Navbar />

      <div className="max-w-7xl mx-auto relative z-10 px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-green-500 text-center">PORTFOLIO OF COMPANIES</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 border-4 border-yellow-400 flex-shrink-0"></div>
              <div>
                <h2 className="text-xl font-bold text-yellow-400 mb-2">Company: Kuutio</h2>
                <p className="text-white">
                  Calevala Interactive is a portfolio company focused on leveraging AI to enhance service development in
                  the fields of media, fashion, catalogs, and categorization.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 flex-shrink-0">
                <div className="w-full h-full border-4 border-yellow-400 transform rotate-45"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-yellow-400 mb-2">Company: Kolmio</h2>
                <p className="text-white">
                  The company aims to bring an AI-driven edge to the sports industry, enhancing performance development
                  for athletes, players, and sports scouts.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
                <div className="text-5xl text-yellow-400 font-bold">?</div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-yellow-400 mb-2">Next generation</h2>
                <p className="text-white">
                  Are you our next superstar and the creator of the next disruptive SaaS-based service? We continuously
                  drive new ideas through our venturing process, month after month, year after year.
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* This space is intentionally left empty to match the layout in the image */}
          </div>
        </div>
      </div>
    </main>
  )
}

