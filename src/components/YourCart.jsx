import React from 'react'

const YourCart = () => {
    return (
        <section className="cart container my-5 py-5">
            <div className="container mt-5">
                <h2 className="font-weight-bolde">Your Cart</h2>
                <hr/>
            </div>

            <table className="mt-5 pt-5">
                <tr>
                    <th> Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                <tr>
                    <td>
                        <div className="product-info">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJbf55U1DdM4xkXlPgos59hEetHqbpGQa6q3rqGe1agJO9mwf9oRVHbiDwTwNPKrcAEQ&usqp=CAU" alt=""/>
                                <div>
                                    <p> Black Shoes</p>
                                    <small><span>$</span>155</small>
                                    <br/>
                                        <a className="remove-btn" href="#">Remove</a>
                                </div>
                        </div>
                    </td>
                    <td>
                        <input type="number" value="1"/>
                            <a className="edit-btn" href="">Edit</a>
                    </td>

                    <td>
                        <span>$</span>
                        <span className="">155</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="product-info">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJbf55U1DdM4xkXlPgos59hEetHqbpGQa6q3rqGe1agJO9mwf9oRVHbiDwTwNPKrcAEQ&usqp=CAU" alt=""/>
                                <div>
                                    <p> Black Shoes</p>
                                    <small><span>$</span>155</small>
                                    <br/>
                                        <a className="remove-btn" href="#">Remove</a>
                                </div>
                        </div>
                    </td>
                    <td>
                        <input type="number" value="1"/>
                            <a className="edit-btn" href="">Edit</a>
                    </td>

                    <td>
                        <span>$</span>
                        <span className="">155</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="product-info">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJbf55U1DdM4xkXlPgos59hEetHqbpGQa6q3rqGe1agJO9mwf9oRVHbiDwTwNPKrcAEQ&usqp=CAU" alt=""/>
                                <div>
                                    <p> Black Shoes</p>
                                    <small><span>$</span>155</small>
                                    <br/>
                                        <a className="remove-btn" href="#">Remove</a>
                                </div>
                        </div>
                    </td>
                    <td>
                        <input type="number" value="1"/>
                            <a className="edit-btn" href="">Edit</a>
                    </td>

                    <td>
                        <span>$</span>
                        <span className="">155</span>
                    </td>
                </tr>
            </table>

            <div className="cart-total">
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>$155</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$155</td>
                    </tr>
                </table>
            </div>

            <div className="checkout-container">
                <button className="btn checkout-btn">Checkout</button>
            </div>
        </section>
    )
}

export default YourCart
