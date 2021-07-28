

export function getRandom<T>(list: Array<T>): T | null {
  if(list.length) {
    const index = Math.floor(Math.random()* list.length);
    return list[index];
  }

  return null
}