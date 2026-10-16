import type { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { generateSeoMetadata } from '@/components/SEO';
import { seoConfig, siteConfig } from '@/lib/site-content';

export function generateMetadata(): Metadata {
  return generateSeoMetadata(
    seoConfig,
    `Política de Privacidade | ${siteConfig.siteName}`,
    'Saiba como o Empório Casarão coleta, usa e protege os seus dados pessoais, em conformidade com a LGPD.'
  );
}

const lastUpdated = '16 de outubro de 2026';

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header config={siteConfig} />
      <div className="container max-w-3xl py-10 md:py-16">
        <h1 className="font-serif text-3xl md:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Última atualização em {lastUpdated}
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground md:text-base">
          <section>
            <p>
              Esta Política de Privacidade descreve como o{' '}
              <strong>{siteConfig.legalName}</strong> (CNPJ {siteConfig.cnpj}),
              responsável pelo site e pela marca {siteConfig.siteName}, coleta,
              usa, armazena e protege os dados pessoais de quem visita este
              site, em conformidade com a Lei Geral de Proteção de Dados
              (LGPD — Lei nº 13.709/2018).
            </p>
            <p className="mt-3">
              Esta política cobre apenas a navegação neste site institucional.
              Se você usa o aplicativo <strong>Clube Casarão</strong> (nosso
              programa de fidelidade com cashback), os dados tratados pelo
              app têm uma política própria, mais detalhada:{' '}
              <Link
                href="/clube/privacidade"
                className="text-highlight underline"
              >
                Política de Privacidade do Clube Casarão
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl">
              Quem somos
            </h2>
            <p className="mt-3">
              {siteConfig.legalName}, inscrita no CNPJ {siteConfig.cnpj}, com
              estabelecimento em {siteConfig.address}.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl">
              Quais dados coletamos
            </h2>
            <p className="mt-3">
              Este site não exige cadastro e não possui formulários que
              coletem dados pessoais diretamente. Ainda assim, coletamos
              informações nas seguintes situações:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong>Navegação no site:</strong> utilizamos o Google
                Analytics e o Google Tag Manager para entender como o site é
                usado (páginas visitadas, tempo de navegação, dispositivo e
                origem do acesso), por meio de cookies e identificadores
                anônimos.
              </li>
              <li>
                <strong>Contato via WhatsApp ou Instagram:</strong> ao clicar
                nos botões de contato, você é direcionado para o WhatsApp ou
                Instagram. As informações trocadas nessas conversas seguem as
                políticas de privacidade dessas plataformas, e são usadas por
                nós apenas para responder ao seu contato.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl">
              Para que usamos esses dados
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Entender e melhorar a experiência de navegação no site;</li>
              <li>Responder a mensagens e pedidos de contato;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
            <p className="mt-3">
              Não vendemos nem compartilhamos seus dados com terceiros para
              fins de publicidade de terceiros. Dados de navegação são
              tratados pelo Google (Analytics e Tag Manager) conforme as
              políticas de privacidade do próprio Google.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl">
              Cookies
            </h2>
            <p className="mt-3">
              Usamos cookies de análise de audiência para entender o uso do
              site. Você pode desativar os cookies diretamente nas
              configurações do seu navegador, embora isso possa afetar
              algumas funcionalidades.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl">
              Seus direitos
            </h2>
            <p className="mt-3">
              De acordo com a LGPD, você pode solicitar, a qualquer momento:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Confirmação da existência de tratamento de dados;</li>
              <li>Acesso, correção ou atualização dos seus dados;</li>
              <li>Exclusão de dados pessoais tratados por nós;</li>
              <li>Informação sobre com quem compartilhamos seus dados;</li>
              <li>Revogação do consentimento, quando aplicável.</li>
            </ul>
            <p className="mt-3">
              Para exercer esses direitos, entre em contato pelo WhatsApp{' '}
              <Link
                href={`https://wa.me/55${siteConfig.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-highlight underline"
              >
                {siteConfig.whatsapp}
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl">
              Segurança
            </h2>
            <p className="mt-3">
              Adotamos medidas técnicas e organizacionais razoáveis para
              proteger os dados tratados por meio deste site contra acessos
              não autorizados, perda ou uso indevido.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl md:text-2xl">
              Alterações desta política
            </h2>
            <p className="mt-3">
              Esta política pode ser atualizada periodicamente para refletir
              melhorias no site ou mudanças na legislação. A data da última
              atualização está indicada no topo desta página.
            </p>
          </section>
        </div>
      </div>
      <Footer config={siteConfig} />
    </div>
  );
}
