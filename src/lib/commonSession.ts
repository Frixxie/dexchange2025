import moment from 'moment';
import Day from './day';
import type Track from './track';

let sessionCounter: number = 100;

export default class CommonSession {
    id: number;
    title: string;
    teams: string;
    ingress: string;
    description: string;
    speaker: string;
    start: Date;
    end: Date;
    day: Day;
    track: Track;
    tag: string;
    
    constructor(session: any, track: Track) {
        this.id = sessionCounter++;
        this.title = session.title;
        this.teams = session.teams;
        this.ingress = session.ingress;
        this.description = session.description;
        this.speaker = session.speaker;
        this.start = moment(session.start, "YYYY-MM-DDTHH:mm").toDate(),
        this.end = moment(session.end, "YYYY-MM-DDTHH:mm").toDate(),
        this.day = track.day;
        this.track = track;
        this.tag = session.tag;
    }
}

