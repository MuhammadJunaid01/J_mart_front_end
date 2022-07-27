import { Grid } from "@mui/material";
import BestSaleChart from "./dashBoard/chart/BestSaleChart";
import DashBordComposedChart from "./dashBoard/chart/DashBordComposedChart";

const DashBoardHome = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <div style={{ marginBottom: "15px", color: "#495057" }}>
        <h4>Dashboard</h4>
        <BestSaleChart />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={8} md={6}></Grid>
      </Grid>
    </div>
  );
};

export default DashBoardHome;
