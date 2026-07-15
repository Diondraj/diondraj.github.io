import { useEffect } from 'react';

 useEffect(() => {
    // Runs when the component mounts
    window.scrollTo(0, 0);

    return () => {
      // Optional: runs when the component unmounts
      console.log("Bookclub page unmounted");
    };
  }, []); // Empty dependency array = only runs once on mount/unmount
  
 export default function thebridge() {
  return (
    <div className="bg-white text-gray-800 font-sans leading-relaxed">
        <div className="max-w-3xl mx-auto px-6 py-4 space-y-12">
            <h1 className="text-3xl font-bold">The Bridge Workforce</h1>
            {/* 💡 The Idea */}
            <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-pink-600">💡 The Idea</h2>
            <p>
                I designed the Bridge Workforce website with a team of engineers. This is a high fidelity mockup of a website to be accessed by learners looking to upskill for their career journey.
            </p>
            </section>
        </div>
   </div>
  )
}