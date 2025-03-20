<script>
    import {dayStore} from "../stores/scheduleStore";    
    import CommonSession from "./CommonSession.svelte";
</script>

<div class="commonSessions">
    {#each $dayStore.commonSessions as _commonSession}        
        <CommonSession {_commonSession}/>
    {/each}
</div>

<style>
    .commonSessions {
        grid-area: 1/1;
        display: grid;
        grid-gap: 0;
        top: 54px;
        position: relative;
    }
</style>
