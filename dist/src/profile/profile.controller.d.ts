import { CrudController, CrudRequest } from '@nestjsx/crud';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';
export declare class ProfileController implements CrudController<Profile> {
    service: ProfileService;
    constructor(service: ProfileService);
    get base(): CrudController<Profile>;
    getOne(req: CrudRequest): Promise<Profile | Profile[]>;
    updateOne(req: CrudRequest, dto: Profile, request: Request): Promise<Profile>;
}
