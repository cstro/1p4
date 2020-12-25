declare module '*.vue' {
  import Vue, { DirectiveOptions } from 'vue';

  export default Vue;
}

declare module 'vue-click-outside' {
  const vClickOutside: DirectiveOptions;
  export default vClickOutside;
}
