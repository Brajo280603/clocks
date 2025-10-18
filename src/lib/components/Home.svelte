<script>
    import {House} from '@lucide/svelte'

    let {Class} = $props()
</script>


<a href="/"
 class="fixed top-4 left-4 rounded-full size-10 rounded flex justify-center items-center
bg-slate-200 border-slate-100 inset-shadow-2xs shadow-md inset-shadow-white
dark:bg-slate-900 dark:border-slate-700 dark:inset-shadow-slate-500 dark:shadow-slate-950
dark:text-slate-300
{Class}">
<House  />
</a>

