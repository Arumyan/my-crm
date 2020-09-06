import Home from '../Pages/Home/Home';
import Category from '../Pages/Category/Category';
import Details from '../Pages/Details/Details';
import History from '../Pages/History/History';
import NewItem from '../Pages/NewItem/NewItem';
import Planning from '../Pages/Planning/Planning';
import Profile from '../Pages/Profile/Profile';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

import EmptyLayout from '../Layout/EmptyLayout/EmptyLayout';
import MainLayout from '../Layout/MainLayout/MainLayout';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    layout: MainLayout
  },
  {
    path: '/category',
    exact: true,
    component: Category,
    layout: MainLayout
  },
  {
    path: '/details',
    exact: true,
    component: Details,
    layout: MainLayout
  },
  {
    path: '/history',
    exact: true,
    component: History,
    layout: MainLayout
  },
  {
    path: '/new-item',
    exact: true,
    component: NewItem,
    layout: MainLayout
  },
  {
    path: '/planning',
    exact: true,
    component: Planning,
    layout: MainLayout
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
    layout: MainLayout
  },
  {
    path: '/login',
    exact: true,
    component: Login,
    layout: EmptyLayout
  },
  {
    path: '/register',
    exact: true,
    component: Register,
    layout: EmptyLayout
  }
]
