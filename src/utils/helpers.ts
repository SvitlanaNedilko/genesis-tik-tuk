export function calculator(number: number) {
  if (Number(number) > 10000) {
    const newValue = Number(number) / 1000
    return `${newValue}K`
  } else {
    return number
  }
}
