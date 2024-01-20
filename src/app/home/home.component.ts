// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {

// }

import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  plotUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {}

  ngOnInit() {
    // Make an HTTP GET request to fetch the plot image
    this.http.get('http://127.0.0.1:5000/plot', { responseType: 'text' }).subscribe(data => {
      // Construct the data URL
      const plotDataUrl = 'data:image/png;base64,' + data;
      
      // Sanitize the data URL
      this.plotUrl = this.sanitizer.bypassSecurityTrustResourceUrl(plotDataUrl);
    }, error => {
      console.error('Error fetching plot:', error);
    });
  }
}

