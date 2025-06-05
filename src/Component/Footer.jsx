
export default function Footer() {
  return (
    <footer class="bg-[#3f3f1f] text-white py-10">
  <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
    <div class="text-center md:text-left">
      <h2 class="text-xl font-bold tracking-wide">TECNICAFÉ DEL CESAR</h2>
      <p class="text-sm text-[#d2d2c2] mt-1">Pasión por el café y la innovación agroindustrial</p>
    </div>

    <div class="flex gap-6 text-[#d2d2c2]">
      <a href="#inicio" class="hover:text-[#6c6640] transition">Inicio</a>
      <a href="#productos" class="hover:text-[#6c6640] transition">Productos</a>
      <a href="#contacto" class="hover:text-[#6c6640] transition">Contacto</a>
    </div>

    <div class="text-sm text-[#d2d2c2] text-center md:text-right">
      <p>&copy; 2025 Tecnicafé del Cesar. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

  );
}
