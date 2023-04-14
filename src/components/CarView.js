import React from 'react'

function CarView(props) {
    const {activeCar} = props
  return (
    <div className="car-display-wrapper">
        <table className='car-display-table'>
          <tbody>
            <tr>
              <td>Model</td>
              <td>{activeCar.Model}</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>{activeCar.Mark}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{activeCar.Year}</td>
            </tr>
            <tr>
              <td>Doors</td>
              <td>{activeCar.Doors}</td>
            </tr>
            <tr>
              <td>AC</td>
              <td>{activeCar.AC ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td>Transmition</td>
              <td>{activeCar.Transmition}</td>
            </tr>
            <tr>
              <td>Fuel</td>
              <td>{activeCar.Fuel}</td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default CarView