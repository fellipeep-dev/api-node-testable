import { RepositoryFactory } from 'src/common';
import { UserEntity } from 'src/domain/entities';

export abstract class IUserRepository extends RepositoryFactory<UserEntity> {
  constructor() {
    super('user');
  }

  abstract findByEmail(email: string): Promise<UserEntity>;
}
