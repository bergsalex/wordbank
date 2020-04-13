import {Component, OnInit, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-randomword',
  templateUrl: './randomword.component.html',
  styleUrls: ['./randomword.component.css']
})
export class RandomwordComponent implements OnInit {

  words = ['chaise lounge', 'bidet', 'garden gnome', 'bathrobe',
    'chicken coop', 'sideboard', 'chair', 'dining set', 'table',
    'bed', 'shelf', 'pillow', 'papasan', 'gazebo', 'firepit',
    'oven', 'fridge', 'dresser', 'cabinet', 'hutch', 'desk',
    'lamp', 'hanging planter', 'greenhouse', 'coathanger',
    'crib', 'bunkbed', 'vanity', 'mirror', 'shower', 'screen door',
    'seesaw', 'bounce house', 'kennel', 'trampoline',
    'slide', 'sandbox', 'gazebo', 'fountain', 'pergola',
    'shed', 'fireplace', 'lounge chair', 'trellis', 'hot tub',
    'lantern', 'grill', 'mattress', 'towel', 'wreath', 'vase',
    'clock', 'candle', 'curtains', 'grandfather clock', 'basket',
    'bookcase', 'chandelier', 'ceiling fan', 'floor lamp', 'wine glass',
    'decanter', 'doorknob', 'rug', 'toaster', 'kitchen sink', 'gargoyle',
    'umbrella', 'kitchen sink', 'tchotchke'];
  displayWord = ' - ';

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  public get_word(event) {
    this.displayWord = this.words[Math.floor(Math.random() * this.words.length)];
  }

}
