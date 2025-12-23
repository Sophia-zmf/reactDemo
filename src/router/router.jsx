// 路由配置文件（如 router/index.js）
import { useRoutes } from 'react-router-dom';
import Product from '../pages/Product';
import Catalog from '../pages/Catalog'; // 父组件（包含导航和 Outlet）
import WoodenToys from '../pages/WoodenToys'; // 子组件：木制玩具
import StuffedAnimals from '../pages/StuffedAnimals'; // 子组件：毛绒动物
import Delivery from '../pages/Delivery';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import AllToys from '../pages/AllToys'; // 新增：所有玩具（对应 /catalog/all）

const routesList = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/product/:id',
    element: <Product />
  },
  // 嵌套路由：父路由 /catalog
  {
    path: '/catalog', // 父路由路径（不带参数）
    element: <Catalog />, // 父组件（必须包含 <Outlet>）
    // children: [
    //   // 子路由1：/catalog/all（所有玩具）
    //   { path: 'all', element: <AllToys /> }, 
    //   // 子路由2：/catalog/wooden-toys（木制玩具）
    //   { path: 'wooden-toys', element: <WoodenToys /> }, 
    //   // 子路由3：/catalog/stuffed-animals（毛绒动物）
    //   { path: 'stuffed-animals', element: <StuffedAnimals /> }, 
    // ]
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
  // 404 路由（可选，处理未匹配路径）
  {
    path: '*',
    element: <div>404 Not Found</div>
  }
];

export default function Router() {
  const routes = useRoutes(routesList);
  return routes;
}