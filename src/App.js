// import logo from './logo.svg';

import React , { useReducer }from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassMouse from './components/ClassMouse';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
// import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentA from './components_reducer_context/ComponentA';
import ComponentB from './components_reducer_context/ComponentB';
import ComponentC from './components_reducer_context/ComponentC';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state , action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {

  const [count , dispatch] = useReducer(reducer ,initialState)

  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      {/* <DataFetching /> */}

      {/* <UserContext.Provider value={'Kywleon'}>
        <ChannelContext.Provider value={'Susenji Group'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo />  */}
      {/* <CounterThree />   */}

      <CountContext.Provider value={ { countState: count , countDispatch : dispatch } }>
        <div>
          Count - { count }
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider>
    </div>
  );
}

export default App;
