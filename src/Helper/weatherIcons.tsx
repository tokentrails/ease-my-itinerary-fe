/* eslint-disable react-refresh/only-export-components */

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
const getWeatherIcon = (condition:string) => {
    const lowerCaseCondition = condition.toLowerCase();
    if (lowerCaseCondition.includes('partly cloudy') || lowerCaseCondition.includes('sunny with clouds')) {
        return <CloudOutlinedIcon />;
    }
    if (lowerCaseCondition.includes('sun')) {
        return <WbSunnyOutlinedIcon />;
    }
    if(lowerCaseCondition.includes("rain")){
        return <WaterDropOutlinedIcon />
    }
    if (lowerCaseCondition.includes('cloud')) {
        return <CloudOutlinedIcon />;
    }
    return <WbSunnyOutlinedIcon />;
};

export default getWeatherIcon