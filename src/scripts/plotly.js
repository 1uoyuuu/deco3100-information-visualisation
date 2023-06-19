const unpack = (data, key) => data.map(row => row[key]); //unpack function to extract data from csv file, credit to week 4 tutorial slides
// by default all the chart config will not display the modebar to distract user
// it will help user to focus more on the story in my opinion
const config = {
    displayModeBar: false
}
// here are some predefined colours that will be used throughout the project
const dark = "#26562F";
const red = "#F92F04";
const green = "#048E56";

// ------------------------------ CHART AREA ------------------------------

//treemap for global biomass distribution
Plotly.d3.csv("src/data-sets/biomass-data-2018.csv", biomassData => {
    const labels = unpack(biomassData, "Entity");
    const parents = unpack(biomassData, "Parent");
    const biomass = unpack(biomassData, "Global Biomass").map(Number); // parse string into numbers

    var data = [{
        type: "treemap",
        labels: labels,
        parents: parents,
        values: biomass,
        marker: {
            // specify the theme color for each kingdom, as well as the highlighting part, rest of them are left empty to apply the default color
            colors: ["#EAEAEA", "#267EE4", "#08A057", "#7D7D7D", "", "", "", "", "", "", "", "", "#F92F04", "#E50958"]
            //total, animalia, plantae, microorganism
        },
        textinfo: "label+percent entry",
        textfont: {
            size: 12,
            family: "Helvetica Neue"
        },
        branchvalues: "total",
        pathbar: {
            thickness: 6,
            textfont: {
                size: 12
            }
        },
        // <extra></extra> will disable the trace name
        hovertemplate: "<b>%{label}</b><br>" +
            "%{value:,} tonnes of carbon" +
            "<extra></extra>"
    }];
    var layout = {
        height: 700,
        paper_bgcolor: "whtie",
        autosize: true,
        margin: {
            l: 0,
            r: 0,
            t: 30,
            b: 30
        },
        hoverlabel: {
            align: "left" //hoverlabel text should align left for consistency
        },
        //add annotation as hint for users to locate the position of human
        annotations: [
            {
                text: "Maybe human is too small to display here? ",
                showarrow: true,
                arrowcolor: red, // Set the color of the arrow
                arrowhead: 1, // Set the arrowhead style (0: none, 1: triangular, 2: "half-triangular" on both ends)
                arrowsize: 1, // Set the size of the arrowhead
                arrowwidth: 1, // Set the width of the arrow line
                ax: 0, // Adjust the x-coordinate of the arrow tail (negative value moves it to the left)
                ay: 30, // Adjust the y-coordinate of the arrow tail (negative value moves it upwards)
                align: "right",
                x: 0.9,
                y: 0,
                xref: "paper",
                yref: "paper",
                xanchor: "right",
                yanchor: "bottom",
                font: {
                    size: 12,
                    color: red,
                    family: "Helvetica Neue"
                }
            }
        ],
    };

    Plotly.newPlot('biomass-chart', data, layout, config);

});

