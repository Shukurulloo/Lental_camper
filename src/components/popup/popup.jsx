
    import React from 'react';
    import Popup from 'reactjs-popup';
    import { FaTimes } from 'react-icons/fa';
    import 'reactjs-popup/dist/index.css';
    import { hover } from '@testing-library/user-event/dist/hover';

        const closeButtonStyle = {


        cursor: 'pointer',
        
        }

    const PopUpMain = ({ imgSrc }) => (
    <Popup  trigger={<img src={imgSrc} alt="" style={{ width: '100%', borderRadius:'30px'}} />} modal>
        {close => (
        <div className="modal" >
            <button className="close" onClick={close} style={closeButtonStyle}>
            <FaTimes style={{ fontSize: '20px' }} />
            </button>
            <div className="content">
            <img src={imgSrc} alt="" style={{ width: '100%' }} />
            </div>
        </div>
        )}
    </Popup>
    );

    export default PopUpMain;
