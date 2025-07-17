import rowWiseData from "./xy";

const columnWiseData = {};

rowWiseData.forEach(row => {
  Object.entries(row).forEach(([key, value]) => {
    if (!columnWiseData[key]) {
      columnWiseData[key] = [];
    }
    columnWiseData[key].push(value);
  });
});


export default columnWiseData
