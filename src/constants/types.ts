import { z } from 'zod'

export type LANDING_FACT = {
  text: string
}

export type FEATURE_CARD = {
  spotId: number
  image: string
  title: string
  description: string
}
