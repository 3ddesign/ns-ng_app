import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Challenge } from './challenge.model'

@Injectable({ providedIn: 'root' })
export class ChallangeService {
    private _currentChallange = new BehaviorSubject<Challenge>(null);

    get currentChallange() {
        return this._currentChallange.asObservable();
    }
    
    createNewChallange(title: string, description: string) {
        const newChallenge = new Challenge(
            title,
            description,
            new Date().getFullYear(),
            new Date().getMonth()
            );

            // TODO: Save to server
            this._currentChallange.next(newChallenge);
    }
}

