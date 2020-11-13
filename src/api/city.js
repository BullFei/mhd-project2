// 专门处理城市相关的，接口请求的
// 注意，城市相关的接口 是 找卖座网拿过来的，不能去使用request.js 这个封装好的axios
// 直接使用 axios 实例
import axios from 'axios'

export const getCityList = () => {
  return axios({
    url: '/maizuo/gateway?k=9646779',
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1605174562101026220736513"}',
      'X-Host': 'mall.film-ticket.city.list'
    }
  })
}
