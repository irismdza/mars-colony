export interface Job {
    id: string;
    name: string;
    description: string;
}

export class NewColonist {
    name: string;
    age: string;
    job_id: string;
    constructor(name: string, age: string, job_id: string) {
        this.name = name;
        this.age = age;
        this.job_id = job_id;
    }
}

export interface Colonist {
    id: string;
    name: string;
    age: number;
    job: Job;
}

export interface Alien {
    id: string;
    type: string;
    submitted_by: string;
    description: string;
}

export class NewEncounter {
    date: number;
    atype: string;
    action: string;
    colonist_id: string;
}

export interface Encounter {
    id: string;
    date: number;
    atype: string;
    action: string;
    colonist_id: number;
}



