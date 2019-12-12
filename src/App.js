import React, {useState, useEffect, useRef} from 'react'
import './scss/style.scss'
import Controls from './components/controls'
import Header from './components/header'
import Preview from './components/preview'
import {addHandler, removeHandler, getStateFromStorage, saveStateToStorage} from './utils/helpers'

const storageKey = 'lsState';

const initialState = {
  template: 'templateOne',
  signature: {},
}

function App() {
  const [state, setState] = useState( getStateFromStorage(initialState, storageKey) || initialState );
  const {template, signature} = state;
  
  function handleInputChange(event) {
    event.persist();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      template,
      signature: {
        ...signature,
        [name]: value
      }
    })
  }

  function chooseTemplate(event) {
    const template = event.target.closest('.template-tmb').id;
    if (state.template === template) return;
    setState({
      ...state,
      template: template
    })
  }

  function resetState() {
    setState({...initialState})
    window.localStorage.clear()
  }
  
  const prevHandler = useRef(null)
  
  useEffect(() => {
    const handler = () => saveStateToStorage(state, storageKey)
    if(prevHandler.current) removeHandler(prevHandler.current)
    prevHandler.current = handler
    addHandler(handler)
  }, [state]);

  return (
    <>
      <main className='flex-grow-1'>
        <Header />
        <Preview
          signature={signature}
          template={template}
        />
      </main>
      <Controls
        handleInputChange={handleInputChange}
        signature={signature}
        template={template}
        reset={resetState}
        chooseTemplate={chooseTemplate}
      />
    </>
  );
}

export default App;
