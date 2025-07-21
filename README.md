# Angular Input Mask

## Getting started

First, install using below command.
Note: The below method is for standalone components

```bash
npm i ngx-textmask --save
```
Then, use it in your component:

```typescript
import { NgModule } from '@angular/core';
import { MaskedInputDirective } from 'ngx-textmask';

@Component({
  selector: 'app',
  imports: [
    MaskedInputDirective
  ],
  template: `
    <input [textMask]="{mask: mask}"  type="text"/>
  `
})
export class AppComponent {
  public myModel = ''
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
}
```
