import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroupt";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [alertVisible, setAlertVisibility]=useState(false);

  const handleSelectItem=(item: string)=>{
    console.log(item);
  }

  return (
    <div>
      {alertVisible && <Alert onClose={()=>{setAlertVisibility(false)}}> Hello world </Alert>}
      <Button onClick={()=>{setAlertVisibility(true)}}>My Button</Button>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;
