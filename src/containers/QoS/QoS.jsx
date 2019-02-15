import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader"
import "./styles.css";
import _ from "lodash";

import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  Resizable,
  LineChart,
  Baseline
} from "react-timeseries-charts";

import { TimeSeries, Index } from "pondjs";


const defaultProps = {
  qosTab: {},
  getQOSData: {},
  data: []
};

const propTypes = {
  qosTab: PropTypes.object,
  getQOSData: PropTypes.func,
  data: PropTypes.array
};


let data = {
  ui: {
    min_period: 0,
    period: "weekly",
    max_period: 4
  },
  widget: [
    {
      period: "weekly",
      type: "bid",
      data: [
        [1416787200000, 0.8034],
        [1416182400000, 0.800128571428571],
        [1415577600000, 0.802128571428572],
        [1414972800000, 0.801071428571429],
        [1414368000000, 0.790814285714286],
        [1413763200000, 0.786685714285714],
        [1413158400000, 0.786085714285714],
        [1412553600000, 0.791914285714286],
        [1411948800000, 0.791828571428571],
        [1411344000000, 0.781842857142857],
        [1410739200000, 0.774342857142857],
        [1410134400000, 0.773142857142857],
        [1409529600000, 0.764971428571428],
        [1408924800000, 0.758242857142857],
        [1408320000000, 0.751028571428571],
        [1407715200000, 0.747114285714286],
        [1407110400000, 0.7463],
        [1406505600000, 0.745271428571429],
        [1405900800000, 0.741785714285714],
        [1405296000000, 0.737228571428571],
        [1404691200000, 0.734828571428571],
        [1404086400000, 0.732957142857143],
        [1403481600000, 0.734371428571428],
        [1402876800000, 0.736614285714286],
        [1402272000000, 0.736757142857143],
        [1401667200000, 0.7339],
        [1401062400000, 0.7338],
        [1400457600000, 0.731114285714286],
        [1399852800000, 0.728585714285714],
        [1399248000000, 0.721242857142857],
        [1398643200000, 0.721857142857143],
        [1398038400000, 0.723557142857143],
        [1397433600000, 0.722928571428571],
        [1396828800000, 0.724328571428572],
        [1396224000000, 0.7272],
        [1395619200000, 0.725528571428572],
        [1395014400000, 0.721314285714286],
        [1394409600000, 0.720057142857143],
        [1393804800000, 0.724828571428571],
        [1393200000000, 0.727714285714286],
        [1392595200000, 0.728614285714286],
        [1391990400000, 0.732457142857143],
        [1391385600000, 0.738371428571429],
        [1390780800000, 0.734371428571428],
        [1390176000000, 0.735542857142857],
        [1389571200000, 0.733871428571429],
        [1388966400000, 0.734442857142857],
        [1388361600000, 0.7288],
        [1387756800000, 0.729714285714286],
        [1387152000000, 0.728914285714286],
        [1386547200000, 0.727542857142857],
        [1385942400000, 0.734485714285714],
        [1385337600000, 0.736814285714286],
        [1384732800000, 0.740428571428571],
        [1384128000000, 0.744442857142857],
        [1383523200000, 0.742828571428571],
        [1382918400000, 0.730585714285714],
        [1382313600000, 0.7273],
        [1381708800000, 0.735742857142857],
        [1381104000000, 0.737914285714286],
        [1380499200000, 0.737728571428572],
        [1379894400000, 0.740185714285714],
        [1379289600000, 0.744942857142857],
        [1378684800000, 0.7542],
        [1378080000000, 0.758542857142857],
        [1377475200000, 0.7508],
        [1376870400000, 0.748357142857143],
        [1376265600000, 0.751385714285714],
        [1375660800000, 0.750957142857143],
        [1375056000000, 0.7538],
        [1374451200000, 0.7567],
        [1373846400000, 0.763],
        [1373241600000, 0.773128571428571],
        [1372636800000, 0.771428571428571],
        [1372032000000, 0.765257142857143],
        [1371427200000, 0.752671428571429],
        [1370822400000, 0.752242857142857],
        [1370217600000, 0.7627],
        [1369612800000, 0.772014285714286],
        [1369008000000, 0.775657142857143],
        [1368403200000, 0.774085714285714],
        [1367798400000, 0.764471428571428],
        [1367193600000, 0.762914285714286],
        [1366588800000, 0.767314285714286],
        [1365984000000, 0.764157142857143],
        [1365379200000, 0.765571428571429],
        [1364774400000, 0.776871428571429],
        [1364169600000, 0.777128571428572],
        [1363564800000, 0.771771428571429],
        [1362960000000, 0.768142857142857],
        [1362355200000, 0.767485714285714],
        [1361750400000, 0.763028571428571],
        [1361145600000, 0.752128571428571],
        [1360540800000, 0.746757142857143],
        [1359936000000, 0.740214285714286],
        [1359331200000, 0.738842857142857],
        [1358726400000, 0.748757142857143],
        [1358121600000, 0.749771428571429],
        [1357516800000, 0.760428571428571],
        [1356912000000, 0.7601],
        [1356307200000, 0.757085714285714],
        [1355702400000, 0.757671428571429],
        [1355097600000, 0.767771428571429],
        [1354492800000, 0.768414285714286],
        [1353888000000, 0.771057142857143],
        [1353283200000, 0.778957142857143],
        [1352678400000, 0.785557142857143],
        [1352073600000, 0.782542857142857],
        [1351468800000, 0.773914285714286],
        [1350864000000, 0.769971428571429],
        [1350259200000, 0.767642857142857],
        [1349654400000, 0.772328571428571],
        [1349049600000, 0.772914285714286],
        [1348444800000, 0.774571428571429],
        [1347840000000, 0.766442857142857],
        [1347235200000, 0.7744],
        [1346630400000, 0.791485714285714],
        [1346025600000, 0.797614285714286],
        [1345420800000, 0.803171428571429],
        [1344816000000, 0.811642857142857],
        [1344211200000, 0.809471428571429],
        [1343606400000, 0.813528571428571],
        [1343001600000, 0.8206],
        [1342396800000, 0.8167],
        [1341792000000, 0.815814285714286],
        [1341187200000, 0.799471428571428],
        [1340582400000, 0.7975],
        [1339977600000, 0.791971428571429],
        [1339372800000, 0.795385714285714],
        [1338768000000, 0.800542857142857],
        [1338163200000, 0.802214285714286],
        [1337558400000, 0.790128571428571],
        [1336953600000, 0.781871428571429],
        [1336348800000, 0.770071428571429],
        [1335744000000, 0.758442857142857],
        [1335139200000, 0.757071428571429],
        [1334534400000, 0.761742857142857],
        [1333929600000, 0.762842857142857],
        [1333324800000, 0.757071428571429],
        [1332720000000, 0.750914285714286],
        [1332115200000, 0.756428571428572],
        [1331510400000, 0.762771428571429],
        [1330905600000, 0.758785714285714],
        [1330300800000, 0.7483],
        [1329696000000, 0.752628571428571],
        [1329091200000, 0.7604],
        [1328486400000, 0.757771428571429],
        [1327881600000, 0.760028571428571],
        [1327276800000, 0.766],
        [1326672000000, 0.781028571428571],
        [1326067200000, 0.784971428571429],
        [1325462400000, 0.775442857142857],
        [1324857600000, 0.768757142857143],
        [1324252800000, 0.766142857142857],
        [1323648000000, 0.761457142857143],
        [1323043200000, 0.746671428571429],
        [1322438400000, 0.7479],
        [1321833600000, 0.745871428571429],
        [1321228800000, 0.736428571428571],
        [1320624000000, 0.728914285714286],
        [1320019200000, 0.7217],
        [1319414400000, 0.714571428571429],
        [1318809600000, 0.724028571428571],
        [1318204800000, 0.731371428571429],
        [1317600000000, 0.749357142857143],
        [1316995200000, 0.7397],
        [1316390400000, 0.734314285714286],
        [1315785600000, 0.728928571428571],
        [1315180800000, 0.714685714285714],
        [1314576000000, 0.695357142857143],
        [1313971200000, 0.693357142857143],
        [1313366400000, 0.696114285714286],
        [1312761600000, 0.701242857142857],
        [1312156800000, 0.700428571428572],
        [1311552000000, 0.694942857142857],
        [1310947200000, 0.702842857142857],
        [1310342400000, 0.707514285714286],
        [1309737600000, 0.6943],
        [1309132800000, 0.695785714285714],
        [1308528000000, 0.699985714285714],
        [1307923200000, 0.698757142857143],
        [1307318400000, 0.686814285714286],
        [1306713600000, 0.693314285714286],
        [1306108800000, 0.706685714285714],
        [1305504000000, 0.704357142857143],
        [1304899200000, 0.700428571428571],
        [1304294400000, 0.680485714285714],
        [1303689600000, 0.680328571428571],
        [1303084800000, 0.691885714285714],
        [1302480000000, 0.691628571428571],
        [1301875200000, 0.699114285714286],
        [1301270400000, 0.707614285714286],
        [1300665600000, 0.706271428571429],
        [1300060800000, 0.714157142857143],
        [1299456000000, 0.718671428571429],
        [1298851200000, 0.721628571428571],
        [1298246400000, 0.728757142857143],
        [1297641600000, 0.737014285714286],
        [1297036800000, 0.735128571428572],
        [1296432000000, 0.730914285714286],
        [1295827200000, 0.732414285714286],
        [1295222400000, 0.743742857142857],
        [1294617600000, 0.7632],
        [1294012800000, 0.758542857142857],
        [1293408000000, 0.7561],
        [1292803200000, 0.7612],
        [1292198400000, 0.753528571428571],
        [1291593600000, 0.752328571428571],
        [1290988800000, 0.757557142857143],
        [1290384000000, 0.743642857142857],
        [1289779200000, 0.733957142857143],
        [1289174400000, 0.723614285714286],
        [1288569600000, 0.7124],
        [1287964800000, 0.718671428571429],
        [1287360000000, 0.718014285714286],
        [1286755200000, 0.715842857142857],
        [1286150400000, 0.721857142857143],
        [1285545600000, 0.735142857142857],
        [1284940800000, 0.753571428571428],
        [1284336000000, 0.772385714285714],
        [1283731200000, 0.783342857142857],
        [1283126400000, 0.782114285714286],
        [1282521600000, 0.787257142857143],
        [1281916800000, 0.781257142857143],
        [1281312000000, 0.768614285714286],
        [1280707200000, 0.758628571428571],
        [1280102400000, 0.769028571428571],
        [1279497600000, 0.775271428571429],
        [1278892800000, 0.784],
        [1278288000000, 0.792928571428571],
        [1277683200000, 0.808014285714286],
        [1277078400000, 0.810457142857143],
        [1276473600000, 0.813757142857143],
        [1275868800000, 0.831885714285714],
        [1275264000000, 0.8204],
        [1274659200000, 0.809771428571429],
        [1274054400000, 0.8061],
        [1273449600000, 0.791257142857143],
        [1272844800000, 0.771728571428572],
        [1272240000000, 0.752314285714286],
        [1271635200000, 0.745671428571429],
        [1271030400000, 0.7373],
        [1270425600000, 0.744585714285714],
        [1269820800000, 0.741471428571429],
        [1269216000000, 0.744342857142857],
        [1268611200000, 0.731342857142857],
        [1268006400000, 0.731685714285714],
        [1267401600000, 0.734685714285714],
        [1266796800000, 0.736128571428572],
        [1266192000000, 0.7341],
        [1265587200000, 0.730442857142857],
        [1264982400000, 0.722657142857143],
        [1264377600000, 0.712328571428571],
        [1263772800000, 0.702485714285714],
        [1263168000000, 0.6914],
        [1262563200000, 0.696014285714286],
        [1261958400000, 0.695971428571428],
        [1261353600000, 0.697342857142857],
        [1260748800000, 0.689671428571429],
        [1260144000000, 0.677771428571429]
      ],
      display: "absolute",
      quoteCurrency: "EUR",
      baseCurrency: "USD"
    },
  ]
};



