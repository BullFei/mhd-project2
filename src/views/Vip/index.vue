<template>
  <div class = 'page-vip'>
    <normal-header title = 'VIP'></normal-header>
    <div class = 'vip-main'>
      <cartoon-list :list = "list"></cartoon-list>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import CartoonList from '@/components/CartoonList'
import { getVIPList } from '@/api/cartoon'
import { unformat } from '@/utils/apiHelp'
export default {
  name: 'Vip',
  // 编写 data 配置项的时候 一定要注意不要和 props写混了
  data () {
    return {
      vipList: []
    }
  },
  computed: {
    list () {
      return this.vipList.map(item => {
        return {
          id: item.bigbook_id,
          coverurl: item.coverurl,
          name: item.bigbook_name,
          author: item.bigbook_author,
          view: item.bigbookview
        }
      })
    }
  },
  components: {
    NormalHeader,
    CartoonList
  },
  methods: {
    getVIPList () {
      getVIPList().then(res => {
        if (res.code === 200) {
          const result = JSON.parse(unformat(res.info))
          this.vipList = result.comicsList
        } else {
          console.log(res.code_msg)
        }
      }).catch(err => {
        console.log(err)
        alert('网络异常，请稍后重试')
      })
    }
  },
  created () {
    this.getVIPList()
  }
}
</script>

<style lang="scss" scoped>
.page-vip {
  display: flex;
  flex-direction: column;
  height: 100%;

  .vip-main {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
