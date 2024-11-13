import React from 'react';
import { motion } from 'framer-motion';
import l1 from "../img/1.jpg";
import l2 from "../img/2.jpg";
import l3 from "../img/3.jpg";
import l4 from "../img/4.jpg";
import l5 from "../img/5.jpg";
import l6 from "../img/6.jpg";
import l7 from "../img/7.jpg";
import l8 from "../img/8.jpg";
import l9 from "../img/9.jpg";
import l10 from "../img/10.jpg";
import l11 from "../img/11.jpg";
import l12 from "../img/12.jpg";
import l13 from "../img/13.jpg";
import l14 from "../img/14.jpg";
import l15 from "../img/15.jpg";
import l16 from "../img/16.jpg";
import l17 from "../img/17.jpg";
import l18 from "../img/18.jpg";
import l19 from "../img/19.jpg";
import l20 from "../img/20.jpg";
import l21 from "../img/21.jpg";
import l22 from "../img/22.jpg";
import l23 from "../img/23.jpg";
import l24 from "../img/24.jpg";
import l25 from "../img/25.jpg";
import l26 from "../img/26.jpg";
import l27 from "../img/27.jpg";
import l28 from "../img/28.jpg";
import l29 from "../img/29.jpg";
import l30 from "../img/30.jpg";
import l31 from "../img/31.jpg";
import l32 from "../img/32.jpg";
import l33 from "../img/33.jpg";
import l34 from "../img/34.jpg";
import l35 from "../img/35.jpg";
import l36 from "../img/36.jpg";
import l37 from "../img/37.jpg";
import l38 from "../img/38.jpg";
import l39 from "../img/39.jpg";
import l40 from "../img/40.jpg";
import l41 from "../img/41.jpg";
import l42 from "../img/42.jpg";
import l43 from "../img/43.jpg";
import l44 from "../img/44.jpg";
import l45 from "../img/45.jpg";
import l46 from "../img/46.jpg";
import l47 from "../img/47.jpg";
import l48 from "../img/48.jpg";
import l49 from "../img/49.jpg";
import l50 from "../img/50.jpg";
import l51 from "../img/51.jpg";
import l52 from "../img/52.jpg";
import l53 from "../img/53.jpg";
import l54 from "../img/54.jpg";
import l55 from "../img/55.jpg";
import l56 from "../img/56.jpg";
import l57 from "../img/57.jpg";
import l58 from "../img/58.jpg";
import l59 from "../img/59.jpg";
import l60 from "../img/60.jpg";
import l61 from "../img/61.jpg";
import l62 from "../img/62.jpg";
import l63 from "../img/63.jpg";
import l64 from "../img/64.jpg";
import l65 from "../img/65.jpg";
import l66 from "../img/66.jpg";
import l67 from "../img/67.jpg";
import l68 from "../img/68.jpg";

const Service = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
        className='mt-6 p-4 bg-white shadow-lg'
      >
        {/* Section: PT Delimajaya Carrosserie Industry */}
        <div className="flex items-center gap-2 sm:gap-4 mb-4">
          <h1 className="p-1 sm:p-2 lg:p-4 text-lg sm:text-xl lg:text-2xl bg-gray-100 font-bold text-black rounded-lg shadow-lg">
            PT. Delimajaya Carrosserie Industry
          </h1>
        </div>
        <div className="mb-4">
          <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Karoseri Kendaraan:</h2>
          <p className="mt-1 text-xs sm:text-sm lg:text-base">
            Bus, Special Purpose Vehicle, Food Truck, Ambulance, Fire Truck, Dump Truck, Tow Truck, Manhauler, Defense Vehicle, Armored Vehicle, Delivery Truck, Mixer, Arm Roll, etc.
          </p>
          <p className="mt-2 text-xs sm:text-sm lg:text-base font-medium">Auto Body Manufacturer</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-8 gap-2 sm:gap-4 lg:gap-8 mt-4">
          {[l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19, l20, l21, l22, l23].map((imgSrc, index) => (
            <motion.img
              key={index}
              src={imgSrc}
              alt=""
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
        className='mt-3 p-4 bg-white shadow-lg'
      >
        {/* Section: PT Bahtera Putera Abadi */}
        <div className="flex items-center gap-2 sm:gap-4 mt-10 mb-4">
          <h1 className="p-1 sm:p-2 lg:p-4 text-lg sm:text-xl lg:text-2xl bg-gray-100 font-bold text-black rounded-lg shadow-lg">
            PT. Bahtera Putera Abadi
          </h1>
        </div>
        <div className="mb-4">
          <h2 className="text-sm sm:text-base lg:text-lg font-semibold">Metal Works Fabrication:</h2>
          <p className="mt-1 text-xs sm:text-sm lg:text-base">
            Operator Cabin, Safety Guard, Cover, Railing, Grapple, Bucket, Guide Track, etc.
          </p>
          <p className="mt-2 text-xs sm:text-sm lg:text-base font-medium">
            Engineering Project: Steel Structure | Seat Manufacturer: Bus, Train, Ship
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-8 gap-2 sm:gap-4 lg:gap-8 mt-4">
          {[l24, l25, l26, l27, l28, l29, l30, l31, l32, l33, l34, l35, l36, l37, l38, l39, l40, l41, l42, l43, l44, l45, l65, l66, l67, l68].map((imgSrc, index) => (
            <motion.img
              key={index}
              src={imgSrc}
              alt=""
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={fadeInUp}
        className='mt-3 p-4 bg-white shadow-lg'
      >
        {/* Section: PT Auto Assembler Indonesia */}
        <div className="flex items-center gap-2 sm:gap-4 mt-10 mb-4">
          <h1 className="p-1 sm:p-2 lg:p-4 text-lg sm:text-xl lg:text-2xl bg-gray-100 font-bold text-black rounded-lg shadow-lg">
            PT. Auto Assembler Indonesia
          </h1>
        </div>

        <div className="mb-4">
          <h2 className="text-sm sm:text-base lg:text-lg font-semibold">
            Assembly Plant for Automotive in CKD, DKD, IKD, and SKD format:
          </h2>
          <p className="mt-1 text-xs sm:text-sm lg:text-base font-medium">
            Truck, Bus, and Passenger Cars Process: Body Welding (Spot Welding), Automatic Jig, Engine Assembly, Painting, Trimming, Chassis, Final (TCF), Testing and Finishing Armored Cars: SUV and Sedan
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-8 gap-2 sm:gap-4 lg:gap-8 mt-4">
          {[l46, l47, l48, l49, l50, l51, l52, l53, l54, l55, l56, l57, l58, l59, l60, l61, l62, l63, l64].map((imgSrc, index) => (
            <motion.img
              key={index}
              src={imgSrc}
              alt=""
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
