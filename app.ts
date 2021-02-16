import { getClient } from './core/client';

interface Props {
    url: string;
    token: string;
}

function application({token, url}: Props) {
    const client = getClient()
    
    client.connect(url)
}