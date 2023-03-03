import Image from "next/image";

import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import {
    Avatar,
    Badge,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Drawer as MuiDrawer, Divider,
} from "@mui/material";
import Link from "next/link";

type DrawerWrapperProps = {
    isOpen: boolean;
    closeDrawer: () => void;
};

export default function Drawer({ isOpen, closeDrawer }: DrawerWrapperProps) {
    return (
        <MuiDrawer open={isOpen} onClose={closeDrawer}>
            <div className="w-72" data-testid="drawerContainer">
                <div className="flex gap-2 p-5">
                    <Badge
                        overlap="circular"
                        color="success"
                        anchorOrigin={{ vertical: "top", horizontal: "left" }}
                        variant="dot"
                    >
                        <Image
                            alt="avatar"
                            className="aspect-1 w-16 rounded-full shadow"
                            src="https://api.dicebear.com/5.x/big-smile/svg"
                            width={64}
                            height={64}
                        />
                    </Badge>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-xl">Guest</h1>
                        <h1 className="text-sm text-green-400">wablabbe dabdab</h1>
                    </div>
                </div>
                <Divider></Divider>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <PeopleOutlineRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Link href="/characters" className="capitalize">characters</Link>
                        } />
                    </ListItemButton>
                </List>
            </div>
        </MuiDrawer>
    );
}
