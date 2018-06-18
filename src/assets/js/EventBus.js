import Vue from 'vue'
let bus = new Vue();
Object.defineProperty(Vue.prototype, '$bus', {
    get() {
        return this.$root.bus;
    }
});
export default bus;