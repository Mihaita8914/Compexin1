import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Team } from 'src/models/team';
import { TeamService } from 'src/service/team.service';
import { MatDialog } from '@angular/material/dialog';
import { PlayersComponent } from '../players/players.component';
import { DeleteteamsComponent } from '../deleteteams/deleteteams.component';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['DENUMIRE', 'STATUS', 'DATA_CREARE', 'Actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private teamService: TeamService, private _liveAnnouncer: LiveAnnouncer, private dialog:MatDialog) { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  
  ngOnInit(): void {
    this.getTeams();
  }

  private getTeams() {
    this.teamService.getTeamList().subscribe(data => {
      this.dataSource.data = data.DATA;
    });
  }

  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  OpenDialog(enteranimation:any, exitanimation:any){
    this.dialog.open(DeleteteamsComponent,{
      enterAnimationDuration:enteranimation,
      exitAnimationDuration:exitanimation,
      width:"50%"
    })
  }
}
