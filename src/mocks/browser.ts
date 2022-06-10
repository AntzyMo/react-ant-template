import { setupWorker } from 'msw'
import { handlers } from './user'

export const worker = setupWorker(...handlers)
