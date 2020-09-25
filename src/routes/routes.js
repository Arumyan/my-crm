import Home from '../Pages/Home/Home';
import Category from '../Pages/Category/Category';
import Details from '../Pages/Details/Details';
import History from '../Pages/History/History';
import Record from '../Pages/Record/Record';
import Planning from '../Pages/Planning/Planning';
import Profile from '../Pages/Profile/Profile';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Page404 from '../Pages/Page404/Page404';

import EmptyLayout from '../Layout/EmptyLayout/EmptyLayout';
import MainLayout from '../Layout/MainLayout/MainLayout';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    layout: MainLayout,
    authRequire: true
  },
  {
    path: '/category',
    exact: true,
    component: Category,
    layout: MainLayout,
    authRequire: true
  },
  {
    path: '/details/:id',
    exact: true,
    component: Details,
    layout: MainLayout,
    authRequire: true
  },
  {
    path: '/history',
    exact: true,
    component: History,
    layout: MainLayout,
    authRequire: true
  },
  {
    path: '/record',
    exact: true,
    component: Record,
    layout: MainLayout,
    authRequire: true
  },
  {
    path: '/planning',
    exact: true,
    component: Planning,
    layout: MainLayout,
    authRequire: true
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
    layout: MainLayout,
    authRequire: true
  },
  {
    path: '/login',
    exact: true,
    component: Login,
    layout: EmptyLayout,
    authRequire: false
  },
  {
    path: '/register',
    exact: true,
    component: Register,
    layout: EmptyLayout,
    authRequire: false
  },
  {
    path: '*',
    exact: false,
    component: Page404,
    layout: MainLayout,
    authRequire: true
  }
]
