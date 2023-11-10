const Device = ({type, name, location, propertiesHandler, sendDeviceData}) => {
  return (
    <div className="card">
      <div className="device-name">{name}</div>
      <div className="device-type">{type}</div>
      <div className="device-detail-info">
        <p>type: {type}</p>
        <p>location (longitude): {location.longitude}</p>
        <p>location (latitude): {location.latitude}</p>
      </div>
      <button className="edit-btn" onClick={(e)=>{sendDeviceData(e, type)}}>Start Device</button>
      <button className="edit-btn" onClick={(e) => propertiesHandler(e, type)}>Properties</button>
    </div>
  )
}

export default Device;
