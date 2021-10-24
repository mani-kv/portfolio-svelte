<script>
    export let Title;
</script>

<svelte:head>
    <title>{Title}</title>
    <link href="themes/prism-ghcolors.css" rel="stylesheet" />
</svelte:head>

<div class="max-w-x1 mx-auto py-6">
<h1>MDSVEX Layout</h1>

<slot />

</div>