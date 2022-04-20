import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { FinalDialogComponent } from './final-dialog/final-dialog.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LevelCreatorComponent } from './level-creator/level-creator.component';
import { SelectLevelComponent } from './select-level/select-level.component';
import { ListLevelsComponent } from './list-levels/list-levels.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { LoadMapComponent } from './load-map/load-map.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FinalDialogComponent,
    MainMenuComponent,
    LevelCreatorComponent,
    SelectLevelComponent,
    ListLevelsComponent,
    LoadMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
