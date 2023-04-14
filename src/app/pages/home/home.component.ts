import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../services/messages.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  tweets:string[] = ["Ola Neymar", "Olá Kenia", "Hello Elon Musk buy my cripto please"]
//ingeta ele no construtor
constructor(private service: MessagesService){}

  ngOnInit(): void {
    this.tweets = this.service.getMessages()
  }
}
