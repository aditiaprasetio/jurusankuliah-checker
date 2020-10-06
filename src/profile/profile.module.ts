import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { Profile } from './profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],

  providers: [ProfileService],

  controllers: [ProfileController],
})
export class ProfileModule {}
