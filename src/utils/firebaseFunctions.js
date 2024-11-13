// utils/firebaseFunctions.js
import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { firestore } from "../firebase.config";

// Functions for Food Items
export const saveCategoryProductItem = async (data) => {
  await setDoc(doc(firestore, "categoryProduct", `${Date.now()}`), data, {
    merge: true,
  });
};

export const getAllCategoryProductItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "categoryProduct"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};

// Functions for Product Items
export const saveProductItem = async (data) => {
  await setDoc(doc(firestore, "productItems", `${Date.now()}`), data, {
    merge: true,
  });
};

export const getAllProductItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "productItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
