import moment from "moment";
import Track from "./track";
import Break from "./break";
import CommonSession from "./commonSession";


export default class Day {
    tracks: Array<Track> = [];
    breaks: Array<Break> = [];
    commonSessions: Array<CommonSession> = [];
    start: Date;
    end: Date;

    constructor(day: any) {
        this.start = moment(day.start, "YYYY-MM-DDTHH:mm").toDate();
        this.end = moment(day.end, "YYYY-MM-DDTHH:mm").toDate();

        for(let i = 0; i < day.tracks.length; i++) {
            this.tracks.push(new Track(day.tracks[i], this, i));
        }    

        for(let i = 0; i < day.breaks.length; i++) {
            this.breaks.push(new Break(day.breaks[i], this));
        }
        
        if (day.commonSessions === undefined || day.commonSessions.length === 0) {
            console.log(day);
            console.log("No common sessions for this day");
            return;
        }

        for(let i = 0; i < day.commonSessions.length; i++) {
            this.commonSessions.push(new CommonSession(day.commonSessions[i], this.tracks[0]));        }    
    }
}