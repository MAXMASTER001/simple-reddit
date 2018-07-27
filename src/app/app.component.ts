import { Article } from './article.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
 
  constructor() {
    this.articles = [
      new Article('Angular', 'http://www.angular.io',10),
      new Article('React', 'http://www.react.io',9),
      new Article('Vue', 'http://www.vue.io',8),
    ];
  }

  sortedArticles(): Array<Article> {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes );
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
   this.articles.push(new Article(title.value, link.value));
   title.value = '';
   link.value = '';
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}
