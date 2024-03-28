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
            label: "pay",
          }} 
        />
      </PayPalScriptProvider>
    </div>
  )
}

export default HomePage