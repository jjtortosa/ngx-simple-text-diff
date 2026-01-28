import {Component, Input, OnChanges} from '@angular/core';

declare const Diff: {
  diffWordsWithSpace: (oldText: string, newText: string, options?: any) => any[];
};

@Component({
  selector: 'lib-ngx-simple-text-diff',
  template: `
    @for (part of diff; track $index) {
      <span [class.added]="part.added" [class.removed]="part.removed">{{part.value}}</span>
    }
  `,
  styles: [`
    :host {
      display: block;
      text-align: left;
      white-space: pre-line;
    }

    .removed {
      color: red;
    }

    .added {
      color: green;
    }

  `]
})
export class NgxSimpleTextDiffComponent implements OnChanges {

  @Input() oldText: string = '';
  @Input() newText: string = '';
  public diff: DiffPart[] = [];

  ngOnChanges(): void {
    this.diff = Diff.diffWordsWithSpace(
      this.oldText.replace(/\n/g, '↵\n'),
      this.newText.replace(/\n/g, '↵\n')
    );
  }

}

interface DiffPart {
  added: boolean;
  removed: boolean;
  value: string;
}
