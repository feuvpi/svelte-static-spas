<script>
    let { 
        squareSize = 4,
        gridGap = 6,
        flickerChance = 0.3,
        color = "rgb(0, 0, 0)",
        width = undefined,
        height = undefined,
        className = "",
        maxOpacity = 0.3
    } = $props();

    let canvas = $state();
    let container = $state();
    let isInView = $state(false);
    const canvasSize = $state({ width: 0, height: 0 });

    // Memoized color calculation
    const memoizedColor = $derived(() => {
        const toRGBA = (color) => {
            if (typeof window === "undefined") {
                return `rgba(0, 0, 0,`;
            }
            const canvas = document.createElement("canvas");
            canvas.width = canvas.height = 1;
            const ctx = canvas.getContext("2d");
            if (!ctx) return "rgba(255, 0, 0,";
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, 1, 1);
            const [r, g, b] = Array.from(ctx.getImageData(0, 0, 1, 1).data);
            return `rgba(${r}, ${g}, ${b},`;
        };
        return toRGBA(color);
    });

    function setupCanvas(canvas, width, height) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        const cols = Math.floor(width / (squareSize + gridGap));
        const rows = Math.floor(height / (squareSize + gridGap));

        const squares = new Float32Array(cols * rows);
        for (let i = 0; i < squares.length; i++) {
            squares[i] = Math.random() * maxOpacity;
        }

        return { cols, rows, squares, dpr };
    }

    function updateSquares(squares, deltaTime) {
        for (let i = 0; i < squares.length; i++) {
            if (Math.random() < flickerChance * deltaTime) {
                squares[i] = Math.random() * maxOpacity;
            }
        }
    }

    function drawGrid(ctx, width, height, cols, rows, squares, dpr) {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "transparent";
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const opacity = squares[i * rows + j];
                ctx.fillStyle = `${memoizedColor}${opacity})`;
                ctx.fillRect(
                    i * (squareSize + gridGap) * dpr,
                    j * (squareSize + gridGap) * dpr,
                    squareSize * dpr,
                    squareSize * dpr
                );
            }
        }
    }

    $effect(() => {
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId;
        let gridParams;

        const updateCanvasSize = () => {
            const newWidth = width || container.clientWidth;
            const newHeight = height || container.clientHeight;
            canvasSize.width = newWidth;
            canvasSize.height = newHeight;
            gridParams = setupCanvas(canvas, newWidth, newHeight);
        };

        updateCanvasSize();

        let lastTime = 0;
        const animate = (time) => {
            if (!isInView) return;

            const deltaTime = (time - lastTime) / 1000;
            lastTime = time;

            updateSquares(gridParams.squares, deltaTime);
            drawGrid(
                ctx,
                canvas.width,
                canvas.height,
                gridParams.cols,
                gridParams.rows,
                gridParams.squares,
                gridParams.dpr
            );
            animationFrameId = requestAnimationFrame(animate);
        };

        // Setup ResizeObserver
        const resizeObserver = new ResizeObserver(() => {
            updateCanvasSize();
        });

        resizeObserver.observe(container);

        // Setup IntersectionObserver
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                isInView = entry.isIntersecting;
            },
            { threshold: 0 }
        );

        intersectionObserver.observe(canvas);

        if (isInView) {
            animationFrameId = requestAnimationFrame(animate);
        }

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
        };
    });
</script>

<div bind:this={container} class="w-full h-full {className}">
    <canvas
        bind:this={canvas}
        class="pointer-events-none"
        style="width: {canvasSize.width}px; height: {canvasSize.height}px;"
    />
</div>