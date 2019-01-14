import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailService} from '../services/email.service';
import {Router} from '@angular/router';
import {LocalStorageService} from '../services/local-storage.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  emailForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private emailService: EmailService,
              private localStorageService: LocalStorageService,
              private router: Router) {
  }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
      ])],
    });
  }

  get email() {
    return this.emailForm.get('email');
  }

  onSubmit() {
    this.emailService.postEmail(this.email.value);
    this.backToHome();
  }

  backToHome() {
    this.localStorageService.clearLocalStorage();
    this.router.navigate(['/public']);
  }

}
