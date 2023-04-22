export interface Request {
  resource: string,
  method: string,
  data?: Object,
  endpoint?: string,
  headers?: Object,
  filters?: string
}
