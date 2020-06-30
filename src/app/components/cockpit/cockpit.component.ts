import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  onCreateTask() {
    const headerDict = {
      'Authorization': 'bearer XTHCGdRu__prbRBj8Wcw1LUirXe4wMgmozPeOG-9jfVP90AS_syfa_SZeYZ4SPYFVpwRZm_xjJKweNv_ZfNhpi41cj-6VxYFg0nfhPNS4ir3Q7ycpq1GYwAhhsA7IB23eU2U6NwabGCSBL6e9e3LOzh6irgVnHfXIYYjzFg6GYyipXX33-Jrgi-l0EMbz2E7dSVDL0caCC6kQvpIpYfGDh0gG25LYf0wzh7eNLFwfeI9u737w2K4Is6If0rRy7svw01ecX0fVd-EhyKQHd0Lwsf1q8uMX5FIf7cbR0B9MENdG0dRcKQwuMm04tqm_ZfelAS6csvZAmjnsf9ObGyfGgJGp3lL4ezzLMezQY5WtcVqTiYhSJFnQjiL45cTpKXKpbW4Me_4FkhDzMVdsXbonAgChbqTns19TSOqDusZmkztQ9oglh5q1mBpVRziucpdVcAX1GKngxtbHtAXhIbDsRcUZDYBux0OTvFFOYMeF4u8LmF0_QQ6UxnKmdQMg96b'
      // 'Content-Type': 'application/json',
      // 'Accept': 'application/json',
      // 'Access-Control-Allow-Headers': 'Content-Type',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new Headers(headerDict), 
    };

    this.http.get('https://localhost:44360/api/Quote').subscribe(data => {
      console.log(data);
    });
    //alert();
  }

}
