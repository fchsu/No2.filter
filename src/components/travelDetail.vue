<template>
  <div class="detail">
    <div class="explore">
      <p><router-link to="/" class="explore-span">Explore </router-link><span>/ {{ travelContent.Name }}</span></p>
    </div>
    <div class="detail-content">
      <div class="img" :style="{backgroundImage: 'url(' + travelContent.Picture1 + ')'}"></div>
      <div class="article">
        <h2>{{ travelContent.Name }}</h2>
        <div class="detail-label">
          <span>{{ travelContent.Zone }}</span>
          <ul class="categories-label">
            <li v-if="travelContent.Ticketinfo == '免費參觀'">{{ travelContent.Ticketinfo }}</li>
            <li v-if="travelContent.Opentime == '全天候開放'">{{ travelContent.Opentime }}</li>
          </ul>
        </div>
        <ul class="address-tel">
          <li><i class="fas fa-map-marker-alt"></i><div>{{ travelContent.Add }}</div></li>
          <li><i class="fas fa-phone"></i><div>{{ travelContent.Tel }}</div></li>
        </ul>
        <p>
          {{ travelContent.Description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'travelDetail',
  data () {
    return {
      travelContent: JSON.parse(localStorage.getItem('travelContent'))
    }
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail {
  max-width: 780px;
  margin-left: 2%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Microsoft JhengHei", "Droidsansfallback", Helvetica, Arial, sans-serif;
}
.explore {
  height: 48px;
  background: #EBEBEB;
  border-radius: 4px;
  margin: 24px 0;
}
.explore p {
  line-height: 48px;
  font-size: 16px;
  letter-spacing: 0;
  padding-left: 16px;
}
.explore p span {
  color: #9b9898;
  font-weight: bold;
}
.explore .explore-span {
  color: #9013FE;
}
.detail-content .img {
  width: 100%;
  height: 352px;
  background: 50% 50%;
  background-size: 100% auto;
}
.article {
  padding: 24px 6.4%;
  background: #FFFFFF;
}
.article h2 {
  font-size: 36px;
  font-weight: bold;
  color: #9013FE;
  line-height: 36px;
}
.detail-label {
  display: flex;
  flex-wrap: wrap;
  margin: 24px 0 15px 0;
}
.detail-label span {
  font-weight: bold;
  font-size: 16px;
  color: #000000;
  padding-top: 4px;
  margin: 0 20px 4px 0;
}
.categories-label {
  display: flex;
}
.categories-label li {
  background: #c1baba;
  border-radius: 100px;
  height: 24px;
  line-height: 24px;
  padding: 0 16px;
  font-style: Italic;
  font-size: 16px;
  color: #ffffff;
  margin-right: 5px;
}
.address-tel {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.address-tel li {
  margin: 0 20px 5px 0;
  font-size: 16px;
  color: #9b9b9b;
  display: flex;
}
.address-tel i {
  margin-right: 7px;
}
.article p {
  font-weight: bold;
  font-size: 16px;
  color: #000000;
  line-height: 24px;
}
</style>