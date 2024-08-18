import React from "react";
import Button from '@mui/material/Button';
import { themeColors } from "../../../../themes/schemes/PureLightTheme";

function ColorButton({
    children,
    onPress,
}: {
    children: any;
    onPress?: any;
}) {
    return (
        <Button variant="contained" onClick={onPress} sx={{
            width: '40px',
            height: '26px',
            borderRadius: '4px',
            fontWeight: '400',
            fontSize: '12px',
            margin: '0 20px 10px 0',
            backgroundColor: children === 'Black' ? '#000' : children === 'Red' ? themeColors.red : children === 'White' ? themeColors.white : themeColors.gray,
            color: children === 'White' || children === 'Gray' ? '#000' : '#fff',
            border: children === 'White' ? '1px solid #ababab' : 'none'
        }}>{children}</Button>
    );
}

export default ColorButton;