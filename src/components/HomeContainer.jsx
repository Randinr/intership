// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getAllProductItems } from "../utils/firebaseFunctions";
// import RowHome from "./RowHome";
// import { motion } from "framer-motion";
// import Blibli from "../img/blibli.png";
// import Blibli1 from "../img/blibli1.png";
// import Blibli2 from "../img/blibli2.png";

// const HomeContainer = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [products, setProducts] = useState([]);
//   const slides = [Blibli1, Blibli2, Blibli];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getAllProductItems();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products: ", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <section className="w-full pt-8">
//       {/* Slideshow Container */}
//       <div className="relative w-full max-w-10xl h-[292px] mx-auto overflow-hidden rounded-[50px] flex items-center">
//         {slides.map((slide, index) => {
//           const offsetIndex = (index - slideIndex + slides.length) % slides.length;
//           return (
//             <div
//               key={index}
//               className={`absolute w-[80%] h-full transition-transform duration-1000 ease-in-out transform ${
//                 offsetIndex === 0
//                   ? "translate-x-0 scale-100 opacity-100 z-10"
//                   : offsetIndex === 1
//                   ? "translate-x-full scale-75 opacity-50 z-0"
//                   : "translate-x-[-100%] scale-75 opacity-50 z-0"
//               }`}
//             >
//               <img
//                 src={slide}
//                 alt={`Slide ${index + 1}`}
//                 className="object-cover w-full h-full rounded-[30px]"
//               />
//             </div>
//           );
//         })}

//         {/* Navigation Buttons */}
//         <button
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 z-20"
//           onClick={() => setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}
//         >
//           ❮
//         </button>
//         <button
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 z-20"
//           onClick={() => setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length)}
//         >
//           ❯
//         </button>
//       </div>

//       {/* Other sections */}
//       <div className="py-12 px-6 md:px-16 flex flex-col items-start justify-center gap-12">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//           transition={{ duration: 0.5 }}
//           className="flex items-center gap-2 justify-center bg-blue-100 px-4 py-1 rounded-full"
//         >
//           <p className="text-base text-blue-500 font-semibold">PT. Delimajaya Karoseseri</p>
//         </motion.div>

//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl md:text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor text-center md:text-left"
//         >
//           DelimaJaya <span className="text-blue-600 text-4xl md:text-[3rem] lg:text-[5rem]">Group</span>
//         </motion.p>

//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//           transition={{ duration: 0.5 }}
//           className="text-sm md:text-base text-textColor text-center md:text-left md:w-[80%]"
//         >
//           <br />Since 1975 - Best Value For Business! Strategically located at the heart of Bogor City, Delimajaya Group
//           is the quintessential carrosserie industry in Indonesia.
//         </motion.p>

//         <Link to="/about">
//           <motion.button
//             type="button"
//             className="bg-gradient-to-br from-blue-400 to-blue-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
//             initial="hidden"
//             whileInView="visible"
//             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//             transition={{ duration: 0.5 }}
//           >
//             Read More..
//           </motion.button>
//         </Link>
//         grid grid-cols-6 grid-rows-6 gap-10 mb-4
//         <div className="grid grid-cols-6 grid-rows-5 gap-10">
//           {/* Main Section - spans 2 columns and 4 rows */}
//           <motion.div
//             className="col-span-2 row-span-4 bg-gray-800 text-white p-16 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-2xl font-bold">Main Feature</h2>
//             <p className="mt-2 text-lg">
//               This section could hold the main feature or a larger piece of content.
//             </p>
//             <button className="mt-4 px-8 py-4 bg-white text-gray-800 rounded-lg text-lg transition transform hover:scale-105 hover:bg-gray-300">
//               Learn More
//             </button>
//           </motion.div>

//           {/* Smaller Feature Sections */}
//           <motion.div
//             className="row-span-2 col-start-3 bg-gray-700 text-white p-12 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <h3 className="font-semibold text-lg">Feature 1</h3>
//             <p className="text-sm">Brief description of this feature.</p>
//           </motion.div>

//           <motion.div
//             className="row-span-2 col-start-4 bg-gray-700 text-white p-12 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h3 className="font-semibold text-lg">Feature 2</h3>
//             <p className="text-sm">Brief description of this feature.</p>
//           </motion.div>

//           <motion.div
//             className="row-span-2 col-start-5 bg-gray-700 text-white p-12 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <h3 className="font-semibold text-lg">Feature 3</h3>
//             <p className="text-sm">Brief description of this feature.</p>
//           </motion.div>

//           {/* Lower Row Features */}
//           <motion.div
//             className="row-span-2 col-start-3 row-start-3 bg-gray-700 text-white p-12 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <h3 className="font-semibold text-lg">Feature 4</h3>
//             <p className="text-sm">Brief description of this feature.</p>
//           </motion.div>

