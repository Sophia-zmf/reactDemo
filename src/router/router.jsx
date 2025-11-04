import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'


import Product from '../pages/Product';
import Catalog from '../pages/Catalog';
import App from '../App';
import WoodenToys from '../pages/WoodenToys';
import Delivery from '../pages/Delivery';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import StuffedAnimals from '../pages/StuffedAnimals';

// 1. 准备一个路由数组 数组中定义所有的路由对应关系
const routesList = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '/product/:id',
        element: <Product />
    },
    {
        path: '/catalog',
        element: <Catalog />,
        children: [
            // 子路由1：/catalog/all
            {
              path: 'wooden-toys', // 子路由路径，无需加 /
              element: <WoodenToys /> // 子路由组件
            },
            // 子路由2：/catalog/electronics
            {
              path: 'stuffed-animals',
              element: <StuffedAnimals />
            },
        ]
    },
    {
        path: '/delivery',
        element: <Delivery />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contacts',
        element: <Contacts />
    },
]
export default function Router() {
    // 2. 使用useRoutes进行匹配
    const routes = useRoutes(routesList)
    return routes
}
