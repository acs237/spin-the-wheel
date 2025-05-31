import { useNavigate } from "react-router-dom";
import MyIntro from "./MyIntro";
import BlogPost from "./BlogPost";



const Home = () => {
    const navigate = useNavigate();
    const spinthewheel = () => {
        navigate('/spinthewheel');
    };
    const viewABlog = () => {
        const idElement = document.getElementById('numberInput') as HTMLInputElement | null;
        if (idElement && idElement.value) {
            const idNum = parseInt(idElement.value);
            navigate(`/blog/${idNum}`);
        } else {
            const errorDiv = document.getElementById('error');
            if (errorDiv) {
                errorDiv.textContent = 'Please enter a valid blog post number.';
            }
        }
    }
    return (
        <div>
            <div className='flex items-center justify-center w-full p-6'><h1 className='bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-5xl font-extrabold text-transparent'>Aye Chan San</h1></div>
            <MyIntro />
            
            <button
                onClick={spinthewheel}
                className={`px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg transform transition-all duration-200 `}
            >
                Wonder Awaits
            </button>
            
            <form id='blog post number'>
                <div className="form-group">
                    <label htmlFor="numberInput">Enter the blog post number</label>
                    <input type="number" id='numberInput' placeholder="Enter blog post number within range [1,3]" required />
                    <div id='error' className="error"></div>

                    <button type="button" onClick={viewABlog}>Let's go</button>
                </div>
            </form>
        </div>
    )
}

export default Home;