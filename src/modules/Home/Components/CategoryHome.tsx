/* eslint-disable react-hooks/exhaustive-deps */
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes";
import { themeColors } from "../../../themes/schemes/PureLightTheme";

const CategoryHome = ({ listCategory, filterCategory }: { listCategory: any, filterCategory: any }) => {
  const navigate = useNavigate();
  const gotoSearch = () => {
    localStorage.setItem("input_search", " ");
        navigate(routes.home.SearchProductPage);
  };
  return (
    <Box
      sx={{
        width: "26%",
        padding: "10px 0 10px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 2,
        }}
      >
        My markets
      </Typography>
      {listCategory?.map((category: any, index: any) => {
        if (index > 7) {
          return <></>
        }

        return (
          <Box
            key={index}
            onClick={() => filterCategory(category?.name)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "6px 20px 6px 10px",
              cursor: "pointer",
              borderRadius: "8px",
              ":hover": {
                backgroundColor: themeColors.lightGray
              }
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "90%"
              }}
            >
              <Card
                sx={{
                  height: 28,
                  width: 28,
                  borderRadius: "50%",
                  padding: "3px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={category?.image}
                  alt="banner"
                  height="100%"
                  width="100%"
                />
              </Card>
              <Typography
                variant="body2"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  margin: "0 0 0 15px",
                  width: "80%"
                }}
              >
                {category?.name}
              </Typography>
            </Box>
            <ArrowForwardIosIcon
              sx={{
                fontSize: "14px",
              }}
            />
          </Box>
        );
      })}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "6px 20px 6px 10px",
          cursor: "pointer",
          borderRadius: "8px",
          ":hover": {
            backgroundColor: themeColors.lightGray
          }
        }}
        onClick={gotoSearch}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          
        >
          <Card
            sx={{
              height: 28,
              width: 28,
              borderRadius: "50%",
              padding: "3px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX///8AAACysrL7+/s6OjrCwsLl5eUwMDCurq7p6ekpKSni4uK3t7ceHh4bGxu/v79pMx5iAAAA2klEQVR4nO3cyw2DQBBEQRabP5j8s7VT8GHUaFWVwTtOS7vDAAAAAAAAAAAAAAAAAADAv451TDtrC9cWd9UWjum+1haFChXGKVSoMN2nUKFChQoVPqDwARfwp7Zwvqe42kIAAADo0SuvNnDb32n7Vlo4p0enn1mhQoVxChUqzFOoUGGeQoUK82oL+7/x+99pAAAAoEfpZxTTdNeOMsMnPTq1ttYWLum+1kaFChXGKVSoMN2nUKFChQoVPqDwSveVX8Bn+lPLcT1qCwEAAAAAAAAAAAAAAAAAuvQFR6QsJGC+rS0AAAAASUVORK5CYII="}
              alt="banner"
              height="100%"
              width="100%"
            />
          </Card>
          <Typography
            variant="body2"
            style={{
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              margin: "0 0 0 15px",
            }}
          >
            All categories
          </Typography>
        </Box>
        <ArrowForwardIosIcon
          sx={{
            fontSize: "14px",
          }}
        />
      </Box>
    </Box>
  );
};

export default CategoryHome;
