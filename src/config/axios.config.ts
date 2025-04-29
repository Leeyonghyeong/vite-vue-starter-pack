import { AccessTokenResponse, ApiResponse } from '@/types/api.Types'
import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://api.sinhwamoney.co.kr/api' : 'http://localhost:8080/api',
  withCredentials: true,
})

// ✅ 모든 요청에 AccessToken 자동 포함
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// ✅ 응답 인터셉터 (AccessToken 만료 시 자동 갱신)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      try {
        localStorage.removeItem('accessToken')

        // 🔥 AccessToken 만료 시 RefreshToken으로 재발급 요청
        const { data: refreshResponse } = await api.post<ApiResponse<AccessTokenResponse>>(
          '/user/auth/refresh',
          {},
          { withCredentials: true }
        )

        if (refreshResponse.success) {
          localStorage.setItem('accessToken', refreshResponse.data.accessToken)

          // ✅ 새 AccessToken 저장
          error.config.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`
          return axios(error.config)
        } else {
          throw new Error(error.response.data.message)
        }

        // ✅ 원래 요청 재시도
      } catch (refreshError) {
        console.error('RefreshToken 만료됨, 로그아웃 처리 필요:', refreshError)
        localStorage.removeItem('accessToken')
      }
    }
    return Promise.reject(error)
  }
)

export default api
