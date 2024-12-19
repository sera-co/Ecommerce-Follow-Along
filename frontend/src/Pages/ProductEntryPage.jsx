import React,{useState} from 'react';
// import {Upload} from 'lucide-react';
import axios from 'axios';

function ProductEntryPage(){
    const [formData,setFormData]=useState({
        title:'',
        description:'',
        rating:0,
        discountedprice:0,
        originalprice:0,
        quantity:0,
        category:'',

    })
    const [errorInput,setErrorInput]=useState('')
    const [Images,setImages]=useState(null);
    const handleImageUpload=(e)=>{
        const ImageArray=Array.from(e.target.files);
        console.log(ImageArray);
        setImages(ImageArray);
    }
    const handleChange=(e)=>{
        setErrorInput('');
        const {name,value}=e.target;
        console.log(name,value)
        setFormData({
            ...formData,
            [name]:value,
        })
       
        console.log(formData)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        console.log(Images);
        const{
            title,
      description,
      rating,
      discountedPrice,
      originalPrice,
      quantity,
      category,
        }=formData;
        if(
            title.lenght<=0||
            description.length<=0||
            discountedPrice<=0||
            originalPrice<=0||
            quantity<=0||
            category.length<=0
        ){
            return setErrorInput('Enter the information inside fields correctly...');
        }
        let formDataBody=new FormData();
        formDataBody.append('title',title);
        formDataBody.append('description',description);
        formDataBody.append('category',category);
        formDataBody.append('discountedprice',discountedPrice);
        formDataBody.append('originalprice',originalPrice);
        formDataBody.append('quantity',quantity);
        formDataBody.append('rating',rating);
        
        Images.map((ele)=>{
            formDataBody.append('filepath',ele);
        })
        console.log(formDataBody);
        axios.post('http://localhost:5173/product/create-product',formData,{
            headers:{
                'Content-Type':'multi-part/form-data',
            }
        })


    }
    return(
        <div
        className="flex justify-center items-center border border-black"
        style={{height:'100vh'}}
        >
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="">Enter Title</label>
                <input type="text" onChange={handleChange} value={formData.title} name="title" placeholder="Enter the title"/>
                </div>
                <div>
                <label htmlFor="">Enter Description</label>
                <input type="text" onChange={handleChange} value={formData.description} name="description" placeholder='Enter description'/>
                </div>
                <div>
                <label htmlFor="">Discounted Price</label>
                <input type="number" onChange={handleChange} value={formData.discountedprice} name="discountedprice" placeholder="discounted price"/>
                </div>
                <div>
                <label htmlFor="">Original Price</label>
                <input type="number" onChange={handleChange} value={formData.originalprice} name="originalprice" placeholder="original price"/>
                </div>
                <div>
                <label htmlFor="">Stock Quantity</label>
                <input type="number" onChange={handleChange} value={formData.quantity} name="quantity" placeholder="Enter the stock quantity"/>
                </div>
                <div>
                <label htmlFor="">Upload Product Images</label>
                <input type="file" multiple onChange={handleImageUpload}/>
                </div>
                <div>
                <label htmlFor="">Enter Category</label>
                <input type="text" onChange={handleChange} value={formData.category} name="category" placeholder="Enter the category"/>
                </div>
                <div>
                <label htmlFor="">Enter Rating of Product</label>
                <input type="text" onChange={handleChange} value={formData.rating} name="rating" placeholder="Rating of the product"/>
                </div>
                {errorInput && <p>{errorInput}</p>}
                <button type="Submit" className="bg-blue-400 text-white px-5 py-1">
                Submit
                </button>
            </form>
        </div>
    )
}
export default ProductEntryPage;