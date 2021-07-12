import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MetodologiaEnum } from 'src/app/shared/enums/metodologia.enum';
import { CategoriaServico } from 'src/app/shared/models/categoria-servico';
import { Pageable } from 'src/app/shared/models/pageable';
import { CategoriaServicoService } from './categoria-servico.service';


describe('CategoriaServicoService', () => {
  let service: CategoriaServicoService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoriaServicoService]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = new CategoriaServicoService(httpClient);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('deve retornar a lista de categorias', () => {
    const dadosTeste: Pageable<CategoriaServico> = {
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

    httpClient.get<Pageable<CategoriaServico>>(service.URL).subscribe({
      next: data => expect(data).toEqual(dadosTeste)
    });

    const req = httpTestingController.expectOne(service.URL);
    expect(req.request.method).toEqual('GET');
    req.flush(dadosTeste);
  });
});
