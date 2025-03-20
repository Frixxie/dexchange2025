<script lang="ts">
    import Tracks from "./Tracks.svelte";
    import Breaks from "./Breaks.svelte";
    import CommonSessions from "./CommonSessions.svelte";
</script>

<div class="container">        
    <Breaks />
    <CommonSessions />
    <Tracks />
</div>

<style>
    .container {
        display: grid;
        position: relative;
    }
</style>