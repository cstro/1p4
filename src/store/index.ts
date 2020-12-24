import Vue from 'vue';
import Vuex from 'vuex';
import Ratio from './modules/ratio.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Ratio,
  },
});
