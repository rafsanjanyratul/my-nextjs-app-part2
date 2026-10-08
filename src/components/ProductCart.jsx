

const ProductCart = ({product}) => {
    const{ name, description} = product
    return (
        <div className="card w-96 bg-base-100 card-sm shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ProductCart;