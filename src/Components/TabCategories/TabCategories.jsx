import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobCard/JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabCategories = () => {
    const [jobs, setJobs]= useState([])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/jobs`)
        .then(res=>setJobs(res.data))
    }, [])
    // console.log(jobs);
    return (
        <div className='max-w-[1185px] mx-auto mb-24'>
            <h1 className='text-2xl lg:text-3xl text-center capitalize mb-4'>Browse Jobs By Categories</h1>
            <p className='max-w-2xl mx-auto text-center mb-4'>Three categories available for the time being. They are Web Development,
                Graphics Design and Digital Marketing. Browse them by clicking on the
                tabs below.</p>
            <Tabs >
                <div className='flex justify-center items-center mb-8'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>

                </div>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            jobs.filter(j=> j.category === 'Web Development').map(job=><JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            jobs.filter(j=> j.category === 'Graphics Design').map(job=><JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            jobs.filter(j=> j.category === 'Digital Marketing').map(job=><JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabCategories;