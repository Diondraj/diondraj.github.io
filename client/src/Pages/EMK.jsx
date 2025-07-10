import { useEffect } from 'react';
export default function EMK() {
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
        <h1 className="text-3xl font-bold">Eat More Korean</h1>
        {/* 💡 The Idea */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-pink-600">💡 The Idea</h2>
          <p>
            I created a multilingual kiosk app for Eat More Korean customers to make ordering authentic Korean food easier and more inclusive.
          </p>
        </section>

        {/* 🧩 The User Problem */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-pink-600">🧩 The User Problem</h2>
          <p>
            Located inside an international market, Eat More Korean attracts diverse customers. However, the menu board is written only in English and Korean with no item descriptions, leading to confusion and exclusion for non-native speakers.
          </p>
        </section>

        {/* 🎯 The Audience */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-pink-600">🎯 The Audience</h2>
          <p>Age range: 13–60</p>
        </section>

        {/* 📌 The Project */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-pink-600">📌 The Project</h2>
          <p>This project was inspired by my Korean 2002 class.</p>
          <p>
            <strong>Role:</strong> UX Researcher/Designer <br />
            <strong>Timeline:</strong> 18 weeks <br />
            <strong>Tools:</strong> Figma
          </p>
        </section>

        {/* 🖼️ Design Process Image */}
        <section>
          <img
            src="/assets/eatmorekorean/images/design process.png"
            alt="Design process"
            className="w-full rounded-lg shadow-md"
          />
        </section>

        {/* 🔍 Discover & Research */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">🔍 1. Discover & Research</h2>

          {/* 📋 User Surveys */}
          <div className="bg-pink-50 border border-pink-100 p-6 rounded-lg shadow-sm space-y-4">
            <h3 className="text-2xl font-semibold text-pink-600">📋 User Surveys</h3>

            <div>
              <h4 className="font-bold">🎯 Goal</h4>
              <p>Collect 6-question surveys to better understand the demographics and language needs of Eat More Korean’s customer base.</p>
            </div>

            <div>
              <h4 className="font-bold">🛠️ Process</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Surveys distributed at peak hours over two days.</li>
                <li>Questions were designed to guide later interviews.</li>
                <li>Responses from 10 participants were organized into an affinity map.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">
                📝 Survey Questions <span className="text-sm text-gray-500">(in Spanish, English, and Korean)</span>
              </h4>
              <ul className="list-decimal list-inside space-y-1">
                <li>What is your age?</li>
                <li>What is your nationality?</li>
                <li>Can you read Korean?</li>
                <li>Do you rely on English translations to choose meals?</li>
                <li>How does Korean language benefit your experience?</li>
                <li>Is the menu in your native language?</li>
              </ul>
            </div>
          </div>

          {/* 🎤 User Interviews */}
          <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg shadow-sm space-y-4">
            <h3 className="text-2xl font-semibold text-blue-600">🎤 User Interviews</h3>

            <div>
              <h4 className="font-bold">🎯 Goal</h4>
              <p>Understand whether a multilingual menu would improve customer satisfaction and business success.</p>
            </div>

            <div>
              <h4 className="font-bold">🛠️ Process</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Interviewed participants who lacked native-language support on the menu.</li>
                <li>Asked guided questions based on survey pain points.</li>
                <li>Affinity mapping used to identify key insights.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">🗣️ Interview Questions</h4>
              <ul className="list-decimal list-inside space-y-1">
                <li>What is your native language?</li>
                <li>Would a translated menu improve your experience?</li>
                <li>Describe your typical ordering process.</li>
                <li>Would a non-fluent family member struggle to order?</li>
                <li>Would multilingual support increase your visits?</li>
              </ul>
            </div>
          </div>
        </section>
      {/* 🔎 Section 2: Synthesis Research */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">🔎 2. Synthesis Research</h2>

        <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-lg shadow-sm space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-700">🧠 Affinity Map</h3>
          <p className="text-gray-700">Trends and insights emerged from user data through visual mapping of notes and themes.</p>

          <h3 className="text-xl font-semibold text-yellow-700">🧩 Method</h3>
          <p className="text-gray-700">
            By grouping notes from interviews and survey responses, clear patterns surfaced around user motivations, goals, pain points, and needs. This process laid the foundation for defining the problem.
          </p>
          <div className="space-y-4">
            <img
              src="/assets/eatmorekorean/images/bubbles.png"
              alt="Affinity map"
              className="w-full rounded-lg shadow-md"
            />
            <img
              src="/assets/eatmorekorean/images/PersonaOneTwo.png"
              alt="Personas"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* 🎯 Section 3: Design Strategy */}
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">🎯 3. Design Strategy</h2>

        <div className="bg-green-50 border border-green-100 p-6 rounded-lg shadow-sm space-y-4">
          <h3 className="text-2xl font-semibold text-green-700">💬 Define the Problem</h3>

          <div>
            <h4 className="font-bold text-gray-800">❗ Problem Statement</h4>
            <p className="text-gray-700">
              Individuals from diverse language backgrounds struggle to read, speak, or translate the English and Korean-only menu at Eat More Korean.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-800">🎯 User Goals</h4>
            <p className="text-gray-700 italic">Q: What can I do to address the problem?</p>
            <p className="text-gray-700">A: Create a kiosk app that eliminates miscommunication and makes ordering quicker and more inclusive.</p>
          </div>

          <img
            src="/assets/eatmorekorean/images/informarchparticipants.png"
            alt="Information architecture"
            className="w-full rounded-lg shadow-md"
          />

          <div>
            <h4 className="font-bold text-gray-800">🧭 User Flow</h4>
            <p className="text-gray-700">A visual layout of the app’s core structure to show how users move through it.</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-800">🏁 The Goal</h4>
            <p className="text-gray-700">To clearly communicate how users will navigate through different pages and actions in the kiosk app.</p>
          </div>

          <img
            src="/assets/eatmorekorean/images/emkuserflow.png"
            alt="User flow"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>
     
      <section className="max-w-4xl mx-auto px-6 py-12 space-y-10">
            <h2 className="text-3xl font-bold text-gray-900">🧪 4. Prototyping</h2>

            {/* Kiosk Screens Reference */}
            <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-lg shadow-sm space-y-4">
              <figure>
                <img
                  src="/assets/eatmorekorean/images/ipad_ideation.png"
                  alt="Collage of kiosk screens"
                  className="w-full rounded-lg shadow-md"
                />
                <figcaption className="text-sm text-gray-500 mt-2">
                  The kiosk software used by different businesses showcases the wide range of user interfaces available in the market.
                </figcaption>
              </figure>

              <p>
                Developing software for custom hardware differs greatly from designing for mass-market devices. Custom kiosks require tailored software due to unique screen layouts, input devices, and user interaction patterns. Unlike polished devices from brands like Apple or Samsung, custom hardware often suffers from lower production quality and touch sensitivity.
              </p>
            </div>

            {/* iPad Ideation */}
            <div className="bg-pink-50 border border-pink-100 p-6 rounded-lg shadow-sm space-y-4">
              <h3 className="text-2xl font-semibold text-pink-700">🍎 iPad Ideation</h3>
              <p>
                Due to budget constraints common in smaller restaurants, I designed for the iPad Pro 12.9", a device widely used in the food industry. Its familiarity and accessibility allow staff and customers to interact with the interface more intuitively, enhancing the overall user experience.
              </p>
            </div>

            {/* Custom Kiosk */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg shadow-sm space-y-4">
              <h3 className="text-2xl font-semibold text-blue-700">🧾 Kiosk Ideation</h3>
              <p>
                For businesses that prefer a custom kiosk experience, I created an alternative prototype for a 916×1594 px screen. This prototype allows flexibility while mimicking industry-standard kiosk layouts.
              </p>
            </div>

            {/* Wireframes */}
            <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-lg shadow-sm space-y-4">
              <h3 className="text-2xl font-semibold text-yellow-700">🧱 Wireframes</h3>
              <p>These wireframes focus on the app's structure and functionality before applying final design polish.</p>

              <figure>
                <img
                  src="/assets/eatmorekorean/images/lo-fi_wireframesIpad.png"
                  alt="iPad wireframes"
                  className="w-full rounded-lg shadow-md"
                />
              
              <br></br>

              <img
                src="/assets/eatmorekorean/images/lo-fi_wireframes.png"
                alt="Custom kiosk wireframes"
                className="w-full rounded-lg shadow-md"
              />
              <figcaption className="text-sm text-gray-500 mt-2">Sketches for a single order flow.</figcaption>
              </figure>
            </div>

            {/* Branding */}
            <div className="bg-rose-50 border border-rose-100 p-6 rounded-lg shadow-sm space-y-4">
              <h3 className="text-2xl font-semibold text-rose-700">🎨 Logo & Branding</h3>
              <img
                src="/assets/eatmorekorean/images/Logo_Branding.png"
                alt="Logo and branding designs"
                className="w-full rounded-lg shadow-md"
              />
            </div>

            {/* High-Fidelity Screens */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-purple-700">✨ High-Fidelity Designs</h3>

              <div>
                <h4 className="font-bold text-gray-800">📱 iPad Kiosk</h4>
                <img
                  src="/assets/eatmorekorean/images/hifi_1.png"
                  alt="iPad high-fidelity"
                  className="w-full rounded-lg shadow-md"
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-800">🖥️ Regular Kiosk</h4>
                <img
                  src="/assets/eatmorekorean/images/hifi_4.png"
                  alt="Regular kiosk screen"
                  className="w-full rounded-lg shadow-md"
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-800">🍜 Food Selection</h4>
                <img
                  src="/assets/eatmorekorean/images/hifi_2.png"
                  alt="Food selection screen"
                  className="w-full rounded-lg shadow-md"
                />
                <img
                  src="/assets/eatmorekorean/images/hifi_5.png"
                  alt="Alternate food selection"
                  className="w-full rounded-lg shadow-md mt-4"
                />
              </div>

              <div>
                <h4 className="font-bold text-gray-800">💳 Payment Process</h4>
                <img
                  src="/assets/eatmorekorean/images/hifi_3.png"
                  alt="Payment process screen"
                  className="w-full rounded-lg shadow-md"
                />
                <img
                  src="/assets/eatmorekorean/images/hifi_6.png"
                  alt="Alternate payment screen"
                  className="w-full rounded-lg shadow-md mt-4"
                />
              </div>
            </div>

            {/* Figma Prototype CTA */}
            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🧩 Interactive Prototype</h3>
              <a
                href="https://www.figma.com/proto/uYdFZLAoAMXMdnayE5GaYH/EMK-project?kind=proto&node-id=315-146&page-id=0%3A1&scaling=scale-down&starting-point-node-id=315%3A146&viewport=590%2C-572%2C0.04&t=CqQukxcVVrAzPNCE-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
              >
                ▶️ View Interactive Kiosk App on Figma
              </a>
            </div>
      </section>
   {/* 🧪 Section 5: Usability Testing */}
<section className="max-w-4xl mx-auto px-6 py-12 space-y-10">
  <h2 className="text-3xl font-bold text-gray-900">🧪 5. Usability Testing</h2>

  <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg shadow-sm space-y-4">
    <h3 className="text-2xl font-semibold text-blue-700">📱 Testing on iPad</h3>
    <p>
      I conducted usability testing with real users on the iPad prototype of the kiosk app. The goal was to test how users interact when there’s a language barrier and time constraint.
    </p>
  </div>

  {/* Scenario 1 */}
  <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-lg shadow-sm space-y-4">
    <h4 className="text-xl font-bold text-yellow-700">📌 Scenario 1</h4>
    <p>
      Imagine you're at Eat More Korean and unable to read English or Korean. You use the kiosk to order your meal.
    </p>
    <h4 className="font-semibold">📝 Questions</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>What behavior did you expect from the option you chose for method of pick-up?</li>
      <li>How did you find completing this task?</li>
      <li>How would you feel using this kiosk at Eat More Korean?</li>
      <li>Would you be willing to use this kiosk app to order your food?</li>
      <li>What about this kiosk app did you find enjoyable?</li>
      <li>Was there anything that confused you on the app?</li>
    </ul>
  </div>

  {/* Scenario 2 */}
  <div className="bg-pink-50 border border-pink-100 p-6 rounded-lg shadow-sm space-y-4">
    <h4 className="text-xl font-bold text-pink-700">⏰ Scenario 2</h4>
    <p>You're in a rush and can’t speak English or Korean. You must quickly place your order using the kiosk.</p>
    <h4 className="font-semibold">📝 Questions</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>How would you find completing this task in a hurry?</li>
      <li>Would you consider using the kiosk to order food when in a hurry?</li>
      <li>Was the process of ordering long? If so, what could have shortened the process?</li>
    </ul>
  </div>

  {/* Scenario 3 */}
  <div className="bg-green-50 border border-green-100 p-6 rounded-lg shadow-sm space-y-4">
    <h4 className="text-xl font-bold text-green-700">👨‍👩‍👧 Scenario 3</h4>
    <p>You're ordering for your family, none of whom speak English or Korean.</p>
    <h4 className="font-semibold">📝 Questions</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>As your family’s translator, would this kiosk app help you during the ordering process?</li>
    </ul>
  </div>

  {/* Usability Outtakes */}
  <div className="bg-purple-50 border border-purple-100 p-6 rounded-lg shadow-sm space-y-4">
    <h3 className="text-2xl font-semibold text-purple-700">🎉 Usability Outtakes</h3>
    <h4 className="font-semibold">✅ What Went Well</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Users found the app intuitive and the flow met their expectations.</li>
      <li>Food images helped users confidently identify meals.</li>
    </ul>
  </div>
</section>

{/* 💭 Section 6: Conclusion */}
<section className="max-w-4xl mx-auto px-6 py-12 space-y-6">
  <h2 className="text-3xl font-bold text-gray-900">💭 Conclusion</h2>

  <div className="bg-gray-50 border border-gray-100 p-6 rounded-lg shadow-sm space-y-4">
    <p>
      As my first full UX case study, this project reshaped how I approach inclusive design and user research. I uncovered my own assumptions and learned how to center user perspectives — especially for those experiencing cultural or language barriers.
    </p>

    <p>
      By shifting my mindset, I was able to thoughtfully create a multilingual experience that serves real community needs and supports business growth.
    </p>

    <h4 className="font-semibold">📈 Business Impacts</h4>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>Shorter queues & faster service</li>
      <li>Reach a broader, more diverse customer base</li>
      <li>Deliver a best-in-class customer experience</li>
    </ul>
  </div>
</section>

      </div>
    </div>
  );
}
