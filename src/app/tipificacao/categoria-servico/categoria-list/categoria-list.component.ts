import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs/operators';
import { CategoriaServico } from 'src/app/shared/models/categoria-servico';
import { Pageable } from 'src/app/shared/models/pageable';
import { CategoriaServicoService } from '../categoria-servico.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriaListComponent implements AfterViewInit {

  readonly dataSourceColumns = ['descricao', 'tipo'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<CategoriaServico> = new MatTableDataSource();
  loading = false;
  totalPages = 0;
  totalElements = 0;
  pageSize = 0;

  constructor(private service: CategoriaServicoService) { }

  ngAfterViewInit() {
    this.service.listar().pipe(first()).subscribe(pageable => {
      this.popularPaginacao(pageable);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private popularPaginacao(pageable: Pageable<CategoriaServico>) {
    this.dataSource.data = pageable.content;
    this.totalPages = pageable.totalPages;
    this.totalElements = pageable.totalElements;
    this.pageSize = pageable.size;
  }

}
