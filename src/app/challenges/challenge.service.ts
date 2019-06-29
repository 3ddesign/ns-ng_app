import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Challenge } from './challenge.model'
import { DayStatus, Day } from './day.model';

import { take, tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ChallangeService {
    private _currentChallange = new BehaviorSubject<Challenge>(null);

    constructor(private http: HttpClient) {

    }

    get currentChallange() {
        return this._currentChallange.asObservable();
    }

    fetchCurrentChallenge() {
        return this.http
          .get<{
            title: string;
            description: string;
            month: number;
            year: number;
            _days: Day[];
          }>('https://ns-ng-79848.firebaseio.com/challenge.json')
          .pipe(
            tap(resData => {
              if (resData) {
                const loadedChallenge = new Challenge(
                  resData.title,
                  resData.description,
                  resData.year,
                  resData.month,
                  resData._days
                );
                this._currentChallange.next(loadedChallenge);
              }
            })
          );
      }

    createNewChallange(title: string, description: string) {
        const newChallenge = new Challenge(
            title,
            description,
            new Date().getFullYear(),
            new Date().getMonth()
          );
          this.seveToServer(newChallenge);
          this._currentChallange.next(newChallenge);
    }

    updateChallenge(title: string, description: string) {
        this._currentChallange.pipe(take(1)).subscribe(challenge => {
            const updatedChallenge = new Challenge(
              title,
              description,
              challenge.year,
              challenge.month,
              challenge.days
            );
            this.seveToServer(updatedChallenge);
            this._currentChallange.next(updatedChallenge);
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
            this.seveToServer(challenge);
        });
    }

    private seveToServer(challenge: Challenge) {
        this.http
        .put('https://ns-ng-79848.firebaseio.com/challenge.json', challenge)
        .subscribe(res => {
        //   console.log(res);
        });
    }

}

