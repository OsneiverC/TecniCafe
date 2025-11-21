
export default function Ubicacion(){
  return (
    <section className="bg-[#f0ede4] py-16 px-6 md:px-20 text-[#3f3f1f]">
           <div className="max-w-6xl mx-auto grid md:grid-cols-2  gap-12 items-center">
     
             {/* <!-- Imagen de la zaranda --> */}
             <div className="flex justify-center">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.484889380781!2d-73.25072422491577!3d10.462388589667931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab981037791b5%3A0xf361e5f5a73d8742!2sTecniCafe%20del%20Cesar!5e0!3m2!1ses!2sco!4v1762012965728!5m2!1ses!2sco" className="w-full" height="450" style={{ border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             </div>
     
     
             {/* <!-- Texto y formulario --> */}
             <div>
               <h2 class="text-3xl md:text-4xl font-bold mb-4 "><span className="border-b-2">Ubicacion</span></h2>
               <p class="text-lg mb-6">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis deserunt culpa impedit! Vitae, nisi rem accusantium perferendis magnam eos, magni consequatur porro natus voluptatem, eaque at fugit saepe unde!
               </p>
                <button className="bg-[#3f3f1f] flex gap-2 hover:bg-[#6c6640] text-white font-bold py-2 px-6 rounded-full transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-google-maps"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" /><path d="M6.428 12.494l7.314 -9.252" /><path d="M10.002 7.935l-2.937 -2.545" /><path d="M17.693 6.593l-8.336 9.979" /><path d="M17.591 6.376c.472 .907 .715 1.914 .709 2.935a7.263 7.263 0 0 1 -.72 3.18a19.085 19.085 0 0 1 -2.089 3c-.784 .933 -1.49 1.93 -2.11 2.98c-.314 .62 -.568 1.27 -.757 1.938c-.121 .36 -.277 .591 -.622 .591c-.315 0 -.463 -.136 -.626 -.593a10.595 10.595 0 0 0 -.779 -1.978a18.18 18.18 0 0 0 -1.423 -2.091c-.877 -1.184 -2.179 -2.535 -2.853 -4.071a7.077 7.077 0 0 1 -.621 -2.967a6.226 6.226 0 0 1 1.476 -4.055a6.25 6.25 0 0 1 4.811 -2.245a6.462 6.462 0 0 1 1.918 .284a6.255 6.255 0 0 1 3.686 3.092z" /></svg>
                    Maps</button>
               

                
             </div>
             </div>  
           </section>
  )
}
