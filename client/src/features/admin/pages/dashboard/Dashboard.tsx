import { Manage } from "./components/Manage";
import "./style/Dashboard.css";

export const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Admin Dashboard</h1>
            <Manage />
        </div>
    );
};
