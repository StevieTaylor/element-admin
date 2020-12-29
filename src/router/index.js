import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleList from '../views/article/ArticleList.vue'
import ArticleCreate from '../views/article/ArticleCreate.vue'
import ArticleEdit from '../views/article/ArticleEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/article/list',
  },
  {
    path: '/article/list',
    name: 'ArticleList',
    component: ArticleList
  },
  {
    path: '/article/create',
    name: 'ArticleCreate',
    component: ArticleCreate
  },
  {
    path: '/article/:id/edit',
    name: 'ArticleEdit',
    component: ArticleEdit
  },
]

const router = new VueRouter({
  routes
})

export default router
