import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";

const RowHome = ({ data = [], scrollValue = 0, itemsPerPage = 8 }) => {
  const rowHome = useRef();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [previewMedia, setPreviewMedia] = useState(null); // For previewing media (image/video)
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    if (rowHome?.current) {
      rowHome.current.scrollLeft += scrollValue;
    }
  }, [scrollValue]);

  const openModal = (product) => {
    setSelectedProduct(product);
    setPreviewMedia(product.mediaAssets?.[0]); // Set initial preview media
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setPreviewMedia(null); // Reset preview media on close
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex p-4 md:p-8 lg:p-10 overflow-x-hidden box-border w-full">
      <div className="flex-1">
        <div
          ref={rowHome}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {paginatedData.length > 0 ? (
            paginatedData.map((product) => {
              const mainMedia = product.mediaAssets?.[0];
              const title = product.name || product.title;

              return (
                <div key={product.id} className="relative group">
                  <motion.div
                    className="w-full overflow-hidden rounded-lg shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => openModal(product)}
                  >
                    {mainMedia?.type.includes("video") ? (
                      <video
                        className="w-full h-[200px] object-cover"
                        muted
                        loop
                        autoPlay
                      >
                        <source src={mainMedia.url} type={mainMedia.type} />
                      </video>
                    ) : (
                      <img
                        src={mainMedia?.url || NotFound}
                        alt={title}
                        className="w-full h-[200px] object-cover"
                        onError={(e) => {
                          console.error("Error loading image:", e.target.src);
                          e.target.onerror = null;
                          e.target.src = NotFound;
                        }}
                      />
                    )}
                  </motion.div>
                  <div className="w-full flex flex-col items-center justify-center mt-2">
                    <p className="text-textColor font-semibold text-base md:text-lg text-center w-full">
                      {title}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-full flex flex-col items-center justify-center">
              <img src={NotFound} className="h-64" alt="Not Found" />
              <p className="text-xl text-headingColor font-semibold my-2">
                Items Not Available
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-center space-x-2 mt-5 flex-wrap">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={`w-10 h-10 rounded-full ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-y-auto">
          <div className="relative max-w-4xl w-full max-h-screen p-5 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row overflow-y-auto">
            <div className="flex-1">
              {/* Main Preview Media */}
              {previewMedia?.type.includes("video") ? (
                <video
                  controls
                  className="w-full h-[300px] lg:h-auto object-cover rounded-lg"
                >
                  <source src={previewMedia.url} type={previewMedia.type} />
                </video>
              ) : (
                <img
                  src={previewMedia?.url || NotFound}
                  alt="Preview"
                  className="w-full h-[300px] lg:h-auto object-cover rounded-lg"
                />
              )}
              {/* Thumbnail Images */}
              <div className="flex space-x-2 overflow-x-scroll mt-4">
                {selectedProduct.mediaAssets?.map((asset, index) => (
                  <div
                    key={index}
                    className="flex-none w-16 h-16 cursor-pointer"
                    onClick={() => setPreviewMedia(asset)}
                  >
                    {asset.type.includes("video") ? (
                      <video
                        className="w-full h-full object-cover rounded"
                        muted
                      >
                        <source src={asset.url} type={asset.type} />
                      </video>
                    ) : (
                      <img
                        src={asset.url}
                        alt="Product Media"
                        className="w-full h-full object-cover rounded"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = NotFound; // Fallback for thumbnail
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications and Description */}
            <div className="flex-1 p-4 overflow-y-auto">
              <button
                className="absolute top-3 right-3 text-red-600 font-bold"
                onClick={closeModal}
              >
                Close
              </button>
              <h2 className="text-2xl font-semibold mb-4">{selectedProduct.name || selectedProduct.title}</h2>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Specifications:</h3>
                <p>{selectedProduct.specification || "No specifications available"}</p>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold">Description:</h3>
                {/* Render the description as paragraphs */}
                {selectedProduct.description ? (
                  selectedProduct.description.split("\n").map((paragraph, index) => (
                    <p key={index} className="mt-2">{paragraph}</p>
                  ))
                ) : (
                  <p>No description available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RowHome;

