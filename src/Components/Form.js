import React, { Fragment, useState } from 'react';
import { calcAmmountTotal } from '../helpers';

const Form = (props) => {

    const {quantity, saveQuantity, timeToPay, saveTimeToPay, saveTotalToPay, saveLoading} = props;


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

    //funtion to calc the loan
    const calcLoan = e => {
        e.preventDefault();

        //validation
        if(quantity === 0 || timeToPay === "") {
            saveError(true);
        } else {
            saveError(false);

            //turn on the spinner
            saveLoading(true);

            //load spinner
            setTimeout(() => {
                //make the calc
                const totalWithInterest = calcAmmountTotal(quantity, timeToPay);

                //then when we have the total ammout we give it to the state to show it
                saveTotalToPay(totalWithInterest);

                saveLoading(false);
            }, 2000);

        }

        
        
    }

    return ( 
        <Fragment>
        <form onSubmit={ calcLoan }>
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

        {/* error message if there is an error */}
        { (error) ? <p className='error'>Both fields are mandatory!</p> : null }
            
        </Fragment>
     );
}
 
export default Form;