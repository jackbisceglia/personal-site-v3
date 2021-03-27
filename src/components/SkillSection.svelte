<script>
    export let options;
    let skillStr = options.skillArr.reduce((accum, curr, idx) => {
        let st = `${accum} ${curr}`
        return idx === options.skillArr.length - 1 
            ?
            st
            :
            st + ','
    },'');
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
    .type {
        font-weight: 700;
    }
    .border {
        border-bottom: 2px solid #13e7b2;
        width: 2rem;
        height: 1px;
        margin-bottom: 0.25rem;
    }
</style>


<div class="wrapper">
    <p class="type">
        {options.skillType}
    </p>
    <div class="border"></div>
    <p>
        {skillStr}
    </p>
</div>