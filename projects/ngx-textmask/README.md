# Angular Input Mask

## Getting started

First, install it.

```bash
npm i ngx-textmask --save
```

Then, import it into your `@NgModule`:

```typescript
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'ngx-textmask';

@NgModule({
  imports: [
    FormsModule,
    TextMaskModule
  ],
  declarations: []
})
export class MyModule {}
```

Then, use it in your component:
```typescript
@Component({
  selector: 'app',
  template: `
    <input [textMask]="{mask: mask}" [(ngModel)]="myModel" type="text"/>
  `
})
export class AppComponent {
  public myModel = ''
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
}
```
