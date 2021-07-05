import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoriaServico } from 'src/app/shared/models/categoria-servico';
import { CategoriaServicoService } from '../categoria-servico.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriaListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: Observable<CategoriaServico[]>;

  readonly dataSourceColumns = ['descricao', 'tipo'];

  constructor(
    private service: CategoriaServicoService
  ) { }

  ngOnInit(): void {
    this.dataSource = this.service.listar().pipe(
      map(itens => itens.content)
    );
  }

}
