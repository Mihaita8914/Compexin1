import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [{ path: 'teams', component: TeamsComponent },
{ path: 'players', component: PlayersComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
