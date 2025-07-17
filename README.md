# Angular Input Mask

## Getting started

First, install using below command.

```bash
npm i ngx-textmask --save
```
Then, use it in your component:

```typescript
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaskedInputDirective } from 'ngx-textmask';

@Component({
  selector: 'app',
  imports: [
    FormsModule,
    MaskedInputDirective
  ],
  template: `
    <input [textMask]="{mask: mask}" [(ngModel)]="myModel" type="text"/>
  `
})
export class AppComponent {
  public myModel = ''
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
}
```
