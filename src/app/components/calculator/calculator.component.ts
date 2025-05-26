import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  number1: number = 0
  number2: number = 0
  result: number = 0

  calculate() {
    this.result = this.number1 + this.number2
  }

  reset() {
    this.result = 0
    this.number1 = 0
    this.number2 = 0
  }
}
