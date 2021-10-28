import type { I18NConfig } from '../config-shared'
import type { NextRequest } from '../web/spec-extension/request'
import type { NextFetchEvent } from '../web/spec-extension/fetch-event'

export interface NodeHeaders {
  [header: string]: string | string[] | undefined
}

export interface RequestData {
  geo?: {
    city?: string
    country?: string
    region?: string
  }
  headers: NodeHeaders
  ip?: string
  method: string
  nextConfig?: {
    basePath?: string
    i18n?: I18NConfig | null
    trailingSlash?: boolean
  }
  page?: {
    name?: string
    params?: { [key: string]: string }
  }
  url: string
}

export interface FetchEventResult {
  response: Response
  waitUntil: Promise<any>
}

export type NextMiddleware = (
  request: NextRequest,
  event: NextFetchEvent
) => Promise<Response | null>
