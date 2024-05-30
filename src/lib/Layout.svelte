<script>
 import Navbar from '$lib/Navbar.svelte';
 import Sidebar from '$lib/Sidebar.svelte';
 let open = false;
</script>

<div class="container-fluid">
    <div class="row">

        <div class="col-lg-1 d-none d-lg-block"></div>

        <div class="col-lg-8 gx-sm-3 ps-sm-3">
            <Sidebar {open}/>
            <Navbar bind:sidebar={open}/>
            <main>
                <slot name="content">
                    <span class="missing"></span>
                </slot>
            </main>
        </div>

        <div class="col-lg-3 d-none d-lg-block ps-sm-3 offset-md-9 fixed-top">
            <slot name="toc">
                <span class="missing"></span>
            </slot>
        </div>

    </div>
</div>
