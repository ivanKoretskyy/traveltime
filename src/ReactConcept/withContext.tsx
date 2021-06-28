//function that accept component ,and provide context props on it

import React from 'react';
import {ThemeContext} from '../App'

export type ComponentToWrapType<T> = React.ComponentType<T & {theme: string}>

export const withContext = <OwnProps extends Record<string, unknown>>(ComponentToWrap: ComponentToWrapType<OwnProps>) => {
  return (ownProps: OwnProps) => (
    <ThemeContext.Consumer>
      {context => <ComponentToWrap {...ownProps} theme={context}/>}
    </ThemeContext.Consumer>
  )
}