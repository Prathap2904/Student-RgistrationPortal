import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  @ViewChild('myModal') model : ElementRef | undefined;
  studentobj:Student = new Student();
  StudentList:Student[]=[];
  ngOnInit(): void {
    const localData = localStorage.getItem("angular17crud");
    if(localData != null){
      this.StudentList = JSON.parse(localData);
    }
  }
  onDelete(item:Student){
    const isdelete = confirm("Are you sure want to delete");
    if(isdelete){
      const currentRecord = this.StudentList.findIndex(m => m.id === this.studentobj.id);
      this.StudentList.splice(currentRecord,1);
      localStorage.setItem('angular17crud',JSON.stringify(this.StudentList));
     }
  }
  updateStudent(){
    const currentRecord = this.StudentList.find(m => m.id === this.studentobj.id)
    if(currentRecord != undefined){
      currentRecord.name = this.studentobj.name;
      currentRecord.mobileNo = this.studentobj.mobileNo;
      currentRecord.address = this.studentobj.address;
      currentRecord.city = this.studentobj.city;
      currentRecord.state = this.studentobj.state;
      currentRecord.pincode = this.studentobj.pincode;
      currentRecord.email = this.studentobj.email;
    };
    localStorage.setItem('angular17crud',JSON.stringify(this.StudentList));
    this.closeModel();
  }
  openModel(){
    const model = document.getElementById("myModal");
    if(model != null){
      model.style.display='block';
    }
  }
  closeModel(){
    this.studentobj = new Student();
    if(this.model != null){
      this.model.nativeElement.style.display= 'none';
    }
  }

  onEdit(item:Student){
    this.studentobj=item;
    this.openModel();
  }
  saveStudent(){
    const isLocalPresent = localStorage.getItem('angular17crud');
    if(isLocalPresent != null){
      const oldArray = JSON.parse(isLocalPresent);
      oldArray.push(this.studentobj);
      this.studentobj.id = oldArray.length+1;
      this.StudentList = oldArray;
      localStorage.setItem('angular17crud',JSON.stringify(oldArray));
    }
    else{
      const newArr = [];
      newArr.push(this.studentobj);
      this.studentobj.id = 1;
      this.StudentList = newArr;
      localStorage.setItem('angular17crud',JSON.stringify(newArr));
    }
    this.closeModel();
  }
}
export class Student{
  id:number;
  name:String;
  mobileNo:String;
  email:String;
  city:String;
  state:String;
  pincode:String;
  address:String;

  constructor(){
    this.id=0;
    this.name='';
    this.mobileNo='';
    this.email='';
    this.city='';
    this.state='';
    this.pincode='';
    this.address='';
  }
}


