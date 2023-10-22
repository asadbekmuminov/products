import { useSelector } from "react-redux";
import Products from "./Products";

function ShopProducts() {
  const { prodacts, total } = useSelector((state) => state.shop);

  return (
    <div>
      {prodacts.length != 0 ? (
        <div>
          {prodacts.map((product) => {
            const { name, price, image, amount } = product;
            return (
              <Products
                key={product.name}
                name={name}
                price={price}
                image={image}
                amount={amount}
              />
            );
          })}
          <div className="max-w-md flex justify-between mx-auto items-center mt-5 mb-5">
            <h2 className="text-3xl">Total</h2>
            <h2 className="text-3xl">${total.toFixed()}</h2>
          </div>
        </div>
      ) : (
        <div className="max-w-md flex justify-between mx-auto items-center mt-5 mb-5">
          <h1 className="center text-4xl font-bold mx-auto">Not products!</h1>
        </div>
      )}
    </div>
  );
}

export default ShopProducts;
