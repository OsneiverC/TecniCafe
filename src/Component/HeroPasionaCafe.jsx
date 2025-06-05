

export default function HeroPasionCafe(){
    return(
     <section className="bg-[url('../public/ArreglarMaquinaCafe.png')] bg-cover bg-center text-white min-h-[80vh] flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div class="relative z-10 text-center px-6 max-w-2xl">

        
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Pasión por el café, compromiso con el campo</h1>
        
        <p class="text-lg md:text-xl mb-6">
          Venta, reparación e instalación de maquinaria cafetera. Calidad y respaldo en cada servicio.
        </p>
        
        <a href="https://wa.me/573001234567" target="_blank" className="inline-block bg-[#6c6640] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition">
           Escríbenos por WhatsApp
        </a>
      </div>
    </section>
    )
}