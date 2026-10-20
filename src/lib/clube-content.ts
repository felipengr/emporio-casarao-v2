// Textos institucionais e legais do Clube Casarão (programa de fidelidade com cashback).
// Espelha o conteúdo de packages/shared/src/privacidade.ts e regulamento.ts no repositório
// do app (ClubeCasarao/clube-casarao). Ao mudar uma regra lá, atualize aqui também,
// nos três idiomas (as versões em inglês e espanhol são traduções; a em português prevalece).

import type { Language } from '@/lib/i18n/translations';

export const clubeControlador = {
  razaoSocial: 'EMPORIO CASARAO PIRACAIA LTDA',
  cnpj: '65.501.697/0001-20',
  /** Endereço da loja, onde o cliente compra e resgata o cashback. */
  endereco: 'Praça Nossa Senhora do Rosário, 111, Centro, Piracaia/SP, CEP 12970-073',
  /** Endereço cadastral do CNPJ, diferente do endereço da loja. */
  enderecoCadastral: 'Rua Jan Antonin Bata, 11, Piracaia/SP, CEP 12970-027',
  email: 'emporiocasarao.piracaia@gmail.com',
  telefone: '(11) 99219-5337',
  whatsapp: '5511992195337',
};

export type SecaoTexto = { titulo: string; paragrafos: string[] };

export const privacidadeVersao = '1.0';
/** Data no formato AAAA-MM-DD; o texto exibido é formatado no idioma do visitante. */
export const privacidadeAtualizadaEm = '2026-10-13';

