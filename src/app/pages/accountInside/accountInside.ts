import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {
  TUI_DIALOGS_CLOSE,
  TuiAppearance,
  TuiButton, TuiDialogService, TuiError,
  TuiTextfield,
  TuiTitle,
} from '@taiga-ui/core';
import {TuiBlockDetails, TuiCardLarge, TuiForm, TuiHeader} from '@taiga-ui/layout';
import {Footer} from '../../parts-of-pages/footer/footer';
import {
  TuiAvatar,
  TuiFieldErrorPipe,
  TuiFile,
  TuiFileRejectedPipe, tuiFilesAccepted,
  TuiFilesComponent, TuiInputFiles, TuiInputFilesDirective,
  TuiSegmented
} from '@taiga-ui/kit';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {map} from 'rxjs';
import {TuiValidationError} from '@taiga-ui/cdk';

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
    AsyncPipe,
    NgForOf,
    TuiError,
    TuiFieldErrorPipe,
    TuiFile,
    TuiFileRejectedPipe,
    TuiFilesComponent,
    TuiInputFiles,
    TuiInputFilesDirective,
  ],
  templateUrl: './accountInside.html',
  styleUrl: './accountInside.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountInside {
  protected name: string = "Default name";
  protected verificationError: boolean = false;
  protected readonly: boolean = true;
  showDialog: boolean = false;
  avatarSrc: string = "";

  changeName() {
    this.readonly = !this.readonly;
  }

  changeAvatar() {

  }

  changeShowDialog() {
    this.showDialog = !this.showDialog
  }

  protected readonly control = new FormControl<File[]>([], [maxFilesLength(5)]);
  protected readonly accepted$ = this.control.valueChanges.pipe(
    map(() => tuiFilesAccepted(this.control)),
  );

  submit(): void {
    if (!this.control.value?.length) {
      alert('Выберите файлы');
      console.log("uploaded")
      return;
    }

    if (!this.control.valid) {
      alert('Ошибка валидации');
      return;
    }
  }

  protected rejected: readonly File[] = [];

  protected onReject(files: readonly File[]): void {
    this.rejected = Array.from(new Set(this.rejected.concat(files)));
  }

  protected onRemove(file: File): void {
    this.rejected = this.rejected.filter((rejected) => rejected !== file);
    this.control.setValue(
      this.control.value?.filter((current) => current !== file) ?? [],
    );
  }

}

export function maxFilesLength(maxLength: number): ValidatorFn {
  return ({value}: AbstractControl) =>
    value.length > maxLength
      ? {
        maxLength: new TuiValidationError(
          'Ошибка: максимальное количество файлов - 5',
        ),
      }
      : null;
}

