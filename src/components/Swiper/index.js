// 引入抽离出来的 Swiper 插件
import Swiper from './Swiper.vue'
import SwiperItem from './SwiperItem.vue'

// 暴露
/*
  export default {}  => import xxx from ""
  export {} =>   import {} from '

  如果上述两个都写了
  import xxx, {} from ""
*/
export {
  Swiper,
  SwiperItem
}
