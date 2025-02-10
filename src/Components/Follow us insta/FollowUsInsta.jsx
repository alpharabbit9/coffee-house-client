import cup1 from '../../assets/images/cups/Rectangle 9.png'
import cup2 from '../../assets/images/cups/Rectangle 10.png'
import cup3 from '../../assets/images/cups/Rectangle 11.png'
import cup4 from '../../assets/images/cups/Rectangle 12.png'
import cup5 from '../../assets/images/cups/Rectangle 13.png'
import cup6 from '../../assets/images/cups/Rectangle 14.png'
import cup7 from '../../assets/images/cups/Rectangle 15.png'
import cup8 from '../../assets/images/cups/Rectangle 16.png'

const FollowUsInsta = () => {
    return (
        <div className="mt-8 mb-6">

           <div className="text-center mt-6 mb-6">
           <p className="text-[#331A15]">--- Follow Us Now --- </p>
           <h3 className=" mt-3 mb-3 font-bold text-3xl text-[#331A15]">Follow on Instagram</h3>
           </div>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
            <div className='rounded-3xl  transform transition-transform duration-300 hover:scale-105'>
                <img src={cup1} />
            </div>
            <div className='rounded-3xl  transform transition-transform duration-300 hover:scale-105'>
                <img src={cup2} />
            </div>
            <div className='rounded-3xl  transform transition-transform duration-300 hover:scale-105'>
                <img src={cup3} />
            </div>
            <div className='rounded-3xl  transform transition-transform duration-300 hover:scale-105'>
                <img src={cup4} />
            </div>
            <div className='rounded-3xl  transform transition-transform duration-300 hover:scale-105'>
                <img src={cup5} />
            </div>
            <div className='rounded-3xl  transform transition-transform duration-300 hover:scale-105'>
                <img src={cup6} />
            </div>
            <div className='rounded-3xl  transform transition-transform duration-300 hover:scale-105'>
                <img src={cup7} />
            </div>
            <div className='rounded-3xl transform transition-transform duration-300 hover:scale-105'>
                <img src={cup8} />
            </div>
           </div>
            
        </div>
    );
};

export default FollowUsInsta;