import { lazy } from 'react'

const MainPage = lazy(() => import('pages/main_page/main_page'))
const SignInPage = lazy(() => import('pages/auth_page/sign_in_page'))
const SignUpPage = lazy(() => import('pages/auth_page/sign_up_page'))
const BasketPage = lazy(() => import('pages/basket_page/basket_page'))
const RequestPage = lazy(() => import('pages/request_page/request_page'))
const MyPage = lazy(() => import('pages/my_page/my_page'))

const routes = [
    {
        path: '/',
        component: MainPage,
        exact: true,
    },
    {
        path: '/signin',
        component: SignInPage
    },
    {
        path: '/signup',
        component: SignUpPage
    },
    {
        path: '/basket/:basketId',
        component: BasketPage
    },
    {
        path: '/request',
        component: RequestPage
    },
    {
        path: '/me',
        component: MyPage
    }
]

export default routes