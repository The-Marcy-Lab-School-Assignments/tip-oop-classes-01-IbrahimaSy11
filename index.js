/**
 * Task Class
 * 
 * A class to manage tasks with title, priority, completion status, and time tracking.
 */

class Task {
    //write your code here

    static allTasks = [];

    #completed = false;
    #minutesSpent = 0;

    constructor(title, priority) {
        this.title = title;
        this.priority = priority;
        Task.allTasks.push(this);
    }

    get completedStatus() {
        return this.#completed;
    }

    get timeSpent() {
        return this.#minutesSpent;
    }

    workOn(minutes) {
        const updated = this.#minutesSpent + minutes;
        this.#minutesSpent = updated;
        console.log(`Worked on ${this.title} for ${minutes} minutes. Total time: ${updated} minutes`);
    }

    complete() {
        if (!this.#completed) {
            this.#completed = true;
        }
        console.log(`${this.title} has been completed!`);
    }

    isComplete() {
        return this.#completed;
    }

    static getTotalTasks() {
        return this.allTasks.length;
    }

    static findByTitle(title) {
        for (const task of this.allTasks) {
            if (task.title === title) {
                return task;
            }
        }
        return undefined;
    }
}

//Test class with examples below:


// Export the Task class for testing
module.exports = { Task };
