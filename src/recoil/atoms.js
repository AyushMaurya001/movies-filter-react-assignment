import { atom } from "recoil";
import data from "./../constants/movies.json"

export const moviesAtom = atom({
  key: "moviesAtom",
  default: data
})