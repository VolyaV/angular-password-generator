import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbol = false;
  password = '';

  onChangeLength(value: string) {
    const parsedValue = +value;
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbol = !this.includeSymbol;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'dasdsafdfoeorwoerxcc';
    const symbols = '!@#$%^*&%';

    let validChrs = '';
    if (this.includeLetters) {
      validChrs += letters;
    }
    if (this.includeNumbers) {
      validChrs += numbers;
    }
    if (this.includeSymbol) {
      validChrs += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChrs.length);
      generatedPassword += validChrs[index];
    }
    this.password = generatedPassword;
  }
}
