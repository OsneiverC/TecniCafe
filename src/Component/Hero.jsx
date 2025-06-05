import TecnicafeLogoTipo from '../../public/LOGO TECNICAFE.png'

export default function Hero(){
    return (
        <section id="inicio" class="flex flex-col items-center justify-center text-center p-12 bg-[#f0ede4]">
            <img src={TecnicafeLogoTipo} alt="" className='w-57' />
            <h2 className="text-4xl font-bold text-[#3f3f1f] mb-4">Tecnología y Café para el Mundo</h2>
            <p className="text-lg text-[#555555] max-w-xl">Distribuimos maquinaria cafetera, repuestos y café de origen para quienes hacen del café una pasión.</p>
            <button className="mt-6 px-6 py-3 bg-[#3f3f1f] text-white rounded-full hover:bg-[#2c2c1c] transition">Explorar Productos</button>
        </section>
    )
}