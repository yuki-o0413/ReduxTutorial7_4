'use strict';
import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default class PieChart extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const chart_id = this.props.chart_id;
        let chart = am4core.create(chart_id, am4plugins_wordCloud.WordCloud);
        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    componentDidUpdate() {
        const chart_id = this.props.chart_id;
        let chart = am4core.create(chart_id, am4plugins_wordCloud.WordCloud);

        console.log(this.props.data);
        const id = this.props.id;

        let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
        series.randomness = 0.1;
        series.rotationThreshold = 0.5;

        series.data = this.props.data;

        series.dataFields.word = "tag";
        series.dataFields.value = "count";

        series.heatRules.push({
            "target": series.labels.template,
            "property": "fill",
            "min": am4core.color("#0000CC"),
            "max": am4core.color("#CC00CC"),
            "dataField": "value"
        });

        series.labels.template.tooltipText = "{word}: {value}";

        let hoverState = series.labels.template.states.create("hover");
        hoverState.properties.fill = am4core.color("#FF0000");

        let subtitle = chart.titles.create();

        let title = chart.titles.create();
        title.text = this.props.title;
        title.fontSize = 20;
        title.fontWeight = "800";
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
