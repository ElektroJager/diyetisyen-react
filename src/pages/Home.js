import Hero from '../components/Hero'
import OnlineDiyet from '../components/OnlineDiyet'
export default function Home(){
    return(
    <>    
        <Hero>
        </Hero>
        <OnlineDiyet>
        </OnlineDiyet>
        
        <div className="max-w-xl mx-auto grid gap-y-5">
            <h1 className="text-3xl font-bold text-center">
            Hello world!
            </h1>
            <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Button
            </button>
        </div>
    </>
    )
}