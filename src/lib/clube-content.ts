// Textos institucionais e legais do Clube Casarão (programa de fidelidade com cashback).
// Espelha o conteúdo de packages/shared/src/privacidade.ts e regulamento.ts no repositório
// do app (ClubeCasarao/clube-casarao). Ao mudar uma regra lá, atualize aqui também.

export const clubeControlador = {
  razaoSocial: 'EMPORIO CASARAO PIRACAIA LTDA',
  cnpj: '65.501.697/0001-20',
  endereco: 'Praça Nossa Senhora do Rosário, 111, Centro, Piracaia/SP, CEP 12970-073',
  email: 'emporiocasarao.piracaia@gmail.com',
  telefone: '(11) 99219-5337',
  whatsapp: '5511992195337',
};

export type SecaoTexto = { titulo: string; paragrafos: string[] };

export const privacidadeVersao = '1.0';
export const privacidadeAtualizadaEm = '13 de outubro de 2026';

export const politicaPrivacidadeClube: SecaoTexto[] = [
  {
    titulo: '1. Quem somos',
    paragrafos: [
      `O Clube Casarão é o programa de fidelidade do Empório Casarão (${clubeControlador.razaoSocial}, CNPJ ${clubeControlador.cnpj}, ${clubeControlador.endereco}). O Empório é o controlador dos seus dados pessoais, ou seja, quem decide como eles são usados.`,
      `Para qualquer assunto sobre privacidade, fale com a gente pelo e-mail ${clubeControlador.email}, pelo telefone e WhatsApp ${clubeControlador.telefone} ou pessoalmente na loja.`,
    ],
  },
  {
    titulo: '2. Quais dados coletamos',
    paragrafos: [
      'Dados de cadastro: nome completo, CPF, e-mail, celular e senha (a senha é guardada de forma criptografada; nem a equipe do Empório consegue vê-la).',
      'Dados das suas compras: fotos ou PDFs das notas fiscais que você envia, data, valor e os 6 últimos números da chave de acesso de cada nota. A nota fiscal pode conter outras informações impressas, como os produtos comprados.',
      'Dados do clube: saldo de cashback, histórico de créditos e resgates (com data, valor e o funcionário que atendeu) e a situação de cada nota enviada.',
      'Dados do aparelho: um identificador para envio de notificações, o sistema do celular (Android ou iOS) e registros técnicos de acesso, como data e hora de login.',
    ],
  },
  {
    titulo: '3. Para que usamos seus dados',
    paragrafos: [
      'Criar e manter sua conta e identificar você pelo CPF no app e no caixa da loja.',
      'Conferir as notas fiscais enviadas, calcular e creditar o cashback e registrar os resgates.',
      'Evitar fraudes, como a mesma nota enviada mais de uma vez ou o uso indevido do saldo de outra pessoa.',
      'Enviar avisos do clube: cashback aprovado e novas promoções. Você escolhe quais quer receber.',
      'Gerar relatórios internos do programa (por exemplo, quantos clientes novos tivemos no mês) e cumprir obrigações legais.',
      'Não vendemos, alugamos nem trocamos seus dados pessoais com ninguém.',
    ],
  },
  {
    titulo: '4. Bases legais (por que podemos usar)',
    paragrafos: [
      'Execução do contrato (art. 7º, V, da LGPD): para cadastro, cashback e resgates, que são o próprio serviço do clube que você aceitou ao se cadastrar.',
      'Consentimento (art. 7º, I): para notificações de promoções. Você pode retirar a qualquer momento em Perfil > Notificações.',
      'Legítimo interesse (art. 7º, IX): para prevenir fraudes e melhorar o programa, sempre respeitando seus direitos.',
      'Cumprimento de obrigação legal (art. 7º, II): quando a lei exigir que algum dado seja guardado.',
    ],
  },
  {
    titulo: '5. Com quem compartilhamos',
    paragrafos: [
      'Seus dados só são acessados pela equipe do Empório, e cada pessoa só vê o necessário para atender você. Para o app funcionar, usamos empresas que tratam dados em nosso nome (operadores), sob contrato e com medidas de segurança:',
      'Supabase: banco de dados, login e armazenamento das fotos das notas, com servidores em São Paulo (Brasil).',
      'Vercel: hospedagem do painel usado pela equipe da loja.',
      'Expo, Google e Apple: entrega das notificações no seu celular.',
      'Serviço de e-mail transacional: envio de mensagens como confirmação de cadastro e recuperação de senha.',
      'Alguns desses serviços podem processar dados fora do Brasil. Nesses casos, a transferência segue o art. 33 da LGPD, com empresas que oferecem garantias adequadas de proteção.',
      'Também podemos fornecer dados quando houver ordem judicial ou exigência de autoridade competente.',
    ],
  },
  {
    titulo: '6. Por quanto tempo guardamos',
    paragrafos: [
      'Guardamos seus dados enquanto sua conta existir. Se você excluir a conta, apagamos seu cadastro, notas fiscais, fotos e histórico de cashback do sistema na hora.',
      'Cópias de segurança (backups) podem manter esses dados por até 30 dias, até serem substituídas. Dados que a lei obrigue a guardar ficam pelo prazo legal.',
      'Saldo de cashback não utilizado é perdido quando a conta é excluída.',
    ],
  },
  {
    titulo: '7. Segurança',
    paragrafos: [
      'Usamos conexão criptografada (HTTPS), senhas criptografadas, controle de acesso por perfil (cliente, funcionário e administrador) e regras no banco de dados que impedem um cliente de ver os dados de outro. As fotos das notas ficam em armazenamento privado e só são exibidas à equipe por links temporários.',
      'Nenhum sistema é 100% invulnerável. Se acontecer um incidente de segurança que possa causar risco ou dano relevante a você, avisaremos você e a ANPD, como manda a lei.',
    ],
  },
  {
    titulo: '8. Seus direitos',
    paragrafos: [
      'Pela LGPD (art. 18), você pode, a qualquer momento: confirmar se tratamos seus dados; acessar seus dados; corrigir dados incompletos ou desatualizados; pedir anonimização, bloqueio ou eliminação de dados desnecessários; pedir a portabilidade; saber com quem compartilhamos; retirar o consentimento; e excluir sua conta.',
      `Nome e celular você mesmo altera em Perfil > Dados pessoais. Para excluir a conta, use Perfil > Privacidade e consentimento > Excluir minha conta. Para os demais pedidos, escreva para ${clubeControlador.email} ou chame no WhatsApp ${clubeControlador.telefone}. Respondemos em até 15 dias.`,
      'Se achar que seus direitos não foram respeitados, você também pode procurar a Autoridade Nacional de Proteção de Dados (ANPD).',
    ],
  },
  {
    titulo: '9. Menores de idade',
    paragrafos: ['O Clube Casarão é destinado a maiores de 18 anos. Não cadastramos conscientemente menores de idade.'],
  },
  {
    titulo: '10. Mudanças nesta política',
    paragrafos: [
      'Podemos atualizar esta política para refletir mudanças no clube ou na lei. Quando a mudança for importante, avisaremos pelo app. A data da última atualização fica sempre no topo do texto.',
    ],
  },
];

