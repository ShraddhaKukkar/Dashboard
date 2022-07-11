const ctx = document.getElementById("myChart").getContext("2d");

let gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, "rgba(114, 94, 243, 1)");
gradient.addColorStop(1, "rgba(255, 255, 255, 0.1)");


const labels = [
    "Feb",
    "Mar",
    "Apr",
    "May",
    "May",
    // "2017",
    // "2018",
    // "2019",
    // "2020",
];

const data = {
    labels,
    datasets: [{
        data: [0.3, 0.6, 0.5, 0.85, 0.7, 0.3],
        label: "Binary Income",
        fill: true,
        backgroundColor: gradient,
        borderColor: "#725EF3",
        pointBackgroundColor: "#333",
    }, ],
};

const config = {
    type: "line",
    data: data,
    options: {
        responsive: true,
        sales: {
            y: {
                ticks: {
                    callback: function(value, ) {
                        return "$" + value + "m";
                    },
                },
            },
        },
    },
};

const myChart = new Chart(ctx, config);