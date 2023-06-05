import { Component, Input } from '@angular/core';
import { PortalService } from '../portal.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  providers: [PortalService],

})
export class TestingComponent {

  getPayChange( payload: any){
    console.log(payload)
  }

}


