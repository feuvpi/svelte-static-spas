<script>
import { onMount } from 'svelte';
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

  let currentLang = 'pt-BR';

  const toggleLanguage = (lang) => {
    currentLang = lang;
  };


</script>

<!-- Enhanced Navbar -->
<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 {isScrolled ? 'bg-black/40 backdrop-blur-lg' : ''}">
  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="flex items-center justify-between h-20">
      <div class="flex items-center">
        <a href="#" class="text-lg font-light tracking-wider bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
          Azulbit
        </a>
      </div>
      
      <div class="hidden md:flex items-center">
        <!-- Navigation Items -->
        <div class="ml-10 flex items-baseline space-x-8">
          {#each navItems as item}
            <a href={item.href} 
               class="px-2 py-1 text-sm font-light tracking-wide text-white/70 hover:text-white transition-colors duration-300">
              {item.text}
            </a>
          {/each}
        </div>

        <!-- Language Selector -->
        <div class="flex items-center space-x-2 ml-8 pl-8 border-l border-white/10">
          <button class="p-1.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] rounded-sm transition-all duration-300 group">
            <span class="w-5 h-4 flex items-center justify-center opacity-60 group-hover:opacity-90 transition-opacity">
              🇧🇷
            </span>
          </button>
          <button class="p-1.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] rounded-sm transition-all duration-300 group">
            <span class="w-5 h-4 flex items-center justify-center opacity-60 group-hover:opacity-90 transition-opacity">
              🇺🇸
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <!-- Language Selector for Mobile -->
        <div class="flex space-x-1 mr-4">
          <button class="p-1 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] rounded-sm transition-all duration-300 group">
            <span class="w-4 h-3 flex items-center justify-center opacity-60 group-hover:opacity-90 transition-opacity text-xs">
              🇧🇷
            </span>
          </button>
          <button class="p-1 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] rounded-sm transition-all duration-300 group">
            <span class="w-4 h-3 flex items-center justify-center opacity-60 group-hover:opacity-90 transition-opacity text-xs">
              🇺🇸
            </span>
          </button>
        </div>

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
    <!-- Rain Effect Background -->
    <div class="absolute en inset-0">
      <div class="container2 ">
        <!-- The container div gets the rain effect from CSS -->
      </div>
          <!-- Add the fade overlay -->
    <div class="hero-fade"></div>
    </div>
  
    <!-- Content -->
    <div class="max-w-3xl text-center relative z-10">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-light tracking-wider mb-8 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
        BitBlue Sistemas
      </h1>
      <p class="text-base sm:text-lg md:text-xl text-white/70 mb-6 font-light tracking-wide">
        Construindo sistemas na era de Inteligência Artificial
      </p>
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
          Soluções Completas
        </h2>
        <p class="text-white/60 max-w-2xl mx-auto">
          Oferecemos um conjunto abrangente de serviços de tecnologia, desde a concepção até a implementação e manutenção contínua.
        </p>
      </div>
   
      <!-- Service Cards Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12">

  
        <!-- Mobile Development Card -->
        <div class="group relative h-full">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-sm blur-xl transition-all group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
          <div class="flex flex-col h-full p-6 sm:p-8 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] transition-all duration-500 relative">
            <h3 class="text-lg font-light tracking-wide mb-6 bg-gradient-to-r from-purple-400/90 to-blue-400/90 text-transparent bg-clip-text">
              Mobile & Cross-platform
            </h3>
            <p class="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
              Desenvolvimento de aplicativos nativos e multiplataforma com foco em performance e experiência do usuário. Suporte a iOS e Android.
            </p>
            <ul class="space-y-4 text-sm text-white/70">
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20"></span>
                Apps Nativos (iOS/Android)
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20"></span>
                Cross-platform (Flutter/React Native)
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-purple-400/20 to-blue-400/20"></span>
                UX/UI Mobile-first
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Desktop Development -->
        <div class="group relative h-full">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-green-500/5 rounded-sm blur-xl transition-all group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
          <div class="flex flex-col h-full p-6 sm:p-8 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] transition-all duration-500 relative">
            <h3 class="text-lg font-light tracking-wide mb-6 bg-gradient-to-r from-cyan-400/90 to-green-400/90 text-transparent bg-clip-text">
              Desktop & Enterprise
            </h3>
            <p class="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
              Soluções desktop robustas e sistemas empresariais complexos. Integração com sistemas legados e APIs corporativas.
            </p>
            <ul class="space-y-4 text-sm text-white/70">
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-cyan-400/20 to-green-400/20"></span>
                Aplicações .NET & Java
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-cyan-400/20 to-green-400/20"></span>
                Cross-platform Desktop
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-cyan-400/20 to-green-400/20"></span>
                Enterprise Integration
              </li>
            </ul>
          </div>
        </div>
  
        <!-- SaaS Development -->
        <div class="group relative h-full">
          <div class="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-sm blur-xl transition-all group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
          <div class="flex flex-col h-full p-6 sm:p-8 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] transition-all duration-500 relative">
            <h3 class="text-lg font-light tracking-wide mb-6 bg-gradient-to-r from-pink-400/90 to-purple-400/90 text-transparent bg-clip-text">
              SaaS & Produtos
            </h3>
            <p class="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
              Desenvolvimento completo de produtos SaaS, desde a concepção até o lançamento. Arquitetura escalável e preparada para crescimento.
            </p>
            <ul class="space-y-4 text-sm text-white/70">
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-pink-400/20 to-purple-400/20"></span>
                Multi-tenancy
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-pink-400/20 to-purple-400/20"></span>
                Billing & Subscription
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-pink-400/20 to-purple-400/20"></span>
                Analytics & Métricas
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Cloud & Infrastructure -->
        <div class="group relative h-full">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-green-500/5 rounded-sm blur-xl transition-all group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
          <div class="flex flex-col h-full p-6 sm:p-8 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] transition-all duration-500 relative">
            <h3 class="text-lg font-light tracking-wide mb-6 bg-gradient-to-r from-cyan-400/90 to-green-400/90 text-transparent bg-clip-text">
              Cloud & DevOps
            </h3>
            <p class="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
              Arquiteturas cloud-native escaláveis e seguras. Automatização de infraestrutura e processos de desenvolvimento.
            </p>
            <ul class="space-y-4 text-sm text-white/70">
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-cyan-400/20 to-green-400/20"></span>
                AWS, Azure & GCP
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-cyan-400/20 to-green-400/20"></span>
                Kubernetes & Containers
              </li>
              <li class="flex items-center gap-3">
                <span class="w-px h-3 bg-gradient-to-r from-cyan-400/20 to-green-400/20"></span>
                CI/CD & IaC
              </li>
            </ul>
          </div>
        </div>
  

  </section>

  <!-- New Section: Success Stories -->
<!-- <section class="py-24 px-4 sm:px-6" id="cases">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-2xl sm:text-3xl font-light tracking-wide mb-6 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
        Cases de Sucesso
      </h2>
      <p class="text-white/60 max-w-2xl mx-auto">
        Conheça alguns dos projetos que transformamos em realidade
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">

      <div class="group relative">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-sm blur-xl transition-all group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
        <div class="relative bg-white/[0.02] border border-white/[0.05] p-6 rounded-sm hover:bg-white/[0.04] transition-all duration-300">
          <div class="mb-4">
            <h3 class="text-lg font-light bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
              Fintech SaaS
            </h3>
            <p class="text-white/40 text-sm">Setor Financeiro</p>
          </div>
          <p class="text-white/60 text-sm mb-4">
            Desenvolvimento de plataforma SaaS para gestão financeira com processamento em tempo real e integração com APIs bancárias.
          </p>
          <ul class="flex flex-wrap gap-2">
            <li class="px-2 py-1 bg-white/[0.02] border border-white/[0.05] rounded-sm text-xs text-white/40">React</li>
            <li class="px-2 py-1 bg-white/[0.02] border border-white/[0.05] rounded-sm text-xs text-white/40">Node.js</li>
            <li class="px-2 py-1 bg-white/[0.02] border border-white/[0.05] rounded-sm text-xs text-white/40">AWS</li>
          </ul>
        </div>
      </div>

      <div class="group relative">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-sm blur-xl transition-all group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
        <div class="relative bg-white/[0.02] border border-white/[0.05] p-6 rounded-sm hover:bg-white/[0.04] transition-all duration-300">
          <div class="mb-4">
            <h3 class="text-lg font-light bg-gradient-to-r from-purple-400/90 to-blue-400/90 text-transparent bg-clip-text">
              App de Logística
            </h3>
            <p class="text-white/40 text-sm">Setor de Transportes</p>
          </div>
          <p class="text-white/60 text-sm mb-4">
            Aplicativo mobile para rastreamento e gestão de entregas em tempo real com otimização de rotas usando IA.
          </p>
          <ul class="flex flex-wrap gap-2">
            <li class="px-2 py-1 bg-white/[0.02] border border-white/[0.05] rounded-sm text-xs text-white/40">Flutter</li>
            <li class="px-2 py-1 bg-white/[0.02] border border-white/[0.05] rounded-sm text-xs text-white/40">.NET</li>
            <li class="px-2 py-1 bg-white/[0.02] border border-white/[0.05] rounded-sm text-xs text-white/40">Azure</li>
          </ul>
        </div>
      </div>

      <div class="group relative">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-green-500/5 rounded-sm blur-xl transition-all group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
        <div class="relative bg-white/[0.02] border border-white/[0.05] p-6 rounded-sm hover:bg-white/[0.04] transition-all duration-300">
          <div class="mb-4">
            <h3 class="text-lg font-light bg-gradient-to-r from-cyan-400/90 to-green-400/90 text-transparent bg-clip-text">
              Plataforma ERP
            </h3>
            <p class="text-white/40 text-sm">Varejo & E-commerce</p>
          </div>
          <p class="text-white/60 text-sm mb-4">
            Sistema integrado de gestão empresarial com módulos de vendas, estoque, financeiro e BI em tempo real.
          </p>
          <ul class="flex flex-wrap gap-2">
            <li class="px-2 py-1 bg-white/[0.02] border border-white/[0.05] rounded-sm text-xs text-white/40">Vue.js</li>
            <li class="px-2 py-1 bg-white/[0.02] border border-white/[0.05] rounded-sm text-xs text-white/40">Python</li>
            <li class="px-2 py-1 bg-white/[0.02] border border-white/[0.05] rounded-sm text-xs text-white/40">GCP</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section> -->


 <!-- Enhanced Methodology Section -->
 <section class="py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent relative" id="metodologia">
  <!-- Background Decoration -->
  <div class="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] via-transparent to-transparent"></div>
  <div class="absolute right-0 top-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
  
  <div class="max-w-7xl mx-auto relative">
    <!-- Header -->
    <div class="text-center mb-20">
      <h2 class="text-2xl sm:text-3xl font-light tracking-wide mb-6 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
        Nossa Metodologia
      </h2>
      <p class="text-white/60 max-w-2xl mx-auto text-lg">
        Combinamos as melhores práticas de desenvolvimento com processos inovadores para entregar soluções excepcionais
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Feature-Driven Development -->
      <div class="group">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-sm blur-xl transition-all duration-500 group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
          <div class="relative p-8 bg-white/[0.02] border border-white/[0.05] rounded-sm backdrop-blur-sm">
            <div class="flex items-start gap-6 mb-8">
              <div class="w-12 h-12 flex items-center justify-center rounded-sm bg-blue-500/10">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-light tracking-wide mb-3 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
                  Desenvolvimento por Funcionalidade
                </h3>
                <p class="text-white/60 leading-relaxed">
                  Focamos na entrega de funcionalidades completas e testadas, garantindo valor imediato ao seu projeto. Cada feature é desenvolvida, testada e documentada de forma independente.
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="group/item">
                <div class="p-4 bg-white/[0.02] border border-white/[0.05] rounded-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-blue-500/20">
                  <div class="flex items-center gap-4">
                    <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm bg-blue-500/10 text-blue-400/90 text-sm">01</span>
                    <div>
                      <h4 class="text-white/90 font-light mb-1">Análise & Design</h4>
                      <p class="text-white/50 text-sm">Planejamento detalhado de cada funcionalidade com foco em arquitetura e usabilidade</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="group/item">
                <div class="p-4 bg-white/[0.02] border border-white/[0.05] rounded-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-blue-500/20">
                  <div class="flex items-center gap-4">
                    <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm bg-blue-500/10 text-blue-400/90 text-sm">02</span>
                    <div>
                      <h4 class="text-white/90 font-light mb-1">Desenvolvimento Iterativo</h4>
                      <p class="text-white/50 text-sm">Implementação ágil com ciclos curtos de feedback e validação contínua</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="group/item">
                <div class="p-4 bg-white/[0.02] border border-white/[0.05] rounded-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-blue-500/20">
                  <div class="flex items-center gap-4">
                    <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm bg-blue-500/10 text-blue-400/90 text-sm">03</span>
                    <div>
                      <h4 class="text-white/90 font-light mb-1">Testes Automatizados</h4>
                      <p class="text-white/50 text-sm">Cobertura completa de testes garantindo qualidade e confiabilidade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quality Assurance -->
      <div class="group">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-sm blur-xl transition-all duration-500 group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
          <div class="relative p-8 bg-white/[0.02] border border-white/[0.05] rounded-sm backdrop-blur-sm">
            <div class="flex items-start gap-6 mb-8">
              <div class="w-12 h-12 flex items-center justify-center rounded-sm bg-purple-500/10">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-light tracking-wide mb-3 bg-gradient-to-r from-purple-400/90 to-blue-400/90 text-transparent bg-clip-text">
                  Garantia de Qualidade
                </h3>
                <p class="text-white/60 leading-relaxed">
                  Nossa abordagem integra qualidade em cada etapa do desenvolvimento, utilizando ferramentas de IA e automação para garantir excelência técnica.
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <div class="group/item">
                <div class="p-4 bg-white/[0.02] border border-white/[0.05] rounded-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-purple-500/20">
                  <div class="flex items-center gap-4">
                    <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm bg-purple-500/10 text-purple-400/90 text-sm">01</span>
                    <div>
                      <h4 class="text-white/90 font-light mb-1">Code Review Inteligente</h4>
                      <p class="text-white/50 text-sm">Análise automatizada e manual do código com ferramentas de IA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="group/item">
                <div class="p-4 bg-white/[0.02] border border-white/[0.05] rounded-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-purple-500/20">
                  <div class="flex items-center gap-4">
                    <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm bg-purple-500/10 text-purple-400/90 text-sm">02</span>
                    <div>
                      <h4 class="text-white/90 font-light mb-1">Documentação Viva</h4>
                      <p class="text-white/50 text-sm">Documentação técnica e de negócio atualizada continuamente</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="group/item">
                <div class="p-4 bg-white/[0.02] border border-white/[0.05] rounded-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-purple-500/20">
                  <div class="flex items-center gap-4">
                    <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm bg-purple-500/10 text-purple-400/90 text-sm">03</span>
                    <div>
                      <h4 class="text-white/90 font-light mb-1">Monitoramento Contínuo</h4>
                      <p class="text-white/50 text-sm">Análise em tempo real de performance e qualidade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div class="text-center">
        <div class="text-3xl font-light mb-2 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">98%</div>
        <div class="text-white/40 text-sm">Satisfação do Cliente</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-light mb-2 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">100%</div>
        <div class="text-white/40 text-sm">Cobertura de Testes</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-light mb-2 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">24/7</div>
        <div class="text-white/40 text-sm">Monitoramento</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-light mb-2 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">99.9%</div>
        <div class="text-white/40 text-sm">Uptime</div>
      </div>
    </div>
  </div>
</section>

<section class="py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" id="como-trabalhamos">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-24">
      <h2 class="text-2xl sm:text-3xl font-light tracking-wide mb-6 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
        Processo de Desenvolvimento
      </h2>
      <p class="text-white/60 max-w-2xl mx-auto text-lg">
        Uma abordagem estruturada e transparente para transformar ideias em soluções de alto impacto
      </p>
    </div>

    <div class="space-y-40">
      <!-- Enterprise Software Development -->
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-sm blur-3xl opacity-20"></div>
        <div class="grid md:grid-cols-2 gap-16 items-center relative">
          <div class="space-y-10 order-2 md:order-1">
            <div>
              <h3 class="text-2xl font-light bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text mb-4">
                Desenvolvimento Enterprise
              </h3>
              <p class="text-white/60 text-lg leading-relaxed">
                Transformamos requisitos complexos em soluções empresariais robustas e escaláveis, 
                utilizando arquiteturas modernas e práticas de desenvolvimento de classe mundial.
              </p>
            </div>

            <div class="space-y-8 bg-white/[0.02] border border-white/[0.05] p-8 rounded-sm backdrop-blur-sm">
              <div class="group">
                <div class="flex items-start gap-6">
                  <div class="flex-shrink-0">
                    <span class="w-12 h-12 flex items-center justify-center rounded-sm bg-blue-500/10 text-blue-400/90 text-lg font-light">01</span>
                  </div>
                  <div>
                    <h4 class="text-white/90 font-light text-lg mb-3">Discovery & Arquitetura</h4>
                    <p class="text-white/60 leading-relaxed">
                      Iniciamos com uma análise profunda do seu negócio através de workshops especializados. 
                      Nossa equipe de arquitetos desenvolve um blueprint técnico detalhado, definindo padrões 
                      de arquitetura, integrações necessárias e estratégias de escalabilidade.
                    </p>
                  </div>
                </div>
              </div>

              <div class="group">
                <div class="flex items-start gap-6">
                  <div class="flex-shrink-0">
                    <span class="w-12 h-12 flex items-center justify-center rounded-sm bg-blue-500/10 text-blue-400/90 text-lg font-light">02</span>
                  </div>
                  <div>
                    <h4 class="text-white/90 font-light text-lg mb-3">Design & Prototipagem</h4>
                    <p class="text-white/60 leading-relaxed">
                      Criamos protótipos interativos e definimos a arquitetura técnica utilizando as tecnologias 
                      mais apropriadas para seu caso. Estabelecemos KPIs claros e métricas de sucesso para 
                      cada etapa do desenvolvimento.
                    </p>
                  </div>
                </div>
              </div>

              <div class="group">
                <div class="flex items-start gap-6">
                  <div class="flex-shrink-0">
                    <span class="w-12 h-12 flex items-center justify-center rounded-sm bg-blue-500/10 text-blue-400/90 text-lg font-light">03</span>
                  </div>
                  <div>
                    <h4 class="text-white/90 font-light text-lg mb-3">Desenvolvimento & Qualidade</h4>
                    <p class="text-white/60 leading-relaxed">
                      Implementação baseada em funcionalidades com ciclos curtos de feedback. Cada feature passa 
                      por rigorosos testes automatizados, revisões de código e validações de qualidade antes 
                      da integração.
                    </p>
                  </div>
                </div>
              </div>

              <div class="group">
                <div class="flex items-start gap-6">
                  <div class="flex-shrink-0">
                    <span class="w-12 h-12 flex items-center justify-center rounded-sm bg-blue-500/10 text-blue-400/90 text-lg font-light">04</span>
                  </div>
                  <div>
                    <h4 class="text-white/90 font-light text-lg mb-3">Deploy & Evolução Contínua</h4>
                    <p class="text-white/60 leading-relaxed">
                      Implementamos estratégias de deploy zero-downtime e monitoramento em tempo real. 
                      Mantemos ciclos contínuos de otimização e evolução do sistema baseados em métricas 
                      e feedback dos usuários.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative order-1 md:order-2">
            <div class="aspect-square rounded-sm overflow-hidden group relative">
              <div class="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10"></div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>
              <img 
                src="/api/placeholder/800/800"
                alt="Enterprise Software Development" 
                class="w-full h-full object-cover rounded-sm mix-blend-luminosity opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Cloud & DevOps Excellence -->
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-green-500/5 rounded-sm blur-3xl opacity-20"></div>
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="space-y-10 order-2 md:order-1">
            <div>
              <h3 class="text-2xl font-light bg-gradient-to-r from-cyan-400/90 to-green-400/90 text-transparent bg-clip-text mb-4">
                Cloud & DevOps Excellence
              </h3>
              <p class="text-white/60 text-lg leading-relaxed">
                Implementamos infraestruturas cloud-native de alta performance com automação avançada, 
                garantindo escalabilidade, segurança e eficiência operacional.
              </p>
            </div>

            <div class="space-y-8 bg-white/[0.02] border border-white/[0.05] p-8 rounded-sm backdrop-blur-sm">
              <div class="group">
                <div class="flex items-start gap-6">
                  <div class="flex-shrink-0">
                    <span class="w-12 h-12 flex items-center justify-center rounded-sm bg-cyan-500/10 text-cyan-400/90 text-lg font-light">01</span>
                  </div>
                  <div>
                    <h4 class="text-white/90 font-light text-lg mb-3">Consultoria Estratégica</h4>
                    <p class="text-white/60 leading-relaxed">
                      Análise profunda da infraestrutura existente e definição de estratégias de 
                      modernização. Desenvolvimento de roadmap personalizado para transformação digital 
                      e adoção de práticas cloud-native.
                    </p>
                  </div>
                </div>
              </div>

              <div class="group">
                <div class="flex items-start gap-6">
                  <div class="flex-shrink-0">
                    <span class="w-12 h-12 flex items-center justify-center rounded-sm bg-cyan-500/10 text-cyan-400/90 text-lg font-light">02</span>
                  </div>
                  <div>
                    <h4 class="text-white/90 font-light text-lg mb-3">Arquitetura Cloud-Native</h4>
                    <p class="text-white/60 leading-relaxed">
                      Design de arquiteturas distribuídas resilientes com foco em alta disponibilidade. 
                      Implementação de práticas de Infrastructure as Code e políticas de segurança 
                      enterprise-grade.
                    </p>
                  </div>
                </div>
              </div>

              <div class="group">
                <div class="flex items-start gap-6">
                  <div class="flex-shrink-0">
                    <span class="w-12 h-12 flex items-center justify-center rounded-sm bg-cyan-500/10 text-cyan-400/90 text-lg font-light">03</span>
                  </div>
                  <div>
                    <h4 class="text-white/90 font-light text-lg mb-3">DevOps & Automação</h4>
                    <p class="text-white/60 leading-relaxed">
                      Configuração de pipelines CI/CD altamente automatizados e implementação de 
                      práticas DevSecOps. Integração de ferramentas de segurança e qualidade em 
                      todo o ciclo de desenvolvimento.
                    </p>
                  </div>
                </div>
              </div>

              <div class="group">
                <div class="flex items-start gap-6">
                  <div class="flex-shrink-0">
                    <span class="w-12 h-12 flex items-center justify-center rounded-sm bg-cyan-500/10 text-cyan-400/90 text-lg font-light">04</span>
                  </div>
                  <div>
                    <h4 class="text-white/90 font-light text-lg mb-3">Reliability Engineering</h4>
                    <p class="text-white/60 leading-relaxed">
                      Implementação de práticas SRE com monitoramento proativo e gestão avançada de 
                      incidentes. Sistemas de observabilidade distribuída e analytics em tempo real 
                      para tomada de decisão.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative order-1 md:order-2">
            <div class="aspect-square rounded-sm overflow-hidden group relative">
              <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent z-10"></div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>
              <img 
                src="/api/placeholder/800/800"
                alt="Cloud Infrastructure" 
                class="w-full h-full object-cover rounded-sm mix-blend-luminosity opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <!-- Enhanced Tech Stack -->
  <!-- <section class="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" id="tecnologias">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-wrap justify-center items-center gap-x-32 gap-y-8">

        <svg class="h-16 w-16 text-white/70 hover:text-white/90 transition-colors duration-300" viewBox="0 -1.428 255.582 290.108">
          <path fill="currentColor" d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76-2.052-3.603-5.125-6.622-9.247-9.009-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.1-27.163.27-13.543 7.986-81.348 46.833-101.553 58.536-8.321 4.818-12.37 12.19-12.372 21.771-.013 39.455 0 78.91-.013 118.365 0 4.724.991 8.91 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.987-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"/>
          <path fill="currentColor" d="M201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z"/>
          <path fill="currentColor" d="M128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z"/>
        </svg>
  

        <svg class="h-16 w-16 text-white/70 hover:text-white/90 transition-colors duration-300" viewBox="0 0 98.1 118">
          <path fill="currentColor" d="M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"/>
          <path fill="currentColor" d="M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"/>
        </svg>
  

        <svg class="h-16 w-16 text-white/70 hover:text-white/90 transition-colors duration-300" viewBox="0 0 1999 2474.2">
          <path fill="currentColor" d="m381 1618-381-381 1237.1-1237h761.9m0 1141.5h-761.9l-285.4 285.4 381 381"/>
          <path fill="currentColor" d="m951.7 2188.8 285.4 285.4h761.9l-666.3-666.3"/>
          <path fill="currentColor" d="m571.6 1808.1 380.4-380.5 380.4 380.4-380.4 380.5z"/>
        </svg>
  

        <svg class="h-16 w-16 text-white/70 hover:text-white/90 transition-colors duration-300" viewBox="0 0 256 181">
          <path fill="currentColor" d="M0 180.664l60.222-90.332L0 0h45.166l60.222 90.332-60.222 90.332H0z"/>
          <path fill="currentColor" d="M60.222 180.664l60.222-90.332L60.222 0h45.166L225.83 180.664h-45.166l-37.637-56.457-37.639 56.457H60.222z"/>
          <path fill="currentColor" d="M205.757 127.971l-20.072-30.11 70.257-.002v30.112h-50.185zM175.647 82.805l-20.074-30.11 100.369-.002v30.112h-80.295z"/>
        </svg>
  

        <svg class="h-16 w-16 text-white/70 hover:text-white/90 transition-colors duration-300" viewBox="0 0 256 264">
          <path fill="currentColor" d="M127.879 0l-2.937 2.931v178.625l2.937 2.931 127.879-75.533z"/>
          <path fill="currentColor" d="M127.879 0L0 108.954l127.879 75.533V0z"/>
          <path fill="currentColor" d="M127.879 201.351l-1.575 1.92v98.136l1.575 4.591L256 134.563z"/>
          <path fill="currentColor" d="M127.879 305.998V201.351L0 134.563z"/>
        </svg>
  
    
        <svg class="h-16 w-16 text-white/70 hover:text-white/90 transition-colors duration-300" viewBox="0 0 256 256">
          <path fill="currentColor" d="M254.251 124.862l-10.747-6.653a145.81 145.81 0 0 0-.306-3.13l9.236-8.615a3.686 3.686 0 0 0 1.105-3.427 3.685 3.685 0 0 0-2.33-2.744l-11.807-4.415a137.355 137.355 0 0 0-.925-3.048l7.365-10.229a3.698 3.698 0 0 0-2.407-5.814l-12.45-2.025c-.484-.944-.988-1.874-1.496-2.796l5.231-11.483a3.683 3.683 0 0 0-.288-3.59 3.678 3.678 0 0 0-3.204-1.642l-12.636.44a99.848 99.848 0 0 0-1.996-2.421l2.904-12.308a3.694 3.694 0 0 0-.986-3.466 3.698 3.698 0 0 0-3.464-.986l-12.305 2.901a106.192 106.192 0 0 0-2.426-1.996l.442-12.635a3.684 3.684 0 0 0-1.64-3.205 3.693 3.693 0 0 0-3.59-.29l-11.48 5.234a133.235 133.235 0 0 0-2.796-1.5l-2.03-12.452a3.7 3.7 0 0 0-5.812-2.407zm-60.195 167.5c-3.838 1.702-5.57 6.203-3.867 10.045a7.595 7.595 0 0 0 10.03 3.875c3.833-1.703 5.565-6.2 3.865-10.048a7.594 7.594 0 0 0-10.028-3.872z"/>
        </svg>
      </div>
    </div>
  </section> -->

  <!-- Enhanced Contact Section -->
  <section class="min-h-screen flex items-center py-20 sm:py-24 px-4 sm:px-6" id="contato">
    <div class="max-w-6xl mx-auto w-full">
      <h2 class="text-2xl sm:text-3xl font-light tracking-wide text-center mb-16 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
        Vamos Iniciar Seu Projeto
      </h2>
      
      <div class="grid md:grid-cols-[1fr,1.5fr] gap-8 items-start">
        <!-- Instructional Side -->
        <div class="bg-white/[0.02] border border-white/[0.05] p-8 rounded-sm">
          <h3 class="text-lg font-light tracking-wide mb-6 bg-gradient-to-r from-blue-400/90 to-cyan-400/90 text-transparent bg-clip-text">
            Como Podemos Ajudar
          </h3>
          <div class="space-y-6">
            <div class="space-y-3">
              <h4 class="text-white/80 text-sm font-medium">Desenvolvimento</h4>
              <p class="text-white/60 text-sm">
                Descreva sua necessidade de software, seja mobile, web ou desktop. 
                Quanto mais detalhes sobre funcionalidades e objetivos, melhor.
              </p>
            </div>
        
            <div class="space-y-3">
              <h4 class="text-white/80 text-sm font-medium">Cloud & DevOps</h4>
              <p class="text-white/60 text-sm">
                Explique suas necessidades de infraestrutura e escalabilidade. 
                Compartilhe desafios específicos do seu ambiente.
              </p>
            </div>
  
            <div class="pt-4 border-t border-white/[0.05]">
              <p class="text-white/60 text-sm italic">
                Nossa equipe analisará sua solicitação e retornará em até 24 horas 
                com uma proposta inicial ou agendamento para discussão detalhada.
              </p>
            </div>
          </div>
        </div>
  
        <!-- Contact Form Side -->
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-sm blur-xl"></div>
          <form class="space-y-8 relative bg-white/[0.02] p-8 border border-white/[0.05] backdrop-blur-sm">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="relative group">
                <label class="text-white/50 text-sm mb-2 block">Seu Nome</label>
                <input type="text" 
                       class="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] focus:border-blue-500/20 outline-none transition-all duration-300 rounded-sm">
              </div>
              <div class="relative group">
                <label class="text-white/50 text-sm mb-2 block">Seu Email</label>
                <input type="email" 
                       class="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] focus:border-blue-500/20 outline-none transition-all duration-300 rounded-sm">
              </div>
            </div>
  
            <div class="space-y-6">
              <div class="relative group">
                <label class="text-white/50 text-sm mb-2 block">Área do Projeto</label>
                <select class="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] focus:border-blue-500/20 outline-none transition-all duration-300 rounded-sm text-white/70">
                  <option value="" disabled selected>Selecione uma área</option>
                  <option value="desenvolvimento">Desenvolvimento de Software</option>
                  <option value="cloud">Cloud & DevOps</option>
                </select>
              </div>
  
              <div class="relative group">
                <label class="text-white/50 text-sm mb-2 block">Descrição do Projeto</label>
                <textarea 
                  placeholder="Descreva os objetivos, desafios e resultados esperados do seu projeto..." 
                  rows="6" 
                  class="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] focus:border-blue-500/20 outline-none transition-all duration-300 rounded-sm placeholder-white/30 resize-none"></textarea>
              </div>
            </div>
  
            <button type="submit" 
                    class="w-full px-8 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border border-blue-500/20 text-sm tracking-wider transition-all duration-300 rounded-sm">
              Iniciar Conversa
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Enhanced Footer -->
  <footer class="py-8 px-4 sm:px-6 border-t border-white/[0.05] relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none"></div>
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 relative">
      <p class="text-sm text-white/40 tracking-wider">&copy; 2024 Azulbit</p>
      <div class="flex items-center gap-6">
        <a href="#" class="text-sm text-white/40 hover:text-white/60 transition-colors duration-300">LinkedIn</a>
        <a href="#" class="text-sm text-white/40 hover:text-white/60 transition-colors duration-300">GitHub</a>
        <a href="#" class="text-sm text-white/40 hover:text-white/60 transition-colors duration-300">Twitter</a>
      </div>
    </div>
  </footer>
</div>

<style>
  /*
   * Rain effect background
   */

   .hero-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30vh;
  background: linear-gradient(to bottom, 
    rgba(10, 10, 11, 0) 0%,
    rgba(10, 10, 11, 0.8) 70%,
    rgba(10, 10, 11, 1) 100%
  );
  pointer-events: none;
}


  .container2::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    backdrop-filter: blur(1em) brightness(6);
    background-image: radial-gradient(
      circle at 50% 50%,
      #0000 0,
      #0000 2px,
      hsl(0 0 4%) 2px
    );
    background-size: 8px 8px;
  }

  .container2 {
    position: relative;
    width: 100%;
    height: 100%;
    --c: #09f;
    background-color: #000;
    background-image: radial-gradient(4px 100px at 0px 235px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 235px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 117.5px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 252px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 252px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 126px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 150px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 150px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 75px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 253px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 253px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 126.5px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 204px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 204px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 102px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 134px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 134px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 67px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 179px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 179px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 89.5px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 299px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 299px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 149.5px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 215px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 215px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 107.5px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 281px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 281px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 140.5px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 158px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 158px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 79px, var(--c) 100%, #0000 150%),
      radial-gradient(4px 100px at 0px 210px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 210px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 105px, var(--c) 100%, #0000 150%);
      -webkit-mask-image: linear-gradient(to bottom, 
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  mask-image: linear-gradient(to bottom, 
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );

      background-size:
      300px 235px,
      300px 235px,
      300px 235px,
      300px 252px,
      300px 252px,
      300px 252px,
      300px 150px,
      300px 150px,
      300px 150px,
      300px 253px,
      300px 253px,
      300px 253px,
      300px 204px,
      300px 204px,
      300px 204px,
      300px 134px,
      300px 134px,
      300px 134px,
      300px 179px,
      300px 179px,
      300px 179px,
      300px 299px,
      300px 299px,
      300px 299px,
      300px 215px,
      300px 215px,
      300px 215px,
      300px 281px,
      300px 281px,
      300px 281px,
      300px 158px,
      300px 158px,
      300px 158px,
      300px 210px,
      300px 210px,
      300px 210px;
    animation: hi 150s linear infinite;
  }

  @keyframes hi {
    0% {
      background-position:
        0px 220px,
        3px 220px,
        151.5px 337.5px,
        25px 24px,
        28px 24px,
        176.5px 150px,
        50px 16px,
        53px 16px,
        201.5px 91px,
        75px 224px,
        78px 224px,
        226.5px 350.5px,
        100px 19px,
        103px 19px,
        251.5px 121px,
        125px 120px,
        128px 120px,
        276.5px 187px,
        150px 31px,
        153px 31px,
        301.5px 120.5px,
        175px 235px,
        178px 235px,
        326.5px 384.5px,
        200px 121px,
        203px 121px,
        351.5px 228.5px,
        225px 224px,
        228px 224px,
        376.5px 364.5px,
        250px 26px,
        253px 26px,
        401.5px 105px,
        275px 75px,
        278px 75px,
        426.5px 180px;
    }

    to {
      background-position:
        0px 6800px,
        3px 6800px,
        151.5px 6917.5px,
        25px 13632px,
        28px 13632px,
        176.5px 13758px,
        50px 5416px,
        53px 5416px,
        201.5px 5491px,
        75px 17175px,
        78px 17175px,
        226.5px 17301.5px,
        100px 5119px,
        103px 5119px,
        251.5px 5221px,
        125px 8428px,
        128px 8428px,
        276.5px 8495px,
        150px 9876px,
        153px 9876px,
        301.5px 9965.5px,
        175px 13391px,
        178px 13391px,
        326.5px 13540.5px,
        200px 14741px,
        203px 14741px,
        351.5px 14848.5px,
        225px 18770px,
        228px 18770px,
        376.5px 18910.5px,
        250px 5082px,
        253px 5082px,
        401.5px 5161px,
        275px 6375px,
        278px 6375px,
        426.5px 6480px;
    }
  }




  /* Base styles */
  :global(html) {
    scroll-behavior: smooth;
  }
  
  :global(body) {
    margin: 0;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
</style>
