import axios from "axios";
import "./App.css";

//data will be string sent from server
const apiCall = () => {
  axios.get("http://localhost:3000").then((data) => {
    //logs data in front end console
    console.log(data);
  });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Call API</button>
      </header>
    </div>
  );
}

export default App;
