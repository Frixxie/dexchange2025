<script lang="ts">
    import moment from "moment";
    import CommonSession from "./commonSession";
    import {calculateTop, calculateHeight} from "./timeUtils";
    
    export let _commonSession: CommonSession;

    function getTop() {
        return calculateTop(_commonSession.start, _commonSession.day.start);        
    }

    function getHeight() {        
        return calculateHeight(_commonSession.start, _commonSession.end);
    }

    const displayTime = (() =>  {
        return moment(_commonSession.start).format("HH:mm");
    });
</script>

<div class="commonSession" style="top:{getTop()}px;height:{getHeight() - 4}px">    
    <div class="content">
        {displayTime()} {_commonSession.title}
    </div>
</div>

<style>
    .content {
        font-size: 1.4rem;
        text-align: left;
        display: flex;
        text-align: center;
    }

    .commonSession {
        position: absolute;
        background: white;
        color: var(--white);
        background-color: var(--dipsblue);
        width: 100%;
        border-radius: 10px;
        display: flex; /* Enable flexbox for vertical alignment */
        align-items: center; /* Vertically center the content */
        padding-left: 10px; /* Add some padding to keep the content to the left */
    }
</style>