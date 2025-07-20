import "../components/Chart.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import ChartJS from "chart.js/auto";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ToastContainer, toast } from 'react-toastify';

const Chart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const [charts, setCharts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [selectedChart, setSelectedChart] = useState("");

  useEffect(() => {
    const fetchCharts = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("https://zidio-project-aidj.onrender.com/getcharts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCharts(response.data);
      } catch (error) {
        console.error("Error fetching charts:", error);
      }
    };
    fetchCharts();
  }, []);

  // 🟦 Render Chart When a Chart is Selected
  useEffect(() => {
    if (!selectedChart || !chartRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    const chartType = selectedChart.Charttype.toLowerCase();

    let dataPoints;
    if (chartType === "scatter") {
      dataPoints = selectedChart.Xaxis.map((x, i) => ({
        x: parseFloat(x),
        y: parseFloat(selectedChart.Yaxis[i]),
      }));
    } else {
      dataPoints = selectedChart.Yaxis.map((y) => parseFloat(y));
    }

    let backgroundColors = "rgba(75,192,192,0.6)";
    if (chartType === "pie") {
      backgroundColors = selectedChart.Yaxis.map(
        () => `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`
      );
    }

    const chartData = {
      labels: selectedChart.Xaxis,
      datasets: [
        {
          label: selectedChart.Yname,
          data: dataPoints,
          backgroundColor: chartType == "pie" ? backgroundColors : "#3C3CE8",
          borderColor: "#3C3CE8",
          borderWidth: chartType !== "pie" ? 3 : 0.9,
          showLine: chartType !== "scatter",
          fill: false,
          pointRadius: chartType === "scatter" ? 6 : undefined,
          pointHoverRadius: chartType === "scatter" ? 8 : undefined,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: ["bar", "line", "scatter"].includes(chartType)
        ? {
            x: {
              type: chartType === "scatter" ? "linear" : "category",
              title: {
                display: true,
                text: selectedChart.Xname,
              },
            },
            y: {
              title: {
                display: true,
                text: selectedChart.Yname,
              },
            },
          }
        : {}, // Pie chart doesn’t use scales
      plugins: {
        legend: {
          display: true,
        },
      },
    };

    chartInstanceRef.current = new ChartJS(ctx, {
      type: chartType,
      data: chartData,
      options: chartOptions,
    });
  }, [selectedChart]);

  // 🟦 PNG Download
  const downloadPNG = async () => {
    if (!chartRef.current) return;
    const canvas = chartRef.current;
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = `${selectedChart.ChartName}.png`;
    link.click();
    toast("PNG Download Successfull",{autoClose: 1000});
    
  };

  // 🟦 PDF Download
  const downloadPDF = async () => {
    if (!chartRef.current) return;
    const canvas = await html2canvas(chartRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${selectedChart.ChartName}.pdf`);
    toast("PDF Download Successfull",{autoClose: 1000});
  };

  const handleDelete = async (chartId) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`https://zidio-project-aidj.onrender.com/deletechart/${chartId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove it from frontend list
      setCharts((prev) => prev.filter((chart) => chart._id !== chartId));

      // Clear chart display if it was deleted
      if (selectedChart?._id === chartId) {
        setSelected(null);
        setSelectedChart("");
        chartInstanceRef.current?.destroy();
      }
      toast("Chart Delete Successfull",{autoClose: 1000});
    } catch (error) {
      console.error("Error deleting chart:", error);
    }
  };

  return (
    <section className="dashboard-main">
      <div className="charts-list">
        <h2>Your Charts</h2>
        <div className="charts-desc">Select a chart to view and download</div>
        {charts.map((chart) => (
          <div
            key={chart._id}
            className={selected === chart._id ? "chart-selected" : "chart-card"}
            onClick={() => {
              setSelected(chart._id);
              setSelectedChart(chart);
            }}
          >
            <div className="chart-type">{chart.Charttype}</div>
            <button
              className="chart-trash-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(chart._id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="chart-trash-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="chart-filename">{chart.ChartName}</div>
            <div className="chart-details">
              {chart.Xname} vs {chart.Yname}
            </div>
            <div className="chart-date">{chart.time}</div>
          </div>
        ))}
      </div>

     { selectedChart&& <div className="chart-view">
        <div className="chart-view-header">
          <div>
            <div className="chart-view-title">{selectedChart.ChartName}</div>
            <div className="chart-view-desc">
              {selectedChart.Xname} vs {selectedChart.Yname}
            </div>
          </div>
          <div className="chart-view-buttons">
            <button className="download-btn" onClick={downloadPNG}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="download-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
              PNG
            </button>
            <button className="download-btn" onClick={downloadPDF}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="download-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
              PDF
            </button>
          </div>
        </div>
        <div className="chart-area">
          <canvas className="chart-canvas" ref={chartRef}></canvas>
        </div>
      </div>}
      <ToastContainer position="bottom-right" />
    </section>
  );
};

export default Chart;