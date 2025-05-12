import React, { useState } from "react";
import { editProduct } from "../../features/product/productSlice";
import { useDispatch } from "react-redux";
const EditProduct = (props) => {
  const dispatch = useDispatch();

  const { setVisibleEdit, hundleGetProducts, product, actionType } = props;
  console.log(actionType);
  const [formEdit, setFormEdit] = useState(product);
  const [file, setFile] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("id", formEdit._id);
    fd.append("designation", formEdit.designation);
    fd.append("prix", formEdit.prix);
    fd.append("description", formEdit.description);
    fd.append("fileUrl", formEdit.fileUrl);
    fd.append("files", file);

    console.log([...fd]);
    dispatch(editProduct(formEdit))
      .then((res) => {
        console.log(res);
        setVisibleEdit(false);
        hundleGetProducts();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" shadow-lg bg-white h-screen w-96 p-1 absolute top-0 right-0">
      <div className="flex gap-2 items-baseline bg-slate-300 p-1 shadow border-b border-b-slate-950">
        <button
          onClick={() => setVisibleEdit(false)}
          title=" fermer "
          className=" mx-1 hover: text-red-800 "
        >
          X
        </button>
        <h1 className="text-lg">
          {actionType == "editer" ? "Editer" : "Voir"} produit
        </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="p-2  px-3 mt-4 space-y-2">
          <div className="space-y-1">
            <label className="block font-semibold ">Designation </label>
            <input
              disabled={actionType == "voir"}
              value={formEdit.designation}
              onChange={(e) =>
                setFormEdit({
                  ...formEdit.formEdit,
                  designation: e.target.value,
                })
              }
              name="designation"
              id="designation "
              className=" rounded bg-slate-100 p-1 w-full border border-gray-500"
            />
          </div>
          <div className="space-y-1">
            <label className="block font-semibold ">Prix </label>
            <input
              disabled={actionType == "voir"}
              value={formEdit.prix}
              onChange={(e) =>
                setFormEdit({ ...formEdit.formEdit, prix: e.target.value })
              }
              name="prix"
              id="prix "
              className=" rounded bg-slate-100 p-1 w-full border border-gray-500"
            />
          </div>
          <div className="space-y-1">
            <label className="block font-semibold ">Description</label>
            <textarea
              disabled={actionType == "voir"}
              value={formEdit.description}
              onChange={(e) =>
                setFormEdit({
                  ...formEdit.formEdit,
                  description: e.target.value,
                })
              }
              name="description"
              rows={3}
              id="description  "
              className=" rounded bg-slate-100 p-1 w-full border border-gray-500"
            />
          </div>
          {actionType == "editer" && (
            <div>
              <input
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                type="file"
                name="file"
              ></input>
            </div>
          )}
          <div
            className="py-4
          "
          >
            <img
              className=" h-20 inline-block "
              src={import.meta.env.VITE_API_BACKEND + formEdit.fileUrl}
            ></img>
          </div>
          {actionType == "editer" && (
            <div className=" flex justify-end gap-2 items-center mt-3 pt-3 ">
              <button
                type="reset"
                className="bg-white  hover:bg-slate-500 border px-2 p-1 rounded"
              >
                Annuler
              </button>

              <button
                type="submit"
                className="bg-orange-400 hover:bg-slate-400 text-white rounded px-2 p-1 "
              >
                Modifier
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
