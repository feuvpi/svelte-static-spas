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
         class="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border border-blue-500/20 backdrop-blur-sm rounded-sm text-sm tracking-wider transition-all duration-300">
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
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-light tracking-wide text-center mb-16 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
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
            <p class="text-white/60 text-sm leading-relaxed mb-8">
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
            <p class="text-white/60 text-sm leading-relaxed mb-8">
              Nosso processo de desenvolvimento combina metodologias modernas com ferramentas aprimoradas por IA para garantir qualidade excepcional. Acreditamos em código sustentável e manutenível.
            </p>
            <ul class="space-y-4 text-sm text-white/70">
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
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl sm:text-3xl font-light tracking-wide text-center mb-16 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
        Stack Tecnológico
      </h2>
      <div class="grid grid-cols-3 gap-12 items-center justify-items-center">
        <!-- Platform Focus -->
        <div class="text-center group">
          <svg class="w-12 h-12 mx-auto mb-4 text-white/40 group-hover:text-white/60 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-sm text-white/40 group-hover:text-white/60 transition-colors duration-300">Mobile & Desktop</span>
        </div>

        <div class="text-center group">
          <svg class="w-12 h-12 mx-auto mb-4 text-white/40 group-hover:text-white/60 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-sm text-white/40 group-hover:text-white/60 transition-colors duration-300">Web Systems</span>
        </div>

        <div class="text-center group">
          <svg class="w-12 h-12 mx-auto mb-4 text-white/40 group-hover:text-white/60 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-sm text-white/40 group-hover:text-white/60 transition-colors duration-300">AI & Cloud</span>
        </div>
      </div>

      <!-- Technology Icons -->
      <div class="mt-16 pt-16 border-t border-white/[0.05]">
        <div class="flex flex-wrap justify-center items-center gap-12">
          <img src="/path-to-csharp-icon.svg" alt="C#" class="h-8 opacity-40 hover:opacity-60 transition-opacity duration-300">
          <img src="/path-to-flutter-icon.svg" alt="Flutter" class="h-8 opacity-40 hover:opacity-60 transition-opacity duration-300">
          <img src="/path-to-java-icon.svg" alt="Java" class="h-8 opacity-40 hover:opacity-60 transition-opacity duration-300">
          <img src="/path-to-aws-icon.svg" alt="AWS" class="h-8 opacity-40 hover:opacity-60 transition-opacity duration-300">
          <img src="/path-to-azure-icon.svg" alt="Azure" class="h-8 opacity-40 hover:opacity-60 transition-opacity duration-300">
          <img src="/path-to-gcp-icon.svg" alt="Google Cloud" class="h-8 opacity-40 hover:opacity-60 transition-opacity duration-300">
          <img src="/path-to-svelte-icon.svg" alt="Svelte" class="h-8 opacity-40 hover:opacity-60 transition-opacity duration-300">
        </div>
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
                  class="w-full px-8 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border border-blue-500/20 text-sm tracking-wider transition-all duration-300 rounded-sm relative group overflow-hidden">
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