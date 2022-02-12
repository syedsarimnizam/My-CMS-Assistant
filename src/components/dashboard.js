import React,{useState,useEffect} from 'react'
import { Button } from 'reactstrap'
import profile from '../images/profile.jpg'
import Grammersuggestion from './grammarsuggestion'
import Plagiarism from './plagiarism'
import { useLocation,useNavigate } from 'react-router-dom'
import axios from 'axios'


const Dashboard=()=>{
    // console.log(props)
    const {state} = useLocation();
    const navigate=useNavigate()
    // const [token,settoken]=useState(undefined)

    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(token){
            console.log(token)
        }else if(token === null){
            navigate('/login')
        }
    },[])


    // console.log(state.data.name)

    const logout=async()=>{
        const tkn=localStorage.getItem('token')
        // console.log(tkn)
        await axios.get(`https://bergmediagroup.com/web_api/api/v1/logout/${tkn}`)
        .then((response)=>{
            // console.log(response)
            alert(response.data.message)
        })
        .catch((err)=>console.log(err))
        localStorage.removeItem('token')
        navigate('/login')
    }
    return(
        <div className='container-fluid px-0'>
            <div className='gradient-btn px-md-5 px-3 py-3 d-sm-flex justify-content-between align-items-center'>
                <p className='mb-2 text-center text-sm-left mb-sm-0 text-white h5'>Smart Writing Assistant<br></br>using AI</p>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                        {/* <img src={profile} className='profile-img mr-md-2 mr-1' alt="..."></img> */}
                        <i class="fad fa-user-circle  mr-md-2 mr-1" style={{fontSize:'70px'}}></i>
                        <span className='text-white pr-md-5 pr-2 mb-0 '>{state === null ? '':state.data.name}</span>
                    </div>
                    <Button className='bg-transparent border-0' onClick={logout} style={{fontSize:'20px'}}><i class="fal fa-sign-out pr-1"></i> Logout</Button>
                </div>
            </div>
            <div className='pl-md-5 pl-3 mb-5 mb-lg-0'>
                <div className='row mx-0'>
                    <div className='col-lg-7 pl-0 pt-5 d-flex flex-column justify-content-between'>
                        <p className='text-color mb-0'>Our tool will be used for academic, business writers, content, and article writers. It will very helpful for students and teachers they can copy-paste the content or type the text and can easily check grammar, can remove plagiarism, and can search SEO keywords.Our toOl will also be very helpful for, business writers just like any organization creating content for a Website our "Content Management System" will help for grammar checking plagiarism remover and will suggest SEO keywords.</p>
                        <Plagiarism></Plagiarism>
                    </div>
                    <div className='col-lg-5  pl-0 pr-3 pr-sm-3 px-lg-0'>
                        <Grammersuggestion></Grammersuggestion>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard