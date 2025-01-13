import { useState } from "react";

import axios from "axios";

function ProductEntryPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rating: 0,
    discountedPrice: 0,
    originalPrice: 0,
    quantity: 0,
    category: "",
  });
  const [errorInput, setErrorInput] = useState("");
  const [Images, setImages] = useState(null);
  const handleImageUpload = (e) => {
    const ImagesArray = Array.from(e.target.files);
    console.log(ImagesArray);
    setImages(ImagesArray);
  };
  const handleChange = (e) => {
    setErrorInput("");
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(Images);
    const {
      title,
      description,
      rating,
      discountedPrice,
      originalPrice,
      quantity,
      category,
    } = formData;
    if (
      title.length <= 0 ||
      description.length <= 0 ||
      discountedPrice <= 0 ||
      originalPrice <= 0 ||
      quantity <= 0 ||
      category.length <= 0
    ) {
      return setErrorInput("Enter the information inside fields correctly...");
    }
    let formDataBody = new FormData();
    formDataBody.append("title", title);
    formDataBody.append("description", description);
    formDataBody.append("category", category);
    formDataBody.append("discountedPrice", discountedPrice);
    formDataBody.append("originalPrice", originalPrice);
    formDataBody.append("quantity", quantity);
    formDataBody.append("rating", rating);

    Images.map((ele) => {
      formDataBody.append("files", ele);
    });
    console.log(formDataBody, );
    await axios
      .post("http://localhost:8080/product/create-product", formDataBody, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((er) => {
        console.log("error", er);
        return er;
      });

    for (let pair of formDataBody.entries()) {
      if (pair[1] instanceof File) {
        console.log(
          `${pair[0]}: File - ${pair[1].name}, ${pair[1].type}, ${pair[1].size} bytes`
        );
      } else {
        console.log(`${pair[0]}: ${pair[1]}`);
      }
    }
  };
  return (
    <div
      className="flex justify-center items-center border border-black"
      style={{ height: "100vh" }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Enter Title</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.title}
            name="title"
            placeholder="Enter the title"
          />
        </div>
        <div>
          <label htmlFor="">Enter Description</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.description}
            name="description"
            placeholder="Enter description"
          />
        </div>
        <div>
          <label htmlFor="">Discounted Price</label>
          <input
            type="number"
            onChange={handleChange}
            value={formData.discountedPrice}
            name="discountedPrice"
            placeholder="discounted price"
          />
        </div>
        <div>
          <label htmlFor="">Original Price</label>
          <input
            type="number"
            onChange={handleChange}
            value={formData.originalPrice}
            name="originalPrice"
            placeholder="original price"
          />
        </div>
        <div>
          <label htmlFor="">Stock Quantity</label>
          <input
            type="number"
            onChange={handleChange}
            value={formData.quantity}
            name="quantity"
            placeholder="Enter the stock quantity"
          />
        </div>
        <div>
          <label htmlFor="">Upload Product Images</label>
          <input type="file" multiple onChange={handleImageUpload} />
        </div>
        <div>
          <label htmlFor="">Enter Category</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.category}
            name="category"
            placeholder="Enter the category"
          />
        </div>
        <div>
          <label htmlFor="">Enter Rating of Product</label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.rating}
            name="rating"
            placeholder="Rating of the product"
          />
        </div>
        {errorInput && <p>{errorInput}</p>}
        <button type="Submit" className="bg-blue-400 text-white px-5 py-1">
          Submit
        </button>
      </form>
    </div>
  );
}
export default ProductEntryPage;
