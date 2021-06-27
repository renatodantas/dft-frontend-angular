import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from '../../models/menu';

@Injectable()
export class NavbarService {

  getItems(): Observable<Menu[]> {
    return of([
      {
        titulo: 'Tipificação', path: 'tipificacao', itens: [
          { descricao: 'Categorias de Serviço', path: 'categorias' },
          { descricao: 'Órgãos', path: 'orgaos' },
          { descricao: 'Unidades', path: 'unidades' },
          { descricao: 'Entregas', path: 'entregas' },
          { descricao: 'Indic. de Produtividade', path: 'produtividades' },
        ]
      }
    ]);
  }
}