"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "./checkout-action";

export default function CheckoutPage() {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-500">Add items to proceed with checkout.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* 🚨 Scrolling Message */}
      <div className="w-full bg-red-600 text-white text-center py-2 overflow-hidden rounded-lg mb-6">
        <p className="animate-marquee whitespace-nowrap font-medium tracking-wide">
          ⚠️ This is a demo website. Do not make any real payments. ⚠️
        </p>
      </div>

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Checkout
      </h1>

      <Card className="max-w-2xl mx-auto mb-10 shadow-lg border border-gray-200 rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-gray-800">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col gap-2 border-b pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-700">{item.name}</span>
                  <span className="text-lg font-semibold text-indigo-600">
                    ₹ {(item.price * item.quantity / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    –
                  </Button>
                  <span className="text-lg font-bold">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addItem({ ...item, quantity: 1 })}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t text-xl font-bold text-center text-gray-800">
            Total: ₹ {(total / 100).toFixed(2)}
          </div>
        </CardContent>
      </Card>

      <form action={checkoutAction} className="max-w-2xl mx-auto space-y-4">
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <Button
          type="submit"
          variant="default"
          className="w-full py-3 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 transition"
        >
          🛒 Proceed to Payment
        </Button>
        <Button
          onClick={() => clearCart()}
          variant="outline"
          className="w-full py-3 text-lg font-semibold"
        >
          ❌ Clear Cart
        </Button>
      </form>
    </div>
  );
}
