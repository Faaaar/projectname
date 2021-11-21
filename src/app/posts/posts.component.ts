import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

posts: string[]=['something1', 'something2', 'something3']

  constructor() { }

  ngOnInit(): void {
  }

}
