import React, {useState, useEffect, useRef, useReducer} from 'react'
import './scss/style.scss'
import Controls from './components/controls'
import Header from './components/header'
import Preview from './components/preview'
import FinalToast from './components/final-toast'
import {addHandler, removeHandler, getStateFromStorage, saveStateToStorage} from './utils/helpers'

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
        if (state.template === action.template) return;
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
  
  // Toast control
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState('');

  const toggleToast = (text) => {
    setToast(!toast)
    setMessage(text)
    setTimeout(() => setToast(false), 4000)
  };

  return (
    <>
      <main className='flex-grow-1 d-flex flex-column'>
        <Header />
        <Preview
          signature={signature}
          template={template}
          social={social}
        />
        <div className='small text-center py-3 text-muted mt-auto'>
          <span>by</span>{' '}
          <a href='https://github.com/hypersnob' target='_blank' rel="noopener noreferrer">hypersnob</a>
          <i className='fab fa-github px-2' />
          <a href='https://github.com/hypersnob/sigmy.email' target='_blank' rel="noopener noreferrer">source</a>
        </div>
      </main>
      <Controls
        signature={signature}
        social={social}
        template={template}
        dispatch={dispatch}
        toggleToast={toggleToast}
      />
      <FinalToast toast={toast} toggleToast={toggleToast}>{message}</FinalToast>
    </>
  );
}

export default App;
