import { Controller, Get, Post, Param, Body, Put, Res, HttpStatus, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { SimpleUserDTO } from './dto/simple-user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get()
    async getAll(): Promise<User[]> {
        return this.userService.findAll();
    } 

    @Get(':name')
    async getByName(@Param('name') name: string): Promise<SimpleUserDTO[]> {
        return this.userService.findAllByName(name);
    }

    @Post()
    async createUser(@Body() createUserDTO: CreateUserDTO): Promise<SimpleUserDTO> {
        return this.userService.create(createUserDTO);
    }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() updateUserDTO: UpdateUserDTO, @Res() response: Response): Promise<SimpleUserDTO> {
        if (!id) {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                error: 'ID is undefined'
            }, HttpStatus.CONFLICT);
        }
        let user: User = await this.userService.findById(id);
        const userUpdatedProperties: User = new User(updateUserDTO);
        Object.assign(user, userUpdatedProperties);
        return this.userService.update(user);
    }
    
}
