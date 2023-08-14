import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    submit(login:any){ 
      console.log();
    
    console.log("form submited",login,123)

  }
  title = 'Rigistrationform';

  validateUsernameRequired(errors:any){
    return errors.required;
  }

  validateUsernameminLength(errors:any){
    return errors.minlength;
  }
  validatelastnameRequired(errors:any){
    return errors.required;
  }

  validatelastnameminLength(errors:any){
    return errors.minlength;
  }
}
