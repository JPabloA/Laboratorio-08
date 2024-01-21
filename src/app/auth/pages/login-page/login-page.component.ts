import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatIconModule,MatFormFieldModule, MatButtonModule, MatInputModule],
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

}
