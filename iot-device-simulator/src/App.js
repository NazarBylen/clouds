import logo from "./iot.png";
import "./App.css";

import { defaultDuration, defaultFrequency, defaultUrl, devices } from "./devices";
import Device from "./components/Device";
import { useState } from "react";

function App() {

  const [propertiesState, setPropertiesState] = useState(0);
  const [currentTypeState, setCurrentTypeState] = useState('');

  const [currentUrl, setCurrentUrl] = useState(defaultUrl);
  const [currentDuration, setCurrentDuration] = useState(defaultDuration);
  const [currentFrequency, setCurrentFrequency] = useState(defaultFrequency);

  const propertiesHandler = (event, type) => {
    event.preventDefault();
    setPropertiesState(1);
    setCurrentTypeState(type)
    const url = localStorage.getItem(`${type}Url`);
    const duration = localStorage.getItem(`${type}Duration`);
    const frequency = localStorage.getItem(`${type}Frequency`);

    setCurrentUrl(url || defaultUrl);
    setCurrentDuration(duration || defaultDuration);
    setCurrentFrequency(frequency || defaultFrequency);
  }

  const saveHandler = (event) => {
    event.preventDefault();
    setPropertiesState(0);
    localStorage.setItem(`${currentTypeState}Url`, currentUrl)
    localStorage.setItem(`${currentTypeState}Duration`, currentDuration)
    localStorage.setItem(`${currentTypeState}Frequency`, currentFrequency)
  }

  const getDeviceData = (type) => {
    const currentTime = new Date().toISOString();

    const currentDevice = devices.find((device)=>{
      return device.type===type;
    })

    const dataToBeSent = {
      time: currentTime,
      type,
      value: Math.round(Math.random() * (currentDevice.maxValue - currentDevice.minValue) + currentDevice.minValue),
      location: {
        longitude: currentDevice.location.longitude,
        latitude: currentDevice.location.latitude,
      }
    };

    console.log(dataToBeSent);

    return dataToBeSent;
  }

  const postData = async (type) => {

    const data = getDeviceData(type);
    const url = localStorage.getItem(`${type}Url`);


    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const results = await response.json();
    await console.log(results);
  }

  const sendDeviceData = (event, type) => {
    event.preventDefault();

    const duration = localStorage.getItem(`${type}Duration`);
    const frequency = localStorage.getItem(`${type}Frequency`);

    const intervalId = setInterval(()=>postData(type), frequency || defaultFrequency);


    setTimeout(() => {
      clearInterval(intervalId);
    }, duration || defaultDuration);
  }

  return (
    <div className="container app">
      <div className="logo-wrapper">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="devices-cards">
        {devices.map((device)=>{
          return <Device key={device.type} {...device} propertiesHandler={propertiesHandler} sendDeviceData={sendDeviceData}/>
        })}
      </div>
      {propertiesState===1?
      <div className="input-wrapper">
        Enter URL
        <input  value={currentUrl} type="text" name="url" onChange={(event) => {setCurrentUrl(event.target.value)}}/>
        Enter Duration (ms)
        <input value={currentDuration} type="text" name="duration" onChange={(event) => {setCurrentDuration(event.target.value)}}/>
        Enter Frequency (ms)
        <input value={currentFrequency} type="text" name="frequency" onChange={(event) => {setCurrentFrequency(event.target.value)}}/>
        <button className="edit-btn" onClick={saveHandler}>Save</button>
      </div>
      :null}
    </div>
  );
}

export default App;
