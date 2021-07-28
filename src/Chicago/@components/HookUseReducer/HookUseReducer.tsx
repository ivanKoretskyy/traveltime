import React, { useMemo } from 'react';
import {HookUseMemo} from '../HookUseMemo';
import { getRandom } from '../../../helpers'
import MemoComponent from '../MemoComponent/MemoComponent'
export type HookUseReducerProps = {
  initialCount: number
}

export type State = {
  count: number;
  currentUser?: string;
}

function init(initialCount: number): State {
  return {count: initialCount}
}

function reducer(state: State, action: {payload?: number,type: 'increment' | 'decrement' | 'reset'}) {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1};
    case 'decrement':
      return {...state, count: state.count -1 };
    case 'reset':
      return {...state, ...init(action.payload ?? 0)};
    default:
      return {...state}
  }
}

export const HookUseReducer: React.FC<HookUseReducerProps> = props => {
  const listOfPeople = useMemo(() => ['Ivan', 'Luka', 'Renata', 'Natalia', 'Aldo' ], []);
  const selected = getRandom(listOfPeople);
  const [value, dispatch] = React.useReducer(reducer, props.initialCount, init);
  const handleClick = React.useCallback(() => console.info('click on Memo Component'),[])
  return (
    <div>
      HookUseReducer
      <div>
        {value.count}
      </div>
      <button onClick={() => {dispatch({type: 'increment'})}}>increment</button>
      <button onClick={() => {dispatch({type: 'decrement'})}}>decrement</button>
      <button onClick={() => {dispatch({type: 'reset', payload: props.initialCount})}}>reset</button>
      <HookUseMemo count={value.count} listOfPeople={listOfPeople} selected={selected}/>
      <MemoComponent onClick={handleClick} count={value.count}/>
    </div>
  )
}