//treemap chart for land use change
Plotly.d3.csv("src/data-sets/land-use-data.csv", landData => {

    const labels = unpack(landData, "Entity");
    const landuseBefore = unpack(landData, "Area(10000BCE)").map(Number); // parse string into numbers
    const landuse1700 = unpack(landData, "Area(1700)").map(Number);
    const landuse1900 = unpack(landData, "Area(1900)").map(Number);
    const landuse2018 = unpack(landData, "Area(2018)").map(Number);
    const parents = unpack(landData, "Parent");

    var data = [{
        type: "treemap",
        branchvalues: "total",
        labels: labels,
        parents: parents,
        values: landuseBefore,
        textfont: {
            size: 12,
            family: "Helvetica Neue"
        },
        branchvalues: "total",
        pathbar: {
            thickness: 6,
            textfont: {
                size: 12
            }
        },
        marker: {
            line: {
                width: 1
            },
            colors: [
                '#EAEAEA', // Earth
                '#5B5B5B', // Land 
                '#267EE4', // Ocean 
                '#764000', // Habitable Land 
                '#F5EED7', // Barren Land 
                '#D2E9FF', // Glaciers
                '#0B742E', // Forest
                '#4AA148', // Wild Grassland 
                '#717171', // Built-up Area 
                '#F92F04', // Crops
                '#F92F04' // Grazing
            ]
        },
        hovertemplate: "<b>%{label}</b><br>" +
            "%{value:} billion hectares" +
            "<extra></extra>"

    }];

    var layout = {
        height: 700,
        sliders: [{
            pad: {
                t: 0,
                l: 20,
                r: 20,
                b: 20
            },
            currentvalue: {
                xanchor: 'left',
                prefix: '<b>Year</b>: ',
                font: {
                    color: dark,
                    size: 12
                }
            },
            steps: [{
                    label: '10000BCE',
                    method: 'animate',
                    args: [
                        ['10000BCE'], {
                            mode: 'immediate',
                            transition: {
                                duration: 250
                            }
                        }
                    ]
                },
                {
                    label: '1700',
                    method: 'animate',
                    args: [
                        ['1700'], {
                            mode: 'immediate',
                            transition: {
                                duration: 250
                            }
                        }
                    ]
                },
                {
                    label: '1900',
                    method: 'animate',
                    args: [
                        ['1900'], {
                            mode: 'immediate',
                            transition: {
                                duration: 250
                            }
                        }
                    ]
                },
                {
                    label: '2018',
                    method: 'animate',
                    args: [
                        ['2018'], {
                            mode: 'immediate',
                            transition: {
                                duration: 250
                            }
                        }
                    ]
                }
            ]

        }],
        paper_bgcolor: "white",
        margin: {
            l: 0,
            r: 0,
            t: 20,
            b: 10
        },
        hoverlabel: {
            align: "left"
        }
    }
    // add frames of different stages of land usage for the slider
    var frames = [{
        name: '10000BCE',
        data: [{
            values: landuseBefore
        }]
    }, {
        name: '1700',
        data: [{
            values: landuse1700
        }]
    }, {
        name: '1900',
        data: [{
            values: landuse1900
        }]
    }, {
        name: '2018',
        data: [{
            values: landuse2018
        }]
    }];


    // this slider animation code comes from week 8 tutorial, credit to the tutor who made it
    Plotly.newPlot('land-use-chart', data, layout, config).then(function () {
        Plotly.addFrames('land-use-chart', frames);
    });

});

// line chart for average daily calorie intake
Plotly.d3.csv("src/data-sets/dietary-composition-in-calorie.csv", calorieData => {
    const calorieYear = unpack(calorieData, "Year");
    const totalCalorie = unpack(calorieData, "Daily Total Calorie");
    const meatCalorie = unpack(calorieData, "Daily Calorie from Animal Product");
    var traceOne = {
        x: calorieYear,
        y: totalCalorie,
        type: 'scatter',
        mode: 'line',
        line: {
            color: green
        },
        name: "Energy Supply(All food)",
        stackgroup: "one", //make sure they stack in the same bar group
        hovertemplate: 'Energy supply from<br>all foods: <b>%{y:,} kcal</b><extra></extra>'
    };
    var traceTwo = {
        x: calorieYear,
        y: meatCalorie,
        type: 'scatter',
        mode: 'line',
        line: {
            color: red
        },
        name: "Energy Supply(Animal product)",
        stackgroup: "one",
        hovertemplate: "Energy supply from<br>animal products: <b>%{y:,} kcal</b><extra></extra>"
    };

    var data = [traceTwo, traceOne];
    var layout = {
        height: 500,
        yaxis: {
            type: "log", //log scale better reveal its ascending trend, as the value between two traces are far away
            title: {
                text: "Kilocalories (kcal)",
                font: {
                    family: 'Helvetica Neue',
                    size: 16,
                    color: dark
                }
            },
            //setup the tick labels that display on the chart
            tickvals: [200, 400, 800, 1000, 2000, 3000, 4000],
            ticktext: ["200", "400", "800", "1000", "2000", "3000", "4000"],
            tickfont: {
                size: 14,
                family: 'Helvetica Neue',
                color: dark
            }
        },
        xaxis: {
            title: {
                text: "Time",
                font: {
                    family: 'Helvetica Neue',
                    size: 16,
                    color: dark
                }
            },
            tickfont: {
                size: 14,
                family: 'Helvetica Neue',
                color: dark
            }
        },

        legend: {
            x: 1,
            y: 20,
            xanchor: 'right',
            yanchor: 'top'
        },
        paper_bgcolor: "white",
        plot_bgcolor: "white",
        margin: {
            t: 0,
            pad: 10
        },
        hoverlabel: {
            align: "left"
        }
    };

    Plotly.newPlot("daily-energy-intake-chart", data, layout, config);

});

