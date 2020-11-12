<template>
  <div class = 'page-ranking'>
    <normal-header title = '排行'></normal-header>
    <div class = 'ranking-main'>
      <header-type :types = 'types' @click = 'onChange'></header-type>
      <cartoon-list :list = "cartoonList" :isRanking = "true"></cartoon-list>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import HeaderType from '@/components/HeaderType'
import CartoonList from '@/components/CartoonList'
import { unformat } from '@/utils/apiHelp'
import { getRankList } from '@/api/cartoon'

export default {
  name: 'Ranking',
  data () {
    return {
      // 设置排行榜分类的数据，官方没有给大家提供这个接口数据
      types: [
        { id: 1, description: '热搜榜', ranktype: 6 },
        { id: 2, description: '人气榜', ranktype: 1 },
        { id: 3, description: '畅销榜', ranktype: 4 },
        { id: 4, description: '新书榜', ranktype: 2 },
        { id: 5, description: '完结榜', ranktype: 5 },
        { id: 6, description: '免费榜', ranktype: 3 }
      ],
      ranklist: []
    }
  },
  computed: {
    cartoonList () {
      return this.ranklist.map(item => {
        return {
          id: item.bigbookid,
          coverurl: item.coverurl,
          name: item.name,
          author: item.author,
          view: item.sales
        }
      })
    }
  },
  components: {
    NormalHeader,
    HeaderType,
    CartoonList
  },
  methods: {
    getRankList (ranktype) {
      getRankList(ranktype).then(res => {
        if (res.code === 200) {
          const result = JSON.parse(unformat(res.info))
          // console.log(result)
          this.ranklist = result.ranklist
        } else {
          console.log(res.code_msg)
        }
      })
    },
    onChange (payload) {
      this.getRankList(payload.data.ranktype)
    }
  },
  created () {
    // 默认进来之后，直接去请求 热搜榜的数据
    this.getRankList(this.types[0].ranktype)
  }
}
</script>

<style lang='scss' scoped>
.page-ranking {
  display: flex;
  flex-direction: column;
  height: 100%;

  .ranking-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
