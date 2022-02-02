import { useState } from "react/cjs/react.development";
import "./App.css";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
function App() {
  const [btnText,setBtnText]=useState("Dark");
  const[alert,setAlert]=useState(null);
  const showAlert=(message)=>{
      setAlert({
        msg:message
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
  }
  const [myNavStyle,setMyNavStyle]=useState({
    color:'white',
    backgroundColor:'#164e63'
  });
  const toggleStyle=()=>{
    if(myNavStyle.backgroundColor==='#164e63'){
      setMyNavStyle({
        color:'white',
        backgroundColor:'#122738'
      })
      setBtnText("Light");
      document.body.style.backgroundColor='#164e63';
      showAlert(" Dark mode has been enabled");
    }
    else{
      setMyNavStyle({
        color:'white',
        backgroundColor:'#164e63' 
      })
      setBtnText("Dark");
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled");
    }
  }
  return (
    <>
      <div>
        <nav style={myNavStyle} className=" px-3 align-middle flex justify-between  bg-slate-700 text-white py-2">
          Text Utility App
          <button style={myNavStyle} onClick={toggleStyle} className="mx-1 border-2 rounded-md px-2 py-1 active:border-x-cyan-900">{btnText}</button>
        </nav>
        <hr/>
        <Alerts alert={alert}/>
      </div>
      <TextForm showAlert={showAlert} mode={btnText}/>
    </>
  );
}

export default App;
