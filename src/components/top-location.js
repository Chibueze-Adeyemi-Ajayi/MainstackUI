import usaflag from "../assets/images/country/usaflag.png";
import netherlandflag from "../assets/images/country/netherlandflag.png";
import andora from "../assets/images/country/andoraflag.png";
import finlandflag from "../assets/images/country/finlandflag.png";
import germanflag from "../assets/images/country/germanflag.png";
import ukflag from "../assets/images/country/ukflag.png";
import ghanaflag from "../assets/images/country/ghanaflag.png";
import nigeriaflag from "../assets/images/country/nigerianflag.png";
import DoughnutChart from "./charts/doughnut-chat";

import { useEffect, useState } from "react";

const CountryRank = (props) => {
    return <div className="w-full items-center h-fit flex flex-row space-x-3">
        {props.icon} <font className="font-semibold">{props.country}</font>
        <font className="font-bold">{props.percentage}%</font>
        {props.circle}
    </div>
}

const TopLocation = (props) => {

    var [my_data_var, my_data_func] = useState([]);
    var [my_color_var, my_color_func] = useState([]);

    var flags = {
        "Nigeria": nigeriaflag,
        "Germany": germanflag,
        "Ghana": ghanaflag,
        "Finland": finlandflag,
        "United Kingdom": ukflag
    }

    var circles  = [
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="12" rx="6" fill="#C66FBA"/>
        </svg>,
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="12" rx="6" fill="#844FF6"/>
        </svg>,
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="12" rx="6" fill="#0FB77A"/>
        </svg>,
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="12" rx="6" fill="#FAB70A"/>
        </svg>,
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="12" rx="6" fill="#F09468"/>
        </svg>
    ], color_template = [
        "#C66FBA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468",
    ]

    var elems = [], i = -1; 

    const data = [], colors = [];
    props.data.forEach(datum => { i = i == 4 ? -1 : i; i ++;
        var percentage = datum.percent, country = datum.country,
        flag = flags[country], circle = circles[i]; data.push(datum.percent);
        var icon = <img src={flag} className="w-[20px] h-[16px]"></img>;
        colors.push(color_template[i]);
        elems.push(<CountryRank circle={circle} icon={icon} country={country} percentage={percentage}/>)
    });// my_data_func(data); my_color_func(colors)

    return <section className="w-full flex-col space-y-6 flex h-fit p-6 py-6 border border-gray-200 rounded-xl">
        <div className="w-full h-fit flex flex-row">
            <font className="w-full h-fit font-bold text-lg">Top Locations</font>
            <font className="w-48 text-sm font-semibold text-right text-[#FF5403]">View full reports</font>
        </div>
        <div className="w-full h-fit grid grid-cols-2">
            <div className="w-full items-center my-auto h-fit flex flex-col space-y-3">
                {elems}
            </div>
            <DoughnutChart data={data} color={colors}/>
        </div>
    </section>
}

export default TopLocation;