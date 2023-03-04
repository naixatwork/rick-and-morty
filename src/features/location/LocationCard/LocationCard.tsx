import { ReactNode } from "react";

import { Location } from "#/features/location/location.type";

import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
} from "@mui/material";

type LocationCardProps = {
    location: Location;
    actionContent?: ReactNode;
    onDetailClick?: (location: Location) => void;
};

export default function LocationCard({
    location,
    actionContent = <></>,
    onDetailClick = () => {},
}: LocationCardProps) {
    const clickAction = () => {
        onDetailClick(location);
    };
    return (
        <Card className="w-full lg:w-[400px]" onClick={clickAction}>
            <CardHeader
                title={location.name}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertRoundedIcon />
                    </IconButton>
                }
                subheader={
                    <div className="flex gap-1 text-inherit">
                        {location.dimension}
                    </div>
                }
            />
            <CardContent className="flex flex-col gap-2">
                <div className="flex justify-between gap-2">
                    <p className="capitalize">type</p>
                    <span className="block h-[1px] flex-1 self-center bg-gray-700"></span>
                    <p>{location.type}</p>
                </div>
                <div className="flex justify-between gap-2">
                    <p className="capitalize">residents</p>
                    <span className="block h-[1px] flex-1 self-center bg-gray-700"></span>
                    <p>{location.residents.length}</p>
                </div>
                <div className="flex justify-between gap-2">
                    <p className="capitalize">dimension</p>
                    <span className="block h-[1px] flex-1 self-center bg-gray-700"></span>
                    <p>{location.dimension}</p>
                </div>
            </CardContent>
            <CardActions disableSpacing>{actionContent}</CardActions>
        </Card>
    );
}
