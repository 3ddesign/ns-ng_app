import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Challenge } from './challenge.model'
import { DayStatus } from './day.model';

import { take } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ChallangeService {
    private _currentChallange = new BehaviorSubject<Challenge>(null);

    constructor(private http: HttpClient) {

    }

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
        this.http.put('https://ns-ng-79848.firebaseio.com/challenge.json', newChallenge).subscribe(res => {
            console.log(res);
        });
        this._currentChallange.next(newChallenge);
    }

    updateChallenge(title: string, description: string) {
        this.currentChallange.pipe(take(1)).subscribe(challenge => {
            const updateChallenge = new Challenge(title, description, challenge.year, challenge.month, challenge.days);
            // TODO: Save to server
            this._currentChallange.next(updateChallenge);
        });
    }

    updateDay(dayInMonth: number, status: DayStatus) {
        this._currentChallange.pipe(take(1)).subscribe(challenge => {
            if (!challenge || challenge.days.length < dayInMonth) {
                return;
            }
            const dayIndex = challenge.days.findIndex(day => day.dayInMonth === dayInMonth)
            challenge.days[dayIndex].status = status;
            this._currentChallange.next(challenge);
            console.log(challenge.days[dayIndex]);
        });
    }


}

