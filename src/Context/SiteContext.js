import { createContext, useContext } from "react";

export const SiteContext = createContext();

export function Sitedetail() {
  return useContext(SiteContext);
}
