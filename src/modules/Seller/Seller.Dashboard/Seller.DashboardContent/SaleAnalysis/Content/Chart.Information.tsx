/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Divider, Typography } from "@mui/material";
import "./Chart.Information.scss";
import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { themeColors } from "../../../../../../themes/schemes/PureLightTheme";
import { useSelector } from "react-redux";

const ChartInformation: React.FC<{}> = () => {


  const listChart = useSelector((state: any) => state.seller.listChart);
  const listChartFilterMonth = useSelector((state: any) => state.seller.listChartFilterMonth);
  const formatTotal = (total: any) => parseFloat(total).toFixed(1);

  const totalTransaction = Math.ceil(listChart?.Week_1?.Total_Transaction + listChart?.Week_2?.Total_Transaction + listChart?.Week_3?.Total_Transaction + listChart?.Week_4?.Total_Transaction);
  const totalMoney = Math.ceil(listChart?.Week_1?.Total + listChart?.Week_2?.Total + listChart?.Week_3?.Total + listChart?.Week_4?.Total);
  const average = Math.ceil((listChart?.Week_1?.Total + listChart?.Week_2?.Total + listChart?.Week_3?.Total + listChart?.Week_4?.Total) / 4);

  const data = [
    {
      name: "Week 1",
      total: listChart?.Week_1?.Total,
    },
    {
      name: "Week 2",
      total: listChart?.Week_2?.Total,
    },
    {
      name: "Week 3",
      total: listChart?.Week_3?.Total,
    },
    {
      name: "Week 4",
      total: listChart?.Week_4?.Total,
    },
  ];

  const init = () => {
  }

  useEffect(() => {
    init();
  }, [])

  useEffect(() => { }, [listChart, listChartFilterMonth])

  return (
    <div className="sale-analysis__container">
      <div className="sale-analysis__left">
        <div className="chart">
          <h4 className="linechart__title" style={{ fontSize: "14px" }}>
            Sales
          </h4>
          <ResponsiveContainer className='line__chart' aspect={2 / 1}>
            <LineChart
              width={1000}
              height={500}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                id="total"
                type="monotone"
                dataKey="total"
                stroke={themeColors.chart}
                fill={themeColors.chart}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <Divider
        sx={{
          width: '100%',
          m: '-1rem 0 1rem',
          bgcolor: themeColors.borderDividerAndDecs,
          '@media screen and (min-width: 1194px)': {
            display: 'none'
          }
        }}
      />

      <div className="sale-analysis__right">
        <div className="featured">
          <div className="featured__top">
            <Box className='featured__items'>
              <Typography className="featured__title-money">
                Total Money
              </Typography>
              <Typography className="featured__data-money">${formatTotal(totalMoney)==='NaN' ? 0 : formatTotal(totalMoney)}</Typography>
            </Box>

            <Box className='featured__items'>
              <Typography className="featured__title-average">
                Average
              </Typography>
              {/* <Typography className="featured__data-average">${formatTotal(average)}</Typography> */}
              <Typography className="featured__data-average">${formatTotal(average)==='NaN' ? 0 : formatTotal(average)}</Typography>
            </Box>
          </div>

          <Divider sx={{
            backgroundColor: themeColors.borderDividerAndDecs,
            mr: "1.7rem",
            ml: '1.1rem',
            '@media screen and (min-width: 740px) and (max-width: 1194px)': {
              display: 'none'
            }
          }}
          />

          <div className="featured__bottom">
            <Box className='featured__items'>
              <Typography className="featured__title-rating">
                Rating Shop
              </Typography>
              {/* <Typography className="featured__data-rate">{formatTotal(totalMoney/average)}%</Typography> */}
              <Typography className="featured__data-rate">{formatTotal(totalMoney/average)==='NaN' ? 0 : formatTotal(totalMoney/average)}%</Typography>
            </Box>

            <Box className='featured__items'>
              <Typography className="featured__title-orders">Orders</Typography>
              {/* <Typography className="featured__data-orders">{formatTotal(totalTransaction)}</Typography> */}
              <Typography className="featured__data-orders">{formatTotal(totalTransaction)==='NaN' ? 0 : formatTotal(totalTransaction)}</Typography>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartInformation;
