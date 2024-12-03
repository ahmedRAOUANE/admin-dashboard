"use client";

import React from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
    // Chart data
    const data = {
        labels: ["January", "February", "March", "April", "May"], // X-axis labels
        datasets: [
            {
                label: "Sales ($)",
                data: [3000, 2500, 4000, 3500, 5000], // Y-axis data
                backgroundColor: ["rgb(59 130 246 / 50%)"], // Bar colors
                borderColor: "rgb(59 130 246)",
                borderWidth: 1,
            },
        ],
    };

    // Chart options
    // TODO: might need it sometime
    // const options = {
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             position: "top", // Show the legend at the top
    //         },
    //         tooltip: {
    //             enabled: true, // Show tooltips on hover
    //         },
    //     },
    //     scales: {
    //         x: {
    //             grid: {
    //                 display: false, // Disable gridlines on X-axis
    //             },
    //         },
    //         y: {
    //             grid: {
    //                 drawBorder: true, // Show the border for Y-axis
    //             },
    //             ticks: {
    //                 beginAtZero: true, // Ensure the Y-axis starts at 0
    //             },
    //         },
    //     },
    // };

    return (
        <div className="p-4 rounded-lg bg-white dark:bg-white-dark w-full">
            <Bar data={data} />
        </div>
    );
};

export default BarChart;
