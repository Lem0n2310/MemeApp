import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  TuiAppearance,
  TuiButton,
  TuiTextfield,
  TuiTitle,
} from '@taiga-ui/core';
import {TuiBlockDetails, TuiCardLarge, TuiForm, TuiHeader} from '@taiga-ui/layout';
import {Footer} from '../../parts-of-pages/footer/footer';
import {TuiAvatar, TuiSegmented} from '@taiga-ui/kit';
import {NgIf} from '@angular/common';

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
    TuiSegmented,
    NgIf,
    TuiAvatar,
    TuiBlockDetails,
    FormsModule,
  ],
  templateUrl: './fileTakerDialog.html',
  styleUrl: './fileTakerDialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileTakerDialog {

}

