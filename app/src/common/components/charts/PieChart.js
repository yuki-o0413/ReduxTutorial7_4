'use strict';
import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default class PieChart extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const chart_id = this.props.chart_id;
        let chart = am4core.create(chart_id, am4charts.PieChart);
        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    componentDidUpdate() {
        const chart_id = this.props.chart_id;
        let chart = am4core.create(chart_id, am4charts.PieChart);

        console.log(this.props.data);
        chart.data = this.props.data;

        chart.colors.list = [
            am4core.color("#adcde1"),
            am4core.color("#3977af"),
            am4core.color("#bbdd93"),
            am4core.color("#559d3f"),
            am4core.color("#ee9e9b"),
            am4core.color("#d1352b"),
            am4core.color("#f4c17b"),
            am4core.color("#f48532"),
            am4core.color("#c6b3d3"),
            am4core.color("#634295"),
            am4core.color("#fffea6"),
            am4core.color("#a65d34")
        ];
        let title = chart.titles.create();
        title.text = this.props.title;
        const id = this.props.id;



        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "category";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.colors._list = [
            am4core.color("#fffea6"),
            am4core.color("#adcde1"),
            am4core.color("#bbdd93"),
            am4core.color("#559d3f"),
            am4core.color("#ee9e9b"),
            am4core.color("#d1352b"),
            am4core.color("#f4c17b"),
            am4core.color("#f48532"),
            am4core.color("#c6b3d3"),
            am4core.color("#634295"),
            am4core.color("#3977af"),
            am4core.color("#a65d34")
        ];

        pieSeries.slices.template.tooltipText = "{category}: {value.percent.formatNumber('#.0')}%";

        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        chart.legend = new am4charts.Legend();
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <div id={this.props.chart_id} style={{ width: "100%", height: "500px" }}></div>

            </div>
        );
    }
}