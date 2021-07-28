import * as React from 'react';
import { ThemeContext } from '../../../App';

import s from './HookUseContext.module.scss';

export type HookUseContextProps = {
  counter: number
}

export const HookUseContext: React.FC<HookUseContextProps> = (props: HookUseContextProps) => {
  const theme = React.useContext<string>(ThemeContext)
  return (
    <div className={s.container} style={{backgroundColor: theme}}>
      counter: {props.counter}
    </div>
  )
}