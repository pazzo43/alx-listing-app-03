cp -r alx-listing-app-00 alx-listing-app-03
cd alx-listing-app-03

mkdir -p components/booking pages/booking

touch components/booking/BookingForm.tsx
touch components/booking/OrderSummary.tsx
touch components/booking/CancellationPolicy.tsx # Added for clean component architecture
touch pages/booking/index.tsx

// interfaces/index.ts (Add this interface)
export interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

export interface OrderSummaryProps {
    bookingDetails: BookingDetails;
}

// components/booking/CancellationPolicy.tsx
import React from 'react';

const CancellationPolicy: React.FC = () => (
  <div className="mt-6 bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold text-gray-800">Cancellation Policy</h2>
    <p className="mt-2 text-gray-600">
      Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a partial refund.
    </p>

    <h2 className="text-xl font-semibold mt-6 text-gray-800">Ground Rules</h2>
    <ul className="mt-2 text-gray-600 list-disc list-inside ml-4">
      <li>Follow the house rules</li>
      <li>Treat your Host’s home like your own</li>
    </ul>
  </div>
);

export default CancellationPolicy;

// components/booking/BookingForm.tsx
import React from 'react';

const BookingForm: React.FC = () => (
  <div className="bg-white p-8 shadow-2xl rounded-xl">
    <h1 className="text-3xl font-bold text-gray-800 mb-8">Confirm Your Booking</h1>
    
    {/* Contact Information */}
    <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Contact Details</h2>
    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input id="firstName" type="text" placeholder="John" className="border border-gray-300 p-3 w-full mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input id="lastName" type="text" placeholder="Doe" className="border border-gray-300 p-3 w-full mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" type="email" placeholder="john.doe@example.com" className="border border-gray-300 p-3 w-full mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input id="phone" type="text" placeholder="+1 (555) 555-5555" className="border border-gray-300 p-3 w-full mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 pt-4 mb-4">Payment Details</h2>
      
      <div className="mt-4">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
        <input id="cardNumber" type="text" placeholder="XXXX XXXX XXXX XXXX" className="border border-gray-300 p-3 w-full mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="col-span-2">
          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiration Date (MM/YY)</label>
          <input id="expiry" type="text" placeholder="01/25" className="border border-gray-300 p-3 w-full mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
          <input id="cvv" type="text" placeholder="123" className="border border-gray-300 p-3 w-full mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 pt-4 mb-4">Billing Address</h2>
      <div className="mt-4">
        <label htmlFor="street" className="block text-sm font-medium text-gray-700">Street Address</label>
        <input id="street" type="text" placeholder="123 Main St" className="border border-gray-300 p-3 w-full mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input id="city" type="text" placeholder="New York" className="border border-gray-300 p-3 w-full mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State/Province</label>
          <input id="state" type="text" placeholder="NY" className="border border-gray-300 p-3 w-full mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input id="zip" type="text" placeholder="10001" className="border border-gray-300 p-3 w-full mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <input id="country" type="text" placeholder="United States" className="border border-gray-300 p-3 w-full mt-1 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="mt-8 bg-pink-600 text-white font-semibold py-3 px-4 rounded-lg w-full hover:bg-pink-700 transition duration-200 shadow-lg"
      >
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;


// components/booking/OrderSummary.tsx
import { OrderSummaryProps } from '@/interfaces'; // Assuming you added the interface

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => {
  const { propertyName, price, bookingFee, totalNights, startDate } = bookingDetails;
  
  // Calculation
  const subtotal = price * totalNights;
  const grandTotal = subtotal + bookingFee;
  
  return (
    <div className="bg-white p-6 shadow-2xl rounded-xl sticky top-4 h-fit">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">Review Order Details</h2>
      
      {/* Property Info & Stay Details */}
      <div className="flex items-start mb-6">
        {/* Placeholder Image */}
        <img 
          src="https://a0.muscache.com/im/pictures/miso/Hosting-732313647164998701/original/91845c4f-c73e-42c2-b362-e6466f272a27.jpeg?im_w=960" 
          alt={propertyName} 
          className="w-24 h-24 object-cover rounded-lg flex-shrink-0" 
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{propertyName}</h3>
          <p className="text-sm text-gray-500">4.76 (345 reviews) • Superhost</p>
          <p className="text-sm font-medium mt-2 text-gray-600">
            Check-in: {startDate} • {totalNights} Nights
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="border-t pt-4">
        <div className="flex justify-between py-1 text-gray-700">
          <p>${price} x {totalNights} nights</p>
          <p className='font-medium'>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between py-1 text-gray-700">
          <p>Service & Booking Fee</p>
          <p className='font-medium'>${bookingFee.toFixed(2)}</p>
        </div>
      </div>
      
      {/* Grand Total */}
      <div className="border-t border-gray-400 pt-4 mt-4 flex justify-between font-bold text-xl text-gray-800">
        <p>Grand Total (USD)</p>
        <p>${grandTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderSummary;

// pages/booking/index.tsx
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import { BookingDetails } from "@/interfaces";
import React from "react";

export default function BookingPage() {
  const bookingDetails: BookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500, // Price per night
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Booking Form and Policy */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 hidden lg:block">Complete Your Reservation</h1>
            <BookingForm />
            
            {/* Cancellation Policy placed below the form as requested */}
            <CancellationPolicy />
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="lg:col-span-1 order-first lg:order-none">
            <OrderSummary bookingDetails={bookingDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}


