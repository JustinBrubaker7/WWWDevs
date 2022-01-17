import React, { useState, useEffect } from "react";
import { DEV_SERVER as serverUrl } from "../utils/config";
// import { LIVE_SERVER as serverUrl } from "../utils/config";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function ProductDisplay() {
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const plan = query.get("plan");
    const price = query.get("price");
    setProduct(plan);
    setPrice(price);
  }, []);

  return (
    <div>
      <Nav />
      <section className="bg-gray-100 h-full py-80">
        <div className="product">
          <div className="description ">
            <h3 className="text-6xl">{product}</h3>
            <h5 className="text-2xl text-yellow-400">${price}</h5>
            <p className="pb-12">
              You wont be charged until we sign our contact.
            </p>
          </div>
        </div>
        <form
          action={`${serverUrl}/create-checkout-session-${product}`}
          method="POST"
        >
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-yellow-400"
          >
            Checkout
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Checkout() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
