import "clsx";
function HeroSection($$payload) {
  $$payload.out += `<div class="container mx-auto px-4 py-16"><nav class="mb-16 flex flex-col items-center justify-between gap-4 sm:flex-row"><div class="flex items-center space-x-4"><h1 class="bg-gradient-to-r from-purple-400 to-lime-500 bg-clip-text text-4xl font-extrabold text-transparent">ANDPLAY</h1> <img src="logo.png" alt="Logo" class="h-10 w-10"></div> <div class="flex space-x-6"><a href="/" class="rounded-md border border-white bg-transparent px-4 py-2 text-sm hover:bg-white hover:text-purple-900">Descargar</a> <a href="/" class="rounded-md border border-white bg-transparent px-4 py-2 text-sm hover:bg-white hover:text-purple-900">Telegram</a></div></nav> <div class="flex flex-col items-center justify-between md:flex-row"><div class="mb-8 px-4 md:mb-0 md:w-1/2 md:px-0"><h2 class="mb-4 text-center text-4xl font-bold md:mb-6 md:text-left md:text-5xl">Tu nueva forma de descubrir películas</h2> <p class="mb-6 text-center text-lg text-gray-300 md:mb-8 md:text-left md:text-xl">Encuentra, guarda y disfruta de las mejores películas con nuestra aplicación intuitiva y personalizada.</p> <div class="flex justify-center md:justify-start"><button class="rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold hover:bg-purple-700 md:px-8 md:py-3 md:text-base">Descargar Ahora</button></div></div> <div class="flex justify-center md:w-1/2"><div class="relative h-[500px] w-64 rounded-3xl border-8 border-gray-700 bg-gray-800 shadow-2xl"><div class="absolute top-0 right-0 left-0 flex h-12 items-center justify-center rounded-t-2xl bg-gray-900"><div class="h-4 w-16 rounded-full bg-gray-800"><img src="imagen.png" alt="cine" class="absolute inset-0 top-11 h-[440px] w-full rounded-b-2xl object-cover object-bottom"></div></div></div></div></div></div>`;
}
function FeatureSection($$payload) {
  $$payload.out += `<div id="features" class="container mx-auto px-4 py-24"><h3 class="mb-16 text-center text-3xl font-bold">Características Principales</h3> <div class="grid gap-8 md:grid-cols-3"><div class="rounded-xl bg-purple-800/20 p-6 backdrop-blur-sm"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path></svg></div> <h4 class="mb-2 text-xl font-semibold">Catálogo Extenso</h4> <p class="text-gray-300">Miles de películas y series a tu alcance, actualizadas constantemente.</p></div> <div class="rounded-xl bg-purple-800/20 p-6 backdrop-blur-sm"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg></div> <h4 class="mb-2 text-xl font-semibold">Recomendaciones Sencillas</h4> <p class="text-gray-300">Descubre nuevo contenido fácilmente con nuestro sistema de recomendaciones simple e intuitivo.</p></div> <div class="rounded-xl bg-purple-800/20 p-6 backdrop-blur-sm"><div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div> <h4 class="mb-2 text-xl font-semibold">Seguimiento</h4> <p class="text-gray-300">Lleva un registro de las películas que has visto y las que quieres ver.</p></div></div></div>`;
}
function DownloadSection($$payload) {
  $$payload.out += `<div id="download" class="container mx-auto px-4 pt-16 pb-8 text-center"><h3 class="mb-8 text-3xl font-bold">Descarga Ahora</h3> <p class="mx-auto mb-12 max-w-2xl text-xl text-gray-300">Disponible para Android. Descarga la app y comienza a disfrutar de la mejor experiencia cinematográfica.</p> <p class="mx-auto max-w-2xl text-sm text-gray-400">© Totalmente gratis</p></div>`;
}
function _page($$payload) {
  $$payload.out += `<div class="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">`;
  HeroSection($$payload);
  $$payload.out += `<!----> `;
  FeatureSection($$payload);
  $$payload.out += `<!----> `;
  DownloadSection($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
