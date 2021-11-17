import { Injectable } from '@nestjs/common';

@Injectable()
export class ChangeNomService {
    changeName(name: string){
        return name + "zgeg"
    }
}
