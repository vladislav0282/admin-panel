import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup //если после ключа (loginForm) поставить ! то значит тип переменной будет проинициализирован позже

  constructor(
    private authService: AuthService,
    private router: Router){
    
  }

  submitLogin(){
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['admin']),
      error: (err) => alert(err.message)
    })
      
  }

  //Метод инициализации компонента (срабатывает при инициализации компонента)
  ngOnInit(): void {
    this.loginForm = new FormGroup (
      {
        'email': new FormControl('', [Validators.required, Validators.email]), // вторым аргументом валидация, можно указывать несколько
        'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]), //через pattern можно указать собственную валидацию (например через regex) !не писать в ковычках, а писать в /.../
      }
    )
  }
}
