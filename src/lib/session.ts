import moment from "moment";
import Track from "./track";

let sessionCounter: number = 0;

export default class Session {
    id: number;
    kind: string;
    title: string;
    teams: string;
    recording: string;
    ingress: string;
    description: string;
    speaker: string;
    start: Date;
    end: Date;
    track: Track;
    tag: string;
    constructor(session: any, track: Track) {
        this.id = sessionCounter++;
        this.kind = session.kind;
        this.title = session.title;
        this.teams = session.teams;
        this.recording = session.recording;
        this.ingress = session.ingress;
        this.description = session.description;
        this.speaker = session.speaker;
        this.start = moment(session.start, "YYYY-MM-DDTHH:mm").toDate(),
        this.end = moment(session.end, "YYYY-MM-DDTHH:mm").toDate(),
        this.track = track;
        this.tag = session.tag;
    }
}