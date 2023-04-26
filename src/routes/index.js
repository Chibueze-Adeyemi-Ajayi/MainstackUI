import Dashboard from "../components/dashbaord";
import MenuTab from "../components/menu-tab";

const Index = (props) => {
    return <section className="w-full h-full flex flex-row space-x-1">
        {/* left tab */}
        <section className="w-[23%] min-w-[23%] max-w-[23%] h-full overflow-hidden bg-white border-r border-gray-100">
            <MenuTab />
        </section>
        <section className="w-full min-w-[77%] max-w-[77%] h-full flex flex-col space-x-1">
            <header className="font-bold py-6 px-12 text-2xl">Dashboard</header>
            <section className="w-full h-full overflow-y-auto overflow-x-hidden">
                <Dashboard />
            </section>
        </section>
    </section>
}

export default Index;