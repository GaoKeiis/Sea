import Vue from 'vue'
import Router from 'vue-router'
import print from '@/view/footerpage/print'
import shopping from '@/view/footerpage/shopping'
import my from '@/view/footerpage/my'
import Home from '@/view/home/home'
import navpage from '@/components/routerList/navpage'
import indexTab from '@/view/children/indexTab'
import towpage from '@/view/children/towpage'
import nurse from '@/view/children/nurse'
import Luggage from '@/view/children/Luggage'
import household from '@/view/children/household'
import kitchen from '@/view/children/kitchen'
import accessories from '@/view/children/accessories'
import snacks from '@/view/children/snacks'
import baby from '@/view/children/baby'
import furniture from '@/view/children/furniture'
import login from '@/view/children/login'
import branch from '@/view/children/classification/branch'
import brand from '@/view/children/classification/brand'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (savedPosition) {
    if (savedPosition) {
    return savedPosition
    } else {
      return { x: 0, y : 0}
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/print',
      component: print,
      redirect: '/print/branch',
      children: [
        {
          path: 'branch',
          component: branch
        },
        {
          path: 'brand',
          component: brand
        }
      ]
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/my',
      name: 'my',
      component: my,
      beforeEnter : (to, from, next) => {
        var user = window.localStorage['userInfor'];
        console.log(user)
        if( !user ) {
          next({path: '/login',query:{"to":to.name}});
        } else {
          next();
        }
      }
    },
    {
      path: '/login',
      params: {toUrl: ''},
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/home',
      children: [
        {
          path: '/',
          component: navpage
        },
        {
          path: 'indexTab',
          component: indexTab
        },
        {
          path: 'towpage',
          component: towpage
        },
        {
          path: 'nurse',
          component: nurse
        },
        {
          path: 'Luggage',
          component: Luggage
        },
        {
          path: 'household',
          component: household
        },
        {
          path: 'kitchen',
          component: kitchen
        },
        {
          path: 'accessories',
          component: accessories
        },
        {
          path: 'snacks',
          component: snacks
        },
        {
          path: 'baby',
          component: baby
        },
        {
          path: 'furniture',
          component: furniture
        }
      ]
    }
  ]
})
