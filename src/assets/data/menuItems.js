import BestSale from "../../components/BestSale";
import TopRated from "../../components/TopRated";
import Products from "../../pages/products/Products";

const menuItems = [
  { name: "All Products", to: "allProducts" },
  { name: "Top Rated", to: "topRated" },
  { name: "Best Sale", to: "bestSale" },
];

export const routes = [
  { name: "allProducts", comp: <Products /> },
  { name: "topRated", comp: <TopRated /> },
  { name: "bestSale", comp: <BestSale /> },
];

export default menuItems;
