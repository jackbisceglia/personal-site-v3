<script>
    	export let options;

</script>

<style>
    .wrapper {
        width: 75%;
        min-height: auto;
        height: 10rem;
        max-height: 15rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 1rem 0;
        padding: 0;
    }
    .img-container {
        width: 30%;
        height: 90%;
        border-radius: 0.5rem;
        border: 3.5px solid #13e7b2;
        box-sizing: border-box;
        background-color: #0D577E;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        size: 1rem;
        max-width: 85%;
        height: auto;
    }
    p {
        line-height: 1.25rem;
        color: #e0f1ea;
		padding: 0;
		font-weight: 300;
		font-size: 1.05rem;
        width: 100%;
        margin: 0;
    }

    h2 {
        font-size: 1.5rem;
        cursor: pointer;
        font-weight: 400;
        color: #13e7b2;
        margin: 0;
    }

    .word {
        height: 100%;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 0;
    }
</style>

<div class="wrapper">
    <div class="img-container">
        <img src={options.imgLink} alt="">
    </div>
    
    <div class="word">
        <h2>{options.projTitle}</h2>
        <p class="introTag">
            {options.paragraph}
        </p>
        <p>
            <b>Tech:</b> {options.formatSkills()}
        </p>
    </div>
</div>