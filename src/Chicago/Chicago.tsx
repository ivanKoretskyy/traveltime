import * as React from 'react';

import s from './Chicago.module.scss';

import { HookUseContext, HookUseEffect, HookUseLayoutEffect, HookUseReducer, TextCanvas } from './@components'

export type ChicagoProps = {

}

export type ChicagoState = {
  isOpen: boolean
}

export class Chicago extends React.Component<ChicagoProps, ChicagoState> {
  state = {isOpen: true}

  render() {
    return (
    <div>
      <div>Chicago</div>
      <div className={s.section}>
        <HookUseEffect/>
      </div>
      <div  className={s.section}>
        <HookUseLayoutEffect/>
      </div>
      <div  className={s.section}>
        <HookUseContext counter={1}/>
      </div>
      <div className={s.section}>
        <HookUseReducer  initialCount={31}/>
      </div>
      <div className={s.section}>
        <TextCanvas type="fill"/>
      </div>
      <div className={s.section}>
        <TextCanvas type="stroke"/>
      </div>
    </div>
    );
  }
}