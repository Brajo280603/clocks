<script>
    import ClockBlock from "$lib/components/clock_block.svelte";

    let current_time=$state(["","","","","",""])
    $effect(()=>{
        timeFetch()
    })

    function timeFetch(){
        setInterval(()=>{
            let time = new Date()
            .toLocaleTimeString("en-IN",{
                hour12:true,
                hour:'2-digit',
                minute:'2-digit',
                second:'2-digit'
            })
            .replace(/\D/g,"")
            .split("")

            current_time = time;
        },1000)
    }

</script>

<main class="dark:bg-slate-900 h-dvh w-dvw bg-slate-300 flex justify-center gap-5 items-center">
    {#each current_time as digit }
        <ClockBlock num={digit}></ClockBlock>
    {/each}
</main>