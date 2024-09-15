import React,{useState} from "react";
import { mockCompanyDetails, mockHistorical } from "../constants/mock";
import Card from "./Card";
import { AreaChart, ResponsiveContainer, XAxis, YAxis,Area,Tooltip } from "recharts";
import { convertUnixTimestampToDate } from "../helper/data-helper";
const Chart=()=>{
    const[data,setData] = useState(mockHistorical);
    const[filter,setFilter]=useState("1W");
    const formatData=(data)=>{
      console.log(data);
      return data.c.map((item,index)=>{
        return {
          value:item.toFixed(2),
          date:convertUnixTimestampToDate(data.t[index]),
        };
      });
    };
      return (<Card>
        <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
        <Area type="monotone" dataKey="value" stroke="#312e81" fillOpacity={1} strokeWidth={0.5} />
        <Tooltip/>
        <XAxis dataKey={"data"}/>
        <YAxis domain={["dataMin","dataMax"]}/>
        </AreaChart>

        </ResponsiveContainer>

      </Card>)
}
export default Chart;