import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { SimpleUserDTO } from './dto/simple-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findById(id: number): Promise<User> {
        return this.userRepository.findOne({id: id});
    }

    async findAllByName(name: string): Promise<SimpleUserDTO[]> {
        return this.userRepository.find({firstName: name});
    }

    async create(createUserDTO: CreateUserDTO): Promise<SimpleUserDTO> {
        return this.userRepository.save(createUserDTO);
    }

    async update(updateUserDTO: UpdateUserDTO): Promise<SimpleUserDTO> {
        return this.userRepository.save(updateUserDTO);
    }
}
