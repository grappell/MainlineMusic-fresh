/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { addToCart, useCart } from "@/utils/data.ts";

interface AddToCartProps {
  id: string;
  title: string;
}

export default function AddToCart(props: AddToCartProps) {
  const { data } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const add = (e: MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    addToCart(data!.id, props.id).finally(() => {
      if(props.title.match("Default Title")){
        alert("Product added to cart")
      } else {
        alert("Product added to cart. Variant of the product: " + props.title)
      }
      setIsAdding(false);
    });
  };

  return (
    <button
      onClick={add}
      disabled={!data && !isAdding}
      class={tw`w-full ${
        isAdding ? "!bg-gray-400" : "bg-gray-700"
      } border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-900`}
    >
      {isAdding ? "Adding..." : "Add to Cart"}
    </button>
  );
}
