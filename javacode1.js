document.addEventListener("DOMContentLoaded", function() {
    alert("مرحبا بكم في صفحة حول المنتحع");
});
function adjustLayout() {
    if (window.innerWidth < 768) {
        document.body.style.fontSize = "14px";
    } else {
        document.body.style.fontSize = "16px";
    }
}
window.addEventListener("resize", adjustLayout);
adjustLayout();