<script>
    export let x;
    export let lower = 0;
    export let upper = 1;
    export let speed = "slow";
    export let digits = 2;
    // TODO add digits and step, since some draggables may need to move faster or slower than others;
    // maybe scales 1 (slow), 2 (medium), 3 (fast)?
    // TODO add a11y support: https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
    function clip(x, lower, upper) {
        if (x >= upper) {
            x = upper;
        }
        if (x <= lower) {
            x = lower;
        }
        return x;
    }

    function touchdrag(e) {
        if (e.targetTouches.length !== 1) return;

        let initialposition = e.targetTouches[0].clientX;
        let denom = { slow: 250, fast: 10 };
        let initialvalue = x;
        let decimals = Math.pow(10, digits);

        e.preventDefault();

        document.ontouchmove = (e) => {
            if (e.targetTouches.length !== 1) return;
            e.preventDefault();
            console.log(e.targetTouches[0].clientX);
            let diff = Math.ceil(e.targetTouches[0].clientX - initialposition);
            let delta =
                Math.sign(diff) * Math.pow(Math.abs(diff) / denom[speed], 1.6);
            x =
                Math.round(
                    clip(initialvalue + delta, lower, upper) * decimals
                ) / decimals;
        };

        document.ontouchcancel = (e) => {
            document.ontouchmove = null;
        };
        document.ontouchend = (e) => {
            document.ontouchmove = null;
        };
    }

    function mousedrag(e) {
        let initialposition = e.clientX;
        let denom = { slow: 250, fast: 10 };
        let initialvalue = x;
        let decimals = Math.pow(10, digits);

        e.preventDefault();

        document.onmousemove = (e) => {
            if (e.which === 1) {
                let diff = Math.ceil(e.clientX - initialposition);
                let delta =
                    Math.sign(diff) *
                    Math.pow(Math.abs(diff) / denom[speed], 1.6);
                x =
                    Math.round(
                        clip(initialvalue + delta, lower, upper) * decimals
                    ) / decimals;
            }
        };
        document.onmouseup = (e) => {
            document.onmousemove = null;
        };
    }

    function drag(e) {
        let initialposition = e.clientX;
        let denom = { slow: 250, fast: 10 };
        let initialvalue = x;
        let decimals = Math.pow(10, digits);

        e.preventDefault();

        if (e.pointerType === "mouse") {
            document.onmousemove = (e) => {
                console.log(e.clientX);
                let diff = Math.ceil(e.clientX - initialposition);
                let delta =
                    Math.sign(diff) *
                    Math.pow(Math.abs(diff) / denom[speed], 1.6);
                x =
                    Math.round(
                        clip(initialvalue + delta, lower, upper) * decimals
                    ) / decimals;
            };
            document.onmouseup = (e) => {
                // TOOD would prefer a isdragging flag than this
                document.onmousemove = null;
            };
        } else if (e.pointerType === "touch") {
            document.onpointermove = (e) => {
                let clientx = e.touches
                    ? e.targetTouches[0].clientX
                    : e.clientX;
                console.log(clientx);
                let diff = Math.ceil(clientx - initialposition);
                let delta =
                    Math.sign(diff) *
                    Math.pow(Math.abs(diff) / denom[speed], 1.6);
                x =
                    Math.round(
                        clip(initialvalue + delta, lower, upper) * decimals
                    ) / decimals;
            };
            document.onpointerup = (e) => {
                // TOOD would prefer a isdragging flag than this
                document.onpointermove = null;
            };
        }

        // document.onblur = e => {
        //   document.onmousemove = null;
        // }
    }
</script>

<span
    class="unhighlightable"
    on:touchstart={(e) => touchdrag(e)}
    on:mousedown={(e) => mousedrag(e)}
>
    <slot />
</span>
