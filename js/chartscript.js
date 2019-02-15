new Chart(document.getElementById("horizontalBar"), {
    "type": "horizontalBar",
    "data": {
        "labels": ["Engine Replacement", "Transmission", "AC Compressor", "ECM/PCM Compressor", "Head Gasket", "Suspension ", "Camshaft "],
        "datasets": [{
            "label": "Repair Cost ($)",
            "data": [4200, 3600, 1095, 1700, 2000, 3500, 3000],
            "fill": false,
            "backgroundColor": ["rgba(235, 98, 0, 0.2)", "rgba(235, 98, 0, 0.2)",
                "rgb(235, 98, 0, 0.2)", "rgba(235, 98, 0, 0.2)", "rgba(235, 98, 0, 0.2)",
                "rgba(235, 98, 0, 0.2)", "rgba(235, 98, 0, 0.2)"
            ],
            "borderColor": ["rgb(235, 98, 0)", "rgb(235, 98, 0)", "rgb(235, 98, 0)",
                "rgb(235, 98, 0)", "rgb(235, 98, 0)", "rgb(235, 98, 0)", "rgb(235, 98, 0)"
            ],
            "borderWidth": 2
        }]
    },
    "options": {
        "scales": {
            "xAxes": [{
                "ticks": {
                    "beginAtZero": true,
                    // Include a dollar sign in the ticks
                    callback: function (value) {

                        return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
                    }

                }
            }]
        }
    }
});
