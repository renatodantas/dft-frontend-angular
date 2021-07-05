import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { CategoriaServico } from 'src/app/shared/models/categoria-servico';
import { Pageable } from 'src/app/shared/models/pageable';
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
  dataSource: CategoriaServico[] = [];

  readonly dataSourceColumns = ['descricao', 'tipo'];

  constructor(
    private service: CategoriaServicoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const itens: Pageable<CategoriaServico> = this.route.snapshot.data.itens;
    this.dataSource = itens.content;
  }

}
