import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipificacao',
  templateUrl: './tipificacao.component.html',
  styleUrls: ['./tipificacao.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TipificacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
