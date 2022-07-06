import { TiTick  } from 'react-icons/ti';
import { useState } from 'react';

function OnlineDiyet(){
    const [firstName, setFirstName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName);
    }
    return(
        <>
            <div className="max-w-screen h-fit mx-auto mt-16 bg-slate-100 justify-center">
                <h1 className="text-4xl font-Roboto text-center p-8 font-medium">
                    Neden online diyet?
                </h1>
                <p className="font-Roboto text-center p-4">
                    Yoğun iş temposu, aile yaşantınız veya çocuklarınızdan kendinize vakit ayıramıyor olabilirsiniz, öyleyse online diyet tam size göre.
                </p>
                <div className="grid grid-cols-3 mt-4 gap-8 max-w-xl mx-auto font-Roboto text-center">
                    <div className='flex'>
                        <TiTick className="h-12"/>
                        Daha fazla iletişim
                    </div>
                    <div className='flex'>
                        <TiTick className="h-12"/>
                        Daha hızlı iletişim
                    </div>
                    <div className='flex'>
                        <TiTick className="h-12"/>
                        Daha motive edici
                    </div>
                    <div className='flex'>
                        <TiTick className="h-12"/>
                        Ulaşım sorunu yok
                    </div>
                    <div className='flex indent-4'>
                        <TiTick className="h-12"/>
                        Zaman kaybı yok
                    </div>
                    <div className='flex'>
                        <TiTick className="h-12"/>
                        Daha etkili sonuçlar
                    </div>
                </div>
                <div class="border-t-2 border-slate-200 rounded-md m-10"></div>
                <h1 className="text-4xl font-Roboto text-center font-medium">
                    Online Diyete Başla
                </h1>
                <div className='max-w-4xl mx-auto mt-8 flex'>
                    <img className="rounded-lg h-96 w-96" src="/diyetisyen-image.jpg" alt="BigCo Inc. logo"/>
                    <div className='flex-col'>
                        <h2 className="text-2xl font-Roboto text-center font-semibold">
                            Formu doldur hemen başla
                        </h2>
                        <p className="font-Roboto text-center p-4">
                            Diyete başlamadan önce sizi daha yakından tanıyabilmek için aşağıda ki formu doldurarak başlayabilir, sizinle ilgili olan tüm sorulara cevap vebilirsiniz.
                        </p>
                
                        <form onSubmit={handleSubmit}>
                            <div className="col-span-6 sm:col-span-3 ml-8">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Adınız</label>
                                <input type="text" name="first-name" id="first-name" onChange={e => setFirstName(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                            </div>
                            <div className="col-span-6 sm:col-span-3 ml-8 mt-2">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Soyadınız</label>
                                <input type="text" name="first-name" id="first-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                            </div>
                            <div className="col-span-6 sm:col-span-3 ml-8 mt-2">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Kilonuz</label>
                                <input type="text" name="first-name" id="first-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></input>
                            </div>
                            <div className="col-span-6 sm:col-span-3 ml-8 mt-3 text-right">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Hemen Başla</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default OnlineDiyet