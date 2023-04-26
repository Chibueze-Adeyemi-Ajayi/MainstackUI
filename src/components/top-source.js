import usaflag from "../assets/images/country/usaflag.png";
import netherlandflag from "../assets/images/country/netherlandflag.png";
import andora from "../assets/images/country/andoraflag.png";
import ig from "../assets/images/social/ig.png";
import linkedin from "../assets/images/social/linkedin.png";
import google from "../assets/images/social/google_ic.png";
import DoughnutChart from "./charts/doughnut-chat";

const SocialRank = (props) => {
    return <div className="w-full items-center h-fit flex flex-row space-x-3">
        {props.icon} <font className="font-semibold">{props.country}</font>
        <font className="font-bold">{props.percentage}%</font>
        {props.circle}
    </div>
}

function getSocialRank (name, percent) {
    return {
        facebook: <SocialRank circle={
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="12" rx="6" fill="#599EEA"/>
            </svg>                    
        } icon={
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6219 11.165L11.1728 7.57281H7.72621V5.24168C7.72621 4.25891 8.20765 3.30098 9.7514 3.30098H11.3185V0.242734C11.3185 0.242734 9.89629 0 8.53668 0C5.698 0 3.84273 1.72039 3.84273 4.83496V7.57281H0.687378V11.165H3.84273V19.849C4.47543 19.9483 5.1239 20 5.78449 20C6.44507 20 7.09355 19.9483 7.72621 19.849V11.165H10.6219Z" fill="#1877F2"/>
            </svg>                  
        } percentage={percent} country="Facebook" />,
        instagram: <SocialRank circle={
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="12" rx="6" fill="#844FF6"/>
            </svg>                    
        } icon={
            <img src={ig} className="w-[20px] h-[18px]"></img>                   
        } percentage={percent} country="Instagram" />,
        linkedin: <SocialRank circle={
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="12" rx="6" fill="#0FB77A"/>
            </svg>                    
        } icon={
            <img src={linkedin} className="w-[20px] h-[18px]"></img>                  
        } percentage={percent} country="Linkedin" />,
        twitter: <SocialRank circle={
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="12" rx="6" fill="#FAB70A"/>
            </svg>                    
        } icon={
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.45048 17.3334C14.1907 17.3334 18.4243 10.9207 18.4243 5.3596C18.4243 5.17748 18.4243 4.99617 18.412 4.81565C19.2356 4.21989 19.9465 3.48232 20.5115 2.63734C19.7435 2.97766 18.9287 3.2008 18.0945 3.29944C18.9728 2.77367 19.6305 1.94608 19.9446 0.971777C19.1186 1.46193 18.2147 1.80742 17.2724 1.99327C16.4767 1.14713 15.3653 0.666748 14.2039 0.666748C11.8931 0.666748 9.99164 2.56823 9.99164 4.87898C9.99164 5.19956 10.0283 5.51913 10.1007 5.83137C6.71877 5.66187 3.56344 4.06221 1.42759 1.43453C0.316927 3.34651 0.891611 5.82432 2.73048 7.05221C2.06085 7.03238 1.4056 6.8517 0.820462 6.52548V6.5788C0.821022 8.57443 2.24052 10.309 4.19665 10.7041C3.57714 10.873 2.92698 10.8977 2.29649 10.7763C2.84642 12.4863 4.43222 13.6651 6.22814 13.6988C4.73825 14.8697 2.89673 15.5057 1.00178 15.5038C0.666946 15.5032 0.332431 15.4829 0 15.4431C1.92432 16.678 4.164 17.3332 6.45048 17.3301" fill="#1DA1F2"/>
            </svg>
        } percentage={percent} country="Twitter" />,
        google: <SocialRank icon={
            <img src={google} className="w-[20px] h-[18px]"></img>                  
        } circle={
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="12" height="12" rx="6" fill="#844FF6"/>
            </svg>                    
        } percentage={percent} country="Google" />
    }[name];
}

const TopSource = (props) => {
    var data = props.data, socials = [], percents = [], color_template = [
        "#C66FBA", "#844FF6", "#0FB77A", "#FAB70A", "#F09468",
    ], i = -1, colors = []; 
    data.forEach(datum => { i = i == 4 ? -1 : i; i ++;
        socials.push(getSocialRank(datum.source, datum.percent));
        percents.push(datum.percent); colors.push(color_template[i]);
    }); 
    return <section className="w-full flex-col space-y-6 flex h-fit p-6 py-6 border border-gray-200 rounded-xl">
        <div className="w-full h-fit flex flex-row">
            <font className="w-full h-fit font-bold text-lg">Top Source</font>
            <font className="w-48 text-sm font-semibold text-right text-[#FF5403]">View full reports</font>
        </div>
        <div className="w-full h-fit grid grid-cols-2">
            <div className="w-full items-center h-fit my-auto flex flex-col space-y-3">
                {socials}
            </div>
            <DoughnutChart color={colors} data={percents} />
        </div>
    </section>
}

export default TopSource;