 import Socials from "./Components/socials"

 export default function Hero() {
  return (
   <div className="sm:py-4 lg:py-12">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Diondra Evans
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Designer & Developer
            </p>
            <p className="mt-8 text-lg text-pretty text-gray-500 sm:text-xl/8">
            Design That Works. Support That Lasts.
            <br></br>  
            From custom web design to reliable maintenance, I help businesses create and sustain powerful online experiences.
            </p>
            <Socials />
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#portfolio"
                className="rounded-md bg-red-200  px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                See Portfolio
              </a>
            </div>
          </div>
        </div>
  )
}



