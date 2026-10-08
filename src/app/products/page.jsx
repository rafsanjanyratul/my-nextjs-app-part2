import ProductCart from "@/components/ProductCart";

const getProduct = async ()=>{
    const res = await fetch("http://localhost:5000/products",{next:{revalidate:60}})
    return res.json()
}
const Product =async () => {
    const products = await getProduct()
    return (
        <div>
            <h2>products :{products.length}</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    products.map(product=><ProductCart product={product} key={product.id}></ProductCart>)
                }
            </div>
        </div>
    );
};

export default Product;