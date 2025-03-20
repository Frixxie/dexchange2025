<script lang="ts">
    import Session from "./session";

    export let session: Session;
</script>

{#if session.kind}
    <span class="tag">    
        {#if session.kind=="speech"}
            FOREDRAG
        {:else}
            WORKSHOP
        {/if}
    </span>
{/if}

<style>
     .tag {
        font-size: xx-small;
        font-weight: bold;
        padding: 1px 3px;
        background-color: white;
    }
</style>