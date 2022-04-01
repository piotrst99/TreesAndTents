import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelCreatorComponent } from './level-creator/level-creator.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SelectLevelComponent } from './select-level/select-level.component';

const routes: Routes = [
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'level-creator', component: LevelCreatorComponent },
  { path: 'select-level', component: SelectLevelComponent}
  /*{ path: '', redirectTo: 'main-menu', pathMatch: 'fill' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
