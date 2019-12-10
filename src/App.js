import React, {useState, useEffect, useRef} from 'react'
import './scss/style.scss'
import Controls from './components/controls'
import Header from './components/header'
import Preview from './components/preview'

const storageKey = 'savedData'
const addHandler = handler => window.addEventListener('beforeunload', handler)
const removeHandler = handler => window.removeEventListener('beforeunload', handler)

function getStateFromStorage(key) {
  try {
    const data = window.localStorage.getItem(key)
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.log('Could not read from storage')
    return {}
  }
}

function saveStateToStorage(data, key) {
  if (Object.entries(data).length === 0) return;
  try {
    window.localStorage.setItem(
      key,
      JSON.stringify(data)
    )
  } catch (e) {
    console.log('Could not access storage')
    return false;
  }
}

function App() {
  const [data, setData] = useState( getStateFromStorage(storageKey) || {} );
  
  function handleInputChange(event) {
    event.persist();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setData({
      ...data,
      [name]: value
    });
  }

  function resetData() {
    setData({})
    window.localStorage.clear()
  }
  
  const prevHandler = useRef(null)
  
  useEffect(() => {
    const handler = () => saveStateToStorage(data, storageKey)
    if(prevHandler.current) removeHandler(prevHandler.current)
    prevHandler.current = handler
    addHandler(handler)
  }, [data]);

  return (
    <>
      <div className='wrapper d-md-flex'>
        <div className='flex-grow-1'>
          <Header />
          <Preview data={data} />
        </div>
        <Controls
          handleInputChange={handleInputChange}
          data={data}
          reset={resetData}
        />
      </div>
    </>
  );
}

export default App;
