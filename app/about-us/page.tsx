import Image from "next/image"
import Navbar from "@/components/navbar"

export default function AboutUs() {
  const teamMembers = [
    {
      id: 1,
      role: "Software Architect",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      role: "Lead Developer",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      role: "CEO",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      role: "Service Manager",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      role: "Customer Support",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70 z-10"></div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/button-sportathlete-left.jpg-tViEJ7b3QEKk4Qi8xarpgFBnzHm521.jpeg"
          alt="AI Background"
          fill
          className="object-cover object-right opacity-30 md:opacity-40"
          priority
        />
      </div>

      <Navbar />

      <div className="max-w-7xl mx-auto relative z-10 px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-green-500 text-center">ABOUT US</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="mb-4 relative h-40 w-40 overflow-hidden rounded-md">
                <Image src={member.image || "/placeholder.svg"} alt={member.role} fill className="object-cover" />
              </div>
              <h2 className="text-xl font-bold text-yellow-400 text-center">{member.role}</h2>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-green-500 mb-4">Calevala Interactive Ltd.</h2>
            <div className="space-y-2">
              <p>
                <span className="font-bold text-yellow-400">Est:</span> 2009
              </p>
              <p>
                <span className="font-bold text-yellow-400">Y-tunnus:</span> 2256157-0
              </p>
              <p>
                <span className="font-bold text-yellow-400">Locations:</span> Espoo & Turku, Finland
              </p>
              <p>
                <span className="font-bold text-yellow-400">Contact:</span> maari@calevala.com
              </p>
            </div>

            <h3 className="text-xl font-bold text-yellow-400 mt-6 mb-2">Story:</h3>
            <p className="text-white">
              The company was founded by two software enthusiasts who developed an SMS-based quiz game for a
              nighttime-oriented broadcasting company. The game was played during the evening and nighttime on teletext.
              Since the work required invoicing, establishing a company became necessary.
            </p>
            <p className="text-white mt-2">
              Over the years, Calevala Interactive has invested in various portfolio companies, some of which have been
              successfully acquired.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-500 mb-4">:: Job opportunities</h2>
            <p className="text-white mb-4">
              First and foremost, we collaborate with several universities of applied sciences in Finland, offering
              training, thesis work opportunities, and job training placements. Additionally, we have some entry-level
              job opportunities across Finland for athletes, as most of our work is location- and time-independent—it
              can be done from anywhere.
            </p>

            <p className="text-white mb-4">
              Our team communicates primarily via Slack, with weekly meetings, making our way of working fully
              "cloud-based", where the entire work environment is digital.
            </p>

            <h3 className="text-xl font-bold text-yellow-400 mt-6 mb-2">Our Tech Stack & Work Culture</h3>
            <p className="text-white mb-4">
              We develop software using both SQL- and NoSQL-based tools, coding in Golang, Python, Node.js, Next.js,
              Angular, and React, following modern software development practices. We utilize Visual Studio as our
              primary development environment, host our projects on Amazon AWS, and use Git for version control. Our
              CI/CD pipeline is fully automated, and we conduct UAT (User Acceptance Testing) and QA (Quality Assurance)
              testing to ensure reliability.
            </p>

            <p className="text-white mb-4">
              We integrate AI-driven tools and platforms, including LLMs (Large Language Models) and object detection
              platforms. We work with annotations and use Jira for sprint management, frequently holding Google Meet and
              Slack Huddles for discussions.
            </p>

            <h3 className="text-xl font-bold text-yellow-400 mt-6 mb-2">Our Work Philosophy</h3>
            <p className="text-white mb-4">
              Our corporate language is English, and we foster a blameless postmortem culture, ensuring that failures
              lead to learning rather than blame. We also embrace a "fail fast" mindset, encouraging rapid iteration and
              continuous improvement.
            </p>

            <p className="text-white mt-4">
              If you're passionate about cutting-edge technology, remote-first collaboration, and a growth-oriented work
              culture, we'd love to hear from you! 🚀
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

