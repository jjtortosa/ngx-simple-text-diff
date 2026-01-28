# NgxSimpleTextDiff

Angular library for displaying text differences using the [diff](https://www.npmjs.com/package/diff) library.

## Installation

```bash
npm i ngx-simple-text-diff diff
```

Add the diff.js script to your `angular.json`:

```json
"scripts": ["./node_modules/diff/dist/diff.min.js"]
```

## Usage

### Standalone (recommended)

```typescript
import { Component } from '@angular/core';
import { NgxSimpleTextDiffComponent } from 'ngx-simple-text-diff';

@Component({
  selector: 'app-example',
  imports: [NgxSimpleTextDiffComponent],
  template: `
    <lib-ngx-simple-text-diff [oldText]="oldText" [newText]="newText" />
  `
})
export class ExampleComponent {
  oldText = 'Hello world';
  newText = 'Hello Angular';
}
```

### NgModule (legacy)

```typescript
import { NgModule } from '@angular/core';
import { NgxSimpleTextDiffModule } from 'ngx-simple-text-diff';

@NgModule({
  imports: [NgxSimpleTextDiffModule]
})
export class AppModule { }
```

## Demo

[https://jjtortosa.github.io/ngx-simple-text-diff/](https://jjtortosa.github.io/ngx-simple-text-diff/)
