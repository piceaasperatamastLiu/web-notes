(() => {
    function render(body) {
        if (typeof renderMathInElement !== "function" || !body) return;
        renderMathInElement(body, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false },
                { left: "\\(", right: "\\)", display: false },
                { left: "\\[", right: "\\]", display: true }
            ],
            throwOnError: false
        });
    }

    // Render the first page even when Material's document$ is unavailable.
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => render(document.body));
    } else {
        render(document.body);
    }
    window.addEventListener("load", () => render(document.body));

    if (typeof document$ !== "undefined") {
        document$.subscribe(({ body }) => render(body));
    }
})();
