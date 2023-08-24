import React from 'react'
import Shopingcart from './shopingcart'
import CartDetail from './CartDetail'

export default function Index4() {
  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card">
          <div className="card-body p-4">
            <div className="row">
                <Shopingcart></Shopingcart>
                <CartDetail></CartDetail>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
