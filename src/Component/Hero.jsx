import TecnicafeLogoTipo from '../../public/LOGO TECNICAFE.png'
import Cafeto from '../../public/Cafeto.png'
export default function Hero(){
    return (
        <section id="inicio" class="flex flex-col items-center justify-center text-center p-12 bg-[#f0ede4] relative overflow-hidden">
            <img src={Cafeto} alt="" className='absolute w-4xl left-[-15rem] rotate-[-30deg] overflow-hidden hidden xl:block'/>
            <img src={TecnicafeLogoTipo} alt="" className='w-57' />
            <h2 className="text-4xl font-bold text-[#3f3f1f]">Tecnología y Café para el Mundo</h2>
            <p className="text-lg text-[#555555] max-w-xl">Distribuimos maquinaria cafetera, repuestos y café de origen para quienes hacen del café una pasión.</p>
            <button className="mt-6 px-6 py-3 bg-[#3f3f1f] text-white rounded-full hover:bg-[#2c2c1c] transition flex items-center justify-center gap-2">Explorar Productos <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-compact-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 4l3 8l-3 8" /></svg></button>
        </section>
    )
}