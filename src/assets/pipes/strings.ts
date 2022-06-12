import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {
    transform(s: string | null | undefined): string {
        return `${s}`.charAt(0)
    }
}