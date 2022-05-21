import React from 'react'
import Music from '../components/music'
import Navbar from '../components/Navbar'
import "./Home.css"
import { Data } from '../components/dataDummys'

const Home = () => {
  return (
    <div style={{backgroundColor:"#161616"}}>
        <div className='Background'>
            <Navbar/>
            <div className='headline'>
            <div style={{color:"white", fontWeight:400, fontSize:"48px", textAlign:"center"}}>
            Connect on DumbSound
            </div >
            <div style={{color:"white", fontWeight:400, fontSize:"24px", textAlign:"center"}}>Discovery, Stream, and share a constantly expanding mix of music <br/>from emerging and major artists around the world</div>
            </div>
        </div>
        <div style={{marginTop:"30px"}}>
          <div style={{color:"#EE4622", fontWeight:700, fontSize:"24px", textAlign:"center"}}>Dengarkan Dan Rasakan</div>
        </div>
        <div className='container-fluid ' style={{marginTop:"30px"}}>
          <div className='d-flex row ms-3'>
            {Data.map((item,index)=>{
              return <Music key={index} id={item.id} title={item.title} year={item.year} artis={item.artis.name} thumbnail={item.thumbnail}/>
            })}
          </div>
        </div>
    </div>
  )
}

export default Home