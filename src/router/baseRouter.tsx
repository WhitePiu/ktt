import Admin from '../ui/admin/AdminView'
import Login from '../ui/LoginView'


// 配置基础路由
export const baseRouter = [
  {path:"/", element:<Login/>},
  {path:"/admin", element:<Admin/>,
    children:[]
  }
]