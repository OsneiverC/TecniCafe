import Zaranda from '../../public/Zaranda.png'

export default function HeroZaranda(){
    return (
        <section className="bg-[#f0ede4] py-16 px-6 md:px-20 text-[#3f3f1f]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


        {/* <!-- Texto y formulario --> */}
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Cotiza tu Zaranda</h2>
          <p class="text-lg mb-6">
            La zaranda para máquina de café es uno de nuestros productos más solicitados por su durabilidad y eficiencia. 
            Si deseas conocer el precio, disponibilidad y opciones de envío, déjanos tus datos y te contactamos.
          </p>

          <form action="https://formsubmit.co/tucorreo@ejemplo.com" method="POST" class="space-y-4">
            <input type="text" name="nombre" placeholder="Tu nombre" required class="w-full border border-gray-300 px-4 py-2 rounded-md"/>
            <input type="tel" name="telefono" placeholder="Teléfono o WhatsApp" required class="w-full border border-gray-300 px-4 py-2 rounded-md"/>
            <input type="email" name="email" placeholder="Correo electrónico (opcional)" class="w-full border border-gray-300 px-4 py-2 rounded-md"/>
            <textarea name="mensaje" rows="3" placeholder="¿Qué necesitas cotizar exactamente?" class="w-full border border-gray-300 px-4 py-2 rounded-md"></textarea>

            <button type="submit" class="bg-[#3f3f1f] hover:bg-[#6c6640] text-white font-bold py-2 px-6 rounded-full transition">
             Enviar Cotización
            </button>
          </form>
        </div>
        {/* <!-- Imagen de la zaranda --> */}
        <div class="flex justify-center">
          <img src={Zaranda} alt="Zaranda para máquina de café" class="rounded-xl shadow-xl max-w-md w-full"/>
        </div>

        </div>  
      </section>
    )
}