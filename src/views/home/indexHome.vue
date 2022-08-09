<template>
  <div>
<TypeNav></TypeNav>
<ListBanner></ListBanner>
<todayRecommend></todayRecommend>
<rank></rank>
<like></like>
<floor></floor>
<brand></brand>
  </div>
</template>

<script>

import ListBanner from '@/views/home/list-container/listContainer.vue'
import todayRecommend from '@/views/home/today-recommend/todayRecommend.vue'
import rank from '@/views/home/rank/rankH.vue'
import like from '@/views/home/like/likeH.vue'
import floor from '@/views/home/floor/floorH.vue'
import brand from '@/views/home/brand/brandH.vue'
export default {
  components: {
    ListBanner,
    todayRecommend,
    rank,
    like,
    floor,
    brand
  }
}
</script>

<style>

</style>
