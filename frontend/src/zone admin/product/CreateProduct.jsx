import React, { useState } from "react";
import { createProduct } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";
const CreateProduct = (props) => {
  const dispatch = useDispatch();
  const { setVisibleCreate, hundleGetProducts } = props;
  const [file, setFile] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(e.target.files);
    const fd = new FormData();
    fd.append("designation", e.target.designation.value);
    fd.append("prix", e.target.prix.value);
    fd.append("description", e.target.description.value);
    fd.append("file", file);

    console.log([...fd]);

    dispatch(createProduct(fd))
      .then((res) => {
        console.log(res);
        setVisibleCreate(false);
        hundleGetProducts();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" shadow-lg bg-white h-screen w-96 p-1 absolute top-0 right-0">
      <div className="flex gap-2 items-baseline bg-slate-300 p-1 shadow border-b border-b-slate-950">
        <button
          onClick={() => setVisibleCreate(false)}
          title=" fermer "
          className=" mx-1 hover: text-red-800 "
        >
          X
        </button>
        <h1 className="text-lg">Créer produit </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="p-2  px-3 mt-4 space-y-2">
          <div className="space-y-1">
            <label className="block font-semibold ">Designation </label>
            <input
              name="designation"
              id="designation "
              className=" rounded bg-slate-100 p-1 w-full border border-gray-500"
            />
          </div>
          <div className="space-y-1">
            <label className="block font-semibold ">Prix </label>
            <input
              name="prix"
              id="prix "
              className=" rounded bg-slate-100 p-1 w-full border border-gray-500"
            />
          </div>
          <div className="space-y-1">
            <label className="block font-semibold ">Description</label>
            <textarea
              name="description"
              rows={3}
              id="description  "
              className=" rounded bg-slate-100 p-1 w-full border border-gray-500"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              type="file"
              name="file"
              required
            ></input>
          </div>
          <div className=" flex justify-end gap-2 items-center mt-3 pt-3 ">
            <button
              type="reset"
              className="bg-white  hover:bg-slate-500 border px-2 p-1 rounded"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-900 text-white rounded px-2 p-1 "
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
