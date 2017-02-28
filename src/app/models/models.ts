export interface Job {
    id: number;
    name: string;
    description: string;
}

export class newColonist {
    name: string;
    age: number;
    job_id: Job;
}

export interface Colonist {
    id: number;
    name: string;
    age: number;
    job: Job;
}

export interface Alien {
    id: number;
    type: string;
    submitted_by: string;
    description: string;
}

export class newEncounter {
    date: number;
    atype: string;
    action: string;
    colonist_id: number;
}

export interface Encounter {
    id: number;
    date: number;
    atype: string;
    action: string;
    colonist_id: number;
}



