<script>
    let buttonProps = {
        class:[$$restProps.class]
    }
</script>

    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <button on:click on:mouseover on:mouseenter on:mouseleave>
        <slot/>
    </button>

<style>
	button {
        background-color: var(--dipsblue);
        color: white;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        margin: 0 5px 0 0;
        padding: 10px;
        border-radius: 10px;
    }

    button:hover {
        /* color: var(--accent-2) */
        background-color: var(--accent-2);
    }
</style>