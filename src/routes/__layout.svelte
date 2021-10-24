<script>
    import "../styles/global.css";
</script>
  <!-- Try some classes here -->


<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>



<div class=" text-gray-800 p-20">
  <nav class="mb-8 no-underline flex gap-4">
    
      <a href="/" class="hover:font-semibold" >Home</a>
      
    
    <a href="/projects" class="hover:font-semibold">Projects</a>
    
  </nav>
  <div class="mdtext">
  
   
    <slot />
  </div>
</div>

