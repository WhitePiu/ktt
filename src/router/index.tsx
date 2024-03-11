import { useRoutes } from "react-router-dom";
import { baseRouter } from "./baseRouter";

// 默认路由
export default function RouterView(){

  const element = useRoutes(baseRouter);
  return(
    <div>
      {element}
    </div>
  )
}