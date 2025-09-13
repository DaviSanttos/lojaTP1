import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desconto'
})
export class DescontoPipe implements PipeTransform {

  transform(valor: number | null | undefined, percentual = 0): number {
    if (typeof valor !== 'number' || isNaN(valor))
      return 0;
      
    const pctFinal = Math.min(Math.max(percentual, 0), 100);
    const result = valor * (1 - pctFinal / 100);
    
    // Arredonda para 2 casas
    return Math.round(result * 100) / 100;
  }
}
