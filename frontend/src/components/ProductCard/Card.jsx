import { Link } from 'react-router-dom';
function Card({title,image,description,discountedprice,originalprice,rating,id}){
    return(
        <div className="max-w-sm bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        {/* Image Section */}
        <div className="relative">
            <img
            src={image}
            className="w-full h-48 object-cover"
            alt="Product image missing"
            />
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            -20%
            </span>
        </div>

        {/* Product Details */}
        <div className="p-4">
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-3">
            {/* Premium wireless headphones with active noise cancellation and 30-hour battery life. */description}
            </p>

            {/* Rating */}
            <div className="flex items-center mb-3">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#189;</span>
            <span className="ml-2 text-sm text-gray-500">({rating})</span>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between">
            <div>
                <span className="text-lg font-bold text-gray-900"> ₹{originalprice}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">₹{discountedprice}</span>
            </div>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Add to Cart
            </button>
            <Link to={`/update-form/${id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200">
              Update
            </button>
          </Link>
            </div>
        </div>
        </div>


    )
}
export default Card;