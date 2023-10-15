 let slider = document.body.querySelector(".slider");
 let span = slider.nextElementSibling;
 

 slider.addEventListener("mousemove", () => {
    let spanValue = slider.value;
    span.textContent = `${spanValue} x ${spanValue}`;
 });