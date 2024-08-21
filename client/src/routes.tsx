import {
  createBrowserRouter
} from "react-router-dom";
import Home from "./pages/home/page";
import TennisPage, {loader as TennisLoader} from "./pages/home/tennis/page";
import TennisErrorPage from "./pages/home/tennis/error";
import { ActionTennisDelete } from "./pages/home/tennis/actions/delete";
import { ActionTennisUpdate } from "./pages/home/tennis/actions/update";
import {loader as updateLoader} from "./pages/home/tennis/children/updatepage";
import Updatepage from "./pages/home/tennis/children/updatepage";
import { ActionCreateTennis } from "./pages/home/tennis/actions/post";


const router = createBrowserRouter([
  {
    // el path es la ruta de la página
    path: "/",
    // element es el componente que se renderiza en la ruta
    element: <Home />
  },
  {
    path: "/tennis",
    element: <TennisPage />,
    // errorElement es el componente que se renderiza en caso de error (throw new Error())
    errorElement: <TennisErrorPage />,
    loader: TennisLoader,
    // actions son las acciones que se ejecutan en la ruta normalmente es una por ruta
    //en caso de tener subrutas se pueden tener varias acciones
    //mira: https://reactrouter.com/en/main/route/action#handling-multiple-actions-per-route
    action: ActionCreateTennis,
    children: [
      {
        //el path es la ruta de la subpágina al no tener element solo sirve para definir la acción
        path: "delete/:id",
        //action es la acción que se ejecuta en la subpágina
        action: ActionTennisDelete
      },
      {
        // el path es la ruta de la subpágina seria /tennis/update/:id
        path: "update/:id",
        element:<Updatepage />,
        action: ActionTennisUpdate,
        loader:updateLoader
      }
    ]
  }
]);

export default router;
