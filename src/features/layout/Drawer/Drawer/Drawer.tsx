import {Drawer as MuiDrawer} from "@mui/material"

type DrawerWrapperProps = {
    isOpen: boolean;
    closeDrawer: () => void,
};

export default function Drawer({isOpen, closeDrawer}: DrawerWrapperProps) {
    return (
        <MuiDrawer open={isOpen} onClose={closeDrawer}>
            <div data-testid="drawerContainer">
                drawer content
            </div>
        </MuiDrawer>
    );
}