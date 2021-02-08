'use strict';
import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default class XychartAnimated extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const chart_id = this.props.chart_id;
        let chart = am4core.create(chart_id, am4charts.XYChart);
        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    componentDidUpdate() {
        const chart_id = this.props.chart_id;
        let chart = am4core.create(chart_id, am4charts.XYChart);

        chart.paddingRight = 20;
        console.log(this.props.data);
        chart.data = this.props.data.list;

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

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;


        let scrollbarX = new am4charts.XYChartScrollbar();


        this.props.data.series.find((key) => {
            let series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.dateX = "date";
            series.name = key;
            series.dataFields.valueY = "value-" + key;

            series.tooltipText = "[#333]{name} : {valueY.value}[/]";
            series.tooltip.background.fill = am4core.color("#FFF");
            series.tooltip.getStrokeFromObject = true;
            series.tooltip.background.strokeWidth = 3;
            series.tooltip.getFillFromObject = false;

            series.fillOpacity = 0.6;
            series.strokeWidth = 2;
            series.stacked = true;
            scrollbarX.series.push(series);


            // Make bullets grow on hover
            //const bullet = series.bullets.push(new am4charts.CircleBullet());
            //bullet.circle.strokeWidth = 2;
            //bullet.circle.radius = 4;
            //bullet.circle.fill = am4core.color("#fff");
            //var bullethover = bullet.states.create("hover");
            //bullethover.properties.scale = 1.3;

            //let bullet = series.bullets.push(new am4charts.CircleBullet());
            //series.heatRules.push({
            //    target: bullet.circle,
            //    min: 1,
            //    max: 3,
            //    property: "radius"
            //});

            //let bullet = series.bullets.push(new am4charts.CircleBullet());
            //series.heatRules.push({
            //    target: bullet.circle,
            //    min: 1,
            //    max: 3,
            //    property: "radius"
            //});

        });


        chart.scrollbarX = scrollbarX;

        chart.cursor = new am4charts.XYCursor();
        chart.legend = new am4charts.Legend();

        this.chart = chart;
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
