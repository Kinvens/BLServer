import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  private readonly users

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme'
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret'
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess'
      }
    ]
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  findAll() {
    return `This action returns all users`
  }

  async findOne(username: string) {
    return this.users.find(user => user.username === username)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
