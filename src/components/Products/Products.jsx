import Product from "../Product/Product";

const Products = ({ products }) => {

  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
