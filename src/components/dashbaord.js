import { useEffect, useState } from "react";
import LineGraph from "./charts/line-graph";
import TopLocation from "./top-location";
import TopSource from "./top-source";
import sendResquest from "../assets/js/http";
import { Alert, Spinner } from "flowbite-react";

const RoundButton = (props) => {
    return props.active ? <button className="w-fit bg-orange-200 text-sm h-fit py-2 px-4 font-semibold hover:bg-orange-200 hover:border-orange-600 transition-all duration-300 border border-[#FF5403] text-[#FF5403] rounded-full">
        {props.label}
    </button> : <button className="w-fit hover:text-[#FF5403] text-sm h-fit py-2 px-4 font-semibold hover:bg-orange-200 hover:border-orange-600 transition-all duration-300 border border-gray-200 rounded-full">
        {props.label}
    </button>
}

const Dashboard = (props) => {

    const [loading_var, loading_func] = useState(true);
    const [grpah_data_var, graph_data_func] = useState([]);
    const [top_locations_var, top_locations_func] = useState([]);
    const [top_sources_var, top_sources_func] = useState([]);
    const [error_var, error_func] = useState(false);

    useEffect(() => {
        try {
            sendResquest(response => { loading_func(false);
                
                if (!response.hasOwnProperty("graph_data"))
                    if (response.statusText != undefined)
                        if (response.statusText == "error") {
                            error_func(true);
                            return;
                        }
                error_func(false);
                var graph_data = response.graph_data,
                    top_locations = response.top_locations,
                    top_sources = response.top_sources;
                graph_data_func(graph_data.views);
                top_locations_func(top_locations)
                top_sources_func(top_sources);
            });
        } catch (error) {
            alert(error)
        }
    }, []);

    return loading_var ? <section className="w-full h-full flex flex-col">
        <div className="w-fit h-fit my-auto mx-auto text-[#FF5403]">
            <Spinner color="#FF5403" className="mx-auto text-[#FF5403] my-auto fill-[#FF5403]"/>
        </div>
        
    </section> : error_var ? <Alert color="red" className="flex w-fit px-16 mx-auto my-auto items-center">
      <span>Oops, unexpected error</span>
    </Alert> : <section className="w-full h-fit space-y-2">
        <h1 className="w-full h-fit px-6 py-3 font-bold text-2xl flex flex-row space-x-2"><font>Good morning, Blessing ⛅️</font></h1>
        <div className="w-full flex flex-row">
            <font className="w-full px-6 font-semibold text-gray-800">Check out your dashboard summary.</font>
            <font className="text-[#FF5403] w-36 font-semibold">View  analytics</font>
        </div>
        <section className="w-full p-6 h-fit flex flex-row space-x-3">
            <RoundButton label="1 Day"/>
            <RoundButton label="3 Days"/>
            <RoundButton label="7 Days"/>
            <RoundButton label="30 Days"/>
            <RoundButton active={true} label="All Time"/>
            <RoundButton label="Custom Date"/>
        </section>
        <section className="px-6"><LineGraph data={grpah_data_var}/></section>
        <section className="w-full h-fit flex flex-row p-6 space-x-6">
            <TopLocation data={top_locations_var}/>
            <TopSource data={top_sources_var}/>
        </section>
    </section>
}

export default Dashboard;