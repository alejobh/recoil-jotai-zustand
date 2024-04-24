export const getEven = (value: number) => {
  if(value === 0) return 'Empty'
  return (value + 1) % 2 ? 'Even' : 'Odd'
}