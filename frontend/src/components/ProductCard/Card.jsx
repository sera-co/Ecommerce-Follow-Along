function Card({title,Index}){
    return(
        <div className="max-w-sm bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        {/* Image Section */}
        <div className="relative">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2jpJZRe_IxS6W-PFk5L1BuqPr8GUZ-r77A&s"
            alt="Product Image"
            className="w-full h-48 object-cover"
            />
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            -20%
            </span>
        </div>

        {/* Product Details */}
        <div className="p-4">
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {title} - {Index + 1}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-3">
            Premium wireless headphones with active noise cancellation and 30-hour battery life.
            </p>

            {/* Rating */}
            <div className="flex items-center mb-3">
            <span className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#189;</span>
            <span className="ml-2 text-sm text-gray-500">(4.5)</span>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between">
            <div>
                <span className="text-lg font-bold text-gray-900">$199.99</span>
                <span className="ml-2 text-sm text-gray-500 line-through">$249.99</span>
            </div>
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Add to Cart
            </button>
            </div>
        </div>
        </div>


    )
}
export default Card;