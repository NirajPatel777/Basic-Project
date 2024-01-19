"use strict";
const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const darkMode = document.querySelector(".dark-mode");
const order = Array.of({
    productName: "JavaScript Tutorial",
    productNumber: 123,
    paymentStatus: "Due",
    status: "pending",
}, {
    productName: "Typescript Tutorial",
    productNumber: 13,
    paymentStatus: "Refunded",
    status: "Declined",
}, {
    productName: "Java Tutorial",
    productNumber: 150,
    paymentStatus: "Paid",
    status: "Pending",
});
document.addEventListener("DOMContentLoaded", () => {
    order.forEach((order) => {
        const tr = document.createElement("tr");
        const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === "Declined"
            ? "danger"
            : order.status === "Pending"
                ? "warning"
                : "primary"}">${order.status}</td>
        <td>details</td>`;
        tr.innerHTML = trContent;
        document.querySelector("table tbody")?.appendChild(tr);
    });
});
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        // Set the display property to "block" to make the side menu visible
        if (sideMenu) {
            sideMenu.style.display = "block";
        }
    });
}
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        if (sideMenu) {
            sideMenu.style.display = 'none';
        }
    });
}
if (darkMode) {
    darkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode-variable');
        const firstSpan = darkMode.querySelector('span:nth-child(1)');
        if (firstSpan) {
            firstSpan.classList.toggle('active');
        }
        const secondSpan = darkMode.querySelector('span:nth-child(2)');
        if (secondSpan) {
            secondSpan.classList.toggle('active');
        }
    });
}
//* in javascript menubtn and closebtn 
// menuBtn.addEventListener("click", () => {
//     sideMenu.style.display = "block";
// });
// closeBtn.addEventListener('click', () => {
//     sideMenu.style.display = 'none';
// });
// darkMode.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode-variable');
//     darkMode.querySelector(span:nth-child(1))?.classList.toggle('active');
//     darkMode.querySelector(span:nth-child(2))?.classList.toggle('active');
// })
