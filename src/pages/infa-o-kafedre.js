import girl from '../pics/Group 172.jpg'
import { CButton } from '../components/CButton'
import { motion, AnimatePresence } from "framer-motion";


function setColor(knop){
    var btns = document.getElementsByName('knop')
    var btn = document.getElementById(`knop${knop}`)
  
    for (var i = 0; i < btns.length; i++) {
      btns[i].style.backgroundColor = "#000000"
    }
    btn.style.backgroundColor = "#222222"
  
    return btn
}

export default function Infa(props) {
    return <>
        <motion.div style={{ display: 'flex', width: '100%',padding: '80px 80px 0 120px', boxSizing: 'border-box',gap:'20px' }}
        initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '55px' }}>
                <div className="Text logo" style={{ fontSize: '90px' }}>Информационные <br /> системы<br /> и технологии</div>
                <div className='Text'>Кафедра Заполярного государственного <br />университета им. Н.М.Федоровского <br />
                    Основана в 2002 г. 
                </div>
                <div style={{display:'flex',gap:'100px',padding:'10px 0 0 0px'}}>
                    <CButton href='#napravleniya' onClick={() => {props.setKnop(0);setColor(0)}}>ИС</CButton>
                    <CButton href='#napravleniya' onClick={() => {props.setKnop(1);setColor(1)}}>ИЭ</CButton>
                </div>
            </div>
            <motion.div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}}><img src={girl} style={{ height: '500px' }}></img></motion.div>
        </motion.div>
    </>
}