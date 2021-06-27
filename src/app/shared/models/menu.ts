import { MenuItem } from "./menu-item";

export interface Menu {

  titulo: string;
  path: string;
  itens: MenuItem[];
}