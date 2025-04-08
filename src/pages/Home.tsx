import { useLoaderData } from 'react-router-dom'
import heroBg from '../assets/hero-bg.jpg'

const Home = () => {
  const { welcomeMessage } = useLoaderData() as { welcomeMessage: string }

  return (
    <section>
      <div className="relative bg-gray-900 text-white font-sans">
        <img
          src={heroBg}
          alt="Solar panels"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight font-sans">
            Plan Smarter Solar Sharing
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300 font-light">
            Shadow Grid helps you simulate solar production and optimize
            peer-to-peer energy sharing between homes — before installation even
            begins.
          </p>
          <button className="mt-8 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl text-lg transition duration-300 shadow-lg font-sans">
            Start Planning
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
