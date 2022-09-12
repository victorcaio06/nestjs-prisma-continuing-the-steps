import { Injectable } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipis',
    },
    {
      id: 2,
      text: 'Teste testado com sucesso',
    },
  ];

  findAll() {
    return this.messages.filter(Boolean);
  }

  async findById(id: number) {
    const message = this.messages.find((messageId) => messageId?.id === id);

    if (!message) {
      throw Error(`Messagem com o Id ${id} não encontrada.`);
    }

    return message;
  }

  create(messageDto: MessageDto) {
    const id = this.messages.length + 1;
    const message: Message = { id, ...messageDto };
    return this.messages.push(message);
  }

  async update(id: number, messageDto: MessageDto) {
    const index = this.messages.findIndex((messageId) => messageId?.id === id);
    if (index < 0) {
      throw Error(`Messagem com o Id ${id} não encontrada.`);
    }

    const message: Message = { id, ...messageDto };
    this.messages[index] = message;
    return message;
  }

  async delete(id: number) {
    const index = this.messages.findIndex((messageId) => messageId?.id === id);
    if (index < 0) {
      throw Error(`Messagem com o Id ${id} não encontrada.`);
    }
    delete this.messages[index];
    return { message: `User ${id} deletado com sucesso` };
  }
}
