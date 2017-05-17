
import PRODUCT from "../constants/products";
import {create, read, update, del} from "./docs"


export const addProduct = (aProduct) => (create(PRODUCT, aProduct));
export const readProducts = () => (read(PRODUCT));
export const updateProduct = (product) => (update(product));
export const deleteProduct = (product) => (del(product));