const politicaPrivacidadePt: SecaoTexto[] = [
  {
    titulo: '1. Quem somos',
    paragrafos: [
      `O Clube Casarão é o programa de fidelidade do Empório Casarão (${clubeControlador.razaoSocial}, CNPJ ${clubeControlador.cnpj}). O Empório é o controlador dos seus dados pessoais, ou seja, quem decide como eles são usados.`,
      `Loja: ${clubeControlador.endereco}. Endereço cadastral (CNPJ): ${clubeControlador.enderecoCadastral}.`,
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
export const regulamentoAtualizadoEm = '2026-10-13';

const regulamentoPt: SecaoTexto[] = [
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

export const exclusaoContaAtualizadaEm = '2026-10-16';

const exclusaoContaPt: SecaoTexto[] = [
  {
    titulo: 'Pelo aplicativo',
    paragrafos: [
      'Abra o app, vá em Perfil > Privacidade e consentimento > Excluir minha conta e confirme. É instantâneo e não precisa falar com a equipe.',
    ],
  },
  {
    titulo: 'Sem o aplicativo, pela web',
    paragrafos: [
      `Se você não tem mais o app instalado, peça a exclusão pelo WhatsApp ${clubeControlador.telefone} ou pelo e-mail ${clubeControlador.email}, informando seu nome completo, CPF e o celular cadastrado no Clube Casarão (usamos esses dados só para confirmar que é você quem está pedindo).`,
      'Respondemos e confirmamos a exclusão em até 15 dias.',
    ],
  },
  {
    titulo: 'O que acontece quando você exclui sua conta',
    paragrafos: [
      'Apagamos na hora: seu cadastro, as notas fiscais enviadas e suas fotos, o histórico de créditos e resgates de cashback, e os dados do seu aparelho.',
      'O saldo de cashback não utilizado é perdido e não pode ser recuperado depois da exclusão.',
      'Cópias de segurança (backups) podem manter esses dados por até 30 dias, até serem substituídas por uma cópia mais recente — depois disso, não restam em nenhum lugar.',
      'Dados que a lei obrigue a guardar (por exemplo, para fins fiscais) ficam pelo prazo legal, mesmo após a exclusão da conta.',
    ],
  },
];

// ---------------------------------------------------------------------------
// English
// ---------------------------------------------------------------------------

const politicaPrivacidadeEn: SecaoTexto[] = [
  {
    titulo: '1. Who we are',
    paragrafos: [
      `Clube Casarão is the loyalty program of Empório Casarão (${clubeControlador.razaoSocial}, CNPJ ${clubeControlador.cnpj}). Empório is the controller of your personal data, meaning it decides how that data is used.`,
      `Store: ${clubeControlador.endereco}. Registered address (CNPJ): ${clubeControlador.enderecoCadastral}.`,
      `For any privacy matter, contact us by email at ${clubeControlador.email}, by phone or WhatsApp at ${clubeControlador.telefone}, or in person at the store.`,
    ],
  },
  {
    titulo: '2. What data we collect',
    paragrafos: [
      'Sign-up data: full name, CPF (Brazilian taxpayer ID), email, mobile number and password (the password is stored encrypted; not even the Empório team can see it).',
      'Purchase data: photos or PDFs of the receipts you send, date, amount and the last 6 digits of each receipt’s access key. A receipt may contain other printed information, such as the products purchased.',
      'Club data: cashback balance, history of credits and redemptions (with date, amount and the staff member who served you) and the status of each receipt sent.',
      'Device data: an identifier for sending notifications, the phone’s operating system (Android or iOS) and technical access logs, such as login date and time.',
    ],
  },
  {
    titulo: '3. What we use your data for',
    paragrafos: [
      'To create and maintain your account and identify you by your CPF in the app and at the store checkout.',
      'To check the receipts you send, calculate and credit cashback, and record redemptions.',
      'To prevent fraud, such as the same receipt being sent more than once or someone else’s balance being misused.',
      'To send club notices: cashback approved and new deals. You choose which ones you want to receive.',
      'To produce internal program reports (for example, how many new customers we had in the month) and to comply with legal obligations.',
      'We do not sell, rent or trade your personal data with anyone.',
    ],
  },
  {
    titulo: '4. Legal bases (why we may use it)',
    paragrafos: [
      'Performance of a contract (art. 7, V, of the LGPD, Brazil’s data protection law): for sign-up, cashback and redemptions, which are the club service you accepted when signing up.',
      'Consent (art. 7, I): for promotional notifications. You can withdraw it at any time in Perfil > Notificações (Profile > Notifications).',
      'Legitimate interest (art. 7, IX): to prevent fraud and improve the program, always respecting your rights.',
      'Compliance with a legal obligation (art. 7, II): when the law requires certain data to be kept.',
    ],
  },
  {
    titulo: '5. Who we share it with',
    paragrafos: [
      'Your data is accessed only by the Empório team, and each person sees only what is needed to serve you. For the app to work, we use companies that process data on our behalf (processors), under contract and with security measures:',
      'Supabase: database, login and storage of receipt photos, with servers in São Paulo (Brazil).',
      'Vercel: hosting of the dashboard used by the store team.',
      'Expo, Google and Apple: delivery of notifications to your phone.',
      'Transactional email service: sending messages such as sign-up confirmation and password recovery.',
      'Some of these services may process data outside Brazil. In those cases, the transfer follows art. 33 of the LGPD, with companies that offer adequate protection guarantees.',
      'We may also provide data when there is a court order or a request from a competent authority.',
    ],
  },
  {
    titulo: '6. How long we keep it',
    paragrafos: [
      'We keep your data for as long as your account exists. If you delete your account, we erase your profile, receipts, photos and cashback history from the system immediately.',
      'Backup copies may keep this data for up to 30 days, until they are replaced. Data the law requires us to keep is retained for the legal period.',
      'Unused cashback balance is lost when the account is deleted.',
    ],
  },
  {
    titulo: '7. Security',
    paragrafos: [
      'We use encrypted connections (HTTPS), encrypted passwords, role-based access control (customer, staff and administrator) and database rules that prevent one customer from seeing another’s data. Receipt photos are kept in private storage and are shown to the team only through temporary links.',
      'No system is 100% invulnerable. If a security incident occurs that may cause you significant risk or harm, we will notify you and the ANPD (Brazil’s National Data Protection Authority), as required by law.',
    ],
  },
  {
    titulo: '8. Your rights',
    paragrafos: [
      'Under the LGPD (art. 18), you may at any time: confirm whether we process your data; access your data; correct incomplete or outdated data; request anonymization, blocking or deletion of unnecessary data; request portability; find out who we share it with; withdraw consent; and delete your account.',
      `You can change your name and mobile number yourself in Perfil > Dados pessoais (Profile > Personal data). To delete your account, use Perfil > Privacidade e consentimento > Excluir minha conta (Profile > Privacy and consent > Delete my account). For other requests, write to ${clubeControlador.email} or message us on WhatsApp at ${clubeControlador.telefone}. We reply within 15 days.`,
      'If you believe your rights have not been respected, you may also contact the National Data Protection Authority (ANPD).',
    ],
  },
  {
    titulo: '9. Minors',
    paragrafos: ['Clube Casarão is intended for people over 18. We do not knowingly register minors.'],
  },
  {
    titulo: '10. Changes to this policy',
    paragrafos: [
      'We may update this policy to reflect changes in the club or in the law. When a change is important, we will let you know through the app. The date of the last update is always at the top of the text.',
    ],
  },
];

const regulamentoEn: SecaoTexto[] = [
  {
    titulo: '1. What Clube Casarão is',
    paragrafos: [
      `Clube Casarão is the free loyalty program of Empório Casarão (${clubeControlador.razaoSocial}, CNPJ ${clubeControlador.cnpj}), with a store at ${clubeControlador.endereco}. Members get part of their purchase amount back as cashback to use on new purchases at the store, and have access to exclusive deals.`,
      'By creating your account, you declare that you have read and accept these rules and the Privacy Policy.',
    ],
  },
  {
    titulo: '2. Who can join',
    paragrafos: [
      'Individuals over 18 with a valid CPF (Brazilian taxpayer ID). Each CPF may have only one account, which is personal and non-transferable.',
      'You can sign up through the app or with the team at the store. You are responsible for keeping your data accurate and your password secret.',
    ],
  },
  {
    titulo: '3. How to earn cashback',
    paragrafos: [
      'Purchases made at the Empório Casarão store with a tax receipt (NFC-e or SAT receipt) qualify.',
      'In the app, send a photo or PDF of the receipt, entering the purchase date, the total amount and the last 6 digits of the access key (the long number, in blocks of 4, near the QR Code).',
      'The team checks each receipt within 1 business day. Once approved, the cashback is added to your balance automatically and you get a notification on your phone (if enabled).',
      'Cashback is a percentage of the purchase amount verified by the team. The current percentage is shown in the app when you send the receipt and may be changed by Empório at any time, applying to receipts approved after the change. Receipts already approved do not change.',
      'If the amount entered differs from the receipt, the team may correct it and the cashback is calculated on the correct amount.',
    ],
  },
  {
    titulo: '4. When a receipt may be rejected',
    paragrafos: [
      'Illegible photo or file; receipt from another business; receipt already sent before (each receipt generates cashback only once); date, amount or number that do not match the receipt; or suspected fraud.',
      'The reason for rejection is shown in the app, in the Notas (Receipts) tab. If you disagree, use the "Questionar" (Dispute) button or contact us in Perfil > Ajuda e atendimento (Profile > Help and support).',
    ],
  },
  {
    titulo: '5. How to use your balance',
    paragrafos: [
      'Redemption takes place at the store: give your CPF at the checkout, the team checks your balance and applies the amount as a discount on the purchase. You can use all of your balance or just part of it.',
      'The balance cannot be exchanged for cash, transferred to another person or used outside Empório Casarão. Each redemption is recorded with date, amount and the staff member who served you, and appears in your Carteira (Wallet).',
      'Each cashback is valid for 90 days from the approval of the receipt. In redemptions, we use the oldest cashback first (the one that expires first). Anything not used within the period expires and is removed from the balance automatically, appearing in the statement as "Cashback vencido" (Expired cashback).',
      'The app shows in the Carteira (Wallet) how much will expire and when, and we notify you on your phone 7 days before expiration (if you have cashback notifications enabled).',
    ],
  },
  {
    titulo: '6. Member deals',
    paragrafos: [
      'Club deals appear in the app, with price, conditions and validity period. To take advantage, give your CPF at the checkout during the deal period, while stocks last.',
    ],
  },
  {
    titulo: '7. Misuse',
    paragrafos: [
      'Sending a fake, altered or someone else’s receipt, or trying to get around the club rules, may lead to rejection of receipts, cancellation of any balance obtained irregularly and removal of the member, without prejudice to applicable legal measures.',
    ],
  },
  {
    titulo: '8. Account cancellation',
    paragrafos: [
      'You can delete your account whenever you want, through the app (Perfil > Privacidade e consentimento, that is, Profile > Privacy and consent) or by asking at the store. Upon deletion, any unused balance is lost and cannot be recovered.',
    ],
  },
  {
    titulo: '9. Changes and termination of the club',
    paragrafos: [
      'Empório may change these rules, giving notice through the app. Changes that reduce benefits already earned will be announced at least 30 days in advance.',
      'If the club is terminated, members will be notified at least 30 days in advance and may use their existing balance at the store during that period.',
    ],
  },
  {
    titulo: '10. Contact',
    paragrafos: [
      `Questions, suggestions or complaints: through the app (Perfil > Ajuda e atendimento, that is, Profile > Help and support), on WhatsApp at ${clubeControlador.telefone}, by email at ${clubeControlador.email} or at the store.`,
      'The courts of the district of Piracaia/SP are chosen as the venue, without prejudice to the consumer’s right to bring an action in the courts of their place of residence, as provided by the Brazilian Consumer Protection Code.',
    ],
  },
];

const exclusaoContaEn: SecaoTexto[] = [
  {
    titulo: 'Through the app',
    paragrafos: [
      'Open the app, go to Perfil > Privacidade e consentimento > Excluir minha conta (Profile > Privacy and consent > Delete my account) and confirm. It is instant and you do not need to talk to the team.',
    ],
  },
  {
    titulo: 'Without the app, on the web',
    paragrafos: [
      `If you no longer have the app installed, request deletion on WhatsApp at ${clubeControlador.telefone} or by email at ${clubeControlador.email}, providing your full name, CPF and the mobile number registered with Clube Casarão (we use this data only to confirm that it is you making the request).`,
      'We reply and confirm the deletion within 15 days.',
    ],
  },
  {
    titulo: 'What happens when you delete your account',
    paragrafos: [
      'We erase immediately: your profile, the receipts you sent and their photos, your cashback credit and redemption history, and your device data.',
      'Any unused cashback balance is lost and cannot be recovered after deletion.',
      'Backup copies may keep this data for up to 30 days, until they are replaced by a more recent copy. After that, it does not remain anywhere.',
      'Data the law requires us to keep (for example, for tax purposes) is retained for the legal period, even after the account is deleted.',
    ],
  },
];

// ---------------------------------------------------------------------------
// Español
// ---------------------------------------------------------------------------

const politicaPrivacidadeEs: SecaoTexto[] = [
  {
    titulo: '1. Quiénes somos',
    paragrafos: [
      `El Clube Casarão es el programa de fidelidad del Empório Casarão (${clubeControlador.razaoSocial}, CNPJ ${clubeControlador.cnpj}). El Empório es el responsable del tratamiento de tus datos personales, es decir, quien decide cómo se usan.`,
      `Tienda: ${clubeControlador.endereco}. Domicilio registral (CNPJ): ${clubeControlador.enderecoCadastral}.`,
      `Para cualquier asunto sobre privacidad, escríbenos al correo ${clubeControlador.email}, llámanos o envíanos un WhatsApp al ${clubeControlador.telefone}, o visítanos en la tienda.`,
    ],
  },
  {
    titulo: '2. Qué datos recopilamos',
    paragrafos: [
      'Datos de registro: nombre completo, CPF (número de contribuyente brasileño), correo electrónico, celular y contraseña (la contraseña se guarda cifrada; ni siquiera el equipo del Empório puede verla).',
      'Datos de tus compras: fotos o PDF de los tickets fiscales que envías, fecha, importe y los 6 últimos números de la clave de acceso de cada ticket. El ticket puede contener otra información impresa, como los productos comprados.',
      'Datos del club: saldo de cashback, historial de créditos y canjes (con fecha, importe y el empleado que te atendió) y el estado de cada ticket enviado.',
      'Datos del dispositivo: un identificador para el envío de notificaciones, el sistema del celular (Android o iOS) y registros técnicos de acceso, como fecha y hora de inicio de sesión.',
    ],
  },
  {
    titulo: '3. Para qué usamos tus datos',
    paragrafos: [
      'Crear y mantener tu cuenta e identificarte por tu CPF en la app y en la caja de la tienda.',
      'Revisar los tickets enviados, calcular y acreditar el cashback y registrar los canjes.',
      'Evitar fraudes, como el mismo ticket enviado más de una vez o el uso indebido del saldo de otra persona.',
      'Enviar avisos del club: cashback aprobado y nuevas promociones. Tú eliges cuáles quieres recibir.',
      'Generar informes internos del programa (por ejemplo, cuántos clientes nuevos tuvimos en el mes) y cumplir obligaciones legales.',
      'No vendemos, alquilamos ni intercambiamos tus datos personales con nadie.',
    ],
  },
  {
    titulo: '4. Bases legales (por qué podemos usarlos)',
    paragrafos: [
      'Ejecución del contrato (art. 7º, V, de la LGPD, la ley brasileña de protección de datos): para el registro, el cashback y los canjes, que son el propio servicio del club que aceptaste al registrarte.',
      'Consentimiento (art. 7º, I): para las notificaciones de promociones. Puedes retirarlo en cualquier momento en Perfil > Notificações (Perfil > Notificaciones).',
      'Interés legítimo (art. 7º, IX): para prevenir fraudes y mejorar el programa, siempre respetando tus derechos.',
      'Cumplimiento de una obligación legal (art. 7º, II): cuando la ley exija que se conserve algún dato.',
    ],
  },
  {
    titulo: '5. Con quién compartimos',
    paragrafos: [
      'Solo el equipo del Empório accede a tus datos, y cada persona ve únicamente lo necesario para atenderte. Para que la app funcione, usamos empresas que tratan datos en nuestro nombre (encargados), bajo contrato y con medidas de seguridad:',
      'Supabase: base de datos, inicio de sesión y almacenamiento de las fotos de los tickets, con servidores en São Paulo (Brasil).',
      'Vercel: alojamiento del panel que usa el equipo de la tienda.',
      'Expo, Google y Apple: entrega de las notificaciones en tu celular.',
      'Servicio de correo transaccional: envío de mensajes como la confirmación de registro y la recuperación de contraseña.',
      'Algunos de estos servicios pueden procesar datos fuera de Brasil. En esos casos, la transferencia sigue el art. 33 de la LGPD, con empresas que ofrecen garantías adecuadas de protección.',
      'También podemos proporcionar datos cuando exista una orden judicial o un requerimiento de una autoridad competente.',
    ],
  },
  {
    titulo: '6. Durante cuánto tiempo los guardamos',
    paragrafos: [
      'Guardamos tus datos mientras exista tu cuenta. Si eliminas la cuenta, borramos al instante del sistema tu registro, tickets, fotos e historial de cashback.',
      'Las copias de seguridad (backups) pueden conservar esos datos hasta 30 días, hasta ser sustituidas. Los datos que la ley obligue a guardar se conservan durante el plazo legal.',
      'El saldo de cashback no utilizado se pierde cuando se elimina la cuenta.',
    ],
  },
  {
    titulo: '7. Seguridad',
    paragrafos: [
      'Usamos conexión cifrada (HTTPS), contraseñas cifradas, control de acceso por perfil (cliente, empleado y administrador) y reglas en la base de datos que impiden que un cliente vea los datos de otro. Las fotos de los tickets se guardan en un almacenamiento privado y solo se muestran al equipo mediante enlaces temporales.',
      'Ningún sistema es 100% invulnerable. Si ocurre un incidente de seguridad que pueda causarte un riesgo o daño relevante, te avisaremos a ti y a la ANPD (Autoridad Nacional de Protección de Datos de Brasil), como exige la ley.',
    ],
  },
  {
    titulo: '8. Tus derechos',
    paragrafos: [
      'Según la LGPD (art. 18), puedes en cualquier momento: confirmar si tratamos tus datos; acceder a tus datos; corregir datos incompletos o desactualizados; solicitar la anonimización, el bloqueo o la eliminación de datos innecesarios; solicitar la portabilidad; saber con quién los compartimos; retirar el consentimiento; y eliminar tu cuenta.',
      `Puedes cambiar tú mismo tu nombre y celular en Perfil > Dados pessoais (Perfil > Datos personales). Para eliminar la cuenta, usa Perfil > Privacidade e consentimento > Excluir minha conta (Perfil > Privacidad y consentimiento > Eliminar mi cuenta). Para las demás solicitudes, escribe a ${clubeControlador.email} o envíanos un WhatsApp al ${clubeControlador.telefone}. Respondemos en un plazo de 15 días.`,
      'Si consideras que no se han respetado tus derechos, también puedes acudir a la Autoridad Nacional de Protección de Datos (ANPD).',
    ],
  },
  {
    titulo: '9. Menores de edad',
    paragrafos: ['El Clube Casarão está destinado a mayores de 18 años. No registramos a sabiendas a menores de edad.'],
  },
  {
    titulo: '10. Cambios en esta política',
    paragrafos: [
      'Podemos actualizar esta política para reflejar cambios en el club o en la ley. Cuando el cambio sea importante, te avisaremos por la app. La fecha de la última actualización aparece siempre al inicio del texto.',
    ],
  },
];

const regulamentoEs: SecaoTexto[] = [
  {
    titulo: '1. Qué es el Clube Casarão',
    paragrafos: [
      `El Clube Casarão es el programa de fidelidad gratuito del Empório Casarão (${clubeControlador.razaoSocial}, CNPJ ${clubeControlador.cnpj}), con tienda en ${clubeControlador.endereco}. Quien participa recibe de vuelta parte del importe de sus compras como cashback, para usar en nuevas compras en la tienda, y tiene acceso a promociones exclusivas.`,
      'Al crear tu cuenta, declaras que has leído y aceptas este reglamento y la Política de Privacidad.',
    ],
  },
  {
    titulo: '2. Quién puede participar',
    paragrafos: [
      'Personas físicas mayores de 18 años, con CPF (número de contribuyente brasileño) válido. Cada CPF puede tener un único registro, que es personal e intransferible.',
      'El registro puede hacerse por la app o con el equipo, en la tienda. Eres responsable de mantener tus datos correctos y tu contraseña en secreto.',
    ],
  },
  {
    titulo: '3. Cómo ganar cashback',
    paragrafos: [
      'Valen las compras hechas en la tienda del Empório Casarão con ticket fiscal (NFC-e o comprobante SAT).',
      'Por la app, envía la foto o el PDF del ticket, indicando la fecha de compra, el importe total y los 6 últimos números de la clave de acceso (el número largo, en bloques de 4, cerca del código QR).',
      'El equipo revisa cada ticket en un plazo de 1 día hábil. Una vez aprobado, el cashback se suma a tu saldo automáticamente y recibes un aviso en el celular (si lo tienes activado).',
      'El cashback es un porcentaje del importe de la compra verificado por el equipo. El porcentaje vigente aparece en la app al enviar el ticket y el Empório puede cambiarlo en cualquier momento, aplicándose a los tickets aprobados a partir del cambio. Los tickets ya aprobados no cambian.',
      'Si el importe indicado es diferente al del ticket, el equipo puede corregirlo y el cashback se calcula sobre el importe correcto.',
    ],
  },
  {
    titulo: '4. Cuándo se puede rechazar un ticket',
    paragrafos: [
      'Foto o archivo ilegible; ticket de otro establecimiento; ticket ya enviado antes (cada ticket solo genera cashback una vez); fecha, importe o número que no coinciden con el ticket; o sospecha de fraude.',
      'El motivo del rechazo aparece en la app, en la pestaña Notas (Tickets). Si no estás de acuerdo, usa el botón "Questionar" (Reclamar) o contáctanos en Perfil > Ajuda e atendimento (Perfil > Ayuda y atención).',
    ],
  },
  {
    titulo: '5. Cómo usar tu saldo',
    paragrafos: [
      'El canje se hace en la tienda: indica tu CPF en la caja, el equipo revisa tu saldo y aplica el importe como descuento en la compra. Puedes usar todo el saldo o solo una parte.',
      'El saldo no puede cambiarse por dinero, transferirse a otra persona ni usarse fuera del Empório Casarão. Cada canje queda registrado con fecha, importe y el empleado que te atendió, y aparece en tu Carteira (Billetera).',
      'Cada cashback vale 90 días, contados desde la aprobación del ticket. En los canjes, usamos primero el cashback más antiguo (el que vence antes). Lo que no se use en el plazo vence y sale del saldo automáticamente, apareciendo en el extracto como "Cashback vencido".',
      'La app muestra en la Carteira (Billetera) cuánto va a vencer y cuándo, y te avisamos en el celular 7 días antes del vencimiento (si tienes activados los avisos de cashback).',
    ],
  },
  {
    titulo: '6. Promociones para socios',
    paragrafos: [
      'Las promociones del club aparecen en la app, con precio, condiciones y período de validez. Para aprovecharlas, indica tu CPF en la caja durante el período de la promoción, hasta agotar existencias.',
    ],
  },
  {
    titulo: '7. Uso indebido',
    paragrafos: [
      'Enviar un ticket falso, adulterado o de otra persona, o intentar burlar las reglas del club, puede llevar al rechazo de los tickets, a la cancelación del saldo obtenido de forma irregular y a la exclusión del participante, sin perjuicio de las medidas legales correspondientes.',
    ],
  },
  {
    titulo: '8. Cancelación de la cuenta',
    paragrafos: [
      'Puedes eliminar tu cuenta cuando quieras, por la app (Perfil > Privacidade e consentimento, es decir, Perfil > Privacidad y consentimiento) o pidiéndolo en la tienda. Con la eliminación, el saldo no utilizado se pierde y no puede recuperarse.',
    ],
  },
  {
    titulo: '9. Cambios y cierre del club',
    paragrafos: [
      'El Empório puede cambiar este reglamento, avisando por la app. Los cambios que reduzcan beneficios ya conseguidos se comunicarán con al menos 30 días de antelación.',
      'Si el club se cierra, los participantes serán avisados con al menos 30 días de antelación y podrán usar el saldo existente en la tienda durante ese plazo.',
    ],
  },
  {
    titulo: '10. Contacto',
    paragrafos: [
      `Dudas, sugerencias o reclamaciones: por la app (Perfil > Ajuda e atendimento, es decir, Perfil > Ayuda y atención), por WhatsApp al ${clubeControlador.telefone}, por correo a ${clubeControlador.email} o en la tienda.`,
      'Se elige el fuero de la comarca de Piracaia/SP, sin perjuicio del derecho del consumidor a presentar una acción en el fuero de su domicilio, conforme al Código de Defensa del Consumidor de Brasil.',
    ],
  },
];

const exclusaoContaEs: SecaoTexto[] = [
  {
    titulo: 'Por la aplicación',
    paragrafos: [
      'Abre la app, ve a Perfil > Privacidade e consentimento > Excluir minha conta (Perfil > Privacidad y consentimiento > Eliminar mi cuenta) y confirma. Es instantáneo y no necesitas hablar con el equipo.',
    ],
  },
  {
    titulo: 'Sin la aplicación, por la web',
    paragrafos: [
      `Si ya no tienes la app instalada, solicita la eliminación por WhatsApp al ${clubeControlador.telefone} o por correo a ${clubeControlador.email}, indicando tu nombre completo, CPF y el celular registrado en el Clube Casarão (usamos estos datos solo para confirmar que eres tú quien lo solicita).`,
      'Respondemos y confirmamos la eliminación en un plazo de 15 días.',
    ],
  },
  {
    titulo: 'Qué pasa cuando eliminas tu cuenta',
    paragrafos: [
      'Borramos al instante: tu registro, los tickets enviados y sus fotos, el historial de créditos y canjes de cashback, y los datos de tu dispositivo.',
      'El saldo de cashback no utilizado se pierde y no puede recuperarse después de la eliminación.',
      'Las copias de seguridad (backups) pueden conservar esos datos hasta 30 días, hasta ser sustituidas por una copia más reciente. Después de eso, no quedan en ningún lugar.',
      'Los datos que la ley obligue a guardar (por ejemplo, con fines fiscales) se conservan durante el plazo legal, incluso después de eliminar la cuenta.',
    ],
  },
];

export type DocumentoClube = 'regulamento' | 'privacidade' | 'excluirConta';

export const documentosClube: Record<DocumentoClube, { atualizadoEm: string; secoes: Record<Language, SecaoTexto[]> }> =
  {
    regulamento: {
      atualizadoEm: regulamentoAtualizadoEm,
      secoes: { pt: regulamentoPt, en: regulamentoEn, es: regulamentoEs },
    },
    privacidade: {
      atualizadoEm: privacidadeAtualizadaEm,
      secoes: {
        pt: politicaPrivacidadePt,
        en: politicaPrivacidadeEn,
        es: politicaPrivacidadeEs,
      },
    },
    excluirConta: {
      atualizadoEm: exclusaoContaAtualizadaEm,
      secoes: { pt: exclusaoContaPt, en: exclusaoContaEn, es: exclusaoContaEs },
    },
  };

const locales: Record<Language, string> = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es',
};

/** Formata uma data AAAA-MM-DD por extenso no idioma escolhido (ex.: "13 de outubro de 2026"). */
export function formatarDataClube(isoDate: string, language: Language): string {
  return new Intl.DateTimeFormat(locales[language], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
