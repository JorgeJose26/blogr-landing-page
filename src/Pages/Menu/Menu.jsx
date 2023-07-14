
import "./Menu.scss";
import logo from "../../Assets/images/logo.svg";
import close from "../../Assets/images/icon-close.svg";
import arrow from "../../Assets/images/icon-arrow-dark.svg"
import { useNavigate } from "react-router-dom"






function Menu(props) {
    const navigate = useNavigate();
    const connectList = document.getElementsByClassName("dropdown");
    console.log(connectList);

    const handleDropDown = () => {


        for (var i = 0; i < connectList.length; i += 1) {

            if (connectList[i].style.display === 'none') {
                connectList[i].style.display = 'flex';
            } else {
                connectList[i].style.display = 'none';
            }


        }

    }
    return (
        <body className='bg-slate-100 h-screen'>
            <div className='menu h-[35rem] rounded-bl-[5rem] '>
                <div className='flex flex-row justify-between items-center pl-6 pr-6 pt-[3.5rem]'>
                    <img className='' onClick={() => navigate(`/`)} src={logo} alt='logo' />
                    <img src={close} alt='close' onClick={() => navigate(`/`)} />
                </div>

                <div className='absolute bg-white h-[28rem] w-[21rem] pt-[2rem] rounded-lg flex flex-col items-center top-[8rem] left-[1.2rem] gap-[1rem] '>

                    <button className='text-[#1F3F5B] text-lg'>Product <img className='inline' src={arrow} alt='arrow' /></button>
                    <button className='text-[#1F3F5B] text-lg'>Company <img className='inline' src={arrow} alt='arrow' /></button>
                    <button className='text-[#1F3F5B] text-lg' onClick={handleDropDown}>Connect <img className='inline ' src={arrow} alt='arrow' /></button>
                    <div className='dropdown flex-col bg-slate-200 w-[17rem] h-[10rem] pt-[2rem] gap-[0.5rem] rounded-md '>
                        <a href="/" className='text-[#4B5862]'>Contact</a>
                        <a href="/" className='text-[#4B5862]'>Newletter</a>
                        <a href="/" className='text-[#4B5862]'>Linkedln</a>
                    </div>





                    <div className='flex flex-col gap-[1rem] w-[18rem]'>
                        <hr className='solid' />
                        <button className='text-[#1F3F5B] text-lg'>Login</button>
                        <button className='signup rounded-full p-[0.5rem] text-white text-lg ml-[4rem] mr-[4rem] mb-[2rem]'>Sign Up</button>
                    </div>







                </div>

            </div>

        </body>

    );
}

export default Menu;