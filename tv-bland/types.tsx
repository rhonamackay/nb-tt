export type ScheduleDataType = EpisodeType[]

export interface EpisodeType {
  id: number
  url: string
  name: string
  season: number
  number: number
  type: string
  airdate: string
  airtime: string
  airstamp: string
  runtime: number
  rating: Rating
  image?: Image
  summary?: string
  show: ShowType
  _links: Links2
}

export interface Rating {
  average: any
}

export interface Image {
  medium: string
  original: string
}

export interface ShowType {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime?: number
  averageRuntime: number
  premiered: string
  ended: any
  officialSite: string
  schedule: Schedule
  rating: Rating2
  weight: number
  network: Network
  webChannel: any
  dvdCountry: any
  externals: Externals
  image?: Image2
  summary: string
  updated: number
  _links: Links
}

export interface Schedule {
  time: string
  days: string[]
}

export interface Rating2 {
  average?: number
}

export interface Network {
  id: number
  name: string
  country: Country
  officialSite?: string
}

export interface Country {
  name: string
  code: string
  timezone: string
}

export interface Externals {
  tvrage?: number
  thetvdb?: number
  imdb?: string
}

export interface Image2 {
  medium: string
  original: string
}

export interface Links {
  self: Self
  previousepisode: Previousepisode
  nextepisode?: Nextepisode
}

export interface Self {
  href: string
}

export interface Previousepisode {
  href: string
}

export interface Nextepisode {
  href: string
}

export interface Links2 {
  self: Self2
  show: Show2
}

export interface Self2 {
  href: string
}

export interface Show2 {
  href: string
}