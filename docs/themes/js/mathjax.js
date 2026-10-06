window.MathJax = {
    tex: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["\\[", "\\]"]],
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*",
        processHtmlClass: "arithmatex"
    }
};

// The initial MathJax startup renders the first page. Material navigation
// may fire before the CDN loader has initialized startup.promise.
if (typeof document$ !== "undefined") {
    let rendering = Promise.resolve();
    document$.subscribe(() => {
        if (!window.MathJax.startup || !window.MathJax.startup.promise) return;
        rendering = rendering
            .then(() => window.MathJax.startup.promise)
            .then(() => {
                window.MathJax.typesetClear();
                window.MathJax.texReset();
                return window.MathJax.typesetPromise();
            })
            .catch((error) => console.error("MathJax rendering failed", error));
    });
}
