import { idSelector } from 'core/store/selector'
import { useSelector } from './hooks'

const getPrefix = (isGlobal?: string) => {
  if (isGlobal) return 'G'
  const id = useSelector(idSelector)
  return id
}

export default getPrefix;