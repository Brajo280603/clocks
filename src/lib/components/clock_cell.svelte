<script>
    let {angle} = $props();

    let hand1;
    let hand2;

    let angleType = {
        "┌": [90, 0],
        "|": [270, 90],
        "┘": [270, 180],
        "└": [270, 0],
        "┐": [180, 90],
        "-": [180, 0],
        "": [135,135]
    };

    function rotate(angle_deg){        
        hand1.style["rotate"] = angle_deg[0]+"deg"
        hand2.style["rotate"] = angle_deg[1]+"deg"
    }
 
    $effect(()=>{
        rotate(angleType[angle])
    })
    

</script>

<main class="dark:bg-slate-950 bg-slate-200   size-10 rounded relative">
    <div bind:this={hand1} class="h-1/20 w-1/2 dark:bg-teal-500 bg-orange-500 absolute top-1/2 left-1/2 origin-left rounded-full transition duration-500"></div>
    <div bind:this={hand2} class="h-1/20 w-1/2 dark:bg-teal-500 bg-orange-500 absolute top-1/2 left-1/2 origin-left rounded-full transition duration-500"></div>
</main>

<style>
    
</style>