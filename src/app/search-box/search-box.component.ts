import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() inputValueEvent = new EventEmitter<string>()

  timeout: any;

  constructor() { }

  ngOnInit(): void {
  }

  onInputChanged(value: string)
  {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      var encodedValue = encodeURIComponent(value)

      console.log(encodedValue)

      this.inputValueEvent.emit(encodedValue);
    }, 600);

  }

}
