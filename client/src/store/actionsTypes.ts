import { Words } from "../interfaces"

export type stringAaction = {
  type: string
  payload: string
}
export type arrayAction = {
  type: string
  payload: Words[]
}
export type numberAction = {
  type: string
  payload: number
}

