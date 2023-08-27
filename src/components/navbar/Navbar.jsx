import {MenuItems, NavIcons, NavMenu, NavWrapper, Text} from './NavbarStyle'
import { FaCartPlus, FaUser, FaAngleDown } from "react-icons/fa"
import { Link } from 'react-router-dom';
import MultipleSelect from '../dropdown/dropdown';
import { useReducer } from "react";
import carData from '../mock/data';
import caravanData from '../mock/caravanData';
import TuningData from '../mock/tuningCar';
import UsedCar from '../mock/usedCar';


const reducer = (state, action) => {
    switch(action.type) {
        case "showToggle1":
            return { showMotor: !state.showMotor};
        case "showToggle2":
            return { showCaravan: !state.showCaravan};
        case "showToggle3":
            return { showTuning: !state.showTuning};
        case "showToggle4":
            return { showUsedCar: !state.showUsedCar};
        default:
            return state;
    } 
};
export default function NavbarComp() { 
    
    const [state, dispatch] = useReducer(reducer, {
        showMotor: false,
    });
    return(
        <NavWrapper>
            <Link to="/mainpage" style={{textDecoration:'none'}}><Text>Camper</Text></Link>
            <NavMenu>
                <MenuItems > 
                <button onClick={()=>{
                        dispatch({ type:"showToggle1" });
                        }}>Motor <FaAngleDown style={{marginLeft:'7px'}}/>
                    </button> 
                    {state.showMotor && 
                   
                        <div>
                            {carData.slice(0,5).map((item) => {
                            return (
                                <>
                                    <img src={item.photo} alt="" width='15%'/>
                                </>
                            )
                        })}
                
                
                  <button class="see-all-button">See all</button>
            
                            
                        
                        </div>
                    }    
                </MenuItems>
                <MenuItems>
                <button onClick={()=>{
                        dispatch({ type:"showToggle2" });
                        }}>Caravan <FaAngleDown style={{marginLeft:'7px'}}/>
                    </button> 
                    {state.showCaravan && 
                   
                        <div>
                            {caravanData.slice(0,5).map((item) => {
                            return (
                                <>
                                    <img src={item.url} alt="" style={{width:'15%'}} />
                                </>
                            )
                        })}
                
                
                  <button class="see-all-button">See all</button>
            
                            
                        
                        </div>
                    }    
                </MenuItems>
                <MenuItems>
                <button onClick={()=>{
                        dispatch({ type:"showToggle3" });
                        }}>Tuning <FaAngleDown style={{marginLeft:'7px'}}/>
                    </button> 
                    {state.showTuning && 
                   
                        <div>
                            {TuningData.slice(0,5).map((item) => {
                            return (
                                <>
                                    <img src={item.url} alt="" style={{width:'15%'}}/>
                                </>
                            )
                        })}
                
                
                  <button class="see-all-button">See all</button>
            
                            
                        
                        </div>
                    }    
                </MenuItems>
                <MenuItems>
                <button onClick={()=>{
                        dispatch({ type:"showToggle4" });
                        }}>Used Car <FaAngleDown style={{marginLeft:'7px'}}/>
                    </button> 

                    {state.showUsedCar && 
                   
                        <div>
                            {UsedCar.slice(0,5).map((item) => {
                            return (
                                <>
                                    <img src={item.url} alt="" style={{width:'15%'}}/>
                                </>
                            )
                        })}
                
                
                  <button >See all</button>
            
                            
                        
                        </div>
                    }    
                </MenuItems>
                <Link to="/campingplaces" style={{textDecoration:'none'}}>
                    <MenuItems><span>Camping Place</span></MenuItems>
                </Link>
            </NavMenu>
            <NavIcons>
                <FaCartPlus style={{color:'#006DAB'}}/>
                <FaUser style={{marginLeft:'25px', color:'#006DAB'}}/>
                <select name="language" id="language" style={{border:'none', marginLeft:'25px'}}>
                        <option value="english">En</option>
                        <option value="russian">Rus</option>
                        <option value="uzbek">Uz</option>
                        <option value="korean">Kor</option>
                    </select>
            </NavIcons>
        </NavWrapper>
    )
};