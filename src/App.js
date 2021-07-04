
import './App.css';
import Avater from './Avater';
import Image from "./2.PNG";
import {Button, ButtonDark} from "./Button"

function App() {
  return (
    <div >
      <div className="App">
        <Avater />
        <Avater name="Ruhul" />
        <Avater name="Ruhul" size="small" />
        <Avater name="Ruhul" size="large" appearance="squre" />
        <Avater size="large" appearance="squre" user={Image} />
      </div>

      <div className="App">
       <Button />
       <Button text="click me"/>
       <ButtonDark text="warning" appearance={1}/>
      </div>
    </div>
  );
}

export default App;
