import React, { useEffect } from 'react';
import './Events.scss';
// import bb from '../../../public/web/viewer.html'
import  ImgList  from '../Ads/ImgList';

function Events(props, e) {
    const { match, setShowModal } = props;
    const path = match && match.path;
    useEffect(() => {
        // Code to run on component load
        if (path && path.includes('stations')) {
            setShowModal();
        }
    }, [path, setShowModal]);
    const eventsGroup = [{ title: 'Clinics, Classes & Camps' }];
    // let isClasess = props.match.path.includes('class');
    eventsGroup[0].links = [...props.ClassRegistration]
    eventsGroup[0].events = []
    
    if(props.match.path.includes('question')){
        eventsGroup[0].title = 'Questions & Answers'
    }else if(props.match.path.includes('teams')){
        eventsGroup[0].title = 'Teams'
    }else if(props.match.path.includes('stations')){
         eventsGroup[0].title = 'Stations'
    }else if(false){
        eventsGroup[0].title = 'Classes'
        eventsGroup[0].events = [
            {
                name:'Class Schedule',
                file:"https://drive.google.com/file/d/1HFpfZ5GhqVkYunBwSOm0ieihDwUMAyoy/preview", 
                url:"https://drive.google.com/file/d/1HFpfZ5GhqVkYunBwSOm0ieihDwUMAyoy/view"
            }
        ]
        eventsGroup[1] = {links: []};
        eventsGroup[1].title = 'Class Descriptions'
        eventsGroup[1].events = [
            {
                name:'Plyometric Open Gym',
                file:"https://drive.google.com/file/d/1OqyHhmU3KLGPsvLqWEMSJCgZRuoecZBR/preview", 
                url:"https://drive.google.com/file/d/1OqyHhmU3KLGPsvLqWEMSJCgZRuoecZBR/view"
            },
            {
                name:'Velocity Class',
                file:"https://drive.google.com/file/d/1y9Y5vw3FXhVscK4FuJKTuJVCXp9ULOIK/preview", 
                url:"https://drive.google.com/file/d/1y9Y5vw3FXhVscK4FuJKTuJVCXp9ULOIK/view"
            }
        ]
    }

    
    if(props.sectionList && props.sectionList.length){
        eventsGroup[0].events = props.sectionList;
        // console.log(eventsGroup[0].events )
    }
    


    function PdfClick(link) {
        window.open(link, '_blank');
    }
    console.log(eventsGroup)
    return (

        <div className='Events'>
                
                { eventsGroup.map((group) => {
                    // Pdf's
                    return (
                        <>
                        {props.pageState === "register" && group.links && group.links.length ? <>
                         <h2>{'Links & Downloads'}</h2>
                        <div className='event-list links-list'>
                        {props.pageState === "register" ? group.links.map((item) => {
                            return (
                                <div className="links-section">
                                <div key={item.name + 'link'} className='link-description' style={{paddingBottom:'0',overflow:'hidden'}}>
                                    {item.description}
                                    </div>
                                         <div className="link-btn-group">
                                {item.buttons.map((button) => {
                                    // console.log(button)
                                    button.qr = ''
                                        return (
                                        <div className="linkParent">{button.qr ? <img src={button.qr} alt={button.name || ''}/> : <></>}<a key={button.name + 'a'} className='clinic-link ' target="_blank" rel="noreferrer" href={button.link}><span>{button.name}</span></a></div>
                                    )
                                }) }
                                 </div>
                                </div>
                            )
                        }):<></>}
                        </div>
                        <ImgList {...props} />
                        </>
                :<></>}
                {props.match.path.includes('classes')?<ImgList {...props} />:<></>}
                        <div className='event-list'>
{/* {props.pageState === "class" ? <h1 style={{paddingTop: '5px'}}>{group.title}</h1> : <></>} */}
                       


                        {props.pageState === "class" ? group.events.map((item) => {
                            return (
                                <div className='event-row'>
                                {item.name && item.name.length ? <a key={item.name + 'tag'} className='event-link pdf-link ' target="_blank" rel="noreferrer" href={item.url}>{item.name}</a> : <div className='title-space'></div>}
                                <div key={item.name} className='event-item' style={{paddingBottom:'0',overflow:'hidden'}} onClick={() => PdfClick(item.url)}>
                                    <iframe title={item.name || 'pdf-preview'} style={{background:'#000000'}} frameBorder="0" scrolling="no" allowtransparency="true" src={item.file} ></iframe>
                                </div>
                                </div>
                            )
                        }):<></>}

                         {props.pageState === "class" ? props.imgList && props.imgList.map((item) => {
                            // console.log(item)
                            return (
                                <>
                                {item.name && <a key={item.name + 'tag'} className='event-link pdf-link ' target="_blank" rel="noreferrer" href={item.url}>{item.name}</a>}
                                <div key={item.name} className='event-item-img event-item' style={{paddingBottom:'0',overflow:'hidden'}} onClick={() => PdfClick(item.url)}>
                                    <img style={{background:'#000000'}} alt={item.name || ''} src={item.file} />
                                </div>
                                </>
                            )
                        }):<></>}
                        </div>
                        </>
                    )
                    
                })}
                {/* {isClasess? <div className='buttons'>
                <button className='button-main' onClick={() => buttonPress('/register')}>Registration</button>
            </div>:<></>} */}
        </div>
    );
}

export default Events;
