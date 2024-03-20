import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment, removeFromCart } from "../../redux/cartSlice";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <div className="my-10 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-contain"
        src={cart?.image}
        alt=""
      />
      <div className="w-[476px]">
        <div className="text-xl">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="text-2xl font-bold">
        <span
          className={`text-2xl font-bold ${
            cart?.quantity == 1 ? "text-gray-300" : "cursor-pointer"
          }`}
          onClick={() => {
            if (cart?.quantity > 1) dispatch(decrement({ id: cart?.id }));
          }}
        >
          -
        </span>{" "}
        {cart?.price} TL ({cart?.quantity}){" "}
        <span
          className="text-2xl font-bold cursor-pointer"
          onClick={() => dispatch(increment({ id: cart?.id }))}
        >
          +
        </span>
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
