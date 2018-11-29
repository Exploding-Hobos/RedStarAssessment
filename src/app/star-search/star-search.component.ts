import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-star-search',
  templateUrl: './star-search.component.html',
  styleUrls: ['./star-search.component.css']
})
export class StarSearchComponent implements OnInit {
  useBtn = false
  searchStar: FormGroup
  starsearches = [
    {value: 'people', view: 'StarPeople'},
    {value: 'starships', view: 'StarShips'},
    {value: 'films', view: 'StarFilms'}
  ]
  userInput = []
  public _stars: any[] = []

  constructor(private _fb: FormBuilder, private _dbService: DatabaseService) {
    setTimeout(() => {
      this.useBtn = true
    }, 1000)
   }

  ngOnInit() {
    this.searchStar = this._fb.group({
      starsearch: new FormControl(),
      userInput: new FormControl(),
    })
  }

  onFetch(): void {
    this._dbService.getData(this.searchStar.controls['starsearch'].value, this.searchStar.controls['userInput'].value).subscribe((res: any) => (this._stars = res))
    console.log(this._stars)
  }

}
