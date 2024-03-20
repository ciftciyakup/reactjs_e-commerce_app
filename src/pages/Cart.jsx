import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/CartComp";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, itemCount, totalAmount, updateCart } = useSelector(
    (state) => state.carts
  );

  console.log(carts, itemCount, totalAmount, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  useEffect(() => {
    if (updateCart) dispatch(getCartTotal());
  }, [updateCart, dispatch]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts.map((cart, i) => (
            <CartComp key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl">
            TOPLAM TUTAR:{" "}
            <span className="font-bold text-3xl ml-2">{totalAmount} TL</span>
          </div>
        </div>
      ) : (
        <div>Sepetiniz Boş...</div>
      )}
    </div>
  );
};

export default Cart;
