import './App.css'
import { useDirection } from './hooks/useDirection';
import { useHandleChange } from './hooks/useHandleChange';
import { useLocalStorage } from './hooks/useLocalStorage';
function App() {
  const { state, handleChange: toggleChange } = useHandleChange();
  const { dirRef, directionChange, dirResult, dirRefResult } = useDirection();
  const {
    handleChange,
    setItemtoLocal,
    getItemtoLocal,
    removeItemtoLocal
  } = useLocalStorage("token");

  return (
    <>
      <div>
        <div>
          <h2>
            Switch <span> {state ? "ON" : "OFF"}</span>
          </h2>
        </div>
        <button onClick={toggleChange}>Toggle</button>
      </div>

      <h2 ref={dirRef}>
        please change me to {dirResult === "ltr" ? "right" : "left"} side
        </h2>
      <button onClick={directionChange}>
        Direction Change to {dirResult === "ltr" ? "right" : "left"}
      </button>
      <h3 ref={dirRefResult}>{dirResult}</h3>
      <div>
        <div className='local-storage'>
        <div className='store-container'>
          <h1>Local Storage</h1>
          <label >Enter Name</label>
        </div>
        <input className='store-container' onChange={handleChange} />
        <div className='store-container'>
          <button onClick={setItemtoLocal}>Save to Local storage</button>
        </div>
        <div className='store-container'>
          <button onClick={getItemtoLocal}>Get Data from Local Storage</button>
        </div>
        <div className='store-container'>
          <button onClick={removeItemtoLocal}>Remove Local Storage</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