// line chart for living planet index change
Plotly.d3.csv("src/data-sets/living-planet-index.csv", planetData => {
    const indexYear = unpack(planetData, "Year");
    const indexValue = unpack(planetData, "Living Planet Index");

    var data = [{
        x: indexYear,
        y: indexValue,
        type: 'scatter',
        mode: 'lines',
        line: {
            color: red
        },
        hovertemplate: "Compared to 1970:<br>%{y:.2f}%" + "<extra></extra>"
    }];
    var layout = {
        height: 500,
        yaxis: {
            title: {
                text: "Living Planet Index Change (%)",
                font: {
                    family: 'Helvetica Neue',
                    size: 16,
                    color: dark
                }
            },
            tickfont: {
                size: 14,
                family: 'Helvetica Neue',
                color: dark
            }
        },
        xaxis: {
            title: {
                text: "Time",
                font: {
                    family: "Helvetica Neue",
                    size: 16,
                    color: dark
                }
            },
            tickfont: {
                size: 14,
                family: 'Helvetica Neue',
                color: dark
            }
        },
        paper_bgcolor: "white",
        plot_bgcolor: "white",
        margin: {
            t: 0,
            pad: 10
        },
    };


    Plotly.newPlot("living-planet-index-chart", data, layout, config);

});


// choropleth for wildlife habitat loss by 2050
Plotly.d3.csv("src/data-sets/habitat-change-by-2050.csv", habitatData => {
    const countries = unpack(habitatData, "Entity");
    const locations = unpack(habitatData, "Code");
    //delete the % sign at the end of each entry and parse it into numbers
    const values = unpack(habitatData, "Habitat Change").map(val => val.slice(0, -1)).map(Number);
    var data = [{
        type: "choropleth",
        locations: locations,
        z: values,
        text: countries,
        colorscale: [
            [0, red],
            [1, "white"]
        ],

        marker: {
            line: {
                color: dark,
                width: 0.1
            }
        },
        colorbar: {
            ticksuffix: "%",
            title: "Habitat Change<br>Compared to 2010",
            titlefont: {
                family: "Helvetica Neue",
                size: 14,
                color: dark
            },
            tickfont: {
                family: "Helvetica Neue",
                color: dark
            },
            len: 0.9,

        },
        hovertemplate: "Country: <b>%{text}</b><br>" +
            "Habitat Change: <b>%{z}%</b><extra></extra>",
        hoverlabel: {
            bgcolor: dark,
            font: {
                family: "Helvetica Neue",
                size: 12,
                color: "white"
            }
        }
    }];
    var layout = {
        height: 300,
        width: 650,
        geo: {
            showframe: true,
            projection: {
                type: 'twikel tripel'
            },
            showocean: true,
            oceancolor: "white"
        },
        paper_bgcolor: "white",
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        }
    };


    Plotly.newPlot("wildlife-habitat-change-chart", data, layout, config);

})

// pie chart for GHG emission from food production within 2 degree celcius budget
// the unit of GHG emission is in billion tonnes of carbon
// as the data is quite simple, so I didn't create a new csv for them,
// instead, I create the chart directly from here
var data = [{
    values: [1356, 49],
    labels: ['Food', 'Non-Food'],
    domain: {
        column: 0
    },
    hole: .5, // make sure it's a donut shape
    name: '67% chance',
    hovertemplate: "Sector: <b>%{label}</b><br>" +
        "Emission: <b>%{value} billion tonnes</b><extra></extra>",
    type: 'pie',
    marker: {
        colors: [red,dark]
    }
}, {
    values: [1356, 460],
    labels: ['Food', 'Non-Food'],
    hole: .5,
    domain: {
        column: 1
    },
    name: '50% chance',
    type: 'pie',
    hovertemplate: "Sector: <b>%{label}</b><br>" +
        "Emission: <b>%{value} billion tonnes</b><extra></extra>",
}];

