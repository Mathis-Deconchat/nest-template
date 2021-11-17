import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChangeNomService } from 'src/change-nom/change-nom.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private changeNom: ChangeNomService
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(): Promise<User[]> {
    let users = this.usersRepository.find()
    users.then(data => {
      data.forEach(element =>{
        element.firstName = this.changeNom.changeName(element.firstName) 
      })
    })
    return users
    
  }

  findOne(id: number) {
    // return `This action returns a #${id} user`;
    return this.usersRepository.findOne(id);

  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
