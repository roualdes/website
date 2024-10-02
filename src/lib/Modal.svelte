<script>
    export let isOpen = false;

    function toggle() {
        isOpen = !isOpen;
    }
</script>

{#if isOpen}
<dialog open>
    <article>
        <header>
            <button aria-label="Close" class="close" on:click={toggle}>&times;</button>
            <div class="header-content">
                <slot name="title">
                </slot>
            </div>
        </header>
        <p>
            <slot name="body">
            </slot>
        </p>
    </article>
</dialog>
{/if}

<style>
    dialog {
        border: none;
        padding: 0;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        place-items: center;
        width: 100%;
        overflow: hidden;
    }

    article {
        background: white;
        padding: 1rem;
        padding-top: 2rem;
        border-radius: 0.5rem;
        max-width: 500px;
        width: 100%;
        position: relative;
        overflow-x: hidden;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ddd;
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
    }

    .close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        position: absolute;
        top: -0.7rem;
        right: 0.5rem;
        color: black;
    }

    .close:hover {
        color: red;
    }
</style>

