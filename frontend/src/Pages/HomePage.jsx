import {useEffect, useState } from 'react';
import Card from '../components/ProductCard/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [data, setdata] = useState();
  const fetchProduct=async()=>{
    const response=await axios.get(
      'http://localhost:8080/product/get-products'
    )
    setdata(response.data.data);
  }
  useEffect(() => {
    console.log('clicked');
    const callhandle = async () => {
      await fetchProduct();
    };
    callhandle();
  }, []);

  console.log(data);
  return (
    <div>
      <h1 className="text-center">Home Page for Follow along</h1>

      <div className="grid grid-cols-3">
        {data?.map((ele, index) => {
          return (
            <div key={ele.title} style={{ margin: 'auto' }} className="border border-white">
              <Link to={`/product-details/${ele._id}`}>
              <Card 
              title={ele.title} 
              image={ele.images[0]?ele.images[0]:'Product image missing'}
              Index={index}
              description={ele.description}
              originalprice={ele.originalprice}
              discountedprice={ele.discountedprice}
              rating={ele.rating}
              id={ele._id}
               />
               </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;