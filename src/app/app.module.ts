import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { FinalDialogComponent } from './final-dialog/final-dialog.component';
import { SignsComponent } from './signs/signs.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FinalDialogComponent,
    SignsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