//           <motion.div
//             className="row-span-2 col-start-4 row-start-3 bg-gray-700 text-white p-12 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h3 className="font-semibold text-lg">Feature 5</h3>
//             <p className="text-sm">Brief description of this feature.</p>
//           </motion.div>

//           <motion.div
//             className="row-span-2 col-start-5 row-start-3 bg-gray-700 text-white p-12 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <h3 className="font-semibold text-lg">Feature 6</h3>
//             <p className="text-sm">Brief description of this feature.</p>
//           </motion.div>

//           {/* Side Features */}
//           <motion.div
//             className="row-span-2 col-start-6 row-start-1 bg-gray-700 text-white p-12 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <h3 className="font-semibold text-lg">Feature 7</h3>
//             <p className="text-sm">Brief description of this feature.</p>
//           </motion.div>

//           <motion.div
//             className="row-span-2 col-start-6 row-start-3 bg-gray-700 text-white p-12 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h3 className="font-semibold text-lg">Feature 8</h3>
//             <p className="text-sm">Brief description of this feature.</p>
//           </motion.div>
//         </div>
//         <div>
//           <motion.div
//             className="flex items-center gap-2 sm:gap-4 mb-4"
//             initial="hidden"
//             whileInView="visible"
//             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="p-1 sm:p-2 lg:p-4 text-lg sm:text-xl lg:text-2xl bg-gray-100 font-bold text-black rounded-lg shadow-lg">
//               Stories Delima Jaya
//             </h1>
//           </motion.div>
//           {/* Use RowContainer to display the products */}
//           <RowHome data={products} itemsPerPage={4} />
//         </div>
//       </div>
      
//     </section>
//   );
// };

// export default HomeContainer;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getAllProductItems } from "../utils/firebaseFunctions";
// import RowHome from "./RowHome";
// import { motion } from "framer-motion";
// import Blibli from "../img/blibli.png";
// import Blibli1 from "../img/blibli1.png";
// import Blibli2 from "../img/blibli2.png";
// import { FaCogs, FaTruck, FaTools, FaGem, FaIndustry, FaShippingFast, FaPaintBrush, FaWrench, FaHandshake } from 'react-icons/fa';

// const HomeContainer = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [products, setProducts] = useState([]);
//   const slides = [Blibli1, Blibli2, Blibli];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getAllProductItems();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products: ", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <section className="w-full pt-8">
//       {/* Slideshow Container */}
//       <div className="relative w-full max-w-10xl h-[292px] mx-auto overflow-hidden rounded-[50px] flex items-center">
//         {slides.map((slide, index) => {
//           const offsetIndex = (index - slideIndex + slides.length) % slides.length;
//           return (
//             <div
//               key={index}
//               className={`absolute w-[80%] h-full transition-transform duration-1000 ease-in-out transform ${
//                 offsetIndex === 0
//                   ? "translate-x-0 scale-100 opacity-100 z-10"
//                   : offsetIndex === 1
//                   ? "translate-x-full scale-75 opacity-50 z-0"
//                   : "translate-x-[-100%] scale-75 opacity-50 z-0"
//               }`}
//             >
//               <img
//                 src={slide}
//                 alt={`Slide ${index + 1}`}
//                 className="object-cover w-full h-full rounded-[30px]"
//               />
//             </div>
//           );
//         })}

//         {/* Navigation Buttons */}
//         <button
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 z-20"
//           onClick={() => setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}
//         >
//           ❮
//         </button>
//         <button
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 z-20"
//           onClick={() => setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length)}
//         >
//           ❯
//         </button>
//       </div>

//       {/* Other sections */}
//       <div className="py-12 px-6 md:px-16 flex flex-col items-start justify-center gap-12">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//           transition={{ duration: 0.5 }}
//           className="flex items-center gap-2 justify-center bg-blue-100 px-4 py-1 rounded-full"
//         >
//           <p className="text-base text-blue-500 font-semibold">PT. Delimajaya Karoseseri</p>
//         </motion.div>

//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl md:text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor text-center md:text-left"
//         >
//           DelimaJaya <span className="text-blue-600 text-4xl md:text-[3rem] lg:text-[5rem]">Group</span>
//         </motion.p>

//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//           transition={{ duration: 0.5 }}
//           className="text-sm md:text-base text-textColor text-center md:text-left md:w-[80%]"
//         >
//           <br />Since 1975 - Best Value For Business! Strategically located at the heart of Bogor City, Delimajaya Group
//           is the quintessential carrosserie industry in Indonesia.
//         </motion.p>