var layout = {
    height: 400,
    showlegend: true,
    legend: {
        x: 1,
        y: 20,
        xanchor: 'right',
        yanchor: 'top'
    },
    // use grid to display two pie chart in the same frame
    // their column is set in the data part
    grid: {
        rows: 1,
        columns: 2
    },
    paper_bgcolor: "white",
    margin: {
        t: 0,
        b: 10,
        l: 0,
        r: 0,

    },
    annotations: [{
            text: '67% chance to stay below 2°C',
            xref: 'paper',
            yref: 'paper',
            x: 0.23,
            y: 0,
            xanchor: 'center',
            yanchor: 'center',
            showarrow: false,
            font: {
                family: 'Helvetica Neue',
                size: 16,
                color: dark
            }
        },
        {
            text: 'Total Emission:<br><b>1405 billion tonnes</b>',
            xref: 'paper',
            yref: 'paper',
            x: 0.235,
            y: 0.5,
            xanchor: 'center',
            yanchor: 'center',
            showarrow: false,
            font: {
                family: 'Helvetica Neue',
                size: 14,
                color: dark
            }
        },
        {
            text: '50% chance to stay below 2°C',
            xref: 'paper',
            yref: 'paper',
            x: 0.76,
            y: 0,
            xanchor: 'center',
            yanchor: 'center',
            showarrow: false,
            font: {
                family: 'Helvetica Neue',
                size: 16,
                color: dark
            }

        },
        {
            text: 'Total Emission:<br><b>1816 billion tonnes</b>',
            xref: 'paper',
            yref: 'paper',
            x: 0.765,
            y: 0.5,
            xanchor: 'center',
            yanchor: 'center',
            showarrow: false,
            font: {
                family: 'Helvetica Neue',
                size: 14,
                color: dark
            }
        },
    ]
};
Plotly.newPlot('food-production-emission-chart', data, layout, config);


Plotly.d3.csv("src/data-sets/top-10-land-intensive-food.csv", landData => {
    const foodY = unpack(landData, "Entity");
    const landX = unpack(landData, "Land Use");

    var data = [{
        type: 'bar',
        x: landX,
        y: foodY,
        orientation: 'h',
        marker: {
            color: [red,red,dark,dark,dark,dark,dark,dark,dark,dark]
        },
        hovertemplate: "<b>%{x} m²</b> land is required to produce<br>1000 kilocalories of <b>%{y}</b>.<extra></extra>",
    }];
    var layout = {
        height: 500,
        width: 700,
        yaxis: {
            categoryorder: "total ascending",
            title: {
                text: "Food (per 1000 kcal)",
                font: {
                    family: "Helvetica Neue",
                    size: 16,
                    color: dark
                },
                standoff: 10 // Adjust the distance between the label and the y-axis
            },
            tickfont: {
                family: "Helvetica Neue",
                size: 14,
                color: dark
            }
        },
        xaxis: {
            title: {
                text: "Land Use (m²)",
                font: {
                    family: "Helvetica Neue",
                    size: 16,
                    color: dark
                },
            },
            tickfont: {
                family: "Helvetica Neue",
                size: 14,
                color: dark
            }
        },
        margin: {
            l: 150, // adjust left margin to accommodate long labels
            r: 0,
            b: 50,
            t: 50
        },
        hoverlabel: {
            align: "left",
            font: {
                family: 'Helvetica Neue',
                size: 12,
                color: dark
            },
            bgcolor: "white",
            bordercolor: dark,
            borderwidth: 1,
        }

    };


    Plotly.newPlot("land-intensive-food-chart", data, layout, config);

});


