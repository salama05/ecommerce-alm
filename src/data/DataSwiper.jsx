import Button from "@/components/Button";
import { imagePaths } from "./imageCategoryPhonePaths";
import { catExplore, catBest, catFlash, dataList } from "../data/data";
import ProductCard from "@/components/ProductCard";

// export const DataSales = [1, 2, 3, 4, 1, 2, 3, 4].map((id) => (
//   <ProductCard item={dataList.find((item) => item.id === id)} />
// ));

export const DataSales = dataList
  .filter((item) => item.category === catFlash)
  .map((item) => <ProductCard item={item} />);

export const DataCategory = [
  { text: "Phones", img: imagePaths.phones },
  { text: "Computers", img: imagePaths.computer },
  { text: "Smart Watches", img: imagePaths.smartWatch },
  { text: "Camera", img: imagePaths.camera },
  { text: "Headphones", img: imagePaths.headPhones },
  { text: "Gaming", img: imagePaths.gaming },
].map((item) => (
  <Button textCPhone={item.text} img={item.img} intent="CPhone" />
));

export const DataExplore = dataList
  .filter((item) => item.category === catExplore)
  .map((item) => <ProductCard item={item} />);
