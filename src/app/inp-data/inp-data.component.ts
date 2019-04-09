import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material';
import { User } from '../user'; // interface for user

@Component({
  selector: 'app-inp-data',
  templateUrl: './inp-data.component.html',
  styleUrls: ['./inp-data.component.css']
})

export class InpDataComponent implements OnInit {

  user: User = { //obj which get interface with User
    allName: '',
    sex: '',
    birthday: '',
    SNILS: '', 
  }

ngOnInit() {}
  message = []; // arr which saves our users

  displayedColumns: string[] = ['allName', 'sex', 'birthday', 'SNILS', 'delete']; // column display

  constructor() { }

  @ViewChild(MatTable) table: MatTable<any>;//connect the table
//button delete
  delete(row: any): void {
    const index = this.message.indexOf(row, 0);
    if (index > -1) {
      this.message.splice(index, 1);
    }
    this.table.renderRows();
  }
//button add user
  addData(value: User): void {
    let clone: any = [];
    for (var i in value) {
      clone[i] = value[i];
    }
    this.message.push(clone);
    this.table.renderRows();
  }  
}