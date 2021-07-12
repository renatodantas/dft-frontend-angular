import { MetodologiaEnum } from "../enums/metodologia.enum";

export interface CategoriaServico {
  id?: number;
  descricao?: string;
  tipo?: MetodologiaEnum;
}