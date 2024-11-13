import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { categories } from "../utils/data";
import Loader from "./Loader";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase.config";
import { saveCategoryProductItem } from "../utils/firebaseFunctions";

const CreateContainer = () => {
  const [category, setCategory] = useState("Select Category");
  const [subcategory, setSubcategory] = useState("Select Subcategory");
  const [mediaAsset, setMediaAsset] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState(""); // State for description

  const selectedCategory = categories.find((cat) => cat.urlParamName === category);

  const uploadMedia = (e) => {
    setIsLoading(true);
    const mediaFile = e.target.files[0];
    const storageRef = ref(storage, `Media/${Date.now()}-${mediaFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, mediaFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${uploadProgress}% done`);
      },
      (error) => {
        console.error("Upload Error:", error);
        setFields(true);
        setMsg("Error while uploading: Try Again 🙇");
        setAlertStatus("danger");
        setIsLoading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setMediaAsset(downloadURL);
          setMediaType(mediaFile.type);
          setIsLoading(false);
          setFields(true);
          setMsg("Media uploaded successfully 😊");
          setAlertStatus("success");
          setTimeout(() => setFields(false), 4000);
        });
      }
    );
  };

  const deleteMedia = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, mediaAsset);
    deleteObject(deleteRef).then(() => {
      setMediaAsset(null);
      setMediaType(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Media deleted successfully 😊");
      setAlertStatus("success");
      setTimeout(() => setFields(false), 4000);
    }).catch((error) => {
      console.error("Delete Error:", error);
      setFields(true);
      setMsg("Error while deleting media: Try Again 🙇");
      setAlertStatus("danger");
      setIsLoading(false);
    });
  };

  const saveDetails = async () => {
    setIsLoading(true);
    if (!mediaAsset || category === "Select Category" || description === "") {
      setFields(true);
      setMsg("Required fields can't be empty");
      setAlertStatus("danger");
      setIsLoading(false);
      setTimeout(() => setFields(false), 4000);
      return;
    }

    const data = {
      id: `${Date.now()}`,
      mediaURL: mediaAsset,
      category,
      subcategory,
      mediaType,
      description, // Include description in the data
      qty: 1,
    };

    try {
      await saveCategoryProductItem(data);
      setIsLoading(false);
      setFields(true);
      setMsg("Data Uploaded successfully 😊");
      setAlertStatus("success");
      setTimeout(() => setFields(false), 4000);
      clearData();
    } catch (error) {
      console.error("Save Error:", error);
      setFields(true);
      setMsg("Error while uploading: Try Again 🙇");
      setAlertStatus("danger");
      setIsLoading(false);
      setTimeout(() => setFields(false), 4000);
    }
  };

  const clearData = () => {
    setMediaAsset(null);
    setMediaType(null);
    setCategory("Select Category");
    setSubcategory("Select Subcategory");
    setDescription(""); // Clear description field
  };

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === "danger" ? "bg-red-400 text-red-800" : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}

        {/* Category Selector */}
        <div className="w-full">
          <select
            onChange={(e) => {
              setCategory(e.target.value);
              setSubcategory("Select Subcategory");
            }}
            className="outline-none w-full text-base border-b-2 border-gray-300 p-2 rounded-md cursor-pointer"
          >
            <option value="Select Category">Select Category</option>
            {categories.map((item) => (
              <option key={item.id} value={item.urlParamName}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory Selector */}
        {selectedCategory?.subcategories?.length > 0 && (
          <div className="w-full">
            <select
              onChange={(e) => setSubcategory(e.target.value)}
              className="outline-none w-full text-base border-b-2 border-gray-300 p-2 rounded-md cursor-pointer"
            >
              <option value="Select Subcategory">Select Subcategory</option>
              {selectedCategory.subcategories.map((sub) => (
                <option key={sub.id} value={sub.name}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Description Input */}
        <div className="w-full">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description here"
            className="outline-none w-full text-base border-b-2 border-gray-300 p-2 rounded-md cursor-pointer"
          />
        </div>

        {/* Media Upload */}
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!mediaAsset ? (
                <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                    <p className="text-gray-500 hover:text-gray-700">Click here to upload</p>
                  </div>
                  <input
                    type="file"
                    name="uploadmedia"
                    accept="image/*,video/*"
                    onChange={uploadMedia}
                    className="w-0 h-0"
                  />
                </label>
              ) : (
                <div className="relative h-full">
                  {mediaType.includes("video") ? (
                    <video controls className="w-full h-full object-cover">
                      <source src={mediaAsset} type={mediaType} />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={mediaAsset} alt="uploaded media" className="w-full h-full object-cover" />
                  )}
                  <button
                    type="button"
                    className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                    onClick={deleteMedia}
                  >
                    <MdDelete className="text-white" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Save Button */}
        <div className="flex items-center w-full">
          <button
            type="button"
            className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
