<template>
  <div id="app">
    <div>{{ $t('title') }}</div>
    <cube-button @click="switchLanguage" >切换语言</cube-button>
    <img alt="Vue logo" src="./assets/logo.png">
    <cube-button @click="loadingFunc" >Submit Button</cube-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
// import { Dialog } from 'cube-ui'

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {

  switchLanguage(): void {
    console.log('this.$i18n00-->', this.$i18n.locale);
    this.$i18n.locale = this.$i18n.locale === 'zh-CN' ? 'en' : 'zh-CN';
    // .locale = lang;
  }

  loadingFunc(): void {
    // const dialog = this.$createDialog({
    //   type: 'confirm',
    //   title: 'title',
    //   content: 'content'
    // }, false)
    // dialog.show()
    const loading = this.$createToast({
       time: 1000,
    }, false)
    loading.show()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
