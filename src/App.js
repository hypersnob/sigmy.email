import React, {useEffect, useRef, useReducer} from 'react'
import './scss/style.scss'
import Controls from './components/controls'
import Header from './components/header'
import Preview from './components/preview'
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
  const [state, dispatch] = useReducer(stateReducer, getStateFromStorage(initialState, storageKey) || initialState );
  const {template, signature, social} = state;
  
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
          social={social}
        />
      </main>
      <Controls
        signature={signature}
        social={social}
        template={template}
        dispatch={dispatch}
      />
    </>
  );
}

export default App;
