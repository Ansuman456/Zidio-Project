import mongoose from "mongoose";
import moment from "moment";

const ChartSchema = new mongoose.Schema({
  Xaxis: {
    type: [mongoose.Schema.Types.Mixed],
    required: true,
  },
  Yaxis: {
    type: [Number],
    required: true,
  },
  Charttype: {
    type: String,
    enum: ["bar", "line", "pie", "scatter", "threescatter"],
    required: true,
  },
  time: {
    type: String,
    default: () => moment().format("DD-MM-YYYY hh:mm A"),
  },
  fileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "File",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const Chart = mongoose.model("Chart", ChartSchema);

export default Chart;