export const regulamentoVersao = '1.1';
export const regulamentoAtualizadoEm = '13 de outubro de 2026';

export const regulamentoClube: SecaoTexto[] = [
  {
    titulo: '1. O que é o Clube Casarão',
    paragrafos: [
      `O Clube Casarão é o programa de fidelidade gratuito do Empório Casarão (${clubeControlador.razaoSocial}, CNPJ ${clubeControlador.cnpj}), com loja em ${clubeControlador.endereco}. Quem participa recebe de volta parte do valor das compras como cashback, para usar em novas compras na loja, e tem acesso a promoções exclusivas.`,
      'Ao criar sua conta, você declara que leu e aceita este regulamento e a Política de Privacidade.',
    ],
  },
  {
    titulo: '2. Quem pode participar',
    paragrafos: [
      'Pessoas físicas maiores de 18 anos, com CPF válido. Cada CPF pode ter um único cadastro, que é pessoal e intransferível.',
      'O cadastro pode ser feito pelo app ou pela equipe, na loja. Você é responsável por manter seus dados corretos e sua senha em segredo.',
    ],
  },
  {
    titulo: '3. Como ganhar cashback',
    paragrafos: [
      'Valem as compras feitas na loja do Empório Casarão com cupom fiscal (NFC-e ou extrato SAT).',
      'Pelo app, envie a foto ou o PDF do cupom, informando a data da compra, o valor total e os 6 últimos números da chave de acesso (o número grande, em blocos de 4, perto do QR Code).',
      'A equipe confere cada nota em até 1 dia útil. Aprovada, o cashback entra no seu saldo automaticamente e você recebe um aviso no celular (se tiver ativado).',
      'O cashback é um percentual do valor da compra conferido pela equipe. O percentual em vigor aparece no app na hora de enviar a nota e pode ser alterado pelo Empório a qualquer momento, valendo para as notas aprovadas a partir da mudança. Notas já aprovadas não mudam.',
      'Se o valor informado for diferente do cupom, a equipe pode corrigir e o cashback é calculado sobre o valor correto.',
    ],
  },
  {
    titulo: '4. Quando uma nota pode ser recusada',
    paragrafos: [
      'Foto ou arquivo ilegível; cupom de outro estabelecimento; nota já enviada antes (cada nota só gera cashback uma vez); data, valor ou número que não conferem com o cupom; ou suspeita de fraude.',
      'O motivo da recusa aparece no app, na aba Notas. Se discordar, use o botão "Questionar" ou fale com a gente em Perfil > Ajuda e atendimento.',
    ],
  },
  {
    titulo: '5. Como usar o seu saldo',
    paragrafos: [
      'O resgate é feito na loja: informe seu CPF no caixa, a equipe confere seu saldo e aplica o valor como desconto na compra. Você pode usar todo o saldo ou só uma parte.',
      'O saldo não pode ser trocado por dinheiro, transferido para outra pessoa nem usado fora do Empório Casarão. Cada resgate fica registrado com data, valor e funcionário que atendeu, e aparece na sua Carteira.',
      'Cada cashback vale por 90 dias, contados a partir da aprovação da nota. Nos resgates, usamos primeiro o cashback mais antigo (o que vence antes). O que não for usado no prazo vence e sai do saldo automaticamente, aparecendo no extrato como "Cashback vencido".',
      'O app mostra na Carteira quanto vai vencer e quando, e avisamos no celular 7 dias antes do vencimento (se você tiver ativado os avisos de cashback).',
    ],
  },
  {
    titulo: '6. Promoções para membros',
    paragrafos: [
      'As promoções do clube aparecem no app, com preço, condições e período de validade. Para aproveitar, informe seu CPF no caixa durante o período da promoção, enquanto durarem os estoques.',
    ],
  },
  {
    titulo: '7. Uso indevido',
    paragrafos: [
      'Enviar cupom falso, adulterado ou de outra pessoa, ou tentar burlar as regras do clube, pode levar à recusa das notas, ao cancelamento do saldo obtido de forma irregular e à exclusão do participante, sem prejuízo das medidas legais cabíveis.',
    ],
  },
  {
    titulo: '8. Cancelamento da conta',
    paragrafos: [
      'Você pode excluir sua conta quando quiser, pelo app (Perfil > Privacidade e consentimento) ou pedindo na loja. Com a exclusão, o saldo não utilizado é perdido e não pode ser recuperado.',
    ],
  },
  {
    titulo: '9. Mudanças e encerramento do clube',
    paragrafos: [
      'O Empório pode mudar este regulamento, avisando pelo app. Mudanças que diminuam benefícios já conquistados serão comunicadas com pelo menos 30 dias de antecedência.',
      'Se o clube for encerrado, os participantes serão avisados com pelo menos 30 dias de antecedência e poderão usar o saldo existente na loja durante esse prazo.',
    ],
  },
  {
    titulo: '10. Contato',
    paragrafos: [
      `Dúvidas, sugestões ou reclamações: pelo app (Perfil > Ajuda e atendimento), pelo WhatsApp ${clubeControlador.telefone}, pelo e-mail ${clubeControlador.email} ou na loja.`,
      'Fica eleito o foro da comarca de Piracaia/SP, ressalvado o direito do consumidor de propor ação no foro do seu domicílio, conforme o Código de Defesa do Consumidor.',
    ],
  },
];
