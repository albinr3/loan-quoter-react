import React, { useState } from 'react';

const Form = ({quantity, saveQuantity, timeToPay, saveTimeToPay}) => {

    //read the ammount written in the input
    const readQuantity = (e) => {
        saveQuantity(Number(e.target.value));
    }

    //read the time selected in the input
    const readTimeToPay = (e) => {
        saveTimeToPay(e.target.value);
    }

    //variable to show if error exist
    const [error, saveError] = useState(false);

    //funtion to cal the loan
    const calcLoan = e => {
        e.preventDefault();

        if(quantity === 0 || timeToPay === "") {
            saveError(true);
            console.log("Faltan campos por llenar!!")
        } else {
            saveError(false);
        }




    }

    return ( 
        
        <form onSubmit={ calcLoan }>
            {quantity}
            {timeToPay}
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange={ readQuantity }
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={ readTimeToPay }
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
        </form>
     );
}
 
export default Form;