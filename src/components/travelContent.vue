<template>
  <div class="content">
    <p v-if="travelData[0]['_id'] != ''">Showing <span>{{ travelData.length }}</span> results by…</p>
    <ul class="label" v-if="travelData[0]['_id'] != ''">
      <li v-if="travelLabel[0] != 0">{{ travelLabel[0] }}<i class="far fa-times-circle"></i></li>
      <li v-if="travelLabel[2] == true">免費參觀<i class="far fa-times-circle"></i></li>
      <li v-if="travelLabel[3] == true">全天候開放<i class="far fa-times-circle"></i></li>
    </ul>
    <ul id="travel-content" v-if="travelData[0]['_id'] != ''">
      <li v-for="item in travelData" :key="item['_id']" v-on:click="travelDetail(item)">
        <router-link :to="{
          name: 'travelDetail',
          params: { id: item['_id'] }
          }">
          <div class="img" :style="{backgroundImage: 'url(' + item.Picture1 + ')'}"></div>
          <div class="data">
            <h2>{{ item.Name }}</h2>
            <p>{{ item.Description }}</p>
            <div>
              <span>{{ item.Zone }}</span>
              <ul class="categories-label">
                <li v-if="item.Ticketinfo == '免費參觀'">{{ item.Ticketinfo }}</li>
                <li v-if="item.Opentime == '全天候開放'">{{ item.Opentime }}</li>
              </ul>
            </div>
            <ul class="address-tel">
              <li><i class="fas fa-map-marker-alt"></i><div>{{ item.Add }}</div></li>
              <li><i class="fas fa-phone"></i><div>{{ item.Tel }}</div></li>
            </ul>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "travelContent",
  data() {
    return {
      travelData: JSON.parse(localStorage.getItem('updated')) || [],
      travelLabel: []
    };
  },
  mounted () {
    this.$bus.$on('updated', this.updated);
    this.$bus.$on('label', this.label);
  },
  methods: {
    updated (array) {
      const Len = array.length;
      this.travelData.length = 0;
      for (let i = 0; i < Len; i++) {
        this.travelData.push(array[i]);  
      }
      localStorage.setItem('updated', JSON.stringify(this.travelData));    
    },
    travelDetail (object) {
      localStorage.setItem('travelContent', JSON.stringify(object));
    },
    label (array) {
      this.travelLabel.length = 0;
      array.forEach((item, i, data) => {
        this.travelLabel.push(item);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  max-width: 780px;
  margin-left: 2%;
}
.content p {
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  margin: 24px 0 8px 0;
}
.content > p span {
  font-weight: bold;
  color: #9013FE;
}
.content .label {
  display: flex;
  margin-bottom: 24px;
}
.content .label li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  padding: 0 16px;
  margin-right: 8px;
  border: 1px solid #9013fe;
  border-radius: 100px;
  font-style: italic;
  font-weight: bold;
  font-size: 16px;
  color: #9013fe;
  cursor: pointer;
}
.content .label li i {
  margin-left: 12px;
}
.content .label li:hover {
  background: #9013FE;
  color: #FFFFFF;
}
#travel-content > li {
  margin: 0 0 24px 0;
}
#travel-content a {
  display: flex;
  width: 100%;
  background: #ffffff;
  border: none;
  border-radius: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Microsoft JhengHei", "Droidsansfallback", Helvetica, Arial, sans-serif;
  font-style: normal;
  box-shadow: 2px 2px 2px #ccc9c9;
  cursor: pointer;
}
#travel-content a:hover {
  box-shadow: 2px 2px 2px #6d6464;
}
#travel-content .img {
  width: 200px;
  max-height: 320px;
  background: #dae7e8 50% 50% no-repeat;
  background-size: auto 100%;
}
#travel-content .data {
  width: calc(100% - 200px);
  padding: 24px 20px;
}
#travel-content .data h2 {
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 24px;
  color: #9013fe;
  line-height: 36px;
}
#travel-content .data p {
  font-weight: normal;
  font-size: 16px;
  color: #000000;
  line-height: 24px;
  margin: 0 0 13px 0;
  height: 50px;
  overflow: hidden;
}
#travel-content .data div {
  display: flex;
  flex-wrap: wrap;
}
#travel-content .data span {
  font-weight: bold;
  font-size: 16px;
  color: #000000;
  padding-top: 4px;
  margin: 0 20px 4px 0;
}
#travel-content .categories-label {
  display: flex;
}
#travel-content .categories-label li {
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
#travel-content .address-tel {
  display: flex;
  flex-wrap: wrap;
  margin-top: 14px;
}
#travel-content .address-tel li {
  margin: 0 20px 5px 0;
  font-size: 16px;
  color: #9b9b9b;
  display: flex;
}
#travel-content .address-tel i {
  margin-right: 7px;
}
</style>
