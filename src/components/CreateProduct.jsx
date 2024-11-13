













import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import Loader from "./Loader";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase.config";
import { saveProductItem } from "../utils/firebaseFunctions";

const CreateProduct = () => {
  const [mediaAssets, setMediaAssets] = useState([]);
  const [productName, setProductName] = useState("");
  const [specification, setSpecification] = useState("");
  const [description, setDescription] = useState("");
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadMedia = (e) => {
    setIsLoading(true);
    const files = Array.from(e.target.files);
    const uploadPromises = files.map((file) => {
      const storageRef = ref(storage, `Media/${Date.now()}-${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${uploadProgress}% done`);
          },
          (error) => {
            console.error(error);
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            resolve({ url: downloadURL, type: file.type });
          }
        );
      });
    });

    Promise.all(uploadPromises)
      .then((uploads) => {
        setMediaAssets((prevAssets) => [...prevAssets, ...uploads]);
        setIsLoading(false);
        setFields(true);
        setMsg("Media uploaded successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("Error while uploading files: ", error);
        setFields(true);
        setMsg("Error while uploading: Try Again 🙇");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      });
  };

  const deleteMedia = (url) => {
    setIsLoading(true);
    const deleteRef = ref(storage, url);
    deleteObject(deleteRef)
      .then(() => {
        setMediaAssets((prevAssets) => prevAssets.filter((asset) => asset.url !== url));
        setIsLoading(false);
        setFields(true);
        setMsg("Media deleted successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("Error deleting media: ", error);
        setFields(true);
        setMsg("Error while deleting: Try Again 🙇");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      });
  };

  const saveDetails = async () => {
    setIsLoading(true);
    try {
      if (mediaAssets.length === 0 || !productName || !specification || !description) {
        setFields(true);
        setMsg("All fields are required");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          mediaAssets: mediaAssets.map((asset) => ({ url: asset.url, type: asset.type })),
          title: productName,
          specification,
          description,
        };
        await saveProductItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Product saved successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
          clearData();
        }, 4000);
      }
    } catch (error) {
      console.error(error);
      setFields(true);
      setMsg("Error while saving: Try Again 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }
  };

  const clearData = () => {
    setMediaAssets([]);
    setProductName("");
    setSpecification("");
    setDescription("");
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

        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
          className="w-full px-4 py-2 border-b-2 border-gray-300 outline-none focus:border-emerald-600 text-lg"
        />

        <input
          type="text"
          value={specification}
          onChange={(e) => setSpecification(e.target.value)}
          placeholder="Specification"
          className="w-full px-4 py-2 border-b-2 border-gray-300 outline-none focus:border-emerald-600 text-lg"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full px-4 py-2 border-b-2 border-gray-300 outline-none focus:border-emerald-600 text-lg"
        />

        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                  <p className="text-gray-500 hover:text-gray-700">Click here to upload multiple images</p>
                </div>
                <input
                  type="file"
                  name="uploadMedia"
                  accept="image/*,video/*"
                  multiple
                  onChange={uploadMedia}
                  className="w-0 h-0"
                />
              </label>
              {mediaAssets.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {mediaAssets.map((asset, index) => (
                    <div key={index} className="relative w-24 h-24">
                      {asset.type.includes("video") ? (
                        <video
                          src={asset.url}
                          controls
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={asset.url}
                          alt="uploaded"
                          className="w-full h-full object-cover"
                        />
                      )}
                      <button
                        type="button"
                        className="absolute bottom-1 right-1 p-1 rounded-full bg-red-500 text-xs cursor-pointer"
                        onClick={() => deleteMedia(asset.url)}
                      >
                        <MdDelete className="text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <button
          type="button"
          className="w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
          onClick={saveDetails}
        >
          Upload Product
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;







