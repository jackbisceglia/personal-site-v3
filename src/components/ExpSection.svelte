<script>
    export let options;
</script>

<style>
    .wrapper {
        min-width: 40%;
        max-width: 80%;
        text-align: center;
        margin-bottom: 0.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    p, li {
		color: #e0f1ea;
        margin: 0;
        padding: 0;
        font-weight: 300;
		font-size: 1.05rem;
    }
    .company {
        font-weight: 700;
    }

    ul {
        margin: 0;
        text-align: left;
    }
    .border {
        border-bottom: 2px solid #13e7b2;
        width: 2rem;
        height: 1px;
        margin-bottom: 0.25rem;
    }

</style>


<div class="wrapper">
    <p class="company">
        {options.company}
    </p>
    <div class="border"></div>

    <p>
        {options.position}, {options.term}
    </p>
    {#if options.bullets}
    <ul>
        {#each options.bullets as bullet}
            <li class="bullet">{bullet}</li>
        {/each}
    </ul>
    {/if}
</div>