import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section className="w-full px-4 md:px-16">
      <div className="bg-gray-100 py-12" data-aos="fade-up">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto">
          <p className="text-3xl text-gray-600 underline" data-aos="fade-right">Get In Touch With Our Team</p>
          <p className="text-sm text-gray-500 mt-5" data-aos="fade-left">
            Stop by at our headquarters, our team is happy to welcome you - simple, convenient, and reliable.
          </p>
        </div>

        {/* Form and Info Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg" data-aos="fade-up">
            <form action="#" method="POST" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div data-aos="fade-right">
                  <label htmlFor="first-name" className="block text-sm text-black">First Name</label>
                  <input type="text" id="first-name" name="first-name" className="w-full px-3 py-2 bg-gray-200 text-black rounded-lg" />
                </div>
                <div data-aos="fade-left">
                  <label htmlFor="last-name" className="block text-sm text-black">Last Name</label>
                  <input type="text" id="last-name" name="last-name" className="w-full px-3 py-2 bg-gray-200 text-black rounded-lg" />
                </div>
              </div>
              <div data-aos="fade-up">
                <label htmlFor="email" className="block text-sm text-black">Email<span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-200 text-black rounded-lg" required />
              </div>
              <div data-aos="fade-up">
                <label htmlFor="phone" className="block text-sm text-black">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 bg-gray-200 text-black rounded-lg" />
              </div>
              <div data-aos="fade-up">
                <label htmlFor="subject" className="block text-sm text-black">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full px-3 py-2 bg-gray-200 text-black rounded-lg" />
              </div>
              <div data-aos="fade-up">
                <label htmlFor="message" className="block text-sm text-black">Message<span className="text-red-500">*</span></label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 bg-gray-200 text-black rounded-lg" required></textarea>
              </div>
              <div data-aos="fade-up">
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 text-gray-800" data-aos="fade-up">
            <h3 className="text-2xl font-bold" data-aos="fade-right">For more information and inquiries please contact:</h3>
            <p className="leading-relaxed" data-aos="fade-left">
              <strong>DELIMAJAYA Group - Karoseri Delima Jaya</strong><br />
              Since 1975 - No. 1 Special Purpose Vehicle Manufacturer<br />
              Bus, Ambulance, and Specialty Truck (Fire, Rescue, Defense, Military, Police, Agriculture, Forestry, Mining) Body Builder – Karosserie Industry<br />
              Metal Fabricator, Seat Manufacturer & Heavy Equipment Attachment Assembly Plant for Automotive CKD & SKD
            </p>
            <p className="leading-relaxed" data-aos="fade-right">
              <strong>Head Office and Factory - Headquarters HQ:</strong><br />
              Jl. Sholeh Iskandar No. 5, Bogor Utara, Indonesia 18710<br />
              Phone: +62 251 8544300 (Hunting), 8854401-404, 8854406, 8854407, 8860292, 8860804<br />
              Fax: +62 251 8800273, 8854405<br />
              Email: info@delimajayacarrosserie.com<br />
              Website: www.delimajayacarrosserie.com
            </p>
            <p className="leading-relaxed" data-aos="fade-left">
              <strong>Social Media:</strong><br />
              Instagram: <a href="https://www.instagram.com/delimajaya/" className="text-blue-600">Instagram</a><br />
              Linkedin: <a href="http://id.linkedin.com/in/delimajaya" className="text-blue-600">Linkedin</a><br />
              Facebook: <a href="https://id-id.facebook.com/karoseridelimajaya" className="text-blue-600">Facebook</a><br />
              Youtube: <a href="https://www.youtube.com/c/VinstonWiyanta" className="text-blue-600">Youtube</a><br />
              Twitter: <a href="https://twitter.com/Delimajaya" className="text-blue-600">Twitter</a>
            </p>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12 max-w-7xl mx-auto" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Visit Us</h3>
          <div className="rounded-lg overflow-hidden" data-aos="zoom-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31730.30334984147!2d106.766703!3d-6.5693215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5dbd0e02d85%3A0xfff7b9b8eb24e9fe!2sDelimajaya%20Group!5e0!3m2!1sen!2sid!4v1614904677729!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
