export interface ApiResponse<T> {
  success: boolean
  status: number
  errorMessage: string
  data: T
}

export interface AccessTokenResponse {
  accessToken: string
}
