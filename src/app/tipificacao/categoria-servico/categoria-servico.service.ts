import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaServico } from 'src/app/shared/models/categoria-servico';
import { Pageable } from 'src/app/shared/models/pageable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServicoService {

  readonly URL = `${environment.backendUrl}/categorias`;

  constructor(private http: HttpClient) { }

  //this.sort.active, this.sort.direction, this.paginator.pageIndex
  listar(params?: { sortField?: string, sortOrder?: string, pageIndex?: number }): Observable<Pageable<CategoriaServico>> {
    return this.http.get<Pageable<CategoriaServico>>(
      this.URL,
      { withCredentials: true }
    );
  }
}
