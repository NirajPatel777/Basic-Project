const sideMenu = document.querySelector('aside') as HTMLElement;
const menuBtn = document.getElementById("menu-btn") as HTMLElement;
const closeBtn = document.getElementById("close-btn") as HTMLElement;

const darkMode = document.querySelector(".dark-mode-variable") as HTMLElement;


interface Orders {
    productName: string;
    productNumber: number;
    paymentStatus: string;
    status: string;
}

const order: Orders[] = Array.of(
    {
        productName: "JavaScript Tutorial",
        productNumber: 123,
        paymentStatus: "Due",
        status: "pending",
    },
    {
        productName: "Typescript Tutorial",
        productNumber: 13,
        paymentStatus: "Refunded",
        status: "Declined",
    },
    {
        productName: "Java Tutorial",
        productNumber: 150,
        paymentStatus: "Paid",
        status: "Pending",
    }
);

document.addEventListener("ContentLoaded", () => {
    order.forEach((order) => {
        const tr = document.createElement("tr") as HTMLTableRowElement;
        const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === "Declined"
                ? "danger"
                : order.status === "Pending"
                    ? "warning"
                    : "primary"
            }">${order.status}</td>
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
