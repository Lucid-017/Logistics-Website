import {FiPhoneCall} from 'react-icons/fi'
import {BsCalendarWeek} from 'react-icons/bs'
import {GrMapLocation} from 'react-icons/gr'
const ReachUs =()=>{

    return(
        <div className="">
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 bg-ash-600 p-20">
                    <div className="flex ">
                        <div className="icon gap-5 text-4xl self-center px-5">
                            <FiPhoneCall/>
                        </div>
                        <div className="text capitalize">
                            <h4 className='text-2xl text-black mb-2 font-semibold uppercase'>
                                Call Center
                            </h4>
                            <p>Give us a call +123 90-233-3444</p>
                            <p>090222333444</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="icon gap-5 text-4xl self-center px-5">
                            <BsCalendarWeek/>
                        </div>
                        <div className="text capitalize">
                            <h4 className='text-black text-2xl mb-2 font-semibold uppercase'>
                                Working Hours
                            </h4>
                            <p>mon-sat: 7am-5pm sunday: 9am-3pm</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="icon gap-5 text-4xl self-center px-5">
                            <GrMapLocation/>
                        </div>
                        <div className="text capitalize">
                            <h4 className='text-black text-2xl mb-2 font-semibold uppercase'>
                                our location
                            </h4>
                            <p>9 anipole crescent soluyi gbagada,lagos state,nigeria</p>
                   
                        </div>
                    </div>
                </div>
           
        </div>
    )
}

export default ReachUs