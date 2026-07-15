import { useEffect } from 'react';


 export default function thebridgePage() {
     useEffect(() => {
    // Runs when the component mounts
    window.scrollTo(0, 0);

    return () => {
      // Optional: runs when the component unmounts
      console.log("Bookclub page unmounted");
    };
  }, []); // Empty dependency array = only runs once on mount/unmount

  return (
    <div className="bg-white text-gray-800 font-sans leading-relaxed">
        <div className="max-w-3xl mx-auto px-6 py-4 space-y-12">
            <h1 className="text-3xl font-bold">The Bridge Workforce</h1>
            {/* 💡 The Idea */}
            <section className="space-y-3">
            
            <p>
                I designed the Bridge Workforce website with a team of engineers. This is a high fidelity mockup of a website to be accessed by learners looking to upskill for their career journey.
            </p>
             {/* Button Group */}
            <div className="flex gap-5 flex-wrap justify-center">

                {/* Live Site */}
                <a
                href="https://the-bridge-workforce.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-300 text-white rounded-lg text-sm font-medium hover:bg-red-500 transition duration-200"
                >
                Visit Site
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </a>

                {/* Figma */}
                <a
                href="https://www.figma.com/proto/fHq6ZGi9AhImM6k0QGu7jU/The-Bridge-Workforce?node-id=942-3198&p=f&t=hhAaAaPbYDSNNh6e-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=942%3A3198"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-sm font-medium rounded-lg text-gray-800 hover:border-gray-900 hover:text-gray-900 transition duration-200"
                >
                Figma Prototype
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                </a>
            </div>
        </section>
        <section>
            <h2 className="text-2xl font-bold">View Interactive prototype below</h2>
            <p>To scroll, use two fingers and drag or the mouse wheel while hovering over the interactive screen.</p>
        </section>
        </div>
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "40px 0",
        }}
        >
        <iframe
        style={{
        border: "1px solid rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "1000px",
        height: "700px",
        }}
        src="https://embed.figma.com/proto/fHq6ZGi9AhImM6k0QGu7jU/The-Bridge-Workforce?node-id=942-3198&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=942%3A3198&embed-host=share"
        allowFullScreen
        />
        </div>
    </div>
  )
}