import { Injectable } from '@nestjs/common';
import { IUserRepository } from './iuser.repository';
import { UserEntity } from 'src/domain/entities';

@Injectable()
export class UserRepository extends IUserRepository {
  findByEmail(email: string): Promise<UserEntity> {
    return this.prismaService.user.findFirst({
      where: {
        email,
      },
    });
  }
}
