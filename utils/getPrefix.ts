import { idSelector } from 'core/store/selector'
import { useSelector } from './hooks'

const getPrefix = () => {
  const id = useSelector(idSelector)
  return id
}

export default getPrefix;