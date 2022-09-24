import React from 'react'
import NavBar from '../NavBar/NavBar'

function Pricing() {
  return (
    <div>
    <NavBar />
    <table>
        <tr>
            <thead>
                <th>size</th>
                <th>Quantity from</th>
                <th>Quantity to</th>
                <th>Price</th>
            
            </thead>
        </tr>
        <tr>
          <tbody>
            <td>A3</td>
            <td>1</td>
            <td>100</td>
            <td>300</td>
           
          </tbody>
        </tr>
    </table>
    </div>
  )
}

export default Pricing