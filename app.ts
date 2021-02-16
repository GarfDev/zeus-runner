import { updateToken, updateUrl } from 'core/store/actions'
import { useDispatch } from 'utils/hooks'
import { getClient } from './core/client'
//
import onConnect from 'listeners/connect'

interface Props {
  url: string
  token: string
}

function application({ token, url }: Props) {
  const client = getClient()

  // Initialize Store
  const dispatch = useDispatch()
  dispatch(updateToken(token))
  dispatch(updateUrl(url))

  // Register Listeners
  client.on('connect', onConnect)

  // Fire first connection
  client.connect(url)
}

export default application;