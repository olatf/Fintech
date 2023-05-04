

import React from 'react'
import Inputfeild from '../components/inputfeild'
// import axios from 'axios';
import  useState  from 'react'
// import Emailverifybutton from '../components/Buttons/Emailverifybutton'
import { NextApiRequest, NextApiResponse } from 'next';


// export default function handler(req:, NextApiRequest, res:, NextApiResponse) {
//   const formData = req.body;
//   // handle form data here
//   res.status(200).json({ message: 'Form submitted successfully' });
// }


const Application =() =>{


    // const [formData, setFormData] = useState({});

    // const handleInputChange = e => {
    //     const { name, value } = e.target;
    //     setFormData(prevState => ({
    //       ...prevState,
    //       [name]: value
    //     }));
    //   };

    //   const handleSubmit = async e => {
    //     e.preventDefault();
    //     try {
    //       const response = await axios.post('/api/form', formData);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    return (
       
            <div className='w-[85%] mx-auto items-center  py-3 rounded-lg mt-[60px]'>

                <form action="" method="post" className='flex' >

                <div className='w-[45%] mb-[160px] '>
                    <div className='flex justify-between max-w-[300px] items-center mx-4 mb-3 border-b border-slate-200'>
                    <h3>APPLICATION DATA</h3>
                        <span className='text-[15px] h-[20px] w-[20px] flex justify-center my-2' >X</span>
                    </div>
                    <h2 className='text-[16px] mx-3 mb-3'>Bussiness Information</h2>

                    <div className='w-[75%]'>
                    <Inputfeild
                        label='Business Name'
                        name='Business Name'
                        type='text'
                        
                        plholder='WMM CAPITAL ADVISORS,LLC'
                    />
                    <Inputfeild
                        label='Status'
                        name='Status'
                        type='text'
                        
                        plholder='Contact Out'
                    />
                    <Inputfeild
                        label='Status Description'
                        name='Status Description'
                        type='text'
                        
                        plholder='Contact Sent'
                    />
                    </div>

                    <div className='flex w-full mx-2 mt-[40px]'>

                        <div className='w-[45%] '>
                            <h2 className='text-[13px] text-black'>Bank Statement</h2>
                            <div className='flex '>
                                <Inputfeild
                                    type='text'
                                    read= 'true'
                                    plholder='+'
                                />
                                <Inputfeild
                                    type='text'
                                    read= 'true'
                                    plholder='+'
                                />
                                <Inputfeild
                                    type='text'
                                    read= 'true'
                                    plholder='+'
                                />
                            </div>
                        </div>
                        <div className='w-[30%]'>
                            <h2 className='text-[13px] text-black'>Application</h2>
                            <div className='flex gap-0'>
                                <Inputfeild
                                      type='text'
                                    read= 'true'
                                    plholder='+'
                                />
                                <Inputfeild
                                      type='text'
                                    read= 'true'
                                    plholder='+'
                                />
                             
                            </div>
                        </div>
                       
                    </div>

                </div>

                <div className='w-[55%]'>
                    <div className='flex justify-between max-w-[450px] items-center mx-4 mb-3 p-2 border-b border-slate-200'>
                    <h3>Additional Information</h3>
                    <h2 className='text-[13px] float-right ml-[50px]'>Edit</h2>
                    </div>
                    <h2 className='text-[16px] mx-3 mb-3'>Bussiness Information</h2>

                    <div className=' gap-1 w-full flex-1 '>
                  
                        <div className='flex'>
                                <div className='w-[40%]'>
                                
                                <Inputfeild
                                            label='Advanced Amount'
                                            name='Advanced Amount'
                                            type='text'
                                            read="True"
                                            
                                            plholder='$6,000.00'
                                        />
                                </div>
                                <div className='flex gap-3 w-[60%] '>
                                    <Inputfeild
                                            label='Commisson'
                                            name='Commisson'
                                            type='text'
                                            
                                            read="True"
                                            plholder='$750.00'
                                        />
                                        <Inputfeild
                                            label='%'
                                            name='percent'
                                            type='text'
                                            
                                            read="True"
                                            plholder='13.0k'
                                        />
                                </div>
                        </div>

                        <div className='flex gap-1 w-full flex-1 '>
                            <div className='w-[40%]'>
                                <Inputfeild
                                        label='Factor'
                                        name='Factor'
                                        type='text'
                                       
                                        read="True"
                                        plholder='149000'
                                    />
                                </div>
                            <div className='flex gap-3 w-[60%] '>
                                <Inputfeild
                                        label='Total fee'
                                        name='Total fee'
                                        type='text'
                                        
                                        read="True"
                                        plholder='$940.00'
                                    />
                            </div>

                        </div>
                        
                        <div className='flex gap-1 w-full flex-1 '>
                            <div className='w-[40%]'>
                                <Inputfeild
                                        label='Payback'
                                        name='Payback'
                                        type='text'
                                        read="True"
                                       
                                        plholder='$8,900.00'
                                    />
                                </div>
                            <div className='flex gap-3 w-[60%] '>
                                <Inputfeild
                                        label='Term'
                                        name='Term'
                                        type='text'
                                        read="True"
                                        
                                        plholder='91'
                                    />
                                    <Inputfeild
                                        label='Frequency'
                                        name='Frequency'
                                        type='text'
                                       
                                        read="True"
                                        plholder='Daily'
                                    />
                            </div>

                        </div>

                        <div className='flex gap-1 w-full flex-1 '>
                            <div className='w-[40%]'>
                                <Inputfeild
                                        label='Payment'
                                        name='Payment'
                                        type='text'
                                        read="True"
                                        
                                        plholder='$99.00'
                                    />
                                </div>
                            <div className='flex gap-3 w-[60%] '>
                                <Inputfeild
                                        label='Not Funding Amount'
                                        name='Not Funding Amount'
                                        type='text'
                                        
                                        read="True"
                                        plholder='$5,406.00'
                                    />
                            </div>

                        </div>

                        <div className='mt-[90px] flex justify-center gap-4 items-center w-[50%] mx-[100px]'>

                            <button type='submit' className='px-4 py-2 rounded-lg bg-slate-100 focus:border-solid focus:border-blue-900 outline-none  mb-4 ' >Submit</button>
                            <h2 className='mt-[-15px]'>request additional info</h2>

                        {/* <Emailverifybutton
                            title = 'request additional info'
                        /> */}

                    </div>
                        
                    

                    </div>
                
                </div>

                </form>

            </div>

    )

}

export default Application