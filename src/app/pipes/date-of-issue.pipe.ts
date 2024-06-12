import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateOfIssue',
  standalone: true,
})
export class DateOfIssuePipe implements PipeTransform {
  transform(value: string): string {
    if (value === null) {
      return '';
    }
    return value.replaceAll('-', '/');
  }
}
