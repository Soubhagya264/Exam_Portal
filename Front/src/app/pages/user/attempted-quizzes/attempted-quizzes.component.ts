import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ResultservicesService } from 'src/app/services/resultservices.service';

@Component({
  selector: 'app-attempted-quizzes',
  templateUrl: './attempted-quizzes.component.html',
  styleUrls: ['./attempted-quizzes.component.css']
})
export class AttemptedQuizzesComponent implements OnInit {
  res:any;
  user:any;
  myFormattedDate: any;
  constructor(private login:LoginService,
    private _result:ResultservicesService,) { }

     

  ngOnInit(): void {
    this.user=this.login.getUser();
    
    this._result.getResultsOfUser(this.user.id).subscribe(
      data=>{
        this.res=data;
      
        console.log(this.res);
        for(let i=0;i<this.res.length;i++){
          this.res[i].latUpdate
          const date=new Date(this.res[i].lastUpdate);
          const day = date.getDate();
          const monthIndex = date.getMonth();
          const year = date.getFullYear();
          const minutes = date.getMinutes();
         const hours = date.getHours();
         const seconds = date.getSeconds();
         this.myFormattedDate = day+"-"+(monthIndex+1)+"-"+year+" "+ hours+":"+minutes+":"+seconds;
          this.res[i].lastUpdate=this.myFormattedDate;
          console.log(this.res[i].lastUpdate);
          console.log(this.myFormattedDate);
        }
      //   console.log(this.res['lastUpdate']);
      //   const date = new Date(this.res['lastUpdate']); 
      // const day = date.getDate();
      // const monthIndex = date.getMonth();
      // const year = date.getFullYear();
      // const minutes = date.getMinutes();
      // const hours = date.getHours();
      // const seconds = date.getSeconds();
      // this.myFormattedDate = day+"-"+(monthIndex+1)+"-"+year+" "+ hours+":"+minutes+":"+seconds;
      })

      
      




  }

}
