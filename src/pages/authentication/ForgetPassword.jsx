import React, { useState } from 'react'
import './ForgetPassword.css'
import { AiFillEye } from 'react-icons/ai';
import Modal from '../../components/authentication/Modal'
import { Good, three } from "../../assets/index";
import { ToastContainer, toast } from 'react-toastify';

const ForgetPassword = () => {
    
    const[form, setForm] = useState({
        password: ''
    })
    const[conFam, setConfam] = useState({
        passy: ''
    })
    const[modalOpen, setModalOpen] = useState(false)

    const setNewPassword = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        sessionStorage.setItem('user', JSON.stringify(form))
    }
    console.log(form)

    const confirmPassword =(e)=>{
        setConfam({
            ...conFam,
            [e.target.name] : e.target.value
        })
       
    }
    console.log(conFam)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        const user = JSON.parse(sessionStorage.getItem('user'))
        if(conFam?.confirm === user?.password){
            setModalOpen(true)  
        }
        else(    
            toast.error('passwords do not correspond')
        )        
    }
    return (
    <div className='wrapper flex'>
         <ToastContainer />
        <div className='conic-bg'>
        <div className='bg-trans flex flex-col items-center justify-center text-center text-white'>
           <h1 className='text-4xl font-extrabold pb-4'>Kodecamp LMS</h1> 
           <p>Learning has been made simple, interactive and fun.</p>
        </div>
        </div> 
       <div className='ash-bg'>
        <div className='bg-form '>
            <div className='inner '>
                <div className='text flex flex-col items-center justify-center'>
                {/* <img src={Logo} height = {50} width= {50} alt='logo' className='pt-3' /> */}
                    <h2 className='pt-5'>Create new password</h2>
                    <div className='flex gap-5 flex-wrap pt-3  '>
                        <img src={Good} alt='good' />
                        <img src={Good} alt='good' />
                        <img src={three} alt='three' />
                    </div>
                    <p className='pt-3'>Kindly set a new password and confirm the password</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col mt-3 relative'>
                        <label>Password</label>
                        <input placeholder='Type new password'style={{'border': '1px solid black'}}
                        className='px-5'
                        name='password' onChange={setNewPassword}
                        />
                        <AiFillEye className='absolute right-2 bottom-3' />
                    </div> 
                    <div className='flex flex-col mt-4 relative'>
                        <label>Confirm Password</label>
                        <input placeholder='Type your password again' 
                        style={{'border': '1px solid black'}}
                        className='px-5'/>
                        <AiFillEye className='absolute right-2 bottom-3' 
                        name='passy' onChange={confirmPassword}
                        />
                    </div> 
                    <button className='mt-4 bg-blue-500'
                        style={{'border': '1px solid black', 'width' : '100%', 'color':'white'}}>
                         Save Password</button>
                        <div className='text-center pt-3'>
                            <span>Remember Password?</span>
                            <span className='text-blue-500'>Log in</span>
                        </div>
                </form>
            </div>
        </div>
       </div>
       {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  )
}

export default ForgetPassword