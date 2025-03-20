<script lang="ts">
    import moment from "moment";
    import Break from "./break";
    import {calculateTop, calculateHeight} from "./timeUtils";
    
    export let _break: Break;

    function getTop() {
        return calculateTop(_break.start, _break.day.start);        
    }

    function getHeight() {        
        return calculateHeight(_break.start, _break.end);
    }

    const displayTime = (() =>  {
        return moment(_break.start).format("HH:mm");
    });
</script>



<div class="break" style="top:{getTop()}px;height:{getHeight() - 4}px">    
    <div class="content">
        {displayTime()} {_break.title}
    </div>
</div>

<style>
    .content {
        font-size: 1.4rem;
        text-align: left;
        display: flex;
        text-align: center;
    }

    .break {
        position: absolute;
        background: white;
        color: var(--dipsblue);
        width: 100%;
        border-radius: 10px;
        display: flex; /* Enable flexbox for vertical alignment */
        align-items: center; /* Vertically center the content */
        padding-left: 10px; /* Add some padding to keep the content to the left */
    }
</style>