import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriaEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
