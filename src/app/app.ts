import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MaskedInputDirective } from 'ngx-textmask';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaskedInputDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  mask = [
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];
}
