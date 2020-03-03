import React, {useState, useEffect, useRef, useReducer} from 'react'
import './scss/style.scss'
import Controls from './components/controls'
import Header from './components/header'
import Preview from './components/preview'
import ActionAlert from './components/action-alert'
import {addHandler, removeHandler, getStateFromStorage, saveStateToStorage} from './utils/helpers'
import Logo from './icons/js/Logo'

const storageKey = 'lsState';

const initialState = {
  template: 'templateOne',
  signature: {},
  social: {},
}

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'social':
    case 'signature':
      state[action.type] = {
        ...state[action.type],
        [action.target.name]: action.target.value
      };
      return {...state}
    case 'template':
        if (state.template === action.template) return state;
        state.template = action.template;
        return {...state}
    case 'reset':
      window.localStorage.clear()
      return {...initialState}
    case 'delete':
      if (state.social[action.name]) delete state.social[action.name];
      return {...state}
    default:
      throw new Error();
  }
}

function App() {
  // State control
  const [state, dispatch] = useReducer(stateReducer, getStateFromStorage(initialState, storageKey) || initialState );
  const {template, signature, social} = state;

  const prevHandler = useRef(null)
  
  useEffect(() => {
    const handler = () => saveStateToStorage(state, storageKey)
    if(prevHandler.current) removeHandler(prevHandler.current)
    prevHandler.current = handler
    addHandler(handler)
  }, [state]);
  
  // Alert
  const [alert, setAlert] = useState({isOpen: false, message: '', type: 'secondary'});

  const showAlert = (message, type) => {
    setAlert({isOpen: true, message: message, type: type})
  }
  
  useEffect(() => {
    if (alert.isOpen) setTimeout(() => setAlert({...alert, isOpen: false}), 3000)
  }, [alert])

  return (
    <>
      <div className='blocker position-fixed d-lg-none bg-dark w-100 h-100 p-3 p-md-5'>
        <div className='blocker-box w-100'>
          <div className='blocker-info w-100 bg-light d-flex flex-column justify-content-center rounded-circle text-center p-4'>
            <div className="display-1 text-primary mb-2 mb-md-4">
              <Logo />
            </div>
            <span className='lead'>Sorry, this app is optimized for desktop. </span>
          </div>
        </div>
      </div>
      <main className='flex-grow-1 d-flex flex-column'>
        <ActionAlert isOpen={alert.isOpen} message={alert.message} type={alert.type} />
        <Header />
        <Preview
          signature={signature}
          template={template}
          social={social}
        />
        <div className='small text-center py-3 text-muted mt-auto'>
          <a className='text-muted' href='https://github.com/hypersnob' target='_blank' rel="noopener noreferrer">Hypersnob</a>
          <i className='fab fa-github px-2' />
          <a className='text-muted' href='https://github.com/hypersnob/sigmy.email' target='_blank' rel="noopener noreferrer">Source</a>
        </div>
      </main>
      <Controls
        signature={signature}
        social={social}
        template={template}
        dispatch={dispatch}
        showAlert={showAlert}
      />
    </>
  );
}

export default App;
