import {MenuItems, NavIcons, NavMenu, NavWrapper, Text} from './NavbarStyle'
import { FaCartPlus, FaUser } from "react-icons/fa"
import { Link } from 'react-router-dom';
import MultipleSelect from '../dropdown/dropdown';



export default function NavbarComp() { 

    return(
        <NavWrapper>
            <Text>Camper</Text>
            <NavMenu>
                <MenuItems style={{position:'relative'}}> 
                               {/* <MultipleSelect/>     */}
                <select name="cars" id="cars">
                        <option value="motor">Motor</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>   
                </MenuItems>
                <MenuItems>
                    <select name="cars" id="cars">
                        <option value="motor">Caravan</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </MenuItems>
                <MenuItems>
                    <select name="cars" id="cars">
                        <option value="motor">Tuning</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </MenuItems>
                <MenuItems>
                    <select name="cars" id="cars">
                        <option value="motor">Used car</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
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