import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

moment.locale('es');
@Pipe({
    name: 'calendar'
})
export class CalendarPipe implements PipeTransform {
    transform(d: Date | null | undefined): string {
        return moment(d).calendar();
    }
}