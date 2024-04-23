import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import testStore, { action2, decrement, increment } from './test/action';
import { changeChannelAction2 } from './store/action';
import { changeChannelAction } from './store/thunk';
import { changeChannel } from './store/slice';
import { changeAsyncUserMsg, changeUserMsg } from './store/method';

function App() {
  const [count, setCount] = useState(0);
 
  const handleClick = useCallback(() => {
    console.log(`Clicked ${count} times`);
  }, [count]);
  store.dispatch(changeChannelAction({userId:"234234243"}))
  store.dispatch(changeChannelAction2("sdf"))
  store.dispatch(changeChannel({id:"23",name:"test3"}))
  store.dispatch(changeUserMsg("aaaaaaaaa"))
  store.dispatch(changeAsyncUserMsg("bbbbbbbb"))
  testStore.dispatch(increment(3))
  testStore.dispatch(decrement(3))
  testStore.dispatch(action2(4))
  const CounterComponent = () => {
    const name = useSelector((state:any) => {
      console.log(state)
      return state.channelReducer.channel.name
    })
     return <div>{name}</div>
  }
  return (
    <div className="App">
      <Provider store={store}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleClick}>Click me</button>
      <CounterComponent/>
      </Provider>
    </div>
  );
}

export default App;
