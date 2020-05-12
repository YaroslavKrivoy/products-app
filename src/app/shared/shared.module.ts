import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatChipsModule,
    MatDividerModule,
    MatSnackBarModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatChipsModule,
    MatDividerModule,
    MatSnackBarModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})

export class SharedModule {

}
