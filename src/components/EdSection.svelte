<script>
    export let options;
</script>

<style>
    .wrapper {
        min-width: 40%;
        text-align: center;
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p {
		color: #e0f1ea;
        margin: 0;
        padding: 0;
        font-weight: 300;
		font-size: 1.05rem;
    }
    .school {
        font-weight: 700;
    }

    .GPA span{
        font-weight: 600;
        color: #33FFAA; 
    }

    .border {
        border-bottom: 2px solid #33FFAA;
        width: 2rem;
        height: 1px;
        margin-bottom: 0.25rem;
    }
</style>


<div class="wrapper">
    <p class="school">
        {options.school}
    </p>
    <div class="border"></div>

    <p class="degree">
        {`${options.degree}, ${options.major}`}
    </p>
    <p class="GPA">
        GPA: <span>{options.GPA}/4.00</span>
    </p>
    <p class="grad">
        Expected Graduation: <span>{`${options.expectedGrad.season}, ${options.expectedGrad.year}`}</span>
    </p>
</div>