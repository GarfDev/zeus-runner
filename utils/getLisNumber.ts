import getNaturalNumber from './getNaturalNumber'

function getListNumber(range: number) {
  const randomList: number[] = []
  for (let i = 0; i < range; i++) {
    randomList.push(getNaturalNumber())
  }
  return randomList
}

export default getListNumber;