import { EventEmitter } from '@angular/core';
import { User } from  '@shared/interfaces/user.model';

export class UsersService {
    OnShowedDetailClick = new EventEmitter<User>();

    ShowUserDetails(user: User){
        this.OnShowedDetailClick.emit(user);
    }

} 