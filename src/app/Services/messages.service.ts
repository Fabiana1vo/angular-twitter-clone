import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //qualquer componente vai enxergar pois está na raiz do projeto
})
export class MessagesService {
  private messages: string[] = []; //iniciando ele como um vetor vazio

  constructor() {}
  // Criando métodos
  addMessages(messages: string) {
    if (messages && typeof messages === 'string') {
      this.messages.push(messages);
    }
  }

  getMessages() {
    return this.messages;
  }

  clearMessages() {
    this.messages = []; //zerando o vetor
  }
}
