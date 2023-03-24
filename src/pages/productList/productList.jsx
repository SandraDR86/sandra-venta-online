import "./productList.css"
import { useParams } from "react-router-dom";
import ProductsCard from "../../components/products-card/products-card";
import productList from "../../products.json"

const ProductList = () => {
    const { category } = useParams() //ESTO ES UN HOOK PARA ACCEDER A HATS, WOMEN, MEN.....
    //console.log(productList[category]);
    return (
        <>
            <h2 className="category-title">
                {category.toUpperCase()}
            </h2>
            <div className="category-containers">
                {productList[category].map((product) => {
                    return (<ProductsCard key={product.id} product={product} />
                    )

                    //console.log(product);
                })}

            </div>
        </>
    )
}

export default ProductList