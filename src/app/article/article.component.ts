import { Article } from '../article.model';
import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
//  @HostBinding('attr.class') cssClass = 'row';

@Input() article: Article;
  votes: number;
  link: string;
  title: string;
  constructor() {
    // this.article = new Article('Angular', 'angular@io', 10); 
  }

  ngOnInit() {
    
  }
  voteUp() {
    this.article.voteUp();
    return false;
  }
  voteDown() {
    this.article.voteDown();
  return false;
  }
}
