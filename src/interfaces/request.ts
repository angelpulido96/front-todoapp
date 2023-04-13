export interface Request {
  resource: string,
  method: string,
  data: Object,
  host: string,
  endpoint: string,
  query: Object,
  headers: Object,
  filters: string
}
