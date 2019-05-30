import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Challenge } from './challenge.model'

@Injectable({ providedIn: 'root' })
export class ChallangeService {
    private _currentChallange = new BehaviorSubject<Challenge>(null);   
}

