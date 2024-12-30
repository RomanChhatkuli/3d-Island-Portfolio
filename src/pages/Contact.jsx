import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import Avatar from '../models/Avatar'
import toast from 'react-hot-toast'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isLoading, setIsLoading] = useState(false)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!emailRegex.test(formData.email)) {
      toast.error("Email invalid format.")
      return false
    }
    setIsLoading(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Roman",
          from_email: formData.email,
          to_email: "romanchhatkuli09@gmail.com",
          message: formData.message
        },
        import.meta.env.VITE_PUBLIC_KEY
      ).then(() => {
        toast.success("Message Send Successfully")
      }).catch((e) => {
        toast.error("Some Error has occured")
      }).finally(() => {
        setIsLoading(false)
      })
    } catch (error) {
      console.log("Error in emailjs", error)
    }

    setFormData({
      name: "",
      email: "",
      message: ""
    })
  }


  function adjustAvatar() {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [3, 3, 3]
      screenPosition = [0, -3, 0]
    }
    else {
      screenScale = [9, 9, 9]
      screenPosition = [0, -8, -15]
    }
    return [screenScale, screenPosition]
  }
  const [avatarScale, avatarPostion] = adjustAvatar()

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-screen'>

      <div className='min-w-[60%] flex-1 flex flex-col  md:mt-6'>
        <h1 className='head-text mb-4 mt-[-40px]'>Get in Touch</h1>

        <form className='sm:w-[85%]' onSubmit={handleSubmit}>

          <label htmlFor="name" className='font-semibold'>Name</label>
          <input type="text" id='name' name='name' value={formData.name} placeholder='John Doe' className='input mb-1 sm:mb-2' required onChange={handleChange} />

          <label htmlFor="email" className='font-semibold'>Email</label>
          <input type="text" id='email' name='email' value={formData.email} placeholder='you@example.com' className='input mb-1 sm:mb-2' required onChange={handleChange} />

          <label htmlFor="message" className='font-semibold'>Message</label>
          <textarea className='textarea' id='message' value={formData.message} rows={window.innerWidth<768 ? 2 : 4} name='message' placeholder='Enter message here' required onChange={handleChange} />

          <button className='btn btn-success mt-2 sm:mt-6' disabled={isLoading} type='submit'>
            {isLoading ? "Sending" : "Send Message"}
          </button>

        </form>
      </div>

      <div className='lg:w-1/2 w-full md:h-[500px] h-[390px] mt-[-20px] md:mt-0'>
        <Canvas
          camera={{ near: 0.1, far: 1000 }}
        >
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <ambientLight intensity={1} />
          <hemisphereLight intensity={1} />
          <Avatar scale={avatarScale} position={avatarPostion} />
        </Canvas> 
      </div>

    </section>
  )
}

export default Contact