import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    console.log("card", card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError("Error: " + error.message);
    } else {
      setCardError("");
      console.log("payment Method", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError && (
        <div className="mt-5 w-full text-center">
          <span className="text-red-500">{cardError}</span>
        </div>
      )}
      <div className="w-2/3 mx-auto">
        <button
          className="btn btn-warning text-white w-full mt-5"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckOutForm;
