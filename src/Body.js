import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import message from './img/p2p_message.png';
import home from './img/p2p_intro.png';
import work from './img/work_intro.png';
import CarouselItem from './components/CarouselItem';


const Body = ({windowSize}) => {
    
    // todo: is this okay to do like this??
    const widthScale = .53;
    const heightScale = .860;
    const ratio = .462;

    // get the size of the window and apply our scale for the images
    var imgWidth = widthScale * windowSize[0];
    var imgHeight = heightScale * windowSize[1];

    // horizontal bounds
    if(imgWidth > 360){
        imgWidth = 360;
    }
    else if(imgWidth < 150){
        imgWidth = 150;
    }

    // vertical bounds
    if(imgHeight > 777){
        imgHeight = 777;
    }
    else if(imgHeight < 325){
        imgHeight = 325;
    }

    // maintain our aspect ratio
    imgHeight = imgWidth/ratio;

    return (
        <>
            <div style={{marginLeft:'auto', marginRight: 'auto', width: '75%', backgroundColor: 'white', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
                <Carousel variant="dark" interval={null}>
                    <Carousel.Item>
                        <div style={{margin: 'auto'}}>
                            <CarouselItem imgSrc={home} width={imgWidth} height={imgHeight} textHeader={'A community app for returning citizens'} textBody={''} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{margin: 'auto'}}>
                        <CarouselItem imgSrc={message} width={imgWidth} height={imgHeight} textHeader={'Direct messaging integrated'} textBody={''} />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{margin: 'auto'}}>
                        <CarouselItem imgSrc={work} width={imgWidth} height={imgHeight} textHeader={'A new way for returning citizens to find jobs.'} textBody={''} />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default Body;