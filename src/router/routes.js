import Home from "../components/pages/home/Home";
import ItemDetail from "../components/pages/itemDetail/ItemDetail";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "shop",
    path: "/shop",
    Element: ItemListContainer,
  },
  {
    id: "detalle",
    path: "/itemDetail/:id",
    Element: ItemDetail,
  },
];
