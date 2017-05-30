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
import searchpage from '@/view/children/searchpage'
import Luggage from '@/view/children/Luggage'
import navlistchilde from '@/view/children/navlistchilde'
import household from '@/view/children/household'
import kitchen from '@/view/children/kitchen'
import accessories from '@/view/children/accessories'
import snacks from '@/view/children/snacks'
import baby from '@/view/children/baby'
import furniture from '@/view/children/furniture'
import login from '@/view/children/login'
import branch from '@/view/children/classification/branch'
import brand from '@/view/children/classification/brand'
import sonpDeall from '@/view/children/sonpDeall'
import fenpage from '@/view/children/fenleipage'
import fenchild from '@/view/children/fenleipage/fenchild'
import fentowpage from '@/view/children/fenleipage/fentowpage'
import fepage from '@/view/children/fenleipage/fepage'
import order from '@/view/children/MyallSubRouting/order'
import all from '@/view/children/MyallSubRouting/all'
import Payment from '@/view/children/MyallSubRouting/Payment'
import Delivery from '@/view/children/MyallSubRouting/Delivery'
import Collecting from '@/view/children/MyallSubRouting/Collecting'
import refund from '@/view/children/MyallSubRouting/refund'
import Collection from '@/view/children/MyallSubRouting/Collection'
import RedDiscount from '@/view/children/RedDiscount'
import available from '@/view/children/RedDiscount/available'
import Oneisfor from '@/view/children/RedDiscount/Oneisfor'
import Expired from '@/view/children/RedDiscount/Expired'
import footprint from '@/view/children/RedDiscount/footprint'
import replace from '@/view/children/RedDiscount/replace'

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
      path: '/searchpage',
      name: 'searchpage',
      component: searchpage
    },
    {
      path: '/order',
      name: 'order',
      redirect: '/order/all',
      component: order,
      children: [
        {
          path: '/order/all',
          component: all
        },
        {
          path: '/order/Payment',
          component: Payment
        },
        {
          path: '/order/Delivery',
          component: Delivery
        },
        {
          path: '/order/Collecting',
          component: Collecting
        },
        {
          path: '/order/refund',
          component: refund
        }
      ]
    },
    {
      path: '/Collection',
      name: 'Collection',
      component: Collection
    },
     {
      path: '/RedDiscount',
      name: 'RedDiscount',
      redirect: '/RedDiscount/available',
      component: RedDiscount,
      children: [
        {
          path: '/RedDiscount/available',
          component: available
        },
        {
          path: '/RedDiscount/Oneisfor',
          component: Oneisfor
        },
        {
          path: '/RedDiscount/Expired',
          component: Expired
        }
      ]
    },
    {
      path: '/footprint',
      name: 'footprint',
      component: footprint
    },
    {
      path: '/replace',
      name: 'replace',
      component: replace
    },
    {
      path: '/fenpage/:Subject',
      name: 'fenpage',
      redirect: '/fenpage/fenchild/:Subject',
      component: fenpage,
      children: [
        {
          path: '/fenpage/fenchild/:Subject',
          component: fenchild
        },
        {
          path: '/fenpage/fentowpage/:Subject',
          component: fentowpage
        },
        {
          path: '/fenpage/fepage/:Subject',
          component: fepage
        }
      ]
    },
    {
      path: '/my',
      name: 'my',
      component: my,
      beforeEnter : (to, from, next) => {
        var user = window.localStorage['userInfor'];
        if( !user ) {
          next({path: '/login',query:{"to":to.name}});
        } else {
          next();
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/sonpDeall/:ProductID',
      name: 'sonpDeall',
      component: sonpDeall
    },
    {
      path: '/navlistchilde/:ActivityID',
      name: 'navlistchilde',
      component: navlistchilde
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
