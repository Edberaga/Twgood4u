import {toast} from 'react-toastify';
import background from './assets/images/1.jpg'
import logo from './assets/images/logo.png'
import './assets/scss/style.scss'
import './assets/scss/icons.scss'
import './assets/js/theme'
import Notify from './component/Notify';

function App() {
  const notify = () => toast("Wow so easy!");

  return (
  <>
    <section class="py-20 relative md:h-screen flex justify-center items-center px-6" id="home">
        <div class="overflow-hidden">
            <img class="absolute inset-0 h-full w-full object-cover" src={background} alt="build your website image"/>
            <div class="absolute inset-0 w-full h-full bg-gradient-to-b from-neutral-800/70 to-slate-900/80"></div>
        </div>

        <div class="container">
            <div class="flex items-center justify-center relative">
                <div class="max-w-xl text-center text-white py-20">
                    <a href="#" class="flex justify-center mx-auto mb-12"><img src={logo} alt="logo" class="h-12"/></a>
                    <h2 class="text-4xl mb-7">We Are Coming Soon...</h2>
                    <p class="text-neutral-300">We are currently working on our new website.<br/>We will be here soon, We will notify you when we finish the Sites!.</p>
                    <Notify/>
                </div>
            </div>

            <div class="opacity-75 pt-20">
                <div class="flex items-center justify-center gap-4">
                    <a href="#">
                        <div class="w-10 h-10 bg-neutral-500/50 rounded-full flex items-center justify-center">
                            <i class="fa-brands fa-facebook-f text-green-500 hover:text-emerald-400 text-xl"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div class="w-10 h-10 bg-neutral-500/50 rounded-full flex items-center justify-center">
                            <i class="fa-brands fa-instagram text-green-500 hover:text-emerald-400 text-xl"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div class="w-10 h-10 bg-neutral-500/50 rounded-full flex items-center justify-center">
                            <i class="fa-brands fa-twitter text-green-500 hover:text-emerald-400 text-xl"></i>
                        </div>
                    </a>
                    <a href="#">
                        <div class="w-10 h-10 bg-neutral-500/50 rounded-full flex items-center justify-center">
                            <i class="fa-brands fa-youtube text-green-500 hover:text-emerald-400 text-xl"></i>
                        </div>
                    </a>
                </div>
                <p class="text-white text-center pt-7">
                    All right Reserved &copy; 2023. Powered by
                    <b><a href="https://www.saysheji.com" target='_blank'> Saysheji.</a></b>
                </p>
            </div>
        </div>
    </section>
  </>
  )
}

export default App
