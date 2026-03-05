import { Component } from '@angular/core';
import {
  TuiFieldErrorPipe,
  TuiFile,
  TuiFileRejectedPipe,
  tuiFilesAccepted,
  TuiFilesComponent, TuiInputFiles,
  TuiInputFilesDirective
} from '@taiga-ui/kit';
import {AbstractControl, FormControl, ReactiveFormsModule, ValidatorFn} from '@angular/forms';
import {TuiError} from '@taiga-ui/core';
import {TuiValidationError} from '@taiga-ui/cdk';
import {map} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {CommonModule} from '@angular/common';
import {maxFilesLength} from '../../pages/account/account';

@Component({
  selector: 'app-file-taker',
  imports: [
    CommonModule,
    TuiFilesComponent,
    TuiFile,
    TuiInputFilesDirective,
    ReactiveFormsModule,
    TuiError,
    TuiFileRejectedPipe,
    AsyncPipe,
    TuiFieldErrorPipe,
    TuiInputFiles
  ],
  templateUrl: './file-taker.html',
  styleUrl: './file-taker.scss',
})
export class FileTaker {
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


