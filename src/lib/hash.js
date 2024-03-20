import { createHash } from 'crypto'

export function hash(password) {
    return createHash('sha256').update(password).digest('base64');
}