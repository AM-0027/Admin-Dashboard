import React from "react";
import {  LayoutGroup, motion, AnimatePresence } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";
import { FaTimes } from "react-icons/fa";
import Chart from "react-apexcharts";

const Card = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
    <LayoutGroup>
      <AnimatePresence mode="popLayout">
        {expanded ? (
          <ExpandedCard data={props} setExpanded={() => setExpanded(false)} />
        ) : (
          <CompactCard data={props} setExpanded={() => setExpanded(true)} />
        )}
      </AnimatePresence>
      </LayoutGroup>
    </>
  );
};

// Compact Card
function CompactCard({ data, setExpanded }) {
  const Png = data.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: data.color.background,
        boxShadow: data.color.boxShadow,
      }}
      LayoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar value={data.barValue} text={`${data.barValue}%`} />
        <span>{data.title}</span>
      </div>
      <div className="detail">
        <Png />
        <br />
        <span>${data.value}</span>
        <br />
        <span>Last 24 Hours</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ data, setExpanded }) {
  const chartOptions = {
    chart: {
      type: "area",
      height: "auto",
    },
    dropShadow: {
      enabled: false,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },
    fill: {
      colors: ["#fff"],
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["white"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2025-05-01T00:00:00.000Z",
        "2025-05-02T00:00:00.000Z",
        "2025-05-03T00:00:00.000Z",
        "2025-05-04T00:00:00.000Z",
        "2025-05-05T00:00:00.000Z",
        "2025-05-06T00:00:00.000Z",
        "2025-05-07T00:00:00.000Z",
      ],
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: data.color.background,
        boxShadow: data.color.boxShadow,
      }}
      LayoutId="expandableCard"
    >
      <div style={{alignSelf: 'flex-end', cursor: 'pointer', color: 'white' }}
       >
        <FaTimes onClick={setExpanded} style={{ cursor: "pointer" }} />
      </div>
      <span>{data.title}</span>
      <div className="chartContainer">
        <Chart series={data.series} type="area" options={chartOptions} />
      </div>
      <span>Last 24 Hours</span>
    </motion.div>
  );
}

export default Card
