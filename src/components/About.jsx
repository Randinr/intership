import React from "react";
import { motion } from "framer-motion"; // Importing motion from framer-motion
import AMBULAN from "../img/semprot.jpg";
import SERTI1 from "../img/serti1.jpg";
import SERTI2 from "../img/serti2.jpg";
import SERTI3 from "../img/serti3.jpg";
import SERTI4 from "../img/serti4.jpg";
import SERTI5 from "../img/serti5.jpg";
import SERTI6 from "../img/serti6.jpg";
import SERTI7 from "../img/serti7.jpg";
import SERTI8 from "../img/serti8.jpg";
import SERTI9 from "../img/serti9.jpg";
import SERTI10 from "../img/serti10.jpg";
import SERTI11 from "../img/serti11.jpg";
import SERTI12 from "../img/serti12.jpg";
import SERTI13 from "../img/serti13.jpg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section className="w-full px-4 md:px-16">
      <div className="relative overflow-x-auto mt-6 w-full">
        <motion.img
          src={AMBULAN}
          alt="Image 1"
          className="w-full h-auto object-cover rounded-lg"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        />
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/5 bg-gray-600 bg-opacity-30 rounded-l-lg"></div>
        <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-32">
          <motion.p
            className="text-blue-100 text-2xl sm:text-4xl font-bold px-4 py-2 rounded-lg"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            Sejarah Perusahaan
          </motion.p>
        </div>
      </div>

      <div className="py-12 flex-1 flex flex-col items-start justify-center gap-3">
        <motion.div
          className="flex items-center gap-2 justify-center bg-blue-100 px-4 py-1 rounded-full"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <p className="text-base text-blue-500 font-semibold">
            PT. Delimajaya Karoseri
          </p>
        </motion.div>
      </div>

      <div>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <p className="text-black text-2xl sm:text-3xl md:text-4xl font-bold px-4 rounded-lg">
            About Delimajaya Karoseri
          </p>
          <p className="text-black text-sm sm:text-lg font-semibold px-4 py-2 rounded-lg">
            Karoseri Delima Jaya - Grup Delimajaya
          </p>
          <p className="text-black text-sm sm:text-lg font-normal px-4 py-2 rounded-lg">
            Delima Jaya Group is a leading manufacturing company specializing in vehicle bodyworks (karoseri) and engineering, based in Bogor, Indonesia. Established decades ago, we have become a key player in the Indonesian karoseri industry, known for our commitment to quality, innovation, and customer satisfaction. We continually expand to provide the best solutions in vehicle body manufacturing and engineering services. <br /><br />
            We cater to a wide range of transportation needs, from buses and trucks to specialized vehicles like ambulances and fire trucks. At Delima Jaya, we strive to maintain strong relationships with our clients and business partners while contributing to the development of environmentally friendly technology through innovations in electric vehicles and sustainable materials.
          </p>
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-black text-2xl sm:text-3xl md:text-4xl font-bold px-4 py-5 rounded-lg"
        >
          History of Delima Jaya
        </motion.p>

        {/* History paragraphs */}
        {[
          {
            year: "1976 - The Founding",
            text: "Delima Jaya was founded in 1976 by visionary entrepreneurs aiming to provide high-quality transportation solutions in Indonesia. Initially, the company focused on producing basic bodyworks for local trucks and buses."
          },
          {
            year: "1980s - Expansion and Innovation",
            text: "In the 1980s, Delima Jaya experienced significant growth, expanding the types of vehicles produced and upgrading production facilities. The company began receiving orders from both government and private sectors for specialized vehicles such as ambulances and commercial transport vehicles."
          },
          {
            year: "1990s - Product Diversification",
            text: "During the 1990s, Delima Jaya underwent major diversification by entering new sectors such as fire trucks, mobile laboratories, and heavy machinery. The company also formed partnerships with international collaborators to enhance production capacity and technological capabilities."
          },
          {
            year: "2000s - Focus on Environmentally Friendly Technology",
            text: "Responding to global demands for more sustainable practices, Delima Jaya began developing bodyworks for electric vehicles and incorporating more sustainable materials into its manufacturing processes. During this period, the company also invested in automation technologies to increase production efficiency."
          },
          {
            year: "2020s - Industry Leadership",
            text: "Delima Jaya has continued to grow into one of the leaders in the Indonesian karoseri industry. With an expanding market reach, including international projects, the company plays a significant role in large-scale public transportation and specialized vehicle projects. Our commitment to innovation and sustainability remains a central focus."
          },
        ].map((history, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="mb-3"
          >
            <p className="text-black text-sm sm:text-lg font-semibold px-4 py-2 rounded-lg">
              {history.year}
            </p>
            <p className="text-black text-sm sm:text-lg font-normal px-4 py-1 rounded-lg">
              {history.text}
            </p>
          </motion.div>
        ))}

        {/* Vision & Mission */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-black text-2xl sm:text-3xl md:text-4xl font-bold px-4 py-5 rounded-lg"
        >
          Vision & Mission
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-black text-sm sm:text-lg font-semibold px-4 py-1 rounded-lg"
        >
          Vision
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-black text-sm sm:text-lg font-normal px-4 py-1 rounded-lg"
        >
          To be the most renowned and reputable vehicle manufacturer, metal fabricator and automotive assembler in Indonesia, with a strong financial foundation and excellent quality products offered at a very competitive price.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-black text-sm sm:text-lg font-semibold px-4 py-2 rounded-lg"
        >
          Mission
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-black text-sm sm:text-lg font-normal px-4 py-2 rounded-lg"
        >
          To improve product quality continuously and maintain customers' trust by having a solid team work and sustainable management system.
        </motion.p>

        {/* Our Values section */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-black text-2xl sm:text-3xl md:text-4xl font-bold px-4 py-5 rounded-lg"
        >
          Our Values
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-black text-sm sm:text-lg font-normal px-4 py-2 rounded-lg"
        >
          <ul className="list-disc list-inside space-y-2 pl-5">
            <li><span className="font-semibold">Innovation:</span> Continuously pushing the boundaries to deliver creative and efficient bodywork solutions.</li>
            <li><span className="font-semibold">Quality:</span> Committed to providing products that meet the highest standards of quality.</li>
            <li><span className="font-semibold">Sustainability:</span> Engaging in technologies and materials that support environmental preservation.</li>
            <li><span className="font-semibold">Customer Satisfaction:</span> Delivering services that meet and exceed customer expectations.</li>
          </ul>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-black text-sm sm:text-lg font-normal px-4 py-4 rounded-lg"
        >
          With over four decades of experience, <span className="font-semibold">Delimajaya</span> is proud to have contributed to the advancement of the automotive and transportation industries in Indonesia. We are committed to continuing our growth alongside our clients and business partners, working towards a brighter and more sustainable future.
        </motion.p>

        {/* Awards and Certificates Section */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-black text-2xl sm:text-3xl md:text-4xl font-bold px-4 py-8 rounded-lg"
        >
          Awards & Certificates
        </motion.p>

        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-5 gap-6 px-4">
          {[
            { src: SERTI1, alt: "ISO 9001:2015", label: "ISO 9001:2015 - Quality Management System" },
            { src: SERTI2, alt: "ISO 14001:2015", label: "ISO 14001:2015 - Environmental Management System" },
            { src: SERTI3, alt: "ISO 45001:2018", label: "ISO 45001:2018 - Occupational Health and Safety Management System" },
            { src: SERTI4, alt: "IATF 16949:2016", label: "IATF 16949:2016 - Automotive Quality Management System" },
            { src: SERTI5, alt: "IATF 16949:2016", label: "IATF 16949:2016 - Certificate of Recommendation from PT. Isuzu Astra Motor Indonesia" },
            { src: SERTI6, alt: "IATF 16949:2016", label: "NFPA" },
            { src: SERTI9, alt: "IATF 16949:2016", label: "" },
            { src: SERTI10, alt: "IATF 16949:2016", label: "" },
            { src: SERTI11, alt: "IATF 16949:2016", label: "" },
            { src: SERTI12, alt: "IATF 16949:2016", label: "" },
            { src: SERTI13, alt: "IATF 16949:2016", label: "" },
            { src: SERTI7, alt: "IATF 16949:2016", label: "" },
            { src: SERTI8, alt: "IATF 16949:2016", label: "" }
          ].map((cert, index) => (
            <motion.div
              className="flex flex-col items-center"
              key={index}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              variants={fadeInUp}
            >
              <img src={cert.src} alt={cert.alt} className="w-full h-auto object-cover rounded-lg" />
              <p className="text-center text-xs sm:text-base md:text-lg font-semibold mt-2">
                {cert.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
