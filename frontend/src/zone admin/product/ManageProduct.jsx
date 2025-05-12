import { React } from "react";

import { Eye, Pencil, Trash, TriangleAlert } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  getProducts,
  deleteProduct,
} from "../../features/product/productSlice";
import { useEffect, useState } from "react";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import {
  notifyError,
  notifySuccess,
  notifyLoading,
} from "../../helpers/functions";
const ManageProducts = () => {
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibledelete, setVisibledelete] = useState(false);
  const [actionType, setactionType] = useState("editer");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const hundleGetProducts = (data) => {
    setLoading(true);
    dispatch(getProducts(data))
      .then((res) => {
        // console.log(res);

        if (res.payload.message) {
          console.log(res.payload.message);
        } else {
          setProducts(res.payload.products);
          //  notifyError("Error network");
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const data = e.target.search.value;
    hundleGetProducts(data);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
      .then((res) => {
        console.log(res.payload.message);
        if (res.payload.product) {
          notifySuccess("deletion with success");
          //   notifyLoading("Loading");
          setVisibledelete(false);

          hundleGetProducts();
        } else {
          setVisibledelete(false);

          notifyError();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
  };

  const createprops = {
    setVisibleCreate,
    hundleGetProducts,
  };

  const editprops = {
    setVisibleEdit,
    hundleGetProducts,
    product,
    actionType,
  };

  useEffect(() => {
    hundleGetProducts();
  }, []);
  return (
    <div className="px-3">
      <h1 className="text-2xl pt-2">Gestion Produits</h1>
      <div id="search" className="flex justify-between items-center mt-2">
        <form onSubmit={handleSearch}>
          <input
            name="search"
            type="search"
            placeholder="recherche un produit "
            className="w-[16rem]  border border-gray-500 rounded  px-2 p-1"
          />
        </form>
        <button
          onClick={() => setVisibleCreate(true)}
          className="bg-blue-600 text-white px-2 p-1 rounded hover:bg-blue-800"
        >
          Créer
        </button>
      </div>
      {loading ? (
        <div className="absolute top-[30%] right-[50%]">
          <div className="loader"> </div>
        </div>
      ) : (
        <div id="list-product" className="mt-4">
          <table className="w-full">
            <thead className="bg-gray-300 h-10">
              <tr>
                <th className="border border-gray-600 w-12 px-2">ID</th>
                <th className="border border-gray-600">Image</th>

                <th className="border border-gray-600 ">Designation</th>
                <th className="border border-gray-600 text-center">Prix</th>
                <th className="border border-gray-600">Description</th>
                <th className="border border-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products.map((v) => (
                <tr key={v._id} className="h-8">
                  <td className="border border-gray-600 text-center">
                    {v._id.slice(-10)}
                  </td>

                  <td className="border border-gray-600 text-center">
                    <img
                      className=" h-20 inline-block"
                      src={import.meta.env.VITE_API_BACKEND + v.fileUrl}
                    ></img>
                  </td>

                  <td className="border border-gray-600 pl-1">
                    {v.designation}
                  </td>
                  <td className="border border-gray-600 text-center ">
                    {v.prix}
                  </td>
                  <td className="border border-gray-600 text-center">
                    {v.description}
                  </td>
                  <td className="border border-gray-600 text-center space-x-2">
                    <button
                      onClick={() => {
                        setVisibleEdit(true);
                        setProduct(v);
                        setactionType("voir");
                      }}
                      title="voir detail"
                    >
                      <Eye color="#5951ea" size={18} />
                    </button>
                    <button
                      onClick={() => {
                        setVisibleEdit(true);
                        setProduct(v);
                        setactionType("editer");
                      }}
                      title="Modifier Produit"
                    >
                      <Pencil color="orange" size={18} />
                    </button>
                    <div className="inline-block relative">
                      <button
                        onClick={() => setVisibledelete(v._id)}
                        title="Supprimer Produit"
                      >
                        <Trash color="red" size={18} />
                      </button>{" "}
                      {visibledelete == v._id && (
                        <div
                          id="delete-panel "
                          className="absolute  z-10 rounded shadow -top-3 -right-6 w-[18rem]  bg-white border border-red-500 p-2"
                        >
                          <div className="text-md mb-2 flex justify-start items-center gap-1">
                            <TriangleAlert color="red" />
                            <span className="text-sm">
                              vouler vus Supprimer ce produits ?
                            </span>
                          </div>
                          <div className="flex justify-end items-center gap-2">
                            <button
                              onClick={() => setVisibledelete(false)}
                              className="bg-white border border-gray-200 px-2 p-1 rounded hover:bg-gray-100 text-xs"
                            >
                              Non
                            </button>{" "}
                            <button
                              onClick={() => handleDelete(v._id)}
                              className=" bg-red-300  border border-red-800 px-2 p-1 rounded hover:bg-red-600 text-xs"
                            >
                              Oui
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {visibleCreate && <CreateProduct {...createprops} />}
      {visibleEdit && <EditProduct {...editprops} />}
    </div>
  );
};

export default ManageProducts;
