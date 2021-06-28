import React from 'react';
import { withContext } from './withContext';

type StyleButtonComponentProps = {
  theme: string
}

const StyleButtonComponent = (props: StyleButtonComponentProps) => {

  return <button style={{backgroundColor: props.theme}}>styled component</button>
}

export const StyleButton = withContext(StyleButtonComponent)