/*jshint esversion: 6 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Test from '@/components/Test';
import Index from '@/components/Index';
import Login from '@/components/Login';
import Teacher from '@/components/teacher/Index.vue';
import TeacherClass from '@/components/teacher/Class.vue';
import Institute from '@/components/Institute';
import Class from '@/components/teacher/Class';

Vue.use(VueRouter);

const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/teacher/:instituteId',
    name: 'Teacher',
    component: Teacher,
    props: true,
    meta: {
      requiresAuth: true
    }
    // access: {
    //   requiresLogin: true,
    //    requiredPermissions: ['teacher'],
    //    permissionType: 'AtLeastOne' // options: AtLeastOne, CombinationRequired
    // },
    // component: Teacher
  },
  {
    path: '/teacher/class',
    name: 'TeacherClass',
    component: TeacherClass,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/institute',
    name: 'Institute',
    component: Institute,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/teacher/:instituteId/class',
    name: 'Class',
    component: Class,
    props: true,
    meta: {
      requiresAuth: true
    }
  }
];
const router = new VueRouter({ routes });
router.beforeEach((to, from, next) => {
  console.log('Checking Logging info...', localStorage.getItem('isAuthenticated'));
  if (to.matched.some(record => record.meta.requiresAuth) && ((localStorage.getItem('isAuthenticated') == 'false') || (localStorage.getItem('isAuthenticated') == null))) {
    console.log('Not Authenticated');
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    next({
      path: '/',
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    next();
  }
});

export default router;
