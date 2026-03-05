import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  TuiAppearance,
  TuiButton,
  TuiTextfield,
  TuiTitle,
} from '@taiga-ui/core';
import {TuiCardLarge, TuiForm, TuiHeader} from '@taiga-ui/layout';
import {Footer} from '../../parts-of-pages/footer/footer';
import FileTaker from '../../parts-of-pages/file-taker/file-taker';

@Component({
  standalone: true,
  exportAs: "RegistrationForm",
  imports: [
    ReactiveFormsModule,
    TuiAppearance,
    TuiButton,
    TuiCardLarge,
    TuiForm,
    TuiHeader,
    TuiTextfield,
    TuiTitle,
    Footer,
    FileTaker,
  ],
  templateUrl: './account.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Account {
  protected readonly form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(5)),
  });
}
