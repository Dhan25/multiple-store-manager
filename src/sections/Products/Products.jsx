import React, { useState, useEffect } from "react";

const Products = () => {
  const initialStores = JSON.parse(localStorage.getItem("stores")) || [];
  const [stores, setStores] = useState(initialStores);
  const [storeName, setStoreName] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [storeProducts, setStoreProducts] = useState("");
  const [storePhoneNumber, setStorePhoneNumber] = useState("");
  const [storeEmail, setStoreEmail] = useState("");
  const [storeOwner, setStoreOwner] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    // Save stores to local storage whenever it changes
    localStorage.setItem("stores", JSON.stringify(stores));
  }, [stores]);

  const validateFields = () => {
    if (
      storeOwner.trim() === "" ||
      storeName.trim() === "" ||
      storeLocation.trim() === "" ||
      storeProducts.trim() === "" ||
      storePhoneNumber.trim() === "" ||
      storeEmail.trim() === ""
    ) {
      setError("All fields are required.");
      return false;
    }
    return true;
  };

  const addStore = () => {
    // Add Store
    if (!validateFields()) return;

    const newStore = {
      name: storeName,
      location: storeLocation,
      products: storeProducts,
      phoneNumber: storePhoneNumber,
      owner: storeOwner,
      email: storeEmail,
    };

    if (editingIndex !== null) {
      stores[editingIndex] = newStore;
      setEditingIndex(null);
    } else {
      setStores([...stores, newStore]);
    }

    // Clear input fields and remove error message
    setStoreOwner("");
    setStoreName("");
    setStoreLocation("");
    setStoreProducts("");
    setStorePhoneNumber("");
    setStoreEmail("");
    setError("");
  };

  // Edit Store
  const editStore = (index) => {
    const store = stores[index];
    setStoreName(store.name);
    setStoreLocation(store.location);
    setStoreProducts(store.products);
    setStorePhoneNumber(store.phoneNumber);
    setStoreOwner(store.owner);
    setStoreEmail(store.email);
    setEditingIndex(index);
  };

  // Delete the store
  const handleDeleteStore = (index) => {
    if (confirmDelete) {
      const newStores = [...stores];
      newStores.splice(index, 1);
      setStores(newStores);
      setConfirmDelete(false);
    } else {
      setConfirmDelete(true);
    }
  };

  return (
    <div id="products" className="xl:px-32 xl:py-12 h-screen w-full md:px-12 px-5">
      <div className="flex items-center justify-center md:justify-start">
        <h1 className="mb-3 mt-5">Stores</h1>
      </div>
      <div className="container">
        <ul className="grid mx-auto xl:grid-cols-3 items-center gap-6 md:grid-cols-2 grid-cols-1 p-5 border-2 shadow-md mb-5 rounded-md">
          {stores.map((store, index) => (
            <li
              key={index}
              className="flex flex-col bg-slate-50 h-fit p-5 rounded-lg shadow-md gap-2"
            >
              <span>Owner Name: {store.owner}</span>
              <span>Store Name: {store.name}</span>
              <span>Location: {store.location}</span>
              <span>Products: {store.products}</span>
              <span>Phone Number: {store.phoneNumber}</span>
              <span>Store E-mail: {store.email}</span>
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => editStore(index)}
                  className="bg-green-600 px-4 py-1 rounded-md text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteStore(index)}
                  className="bg-red-700 px-4 py-1 rounded-md text-white"
                >
                  {confirmDelete ? "Confirm" : "Delete"}
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div class="flex flex-col text-center w-full h-fit border-2 p-3 rounded-lg shadow-lg bg-white">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Add - Edit Store
          </h1>
          <div class="xl:w-11/12 md:w-11/12 mx-auto p-5 mb-5">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Store Owner"
                    value={storeOwner}
                    onChange={(e) => setStoreOwner(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Store Name"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Store Location"
                    value={storeLocation}
                    onChange={(e) => setStoreLocation(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Store Products"
                    value={storeProducts}
                    onChange={(e) => setStoreProducts(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={storePhoneNumber}
                    onChange={(e) => setStorePhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                <input
                    type="text"
                    placeholder="Store E-mail"
                    value={storeEmail}
                    onChange={(e) => setStoreEmail(e.target.value)}
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <button onClick={addStore} className="px-10 py-2 bg-bg-color text-white rounded text-lg tracking-normal">
                  {editingIndex !== null ? "Edit" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Products;
