import * as React from 'react';

export type MemoComponentProps = {
  count: number;
  onClick(): void
}
const MemoComponent: React.FC<MemoComponentProps> = (props: MemoComponentProps) => {
  console.info('reevaluate Memo Component')
  return <div style={{backgroundColor: 'yellow'}} onClick={props.onClick}><h1>MemoComponent</h1><h2>{props.count}</h2></div>
}

export default React.memo(MemoComponent)