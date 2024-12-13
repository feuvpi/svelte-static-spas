<!-- Enhanced version with balanced styling -->
<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    
    let visible = false;
    let isScrolled = false;
    
    onMount(() => {
      visible = true;
      window.addEventListener('scroll', () => {
        isScrolled = window.scrollY > 50;
      });
    });
  
    const navItems = [
      { href: '#inicio', text: 'Início' },
      { href: '#servicos', text: 'Serviços' },
      { href: '#tecnologias', text: 'Tecnologias' },
      { href: '#metodologia', text: 'Metodologia' },
      { href: '#contato', text: 'Contato' }
    ];
</script>

<!-- Enhanced Navbar -->
<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 {isScrolled ? 'bg-black/40 backdrop-blur-lg' : ''}">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="flex items-center justify-between h-20">
      <div class="flex items-center">
        <a href="#" class="text-lg font-light tracking-wider bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
          Eixxo
        </a>
      </div>
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-8">
          {#each navItems as item}
            <a href={item.href} 
               class="px-2 py-1 text-sm font-light tracking-wide text-white/70 hover:text-white transition-colors duration-300">
              {item.text}
            </a>
          {/each}
        </div>
      </div>
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button class="p-2 text-white/70 hover:text-white">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

<div class="min-h-screen bg-[#0A0A0B] text-white/90">
  <!-- Enhanced Hero Section -->
  <header class="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden" id="inicio">
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
    
    <!-- Mathematical background patterns -->
    <div class="absolute inset-0 " aria-hidden="true">
      <svg class="w-full h-full" preserveAspectRatio="none">
        <!-- Enhanced parametric curves -->
        <path class="parametric-path-1">
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0 200 Q 200 100, 400 200 T 800 200;
              M0 200 Q 200 300, 400 200 T 800 200;
              M0 200 Q 200 100, 400 200 T 800 200"
          />
        </path>
        <path class="parametric-path-2">
          <animate
            attributeName="d"
            dur="25s"
            repeatCount="indefinite"
            values="
              M0 500 Q 400 300, 800 500;
              M0 500 Q 400 700, 800 500;
              M0 500 Q 400 300, 800 500"
          />
        </path>
      </svg>
    </div>
    
    <div class="max-w-3xl text-center z-10" in:fade={{duration: 1500}}>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-light tracking-wider mb-8 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
        Eixxo Sistemas
      </h1>
      <p class="text-base sm:text-lg md:text-xl text-white/70 mb-6 font-light tracking-wide">Soluções Digitais Inteligentes</p>
      <a href="#contato" 
         class="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r hover:border-cyan-400 from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border border-blue-500/20 backdrop-blur-sm rounded-sm text-sm tracking-wider transition-all duration-300">
        Iniciar projeto
      </a>
    </div>
  </header>

  <!-- Enhanced Services Section -->
  <section class="py-20 sm:py-24 px-4 sm:px-6 relative" id="servicos">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 sm:mb-20">
        <h2 class="text-2xl sm:text-3xl font-light tracking-wide mb-6 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
          Serviços
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        <!-- Enhanced service cards -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-sm blur-xl transition-all group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
          <div class="p-6 sm:p-8 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] transition-all duration-500 relative">
            <h3 class="text-lg font-light tracking-wide mb-6 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
              Desenvolvimento
            </h3>
            <p class="text-white/60 text-sm leading-relaxed mb-8">
              Soluções multiplataforma elegantes e eficientes, com foco em experiência do usuário e performance.
            </p>
            <ul class="space-y-4 text-sm text-white/70">
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></span>
                Mobile & Web
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></span>
                APIs & Microsserviços
              </li>
            </ul>
          </div>
        </div>

        <!-- AI Service Card -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-sm blur-xl transition-all group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
          <div class="p-6 sm:p-8 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] transition-all duration-500 relative">
            <h3 class="text-lg font-light tracking-wide mb-6 bg-gradient-to-r from-purple-400/90 to-blue-400/90 text-transparent bg-clip-text">
              Inteligência Artificial
            </h3>
            <p class="text-white/60 text-sm leading-relaxed mb-8">
              Potencializamos seu negócio com soluções inteligentes e automatizadas.
            </p>
            <ul class="space-y-4 text-sm text-white/70">
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20"></span>
                Automação Inteligente
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20"></span>
                Machine Learning
              </li>
            </ul>
          </div>
        </div>

        <!-- Cloud Service Card -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-green-500/5 rounded-sm blur-xl transition-all group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
          <div class="p-6 sm:p-8 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] transition-all duration-500 relative">
            <h3 class="text-lg font-light tracking-wide mb-6 bg-gradient-to-r from-cyan-400/90 to-green-400/90 text-transparent bg-clip-text">
              Cloud & DevOps
            </h3>
            <p class="text-white/60 text-sm leading-relaxed mb-8">
              Infraestrutura escalável e processos automatizados para máxima eficiência.
            </p>
            <ul class="space-y-4 text-sm text-white/70">
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-cyan-400/20 to-green-400/20"></span>
                Cloud Native
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-cyan-400/20 to-green-400/20"></span>
                DevOps & CI/CD
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Enhanced Methodology Section -->
  <section class="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" id="metodologia">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-2xl font-mono sm:text-3xl font-light tracking-wide text-center mb-16 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
        Nossa Metodologia
      </h2>
      <div class="grid md:grid-cols-2 gap-8 sm:gap-12">
        <!-- Sprint Development Card -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-sm blur-xl transition-all group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
          <div class="p-6 sm:p-8 bg-white/[0.02] border border-white/[0.05] transition-all duration-500 relative h-full">
            <h3 class="text-lg font-light tracking-wide mb-6 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
              Desenvolvimento por Sprints
            </h3>
            <p class="text-white/60 text-lg font-mono leading-relaxed text-justify mb-8">
              Trabalhamos com sprints de duas semanas, garantindo entregas constantes e visibilidade do progresso. Ideal para clientes nacionais e internacionais que buscam eficiência no desenvolvimento.
            </p>
            <ul class="space-y-4 text-sm text-white/70">
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></span>
                Planejamento detalhado
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></span>
                Entregas quinzenais
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></span>
                Feedback contínuo
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></span>
                Adaptação ágil
              </li>
            </ul>
          </div>
        </div>

        <!-- Quality First Card -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-sm blur-xl transition-all group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
          <div class="p-6 sm:p-8 bg-white/[0.02] border border-white/[0.05] transition-all duration-500 relative h-full">
            <h3 class="text-lg font-light tracking-wide mb-6 bg-gradient-to-r from-purple-400/90 to-blue-400/90 text-transparent bg-clip-text">
              Qualidade em Primeiro Lugar
            </h3>
            <p class="text-white/60 text-lg font-mono leading-relaxed mb-8 text-justify">
              Nosso processo de desenvolvimento combina metodologias modernas com ferramentas aprimoradas por IA para garantir qualidade excepcional. Acreditamos em código sustentável e manutenível.
            </p>
            <ul class="space-y-4 justify-center border-2 items-center place-content-center flex text-md font-thin text-white/70">
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20"></span>
                Testes automatizados
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20"></span>
                Code review
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20"></span>
                Integração contínua
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20"></span>
                Documentação completa
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Enhanced Tech Stack -->
  <section class="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" id="tecnologias">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-light tracking-wide text-center mb-16 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
        Stack Tecnológico
      </h2>
      <div class="flex flex-wrap justify-center items-center gap-x-32 gap-y-8">
        <!-- Place SVGs here -->
         <!-- C# Logo -->
         <svg class="h-16 w-16" preserveAspectRatio="xMidYMid" viewBox="0 -1.428 255.582 290.108" width="2222" xmlns="http://www.w3.org/2000/svg"><path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76-2.052-3.603-5.125-6.622-9.247-9.009-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.1-27.163.27-13.543 7.986-81.348 46.833-101.553 58.536-8.321 4.818-12.37 12.19-12.372 21.771-.013 39.455 0 78.91-.013 118.365 0 4.724.991 8.91 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.987-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#a179dc"/><path d="m128.182 143.241-125.194 72.084c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252z" fill="#280068"/><path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76l-124.263 71.55 124.413 72.073c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#390091"/><g fill="#fff"><path d="m201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z"/><path d="m128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z"/></g></svg>

<!-- Svelte Logo -->
<svg class="h-16 w-16" viewBox="-23.04085003 -23.7 545.4320132 647" width="2079" xmlns="http://www.w3.org/2000/svg"><path d="m466.95 79.52c-55.66-79.62-165.6-103.22-245.08-52.6l-139.58 88.93c-9.39 5.9-18.15 12.76-26.12 20.47-7.98 7.71-15.13 16.23-21.34 25.42s-11.45 19-15.64 29.27a160.478 160.478 0 0 0 -9.26 31.87c-1.65 9.15-2.55 18.43-2.67 27.73-.13 9.31.52 18.61 1.93 27.8 1.41 9.2 3.58 18.27 6.48 27.11s6.53 17.42 10.85 25.66a161.68 161.68 0 0 0 -8.22 13.97c-2.51 4.79-4.77 9.71-6.78 14.73s-3.76 10.14-5.25 15.34-2.71 10.47-3.67 15.79a170.365 170.365 0 0 0 1.55 67.48c2.5 11.05 6.09 21.83 10.73 32.17s10.29 20.2 16.89 29.42c55.66 79.62 165.59 103.22 245.07 52.6l139.58-88.56c9.39-5.91 18.13-12.78 26.1-20.5a160.58 160.58 0 0 0 21.33-25.42c6.21-9.18 11.45-18.99 15.64-29.26 4.19-10.26 7.3-20.94 9.29-31.85 1.65-9.15 2.54-18.42 2.66-27.72s-.53-18.6-1.95-27.79c-1.41-9.19-3.58-18.25-6.49-27.09-2.91-8.83-6.54-17.41-10.86-25.65 2.97-4.51 5.72-9.18 8.23-13.97 2.5-4.79 4.77-9.71 6.78-14.73s3.77-10.14 5.27-15.34c1.49-5.19 2.73-10.46 3.7-15.78 1.98-11.16 2.84-22.49 2.58-33.82s-1.65-22.6-4.15-33.66c-2.5-11.05-6.09-21.83-10.73-32.17a170.906 170.906 0 0 0 -16.87-29.42" fill="#ff3e00"/><path d="m208.23 527.78a110.876 110.876 0 0 1 -33.49 3.42c-11.27-.58-22.39-2.86-32.97-6.79a111.06 111.06 0 0 1 -29.42-16.35 111.108 111.108 0 0 1 -23.15-24.42c-3.97-5.55-7.37-11.47-10.15-17.69a102.38 102.38 0 0 1 -6.45-19.34c-1.49-6.65-2.33-13.43-2.48-20.24s.38-13.62 1.58-20.33c.19-1.09.41-2.18.65-3.26.23-1.09.49-2.17.77-3.24.27-1.08.57-2.15.89-3.22.31-1.06.65-2.12 1-3.17l2.63-8.03 7.17 5.35c4.11 3 8.35 5.83 12.7 8.47 4.35 2.65 8.81 5.11 13.37 7.37 4.55 2.27 9.21 4.35 13.94 6.22 4.73 1.88 9.54 3.55 14.42 5.02l5.35 1.55-.48 5.35a31.395 31.395 0 0 0 1.12 10.81c.49 1.76 1.14 3.46 1.93 5.1s1.72 3.21 2.78 4.69a33.4 33.4 0 0 0 6.99 7.35c2.68 2.08 5.67 3.74 8.86 4.92s6.53 1.86 9.93 2.03c3.39.18 6.79-.17 10.08-1.03.76-.2 1.5-.43 2.24-.69s1.47-.54 2.18-.86c.72-.31 1.42-.65 2.12-1.02.69-.36 1.36-.75 2.02-1.17l139.37-88.94a28.96 28.96 0 0 0 4.75-3.72c1.45-1.41 2.74-2.96 3.87-4.63s2.07-3.46 2.83-5.33c.75-1.87 1.31-3.81 1.67-5.79.35-2.03.5-4.08.45-6.14-.05-2.05-.31-4.09-.77-6.1-.45-2-1.11-3.95-1.96-5.83-.84-1.87-1.88-3.65-3.08-5.32-1.94-2.79-4.29-5.26-6.98-7.34s-5.68-3.74-8.86-4.92a33.464 33.464 0 0 0 -9.93-2.04c-3.4-.17-6.8.18-10.09 1.03-.75.2-1.5.43-2.24.69s-1.46.54-2.18.85c-.72.32-1.42.66-2.11 1.03-.69.36-1.37.76-2.03 1.18l-53.52 33.98c-2.18 1.38-4.42 2.68-6.7 3.9-2.29 1.21-4.61 2.34-6.98 3.38s-4.78 1.99-7.22 2.84c-2.44.86-4.91 1.62-7.41 2.29-10.91 2.82-22.18 3.96-33.43 3.38s-22.34-2.87-32.9-6.78c-10.56-3.92-20.46-9.43-29.36-16.33s-16.7-15.11-23.13-24.36c-3.95-5.55-7.34-11.48-10.11-17.7-2.78-6.22-4.93-12.7-6.42-19.34-1.49-6.65-2.31-13.43-2.45-20.24-.15-6.8.38-13.61 1.59-20.31a96.419 96.419 0 0 1 14.94-36.86 96.283 96.283 0 0 1 28.57-27.68l139.8-88.93c2.17-1.38 4.39-2.68 6.66-3.9 2.27-1.21 4.59-2.34 6.94-3.38a98.21 98.21 0 0 1 7.18-2.84c2.42-.86 4.88-1.63 7.37-2.3 10.92-2.83 22.21-3.99 33.47-3.42 11.27.58 22.38 2.86 32.96 6.79 10.58 3.92 20.49 9.44 29.41 16.35a111.11 111.11 0 0 1 23.14 24.43c3.96 5.54 7.37 11.46 10.16 17.68s4.95 12.69 6.46 19.34c1.5 6.65 2.34 13.43 2.49 20.24.16 6.81-.36 13.62-1.56 20.33-.21 1.1-.43 2.2-.68 3.29-.24 1.09-.5 2.18-.78 3.26-.27 1.09-.57 2.17-.88 3.24-.31 1.08-.63 2.15-.98 3.21l-2.67 8.03-7.12-5.35c-4.12-3.03-8.37-5.87-12.73-8.54-4.36-2.66-8.84-5.14-13.41-7.43a182.39 182.39 0 0 0 -28.45-11.32l-5.36-1.55.49-5.35c.15-1.83.14-3.67-.03-5.49-.16-1.82-.49-3.63-.97-5.4-.49-1.76-1.12-3.49-1.91-5.14-.78-1.66-1.71-3.24-2.77-4.74a33.153 33.153 0 0 0 -6.99-7.2 32.991 32.991 0 0 0 -8.82-4.8 33.244 33.244 0 0 0 -19.83-.89c-.76.2-1.51.43-2.24.68-.74.26-1.47.55-2.19.86-.71.31-1.42.66-2.11 1.02-.69.37-1.37.76-2.03 1.18l-139.63 88.78c-1.7 1.07-3.29 2.32-4.73 3.72s-2.74 2.95-3.87 4.61a29.724 29.724 0 0 0 -2.83 5.31c-.76 1.87-1.32 3.8-1.68 5.78-.35 2.03-.5 4.09-.45 6.15a31.547 31.547 0 0 0 2.73 11.95 31.84 31.84 0 0 0 3.07 5.34c1.93 2.76 4.27 5.22 6.94 7.28a33.26 33.26 0 0 0 8.79 4.9 33.533 33.533 0 0 0 19.86 1.09c.75-.21 1.5-.44 2.24-.7.73-.26 1.46-.55 2.18-.86a29.2 29.2 0 0 0 2.11-1.02c.69-.36 1.37-.75 2.03-1.17l53.52-33.92c2.19-1.4 4.42-2.72 6.71-3.94 2.28-1.23 4.61-2.36 6.99-3.41a99.39 99.39 0 0 1 7.23-2.84c2.45-.86 4.93-1.62 7.44-2.28 10.92-2.84 22.2-4 33.47-3.44 11.27.57 22.38 2.85 32.96 6.77 10.57 3.92 20.49 9.43 29.4 16.35 8.92 6.91 16.72 15.14 23.15 24.41 3.96 5.55 7.36 11.47 10.15 17.69a102.65 102.65 0 0 1 6.46 19.34c1.5 6.64 2.34 13.42 2.5 20.23.16 6.82-.37 13.63-1.56 20.33a96.419 96.419 0 0 1 -5.55 19.21 95.753 95.753 0 0 1 -9.4 17.65c-3.73 5.54-8.03 10.68-12.83 15.33s-10.07 8.79-15.73 12.35l-139.64 88.93c-2.19 1.39-4.43 2.7-6.71 3.92-2.29 1.22-4.62 2.35-7 3.39-2.37 1.05-4.78 2-7.23 2.86-2.44.86-4.92 1.63-7.42 2.3" fill="#fff"/></svg>

<!-- Flutter Logo -->
<svg class="h-16 w-16" enable-background="new 0 0 1999 2474.2" viewBox="0 0 1999 2474.2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientTransform="matrix(380.4042 -380.4175 -53.104 -53.1021 908228.3125 -700059.5)" gradientUnits="userSpaceOnUse" x1="-2115.0029" x2="-2115.0029" y1="1930.7407" y2="1929.7407"><stop offset=".2" stop-opacity=".15"/><stop offset=".85" stop-color="#616161" stop-opacity=".01"/></linearGradient><linearGradient id="b" gradientTransform="matrix(565.291 0 0 -380.9571 1196694.25 743476.5625)" gradientUnits="userSpaceOnUse" x1="-2115.2688" x2="-2114.2688" y1="1946.3563" y2="1946.3563"><stop offset=".2" stop-opacity=".55"/><stop offset=".85" stop-color="#616161" stop-opacity=".01"/></linearGradient><path d="m381 1618-381-381 1237.1-1237h761.9m0 1141.5h-761.9l-285.4 285.4 381 381" fill="#42a5f5" fill-opacity=".8"/><path d="m951.7 2188.8 285.4 285.4h761.9l-666.3-666.3" fill="#0d47a1"/><path d="m571.6 1808.1 380.4-380.5 380.4 380.4-380.4 380.5z" fill="#42a5f5"/><path d="m952 2188.5 380.4-380.4 53.1 53.1-380.4 380.4z" fill="url(#a)"/><path d="m951.7 2188.8 565.3-195.3-184.3-185.7" fill="url(#b)"/></svg>

<!-- Haskell Logo -->
<svg class="h-16 w-16" height="1768" viewBox="0 0 256 181" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 180.664l60.222-90.332L0 0h45.166l60.222 90.332-60.222 90.332H0z" fill="#F97E2F"/><path d="M60.222 180.664l60.222-90.332L60.222 0h45.166L225.83 180.664h-45.166l-37.637-56.457-37.639 56.457H60.222z" fill="#95653A"/><path d="M205.757 127.971l-20.072-30.11 70.257-.002v30.112h-50.185zM175.647 82.805l-20.074-30.11 100.369-.002v30.112h-80.295z" fill="#F97E2F"/></svg>

<!-- Rust Logo -->
<svg class="h-16 w-16 text-white bg-white rounded-md" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M254.251 124.862l-10.747-6.653a145.81 145.81 0 0 0-.306-3.13l9.236-8.615a3.686 3.686 0 0 0 1.105-3.427 3.685 3.685 0 0 0-2.33-2.744l-11.807-4.415a137.355 137.355 0 0 0-.925-3.048l7.365-10.229a3.698 3.698 0 0 0-2.407-5.814l-12.45-2.025c-.484-.944-.988-1.874-1.496-2.796l5.231-11.483a3.683 3.683 0 0 0-.288-3.59 3.678 3.678 0 0 0-3.204-1.642l-12.636.44a99.848 99.848 0 0 0-1.996-2.421l2.904-12.308a3.694 3.694 0 0 0-.986-3.466 3.698 3.698 0 0 0-3.464-.986l-12.305 2.901a106.192 106.192 0 0 0-2.426-1.996l.442-12.635a3.684 3.684 0 0 0-1.64-3.205 3.693 3.693 0 0 0-3.59-.29l-11.48 5.234a133.235 133.235 0 0 0-2.796-1.5l-2.03-12.452a3.7 3.7 0 0 0-5.812-2.407l-10.236 7.365c-1.007-.32-2.02-.629-3.042-.922L155.72 4.794a3.69 3.69 0 0 0-2.745-2.336 3.707 3.707 0 0 0-3.424 1.106l-8.615 9.243a111.11 111.11 0 0 0-3.13-.306l-6.653-10.75a3.698 3.698 0 0 0-6.289 0l-6.653 10.75a110.4 110.4 0 0 0-3.133.306l-8.617-9.243a3.695 3.695 0 0 0-6.169 1.23l-4.414 11.809c-1.023.293-2.035.604-3.045.922L82.599 10.16a3.687 3.687 0 0 0-3.579-.415 3.705 3.705 0 0 0-2.235 2.822l-2.03 12.452c-.94.487-1.869.988-2.796 1.5l-11.481-5.235a3.686 3.686 0 0 0-3.588.291 3.684 3.684 0 0 0-1.642 3.205l.44 12.635a118.03 118.03 0 0 0-2.426 1.996l-12.305-2.9a3.71 3.71 0 0 0-3.466.985 3.694 3.694 0 0 0-.986 3.466l2.899 12.308c-.673.797-1.338 1.604-1.991 2.421l-12.636-.44a3.721 3.721 0 0 0-3.204 1.641 3.696 3.696 0 0 0-.291 3.59l5.234 11.484c-.509.922-1.012 1.852-1.5 2.796l-12.449 2.025a3.7 3.7 0 0 0-2.407 5.814l7.365 10.23c-.32 1.01-.631 2.024-.925 3.047l-11.808 4.415a3.702 3.702 0 0 0-1.225 6.171l9.237 8.614c-.115 1.04-.217 2.087-.305 3.131L1.75 124.862A3.695 3.695 0 0 0 0 128.007c0 1.284.663 2.473 1.751 3.143l10.748 6.653c.088 1.047.19 2.092.305 3.131l-9.238 8.617a3.697 3.697 0 0 0 1.226 6.169l11.808 4.415c.294 1.022.605 2.037.925 3.047l-7.365 10.231a3.696 3.696 0 0 0 2.41 5.812l12.447 2.025c.487.944.986 1.874 1.5 2.8l-5.235 11.48a3.691 3.691 0 0 0 .291 3.59 3.684 3.684 0 0 0 3.204 1.641l12.63-.442c.659.821 1.322 1.626 1.997 2.426l-2.899 12.31a3.682 3.682 0 0 0 .986 3.459 3.683 3.683 0 0 0 3.466.983l12.305-2.898c.8.68 1.61 1.34 2.427 1.99l-.44 12.639a3.694 3.694 0 0 0 5.229 3.492l11.481-5.231a105.49 105.49 0 0 0 2.796 1.499l2.03 12.445a3.692 3.692 0 0 0 2.235 2.825 3.706 3.706 0 0 0 3.579-.413l10.229-7.37c1.01.32 2.025.633 3.047.927l4.415 11.804a3.685 3.685 0 0 0 2.744 2.331 3.677 3.677 0 0 0 3.425-1.106l8.617-9.238c1.04.12 2.086.22 3.133.313l6.653 10.748a3.702 3.702 0 0 0 3.143 1.75 3.703 3.703 0 0 0 3.145-1.75l6.653-10.748c1.047-.093 2.092-.193 3.131-.313l8.615 9.238a3.68 3.68 0 0 0 3.424 1.106 3.69 3.69 0 0 0 2.744-2.331l4.415-11.804c1.022-.294 2.038-.607 3.048-.927l10.231 7.37a3.7 3.7 0 0 0 5.812-2.412l2.03-12.445c.939-.487 1.868-.993 2.795-1.5l11.481 5.232a3.692 3.692 0 0 0 5.23-3.492l-.44-12.638a98.76 98.76 0 0 0 2.423-1.991l12.306 2.898c1.25.294 2.56-.07 3.463-.983a3.682 3.682 0 0 0 .986-3.459l-2.898-12.31c.675-.8 1.34-1.605 1.99-2.426l12.636.442a3.681 3.681 0 0 0 3.204-1.64 3.685 3.685 0 0 0 .289-3.592l-5.232-11.478c.511-.927 1.013-1.857 1.497-2.8l12.45-2.026a3.682 3.682 0 0 0 2.822-2.236 3.696 3.696 0 0 0-.415-3.576l-7.365-10.23c.318-1.011.629-2.026.925-3.048l11.806-4.415a3.684 3.684 0 0 0 2.331-2.745 3.677 3.677 0 0 0-1.106-3.424l-9.235-8.617c.112-1.04.215-2.086.305-3.13l10.748-6.654a3.69 3.69 0 0 0 1.751-3.143c0-1.281-.66-2.472-1.749-3.145zm-71.932 89.156c-4.104-.885-6.714-4.93-5.833-9.047.878-4.112 4.92-6.729 9.023-5.844 4.104.879 6.718 4.931 5.838 9.04-.88 4.11-4.926 6.73-9.028 5.851zm-3.652-24.699a6.929 6.929 0 0 0-8.23 5.332l-3.816 17.807c-11.775 5.344-24.85 8.313-38.621 8.313-14.086 0-27.446-3.116-39.43-8.688l-3.814-17.806c-.802-3.747-4.486-6.134-8.228-5.33l-15.72 3.376a93.272 93.272 0 0 1-8.128-9.58h76.49c.865 0 1.442-.157 1.442-.945v-27.057c0-.787-.577-.944-1.443-.944H106.8v-17.15h24.195c2.208 0 11.809.63 14.878 12.902.962 3.774 3.072 16.05 4.516 19.98 1.438 4.408 7.293 13.213 13.533 13.213h38.115c.433 0 .895-.049 1.382-.137a93.92 93.92 0 0 1-8.669 10.17l-16.082-3.456zm-105.79 24.327c-4.105.886-8.146-1.731-9.029-5.843-.878-4.119 1.732-8.162 5.836-9.047 4.105-.878 8.148 1.739 9.028 5.85.878 4.11-1.734 8.16-5.836 9.04zM43.86 95.986c1.703 3.842-.03 8.345-3.867 10.045-3.837 1.705-8.328-.03-10.03-3.875-1.703-3.845.029-8.34 3.867-10.045a7.598 7.598 0 0 1 10.03 3.874zm-8.918 21.14l16.376-7.277a6.942 6.942 0 0 0 3.524-9.158l-3.372-7.626h13.264v59.788H37.973a93.7 93.7 0 0 1-3.566-25.672c0-3.398.183-6.756.535-10.056zm71.862-5.807V93.696h31.586c1.632 0 11.52 1.886 11.52 9.28 0 6.139-7.584 8.34-13.821 8.34h-29.285v.003zm114.792 15.862c0 2.338-.086 4.652-.257 6.948h-9.603c-.961 0-1.348.632-1.348 1.573v4.41c0 10.38-5.853 12.638-10.982 13.213-4.884.55-10.3-2.045-10.967-5.034-2.882-16.206-7.683-19.667-15.265-25.648 9.41-5.975 19.2-14.79 19.2-26.59 0-12.74-8.734-20.765-14.688-24.7-8.352-5.506-17.6-6.61-20.095-6.61H58.279c13.467-15.03 31.719-25.677 52.362-29.551l11.706 12.28a6.923 6.923 0 0 0 9.799.226l13.098-12.528c27.445 5.11 50.682 22.194 64.073 45.633l-8.967 20.253c-1.548 3.505.032 7.604 3.527 9.157l17.264 7.668c.298 3.065.455 6.161.455 9.3zM122.352 24.745c3.033-2.905 7.844-2.79 10.748.247 2.898 3.046 2.788 7.862-.252 10.765-3.033 2.906-7.844 2.793-10.748-.25a7.621 7.621 0 0 1 .252-10.762zm88.983 71.61a7.594 7.594 0 0 1 10.028-3.872c3.838 1.702 5.57 6.203 3.867 10.045a7.595 7.595 0 0 1-10.03 3.875c-3.833-1.703-5.565-6.2-3.865-10.048z"/></svg>

<!-- Solidity Logo -->
<svg class="h-16 w-16" viewBox="0 0 256 264" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99.087-.729.167-1.425.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351"/><path d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002" fill="#336791"/><path d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28.282.04.563.058.842.058 3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35M196.86 81.599c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863.258 0 .518-.017.78-.054 2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225" fill="#FFF"/><path d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016zM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473.313.255.656.508 1.032.756 6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772z" fill="#FFF"/></svg>
      </div>
      
    </div>
  </section>

  <!-- Enhanced Contact Section -->
  <section class="py-20 sm:py-24 px-4 sm:px-6" id="contato">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-light tracking-wide text-center mb-16 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
        Contato
      </h2>
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-sm blur-xl"></div>
        <form class="space-y-8 relative bg-white/[0.02] p-6 sm:p-8 border border-white/[0.05] backdrop-blur-sm">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="relative group">
              <input type="text" 
                     placeholder="Nome" 
                     class="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] focus:border-blue-500/20 outline-none transition-all duration-300 rounded-sm placeholder-white/30">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none"></div>
            </div>
            <div class="relative group">
              <input type="email" 
                     placeholder="Email" 
                     class="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] focus:border-blue-500/20 outline-none transition-all duration-300 rounded-sm placeholder-white/30">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          </div>
          <div class="relative group">
            <textarea 
              placeholder="Descreva seu projeto" 
              rows="4" 
              class="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] focus:border-blue-500/20 outline-none transition-all duration-300 rounded-sm placeholder-white/30 resize-none"></textarea>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none"></div>
          </div>
          <button type="submit" 
                  class="w-full px-8 py-3 bg-gradient-to-r hover:border-cyan-400 from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border border-blue-500/20 text-sm tracking-wider transition-all duration-300 rounded-sm relative group overflow-hidden">
            <span class="relative z-10">Enviar mensagem</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500"></div>
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Enhanced Footer -->
  <footer class="py-8 px-4 sm:px-6 border-t border-white/[0.05] relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none"></div>
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 relative">
      <p class="text-sm text-white/40 tracking-wider">&copy; 2024 eixxo</p>
      <div class="flex items-center gap-6">
        <a href="#" class="text-sm text-white/40 hover:text-white/60 transition-colors duration-300">LinkedIn</a>
        <a href="#" class="text-sm text-white/40 hover:text-white/60 transition-colors duration-300">GitHub</a>
        <a href="#" class="text-sm text-white/40 hover:text-white/60 transition-colors duration-300">Twitter</a>
      </div>
    </div>
  </footer>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    margin: 0;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  /* Mathematical background patterns */
  .parametric-path-1,
  .parametric-path-2,
  .lissajous-curve {
    fill: none;
    stroke: white;
    stroke-width: 0.5;
    vector-effect: non-scaling-stroke;
  }

  .parametric-path-1 {
    opacity: 0.3;
  }

  .parametric-path-2 {
    opacity: 0.2;
  }

  .lissajous-curve {
    opacity: 0.15;
  }

  /* Enhanced hover effects */
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  /* Mobile menu animation */
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* Refined scrollbar */
  :global(::-webkit-scrollbar) {
    width: 6px;
  }

  :global(::-webkit-scrollbar-track) {
    background: transparent;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: rgba(255, 255, 255, 0.1);
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: rgba(255, 255, 255, 0.15);
  }

  /* Form focus styles */
  input:focus, textarea:focus {
    box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1);
  }

  /* Prevent Chrome autofill background color */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px #0A0A0B inset;
    transition: background-color 5000s ease-in-out 0s;
  }
</style>