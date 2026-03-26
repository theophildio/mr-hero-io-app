import Product from "../Product/Product";

const Products = ({ products }) => {

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
