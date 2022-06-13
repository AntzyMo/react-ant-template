import type { ReactNode } from 'react'
import type { RouteObject } from 'react-router-dom'

export interface routes extends RouteObject {
  children?: routes[]
  meta?: {
    title?: string
    role?: string
    icon?: ReactNode | string
  }
}

export type typeForArr<T> = T extends Array<infer X> ? X : never
