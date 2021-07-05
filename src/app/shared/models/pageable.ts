export const DEFAULT_PAGE_NUMBER = 0;
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_SORT_ORDER = 'asc';

export type RecordParams = Record<string, string>;

/**
 * Parâmetros para paginação das APIs.
 */
export interface PageableParams {
  /** Atributo para ordenação */
  sort?: string,
  /** Direção da ordenação (ascendente | descendente) */
  order?: string,
  /** Número da página (zero-based index) */
  page?: number,
  /** Tamanho da página */
  size?: number,
}

/**
 * Interface que representa uma lista paginada pelo backend.
 */
export interface Pageable<T> {
  totalPages: number;
  totalElements: number;
  size: number;
  content: T[],
  number: number,
  // sort: {
  //   sorted: boolean,
  //   unsorted: boolean,
  //   empty: boolean
  // },
  first: boolean,
  last: boolean,
  empty: boolean
}
