import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewboolPipe } from './pipes/viewbool.pipe';
import { LettersNumbersOnlyDirective } from './validators/letters-numbers-only.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewboolPipe, LettersNumbersOnlyDirective],
  exports:  [ViewboolPipe, LettersNumbersOnlyDirective]
})
export class SharedModule { }
