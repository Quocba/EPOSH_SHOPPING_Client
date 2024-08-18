import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useState } from "react";
import { themeColors } from "../../../../../../themes/schemes/PureLightTheme";
import { convertMonthCharactToNumber, convertMonthNumberToCharac } from "../../../../../../utils/sellerHelper";
import { getDataChart } from "../../../../Seller.Api";
import { useDispatch } from "react-redux";

const MonthDropdown: React.FC<{}> = () => {
  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: theme.palette.mode === "light" ? "white" : theme.palette.grey[600],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "8px",
      },
      "& .MuiMenuItem-root": {
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "1px",
          backgroundColor: theme.palette.grey[300],
        },
        "&:nth-child(4n)::after": {
          display: "none",
        },
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [selectedMonth, setSelectedMonth] = useState(convertMonthNumberToCharac(localStorage.getItem("monthChart")) || 'Jul');

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleMonthSelect = async (month: any) => {
    setSelectedMonth(month);
    localStorage.setItem('monthChart', convertMonthCharactToNumber(month).toString());
    await getDataChart(convertMonthCharactToNumber(month), dispatch);
    handleClose();
  }

  useEffect(() => {

  }, [anchorEl, selectedMonth])

  return (
    <div className="month">
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon sx={{ '@media screen and (max-width: 1194px)': { width: '18px', height: '18px' } }} />}
        sx={{
          bgcolor: themeColors.sellerSecondary,
          '@media screen and (max-width: 1194px)': {
            width: '4rem',
            height: '2rem',
            fontSize: '12px'
          },
          '&:hover': {
            bgcolor: themeColors.sellerPrimary,
            opacity: 0.8
          }
        }}
      >
        {selectedMonth}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          months.map((month) => (
            <MenuItem key={month} onClick={() => handleMonthSelect(month)} disableRipple>
              {month}
            </MenuItem>
          ))
        }
      </StyledMenu>
    </div>
  );
};

export default MonthDropdown;