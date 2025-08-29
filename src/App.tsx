import React, { useState } from 'react';
import { Printer, Scale, Shield, Eye, Cookie, Lock, Clock, Globe, Users, FileText, Mail, ExternalLink } from 'lucide-react';

interface CompanyData {
  NOME_DA_EMPRESA: string;
  DESCRICAO_DO_SERVICO: string;
  EMAIL_DPO: string;
  URL_CANAL_TITULAR: string;
}

interface NavigationItem {
  id: string;
  title: string;
}

const PrivacyPolicy: React.FC = () => {
  const [currentYear] = useState<number>(new Date().getFullYear());

  // Configurações da empresa - substitua pelos dados reais
  const companyData: CompanyData = {
    NOME_DA_EMPRESA: "Sua Empresa",
    DESCRICAO_DO_SERVICO: "nossos serviços digitais",
    EMAIL_DPO: "devfuzabalta@gmail.com",
    URL_CANAL_TITULAR: "#"
  };

  const handlePrint = (): void => {
    window.print();
  };

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen" style={{
      background: `
        radial-gradient(1200px 600px at 100% -10%, rgba(96,165,250,0.15), transparent 60%),
        radial-gradient(1000px 600px at -20% 120%, rgba(56,189,248,0.12), transparent 60%),
        #0b1020
      `,
      color: '#e5e7eb'
    }}>
      {/* Header */}
      <header className="sticky top-0 z-10" style={{
        background: 'linear-gradient(180deg, rgba(11,16,32,0.95), rgba(11,16,32,0.75), transparent)',
        backdropFilter: 'blur(8px)'
      }}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-9 h-9 rounded-xl shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #38bdf8)',
                boxShadow: '0 0 0 2px rgba(255,255,255,0.1) inset'
              }}
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold text-blue-100" style={{
                  background: 'rgba(96,165,250,0.12)',
                  border: '1px solid rgba(96,165,250,0.35)'
                }}>
                  <Scale size={16} />
                  LGPD Ready
                </div>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-1">Política de Privacidade</h1>
              <div className="text-sm text-slate-400">
                Última atualização: <time dateTime="2025-08-28">28/08/2025</time>
              </div>
            </div>
          </div>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-bold text-white transition-all"
            style={{
              background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
              boxShadow: '0 8px 24px rgba(59,130,246,0.35)'
            }}
          >
            <Printer size={16} />
            Imprimir
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid gap-4 md:grid-cols-[1fr_320px]">
          {/* Article */}
          <article className="p-6 rounded-2xl shadow-xl" style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <p className="text-slate-400 mb-6">
              Esta Política explica como a <span className="text-blue-200">{companyData.NOME_DA_EMPRESA}</span> ("nós") 
              coleta, usa, compartilha e protege dados pessoais ao oferecer <span className="text-blue-200">{companyData.DESCRICAO_DO_SERVICO}</span>. 
              Cumprimos a Lei nº 13.709/2018 (LGPD) e, quando aplicável, o Regulamento (UE) 2016/679 (GDPR).
            </p>

            {/* Section 1 */}
            <section id="controlador" className="mb-8 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                <Users size={20} />
                1. Controlador e contato
              </h2>
              <div className="overflow-hidden rounded-xl">
                <table className="w-full border-collapse bg-transparent">
                  <tbody>
                    <tr>
                      <th className="border-b border-white/10 p-3 text-left text-blue-200">E-mail</th>
                      <td className="border-b border-white/10 p-3">
                        <a href={`mailto:${companyData.EMAIL_DPO}`} className="text-blue-400 hover:text-blue-300">
                          {companyData.EMAIL_DPO}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className="border-b border-white/10 p-3 text-left text-blue-200">Encarregado (DPO)</th>
                      <td className="border-b border-white/10 p-3">
                        <a href={`mailto:${companyData.EMAIL_DPO}`} className="text-blue-400 hover:text-blue-300">
                          Desenvolvedor Roger Allan
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 2 */}
            <section id="coleta" className="mb-8 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                <Eye size={20} />
                2. Quais dados coletamos
              </h2>
              <ul className="space-y-2 ml-4">
                <li>• Identificação: nome, e-mail, telefone, documento (quando necessário).</li>
                <li>• Dados de uso: logs de acesso, IP, identificadores de dispositivo e cookies.</li>
                <li>• Transacionais: histórico de compras/assinaturas e meios de pagamento (tokenizados por provedores).</li>
                <li>• Suporte: mensagens e anexos enviados em canais de atendimento.</li>
              </ul>
              <p className="text-slate-400 mt-3">
                <span className="px-2 py-1 rounded bg-slate-800 border border-white/10 font-mono text-sm">Dica</span> 
                {' '}Ajuste esta lista para refletir exatamente o que seu produto coleta.
              </p>
            </section>

            {/* Section 3 */}
            <section id="base-legal" className="mb-8 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                <Scale size={20} />
                3. Bases legais
              </h2>
              <p className="mb-3">Tratamos dados com base em:</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>Execução de contrato</strong> — para fornecer o serviço solicitado.</li>
                <li>• <strong>Consentimento</strong> — para comunicações de marketing (opt-in e opt-out a qualquer momento).</li>
                <li>• <strong>Legítimo interesse</strong> — para melhorar recursos, prevenir fraudes e manter a segurança.</li>
                <li>• <strong>Cumprimento de obrigação legal/regulatória</strong> — armazenamento de registros de acesso (Marco Civil da Internet).</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="uso" className="mb-8 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                <FileText size={20} />
                4. Como usamos os dados
              </h2>
              <ul className="space-y-2 ml-4">
                <li>• Operar e manter nossa plataforma e contas de usuário.</li>
                <li>• Personalizar experiência e recomendar conteúdo.</li>
                <li>• Processar pagamentos via parceiros (ex.: gateways) sem acesso ao número completo do cartão.</li>
                <li>• Comunicar novidades, avisos de segurança e suporte.</li>
                <li>• Analytics, métricas de performance e prevenção de fraudes.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="compartilhamento" className="mb-8 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                <ExternalLink size={20} />
                5. Compartilhamento
              </h2>
              <p className="mb-3">Podemos compartilhar dados com:</p>
              <ul className="space-y-2 ml-4">
                <li>• Provedores de infraestrutura, hospedagem, analytics e atendimento.</li>
                <li>• Processadores de pagamento e antifraude.</li>
                <li>• Autoridades quando requisitado por lei.</li>
              </ul>
              <p className="mt-3">Exigimos de todos os operadores o cumprimento da LGPD e acordos de processamento de dados.</p>
            </section>

            {/* Section 6 */}
            <section id="direitos" className="mb-8 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                <Shield size={20} />
                6. Seus direitos (LGPD)
              </h2>
              <p className="mb-3">
                Você pode solicitar: confirmação de tratamento, acesso, correção, anonimização, portabilidade, 
                eliminação, informação sobre compartilhamentos e revogação de consentimento.
              </p>
              <p>
                Para exercer, contate <a href={`mailto:${companyData.EMAIL_DPO}`} className="text-blue-400 hover:text-blue-300">{companyData.EMAIL_DPO}</a>. 
                Responderemos em prazo razoável.
              </p>
            </section>

            {/* Section 7 */}
            <section id="cookies" className="mb-8 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                <Cookie size={20} />
                7. Cookies e tecnologias similares
              </h2>
              <p>
                Usamos cookies para autenticação, preferências e analytics. Você pode gerenciar cookies no navegador. 
                Para cookies não essenciais, exibimos um banner de consentimento.
              </p>
            </section>

            {/* Section 8 */}
            <section id="seguranca" className="mb-8 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                <Lock size={20} />
                8. Segurança da informação
              </h2>
              <ul className="space-y-2 ml-4">
                <li>• Criptografia em trânsito (HTTPS/TLS).</li>
                <li>• Controles de acesso e autenticação.</li>
                <li>• Backups e monitoração.</li>
                <li>• Políticas internas de privacidade e segurança.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="retencao" className="mb-8 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                <Clock size={20} />
                9. Retenção e eliminação
              </h2>
              <p>
                Reteremos dados somente pelo período necessário às finalidades e prazos legais. 
                Após esse período, dados serão eliminados ou anonimizados com segurança.
              </p>
            </section>

            {/* Section 10 */}
            <section id="transferencias" className="mb-8 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                <Globe size={20} />
                10. Transferências internacionais
              </h2>
              <p>
                Se houver transferência para fora do Brasil, adotaremos salvaguardas adequadas 
                (ex.: cláusulas contratuais ou padrões equivalentes).
              </p>
            </section>

            {/* Section 11 */}
            <section id="menores" className="mb-8 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                <Users size={20} />
                11. Crianças e adolescentes
              </h2>
              <p>
                Não coletamos dados de menores de 13 anos sem consentimento de responsável legal. 
                Se você acredita que um menor nos forneceu dados, contate-nos.
              </p>
            </section>

            {/* Section 12 */}
            <section id="atualizacoes" className="mb-8 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                <FileText size={20} />
                12. Alterações desta Política
              </h2>
              <p>
                Poderemos atualizar esta Política para refletir mudanças legais, técnicas ou comerciais. 
                Quando necessário, notificaremos os usuários. A data de revisão ficará sempre indicada no topo.
              </p>
            </section>

            {/* Section 13 */}
            <section id="contato" className="mb-8 scroll-mt-20">
              <h2 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2">
                <Mail size={20} />
                13. Como falar conosco
              </h2>
              <p className="mb-2">
                E-mail do DPO/Encarregado: <a href={`mailto:${companyData.EMAIL_DPO}`} className="text-blue-400 hover:text-blue-300">{companyData.EMAIL_DPO}</a>
              </p>
              <p>
                Canal de requisições de titulares: <a href={companyData.URL_CANAL_TITULAR} className="text-blue-400 hover:text-blue-300">{companyData.URL_CANAL_TITULAR}</a>
              </p>
            </section>

            <p className="text-slate-400 text-sm">
              Versão: v1.0 — substitua os campos <span className="px-2 py-1 rounded bg-slate-800 border border-white/10 font-mono">{'{{CHAVES_EM_CHAVES}}'}</span> antes de publicar.
            </p>
          </article>

          {/* Table of Contents */}
          <aside className="p-6 rounded-2xl shadow-xl self-start sticky top-20" style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div className="flex flex-wrap gap-2 mb-4">
              {(['LGPD', 'GDPR', 'Cookies', 'Segurança'] as const).map((tag: string) => (
                <span key={tag} className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs text-slate-400" style={{
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  {tag}
                </span>
              ))}
            </div>
            <nav className="space-y-1">
              {[
                { id: 'controlador', title: '1. Controlador' },
                { id: 'coleta', title: '2. Dados coletados' },
                { id: 'base-legal', title: '3. Bases legais' },
                { id: 'uso', title: '4. Uso dos dados' },
                { id: 'compartilhamento', title: '5. Compartilhamento' },
                { id: 'direitos', title: '6. Direitos' },
                { id: 'cookies', title: '7. Cookies' },
                { id: 'seguranca', title: '8. Segurança' },
                { id: 'retencao', title: '9. Retenção' },
                { id: 'transferencias', title: '10. Transferências' },
                { id: 'menores', title: '11. Menores' },
                { id: 'atualizacoes', title: '12. Alterações' },
                { id: 'contato', title: '13. Contato' }
              ].map((item: NavigationItem) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-6 mt-10 border-t border-white/10">
        <div className="text-sm text-slate-400">
          © {currentYear} {companyData.NOME_DA_EMPRESA} — Todos os direitos reservados. | 
          <a href="#" className="text-blue-200 hover:text-blue-100 ml-1">Termos de Uso</a>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;