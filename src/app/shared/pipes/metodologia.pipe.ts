import { Pipe, PipeTransform } from "@angular/core";
import { MetodologiaEnum } from "../enums/metodologia.enum";

@Pipe({ name: 'metodologia' })
export class MetodologiaPipe implements PipeTransform {

  transform(value: MetodologiaEnum): string {
    switch (value) {
      case MetodologiaEnum.TIPICA: return 'Típica';
      case MetodologiaEnum.ATIPICA: return 'Atípica';
      default: throw Error('Metodologia desconhecida');
    }
  }

}