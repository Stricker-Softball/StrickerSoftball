import React, {useState, useEffect} from 'react';
// withRouter not used
import './MenuNav.scss';

/* App.jsx */
let textColor = 'white'

function App (props){
    let [menuOpen, setMenuOpen] = useState(false);

    
    function handleMenuClick(e,ele) {
      setMenuOpen(!menuOpen)
        if(!menuOpen){
          if(!Array.from(document.querySelector('.menu-app-container').classList).includes('is-open')){
            document.querySelector('.menu-app-container').classList.add("is-open");
          }
        }else{
          document.querySelector('.menu-app-container').classList.remove("is-open");
        }
    }
    
    function handleLinkClick(link) {
      setMenuOpen(false);
      window.scrollTo(0,0)
      props.history.push(link)
    }

    
        // determine scroll

        const [pinText, setPinText] = useState('down');
        const [, setScroll] = useState(window.scrollY);
    
        function updateScroll() {
          // always update current scroll position
          setScroll(window.scrollY)
        }

        useEffect(() => {
          window.addEventListener('scroll', updateScroll);
          return () => window.removeEventListener('scroll', updateScroll);
        }, []);
    
        useEffect(() => {
            if (window.scrollY < 60) {
                if (pinText !== 'down') {
                  if(menuOpen){
                    setPinText('down is-open');
                  }else{
                    setPinText('down');
                  }
                }
            } else {
                if (pinText !== 'up') {
                    if(menuOpen){
                      setPinText('up is-open');
                    }else{
                      setPinText('up');
                    }
                }
            }
        }, [pinText, menuOpen]);

    
    const styles= 
    {
        body: {
        filter: menuOpen ? 'blur(2px)':null,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: menuOpen ? '100vh':'0vh',
        transition: 'filter .7s ease, height .7s ease',
        },
    }

    let nav_item_list = props.nav_item_list;

    const menuItems = nav_item_list.map((val,index)=>{
      let isCurrentNav = val.link === window.location.pathname
    return (
        <MenuItem 
        className={`menu-item${isCurrentNav?' menu-nav-current':''}`}
        link={val.link}
        key={index} 
        delay={`${index * 0.1}s`}
        onClick={()=>{ handleLinkClick(val.link);}}>{val.name}</MenuItem>)
    });
      
    return(
    <div>
        <div className={`menu-app-container ${pinText}`}>
        <MenuButton open={menuOpen} onClick={handleMenuClick} color='white'/>
        </div>
        <Menu open={menuOpen}>
        {menuItems}
        </Menu>
        <div className='menu-app-body' style={styles.body}>

        </div>
    </div>
    )
}
  
  


//===========================================================================================================




  /* MenuItem.jsx*/

function MenuItem (props){
  let isCurrentNav = props.link === window.location.pathname
    let [hover, setHover] = useState(false)

    
    function handleHover(){
      setHover(!hover);
    }
    

    const styles={
    container: {
        opacity: 0,
        animation: '1s appear forwards',
        animationDelay: props.delay,
    },
    menuItem:{
        fontFamily:`'Open Sans', sans-serif`,
        fontSize: '1.2rem',
        padding: '1.2rem 0',
        margin: '0 5%',
        cursor: 'pointer',
        color: `${isCurrentNav? 'white': 'white'}`,
        background: `${isCurrentNav? 'var(--accent)': 'transparent'}`,
        transition: 'color 0.2s ease-in-out',
        animation: '0.5s slideIn forwards',
        animationDelay: props.delay,

    },
    line: {
        width: '90%',
        height: '2px',
        background: textColor,
        margin: '0 auto',
        animation: '0.5s shrink forwards',
        animationDelay: props.delay,
        
    }
    }
    return(
    <div style={styles.container}>
        {props.delay === '0s' && <div style={styles.line}/>}
        <div 
        style={styles.menuItem} 
        onMouseEnter={()=>{ handleHover();}} 
        onMouseLeave={()=>{ handleHover();}}
        onClick={props.onClick}
        >
        {props.children}  
        </div>
    <div style={styles.line}/>
    </div>  
    )
    
  }



  //===========================================================================================================
  
  /* Menu.jsx */

function Menu (props){

    let [open, setOpen] = useState(props.open ? props.open : false)

    useEffect( () => {
            setOpen(props.open)
    }, [props.open])
      
    

      const styles={
        container: {
          height: open? '100%': 0,
          maxHeight: open? '100vh': 0,
        },
      }
      return(
        <div className='menu-menu-container' style={styles.container}>
          {
            open?
              <div className='menu-menu-menulist'>
                {props.children}
              </div>:null
          }
        </div>
      )
    
  }



  //===========================================================================================================
  
  /* MenuButton.jsx */
function MenuButton (props){
    let [open, setOpen] = useState(props.open ? props.open : false)
    let [color] = useState('white')
  

    useEffect( () => {
            setOpen(props.open)
    }, [props.open])
    
    function handleClick(){
        setOpen(!open)
        
    }
    
      const styles = {
        container: {
          height: '65px',
          width: '65px',
          display:'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '4px',
          color: textColor,
          margin: '0 auto',
          // borderRight: `2px dashed ${textColor}`,
          // borderLeft: `2px dashed ${textColor}`,
          borderRadius: open ? '4px':'4px',
          paddingLeft: open ? '14px':'4px',

        },
        menuText: {
          marginLeft: open ? '-10px':'0px',
          color: color,
          marginTop: '5px',
          fontSize: '12px'
        },
        line: {
          height: '3px',
          width: '27px',
          background: color,
          transition: 'all 0.2s ease',
          color: textColor
        },
        lineTop: {
          transform: open ? ' rotate(44deg)':'none',
          transformOrigin: 'top left',
          marginBottom: '5px',
          marginTop: '5px'
        },
        lineMiddle: {
          opacity: open ? 0: 1,
          transform: open ? 'translateX(-18px)':'none',
        },
        lineBottom: {
          transform: open ? ' translateX(-1px) translateY(3px)rotate(-44deg)':'none',
          transformOrigin: 'top left',
          marginTop: '5px',

        },       
      }
      return(
        <div style={styles.container} 
          onClick={ props.onClick ?  props.onClick: 
            ()=> { handleClick();}}>
              
          <div style={{...styles.line,...styles.lineTop}}/>
          <div style={{...styles.line,...styles.lineMiddle}}/>
          <div style={{...styles.line,...styles.lineBottom}}/>
          <div style={styles.menuText} >MENU</div>
        </div>
      )
    
  }
  
  
  
  //===========================================================================================================
  
  
  /* Main.jsx */

function Main (props){
  return (
  <div className='menu-main'>
    <App {...props} />
  </div>
  )
    
  }

  export default Main;