import { Link } from "react-router-dom";
import { Card } from "../../../../../shared/components/card/Card";
import { Grid } from "../../../../../shared/components/grid/Grid";
import "./style/Manage.css";
import { manageLinks } from "./links";

export const Manage = () => {
    return (
        <Grid className="manage-grid">
            {manageLinks.map((link) => (
                <Link
                    key={link.path}
                    to={link.path}
                >
                    <Card title={link.title}>
                        <img
                            className="manage-image"
                            src={link.image}
                            alt={link.title}
                        />
                    </Card>
                </Link>
            ))}
        </Grid>
    );
};
