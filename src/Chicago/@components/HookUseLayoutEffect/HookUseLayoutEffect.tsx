import * as React from 'react'

import {useEffect, useState, useLayoutEffect} from 'react';

export type Props = {}

export const HookUseLayoutEffect: React.FC<Props> = () => {

  const [value, setValue] = useState(1);

  useEffect(() => {  // todo: change this to useLayoutEfffect so ui will not be flicking
    if(value === 0) {
      setValue(2)
    }
  },[value])

  return (
    <div>
      <h3>
        HookUseLayoutEffect
      </h3>
      <div>
        <button onClick={() => setValue(0)}>setvalueto 0</button>;
        <div>{value}</div>
      </div>
    </div>

  )
}