const chartContainer = {
  padding: '50px',
};

const style = {
  value: {
    stroke: "#a02c2c",
    opacity: 0.2
  }
};

const baselineStyle = {
  line: {
    stroke: "steelblue",
    strokeWidth: 1,
    opacity: 0.4,
    strokeDasharray: "none"
  },
  label: {
    fill: "steelblue"
  }
};

const baselineStyleLite = {
  line: {
    stroke: "steelblue",
    strokeWidth: 1,
    opacity: 0.5
  },
  label: {
    fill: "steelblue"
  }
};

const baselineStyleExtraLite = {
  line: {
    stroke: "steelblue",
    strokeWidth: 1,
    opacity: 0.2,
    strokeDasharray: "1,1"
  },
  label: {
    fill: "steelblue"
  }
};

class QOS extends React.Component {
  state = {
    tracker: null,
  };

  handleTrackerChanged = tracker => {
    this.setState({ tracker });
  };

  handleTimeRangeChange = timerange => {
    this.setState({ timerange });
  };

  static defaultProps = defaultProps;

  static propTypes = propTypes;

  componentDidMount() {
    this.props.getQOSData({});
  }

  render() {
    const { _reports, _labels, reportData, _stats } = this.props.data;

    console.log(this.props.data);

    let points = [];
    let points2 = [];
    let points3 = [];
    let points4 = [];
    let points5 = [];

    if (reportData[0] && reportData[0].values) {
      reportData[0].values.forEach((data)=> {
        points.push([data.x, data.y]);
      });
    }

    if (reportData[1] && reportData[1].values) {
      reportData[1].values.forEach((data)=> {
        points2.push([data.x, data.y]);
      });
    }

    if (reportData[2] && reportData[2].values) {
      reportData[2].values.forEach((data)=> {
        points3.push([data.x, data.y]);
      });
    }

    if (reportData[3] && reportData[3].values) {
      reportData[3].values.forEach((data)=> {
        points4.push([data.x, data.y]);
      });
    }

    if (reportData[4] && reportData[4].values) {
      reportData[4].values.forEach((data)=> {
        points5.push([data.x, data.y]);
      });
    }

    const series = new TimeSeries({
      name: "Packets Lost",
      columns: ["time", "value"],
      points: points
    });

    const series2 = new TimeSeries({
      name: "octets",
      columns: ["time", "value"],
      points: points2
    });

    const series3 = new TimeSeries({
      name: "highest_seq_no",
      columns: ["time", "value"],
      points: points3
    });

    const series4 = new TimeSeries({
      name: "ia_jitter",
      columns: ["time", "value"],
      points: points4
    });

    const series5 = new TimeSeries({
      name: "ia_jitter",
      columns: ["time", "value"],
      points: points5
    });

    return (
      <div
        style={chartContainer}
        className="chart-container">

        <Resizable>
          <ChartContainer
            title="Package lost"
            titleStyle={{ fill: "#555", fontWeight: 500 }}
            timeRange={series.range()}
            format="%b '%y"
            timeAxisTickCount={5}
          >
            <ChartRow height="150">
              <YAxis
                id="price"
                label="Count"
                min={series.min()}
                max={series.max()}
                width="60"
              />
              <Charts>
                <LineChart axis="price" series={series} style={style} />
                <Baseline
                  axis="price"
                  style={baselineStyleLite}
                  value={series.max()}
                  label="Max"
                  position="right"
                />
                <Baseline
                  axis="price"
                  style={baselineStyleLite}
                  value={series.min()}
                  label="Min"
                  position="right"
                />
                <Baseline
                  axis="price"
                  style={baselineStyleExtraLite}
                  value={series.avg() - series.stdev()}
                />
                <Baseline
                  axis="price"
                  style={baselineStyleExtraLite}
                  value={series.avg() + series.stdev()}
                />
                <Baseline
                  axis="price"
                  style={baselineStyle}
                  value={series.avg()}
                  label="Avg"
                  position="right"
                />
              </Charts>
            </ChartRow>
          </ChartContainer>
        </Resizable>

        <Resizable>
          <ChartContainer
            title="octets"
            titleStyle={{ fill: "#555", fontWeight: 500 }}
            timeRange={series2.range()}
            format="%b '%y"
            timeAxisTickCount={5}
          >
            <ChartRow height="150">
              <YAxis
                id="price"
                label="Count"
                min={series2.min()}
                max={series2.max()}
                width="60"
              />
              <Charts>
                <LineChart axis="price" series={series2} style={style} />
                <Baseline
                  axis="price"
                  style={baselineStyleLite}
                  value={series2.max()}
                  label="Max"
                  position="right"
                />
                <Baseline
                  axis="price"
                  style={baselineStyleLite}
                  value={series2.min()}
                  label="Min"
                  position="right"
                />
                <Baseline
                  axis="price"
                  style={baselineStyleExtraLite}
                  value={series2.avg() - series2.stdev()}
                />
                <Baseline
                  axis="price"
                  style={baselineStyleExtraLite}
                  value={series2.avg() + series2.stdev()}
                />
                <Baseline
                  axis="price"
                  style={baselineStyle}
                  value={series2.avg()}
                  label="Avg"
                  position="right"
                />
              </Charts>
            </ChartRow>
          </ChartContainer>
        </Resizable>

        <Resizable>
          <ChartContainer
            title="highest_seq_no"
            titleStyle={{ fill: "#555", fontWeight: 500 }}
            timeRange={series3.range()}
            format="%b '%y"
            timeAxisTickCount={5}
          >
            <ChartRow height="150">
              <YAxis
                id="price"
                label="Count"
                min={series3.min()}
                max={series3.max()}
                width="60"
              />
              <Charts>
                <LineChart axis="price" series={series3} style={style} />
                <Baseline
                  axis="price"
                  style={baselineStyleLite}
                  value={series3.max()}
                  label="Max"
                  position="right"
                />
                <Baseline
                  axis="price"
                  style={baselineStyleLite}
                  value={series3.min()}
                  label="Min"
                  position="right"
                />
                <Baseline
                  axis="price"
                  style={baselineStyleExtraLite}
                  value={series3.avg() - series3.stdev()}
                />
                <Baseline
                  axis="price"
                  style={baselineStyleExtraLite}
                  value={series3.avg() + series3.stdev()}
                />
                <Baseline
                  axis="price"
                  style={baselineStyle}
                  value={series3.avg()}
                  label="Avg"
                  position="right"
                />
              </Charts>
            </ChartRow>
          </ChartContainer>
        </Resizable>

        <Resizable>
          <ChartContainer
            title="ia_jitter"
            titleStyle={{ fill: "#555", fontWeight: 500 }}
            timeRange={series4.range()}
            format="%b '%y"
            timeAxisTickCount={5}
          >
            <ChartRow height="150">
              <YAxis
                id="price"
                label="Count"
                min={series4.min()}
                max={series4.max()}
                width="60"
              />
              <Charts>
                <LineChart axis="price" series={series4} style={style} />
                <Baseline
                  axis="price"
                  style={baselineStyleLite}
                  value={series4.max()}
                  label="Max"
                  position="right"
                />
                <Baseline
                  axis="price"
                  style={baselineStyleLite}
                  value={series4.min()}
                  label="Min"
                  position="right"
                />
                <Baseline
                  axis="price"
                  style={baselineStyleExtraLite}
                  value={series4.avg() - series4.stdev()}
                />
                <Baseline
                  axis="price"
                  style={baselineStyleExtraLite}
                  value={series4.avg() + series4.stdev()}
                />
                <Baseline
                  axis="price"
                  style={baselineStyle}
                  value={series4.avg()}
                  label="Avg"
                  position="right"
                />
              </Charts>
            </ChartRow>
          </ChartContainer>
        </Resizable>

        <Resizable>
          <ChartContainer
            title="ia_jitter"
            titleStyle={{ fill: "#555", fontWeight: 500 }}
            timeRange={series5.range()}
            format="%b '%y"
            timeAxisTickCount={5}
          >
            <ChartRow height="150">
              <YAxis
                id="price"
                label="Count"
                min={series5.min()}
                max={series5.max()}
                width="60"
              />
              <Charts>
                <LineChart axis="price" series={series5} style={style} />
                <Baseline
                  axis="price"
                  style={baselineStyleLite}
                  value={series5.max()}
                  label="Max"
                  position="right"
                />
                <Baseline
                  axis="price"
                  style={baselineStyleLite}
                  value={series5.min()}
                  label="Min"
                  position="right"
                />
                <Baseline
                  axis="price"
                  style={baselineStyleExtraLite}
                  value={series5.avg() - series5.stdev()}
                />
                <Baseline
                  axis="price"
                  style={baselineStyleExtraLite}
                  value={series5.avg() + series5.stdev()}
                />
                <Baseline
                  axis="price"
                  style={baselineStyle}
                  value={series5.avg()}
                  label="Avg"
                  position="right"
                />
              </Charts>
            </ChartRow>
          </ChartContainer>
        </Resizable>
      </div>
    );
  }
}


export default hot(module)(QOS);
