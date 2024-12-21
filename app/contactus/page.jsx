"use client"
import { addDoc, collection } from 'firebase/firestore'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone } from 'react-icons/fa'
import { FaHouse, FaXTwitter } from 'react-icons/fa6'
import { db } from '@/lib/firebaseConfig';

const contactus = () => {
    
    const initVal = {
        userName:"",
        userEmail:"",
        userPhone:"",
        message:""
    }

    const validationSchema = Yup.object({
        userName: Yup.string().required('required'),
        userEmail: Yup.string().required('required').email('not an email address'),
        userPhone: Yup.string().required('required').min(11).max(13),
        message: Yup.string().min(15)
    })

    const handleSubmit = async (values, {resetform})=>{
try {
    const message = {
        name: values.userName,
        email: values.userEmail,
        phone: values.userPhone,
        message: values.message,
       time: new Date().toLocaleString(),
        timestamp: new Date().getTime()
    }
    const docRef = collection(db, "message")
    await addDoc(docRef, message)
    
    alert("Form submitted succesfully")
    console.log("Form submitted", values)
    resetform()
} catch (error) {
    console.error('Error submitting form')
    alert('Form not submitted')
  }
    }
    return (
        <main className='flex max-md:grid'>
            <div className='border border-transparent h-dvh w-1/2 max-md:w-full flex  flex-col   '>
                <div >
                    <p className='bg-gray-800 text-white flex items-center justify-center text-lg w-full uppercase font-serif'>get in touch</p>
                    <p className='text-gray-800'>We'd love to hear from you, please fill the form below and we'll respond within 24 hours</p>

                </div>
                <Formik
                initialValues={initVal}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}

                
                >

                <Form
                    className='w-[80%] border border-black shadow-lg h-[90%] max-lg:h-[75%] rounded-md mx-auto  '
                >
                    <p className='bg-gray-800 uppercase font-serif rounded-t-md flex items-center justify-center h-[10%] text-lg font-bold max-lg:h-[5%] text-white'>contact form</p>
                    <div className='w-full p-2'>

                        <label className='font-serif font-bold text-lg p-2 '>Name:</label>
                        <Field 
                        placeholder="Enter your name"
                        name="userName"
                        type="text" 
                        className='w-[80%] border outline-none border-black '
                        
                        />
                        <ErrorMessage
                        name='userName'
                        component={'p'}
                        className='text-sm text-red-500 mt-1'
                        />
                    </div>

                    <div className='w-full p-2'>

                        <label className='font-serif font-bold text-lg p-2 '>Email:</label>
                        <Field
                         placeholder="Enter your email"
                        name="userEmail"
                         type='email' 
                         className='w-[80%]  border outline-none border-black' />
                         <ErrorMessage
                        name='userEmail'
                        component={'p'}
                        className='text-sm text-red-500 mt-1'
                        />
                    </div>
                    <div className='w-full p-2'>

                        <label className='font-serif font-bold text-lg  '>Phone:</label>
                        <Field 
                         placeholder="Enter your phone number"
                        name="userPhone"
                        type='number'
                         className='w-[80%]  border outline-none border-black' />
                         <ErrorMessage
                        name='userPhone'
                        component={'p'}
                        className='text-sm text-red-500 mt-1'
                        />
                    </div>

                    

                    <div className='w-full p-2 flex flex-col'>

                        <label className='font-serif font-bold text-lg p-2 '>Message:</label>
                        
                        <Field
                        name= 'message'
                        placeholder='Enter your message here'
                        type='text'
                        
                        
                        />

                        
                        
                        <ErrorMessage
                        name='message'
                        component={'p'}
                        className='text-sm text-red-500 mt-1'
                        />
                    </div>
                    <div className='flex items-center justify-center pt-10'>

                        <button type='submit' className='bg-gray-800 rounded-md w-[5rem] hover:scale-125 text-white p-2'>SUBMIT</button>
                    </div>

                </Form>
                </Formik>
            </div>
            <div className='border h-dvh w-1/2 max-md:w-full border-transparent '>
                <div className='flex flex-col font-serif gap-8'>
                    <div className='font-bold w-full bg-gray-800 font-serif uppercase flex items-center justify-center text-white'>
                        contact information
                    </div>
                    <div className='flex gap-2 items-center '>
                    <FaHouse className='text-2xl'/>
                  <p className='text-lg text-gray-800'>Address: 1st floor, Thermocool plaza, Gado Nasko Road, Kubwa, Abuja, Nigeria.  </p>
                        
                    </div>
                    <div  className='flex gap-2 items-center  '>
                    <FaMailBulk className='text-2xl'/>
                    <p className='text-lg text-gray-800 cursor-pointer'>Email: earlymart@gmail.com</p>

                    </div>
                    <div  className='flex gap-2 items-center '>

                    <FaPhone className='text-2xl'/>
                    <p className='text-lg text-gray-800 cursor-pointer'>Phone: 08074787421, 090875645362</p>
                    </div>
                </div>
                <div className='flex flex-col font-serif pt-32 gap-8'>
                    <div className='font-bold w-full bg-gray-800 font-serif uppercase flex items-center justify-center text-white '>
                        contact us on social media
                    </div>
                    <div  className='flex gap-2 items-center '>
                        <FaFacebook className='text-2xl'/>
                    <p className='text-lg text-gray-800 cursor-pointer'>Facebook:@earlymart</p>

                    </div>
                    <div  className='flex gap-2 items-center '>
                        <FaInstagram className='text-2xl'/>
                    <p className='text-lg text-gray-800 cursor-pointer'>Instagram:@earlymart</p>
                    </div>
                    <div  className='flex gap-2 items-center '>
                        <FaXTwitter className='text-2xl'/>
                    <p className='text-lg text-gray-800 cursor-pointer'>Twitter:@earlymart</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
//what is react 
//what is nodejs
//what is nextjs
//what is jsx
//component in react
//write a function that reverses a string e.g "hello"

export default contactus
//create an account with vercel.com