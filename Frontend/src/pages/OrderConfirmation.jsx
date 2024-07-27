import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="bg-black/80 p-6 min-h-screen text-white">
      <h1 className="text-3xl mb-6">Order Confirmation</h1>
      <p>Your order has been placed successfully! Thank you for shopping with us.</p>
      <Link to="/">
        <button className="bg-green-600 text-white px-6 py-2 rounded mt-4">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;
