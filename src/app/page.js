'use client'

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"

function HomePage() {
  return (
    <div className="h-screen bg-slate-950 flex justify-center items-center">
      <PayPalScriptProvider>
        <PayPalButtons 
          style={{
            color: "blue",
            layout: "horizontal",
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "1.00",
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(function (details) {
              alert("Transaction completed by " + details.payer.name.given_name);
            });
          }}
          onCancel={(data) => {
            alert("Transaction canceled");
          }}
        />
      </PayPalScriptProvider>
    </div>
  )
}

export default HomePage