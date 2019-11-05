import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    light: true,
    themes: {
      light: {

        primary: '#FF726F',
        secondary: '#f7f7f7'
      }
    }
  },
  icons: {
    iconfont: 'mdi',
  }
});
