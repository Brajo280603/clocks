<script>
    import ClockBlock from "$lib/components/clocks_with_clock/clock_block.svelte";

    import Home from "$lib/components/Home.svelte";
    
    let current_time=$state(["","","","","",""])
    $effect(()=>{
        timeFetch()
    })

    function timeFetch(){
        let prevmin = "";
        let prevsec = "";
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

<main class="dark:bg-slate-800 h-dvh w-dvw bg-slate-300 flex justify-center gap-5 items-center relative  ">
    <Home></Home>
    <div class="h-full w-full flex justify-center items-center gap-5 " >
        {#each current_time as digit }
                <ClockBlock num={digit}></ClockBlock>
        {/each}
    </div>
    
</main>