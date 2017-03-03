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
    date: string;
    atype: string;
    action: string;
    colonist_id: string;
    constructor(date: string, atype: string, action: string, colonist_id: string) {
        this.date = date;
        this.atype = atype;
        this.action = action;
        this.colonist_id = colonist_id;
    }
}

export interface Encounter {
    id: string;
    date: string;
    atype: string;
    action: string;
    colonist_id: string;
}



