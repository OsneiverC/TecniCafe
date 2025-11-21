import Reparacion from '../../public/Reparacion.png'
import Mantenimieto from '../../public/mantenimiento.png'
import Taza from '../../public/taza-de-cafe.png'
import Maquina from '../../public/tostador.png'



export default function Servicio(){
    return(
     <section>
        <div className="lg:mx-30 text-[#3f3f1f] font-light py-16">

            <div className="mb-6 pl-4">
                <h3 className="font-bold text-4xl "> <span className='border-b-2 border-[#3f3f1f]'>Servicios Expecializados</span></h3>
                <span className='tracking-[0.4rem]'>En lo que somos expecialistas</span>
            </div>

            <div className="Cartas flex flex-col lg:flex-row items-center justify-center gap-14 ">
             

                <div className="Carta w-[300px] p-4 cursor-pointer hover:scale-105 transition-all">
                    <img src={Mantenimieto} className='' alt="Reparacion" />
                    <h4 className="font-bold text-3xl mb-4">Mantenimiento</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dicta quisquam distinctio veniam quis dolorum? Unde deserunt expedita perspiciatis qui facilis? Quaerat illum natus eum excepturi doloribus pariatur! Corrupti, quas!</p>
                </div>

                <div className="Carta w-[300px] p-4 cursor-pointer hover:scale-105 transition-all">
                    <img src={Taza} className='' alt="Reparacion" />
                    <h4 className="font-bold text-3xl mb-4">Nuestro Cafe</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dicta quisquam distinctio veniam quis dolorum? Unde deserunt expedita perspiciatis qui facilis? Quaerat illum natus eum excepturi doloribus pariatur! Corrupti, quas!</p>
                </div>

                <div className="Carta w-[300px] p-4 cursor-pointer hover:scale-105 transition-all">
                    <img src={Maquina} className='' alt="Reparacion" />
                    <h4 className="font-bold text-3xl mb-4">Despulpadoras</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dicta quisquam distinctio veniam quis dolorum? Unde deserunt expedita perspiciatis qui facilis? Quaerat illum natus eum excepturi doloribus pariatur! Corrupti, quas!</p>
                </div>
            </div>
        </div>
     </section>
    )
}