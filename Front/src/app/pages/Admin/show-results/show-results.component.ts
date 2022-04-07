import { Component, OnInit } from '@angular/core';
import { ResultservicesService } from 'src/app/services/resultservices.service';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {

  constructor( private _result:ResultservicesService) { }
result:any;
myFormattedDate: any;
  ngOnInit(): void {

    this._result.getAllResults().subscribe(
      res=>{
        this.result=res;
        
        for(let i=0;i<this.result.length;i++){
          this.result[i].latUpdate
          const date=new Date(this.result[i].lastUpdate);
          const day = date.getDate();
          const monthIndex = date.getMonth();
          const year = date.getFullYear();
          const minutes = date.getMinutes();
         const hours = date.getHours();
         const seconds = date.getSeconds();
         this.myFormattedDate = day+"-"+(monthIndex+1)+"-"+year+"  "+"  Time :  "+ hours+":"+minutes+":"+seconds;
          this.result[i].lastUpdate=this.myFormattedDate;
         
        }
      },
      err=>{
        console.log(err);
      }

    )

  }

}
