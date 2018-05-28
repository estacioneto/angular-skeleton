import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  status: number;
  message: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const { status, message } = this.route.snapshot.data;
    Object.assign(this, { status, message });
  }
}
