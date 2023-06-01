// recoil
import { atom } from "recoil";
// type
import { Product } from "../types";

export const productsAtom = atom<Product[]>({
  key: "productsAtom",
  default: [],
});
