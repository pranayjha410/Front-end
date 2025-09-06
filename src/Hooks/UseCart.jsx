// src/hooks/useCart.js
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export function useCart() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleToCart = (productId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === productId);

      if (existingItem) {
        toast.info("Quantity increased!", {
          autoClose: 2000,
          className: "text-xl font-semibold",
        });
        return prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success("Item added to cart!", {
          autoClose: 2000,
          className: "text-xl font-semibold",
        });
        return [...prevItems, { id: productId, quantity: 1 }];
      }
    });
  };

  const handleDecreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === productId && item.quantity > 1) {
          toast.warning("Quantity Decreased!", {
            autoClose: 2000,
            className: "text-xl font-semibold",
          });
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) => {
      toast.error("Item removed from cart!", {
        className: "text-xl font-semibold",
      });
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  return {
    cartItems,
    handleToCart,
    handleDecreaseQuantity,
    handleRemoveItem,
  };
}
