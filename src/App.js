
import { Fragment, useState } from 'react';
import Form from './Components/Form';
import Header from './Components/Header';


function App() {

  //Define the state of the ammount
  const [quantity, saveQuantity] = useState(0);

  //Define the state of the time to pay
  const [timeToPay, saveTimeToPay] = useState("");


  return (
    <Fragment>
      <Header title="Insurance Quoter"/>
      <div className='container'>
        <Form 
          quantity={quantity}
          saveQuantity={saveQuantity}
          timeToPay={timeToPay}
          saveTimeToPay={saveTimeToPay}
        />
      </div>
      
    </Fragment>
  );
}

export default App;
