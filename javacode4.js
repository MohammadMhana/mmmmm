document.addEventListener("DOMContentLoaded", function() {
    alert("مرحبا بك في قسم التواصل");
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("تم إرسال رسالتك بنجاح");
        });
    }
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