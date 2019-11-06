import { Pipe, PipeTransform } from '@angular/core';
import { IDriverStanding } from '../models/driver-standing';

@Pipe({
  name: 'isWorldChampion'
})
export class IsWorldChampionPipe implements PipeTransform {
  transform(driverId: string, worldChampion: IDriverStanding): boolean {
    return driverId === worldChampion.Driver.driverId;
  }
}
