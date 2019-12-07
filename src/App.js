import React, {useState, useEffect} from 'react';
import './scss/style.scss';
import Controls from './components/controls'
import Preview from './components/preview'
import SourceModal from './components/source-modal'

const storageKey = 'savedData';

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
  
  useEffect(() => {
    window.addEventListener('pagehide', () => {saveStateToStorage(data, storageKey)});
  }, [data]);

  return (
    <>
      <div className='wrapper d-md-flex'>
        <Controls handleInputChange={handleInputChange} data={data} />
        <Preview data={data} />
      </div>
      <SourceModal buttonLabel='modal' data={data} />
    </>
  );
}

export default App;
