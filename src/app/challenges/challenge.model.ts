import { Day, DayStatus } from './day.model';

export class Challenge {
    constructor(public title: string,
        public description: string,
        public month: number,
        public year: number,
        private _days: Day[] = []) {
        if (_days.length > 0) {
            return;
        }
        // this.currentMonth  = new Date().getMonth();
        // this.currentYear  = new Date().getFullYear();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i < daysInMonth + 1; i++) {
            const date = new Date(year, month, i);
            const dayInWeek = date.getDay();
            this._days.push({
                dayInMonth: i,
                dayInWeek: dayInWeek,
                date: date,
                status: DayStatus.Open
            });
        }
    }

    get currentDay() {
        return this._days.find(day => day.dayInMonth === new Date().getDate())
    }

    get days() {
        return [...this._days];
    }
}