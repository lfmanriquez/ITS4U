import { atom } from "recoil";

export const navOptionsAtom = atom({
  key: "navOptions",
  default: [
    { id: 0, page: "/", label: "Home" },
    { id: 1, page: "/about", label: "About" },
  ],
});
