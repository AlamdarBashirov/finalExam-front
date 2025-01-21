import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductWithAdminThunk,
  deleteProductWithAdminThunk,
  getProductsHomeThunk,
} from "../../redux/reducers/productSlice";
import style from "./admin.module.scss";

const AdminPanel = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [sort, setSort] = useState("asc");

  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const filteredData = products
    .filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    )
    .sort((a, b) => {
      if (sort == "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  const DeleteProduct = (id) => {
    dispatch(deleteProductWithAdminThunk(id));
  };

  useEffect(() => {
    dispatch(getProductsHomeThunk());
  }, []);

  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      price: "",
      description: "",
    },
    onSubmit: (values) => {
      dispatch(addProductWithAdminThunk(values));
      window.location.reload();
    },
  });

  if (loading) return <h1>Yuklenir</h1>;
  if (error) return <h1>Xeta Bas Verdi</h1>;

  return (
    <>
      <div className={style.section}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="thumbnail">image</label>
          <input
            id="thumbnail"
            name="thumbnail"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.thumbnail}
          />
          <label htmlFor="title">title</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <label htmlFor="price">price</label>
          <input
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <label htmlFor="description">description</label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <button type="submit">Submit</button>
        </form>

        <div className={style.sort}>
          <input
            type="text"
            placeholder="search"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => setSort("asc")}>Ucuzdan Bahaya</button>
          <button onClick={() => setSort("desc")}>Bahadan Ucuza</button>
        </div>

        <div className={style.table}>
          <table style={{ border: "1px solid black" }}>
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>image</th>
              <th style={{ border: "1px solid black" }}>title</th>
              <th style={{ border: "1px solid black" }}>price</th>
              <th style={{ border: "1px solid black" }}>description</th>
              <th style={{ border: "1px solid black" }}>emeliyyatlar</th>
            </tr>

            {filteredData &&
              filteredData.map((item) => (
                <tr style={{ border: "1px solid black" }}>
                  <td style={{ border: "1px solid black" }}>
                    <img src={item.thumbnail} alt="" />
                  </td>
                  <td style={{ border: "1px solid black" }}>{item.title}</td>
                  <td style={{ border: "1px solid black" }}>${item.price}</td>
                  <td style={{ border: "1px solid black" }}>
                    {item.description}
                  </td>
                  <td style={{ border: "1px solid black" }}>
                    <button onClick={() => DeleteProduct(item._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
