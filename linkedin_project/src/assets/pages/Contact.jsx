import React, { useState } from 'react';
import GoogleMap from '../components/map';
import Footer from '../components/footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    course: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

      if (response.ok) {
        alert("✅ Form submitted successfully!");
        setFormData({
          name: '',
          email: '',
          contact: '',
          address: '',
          course: '',
          country: '',
        });
      } else {
        const data = await response.json();
        console.error("❌ Server error:", data);
        alert("❌ Failed to submit form.");
      }
    } catch (error) {
      console.error("📛 Network error:", error);
      alert("📛 Could not connect to the server.");
    }
  };

  return (
      <div>
      <div className="bg-green-900 min-h-screen flex items-center justify-center p-4">
        <div className="bg-green-600 rounded-3xl p-6 w-full max-w-md text-white">
          <h2 className="text-center font-bold text-sm mb-2">
            Interested in Studying Abroad with LINKEDIN EDUCATION CONSULTANCY?
            <br />
            <span className="text-xs font-normal">Fill The Form Below</span>
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-white text-sm mb-1">Full Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-2 rounded bg-white text-green-800 placeholder-green-700 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full p-2 rounded bg-white text-green-800 placeholder-green-700 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-1">Contact Number:</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your number"
                className="w-full p-2 rounded bg-white text-green-800 placeholder-green-700 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-1">Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your Address"
                className="w-full p-2 rounded bg-white text-green-800 placeholder-green-700 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-1 font-semibold">
                Any specific Course you want to enquire about?*
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="Enter your enquiries"
                className="w-full p-2 rounded bg-white text-green-800 placeholder-green-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-1 font-semibold">
                Any specific Country you want to enquire about?*
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 rounded bg-white text-green-800 placeholder-green-700 focus:outline-none"
              >
                <option value="">---select country you want to study---</option>
                <option value="south-korea">South Korea</option>
                <option value="japan">Japan</option>
                <option value="australia">Australia</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-white text-green-900 font-semibold w-full py-2 rounded mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div>
        <GoogleMap />
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
