
import { Fragment, useState } from 'react';
import Form from './Components/Form';
import Header from './Components/Header';
import Message from './Components/Message';
import Result from './Components/Result';
import Spinner from './Components/Spinner';


function App() {

  //Define the state of the ammount
  const [quantity, saveQuantity] = useState(0);

  //Define the state of the time to pay
  const [timeToPay, saveTimeToPay] = useState("");

  //define the state of the total to pay
  const [totalToPay, saveTotalToPay] = useState(0);
  
  //define the state of the spinner
  const [loading, saveLoading] = useState(false);


  //conditional to check if the user quote or not, to show message or result
  let component;

  if(loading) {
    component = <Spinner />
  } else if(totalToPay === 0) {
    component = <Message />
  } else {
    component = <Result 
                quantity={quantity}
                timeToPay={timeToPay}
                totalToPay={totalToPay}
    />
  }

  return (
    <Fragment>
      <Header title="Insurance Quoter"/>
      <div className='container'>
        <Form 
          quantity={quantity}
          saveQuantity={saveQuantity}
          timeToPay={timeToPay}
          saveTimeToPay={saveTimeToPay}
          saveTotalToPay={saveTotalToPay}
          saveLoading={saveLoading}
        />
        <div className='mensajes'>
          {component}
        </div>
      </div>
      
    </Fragment>
  );
}

export default App;
