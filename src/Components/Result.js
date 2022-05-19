import React from 'react';

const Result = ({ quantity, timeToPay, totalToPay }) => (
     <div className='u-full-width resultado'>
         <h2>Result</h2>
         <p>The request ammount is: ${quantity}</p>
         <p>The time to pay is: {timeToPay} months</p>
         <p>Your monthly bill is: ${(totalToPay/Number(timeToPay)).toFixed(2)}</p>
         <p>The total to pay is: ${totalToPay}</p>
     </div>
     
     
     );
 
export default Result;

