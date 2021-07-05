import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CategoriaServico } from "src/app/shared/models/categoria-servico";
import { Pageable } from "src/app/shared/models/pageable";
import { CategoriaServicoService } from "../categoria-servico.service";

@Injectable()
export class CategoriaListResolver implements Resolve<Pageable<CategoriaServico>> {

  constructor(private service: CategoriaServicoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pageable<CategoriaServico>> {
    return this.service.listar();
  }

}