export default function BookClub() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-20 flex flex-col items-center space-y-10">
      {/* Header */}
      <h1 className="text-5xl font-extrabold tracking-tight text-neutral-900">
        BookClub
      </h1>
      <p className="text-lg text-gray-500 max-w-xl text-center">
        A curated platform where book lovers connect, share insights, and explore meaningful reads together.
      </p>

      {/* Button Group */}
      <div className="flex gap-5 flex-wrap justify-center">
        {/* GitHub */}
        <a
          href="https://github.com/Diondraj/Bookclub"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-800 hover:border-gray-900 hover:text-gray-900 transition duration-200"
        >
          <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.37 7.86 10.89.58.11.79-.25.79-.55 0-.27-.01-1.16-.01-2.1-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.04 1.78 2.73 1.26 3.4.97.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.09-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.17 1.18a11.1 11.1 0 012.89-.39c.98.01 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.24 2.73.12 3.02.74.81 1.17 1.84 1.17 3.09 0 4.41-2.69 5.38-5.25 5.67.42.36.8 1.08.8 2.17 0 1.56-.01 2.82-.01 3.21 0 .3.21.66.8.55A10.51 10.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
            />
          </svg>
          GitHub
        </a>

        {/* Live Site */}
        <a
          href="https://timely-flan-0e0f4c.netlify.app/"
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
          href="https://www.figma.com/proto/Ut6vvBVUgqPoGze80wBr33/BookClub-prototype?page-id=0%3A1&node-id=2%3A1137&viewport=282%2C237%2C0.07&scaling=scale-down-width&starting-point-node-id=2%3A1137"
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

      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        {/* Section Title Block */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-stone-800">BookClub Project Overview</h2>
          <p className="text-stone-500 mt-2 text-lg">A UX/UI and Front-End exploration in community-driven reading</p>
        </div>

        {/* Problem */}
        <div className="bg-white border border-stone-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-rose-500 border-b border-rose-100 pb-2 mb-4">The Problem</h3>
          <p className="text-stone-700 leading-relaxed">
            Have you ever wanted to bond over an amazing book that you’ve read but don't have the time in your day to go to the nearest city that has a book club once a month?
            Many readers share this desire to connect. What if you could discuss books on your schedule—anywhere in the world?
          </p>
        </div>

        {/* Solution */}
        <div className="bg-white border border-stone-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-sky-600 border-b border-sky-100 pb-2 mb-4">The Solution</h3>
          <p className="text-stone-700 leading-relaxed">
            A responsive website that acts as a social hub for book lovers. Users can join or start book clubs, post asynchronously in threads, or participate in live chats—enabling both flexible and real-time engagement around shared reads.
          </p>
        </div>

        {/* Project Meta */}
        <div className="grid md:grid-cols-2 gap-6 text-stone-700">
          <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
            <p className="text-sm font-medium text-stone-500">Role</p>
            <p className="text-base font-semibold">UX/UI Designer, Front-End Developer</p>
          </div>
          <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
            <p className="text-sm font-medium text-stone-500">Duration</p>
            <p className="text-base font-semibold">8 weeks</p>
          </div>
          <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
            <p className="text-sm font-medium text-stone-500">UX Tools</p>
            <p className="text-base font-semibold">Figma</p>
          </div>
          <div className="bg-stone-50 p-5 rounded-lg border border-stone-200">
            <p className="text-sm font-medium text-stone-500">Frontend Stack</p>
            <p className="text-base font-semibold">HTML, Bootstrap, JavaScript</p>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        {/* Research Overview */}
        <div className="bg-white border border-stone-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold text-stone-800 border-b border-stone-100 pb-2 mb-4">The Research</h2>
          <p className="text-stone-700 leading-relaxed">
            While many platforms allow people to discuss global topics, few prioritize books as the center of the conversation. BookClub fills this gap by offering live shows, online meetups, post feeds tied to specific books, and tools to connect readers globally on their own schedule.
          </p>
        </div>

        {/* Competitive Analysis */}
        <div className="bg-sky-50 border border-sky-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold text-sky-700 border-b border-sky-200 pb-2 mb-4">Competitive Analysis</h2>
          <p className="text-stone-700 mb-6">
            To better understand the landscape, I researched direct competitors to see how they support book-related social interaction.
          </p>

          {/* Competitor Logos */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <img
                src="/assets/bookclub/images/goodreadslogo.png"
                alt="Goodreads logo"
                className="w-12 h-12 object-contain rounded-md shadow-sm mb-2"
              />
              <p className="text-stone-600 text-sm">Goodreads</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/bookclub/images/librarythinglogo.png"
                alt="LibraryThing logo"
                className="w-12 h-12 object-contain rounded-md shadow-sm mb-2"
              />
              <p className="text-stone-600 text-sm">LibraryThing</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/bookclub/images/litsylogo.png"
                alt="Litsy logo"
                className="w-12 h-12 object-contain rounded-md shadow-sm mb-2"
              />
              <p className="text-stone-600 text-sm">Litsy</p>
            </div>
          </div>
        </div>

        {/* User Values & Improvement Opportunities */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* User Values */}
          <div className="bg-rose-50 border border-rose-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-rose-700 border-b border-rose-100 pb-2 mb-3">User Priorities</h3>
            <ul className="list-disc list-inside text-stone-700 space-y-1">
              <li>Personal bookshelf</li>
              <li>Book tracking</li>
              <li>Ability to keep track of friends</li>
              <li>Discussion boards</li>
            </ul>
          </div>

          {/* Areas of Improvement */}
          <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-yellow-700 border-b border-yellow-100 pb-2 mb-3">Areas of Improvement</h3>
            <ul className="list-disc list-inside text-stone-700 space-y-1">
              <li>User interaction features</li>
              <li>More nuanced rating system</li>
              <li>Book organization tools</li>
              <li>Age-specific reviews</li>
            </ul>
          </div>
        </div>

        {/* User Research Summary */}
        <div className="bg-white border border-stone-200 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-stone-800 border-b border-stone-100 pb-2 mb-4">Understanding the User</h3>
          <p className="text-stone-700 mb-3">
            To better empathize with future users, I interviewed avid readers who expressed interest in digital book discussions and clubs.
          </p>
          <p className="text-stone-700 mb-4">
            The interviews explored motivations, reading routines, and desired features that make a virtual book club more engaging.
          </p>

          {/* Small Image */}
          <img
            src="/assets/bookclub/images/partdataimage.png"
            alt="Participant data visualization"
            className="w-full max-w-md mx-auto rounded-md shadow-sm"
          />

          <h4 className="text-md font-semibold text-stone-700 mt-6">Participants</h4>
          <p className="text-stone-600">
            I spoke with four individuals from my personal network who love reading and have previously joined in-person or digital book clubs.
          </p>
        </div>
      </section>

      {/* Interview Findings */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold text-emerald-700 border-b border-emerald-200 pb-2 mb-4">Interview Findings</h2>
          <img
            src="/assets/bookclub/images/partdataimage.png"
            alt="Interview insights"
            className="w-full max-w-md mx-auto rounded-md shadow-sm"
          />
        </div>
        <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        {/* Participants */}
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 border-b border-gray-100 pb-2 mb-4">Participants</h3>
          <p className="text-gray-700">I interviewed 4 individuals from my network who are avid readers and have previously participated in book clubs.</p>
        </div>

        {/* Interview Findings */}
        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-lg shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-emerald-700 border-b border-emerald-200 pb-2">Interview Findings</h3>
          
          <img 
            src="/assets/bookclub/images/findings.png"
            alt="Interview findings"
            className="w-full max-w-md mx-auto rounded-md shadow-md"
          />
          
          <img 
            src="/assets/bookclub/images/interviews.png"
            alt="Interview outtakes"
            className="w-full max-w-md mx-auto rounded-md shadow-md"
          />

          <div className="grid md:grid-cols-3 gap-6 text-center text-sm text-stone-700">
            <div className="space-y-2">
              <img 
                src="/assets/bookclub/images/fourpeople.png"
                alt="4 people icon"
                className="h-8 mx-auto"
              />
              <p>4/4 prefer clubs that fit their availability</p>
            </div>
            <div className="space-y-2">
              <img 
                src="/assets/bookclub/images/threepeople.png"
                alt="3 people icon"
                className="h-8 mx-auto"
              />
              <p>3/4 prefer quick reviews over live discussions</p>
            </div>
            <div className="space-y-2">
              <img 
                src="/assets/bookclub/images/oneperson.png"
                alt="1 person icon"
                className="h-8 mx-auto"
              />
              <p>1/4 prefers in-person due to habit</p>
              <p className="text-xs text-gray-500 mt-1">*All users prioritize time and said it affects whether they join a club.</p>
            </div>
          </div>
        </div>

        {/* Persona */}
        <div className="bg-rose-50 border border-rose-100 p-6 rounded-lg shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-rose-700 border-b border-rose-200 pb-2">Persona</h3>
          
          <p className="text-gray-700">
            During interviews, participants revealed common motivations and frustrations. This inspired the creation of an empathy map and a persona to represent our target user.
          </p>

          <div className="bg-white border border-gray-100 rounded-lg p-4 space-y-4 shadow-sm">
            <img 
              src="/assets/bookclub/images/Amanda.png"
              alt="Amanda Klein"
              className="w-28 max-w-md mx-auto rounded-md shadow"
            />

            <div className="text-center space-y-1">
              <h3 className="text-lg font-semibold text-gray-800">Amanda Klein</h3>
              <p className="text-sm text-gray-600">📍 Texas, USA | 💼 Sales Associate | 🎂 Age: 31</p>
              <blockquote className="italic text-gray-500 mt-2">“I enjoy vicariously living through characters in a book of excitement and adventure.”</blockquote>
            </div>

            <p className="text-gray-700 text-sm">
              Amanda has loved reading since she was a child. She immerses herself in the worlds of her books and enjoys reflecting on character decisions and themes. While she's participated in school book clubs, she currently lacks time for in-person events and seeks asynchronous experiences.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-700">🎯 Goals</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Learning through discussion</li>
                  <li>Making friends with similar interests</li>
                  <li>Enjoying relaxing activities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">😩 Frustrations</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Hard to commit to in-person events</li>
                  <li>Limited digital book club options</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">📌 Needs</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Convenient access</li>
                  <li>Organized interface</li>
                  <li>Outlet for discussion</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">🚀 Motivations</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Other readers' opinions</li>
                  <li>Thrill of imagination & discussion</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center mt-6">
              <h4 className="font-semibold text-gray-700">💖 Favorite Brands</h4>
              <img 
                src="/assets/bookclub/images/goodreadslogo.png"
                alt="Goodreads"
                className="w-12 h-8 mt-2"
              />
            </div>
          </div>
        </div>
      </section>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Ideate Section */}
      <div className="space-y-10 bg-white border border-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-black`">Ideate</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">✨ Features</h3>
          <p className="text-gray-700">
            The product features can make or break the experience for users. After assessing the user needs, business goals, and technical constraints, I listed features essential to creating a meaningful social experience on BookClub.
          </p>
          <img 
            src="/assets/bookclub/images/featurechart.png"
            alt="Feature chart"
            className="w-full max-w-3xl mx-auto rounded-md shadow-sm"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">🗺 Sitemap & User Flow</h3>
          <p className="text-gray-700">
            Based on research, users wanted to feel a sense of community and find validation through discussion. I mapped out how users would navigate the platform to achieve these goals.
          </p>
          <p className="text-gray-700">
            The flow outlines three paths from the landing page: Sign Up, Sign In, and Search. The onboarding experience helps new users set their preferences right away.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <img 
              src="/assets/bookclub/images/Sitemap.png"
              alt="Sitemap"
              className="w-full rounded-md shadow-sm"
            />
            <img 
              src="/assets/bookclub/images/userflow.png"
              alt="User flow"
              className="w-full rounded-md shadow-sm"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <img 
              src="/assets/bookclub/images/transparent%20logo%20and%20branding.png"
              alt="Branding"
              className="w-full rounded-md shadow-sm"
            />
            <img 
              src="/assets/bookclub/images/Wireframes.png"
              alt="Wireframes"
              className="w-full rounded-md shadow-sm"
            />
            <img 
              src="/assets/bookclub/images/Hi-fidelity%20Designs.png"
              alt="Hi-fidelity Designs"
              className="w-full rounded-md shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Test & Iterate Section */}
      <div className="space-y-10 bg-rose-50 border border-rose-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold text-rose-600">🧪 Test & Iterate</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">🧍‍♀️ User Testing</h3>
          <p className="text-gray-700">
            I conducted usability tests to identify what's working well and where improvements can be made. View full test plan <a href="https://www.notion.so/User-Testing-Plan-b021e9467553424ba47a25f999f0ff4e" className="text-rose-500 underline hover:text-rose-600">here</a>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-2">✅ Wins</h4>
            <ul className="space-y-2 list-disc list-inside">
              <li>"Main tasks/objectives are clear."</li>
              <li>"Nice colorful layout that goes well with the purpose of the website."</li>
              <li>"Onboarding process is straightforward and simple."</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-red-400 mb-2">⚠️ Confusions</h4>
            <ul className="space-y-2 list-disc list-inside">
              <li>"Live chat placement isn't easily navigable."</li>
              <li>"If I press join, am I immediately taken to the Zoom meeting?"</li>
              <li>"How will I know the upcoming meetings?"</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-indigo-500 mb-2">💡 Opportunities</h4>
            <ul className="space-y-2 list-disc list-inside">
              <li>Create clearer meeting page navigation</li>
              <li>Highlight live chat with stronger styling</li>
              <li>Display a visual meeting schedule</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-lg shadow-sm space-y-6">
        <h3 className="text-2xl font-semibold text-yellow-600">🔁 Iterations</h3>
        <p className="text-gray-700">
          Based on user feedback, I made updates to the BookClub meeting page to improve clarity and functionality.
          These include a visible meeting schedule for the month and a closed live chat feed placed prominently at the top of the page to encourage community engagement.
        </p>

        <img 
          src="/assets/bookclub/images/book%20meeting%20page%20iteration.png"
          alt="Updated book club meeting page design"
          className="w-full max-w-3xl mx-auto rounded-md shadow-sm"
        />
      </div>
    </section>
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-lg shadow-sm space-y-6">
          <h2 className="text-3xl font-bold text-emerald-600">🌱 Final Thoughts</h2>
          <p className="text-gray-700">
            It was a joy designing a platform where readers across the globe can bond over the stories they love—no matter their time zone or location. Moving forward, I plan to expand features by adding a monthly meeting calendar with a participant cap for each session.
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-emerald-700">📈 How I Would Measure Success</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Number of site visits</li>
              <li>Number of sign-ups</li>
              <li>Percentage of member interactions via reviews & live chats</li>
              <li>Attendance count for book club meetings</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
