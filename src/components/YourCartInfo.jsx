import React from 'react'

const YourCartInfo = () => {
    return (
        <table>
            <tr>
                <td>
                    <div className="product-info">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJbf55U1DdM4xkXlPgos59hEetHqbpGQa6q3rqGe1agJO9mwf9oRVHbiDwTwNPKrcAEQ&usqp=CAU" alt="" />
                        <div>
                            <p> Black Shoes</p>
                            <small><span>$</span>155</small>
                            <br />
                            <a className="remove-btn" href="#">Remove</a>
                        </div>
                    </div>
                </td>
                <td>
                    <input type="number" value="1" />
                    <a className="edit-btn" href="">Edit</a>
                </td>

                <td>
                    <span>$</span>
                    <span className="">155</span>
                </td>
            </tr>
        </table>

    )
}

export default YourCartInfo
