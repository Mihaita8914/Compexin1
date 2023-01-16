import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Team } from "src/models/team";

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    _teamscomponent : Team[] = [];

    constructor(private httpClient: HttpClient) { }

    getTeamList(): Observable<any> {
        return this.httpClient.get<any>("https://recrutare.compexin.ro/api/web/echipe");
    }

    addTeamList() {
    }
    editTeamList() {
    }
    deleteTeamList() {
    }
}