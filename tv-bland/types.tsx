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
  image?: Image
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

export interface Links {
  self: Self
  previousepisode: Previousepisode
  nextepisode?: Nextepisode
}

export interface castLinks {
  self: Self
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
  self: Self
  show: Show
}

export interface Show {
  href: string
}

export interface individualShowDataType {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: any[]
  status: string
  runtime: number
  averageRuntime: number
  premiered: string
  ended: any
  officialSite: string
  schedule: Schedule
  rating: Rating
  weight: number
  network: Network
  webChannel: any
  dvdCountry: any
  externals: Externals
  image: Image
  summary: string
  updated: number
  _links: Links
  _embedded: Embedded
}

export interface Schedule {
  time: string
  days: string[]
}


export interface Country {
  name: string
  code: string
  timezone: string
}

export interface Image {
  medium: string
  original: string
}

export interface Embedded {
  cast: Cast[]
}

export interface Cast {
  person: Person
  character: Character
  self: boolean
  voice: boolean
}

export interface Person {
  id: number
  url: string
  name: string
  country: Country
  birthday: string
  deathday: any
  gender: string
  image: Image
  updated: number
  _links: castLinks
}

export interface Character {
  id: number
  url: string
  name: string
  image: any
  _links: castLinks
}

export interface showInfoType {
  network: Network,
  schedule: Schedule,
  status: string,
  genres: string
}