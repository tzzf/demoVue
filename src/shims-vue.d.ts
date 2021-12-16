import Vue from 'vue'
declare module '*.vue' {
  export default Vue
}


declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
    $createDialog: any;
    $createToast: any;
    $i18n: any;
    // [propName: string]: any;
  }
}