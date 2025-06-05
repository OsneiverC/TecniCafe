import Bolsa from '../../public/BolsaCafeTransparente.png'
export default function BolsaCafe(){
    return (
         <section className="bg-white py-16 px-6 md:px-20 text-[#3f3f1f]">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* <!-- Imagen de bolsas de café --> */}
    <div className="flex justify-center">
      <img src={Bolsa} alt="Bolsas de café Tecnicafé" className="w-full max-w-md rounded-xl shadow-xl"/>
    </div>

    {/* <!-- Texto descriptivo --> */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro café, orgullo del Cesar</h2>
      <p className="text-lg mb-4 leading-relaxed">
        Cada bolsa representa el esfuerzo de caficultores comprometidos con la excelencia. En Tecnicafé ofrecemos café 100% colombiano, seleccionado a mano y tostado con precisión para garantizar un sabor inigualable.
      </p>
      <p className="text-lg mb-6 leading-relaxed">
        Empacado en bolsas selladas que conservan el aroma y frescura. Ideal para amantes del café y negocios que valoran la calidad premium.
      </p>
      <a href="https://wa.me/573001234567" target="_blank" className="inline-block bg-[#3f3f1f] hover:bg-[#6c6640] text-white font-bold py-3 px-6 rounded-full transition">
        ☕ Pedir nuestro café
      </a>
    </div>

  </div>
</section>
    )
} 