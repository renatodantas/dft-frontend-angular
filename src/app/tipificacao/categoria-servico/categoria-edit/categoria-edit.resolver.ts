import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { CategoriaServico } from "src/app/shared/models/categoria-servico";
import { CategoriaServicoService } from "../categoria-servico.service";

@Injectable()
export class CategoriaEditResolver implements Resolve<CategoriaServico> {

  constructor(private service: CategoriaServicoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CategoriaServico> {
    return of({});
  }

}