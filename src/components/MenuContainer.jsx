import React, { useState, useEffect } from "react";
import { categories } from "../utils/data"; // Ensure `categories` is defined
import { useStateValue } from "../context/StateProvider";
import NotFound from "../img/NotFound.svg";

const MenuContainer = () => {
  const [{ foodItems }] = useStateValue();
  const [filter, setFilter] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetail, setShowDetail] = useState(false); // To control the display of item details
  const [showSlide, setShowSlide] = useState(false); // To control the slide display (carousel)
  const itemsPerPage = 8;

  // Set default filter and subcategories on component mount
  useEffect(() => {
    if (categories && categories.length > 0) {
      setFilter(categories[0].urlParamName);
      setSubcategories(categories[0].subcategories || []);
    }
  }, []);

  useEffect(() => {
    if (categories) {
      const currentCategory = categories.find((cat) => cat.urlParamName === filter);
      setSubcategories(currentCategory?.subcategories || []);
      setSelectedSubcategory("");
    }
  }, [filter]);

  // Filter the foodItems based on the selected category and subcategory
  const filteredData = foodItems
    ? foodItems.filter(
        (n) =>
          n.category === filter &&
          (selectedSubcategory ? n.subcategory === selectedSubcategory : true)
      )
    : [];

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openModal = (index) => {
    setSelectedMediaIndex(index);
    setShowSlide(true); // Open the slide (carousel) when an item is clicked
  };

  const closeModal = () => {
    setSelectedMediaIndex(null);
    setShowSlide(false); // Close the slide (carousel)
  };

  const openDetail = (index) => {
    setSelectedMediaIndex(index);
    setShowDetail(true); // Show the detail view for the clicked item
  };

  const closeDetail = () => setShowDetail(false);

  const selectedMedia =
    selectedMediaIndex !== null ? paginatedData[selectedMediaIndex] : null;

  // Function to go to the next media in the slide
  const nextMedia = () => {
    setSelectedMediaIndex((prevIndex) =>
      prevIndex < paginatedData.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Function to go to the previous media in the slide
  const prevMedia = () => {
    setSelectedMediaIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : paginatedData.length - 1
    );
  };

  return (
    <section className="flex w-full my-1 min-h-screen" id="menu">
      {/* Toggle Button for Sidebar */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-4 left-64 z-50 p-2 mt-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100"
        aria-controls="default-sidebar"
        type="button"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0="
          ></path>
        </svg>
      </button>

     {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 bg-white`}
      >
        <div className="px-3 py-28 sm:py-32 overflow-y-auto h-full">
          <ul className="space-y-2 font-medium">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => {
                    setFilter(category.urlParamName);
                    setSidebarOpen(false);  // Close sidebar when category is clicked
                  }}
                  className={`flex items-center p-2 font-semibold ${filter === category.urlParamName ? "text-blue-500" : ""} group`}
                >
                  <span
                    className={`flex-1 ms-3 whitespace-nowrap relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                      filter === category.urlParamName ? "after:w-full" : "after:w-0 group-hover:after:w-full"
                    }`}
                  >
                    {category.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 w-full sm:ml-64 p-2 min-h-screen">
       {/* Subcategory Selection */}
        {subcategories.length > 0 && (
          <div className="flex justify-center space-x-2 overflow-x-auto pb-2 whitespace-nowrap">
            <button
              onClick={() => setSelectedSubcategory("")}
              className={`px-3 py-1 rounded-full ${selectedSubcategory === "" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              All
            </button>
            {subcategories.map((subcat) => (
              <button
                key={subcat.id}
                onClick={() => setSelectedSubcategory(subcat.name)}
                className={`px-3 py-1 rounded-full ${selectedSubcategory === subcat.name ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                {subcat.name}
              </button>
            ))}
          </div>
        )}
        {/* Display Filtered Items with Border */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5">
          {paginatedData.length > 0 ? (
            paginatedData.map((item, index) => (
              <div
                key={item.id}
                className="article-container cursor-pointer flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 hover:shadow-lg hover:border-blue-500 transition duration-200 ease-in-out group"
                onClick={() => openModal(index)}
              >
                {/* Image or Video */}
                {item.mediaType.includes("video") ? (
                  <video className="w-full h-auto object-contain" controls muted>
                    <source src={item.mediaURL} type={item.mediaType} />
                  </video>
                ) : (
                  <img
                    src={item.mediaURL}
                    alt={item.title}
                    className="w-full h-auto object-contain"
                    onError={(e) => (e.target.src = NotFound)}
                  />
                )}

                {/* Title Text */}
                <p className="text-center mt-2 text-sm text-black">{item.title}</p>

                {/* Description Text Below Title, visible only on hover */}
                <p className="text-center mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description || "No description available."}
                </p>

                {/* Button (empty or custom action) */}
                <button
                  className="mt-2 text-blue-500"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent opening the modal on clicking the button
                    openDetail(index);
                  }}
                >
                  {/* Empty text to remove "View Details" */}
                </button>
              </div>
            ))
          ) : (
            <p>No items available.</p>
          )}
        </div>

        {/* Detail Modal */}
        {showDetail && selectedMedia && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-7xl w-full">
              <h3 className="text-2xl font-semibold">{selectedMedia.title}</h3>
              <p>{selectedMedia.description || "No description available."}</p>
              <button onClick={closeDetail} className="mt-4 text-blue-500">
                Close
              </button>
            </div>
          </div>
        )}

        {/* Media Slide (Carousel) */}
        {showSlide && selectedMedia && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-lg w-96">
              <div className="flex justify-between">
                <button onClick={prevMedia} className="text-blue-500">
                  Previous
                </button>
                <button onClick={nextMedia} className="text-blue-500">
                  Next
                </button>
              </div>
              <div className="flex justify-center items-center">
                {selectedMedia.mediaType.includes("video") ? (
                  <video className="w-full h-auto object-contain" controls>
                    <source src={selectedMedia.mediaURL} type={selectedMedia.mediaType} />
                  </video>
                ) : (
                  <img
                    src={selectedMedia.mediaURL}
                    alt={selectedMedia.title}
                    className="w-full h-auto object-contain"
                    onError={(e) => (e.target.src = NotFound)}
                  />
                )}
              </div>
              <button onClick={closeModal} className="mt-4 text-blue-500">
                Close
              </button>
            </div>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2 mt-5">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
            >
              Prev
            </button>
            <span className="px-3 py-2 text-lg">{currentPage}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuContainer;
