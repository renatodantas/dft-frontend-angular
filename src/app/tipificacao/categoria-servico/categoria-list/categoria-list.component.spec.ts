import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MetodologiaEnum } from 'src/app/shared/enums/metodologia.enum';
import { CategoriaServico } from 'src/app/shared/models/categoria-servico';
import { Pageable } from 'src/app/shared/models/pageable';
import { CategoriaServicoService } from '../categoria-servico.service';
import { CategoriaListComponent } from './categoria-list.component';


describe('CategoriaListComponent', () => {
  let component: CategoriaListComponent;

  let serviceSpy: jasmine.SpyObj<CategoriaServicoService>;
  let route: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(() => {
    serviceSpy = jasmine.createSpyObj('CategoriaServicoService', ['listar']);
    component = new CategoriaListComponent(serviceSpy);
    prepararDados();
  });

  function prepararDados(): void {
    const pageable: Pageable<CategoriaServico> = {
      totalPages: 0,
      totalElements: 0,
      size: 4,
      content: [
        { id: 11, descricao: 'Categoria Típica 1', tipo: MetodologiaEnum.TIPICA },
        { id: 12, descricao: 'Categoria Típica 1', tipo: MetodologiaEnum.TIPICA },
        { id: 21, descricao: 'Categoria Atípica 1', tipo: MetodologiaEnum.ATIPICA },
        { id: 22, descricao: 'Categoria Atípica 2', tipo: MetodologiaEnum.ATIPICA }
      ],
      number: 0,
      first: false,
      last: false,
      empty: false
    }
    serviceSpy.listar.and.returnValue(of(pageable));
  }

  it('deve carregar a lista de itens', () => {
    component.ngAfterViewInit();
    expect(serviceSpy.listar.calls.count()).toBe(1);
  });
});

