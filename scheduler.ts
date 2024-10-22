type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Lesson = {
    duration: number;
    title: string;
};

export type Availability = {
    id: number
    day: number
    startTime: string
    endTime: string
};

export type Schedule = {
    availabilityId: number
    lessons: Lesson[]
};

class Scheduler {
    availabilities: Availability[]
    lessons: Lesson[]

    constructor(lessons: Lesson[], availabilities: Availability[]) {
        this.availabilities = availabilities,
        this.lessons = lessons
    }
    schedule(): Schedule[] {

        const backlogs = [...this.lessons]
        
        const getLessons = (availability: Availability): Lesson[] => {
            const startTime = Number(availability.startTime.split(':')[0])
            const endTime = Number(availability.endTime.split(':')[0])
            let availabilityDuration = (endTime - startTime) * 60
            const availabilityLessons: Lesson[] = []

            while (backlogs.length > 0 && availabilityDuration > 0) {
                const currentLesson = backlogs[0]
                const remainingLessonDuration = currentLesson.duration - availabilityDuration

                if (remainingLessonDuration > 0) {
                    availabilityLessons.push({
                        title: currentLesson.title,
                        duration: availabilityDuration
                    })
                    currentLesson.duration = remainingLessonDuration
                    availabilityDuration = 0
                } else {
                    availabilityLessons.push(currentLesson)
                    availabilityDuration -= currentLesson.duration
                    backlogs.shift()
                }
            }

            return availabilityLessons.filter((lesson) => lesson.duration > 0)

        }

        
        const schedules = this.availabilities.map((availability) => {

            const lessons = getLessons(availability)
            
            return (
                {
                    availabilityId: availability.id,
                    lessons
                }
            )
        })

        
        // TODO implement algorithm for scheduling here

        return schedules;
    }
}

export default Scheduler;
