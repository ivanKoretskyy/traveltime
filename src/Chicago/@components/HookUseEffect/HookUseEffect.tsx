import * as React from 'react';

import { useEffect, useState } from 'react';

export type HookUseEffectProps = {

}


export const HookUseEffect: React.FC<HookUseEffectProps> = () => {

  const [ count, setCount ] = useState(0)
  const [ textValue, setTextValue ] = useState('')

  useEffect(() => {console.info('effect that run on every component did update no matter what')});
  useEffect(() => {console.info('effect that run on mount only')},[]);
  useEffect(() => { return () => {console.info('effect with unmount')}},[]);
  useEffect(() => {console.info('effect that run on text value but no on counter')},[textValue]);

  return (
    <div>
      HookUseEffect, open console, to see what is going on
      <div>
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
      <div>
        <input value={textValue} onChange={e => setTextValue(e.target.value)}/>
      </div>
      <div>{textValue}</div>

      <div>As far as scheduling, this works the same way as componentDidMount and componentDidUpdate. Your code runs immediately after the DOM has been updated, but before the browser has had a chance to "paint" those changes (the user doesn't actually see the updates until after the browser has repainted).

Summary
useLayoutEffect: If you need to mutate the DOM and/or do need to perform measurements
useEffect: If you don't need to interact with the DOM at all or your DOM changes are unobservable (seriously, most of the time you should use this)</div>
    </div>

  )
} 