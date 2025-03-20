<script>
    import {dayIndexStore} from "../stores/scheduleStore";
</script>

<svelte:head>
    <title>Program d:exchange 2025</title>
</svelte:head>

<main>
    <div class="header">
        <img class="logo" src="\logo-2.png" alt="d:exchange"/>
        <!-- <h1 class="logo">
            <a href="/">
                <img src="/logo-2.png" width="250" alt="d:exchange"/>
            </a>
        </h1> -->
    </div> 
        <nav class="days">
            <a class={$dayIndexStore == 0 ? 'selected':''} href="/day1">Onsdag 9. apr</a>
            |
            <a class={$dayIndexStore == 1 ? 'selected':''} href="/day2">Torsdag 10. apr</a>
        </nav>   
    
    <slot />
</main>

<style>
    .header {
        margin: 0 0 0 24px;
        padding: 0 0 0 12px;
        border-radius: 10px;
        align-items: center;
    }

    .logo {
        display: flex;
        align-items: center;
        color: var(--white);
        font-size: 2rem;
        width: 100%;
    }

    /* .year {
        color: var(--white);
        margin: 0;        
        vertical-align: middle;
    } */

    .days {
        font-size: 1.3rem;
        background: var(--white);
        color: var(--dipsblue);
        margin: 4px 0 4px 24px;
        padding: 4px 15px;
        border-radius: 10px;
        position: relative;
    }

    a {
        color: var(--dipsblue);
        font-weight: regular;
        text-decoration: none;    
    }

    .selected {
        color: var(--dipsorange);
    }

    /* h1 {
        display: flex;
        align-items: center;
        color: var(--white);
        font-size: 2rem;
    } */

    img {
        vertical-align: middle;      
    }
    /*---------------------------
    ** Variables
    -----------------------------*/
    :global(:root) {
        --expanded-width: 273px;
        --collapsed-width: 20px;
        --accent-0: #f6a495;
        --accent-1: #edadac;
        --accent-2: #6c7cbc;
        --accent-3: #8991cd;        
        --accent-4: #b4bce3;
        --accent-5: #8da9e4;
        --accent-6: #9aeded;
        --accent-7: #fbc7bb;


        --dipsblue: #081079;
        --dipsorange: #c98376;
        
        --contrast-0: #262626;
        --contrast-1: #262626;
        --contrast-2: #262626;
        --contrast-3: #262626;
        --contrast-4: #262626;
        --contrast-5: #262626;
        --contrast-6: #262626;
        --contrast-7: #262626;
        --contrast-8: #262626;
        
        --white: #dadad2;
        --black: #262626;
        --font-body: hero-regular, hero-light;
        --font-heading: hero-bold, hero-light;
        --neutral: hsl(0, 0%, 95%);
        /* --white: hsla(0, 0%, 100%, 0.95); */
        margin: 0;
        padding: 0;
    }

    :global(body) {
        background: var(--white);
        font-family: var(--font-body);
        color: var(--black);
        margin: 0 2px 0 2px;
        padding: 0;
        font-size: 0.9rem;
    }

    :global(p) {
        margin: 5px 0;
        padding: 0;
    }

    @font-face {
        font-family: "hero-regular";
        src: url("$lib/fonts/HeroLight-Regular.otf");
        font-display: swap;
    }

    @font-face {
        font-family: "hero-bold";
        src: url("$lib/fonts/HeroLight-Bold.otf");
        font-display: swap;
    }

    @font-face {
        font-family: "hero-light";
        src: url("$lib/fonts/HeroLight-Light.otf");
        font-display: swap;
    }

    main {
        display: grid;
        margin: 4px auto 4px auto;
        grid-area: 1;
        width: auto;
        max-width: 1128px;
        min-width: 360px;
    }

    @media screen and (min-width: 42.5rem) {
    }

    @media print {
        main {
            width: auto;
        }
    }
</style>