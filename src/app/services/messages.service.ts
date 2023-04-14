import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  //cria um vetor
  private messages: string[] = []

  constructor() { }

  //criar metodos
  addMessage(message:string){
    this.messages.push(message)
  }

  getMessages(){
    return this.messages
  }

  clearMessages(){
    this.messages = []
  }
}
