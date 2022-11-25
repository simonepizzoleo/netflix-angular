import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})

export class AlertComponent implements OnInit {

  message: string = `We're happy to announce that we're finally online with a brand new website! You can now enable the Theatre Mode and enjoy your favorite Movie at the most, without any kind of distraction and any advertisements. Rate us on the store if you like our Movies!`;
  isAlertDanger: boolean = true;
  isAlertActive: boolean = true;

  constructor() {}

  ngOnInit(): void {}

}
