<script lang="ts">
    import Session from "./session";

    export let session: Session;
</script>

{#if session.tag}
    <span class="tag" style="color: var(--accent-{session.track.index}); background: var(--contrast-{session.track.index}">    
        {#each session.tag.split(",") as tag}
            {#if session.tag.toLowerCase() == "teknologi"}
                <span class="teknologi">{tag}</span>
            {:else if session.tag.toLowerCase() == "produkt"}
                <span class="produkt">{tag}</span>
            {:else if session.tag.toLowerCase() == "design"}
                <span class="design">{tag}</span>
            {:else if session.tag.toLowerCase() == "prosess"}
                <span class="prosess">{tag}</span>
            {:else if session.tag.toLowerCase() == "felles"}
                <span class="felles">{tag}</span>
            {:else if session.tag.toLowerCase() == "ki"}
                <span class="ki">{tag}</span>
            {:else if session.tag.toLowerCase() == "qa"}
                <span class="qa">{tag}</span>
            {:else if session.tag.toLowerCase() == "ekstern"}
                <span class="ekstern">{tag}</span>
            {:else if session.tag.toLowerCase() == "utvikling"}
                <span class="utvikling">{tag}</span>
            {:else if session.tag.toLowerCase() == "brukervennlighet"}
                <span class="brukervennlighet">{tag}</span>
            {:else}
                <span class="unknown">{tag}</span>
            {/if}
        {/each}
    </span>
{/if}

<style>
     .tag {
        font-size: xx-small;
        font-weight: bold;
        padding: 1px 3px;
    }

    .teknologi {
        background-color: blue;
        color: --grey;
    }
</style>