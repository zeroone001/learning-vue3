# 全局API



| 2.x 全局 API               | 3.x 实例 API (`app`)                                         |
| -------------------------- | ------------------------------------------------------------ |
| Vue.config                 | app.config                                                   |
| Vue.config.productionTip   | *removed* ([见下方](https://vue3js.cn/docs/zh/guide/migration/global-api.html#config-productiontip-removed)) |
| Vue.config.ignoredElements | app.config.isCustomElement ([见下方](https://vue3js.cn/docs/zh/guide/migration/global-api.html#config-ignoredelements-is-now-config-iscustomelement)) |
| Vue.component              | app.component                                                |
| Vue.directive              | app.directive                                                |
| Vue.mixin                  | app.mixin                                                    |
| Vue.use                    | app.use ([见下方](https://vue3js.cn/docs/zh/guide/migration/global-api.html#a-note-for-plugin-authors)) |

