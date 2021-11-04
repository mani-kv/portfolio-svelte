<!-- <script context="module">
    import url from '../assets/lib/url'
    export function setSsrHref(v) {
        url.ssrSet(v)
    }
</script> -->

<script>
    
    import url from '../assets/lib/url'
    let pages = ['Work', 'About']
    // function handleLinkClick(e){
    //     const href = e.target.href
    //     history.pushState(href, '', href)
    //     // $url.pathname = href
    //     // console.log (href)
    // }

$: console.log ($url.pathname)

</script>


<div class="w-auto h-20 bg-white shadow sticky top-0 flex items-center justify-between">

    <div class="px-10 font-sans text-2xl tracking-wider font-semibold" id="logo">
        Mani<span class=" text-blue-600">.</span>
    </div>



    <nav id="menuItems" class=" flex flex-row px-7 font-sans  uppercase text-sm tracking-wider font-semibold items-baseline">
      
            
            {#each pages as page}
                <!-- content here -->
               
                    {#if page==="Work"}
                         <!-- content here -->
                         <a href="/" class="m-3 hover:text-blue-600 hover:cursor-pointer active:text-blue-600 {$url.pathname === '/'? " text-blue-600" :""}" >{page}</a>
                    {:else}
                         <a href="/{page.toLocaleLowerCase()}" class="m-3 hover:text-blue-600 hover:cursor-pointer active:text-blue-600 {$url.pathname === `/${page.toLocaleLowerCase()}` ? " text-blue-600" :""}">{page}</a>
                         <!-- else content here -->
                    {/if}
                    <!-- About -->
              
                
            {/each}

           
            
      
        <button class="uppercase text-sm tracking-wider font-semibold px-3 py-2 m-3 bg-blue-600 text-white rounded-md hover:bg-blue-500">Resume</button>

    </nav>



</div>