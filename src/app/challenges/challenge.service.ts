import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';

import { Challenge } from './challenge.model'
import { DayStatus, Day } from './day.model';

import { take, tap, switchMap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class ChallangeService implements OnDestroy  {
  private _currentChallange = new BehaviorSubject<Challenge>(null);
  private userSub: Subscription;


  constructor(private http: HttpClient, private authService: AuthService) {
    this.userSub = this.authService.user.subscribe(user => {
      if (!user) {
        this._currentChallange.next(null);
      }
    });
  }

  get currentChallange() {
    return this._currentChallange.asObservable();
  }

  fetchCurrentChallenge() {
    return this.authService.user.pipe(
      take(1),
      switchMap(currentUser => {
        if (!currentUser || !currentUser.isAuth) {
          return of(null);
        }
        return this.http.get<{
          title: string;
          description: string;
          month: number;
          year: number;
          _days: Day[];
        }>(
          `https://ns-ng-79848.firebaseio.com/${currentUser.id}.json?auth=${
            currentUser.token
          }`
        );
      }),
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
    this.saveToServer(newChallenge);
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
      this.saveToServer(updatedChallenge);
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
      this.saveToServer(challenge);
    });
  }

  private saveToServer(challenge: Challenge) {
    this.authService.user
      .pipe(
        take(1),
        switchMap(currentUser => {
          if (!currentUser || !currentUser.isAuth) {
            return of(null);
          }
          return this.http.put(
            `https://ns-ng-79848.firebaseio.com/${currentUser.id}.json?auth=${
              currentUser.token
            }`,
            challenge
          );
        })
      )
      .subscribe(res => {
        console.log(res);
      });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}

