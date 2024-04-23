// reducer.ts

import { configureStore } from '@reduxjs/toolkit';
import { createAction, createActions, handleActions } from 'redux-actions';

// 定义 reducer 初始状态
interface State {
  count: number;
}

const initialState: State = {
  count: 0
};
//1.1.批量创建action
export const { increment, decrement } = createActions({
    INCREMENT: (amount = 1) => ({ amount }), // 定义了一个接受 amount 参数的 action creator
    DECREMENT: undefined // 定义了一个不接受参数的 action creator
  });
//1.2.创建单个action
export const action2 = createAction('OTHERACTION', (amount: number)=> {
    return {
      payload: {
        amount:0,
      } 
    }
  })
//2 使用 handleActions 处理 action creators
const reducer = handleActions<State, any>(
  {
    INCREMENT: (state:State, { payload }) => {
        console.log("=============222233333")
        return { ...state, count: state.count + payload }
    },
    DECREMENT: (state:State) => {
        console.log("=============11111122222")
        return { ...state, count: state.count - 1 }
    },
    OTHERACTION:(state:State, { payload }) => {
        console.log("=============44444")
        return { ...state, count: state.count + payload }
    }
  },
  initialState
);

//4 配置store
const store = configureStore({
    reducer,
    devTools: true
  });
export default store;