//         <Link to="/about">
//           <motion.button
//             type="button"
//             className="bg-gradient-to-br from-blue-400 to-blue-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
//             initial="hidden"
//             whileInView="visible"
//             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//             transition={{ duration: 0.5 }}
//           >
//             Read More..
//           </motion.button>
//         </Link>

//         {/* Services Section */}
//         <div className="grid grid-cols-6 grid-rows-5 gap-10"> {/* Reduced margin-bottom to mb-4 */}
//           {/* Main Section - spans 2 columns and 2 rows */}
         
//           {/* Feature Sections  */}
//           {/* { feature: "Heavy Equipment Cabin Operator", icon: <FaWrench />, description: "" }, */}
//           {[
//             { feature: "Carrosserie Industry", icon: <FaCogs /> },
//             { feature: "Metalworks Fabrication", icon: <FaTruck /> },
//             { feature: "Assembly Plant for Truck and Bus", icon: <FaTools /> },
//             { feature: "Seat Manufacturer", icon: <FaGem /> },
//             { feature: "Body Repair and Paint", icon: <FaIndustry /> },
//             { feature: "VIP Interior and Special Project", icon: <FaShippingFast /> },
//             { feature: "Armored Vehicles and VIP Cars", icon: <FaPaintBrush /> },
//             { feature: "Heavy Equipment Cabin Operator", icon: <FaWrench />},
//           ].map((service, index) => (
//             <motion.div
//               key={service.feature}
//               className=" bg-blue-200 text-black p-6 rounded-lg shadow-pop-br shadow-pop-bl transform transition duration-300 hover:scale-105"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileTap={{ scale: 0.95 }}
//               transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
//             >
//               {/* Icon with Animation */}
//               <motion.div
//                 className="flex justify-center mb-4 text-3xl text-blue-600"
//                 initial={{ scale: 0 }}
//                 whileInView={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
//                 transition={{ type: "spring", stiffness: 300, damping: 10 }}
//               >
//                 {service.icon}
//               </motion.div>
//               <h3 className="text-lg font-bold text-center">{service.feature}</h3>
//               <p className="text-sm mt-2 text-center">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>


//         <div className="mt-2">
//           <motion.div
//             className="flex items-center gap-2 sm:gap-4 mb-4"
//             initial="hidden"
//             whileInView="visible"
//             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="p-1 sm:p-2 lg:p-4 text-lg sm:text-xl lg:text-2xl bg-gray-100 font-bold text-black rounded-lg shadow-lg">
//               Stories Delima Jaya
//             </h1>
//           </motion.div>
//           {/* Use RowContainer to display the products */}
//           <RowHome data={products} itemsPerPage={4} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeContainer;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProductItems } from "../utils/firebaseFunctions";
import RowHome from "./RowHome";
import { motion } from "framer-motion";
import Blibli from "../img/blibli.png";
import Blibli1 from "../img/blibli1.png";
import Blibli2 from "../img/logong.jpeg";
import { FaCogs, FaTruck, FaTools, FaGem, FaIndustry, FaShippingFast, FaPaintBrush, FaWrench, FaHandshake } from 'react-icons/fa';
import { GiBus, GiCarSeat, GiBulldozer } from "react-icons/gi";
import { TfiPaintBucket } from "react-icons/tfi";
import { IoCarSportSharp } from "react-icons/io5";
import { AiFillCar } from "react-icons/ai";

