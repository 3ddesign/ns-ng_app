import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChallangeService {
    private _currentChallange = new BehaviorSubject<{}>(null);
    
}

