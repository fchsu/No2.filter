<template>
  <div id="app">
    <div class="header">
      <div>
        <router-link to="/" tag="h1">Have Fun</router-link>
        <span>
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Explore your own activities">
        </span>
      </div>
    </div>
    <div class="side-content">
      <div>
        <div class="side">
          <div class="location">
            <h3>Location</h3>
            <select v-on:change="filterZone($event)">
              <option value= 0>-- Select district --</option>
              <option :value="item" v-for="(item, i) in allZone" :key="i">{{ item }}</option>
            </select>
          </div>
          <div class="categories">
            <h3>Categories</h3>
            <ul>
              <li class="checkbox" v-for="(item, i) in categories" :key="i" v-on:click="checkOnOff(i)">
                <label :for="categories[i]">
                  <span :class="{ check: totalSelect[(i + 1)] }"><i class="fas fa-check"></i></span>
                  {{ categories[i] }}
                </label>
              </li>
            </ul>
          </div>
        </div>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      allTravelData: [],
      allZone: [],
      categories: ['全部', '免費參觀', '全天候開放'],
      categoriesJson: [' ', 'Ticketinfo', 'Opentime'],
      filterData: [],
      travelData: [],
      totalSelect: [0, false, false, false],
      zone: [],
      noData: [
        {
          "Ticketinfo": "",
          "Zone": "",
          "Px": "",
          "Py": "",
          "Add": "",
          "Gov": "",
          "Class2": "",
          "Class1": "",
          "Website": "",
          "Opentime": "",
          "Description": "",
          "Remarks": "",
          "Parkinginfo_py": "",
          "Parkinginfo_px": "",
          "Name": "",
          "Level": "",
          "Picture1": "",
          "Toldescribe": "",
          "Changetime": "",
          "Tel": "",
          "Picdescribe1": "",
          "Travellinginfo": "",
          "_id": "",
          "Id": ""
        }
      ]
    };
  },
  mounted () {
    const vm = this; // 必須先定義 this，直接在下方程式碼使用 this 會永遠顯示 error.response
    vm.$http
      .get("../dist/static/json/data.JSON")
      .then(function(response) {
        if (response.request.readyState === 4) {
          if (response.request.status === 200) {
            vm.allTravelData = JSON.parse(response.request.responseText);
            vm.allTravelData.forEach((item, i , array) => {
              vm.zone.push(item.Zone);
              vm.travelData.push(item);
            });
            vm.allZone = vm.zone.filter((item, i, array) => {
              return array.indexOf(item) == i;
            });
            vm.$bus.$emit('updated', vm.travelData);
            vm.$bus.$emit('label', vm.totalSelect);
            console.log("json get");
          }
        }
      })
      .catch(function(error) {
        console.log("error.response");
      });
  },
  methods: {
    filterZone (e) {
      if (e.target.value === " ") {
        this.totalSelect.splice(0, 1, '0');
        this.travelFilter();
      } else {
        this.totalSelect.splice(0, 1, e.target.value);
        this.travelFilter();
      }      
    },
    checkOnOff (num) {
      switch (num) {
        case 0:
          if (this.totalSelect[1] == false) {
            this.totalSelect.splice(1, 1, true)
            this.totalSelect.splice(2, 1, true)
            this.totalSelect.splice(3, 1, true)
            this.travelFilter();
          } else {
            this.totalSelect.splice(1, 1, false)
            this.totalSelect.splice(2, 1, false)
            this.totalSelect.splice(3, 1, false)
            this.travelFilter();
          }
          break;
        case 1:
          if (this.totalSelect[2] == true) {
            this.totalSelect.splice(1, 1, false);
            this.totalSelect.splice(2, 1, false);
            this.travelFilter();
          } else {
            this.totalSelect.splice(2, 1, true);
            this.travelFilter();
          }
          break;
        case 2:
          if (this.totalSelect[3] == true) {
            this.totalSelect.splice(1, 1, false);
            this.totalSelect.splice(3, 1, false);
            this.travelFilter();
          } else {
            this.totalSelect.splice(3, 1, true);
            this.travelFilter();
          }
          break;
      }
    },
    travelFilter () {
      if (this.totalSelect[0] == 0) {
        this.travelData.length = 0;
        this.filterData.length = 0;
        this.allTravelData.forEach((item, i , array) => {
          this.travelData.push(item);
        });
        const checkbox = this.totalSelect.filter((item, i, array) => {
          return i > 0;
        });
        switch (checkbox.join(' ')) {
          case "true true true":
            this.filterData = this.travelData.filter((item, i, array) => {
              return item[this.categoriesJson[1]] == this.categories[1] && item[this.categoriesJson[2]] == this.categories[2]; 
            });
            if (this.filterData.length == 0) {
              this.$bus.$emit('updated', this.noData);
            } else {
              this.$bus.$emit('updated', this.filterData);
              this.$bus.$emit('label', this.totalSelect);
            }
            break;
          case "false false false":
            if (this.travelData.length == 0) {
              this.$bus.$emit('updated', this.noData);
            } else {
              this.$bus.$emit('updated', this.travelData);
              this.$bus.$emit('label', this.totalSelect);
            }
            break;
          case "false false true":
            this.filterData = this.travelData.filter((item, i, array) => {
              return item[this.categoriesJson[2]] == this.categories[2]; 
            });
            if (this.filterData.length == 0) {
              this.$bus.$emit('updated', this.noData);
            } else {
              this.$bus.$emit('updated', this.filterData);
              this.$bus.$emit('label', this.totalSelect);
            }
            break;
          case "false true true":
            this.filterData = this.travelData.filter((item, i, array) => {
              return item[this.categoriesJson[1]] == this.categories[1] && item[this.categoriesJson[2]] == this.categories[2]; 
            });
            if (this.filterData.length == 0) {
              this.$bus.$emit('updated', this.noData);
            } else {
              this.$bus.$emit('updated', this.filterData);
              this.$bus.$emit('label', this.totalSelect);
            }
            break;
          case "false true false":
            this.filterData = this.travelData.filter((item, i, array) => {
              return item[this.categoriesJson[1]] == this.categories[1]; 
            });
            if (this.filterData.length == 0) {
              this.$bus.$emit('updated', this.noData);
            } else {
              this.$bus.$emit('updated', this.filterData);
              this.$bus.$emit('label', this.totalSelect);
            }
            break;
        }
      } else {
        this.travelData.length = 0;
        this.filterData.length = 0;
        this.travelData = this.allTravelData.filter((item, i, arrayAll) => {
          return item.Zone == this.totalSelect[0];
        });
        const checkbox = this.totalSelect.filter((item, i, array) => {
          return i > 0;
        });
        switch (checkbox.join(' ')) {
          case "true true true":
            this.filterData = this.travelData.filter((item, i, array) => {
              return item[this.categoriesJson[1]] == this.categories[1] && item[this.categoriesJson[2]] == this.categories[2]; 
            });
            if (this.filterData.length == 0) {
              this.$bus.$emit('updated', this.noData);
            } else {
              this.$bus.$emit('updated', this.filterData);
              this.$bus.$emit('label', this.totalSelect);
            }  
            break;
          case "false false false":
            if (this.travelData.length == 0) {
              this.$bus.$emit('updated', this.noData);
            } else {
              this.$bus.$emit('updated', this.travelData);
              this.$bus.$emit('label', this.totalSelect);
            }  
            break;
          case "false false true":
            this.filterData = this.travelData.filter((item, i, array) => {
              return item[this.categoriesJson[2]] == this.categories[2]; 
            });
            if (this.filterData.length == 0) {
              this.$bus.$emit('updated', this.noData);
            } else {
              this.$bus.$emit('updated', this.filterData);
              this.$bus.$emit('label', this.totalSelect);
            }  
            break;
          case "false true true":
            this.filterData = this.travelData.filter((item, i, array) => {
              return item[this.categoriesJson[1]] == this.categories[1] && item[this.categoriesJson[2]] == this.categories[2]; 
            });
            if (this.filterData.length == 0) {
              this.$bus.$emit('updated', this.noData);
            } else {
              this.$bus.$emit('updated', this.filterData);
              this.$bus.$emit('label', this.totalSelect);
            }  
            break;
          case "false true false":
            this.filterData = this.travelData.filter((item, i, array) => {
              return item[this.categoriesJson[1]] == this.categories[1]; 
            });
            if (this.filterData.length == 0) {
              this.$bus.$emit('updated', this.noData);
            } else {
              this.$bus.$emit('updated', this.filterData);
              this.$bus.$emit('label', this.totalSelect);
            }         
            break;
        }
      }
    }
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",'Microsoft JhengHei', "Droidsansfallback", Helvetica, Arial, sans-serif;
}
.header {
  height: 92px;
  background: #7828b4;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header div {
  display: flex;
  align-items: center;
  width: 1200px;
}
h1 {
  width: 157px;
  height: 44px;
  margin-left: 6.5%;
  background: url("./assets/img/logo.png") 50% 50% no-repeat;
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
  color: #000;
  cursor: pointer;
}
.header span {
  margin-left: 12.1%;
  width: 388px;
  height: 32px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ffffff;
}
.header span i {
  font-size: 20px;
}
.header span input {
  width: calc(100% - 20px - 20px);
  margin-left: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",'Microsoft JhengHei', "Droidsansfallback", Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: #fff;
  background: #7828b4;
  border: none;
}
.header span input::-webkit-input-placeholder {  /* Chrome/Opera/Safari */
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  font-weight: bold;
}
.header span input::-moz-placeholder {  /* Firefox 19+ */
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  font-weight: bold;
}
.header span input:-ms-input-placeholder {  /* IE 10+ */
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  font-weight: bold;
}
.header span input:-moz-placeholder {  /* Firefox 18- */
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
  font-weight: bold;
}
.side-content {
  display: flex;
  justify-content: center;
  background: #f2f2f2;
  padding-bottom: 24px;
}
.side-content > div {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  padding: 0 3.3% 0 3.2%;
}
.side {
  width: 300px;
  height: 298px;
  background: #ebebeb;
}
h3 {
  font-size: 20px;
  font-weight: bold;
}
.location {
  padding: 24px 40px;
}
.location select {
  margin-top: 19px;
  width: 220px;
  height: 40px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",'Microsoft JhengHei', "Droidsansfallback", Helvetica, Arial, sans-serif;
  font-size: 18px;
  background: #ffffff;
  border: none;
  border-radius: 2px;
  box-shadow: 2px 2px 2px #ccc9c9;
  cursor: pointer;
  padding-left: 20px;
}
.categories h3 {
  margin-bottom: 24px;
}
.categories {
  padding: 24px 40px;
  border-top: 1px solid #d7d7d7;
}
.checkbox {
  margin-bottom: 11px;
}
.checkbox,
.checkbox label,
.checkbox input {
  cursor: pointer;
}
.checkbox label {
  display: flex;
}
.checkbox span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background: #ffffff;
  border-radius: 2px;
  margin-right: 6px;
  box-shadow: 1px 1px 1px #ccc9c9;
}
.checkbox input {
  display: none;
}
.checkbox label:hover {
  -webkit-filter: drop-shadow(1px 1px 1px #6d6464);
  filter: drop-shadow(1px 1px 1px #6d6464)
}
.checkbox i {
  color: #ffffff;
  font-size: 12px;
}
.checkbox .check {
  background: #9013FE;
}
</style>
