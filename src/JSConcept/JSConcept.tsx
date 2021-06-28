import * as React from 'react';
import { useEffect, useState } from 'react';
import SingleTone from './single.js';

export const JSConcept: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  useEffect(
    () => {
      console.info('using use effect mount');
      setLoading(true)
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {console.log(json); setLoading(false)});
      
      return function umount() {
        console.info('will unmount')
      }
    },
    []);
  const [count, setCounter] = useState(0)

  return (
    <div>
      <div onClick={() => {
        const p = SingleTone.getInstance('ivan', 'kor');
        console.info(p)
      }}>SingleTone firstPerson</div>
      <div onClick={() => {
        const p2 = SingleTone.getInstance('ivan2', 'kor2');
        console.info(p2)
      }}>SingleTone firstPerson</div>
      <button onClick={() => setCounter(count + 1)}>{count}</button>
      {isLoading && <span>loading ...</span>}
    </div>
  )
}
