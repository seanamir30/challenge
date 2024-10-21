type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Lesson = {};

export type Availability = {};

export type Schedule = {};

class Scheduler {
    constructor(lessons: Lesson[], availabilities: Availability[]) {}

    schedule(): Schedule[] {
        // TODO implement algorithm for scheduling here

        return [];
    }
}

export default Scheduler;
