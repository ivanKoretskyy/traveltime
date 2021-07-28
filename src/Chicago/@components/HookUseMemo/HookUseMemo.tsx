import React, {useMemo} from 'react';

export type HookUseMemoProps = {
  count: number;
  listOfPeople: string[];
  selected: string | null;
}


export const HookUseMemo: React.FC<HookUseMemoProps> = props => {

  const sortedList = useMemo(() => props.listOfPeople.sort((a,b) => {
    console.info('resort list of people');
    if (a < b) {
      return -1;
    }
    if( a > b) {
      return 1;
    }
    return 0
  }), [props.listOfPeople])

  return (
    <div style={{backgroundColor: 'limegreen'}}>
      <h1>Inside hook use memo</h1>
      <div>{props.count} and selected is: {props.selected}</div>
      {sortedList.map(person => (<div key={person}>{person}</div>))}
    </div>
  )
}