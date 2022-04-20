import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { LevelCreatorComponent } from './level-creator/level-creator.component';
import { ListLevelsComponent } from './list-levels/list-levels.component';
import { LoadMapComponent } from './load-map/load-map.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SelectLevelComponent } from './select-level/select-level.component';

const routes: Routes = [
  /*{ path: '', component: MainMenuComponent},
  { path: 'main-menu', component: MainMenuComponent},*/
  { path: 'select-level', component: SelectLevelComponent},
  { path: 'level-creator', component: LevelCreatorComponent },
  { path: 'select-level',
    children:[{
      path:':size',
        children:[{
          path:':nr', component: BoardComponent
        }]
    }]
  },
  {path: 'load-map', component: LoadMapComponent}
  /*{ path: 'select-level/:size_:lvl', component: BoardComponent }*/
  /*{ path: '', redirectTo: 'main-menu', pathMatch: 'fill' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
