import LogoTecnicafe from '../../public/LOGO TECNICAFE.png'
import MaquinaLogo from '../../public/MaquinaLogo.png'

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
                <img src={MaquinaLogo} alt="Logo Tecnicafé" className="w-16 h-16" />
                <h1 className="text-2xl font-bold text-[#3f3f1f]">TECNICAFÉ DEL CESAR</h1>
            </div>
            <nav className="space-x-4 flex items-center">
                <a href="#inicio" className="text-[#3f3f1f] hover:text-[#6c6640] font-semibold flex items-center gap-1"><i className="ph ph-house"></i>Inicio</a>
                <a href="#productos" className="text-[#3f3f1f] hover:text-[#6c6640] font-semibold flex items-center gap-1"><i className="ph ph-coffee"></i>Productos</a>
                <a href="#maquinaria" className="text-[#3f3f1f] hover:text-[#6c6640] font-semibold flex items-center gap-1"><i className="ph ph-factory"></i>Maquinaria</a>
                <a href="#servicios" className="text-[#3f3f1f] hover:text-[#6c6640] font-semibold flex items-center gap-1"><i className="ph ph-wrench"></i>Servicios</a>
                <a href="#nosotros" className="text-[#3f3f1f] hover:text-[#6c6640] font-semibold flex items-center gap-1"><i className="ph ph-users"></i>Nosotros</a>
                <a href="#contacto" className="text-[#3f3f1f] hover:text-[#6c6640] font-semibold flex items-center gap-1"><i className="ph ph-chat"></i>Contacto</a>
            </nav>
        </header>
    );
}
