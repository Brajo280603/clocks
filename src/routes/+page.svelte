<script>
	import ClockCell from "$lib/components/clocks_with_clock/clock_cell.svelte";

    let angles = ["┌","|","┘","└","┐","-",""];

    let angle = $state("");
    $effect(()=>{
        setInterval(()=>{
            let index = Math.floor(Math.random()*angles.length)
            console.log(index)
            angle = angles[index]
        },2000)
    })
    

</script>

<main class="h-dvh w-dvw flex justify-center items-center dark:bg-slate-900 bg-slate-300">
    <a class="size-62 rounded flex flex-col items-center justify-evenly rounded-full transition duration-400
    dark:bg-slate-800 dark:inset-shadow-slate-500 dark:shadow-slate-950
    inset-shadow-xs shadow-sm bg-slate-300 inset-shadow-white
    hover:shadow-lg hover:inset-shadow-sm " href="/clock_with_clocks">
        <ClockCell Class="size-16" angle={angle}/>
        <p class="text-lg text-light dark:text-white text-slate-700">clock with clocks</p>
    </a>
</main>