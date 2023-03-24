import CategoryPreview from "../../components/category-preview/category-preview";
import ProductsCard from "../../components/products-card/products-card";
import productsData from "../../products.json"
import "./shop.css"

const Shop = () => {
    const categories = Object.keys(productsData)
    //debugger

    //console.log(categories);
    return (
        <div className="products-container">

            {
                categories.map((category) => {
                    return (
                        <CategoryPreview key={category} title={category} productsList={productsData[category]}/>
                    )
                })
            }

            {/* {productsData.map((product)=>      
            <ProductsCard key={product.id} product={product} />        
            )} */}
        </div>
    )
}

export default Shop;