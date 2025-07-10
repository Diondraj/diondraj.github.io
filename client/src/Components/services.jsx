import { Link } from 'react-router-dom'
import { useState, useRef } from 'react';

import { WrenchScrewdriverIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export default function Services() {
const [showForm, setShowForm] = useState(false);
const [formSubmitted, setFormSubmitted] = useState(false);
const formRef = useRef();
const handleSubmit = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY 
    )
    .then(
      (result) => {
        console.log(result.text);
        setFormSubmitted(true);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        alert('Something went wrong. Please try again.');
      }
    );
};

return(
<div id="services" className="w-full bg-red-50 scroll-mt-24">
  <div className="py-16 px-16 lg:px-32">
    
    <h2 className="pb-16 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
      Services
    </h2>
{/* If form is showing then website support and maintenance box won't */}
    <div className="flex flex-col gap-4 justify-between items-center">
      <div className="flex flex-row flex-wrap gap-4 justify-between">
        <div className="flex flex-col items-start bg-amber-100 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <WrenchScrewdriverIcon className="w-10 h-10 text-amber-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Site Maintenance</h3>
          <p className="text-sm text-gray-700 mb-4">
            Need updates, bug fixes, or optimization? I’ve got your site’s back with ongoing care.
          </p>
        </div>
        <div className="flex flex-col items-start bg-red-100 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <CodeBracketIcon className="w-10 h-10 text-red-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Custom Development</h3>
          <p className="text-sm text-gray-700 mb-4">
            Bring your vision to life with custom-built websites that fit your goals and brand identity.
          </p>
        </div>
      </div>

  {showForm && !formSubmitted && (
        <form ref={formRef} name="service_request_form" onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md w-full max-w-xl">
        <button
              type="button"
               onClick={() => {
              setShowForm(false);
            }}
              className="text-gray-500 hover:text-red-500 text-sm float-right">
              ✕ Close
          </button>
            
          <h3 className="flex flex-row justify-start text-xl font-semibold mb-4">Request a Service</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="first_name"
              type="text"
              placeholder="First Name"
              required
              className="border p-2 rounded"
            />
            <input
             name="last_name"
              type="text"
              placeholder="Last Name"
              required
              className="border p-2 rounded"
            />
            <input
            name="business_name"
              type="text"
              placeholder="Business Name (optional)"
              className="border p-2 rounded sm:col-span-2"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="border p-2 rounded sm:col-span-2"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              className="border p-2 rounded sm:col-span-2"
            />
          </div>
          <p className="block mt-4 text-md">Check all that apply</p>
          <div className="flex flex-row justify-evenly">
             <label className="block mt-4 text-sm"> 
              <input name="support_option" type="checkbox" className="mr-2" value="Website Support"/>
              I’d like website support
                       </label>
             
                       <label className="block mt-4 text-sm">
              <input name="custom_option" type="checkbox" className="mr-2" value="Custom website" />
              I’d like a custom built website
                       </label>
           </div>

          <p className="block mt-4 text-sm text-gray-600">
            A consultation ($50) will be required for either service. This will go toward your service total if we work together.
          </p>
         

          <textarea
            name="message"
            placeholder="Your message..."
            rows={4}
            className="w-full mt-4 p-2 border rounded"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      )}
      {formSubmitted && (
        <div className="mt-4 text-green-600 text-lg font-medium">
          Thank you! I’ll be in contact with you soon.
        </div>
      )}
      {!showForm && (  
     
          <Link className="bg-white text-blue-700 p-6 mt-16 text-sm font-medium rounded-full shadow-md  hover:bg-blue-200 transition" onClick={() => setShowForm(true)}>
            Request Services
          </Link>
       
       )}
    </div>
  </div>
</div>

)

}