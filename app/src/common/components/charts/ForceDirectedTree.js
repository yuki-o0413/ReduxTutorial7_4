'use strict';
import React from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default class XychartAnimated extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    componentDidUpdate() {

        let chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
        let networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

        chart.data = this.props.data;

        networkSeries.dataFields.value = "value";
        networkSeries.dataFields.name = "name";
        networkSeries.dataFields.color = "color";
        networkSeries.dataFields.children = "children";
        networkSeries.nodes.template.tooltipText = "{name}:{value}";
        networkSeries.nodes.template.fillOpacity = 1;
        networkSeries.dataFields.id = "name";
        networkSeries.dataFields.linkWith = "linkWith";


        networkSeries.nodes.template.label.text = "{name}"
        networkSeries.fontSize = 10;

        let selectedNode;

        let label = chart.createChild(am4core.Label);
        label.text = this.props.label;
        label.x = 50;
        label.y = 50;
        label.isMeasured = false;


        networkSeries.nodes.template.events.on("up", function (event) {
            let node = event.target;
            if (!selectedNode) {
                node.outerCircle.disabled = false;
                node.outerCircle.strokeDasharray = "3,3";
                selectedNode = node;
            }
            else if (selectedNode == node) {
                node.outerCircle.disabled = true;
                node.outerCircle.strokeDasharray = "";
                selectedNode = undefined;
            }
            else {
                let node = event.target;

                let link = node.linksWith.getKey(selectedNode.uid);

                if (link) {
                    node.unlinkWith(selectedNode);
                }
                else {
                    node.linkWith(selectedNode, 0.2);
                }
            }
        })

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