// stacked barchart for land required for different diet patterns
Plotly.d3.csv("src/data-sets/land-required-for-different-diets.csv", landData => {
    const dietPattern = unpack(landData, "Diet Pattern");
    const cropland = unpack(landData, "Cropland");
    const pasture = unpack(landData, "Pasture");

    //only show current global diet data at first initiation, so I use index 0 value here
    var traceOne = {
        y: [dietPattern[0]],
        //only extract the first value of the array, and use that only value to make a array 
        x: [cropland[0]],
        name: 'Cropland',
        type: 'bar',
        orientation: 'h',
        marker: {
            color: "#048E56"
        },
        hovertemplate: "<b>%{x} billion hectares Cropland</b> is required if our diet pattern is<br><b>%{y}</b>.<extra></extra>",
    };
    var traceTwo = {
        y: [dietPattern[0]],
        x: [pasture[0]],
        name: 'Pasture',
        type: 'bar',
        orientation: 'h',
        marker: {
            color: "#26562F"
        },
        hovertemplate: "<b>%{x} billion hectares Pasture land</b> is required if our diet pattern is<br><b>%{y}</b>.<extra></extra>",
    };

    var data = [traceOne, traceTwo];

    //creating frames for slider animation, similar to previous land use chart slider
    var frames = [];
    //use for loop to iterate through the dietPattern array to create respective frame and step
    for (let i = 0; i < dietPattern.length; i++) {
        var frame = {
            name: dietPattern[i],
            data: [
                {
                    x: [cropland[i]],
                    y: [dietPattern[i]]
                },
                {
                    x: [pasture[i]],
                    y: [dietPattern[i]]
                }
            ]
        };
        frames.push(frame);
    }

    var steps = [];
    for (let i = 0; i < dietPattern.length; i++) {
        var step = {
            label: dietPattern[i], //text label to appear on the slider
            method: 'animate',
            args: [
                [dietPattern[i]],
                {
                    mode: 'immediate',
                    transition: { duration: 250 },
                    frame: { duration: 250, redraw: false },
                    
                }
            ]
        };
        steps.push(step);
    }

    var layout = {
        width: 1200,
        height: 400,
        barmode: "stack",
        sliders: [{
            pad: { t: 50, l: 50, r: 50, b: 50 },
            currentvalue: {
                xanchor: 'left',
                prefix: '<b>Diet Pattern</b>: ',
                font: { color: dark, size: 16 }
            },
            steps: steps,
            font: {
                family: "Helvetica Neue",
                    size: 14,
                    color: dark
            }
        }],
        legend: {
            x: 0.95,
            y: 1.2,
            xanchor: 'right',
            yanchor: 'top'
        },
        margin: {
            l: 0,
            r: 0,
            t: 0,
            b: 0,
        },
        xaxis: {
            title: {
                text: "Land Use (billion hectares)",
                font: {
                    family: "Helvetica Neue",
                    size: 14,
                    color: dark
                },
                standoff: 5 // Adjust the distance between the label and the x-axis
            },
            tickfont: {
                family: "Helvetica Neue",
                size: 14,
                color: dark
            }
        },
        hovermode: "closest", //only show the closest label when hovering
        hoverlabel: {
            align: "left",
            font: {
                family: 'Helvetica Neue',
                size: 12,
                color: dark
            },
            bgcolor: "white",
            bordercolor: dark,
            borderwidth: 1,
        }

        
    };

    Plotly.newPlot('land-required-for-different-diets-chart', data, layout, config).then(function () {
        Plotly.addFrames('land-required-for-different-diets-chart', frames);
    });
});

// normal bar chart for emission reduction methods
Plotly.d3.csv("src/data-sets/emission-reduction-measures.csv", emissionData => {
    const method = unpack(emissionData, "Entity");
    const emission = unpack(emissionData, "Emission").map(Number);

    var data = [{
        type: 'bar',
        x: method,
        y: emission,
        marker: {
            color: [red,green,green]//customised variable for color
        },
        hovertemplate: "Mode: <b>%{x}</b><br>Emission: <b>%{y} billion tonnes</b><extra></extra>",
    }];


    var annotations = [];
    for (var i = 0; i < method.length; i++) {
        var percentageChange = ((emission[0] - emission[i]) / emission[0]).toFixed(2) * 100;
        var annotation = {
            x: method[i],
            y: emission[i],
            text: percentageChange+"% reduction", // format the value to a percentage
            showarrow: false,
            font: {
                family: 'Helvetica Neue',
                size: 16,
                color: dark
            },
            yshift: 10 // move the annotation upwards a little
        };
        annotations.push(annotation);
    }
    var layout = {
        height: 500,
        width: 650,
        yaxis: {
            title: {
                text: "Emission (billion tonnes)",
                font: {
                    family: "Helvetica Neue",
                    size: 16,
                    color: dark
                },
            },
            tickfont: {
                family: "Helvetica Neue",
                size: 14,
                color: dark
            }
        },
        xaxis: {
            tickfont: {
                family: "Helvetica Neue",
                size: 14,
                color: dark
            }
        },
        margin: {
            l: 50, // Adjust left margin to accommodate long labels
            r: 0,
            b: 50,
            t: 50
        },
        hoverlabel: {
            align: "left",
            font: {
                family: 'Helvetica Neue',
                size: 12,
                color: dark
            },
            bgcolor: "white",
            bordercolor: dark,
            borderwidth: 1,
        },
        annotations: annotations

    };


    Plotly.newPlot("emission-reduction-chart", data, layout, config);

});