const HomeContainer = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const slides = [Blibli1, Blibli2, Blibli];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProductItems();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Reusable Service Section Component
  const ServiceCard = ({ icon, title, description }) => (
    <motion.div
      className="bg-blue-200 text-black p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex justify-center mb-4 text-3xl text-blue-600"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-bold text-center">{title}</h3>
      <p className="text-sm mt-2 text-center">{description}</p>
    </motion.div>
  );

  return (
    <section className="w-full pt-8">
      {/* Slideshow Container */}
      <div className="relative w-full max-w-10xl h-[292px] mx-auto overflow-hidden rounded-[50px] flex items-center">
        {slides.map((slide, index) => {
          const offsetIndex = (index - slideIndex + slides.length) % slides.length;
          return (
            <div
              key={index}
              className={`absolute w-[80%] h-full transition-transform duration-1000 ease-in-out transform ${
                offsetIndex === 0
                  ? "translate-x-0 scale-100 opacity-100 z-10"
                  : offsetIndex === 1
                  ? "translate-x-full scale-75 opacity-50 z-0"
                  : "translate-x-[-100%] scale-75 opacity-50 z-0"
              }`}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full rounded-[30px]"
              />
            </div>
          );
        })}

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 z-20"
          onClick={() => setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 z-20"
          onClick={() => setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length)}
        >
          ❯
        </button>
      </div>

      {/* Other sections */}
      <div className="py-12 px-6 md:px-16 flex flex-col items-start justify-center gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 justify-center bg-blue-100 px-4 py-1 rounded-full"
        >
          <p className="text-base text-blue-500 font-semibold">PT. Delimajaya Karoseseri</p>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor text-center md:text-left"
        >
          DelimaJaya <span className="text-blue-600 text-4xl md:text-[3rem] lg:text-[5rem]">Group</span>
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
          className="text-sm md:text-base text-textColor text-center md:text-left md:w-[80%]"
        >
          <br />Since 1975 - Best Value For Business! Strategically located at the heart of Bogor City, Delimajaya Group
          is the quintessential carrosserie industry in Indonesia.
        </motion.p>

        <Link to="/about">
          <motion.button
            type="button"
            className="bg-gradient-to-br from-blue-400 to-blue-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            initial="hidden"
            whileInView="visible"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
          >
            Read More..
          </motion.button>
        </Link>

        <motion.div
  className="font-semibold text-4xl px-5 mx-auto text-center"
  initial="hidden"
  whileInView="visible"
  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
  transition={{ duration: 0.5 }}
>
  <h1 className="text-shadow-only">
    Our Services
  </h1>
</motion.div>


       {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-4">
          {/* Card 1 */}
          <motion.div
            className="bg-blue-200 text-black p-7 rounded-lg shadow-pop-br shadow-pop-bl transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex justify-center mb-4 text-3xl text-blue-600"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FaIndustry  />
            </motion.div>
            <h3 className="text-lg font-semibold text-center">Carrosserie Industry</h3>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-blue-200 text-black p-7 rounded-lg shadow-pop-br shadow-pop-bl transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex justify-center mb-4 text-3xl text-blue-600"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FaTruck />
            </motion.div>
            <h3 className="text-lg font-semibold text-center">Metalworks Fabrication</h3> 
          </motion.div>

          {/* Card 6 */}
          <motion.div
            className="bg-blue-200 text-black p-7 rounded-lg shadow-pop-br shadow-pop-bl transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex justify-center mb-4 text-3xl text-blue-600"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <TfiPaintBucket />
            </motion.div>
            <h3 className="text-lg font-semibold text-center">Body Repair and Paint</h3> 
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-blue-200 text-black p-7 rounded-lg shadow-pop-br shadow-pop-bl transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex justify-center mb-4 text-3xl text-blue-600"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <GiCarSeat /> 
            </motion.div>
            <h3 className="text-lg font-semibold text-center">Seat Manufacturer</h3>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="bg-blue-200 text-black p-7 rounded-lg shadow-pop-br shadow-pop-bl transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex justify-center mb-4 text-5xl text-blue-600" // Updated size to text-5xl for larger icon
              initial={{ scale: 0 }}
              whileInView={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <GiBulldozer />
            </motion.div>
            <h3 className="text-lg font-semibold text-center">Heavy Equipment Cabin Operator</h3>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-blue-200 text-black p-7 rounded-lg shadow-pop-br shadow-pop-bl transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex justify-center mb-4 text-5xl text-blue-600" // Adjusted size to text-5xl
              initial={{ scale: 0 }}
              whileInView={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <GiBus />
            </motion.div>
            <h3 className="text-lg font-semibold text-center">Assembly Plant for Truck and Bus</h3>
          </motion.div>


          {/* Card 7 */}
          <motion.div
            className="bg-blue-200 text-black p-7 rounded-lg shadow-pop-br shadow-pop-bl transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex justify-center mb-4 text-3xl text-blue-600"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <IoCarSportSharp  /> 
            </motion.div>
            <h3 className="text-lg font-semibold text-center">VIP Interior and Special Project</h3>
          </motion.div>

          {/* Card 8 */}
          <motion.div
            className="bg-blue-200 text-black p-7 rounded-lg shadow-pop-br shadow-pop-bl transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex justify-center mb-4 text-3xl text-blue-600"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <AiFillCar />
            </motion.div>
            <h3 className="text-lg font-semibold text-center">Armored Vehicles and VIP Cars</h3> 
          </motion.div>
        </div>

        {/* Stories Section */}
        <div className="mt-2">
          <motion.div
            className="flex items-center gap-2 sm:gap-4 mb-4"
            initial="hidden"
            whileInView="visible"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="p-1 sm:p-2 lg:p-4 text-lg sm:text-xl lg:text-2xl bg-gray-100 font-bold text-black rounded-lg shadow-lg">
              Stories Delima Jaya
            </h1>
          </motion.div>
          {loading ? <div>Loading...</div> : <RowHome data={products} itemsPerPage={4} />}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;


