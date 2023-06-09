

import React from 'react'
import API from '../../components/API';
import Application from '../../components/application'
import axios from 'axios';
import { getCookie } from '../../utils/helpers';
import { parseCookies } from 'nookies';


const ApplicationDetail = ({ application, pdfs, fundersResponse, submittedApplications }) => {
    // console.log(application, pdfs,fundersResponse,submittedApplications);
    return (

        <div className='w-[90%] mx-auto rounded-lg mt-[60px]'>

            {application && <Application
                application={application}
                defaultPdfs={pdfs}
                fundersResponse={fundersResponse}
                submittedApplications={submittedApplications}
            />}

        </div>
    )
}

export default ApplicationDetail

export async function getServerSideProps(context) {
    // const cookies = context.req.cookies;
    const cookies = parseCookies(context)
    const appRes = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/applications/${context.params.applicationId}/`, {
        headers: {
            //  'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${cookies['jwt']}`
         },
         withCredentials: true,
    }).catch(err => { console.log(err) });

    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/applications/${context.params.applicationId}/pdfs/`
    const response = await axios.get(baseUrl, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies['jwt']}`
        },
        withCredentials: true,
    }).catch(err => { console.log(err) });

    const fundersResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/funders/`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies['jwt']}`
        },
        withCredentials: true
    }).catch(err => {
        // console.log(err);
    })

    const submittedApplications = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/submittedApplications/${context.params.applicationId}/`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${cookies['jwt']}`
        },
        withCredentials: true,
    }).catch(err => {
        console.log(err);
    })

    return {
        props: {
            application: appRes?.data ?? {},
            pdfs: response?.data ?? {},
            fundersResponse: fundersResponse.data ?? {},
            submittedApplications: submittedApplications.data ?? {},
        }
    };
}

// export async function getStaticProps({ params, req }) {
//     console.log(req?.headers);
//     const cookies = req?.headers?.cookie;
//     console.log(cookies);
//     const appRes = await API.get(`/${params.applicationId}/`)

//     const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/applications/${params.applicationId}/pdfs/`
//     const response = await axios.get(baseUrl, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${cookies['jwt']}`
//         },
//         withCredentials: true,
//     }).catch(err => { console.log(err)});

//     const fundersResponse = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/funders/`, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${cookies['jwt']}`
//         },
//         withCredentials: true
//     }).catch(err => {
//         console.log(err);
//     })

//     const submittedApplications = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/submittedApplications/${params.applicationId}/`, {
//         headers: {
//             'Accept': 'application/json',
//             'Authorization': `Bearer ${cookies['jwt']}`
//         },
//         withCredentials: true,
//     }).catch(err => {
//         console.log(err);
//     })

//     return {
//         props: {
//             application: appRes.data ?? {},
//             pdfs: response.data ?? {},
//             fundersResponse: fundersResponse.data ?? {},
//             submittedApplications: submittedApplications.data ?? {},
//         }
//     };
// }

// export async function getStaticPaths(props) {
//     console.log(props);
//     // const cookies = req.headers.cookie;
//     const apps = await axios.get('${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/applications/', {
//         headers: {
//             "Content-Type": 'application/json',
//             // 'Authorization': `Bearer ${cookies['jwt']}`
//         },
//         withCredentials: true
//     }).catch(err => {
//         // console.log(err);
//     });
    
//     console.log(apps?.data);

//     const paths = apps?.data?.map(app => ({ params: { applicationId: app?.application_id } })) ?? [];
//     return { paths, fallback: false };
// }