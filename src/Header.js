import React from 'react';
import { createUseStyles } from 'react-jss';
import {HashLink} from 'react-router-hash-link';

const Header = ({windowSize}) => {
    const fontScale = .039;
    var headerSize = windowSize[0] * fontScale;
    var subHeaderSize = windowSize[0] * (fontScale + .020);
    var buttonSize = windowSize[0] * (fontScale - .010);
    var buttonPadding = windowSize[0] * (fontScale - .020);

    if(subHeaderSize > 45){
        subHeaderSize = 45;
    }else if(subHeaderSize < 18){
        subHeaderSize = 18;
    }
    if(headerSize > 30){
        headerSize = 30;
    }else if(headerSize < 20) {
        headerSize = 20;
    }

    if(buttonSize > 22){
        buttonSize = 22;
    }else if(buttonSize < 12){
        buttonSize = 12;
    }
    
    if(buttonPadding > 15)
    {
        buttonPadding = 15;
    }
    
    const styles = useStyles();
    return (
        <>
            <div style={{backgroundColor: 'white', width: '100%'}}>
                <div style={{margin: 'auto', width: '50%', marginBottom: 100}}>
                    <p style={{textAlign: 'center', marginTop: 50, fontSize: headerSize, marginBottom: 75}}> codebean </p>
                </div>
                
                <div style={{margin: 'auto', width: '50%', marginBottom: 50}}> 
                    <p style={{textAlign: 'center', fontSize: subHeaderSize }}>A mobile software company that loves to make apps.</p>
                </div>
                                 
                <div style={{margin: 'auto', width: '50%', textAlign: 'center', marginBottom: 75}}>
                <HashLink to="#explore">
                    <button className={styles.button} style={{fontSize: buttonSize, padding: buttonPadding, paddingLeft: (buttonPadding * 2) + 5, paddingRight: (buttonPadding * 2) + 5}}>
                        Explore
                    </button>
                </HashLink>
                </div>

            </div>
        </>
    );
}

const useStyles = createUseStyles({
    button: {
        border: 'none',
        padding: 15,
        //paddingLeft: 35,
        //paddingRight: 35,
        fontSize: 22,
        borderRadius: 50,
        backgroundColor: '#ff8351',
        
        borderWidth: .75,
        borderColor: '#ff8351',
        color: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: '#ff8351'
        }
        
    }
})

export default Header;