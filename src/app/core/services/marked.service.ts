import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Marked } from 'marked';

@Injectable({
  providedIn: 'root',
})
export class MarkedService {
  private domSanitizer = inject(DomSanitizer);
  private http = inject(HttpClient);

  marked = new Marked();

  getSortDetailByName(fileName: string) {
    return this.http.get(`/data/${fileName}.md`, { responseType: 'text' });
  }

  parse(md: string) {
    return this.domSanitizer.bypassSecurityTrustHtml(
      this.marked.parse(md, { async: false })
    );
  }
}
