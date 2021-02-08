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
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    componentDidUpdate() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);

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

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = this.props.data.title[0];
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;

        // 縦軸の２種類目を追加（違うデータ量のグラフを設置）
        let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis2.title.text = this.props.data.title[1];
        valueAxis2.tooltip.disabled = true;
        valueAxis2.renderer.minWidth = 35;
        // ラベルの位置を右側に（反転させて表示）
        valueAxis.renderer.opposite = true;
        const title1 = this.props.data.title[0];
        const title2 = this.props.data.title[1];

        let scrollbarX = new am4charts.XYChartScrollbar();


        this.props.data.series.find((key) => {

            let columnSeries = chart.series.push(new am4charts.ColumnSeries());
            columnSeries.dataFields.dateX = "date";
            columnSeries.name = key;
            columnSeries.dataFields.valueY = "value2-" + key;

            columnSeries.tooltipText = "[#333]{name} : " + this.props.data.title[0] + " : {valueY.value}[/]";
            columnSeries.tooltip.background.fill = am4core.color("#FFF");
            columnSeries.tooltip.getStrokeFromObject = true;
            columnSeries.tooltip.background.strokeWidth = 3;
            columnSeries.tooltip.getFillFromObject = false;

            columnSeries.fillOpacity = 0.6;
            columnSeries.strokeWidth = 2;
            columnSeries.stacked = true;
            scrollbarX.series.push(columnSeries);

            let lineSeries = chart.series.push(new am4charts.LineSeries());
            lineSeries.dataFields.dateX = "date";
            lineSeries.name = key;
            lineSeries.dataFields.valueY = "value-" + key;

            lineSeries.tooltipText = "[#333]{name} : " + this.props.data.title[1] + " : {valueY.value}[/]";
            lineSeries.tooltip.background.fill = am4core.color("#FFF");
            lineSeries.tooltip.getStrokeFromObject = true;
            lineSeries.tooltip.background.strokeWidth = 3;
            lineSeries.tooltip.getFillFromObject = false;

            lineSeries.strokeWidth = 2;
            lineSeries.stacked = true;
            lineSeries.yAxis = valueAxis2;
            scrollbarX.series.push(lineSeries);




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
                <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>

            </div>
        );
    }
}
