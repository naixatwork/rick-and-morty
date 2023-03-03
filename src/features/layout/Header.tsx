import Drawer from "#/features/layout/Drawer/Drawer/Drawer";
import useDrawer from "#/features/layout/Drawer/useDrawer";

import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar } from "@mui/material";

export default function Header() {
    const { isOpen, openDrawer, closeDrawer } = useDrawer();

    return (
        <AppBar position="fixed">
            <Toolbar className="flex! container mx-auto flex items-center gap-5 py-5">
                <Drawer isOpen={isOpen} closeDrawer={closeDrawer} />
                <IconButton size="large" aria-label="menu" onClick={openDrawer}>
                    <MenuIcon />
                </IconButton>
                <p className="text-xl font-bold">Hello, Guest</p>
            </Toolbar>
        </AppBar>
    );
}
