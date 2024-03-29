var currentScene = 'arvore'; // 'prado', 'montanha', 'cabana', 'lago', 'arvore'
var edgeOpacity = 0;
var redOpacity = 3;
var colorOpacity = 6;

var currentChat;
var currentChatIndex = 0;

var isWritting = false;
var writeTextInterval;

var audio;
var currentAudioFile = '';

var forestSequence = [];
var colorsSequence = [];
var currentForestSequence = [];

// Inicio
var keys = {
  'INIT': true,

  'HEROIN_IS_FIRST_TIME_TALKING_TO': false,
  'HEROIN_CHOSE_TO_GET_CLOSE_TO': false,
  'HEROIN_MAIN_QUESTIONS': false,
  'HEROIN_ASKED_REASON_TO_COME_TO_THIS_WORLD': false,
  'HEROIN_ASKED_WHAT_WAS_HAPPENING_TO_THIS_WORLD': false,
  'HEROIN_ASKED_ABOUT_THE_DOOR_LOCK': false,
  'HEROIN_ASKED_HOW_TO_SAVE_THE_WORLD': false,
  'HEROIN_FIRST_TALK_CONCLUDED': false,
  'HEROIN_HESITATED_TO_SEARCH_THE_SOULS': false,

  'STARTED_QUEST': false,

  'MOUNTAIN_DWARF_DEMONSTRATED_CONCERN': false,
  'MOUNTAIN_TALKED_TO_DWARF': false,
  'MOUNTAIN_SAW_DWARF_DISAPPEAR': false,
  'MOUNTAIN_GOT_PENDANT': false,

  'CABIN_ALREADY_ENTERED': false,
  'CABIN_ENTERED_WITHOUT_BEING_INVITED': false,
  'CABIN_IS_FIRST_TIME_TALKING_TO': false,
  'CABIN_AGREED_WITH_RODRICK': false,
  'CABIN_STOOD_UP_FOR_THE_HEROIN': false,
  'CABIN_TOLD_RODRICK_ABOUT_THE_PLAN': false,
  'CABIN_RODRICK_IS_ANXIOUS': false,
  'CABIN_GAVE_WATER_TO_RODRICK': false,
  'CABIN_HOLD_RODRICK_HANDS': false,
  'CABIN_SAID_WORDS_OF_CONFORT_TO_RODRICK': false,
  'CABIN_RODRICK_ACCEPTED_TO_HELP': false,
  'CABIN_TRIED_TO_GIVE_PENDANT_TO_RODRICK': false,
  'CABIN_ASKED_THE_HEROIN_NAME': false,

  'FOREST_INTRO_CONCLUDED': false,
  'FOREST_LEFT_ONCE': false,
  'FOREST_SOLVED_MAZE': false,
  'FOREST_DID_NOT_SOLVE_MAZE': false,

  'LAKE_RECEIVED_SMALL_TIP_ABOUT_FOREST': false,
  'LAKE_RECEIVED_TIP_ABOUT_FOREST': false,
  'LAKE_NERIDA_ACCEPTED_TO_HELP': false,
  'LAKE_NERIDA_ASKED_THE_HEROIN_NAME': false,
  'LAKE_NERIDA_ASKED_ABOUT_DWARVES': false,
  'LAKE_NERIDA_ASKED_ABOUT_FEMALE_DWARF': false,

  'TREE_FIRST_TALK_CONCLUDED': false,
  'TREE_IS_LOOKING_FOR_SHARIA': false,
}

// Fim da primeira conversa
// var keys = {
//   'INIT': false,

//   'HEROIN_IS_FIRST_TIME_TALKING_TO': false,
//   'HEROIN_CHOSE_TO_GET_CLOSE_TO': true,
//   'HEROIN_IS_ASKING_MAIN_QUESTIONS': false,
//   'HEROIN_ASKED_REASON_TO_COME_TO_THIS_WORLD': true,
//   'HEROIN_ASKED_WHAT_WAS_HAPPENING_TO_THIS_WORLD': true,
//   'HEROIN_ASKED_ABOUT_THE_DOOR_LOCK': true,
//   'HEROIN_ASKED_HOW_TO_SAVE_THE_WORLD': true,
//   'HEROIN_FIRST_TALK_CONCLUDED': true,
//   'HEROIN_HESITATED_TO_SEARCH_THE_SOULS': false,

//   'STARTED_QUEST': true,

//   'MOUNTAIN_DWARF_DEMONSTRATED_CONCERN': false,
//   'MOUNTAIN_TALKED_TO_DWARF': false,
//   'MOUNTAIN_SAW_DWARF_DISAPPEAR': false,
//   'MOUNTAIN_GOT_PENDANT': false,

//   'CABIN_ALREADY_ENTERED': false,
//   'CABIN_ENTERED_WITHOUT_BEING_INVITED': false,
//   'CABIN_IS_FIRST_TIME_TALKING_TO': false,
// }

// Cabana
// var keys = {
//   'INIT': false,

//   'HEROIN_IS_FIRST_TIME_TALKING_TO': false,
//   'HEROIN_CHOSE_TO_GET_CLOSE_TO': true,
//   'HEROIN_IS_ASKING_MAIN_QUESTIONS': false,
//   'HEROIN_ASKED_REASON_TO_COME_TO_THIS_WORLD': true,
//   'HEROIN_ASKED_WHAT_WAS_HAPPENING_TO_THIS_WORLD': true,
//   'HEROIN_ASKED_ABOUT_THE_DOOR_LOCK': true,
//   'HEROIN_ASKED_HOW_TO_SAVE_THE_WORLD': true,
//   'HEROIN_FIRST_TALK_CONCLUDED': true,
//   'HEROIN_HESITATED_TO_SEARCH_THE_SOULS': false,

//   'STARTED_QUEST': true,

//   'MOUNTAIN_DWARF_DEMONSTRATED_CONCERN': true,
//   'MOUNTAIN_TALKED_TO_DWARF': true,
//   'MOUNTAIN_SAW_DWARF_DISAPPEAR': true,
//   'MOUNTAIN_GOT_PENDANT': true,

//   'CABIN_ALREADY_ENTERED': false,
//   'CABIN_ENTERED_WITHOUT_BEING_INVITED': false,
//   'CABIN_IS_FIRST_TIME_TALKING_TO': false,
// }

// Inicio
var keys = {
  'INIT': false,

  'HEROIN_IS_FIRST_TIME_TALKING_TO': false,
  'HEROIN_CHOSE_TO_GET_CLOSE_TO': true,
  'HEROIN_IS_ASKING_MAIN_QUESTIONS': false,
  'HEROIN_ASKED_REASON_TO_COME_TO_THIS_WORLD': true,
  'HEROIN_ASKED_WHAT_WAS_HAPPENING_TO_THIS_WORLD': true,
  'HEROIN_ASKED_ABOUT_THE_DOOR_LOCK': true,
  'HEROIN_ASKED_HOW_TO_SAVE_THE_WORLD': true,
  'HEROIN_FIRST_TALK_CONCLUDED': true,
  'HEROIN_HESITATED_TO_SEARCH_THE_SOULS': false,

  'STARTED_QUEST': true,

  'MOUNTAIN_DWARF_DEMONSTRATED_CONCERN': true,
  'MOUNTAIN_TALKED_TO_DWARF': true,
  'MOUNTAIN_SAW_DWARF_DISAPPEAR': true,
  'MOUNTAIN_GOT_PENDANT': true,

  'CABIN_ALREADY_ENTERED': false,
  'CABIN_ENTERED_WITHOUT_BEING_INVITED': false,
  'CABIN_IS_FIRST_TIME_TALKING_TO': false,
  'CABIN_AGREED_WITH_RODRICK': false,
  'CABIN_STOOD_UP_FOR_THE_HEROIN': false,
  'CABIN_TOLD_RODRICK_ABOUT_THE_PLAN': false,
  'CABIN_RODRICK_IS_ANXIOUS': false,
  'CABIN_GAVE_WATER_TO_RODRICK': false,
  'CABIN_HOLD_RODRICK_HANDS': false,
  'CABIN_SAID_WORDS_OF_CONFORT_TO_RODRICK': false,
  'CABIN_RODRICK_ACCEPTED_TO_HELP': false,
  'CABIN_TRIED_TO_GIVE_PENDANT_TO_RODRICK': false,
  'CABIN_ASKED_THE_HEROIN_NAME': false,
}

keys['FOREST_INTRO_CONCLUDED'] = true;
keys['FOREST_LEFT_ONCE'] = true;

var story = {
  'prado': [
    {
      requirements: () => {
        return keys['INIT']
      },
      auto: true,
      chat: [
        {
          text: 'Você abre os olhos e vê um campo no meio de uma floresta.'
        },
        {
          text: 'Está de noite. Silencioso. Escuro. A única coisa que você consegue sentir é uma leve brisa de ar em seu corpo.',
          audio: 'someplace-i-know.mp3'
        },
        {
          text: 'Você começa a olhar em volta para tentar entender o que está acontecendo.'
        },
        {
          text: 'Seu coração acelera. Não há ninguém por perto.'
        },
        {
          text: '"Que lugar é esse?", você se questiona.'
        },
        {
          text: '"Como vim parar aqui?", prossegue os seus questionamentos.'
        },
        {
          text: 'Procurar alguém que possa responder as suas perguntas se tornou uma ação infrutífera. Portanto, você começa a reparar no cenário que se expande ao seu redor.'
        },
        {
          text: 'Mas, infelizmente, a sorte não parece estar ao seu lado.'
        },
        {
          text: 'A grama aos seus pés. As árvores que se encontram na linha do horizonte. Até mesmo as nuvens no céu...'
        },
        {
          text: 'É difícil focar em qualquer elemento na sua frente. É como se eles estivessem lutando para manter suas composições físicas, decompondo-se em partículas e logo depois voltando as suas formas originais.'
        },
        {
          text: 'Sua ansiedade aumenta. Você nunca presenciou algo parecido na sua vida. Seus instintos de sobrevivência estão perdidos diante de tal situação.'
        },
        {
          text: 'Por sorte, você ainda possui uma pequena parte de si que ainda está focada em te salvar dessa situação.'
        },
        {
          text: 'Você tenta se lembrar do que aconteceu, buscando qualquer pista que possa explicar o motivo de você estar nesse lugar horripilante.'
        },
        {
          text: '...'
        },
        {
          text: '......'
        },
        {
          text: '.........'
        },
        {
          text: 'Nada.'
        },
        {
          text: 'Você grita. Você começa a correr. A única coisa que você quer nesse momento é ir para casa. Esse lugar não foi feito para humanos.'
        },
        {
          text: 'Você tropeça no caminho, mas isso não é nada. O seu pânico te coloca de pé novamente. Você volta a correr sabe Deus para onde.'
        },
        {
          text: 'E então, você ouve uma voz fraca atrás de você. Você imediatamente gira o seu corpo e levanta os braços na sua frente, como uma espécie de escudo.'
        },
        {
          speaker: 'Desconhecida',
          text: 'Por essa... eu não esperava...',
          audio: 'self-contained-universe.mp3'
        },
        {
          text: 'Você abaixa os braços e vê uma mulher deitada, com as costas apoiadas em uma rocha. Seus cabelos vermelhos são tão grandes que alcançam o chão.'
        },
        {
          text: 'Apesar de parecer jovem, sua condição e aparência estão fracas.'
        },
        {
          text: 'A forma física da mulher também é volátil, igual a rocha e a grama que estão abaixos dela. É como se ela fosse desaparecer, mas logo depois voltasse ao normal.'
        },
        {
          text: 'Mais uma vez você não entende o que está acontecendo. Você tinha acabado de passar por aquele caminho. Como pôde não ter notado aquela mulher?'
        },
        {
          text: 'O senso comum seria essa situação te deixar mais ainda em alerta.'
        },
        {
          text: 'Mas por algum motivo você sente tristeza. Como se você conhecesse aquela mulher há muito tempo e conseguisse entender a sua dor.'
        },
        {
          speaker: 'Desconhecida',
          text: 'Se aproxime, criança... Não irei lhe fazer mal.',
        },
        {
          options: [
            {
              text: 'Se aproximar.',
              chat: [
                {
                  text: 'Relutante, você se aproxima da mulher.',
                  action: () => {
                    keys['INIT'] = false;
                    keys['HEROIN_IS_FIRST_TIME_TALKING_TO'] = true;
                    keys['HEROIN_CHOSE_TO_GET_CLOSE_TO'] = true;
                  },
                  goBack: true,
                }
              ]
            },
            {
              text: 'Perguntar quem ela é.',
              chat: [
                {
                  speaker: 'Desconhecida',
                  text: 'Está com... medo de se aproximar? Como pode ver, não... tenho forças para te machucar...'
                },
                {
                  speaker: 'Desconhecida',
                  text: 'Ora, onde estão... os meus modos... Você deve estar apavorada...'
                },
                {
                  speaker: 'Desconhecida',
                  text: 'Se for se sentir melhor... pode ficar onde está... minha criança... mas peço que me escute bem...'
                },
                {
                  options: [
                    {
                      text: 'Conter o medo e se aproximar da mulher.',
                      chat: [
                        {
                          text: 'Relutante, você se aproxima da mulher.',
                          action: () => {
                            keys['INIT'] = false;
                            keys['HEROIN_IS_FIRST_TIME_TALKING_TO'] = true;
                            keys['HEROIN_CHOSE_TO_GET_CLOSE_TO'] = true;
                          },
                          goBack: true,
                        }
                      ]
                    },
                    {
                      text: 'Ficar onde está.',
                      chat: [
                        {
                          text: 'Apesar de não ter medo daquela mulher, você prefere manter distância.',
                          action: () => {
                            keys['INIT'] = false;
                            keys['HEROIN_IS_FIRST_TIME_TALKING_TO'] = true;
                            keys['HEROIN_CHOSE_TO_GET_CLOSE_TO'] = false;
                          },
                          goBack: true,
                        }
                      ]
                    },
                  ]
                },
              ]
            }
          ],
        },
      ]
    },
    {
      requirements: () => {
        return keys['HEROIN_IS_FIRST_TIME_TALKING_TO']
      },
      auto: true,
      chat: [
        {
          speaker: 'Desconhecida',
          text: 'Primeiramente, prazer em... te conhecer. Só gostaria que tivéssemos nos conhecido em... circustâncias melhores.'
        },
        {
          speaker: 'Desconhecida',
          text: 'O meu nome é...'
        },
        {
          speaker: 'Desconhecida',
          text: '...'
        },
        {
          speaker: 'Desconhecida',
          text: '...'
        },
        {
          speaker: 'Desconhecida',
          text: 'Infelizmente já não o lembro mais... só lembro que eu costumava ser... a heroína desse mundo.'
        },
        {
          text: 'Você percebe que ela está usando toda a energia que tem para conseguir conversar e manter sua existência intacta.'
        },
        {
          speaker: 'Heroína',
          text: 'Como pode perceber... esse mundo está deixando de existir...'
        },
        {
          speaker: 'Heroína',
          text: 'A maior parte da população já se foi... Minha família... Meus amigos... Meus vizinhos...'
        },
        {
          speaker: 'Heroína',
          text: 'Imagine a minha surpresa ao ver você... Uma humana assim como eu... nova nesse mundo, no meio de toda essa destruição...',
        },
        {
          text: 'A Heroína começa a chorar enquanto lamenta sobre todo o desastre que aconteceu. Um choro sem soluços. Apenas as lágrimas escorrendo pelo seu rosto, como se ela já tivesse acostumada com isso.',
        },
        {
          text: 'Ver essa cena está partindo o seu coração.',
          action: () => {
            keys['HEROIN_IS_ASKING_MAIN_QUESTIONS'] = true;
            keys['HEROIN_IS_FIRST_TIME_TALKING_TO'] = false;
          },
          goBackImmediately: true,
        }
      ]
    },
    {
      requirements: () => {
        return keys['HEROIN_IS_ASKING_MAIN_QUESTIONS']
      },
      auto: true,
      chat: [
        {
          options: [
            {
              text: 'Você sabe o motivo de eu ter vindo para este mundo? Estou tão... perdida.',
              alreadySeen: () => {
                return keys['HEROIN_ASKED_REASON_TO_COME_TO_THIS_WORLD'];
              },
              chat: [
                {
                  speaker: 'Heroína',
                  text: 'Essa é uma boa pergunta...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Talvez esse mundo esteja tentando repor sua heroína... já que eu falhei em minha missão.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Me dói pensar nisto... em pensar que por causa da minha incapacidade... eu acabei te colocando nessa situação.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Se você está aqui... então talvez signifique que este mundo ainda não tenha desistido... talvez exista uma chance de salvá-lo.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Então, em outras palavras... você talvez seja a nossa última esperança...',
                  action: () => {
                    keys['HEROIN_ASKED_REASON_TO_COME_TO_THIS_WORLD'] = true;
                  },
                  goBackImmediately: true
                }
              ]
            },
            {
              text: 'O que está acontecendo com esse mundo?',
              alreadySeen: () => {
                return keys['HEROIN_ASKED_WHAT_WAS_HAPPENING_TO_THIS_WORLD'];
              },
              chat: [
                {
                  speaker: 'Heroína',
                  text: 'Morrendo...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Esse mundo foi amaldiaçoado há muito tempo... Há 10 anos para ser exato.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Tentamos de tudo para libertá-lo... mas nada deu certo.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Nossa última esperança se encontra em um altar... que encontrei ao norte daqui...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Mas não fui capaz de abrir sua porta...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Para que a porta abrisse, seria necessário um representante de cada raça desse mundo...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Um anão... um elfo... e uma sereia.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Mas achei o altar tarde demais... já estava quase sem forças... e não sei se ainda existem representantes vivos de cada raça.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Mesmo se existirem... eles devem estar na mesma situação que eu... perto de sucumbir.',
                  action: () => {
                    keys['HEROIN_ASKED_WHAT_WAS_HAPPENING_TO_THIS_WORLD'] = true;
                  },
                  goBackImmediately: true
                },
              ]
            },
            {
              text: 'Por que é necessário um representante de cada raça para abrir a porta?',
              alreadySeen: () => {
                return keys['HEROIN_ASKED_ABOUT_THE_DOOR_LOCK'];
              },
              requirements: () => {
                return keys['HEROIN_ASKED_REASON_TO_COME_TO_THIS_WORLD'] && keys['HEROIN_ASKED_WHAT_WAS_HAPPENING_TO_THIS_WORLD'];
              },
              chat: [
                {
                  speaker: 'Heroína',
                  text: 'Esse mundo funciona com um perfeito equilíbrio entre as raças.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Pelo menos, funcionava...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Os anões viviam isolados perto das montanhas... os elfos viviam em suas casas construídas no topo de enormes árvores... e as sereias nos lagos, rios e oceanos...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Existia paz entre as três raças, cada um ajudando no que o outro necessitava...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Porém, cada raça possuía algo bem mais valioso e único... era algo que definia as suas próprias existências...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Esse algo é chamado de Alma Primordial... cada raça com a sua...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Possuir uma Alma Primordial permite que o portador consiga acessar partes desse mundo que antes eram bloqueadas...'
                },
                {
                  speaker: 'Heroína',
                  text: 'A porta do altar possui uma fechadura única que só pode ser aberta ao ter as três Almas Primordias, uma de cada raça.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Eu sou uma mera humana... assim como você, minha criança. Nossas almas são desconhecidas para esse mundo... portanto não servem para destrancar a fechadura.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Assim que entendi o que era necessário ser feito, parti atrás de sobreviventes das três raças... mas não consegui ir muito longe... como você pôde notar...',
                },
                {
                  text: 'A Heroína esboça um sorriso vazio, envergonhada pelo seu fracasso.',
                  action: () => {
                    keys['HEROIN_ASKED_ABOUT_THE_DOOR_LOCK'] = true;
                  },
                  goBackImmediately: true
                },
              ]
            },
            {
              text: 'O que eu preciso fazer para salvar esse mundo?',
              alreadySeen: () => {
                return keys['HEROIN_ASKED_HOW_TO_SAVE_THE_WORLD'];
              },
              requirements: () => {
                return keys['HEROIN_ASKED_ABOUT_THE_DOOR_LOCK'];
              },
              chat: [
                {
                  text: 'A Heroína direciona o olhar para você. Ela faz uma breve pausa antes de te responder.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Que fardo horrível que caiu em suas costas, minha criança. Eu, mais do que ninguém, sei o quanto você deve estar assustada.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Escute com atenção, criança. Como disse antes, se você está aqui, talvez signifique que ainda exista uma salvação.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Procure as três Almas Primordiais e abra a porta do altar ao norte.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Espero que ainda existam sobreviventes para te ajudar nessa jornada...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Os anões podem ser encontradas ao oeste, perto das montanhas... Eles são teimosos, então seja insistente.'
                },
                {
                  speaker: 'Heroína',
                  text: 'A comunidade elfíca mais próxima se encontra na floresta ao sul... Eles não confiam facilmente em estranhos, então não fique chateada caso não receba uma recepção calorosa.'
                },
                {
                  speaker: 'Heroína',
                  text: 'A última vez que ouvi um canto de uma sereia foi vindo do lago localizado ao leste. Elas são inofensivas, diferentemente das sereias mencionadas nas mitologias do nosso mundo de origem... Elas irão te ajudar.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Meu medo... é que eles já estejam perto de perecer, assim como eu.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Se isso for verdade, muito provavelmente eles não vão conseguir te acompanhar até o altar...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Mas esse não é o fim...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Escute bem o que tenho a te dizer, minha criança...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Como somos humanas, nossas almas podem não ter muito valor nesse mundo... mas isso permite que consigamos herdar Almas Primordias das outras raças.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Abrir mão de uma Alma Primordial não é algo fácil. As raças estão certas ao tomarem o máximo de cuidado para que elas não caiam nas mãos erradas.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Além disso, mesmo se você conseguir a confiança desses representantes, herdar uma Alma Primordial vai requerer que você... entre em sintonia com o que é mais puro para cada raça. Não será algo fácil.'
                },
                {
                  text: 'A mulher começa a tossir... mas logo recupera o fôlego.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Desculpe... herdar uma Alma Primordial vai requerer que você entre em sintonia com o que é mais puro para cada raça... Não será algo fácil.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Me envergonho em dizer isso... mas nunca fui capaz de herdar uma Alma Primordial. Que bela heroína eu sou.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Mas sinto, no fundo da minha mera existência, que você obterá sucesso...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Vá, minha criança. Procure os sobreviventes de cada raça. Herde suas Almas Primordiais e abra o altar que se encontra ao norte.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Sinto-lhe dizer, mas talvez essa seja... a única forma de você conseguir voltar para casa.',
                  action: () => {
                    if (!keys['HEROIN_ASKED_HOW_TO_SAVE_THE_WORLD']) {
                      keys['HEROIN_FIRST_TALK_CONCLUDED'] = true;
                      keys['HEROIN_IS_ASKING_MAIN_QUESTIONS'] = false;
                    }

                    keys['HEROIN_ASKED_HOW_TO_SAVE_THE_WORLD'] = true;
                  },
                  goBackImmediately: true
                },
              ]
            },
            {
              text: 'Sair da conversa',
              requirements: () => {
                return keys['STARTED_QUEST'];
              },
              chat: [
                {
                  speaker: 'Heroína',
                  text: 'Que a sorte esteja do seu lado, minha criança.',
                  action: () => {
                    keys['HEROIN_IS_ASKING_MAIN_QUESTIONS'] = false;
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      requirements: () => {
        return keys['HEROIN_FIRST_TALK_CONCLUDED'] && !keys['STARTED_QUEST']
      },
      auto: true,
      chat: [
        {
          options: [
            {
              text: 'Ainda não consigo acreditar no que está acontecendo...',
              alreadySeen: () => {
                return keys['HEROIN_HESITATED_TO_SEARCH_THE_SOULS'];
              },
              chat: [
                {
                  text: 'Você ainda não se acostumou com a visão de um mundo em colapso.'
                },
                {
                  text: 'Muito menos com a ideia de que a única esperança de voltar para o seu mundo não é nem ao menos certo que irá funcionar.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Se eu pudesse... tomaria essa responsabilidade de você sem nem hesitar.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Mas essa luta agora é sua... por mais que me entristeça ser a portadora das más notícias.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Não parta desse mundo igual eu... esquecida... sem lembrar de seu próprio nome...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Obtenha as Almas Primordias... e volte para o seu mundo... viva a vida que você merece...',
                  action: () => {
                    keys['HEROIN_HESITATED_TO_SEARCH_THE_SOULS'] = true;
                  },
                  goBack: true,
                }
              ]
            },
            {
              text: 'Entendi... irei atrás dos representantes. Por favor, aguente firme só por mais um pouco',
              chat: [
                {
                  speaker: 'Heroína',
                  text: 'Obrigada, criança. Estarei aguardando aqui, com esperanças que você volte com boas notícias.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Também não é como... se eu pudesse fazer outra coisa...',
                },
                {
                  text: 'Você processa o que acabou de ouvir. Parece não haver outra alternativa.',
                },
                {
                  text: 'Você olha ao seu redor. É triste ver a situação em que este mundo se encontra.',
                },
                {
                  text: 'Após respirar fundo, você conclui que não há tempo a perder. Este mundo precisa de ajuda.',
                },
                {
                  text: 'Você precisa achar o caminho de volta para casa!',
                  action: () => {
                    keys['STARTED_QUEST'] = true;
                  },
                  goBack: true,
                },
              ]
            }
          ]
        }
      ]
    },
    {
      requirements: () => {
        return keys['STARTED_QUEST']
      },
      auto: true,
      chat: [
        {
          cleanText: true,
          audio: 'on-little-cat-feet.mp3',
          options: [
            {
              text: 'Falar novamente com a Heroína',
              chat: [
                {
                  text: 'Você se aproxima da Heroína. Ela ainda está deitada e agora de olhos fechados.'
                },
                {
                  text: 'Assim que você chega perto, ela percebe a sua presença e abre os olhos.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Olá, minha criança. Precisa de algo?',
                  action: () => {
                    keys['HEROIN_IS_ASKING_MAIN_QUESTIONS'] = true;
                  },
                  goBackImmediately: true,
                },
              ]
            },
            {
              text: 'Ir para o norte',
              chat: [
                {
                  speaker: 'Heroína',
                  text: 'Onde você está indo, criança? Você ainda precisa das três Almas Primordiais antes de partir para o templo.'
                },
                {
                  text: 'Lembrando-se do que precisa ser feito, você volta para o meio do campo.',
                  goBack: true,
                },
              ]
            },
            {
              text: 'Ir para o oeste',
              chat: [
                {
                  text: 'Você se dirige para o oeste, em direção à montanha.',
                  goBack: true,
                  moveToScene: 'montanha'
                },
              ]
            },
            {
              requirements: () => {
                return !keys['FOREST_SOLVED_MAZE'];
              },
              text: 'Ir para o sul',
              chat: [
                {
                  text: 'Você se dirige para o sul, em direção à floresta.',
                  goBack: true,
                  moveToScene: 'floresta'
                },
              ]
            },
            {
              requirements: () => {
                return keys['FOREST_SOLVED_MAZE'];
              },
              text: 'Ir para o sul',
              chat: [
                {
                  text: 'Você se dirige para o sul, em direção à floresta.',
                  goBack: true,
                  moveToScene: 'arvore'
                },
              ]
            },
            {
              text: 'Ir para o leste',
              chat: [
                {
                  text: 'Você se dirige para o leste, em direção ao lago.',
                  goBack: true,
                  moveToScene: 'lago'
                },
              ]
            }
          ]
        }
      ]
    }
  ],
  'montanha': [
    {
      requirements: () => {
        return !keys['MOUNTAIN_SAW_DWARF_DISAPPEAR'] && !keys['MOUNTAIN_TALKED_TO_DWARF'];
      },
      auto: true,
      chat: [
        {
          text: 'Depois de uma breve caminhada você chega em uma trilha que leva para uma montanha.',
          audio: 'silverpoint.mp3',
        },
        {
          text: 'Assim como no campo, tudo ao seu redor está volátil.',
        },
        {
          text: 'Durante o caminho, você tenta refletir a situação atual.',
        },
        {
          text: 'Será que notaram o seu desaparecimento no seu mundo? Será que estão procurando por você?',
        },
        {
          text: 'Desde que chegou nesse mundo, sua mente tem estado confusa. Você precisa fazer um leve esforço para tentar lembrar qualquer coisa.',
        },
        {
          text: 'Você anseia pela sua vida normal. Sua cama, sua rotina, as pessoas que você gosta.',
        },
        {
          text: 'Por que você foi a escolhida? O que você fez de errado para merecer esse pesadelo?',
        },
        {
          text: 'Com um aperto no coração, você segue andando na trilha.',
        },
        {
          text: '10 minutos já se passaram? Talvez 15.',
        },
        {
          text: 'Você acredita ter notado uma cabana a frente. Talvez mais alguns minutos e você chegará lá.',
        },
        {
          text: 'Mas seu coração para de bater ao escutar um voz desconhecida.',
        },
        {
          speaker: 'Voz',
          text: 'Ro.. dri.. ck...',
        },
        {
          text: 'Você olha em direção a voz. Existe uma anã caída no chão logo a frente.',
        },
        {
          text: 'Você se aproxima da anã com pressa. Talvez ela seja a única que possa te ajudar.',
        },
        {
          text: 'Ela possui uma estatura baixa. Seus cabelos loiros estão todos bagunçados. Lágrimas escorrem pelo seu rosto.',
        },
        {
          text: 'Ao se aproximar, você se ajoelha para verificar o estado da anã.',
        },
        {
          text: 'Você ainda não se acostumou com a visão de objetos e seres vivos lutando para manter suas composições físicas.',
        },
        {
          text: 'Essa anã parece estar muito mais volátil que a Heroína.',
        },
        {
          speaker: 'Anã',
          text: 'Humana? Nunca te... vi... por aqui...',
        },
        {
          options: [
            {
              text: 'Você está bem? Me diga o que fazer para te ajudar.',
              chat: [
                {
                  text: 'Você segura a mão dela. É uma sensação estranha. É como se você estivesse segurando algo que ao mesmo tempo está e não está alí.',
                  action: () => {
                    keys['MOUNTAIN_DWARF_DEMONSTRATED_CONCERN'] = true;
                    keys['MOUNTAIN_TALKED_TO_DWARF'] = true;
                  },
                  goBack: true,
                },
              ],
            },
            {
              text: 'Você é uma anã, certo? Preciso de ajuda para encontrar as Almas Primordiais. Você sabe onde posso encontrá-las?',
              chat: [
                {
                  text: 'O tempo pode ser curto. Você imediatamente pergunta sobre informações relacionadas ao seu objetivo.',
                  action: () => {
                    keys['MOUNTAIN_TALKED_TO_DWARF'] = true;
                  },
                  goBack: true
                }
              ]
            },
          ]
        }
      ]
    },
    {
      requirements: () => {
        return !keys['MOUNTAIN_SAW_DWARF_DISAPPEAR'] && keys['MOUNTAIN_TALKED_TO_DWARF'];
      },
      auto: true,
      chat: [
        {
          text: 'Mas suas palavras foram em vão.',
        },
        {
          speaker: 'Anã',
          text: 'Salve.. Ro.. drick...',
        },
        {
          text: 'O corpo da anã começa a ficar cada vez mais volátil.',
        },
        {
          text: 'A mão que você estava segurando simplesmente para de ocupar volume no espaço.',
          requirements: () => {
            return keys['MOUNTAIN_DWARF_DEMONSTRATED_CONCERN'];
          }
        },
        {
          text: 'Logo depois, seus braços, tronco e pernas desaparecem. A última coisa que você presencia são os olhos da anã fechando, enquanto o resto do seu corpo e lágrimas desaparecem no ar.',
          requirements: () => {
            return keys['MOUNTAIN_DWARF_DEMONSTRATED_CONCERN'];
          }
        },
        {
          text: 'Uma tristeza invade o seu corpo. Você não foi capaz de ajudar a pobre anã.',
          requirements: () => {
            return keys['MOUNTAIN_DWARF_DEMONSTRATED_CONCERN'];
          }
        },
        {
          text: 'Como poderia?',
          requirements: () => {
            return keys['MOUNTAIN_DWARF_DEMONSTRATED_CONCERN'];
          }
        },
        {
          text: 'Isso te desespera ainda mais. Você precisa saber como conseguir a Alma Primordial. Você precisa voltar para casa.',
          requirements: () => {
            return !keys['MOUNTAIN_DWARF_DEMONSTRATED_CONCERN'];
          }
        },
        {
          text: 'O corpo da anã vai desaparecendo aos poucos. Você grita, pedindo para que ela não vá. Mas o destino dela já está selado.',
          requirements: () => {
            return !keys['MOUNTAIN_DWARF_DEMONSTRATED_CONCERN'];
          }
        },
        {
          text: 'Você imediatamente se lembra que está sozinha. A solidão mais uma vez toma conta no meio dessa trilha.',
        },
        {
          text: 'Se ela era a última anã, então suas esperanças estavam mortas.',
        },
        {
          text: '...',
        },
        {
          text: '"Ela citou um nome, certo?", você se pergunta.',
        },
        {
          text: '"Rodrick". Se ele for um anão igual a ela, talvez ainda exista um jeito de conseguir a Alma Primordial dos anões.',
        },
        {
          text: 'Você se esforça para levantar. Por mais que a situação atual não esteja boa, ficar parada não irá ajudar em nada.',
          action: () => {
            keys['MOUNTAIN_SAW_DWARF_DISAPPEAR'] = true;
          },
          goBackImmediately: true,
        },
      ]
    },
    {
      requirements: () => {
        return keys['MOUNTAIN_SAW_DWARF_DISAPPEAR'];
      },
      auto: true,
      chat: [
        {
          audio: 'silverpoint.mp3',
          options: [
            {
              text: 'Investigar a trilha',
              chat: [
                {
                  requirements: () => {
                    return keys['MOUNTAIN_GOT_PENDANT'];
                  },
                  text: 'Você investiga a trilha, mas não encontra nada.',
                  goBackImmediately: true,
                },
                {
                  text: 'Você investiga o local onde a anã estava.'
                },
                {
                  text: 'Você acha um pingente.'
                },
                {
                  text: 'Ele possui um fecho. Você o abre.'
                },
                {
                  text: 'Dentro dele existe a foto de dois anões. Um de cada lado.'
                },
                {
                  text: 'Você reconhece a anã que está na parte da direita. É a anã que você acabou de ver desaparecer.'
                },
                {
                  text: 'Na foto ela está feliz. Com um belo sorriso no rosto. Totalmente diferente da versão que você conheceu... triste, aos prantos, desesperada.'
                },
                {
                  text: 'Do outro lado está a foto de um anão que você não reconhece. Ele possui uma espessa barba preta e uma feição séria.'
                },
                {
                  text: 'Você guarda o pingente no bolso.',
                  action: () => {
                    keys['MOUNTAIN_GOT_PENDANT'] = true;
                  },
                  goBackImmediately: true,
                },
              ]
            },
            {
              text: 'Ir para a cabana',
              chat: [
                {
                  text: 'Você se dirige para a cabana.',
                  goBack: true,
                  moveToScene: 'cabana'
                },
              ]
            },
            {
              text: 'Voltar para o campo',
              chat: [
                {
                  text: 'Você se dirige para o campo.',
                  goBack: true,
                  moveToScene: 'prado'
                },
              ]
            }
          ]
        }
      ]
    }
  ],
  'cabana': [
    {
      requirements: () => {
        return !keys['CABIN_ALREADY_ENTERED'];
      },
      auto: true,
      chat: [
        {
          text: 'Você se aproxima da cabana. O local parece velho e rústico. A porta está aberta',
          // TODO: Mover o audio geothermal para cá
        },
        {
          audio: 'geothermal.mp3',
          options: [
            {
              text: 'Bater na porta mesmo assim',
              chat: [
                {
                  text: 'Você bate na porta com a esperança que alguém responda.'
                },
                {
                  text: 'É possível ouvir uma voz vindo de dentro da cabana.'
                },
                {
                  speaker: 'Voz',
                  text: 'VÁ EMBORA!'
                },
                {
                  text: 'Você se assusta com o grito e dá um pulo para trás. Quem está dentro da cabana provavelmente não quer visitas.' 
                },
                {
                  options: [
                    {
                      text: 'Pedir licença para entrar na cabana',
                      chat: [
                        {
                          text: 'Você se aproxima da cabana.'
                        },
                        {
                          text: '"Com licença, eu preciso de ajuda. É urgente! Por favor, me deixe entrar."'
                        },
                        {
                          speaker: 'Voz',
                          text: 'Me deixe em paz. Não tenho como te ajudar. O mundo já está acabando, aproveite o resto do seu tempo enquanto pode.'
                        },
                        {
                          options: [
                            {
                              text: 'Explicar o motivo da sua visita.',
                              chat: [
                                {
                                  text: '"Senhor, acho que existe uma forma de salvar esse mundo, mas para isso eu preciso da sua ajuda. Por favor, permita-me entrar."'
                                },
                                {
                                  speaker: 'Voz',
                                  text: 'Não há mais nada a fazer. Nem aquela Heroína conseguiu resolver algo, quem dirá eu.'
                                },
                                {
                                  options: [
                                    {
                                      text: 'Falar brevemente sobre a Alma Primordial e sua importância',
                                      chat: [
                                        {
                                          text: '"Não, ainda há esperança. A Heroína me explicou como as Almas Primordiais podem salvar esse mundo."'
                                        },
                                        {
                                          speaker: 'Voz',
                                          text: 'Almas Primordias? Quem liga para isso...'
                                        },
                                        {
                                          options: [
                                            {
                                              text: 'Terminar a conversa e entrar na cabana',
                                              chat: [
                                                {
                                                  text: '"Chega, não temos tempo a perder! Com licença, estou entrando na cabana!"',
                                                },
                                                {
                                                  text: 'Você entra na cabana mesmo sem ser convidada. O retorno para o seu mundo está em jogo.',
                                                  action: () => {
                                                    keys['CABIN_ENTERED_WITHOUT_BEING_INVITED'] = true;
                                                    keys['CABIN_ALREADY_ENTERED'] = true;
                                                  },
                                                  goBack: true,
                                                }
                                              ]
                                            },
                                            {
                                              text: 'Suplicar para ser recebida na cabana',
                                              chat: [
                                                {
                                                  text: '"Por favor, me deixe entrar na cabana. Irei te explicar tudo."'
                                                },
                                                {
                                                  text: 'Você não ouve nada após falar isso. Por alguns segundos você só consegue ouvir o completo silêncio.'
                                                },
                                                {
                                                  text: 'Depois de um tempo, você ouve novamente a voz de dentro da cabana.'
                                                },
                                                {
                                                  speaker: 'Voz',
                                                  text: 'Entre logo e acabe com isso.'
                                                },
                                                {
                                                  text: 'Você suspira aliviada e entra na cabana. O destino deste mundo está em jogo.',
                                                  action: () => {
                                                    keys['CABIN_ALREADY_ENTERED'] = true;
                                                  },
                                                  goBack: true,
                                                },
                                              ]
                                            },
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      text: 'Entrar na cabana mesmo assim. Você não tem tempo a perder',
                                      chat: [
                                        {
                                          text: '"Estou entrando mesmo assim! Com licença."'
                                        },
                                        {
                                          text: 'Você entra na cabana mesmo sem ser convidada. O retorno para o seu mundo está em jogo.',
                                          action: () => {
                                            keys['CABIN_ENTERED_WITHOUT_BEING_INVITED'] = true;
                                            keys['CABIN_ALREADY_ENTERED'] = true;
                                          },
                                          goBack: true,
                                        }
                                      ]
                                    },
                                  ]
                                }
                              ]
                            },
                            {
                              text: 'Entrar na cabana mesmo assim. Você não tem tempo a perder',
                              chat: [
                                {
                                  text: '"Estou entrando mesmo assim! Com licença."'
                                },
                                {
                                  text: 'Você entra na cabana mesmo sem ser convidada. O retorno para o seu mundo está em jogo.',
                                  action: () => {
                                    keys['CABIN_ENTERED_WITHOUT_BEING_INVITED'] = true;
                                    keys['CABIN_ALREADY_ENTERED'] = true;
                                  },
                                  goBack: true,
                                }
                              ]
                            }
                          ]
                        },
                      ]
                    },
                    {
                      text: 'Gritar avisando que não vai embora até conseguir o que precisa',
                      chat: [
                        {
                          text: 'Você se aproxima da cabana.'
                        },
                        {
                          text: '"Não irei até falar com o senhor! É algo urgente! Estou entrando."'
                        },
                        {
                          text: 'Você entra na cabana mesmo sem ser convidada. O retorno para o seu mundo está em jogo.',
                          action: () => {
                            keys['CABIN_ENTERED_WITHOUT_BEING_INVITED'] = true;
                            keys['CABIN_ALREADY_ENTERED'] = true;
                          },
                          goBack: true,
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              text: 'Entrar na cabana',
              chat: [
                {
                  text: 'Você entra direto na cabana. O seu retorno para casa depende disso.',
                  action: () => {
                    keys['CABIN_ENTERED_WITHOUT_BEING_INVITED'] = true;
                    keys['CABIN_ALREADY_ENTERED'] = true;
                  },
                  goBack: true,
                }
              ]
            }
          ],
        }
      ]
    },
    {
      requirements: () => {
        return keys['CABIN_ALREADY_ENTERED'] && !keys['CABIN_IS_FIRST_TIME_TALKING_TO'];
      },
      auto: true,
      chat: [
        {
          text: 'Você caminha para dentro da cabana.'
        },
        {
          text: 'Ao entrar, você percebe que tudo está prestes a se dissipar, igual do lado de fora.'
        },
        {
          text: 'Existe apenas um cômodo, e todo o alicerce foi construído a base de madeira.'
        },
        {
          text: 'Apesar de ter uma aparência velha, o local parece ser bastante aconchegante. Talvez por conta da lareira que se encontra em uma das paredes.'
        },
        {
          text: 'Já no canto oposto, você repara em um anão barbudo sentado em uma grande cadeira.'
        },
        {
          text: 'Seus olhos estão pesados. Ele provavelmente esteve chorando recentemente.'
        },
        {
          text: 'Além disso, seu corpo está se dissipando igual a todas as outras coisas desse mundo, mas existe algo de diferente nele.'
        },
        {
          text: 'A dissipação está mais forte em suas pernas. Tanto que estão quase transparentes. Em contrapartida, o resto do corpo está quase intacto. Talvez a maldição esteja afetando ele de forma diferente.'
        },
        {
          requirements: () => {
            return keys['MOUNTAIN_GOT_PENDANT'];
          },
          text: 'Você percebe que ele é igual a foto do anão que está dentro do pingente que você encontrou mais cedo. Provavelmente ele tem uma relação com a anã que desapareceu.'
        },
        {
          requirements: () => {
            return keys['MOUNTAIN_GOT_PENDANT'];
          },
          text: 'A ideia de trazer as más notícias embrulha o seu estômago.'
        },
        {
          text: 'O anão está encarando você.'
        },
        {
          requirements: () => {
            return keys['CABIN_ENTERED_WITHOUT_BEING_INVITED'];
          },
          speaker: 'Anão',
          text: 'Menina má educada! Não te dei o direito de entrar aqui!'
        },
        {
          requirements: () => {
            return keys['CABIN_ENTERED_WITHOUT_BEING_INVITED'];
          },
          text: '"Desculpe, senhor, mas são assuntos urgentes! Eu preciso lhe fazer algumas perguntas"'
        },
        {
          requirements: () => {
            return keys['CABIN_ENTERED_WITHOUT_BEING_INVITED'];
          },
          speaker: 'Anão',
          text: 'Bem, então começou errado ao ter invadido a minha propriedade. Se eu pudesse, estaria te jogando para fora daqui agora mesmo.'
        },
        {
          requirements: () => {
            return keys['CABIN_ENTERED_WITHOUT_BEING_INVITED'];
          },
          text: '"Sinto muito mesmo, senhor. Prometo que o que eu tenho a dizer vai valer a pena."'
        },
        {
          requirements: () => {
            return keys['CABIN_ENTERED_WITHOUT_BEING_INVITED'];
          },
          speaker: 'Anão',
          text: 'E espero que seja rápido também!'
        },
        {
          speaker: 'Anão',
          text: 'E então? Quem é você? O que você quer?',
          action: () => {
            keys['CABIN_IS_FIRST_TIME_TALKING_TO'] = true;
          },
          goBackImmediately: true,
        }
      ]
    },
    {
      requirements: () => {
        return keys['CABIN_IS_FIRST_TIME_TALKING_TO'] && !keys['CABIN_TOLD_RODRICK_ABOUT_THE_PLAN']
      },
      auto: true,
      chat: [
        {
          requirements: () => {
            return !keys['CABIN_AGREED_WITH_RODRICK'] && !keys['CABIN_STOOD_UP_FOR_THE_HEROIN'];
          },
          options: [
            {
              text: 'Meu nome é Isabelle. Sou uma humana e me falaram que fui invocada nesse mundo para conseguir salvá-lo.',
              chat: [
                {
                  speaker: 'Anão',
                  text: 'E quem foi o lunático que te disse isso?'
                },
                {
                  text: '"A Heroína. Encontrei ela logo depois de aparecer nesse mundo.", você disse.'
                },
                {
                  speaker: 'Anão',
                  text: 'Pobre coitada. Ela está há anos procurando uma solução. Sacrificou tudo o que tinha... para no fim se afundar em arrependimentos.'
                },
                {
                  speaker: 'Anão',
                  text: 'Todo esse esforço para nada...'
                },
                {
                  options: [
                    {
                      text: 'Defender a Heroína',
                      chat: [
                        {
                          text: '"Por favor, não diga isso.", você disse prontamente. "Foi graças ao esforço contínuo que ela conseguiu achar uma pista de como impedir o fim desse mundo."'
                        },
                        {
                          speaker: 'Anão',
                          text: 'Uma pista? Já perdi a conta de quantas pistas achamos ao longo desses últimos 10 anos.'
                        },
                        {
                          speaker: 'Anão',
                          text: 'Todas inutéis.',
                          action: () => {
                            keys['CABIN_STOOD_UP_FOR_THE_HEROIN'] = true;
                          },
                          goBack: true
                        }
                      ]
                    },
                    {
                      text: 'Concordar com o Anão',
                      chat: [
                        {
                          text: '"Sim, ela estava em uma situação deplorável.", você concordou. "O peso em suas costas foi grande demais para carregar"'
                        },
                        {
                          speaker: 'Anão',
                          text: 'Pelo jeito você ainda tem um pouco de sanidade. Raro hoje em dia.',
                          action: () => {
                            keys['CABIN_AGREED_WITH_RODRICK'] = true;
                          },
                          goBack: true,
                        }
                      ]
                    }
                  ],
                }
              ]
            }
          ]
        },
        {
          text: 'O anão é teimoso igual a Heroína disse. Mas você percebe que é apenas uma máscara.'
        },
        {
          text: 'Ele tenta demonstrar ser forte, mas no fundo parece estar acabado. Desprovido de qualquer esperança.'
        },
        {
          speaker: 'Anão',
          text: 'Já estou acostumado com pessoas da sua laia. Você não vai embora até me contar o que tem de tão importante, não é?'
        },
        {
          speaker: 'Anão',
          text: 'Pois então, me diga... O que aquela pobre alma semeou em sua cabeça?'
        },
        {
          options: [
            {
              text: 'Contar sobre o altar e as Almas Primordiais',
              chat: [
                {
                  text: '"A Heroína conseguiu achar um altar localizado ao norte do campo. Porém, a porta para esse altar possui uma fechadura complicada de destrancar", você disse para o anão desinteressado.',
                },
                {
                  text: '"A única forma de destrancá-la é com a presença de três Almas Primordiais, uma de cada raça desse mundo."',
                },
                {
                  text: '"Por conta disso, estou visitando os lugares nos arredores para ver se acho três representantes para me ajudar a destrancar o altar, na esperança que a solução para esse mundo esteja lá dentro."',
                },
                {
                  speaker: 'Anão',
                  text: 'Três Almais Primordiais... nunca ouvi falar em uma fechadura como essa...',
                },
                {
                  speaker: 'Anão',
                  text: 'Bem, Isabelle, temo em dizer que tenho boas e más notícias.',
                },
                {
                  speaker: 'Anão',
                  text: 'A boa notícia é que ainda existe sim um representante dos anões que possui uma Alma Primordial. E ele está bem na sua frente.',
                },
                {
                  speaker: 'Anão',
                  text: 'A má notícia é que não posso me mover. Como pode ver, minhas pernas já não são mais as mesmas. Não tenho como te acompanhar até o altar.',
                },
                {
                  speaker: 'Anão',
                  text: 'Agora que entende a situação, saia da minha casa.',
                },
                {
                  options: [
                    {
                      text: 'Explicar sobre a herança de almas',
                      chat: [
                        {
                          text: '"Espere. Mesmo que não possa andar, eu sou uma humana. A Heroína me explicou que posso herdar Almas Primordiais de outras raças, dessa forma você não precisaria me acompanhar até o altar."'
                        },
                        {
                          text: 'O anão estava bravo desde a hora que você entrou na cabana. Mas, ao ouvir o que você acabou de dizer, ele faz uma cara mais brava ainda.'
                        },
                        {
                          speaker: 'Anão',
                          text: 'Como... ousa?!'
                        },
                        {
                          speaker: 'Anão',
                          text: 'Você faz ideia do que acaba propor? Menina insolente!'
                        },
                        {
                          text: 'Você fica assustada. Não entende o motivo do anão ter ficado tão irado.'
                        },
                        {
                          speaker: 'Anão',
                          text: 'Parece que você não sabe, então irei traduzir o absurdo que acaba de me dizer!'
                        },
                        {
                          speaker: 'Anão',
                          text: 'Almas Primordiais se manifestam em apenas alguns indivíduos de cada raça. Com elas somos possíveis de acessar áreas desse mundo que, de outra forma, permaneceriam bloqueadas.'
                        },
                        {
                          speaker: 'Anão',
                          text: 'Áreas, essas, que são sagradas para cada raça. Portanto, devemos tomar cuidado para que pessoas más intecionadas não as obtenham!'
                        },
                        {
                          speaker: 'Anão',
                          text: 'Perceba que isso já seria razão suficiente para eu recusar te entregar algo tão importante.'
                        },
                        {
                          speaker: 'Anão',
                          text: 'Mas... além disso... existe outro motivo que aquela Heroína deve ter ocultado de você...'
                        },
                        {
                          speaker: 'Anão',
                          text: 'Quando uma Alma Primordial se manifesta, ela se sincroniza com o hospedeiro de forma imediata. É como se fossem duas partes formando um inteiro.'
                        },
                        {
                          speaker: 'Anão',
                          text: 'Te entregar a minha Alma Primordial significaria o fim da minha vida. Dane-se a maldição, eu sumiria agora mesmo se o fizesse!'
                        },
                        {
                          speaker: 'Anão',
                          text: 'Se eu não tivesse motivos para permanecer nesse mundo, mesmo que ele esteja prestes a desaparecer, poderia até refletir na sua proposta.'
                        },
                        {
                          speaker: 'Anão',
                          text: 'E para o seu azar, eu tenho. Então esqueça! Procure outro jeito de se salvar. Minha ajuda você não terá!'
                        },
                        {
                          text: 'Uma facada teria doído menos. Você não imaginava que herdar Almas Primordiais resultaria na morte de seus hospedeiros originais.'
                        },
                        {
                          text: 'Você abaixa a cabeça envergonhada. Você se sente culpada de ter feito essa proposta sem ao menos entender suas consequências.'
                        },
                        {
                          text: 'Mas tudo nesse mundo é novo para você. Como poderia saber de todas essas coisas?'
                        },
                        {
                          text: 'Você reflete no que acabou de ouvir.'
                        },
                        {
                          text: 'O anão disse que era o último anão sobrevivente com uma Alma Primordial. Falhar aqui significaria o fim de tudo.'
                        },
                        {
                          text: 'Você respira fundo e levanta a cabeça. Essa situação não pode terminar assim.',
                          action: () => {
                            keys['CABIN_TOLD_RODRICK_ABOUT_THE_PLAN'] = true;
                          },
                          goBackImmediately: true
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      requirements: () => {
        return keys['CABIN_IS_FIRST_TIME_TALKING_TO'] && keys['CABIN_TOLD_RODRICK_ABOUT_THE_PLAN'] && !keys['CABIN_RODRICK_IS_ANXIOUS'];
      },
      auto: true,
      chat: [
        {
          options: [
            { 
              text: 'Perguntar o motivo do anão de querer permanecer nesse mundo',
              chat: [
                {
                  text: '"Você disse que existem motivos para permanecer nesse mundo. Quais são?", você pergunta ao anão.'
                },
                {
                  text: 'O anão abre a boca, mas não fala nada.'
                },
                {
                  text: 'Logo em seguida, ele faz uma cara que você não tinha visto ainda. Uma cara de surpresa. E não é de surpresa boa.'
                },
                {
                  text: 'Ele parece confuso. Gesticula alguma coisa com a boca, mas parece não saber o que falar.'
                },
                {
                  speaker: 'Anão',
                  text: 'Ma...?',
                },
                {
                  speaker: 'Anão',
                  text: '...',
                },
                {
                  speaker: 'Anão',
                  text: 'Ma...',
                },
                {
                  text: 'Ele parece não saber como completar a frase que deseja falar.',
                },
                {
                  text: 'Você percebe que lágrimas estão escorrendo de seu rosto. Não existe mais máscara. Apenas dor.',
                },
                {
                  speaker: 'Anão',
                  text: 'Oh, céus! O que está acontecendo?',
                },
                {
                  speaker: 'Anão',
                  text: 'O nome... da minha esposa... Não consigo lembrá-lo! Ma... Ma...',
                },
                {
                  speaker: 'Anão',
                  text: 'Ma... Ma... Ma... Ma... Ma... Ma... Ma... Ma... Ma... Ma... Ma... Ma...',
                },
                {
                  text: 'O anão começa a demonstrar sintomas de ataque de pânico.',
                },
                {
                  text: 'Você sente a necessidade de ajudá-lo.',
                  action: () => {
                    keys['CABIN_RODRICK_IS_ANXIOUS'] = true;
                  },
                  goBackImmediately: true,
                },
              ]
            }
          ]
        }
      ]
    },
    {
      requirements: () => {
        return keys['CABIN_RODRICK_IS_ANXIOUS'] && (!keys['CABIN_GAVE_WATER_TO_RODRICK'] || !keys['CABIN_HOLD_RODRICK_HANDS'] || !keys['CABIN_SAID_WORDS_OF_CONFORT_TO_RODRICK']);
      },
      auto: true,
      chat: [
        {
          options: [
            {
              text: 'Pegar água para ele beber',
              alreadySeen: () => {
                return keys['CABIN_GAVE_WATER_TO_RODRICK'];
              },
              chat: [
                {
                  requirements: () => {
                    return keys['CABIN_GAVE_WATER_TO_RODRICK'];
                  },
                  text: 'Você já ofereceu água para o anão.',
                  goBackImmediately: true,
                },
                {
                  text: 'Você olha em volta da cabana e acha uma jarra de água e um copo.'
                },
                {
                  text: 'Rapidamente você enche o copo e oferece para o anão.'
                },
                {
                  text: 'Ele o pega com dificuldade. Por conta das mãos tremendo, boa parte da água é derrubada enquanto ele tenta beber.'
                },
                {
                  text: 'Ele parece ter se acalmado um pouco.',
                  action: () => {
                    keys['CABIN_GAVE_WATER_TO_RODRICK'] = true;
                  },
                  goBack: true
                },
              ]
            },
            {
              text: 'Falar algo para tentar acalmá-lo',
              alreadySeen: () => {
                return keys['CABIN_SAID_WORDS_OF_CONFORT_TO_RODRICK'];
              },
              chat: [
                {
                  requirements: () => {
                    return keys['CABIN_SAID_WORDS_OF_CONFORT_TO_RODRICK'];
                  },
                  text: 'Você já falou o que precisava.',
                  goBackImmediately: true,
                },
                {
                  text: "Você gentilmente segura o rosto do anão de forma que ele consiga ter você em sua visão."
                },
                {
                  text: '"Está tudo bem. Está tudo bem. Eu irei ajudá-lo a lembrar do nome de sua esposa.", você diz para tentar reconfortá-lo.'
                },
                {
                  speaker: 'Anão',
                  text: 'A maldição! Ela está me fazendo esquecer! O que farei?!'
                },
                {
                  text: '"Irei perguntar nas redondezas. Vou descobrir o nome da sua esposa para te ajudar. Prometo!", você diz.'
                },
                {
                  speaker: 'Anão',
                  text: 'Você... você promete? Irá mesmo me... ajudar?'
                },
                {
                  text: '"É claro! Claro que ajudarei. Pode confiar em mim."'
                },
                {
                  text: 'O anão olha para você com receio e tristeza. Mas você pode notar que ele se sente um pouco mais a vontade com a sua presença.'
                },
                {
                  text: 'Ele parece ter se acalmado um pouco.',
                  action: () => {
                    keys['CABIN_SAID_WORDS_OF_CONFORT_TO_RODRICK'] = true;
                  },
                  goBack: true
                },
              ]
            },
            {
              text: 'Segurar as mãos do anão',
              alreadySeen: () => {
                return keys['CABIN_HOLD_RODRICK_HANDS'];
              },
              chat: [
                {
                  requirements: () => {
                    return keys['CABIN_HOLD_RODRICK_HANDS'];
                  },
                  text: 'Você já segurou a mão dele.',
                  goBackImmediately: true,
                },
                {
                  text: 'Você pega as mãos do anão e as segura perto de si.',
                },
                {
                  text: '"Respire fundo", você aconselha.',
                },
                {
                  text: 'Ele hesita no começo, mas depois segue o seu conselho.'
                },
                {
                  text: 'O anão fecha os olhos e começa a respirar fundo.'
                },
                {
                  text: '...'
                },
                {
                  text: 'Ele respira fundo mais uma vez.'
                },
                {
                  text: '...'
                },
                {
                  text: 'E mais uma vez.'
                },
                {
                  text: '...'
                },
                {
                  text: 'Ele abre os olhos.'
                },
                {
                  text: 'Ele parece ter se acalmado um pouco.',
                  action: () => {
                    keys['CABIN_HOLD_RODRICK_HANDS'] = true;
                  },
                  goBack: true
                },
              ]
            }
          ]
        }
      ]
    },
    {
      requirements: () => {
        return keys['CABIN_RODRICK_IS_ANXIOUS'] && !keys['CABIN_RODRICK_ACCEPTED_TO_HELP'];
      },
      auto: true,
      chat: [
        {
          text: 'Ele parece ter recuperado a calma. Pelo menos o necessário para conversar.'
        },
        {
          text: 'Você senta em uma cadeira próxima a ele.'
        },
        {
          speaker: 'Anão',
          text: '...'
        },
        {
          speaker: 'Anão',
          text: 'Me desculpe...'
        },
        {
          speaker: 'Anão',
          text: 'Perdi o controle por um momento.'
        },
        {
          speaker: 'Anão',
          text: 'Obrigado por ter me ajudado.'
        },
        {
          speaker: 'Anão',
          text: '...'
        },
        {
          speaker: 'Anão',
          text: 'Agora que percebi... ainda não lhe disse o meu nome.'
        },
        {
          speaker: 'Anão',
          text: 'Pode me chamar de Rodrick.'
        },
        {
          text: 'Ouvir esse nome confirma as suas suspeitas. Ou pelo menos fazem com que as chances delas serem corretas se tornem muito altas.'
        },
        {
          text: '"É um prazer em lhe conhecer, Rodrick."'
        },
        {
          speaker: 'Rodrick',
          text: 'Eu te recebi com tanta hostilidade... e você retribui com afeto. Não sei onde esconder a minha cara.'
        },
        {
          text: 'O anão abaixa a cabeça envergonhado.'
        },
        {
          speaker: 'Rodrick',
          text: 'A verdade... é que eu, mais do que ninguém, quero dar um fim nessa maldição.'
        },
        {
          speaker: 'Rodrick',
          text: 'Minha vida não era perfeita, mas eu era feliz. Vivendo perto das montanhas, junto de minha esposa e filhos.'
        },
        {
          speaker: 'Rodrick',
          text: 'Sabe... meus filhos já se foram... levados pela maldição...'
        },
        {
          speaker: 'Rodrick',
          text: 'Minha esposa e eu entramos em desespero... sou fraco... mas ela se manteve forte pelo meu bem.'
        },
        {
          speaker: 'Rodrick',
          text: 'Provavelmente estava destruída por dentro, mas não deixou transparecer. Depois disso, passou a ajudar a Heroína o quanto pôde para tentar achar uma solução para todo esse problema.'
        },
        {
          speaker: 'Rodrick',
          text: 'Já eu, nada pude fazer. Não demorou muito para as minhas pernas irem embora, entende?'
        },
        {
          speaker: 'Rodrick',
          text: 'Tinha esperanças que elas encontrariam algo... mas conforme o tempo passava, menos esperança fui mantendo dentro de mim...'
        },
        {
          speaker: 'Rodrick',
          text: 'No fim eu só queria passar o resto dos meus dias com a minha esposa... mas ela nunca desistiu...'
        },
        {
          speaker: 'Rodrick',
          text: 'Ela partiu para encontrar a Heroína pouco tempo antes de você chegar.'
        },
        {
          speaker: 'Rodrick',
          text: 'Aliás, por acaso, você chegou a encontrá-la no caminho?'
        },
        {
          text: 'Essa pergunta foi como um soco no estômago. Você sabe bem o que aconteceu com a pobre anã.'
        },
        {
          text: 'Mas você não tem coragem de contar a verdade. Pelo menos, não agora. Rodrick acabou de se recompor de uma crise de pânico. Você não quer deixá-lo ansioso novamente.'
        },
        {
          text: '"Não, Rodrick", você mente. "Infelizmente não a vi. Devo ter vindo por um caminho diferente, já que não conheço nada por aqui."'
        },
        {
          speaker: 'Rodrick',
          text: 'Tudo bem... foi uma pergunta idiota...'
        },
        {
          speaker: 'Rodrick',
          text: 'Só espero que ela esteja bem...'
        },
        {
          text: 'Rodrick começa a olhar em volta da cabana.'
        },
        {
          text: 'É como se ele estivesse tentando relembrar de todos os momentos que já passou em cada canto daquele lugar.'
        },
        {
          text: 'Talvez esteja fazendo isso com medo de se esquecer do resto das memórias que criou ali.'
        },
        {
          speaker: 'Rodrick',
          text: 'Talvez... eu precise ser corajoso igual minha esposa...'
        },
        {
          speaker: 'Rodrick',
          text: 'Ela tentou tantas vezes me dar forças e esperança... mas não fui capaz de atender as suas expectativas...'
        },
        {
          speaker: 'Rodrick',
          text: 'Que belo marido eu sou...'
        },
        {
          speaker: 'Rodrick',
          text: 'Ela sacrificaria tudo para me ajudar... mas olhe para mim... nem consigo lembrar mais seu nome...'
        },
        {
          speaker: 'Rodrick',
          text: '...'
        },
        {
          text: 'Por um momento, você acha que ele terá outro ataque de pânico, mas desse vez ele consegue manter a compostura.'
        },
        {
          speaker: 'Rodrick',
          text: 'Gostaria de ajudá-la no que for possível, Isabelle. '
        },
        {
          speaker: 'Rodrick',
          text: 'Pelos meus filhos... pela minha esposa...'
        },
        {
          text: 'Ele parece ter se resolvido. Ele olha para você, e, pela primeira vez nesse dia, você pensa ter visto uma fagulha de esperança em seus olhos.'
        },
        {
          text: 'Infelizmente para você, essa fagulha se apaga rapidamente.'
        },
        {
          speaker: 'Rodrick',
          text: 'Mas se eu estiver correto... não sei se conseguirei te passar a minha Alma Primordial...'
        },
        {
          text: '"Por que diz isso, Rodrick?", você pergunta.'
        },
        {
          speaker: 'Rodrick',
          text: 'Como disse anteriormente, Almas Primordias estão fortemente sincronizadas com seus hospedeiros. Elas são a matéria mais pura que se pode encontrar nesse mundo.'
        },
        {
          speaker: 'Rodrick',
          text: 'E não só são puras, como também representam o que é mais puro para cada raça e hospedeiro...'
        },
        {
          speaker: 'Rodrick',
          text: 'Para que você consiga herdar minha Alma Primordial, nós dois precisamos entrar em contanto com o que é mais intímo meu...'
        },
        {
          speaker: 'Rodrick',
          text: 'Minha própria essência...'
        },
        {
          speaker: 'Rodrick',
          text: '...'
        },
        {
          text: 'Rodrick fica em silência por um tempo.'
        },
        {
          speaker: 'Rodrick',
          text: 'Não sei se você já conseguiu juntar as peças... mas atualmente o que é mais precioso para mim é minha esposa...'
        },
        {
          speaker: 'Rodrick',
          text: 'Como podemos nos conectar à minha essência, se nem seu nome lembro mais?'
        },
        {
          text: 'Rodrick olha para o teto, respira fundo, e depois olha para você novamente.'
        },
        {
          speaker: 'Rodrick',
          text: 'Me ajude a lembrar o nome dela mais uma vez... Faça isso... e a minha Alma Primordial é sua...'
        },
        {
          text: 'Chegar nessa conclusão não deve ter sido fácil para ele.'
        },
        {
          text: 'Oferecer a própria vida para salvar a vida da pessoa que mais ama.'
        },
        {
          requirements: () => {
            return keys['MOUNTAIN_GOT_PENDANT'];
          },
          text: 'Você aperta o pingente que está no seu bolso. Ele parece estar pesando muito mais do que antes.'
        },
        {
          text: 'Você se lembra novamente do que aconteceu na trilha, com a anã... Mas você ainda não tem coragem de contar a verdade.'
        },
        {
          text: 'Você afasta esse pensamento. Você prefere honrar a decisão de Rodrick.'
        },
        {
          text: '"Obrigada, Rodrick", você diz. "Eu vou ir atrás da sua esposa, ela não deve estar tão longe. Irei perguntar ao redor também."'
        },
        {
          text: '"Mais uma vez, obrigada por ter me ouvido. Obrigada por não desistir. Tenho certeza que iremos conseguir quebrar essa maldição."'
        },
        {
          text: 'Rodrick assente com a cabeça.'
        },
        {
          text: 'Seus olhos parecem mais pesados do que a vez quando você o viu pela primeira vez. Entretanto, desta vez, existe determinação dentro deles.'
        },
        {
          speaker: 'Rodrick',
          text: 'Vá, Isabelle. Volte aqui caso precise de qualquer coisa.'
        },
        {
          text: 'Você levanta da cadeira.',
        },
        {
          text: '"Ok, eu irei!"',
          action: () => {
            keys['CABIN_RODRICK_ACCEPTED_TO_HELP'] = true;
          },
          goBack: true,
        }
      ]
    },
    {
      auto: true,
      chat: [
        {
          audio: '',
          cleanText: true,
          options: [
            {
              text: 'Entregar o pingente para Rodrick',
              alreadySeen: () => {
                return keys['CABIN_TRIED_TO_GIVE_PENDANT_TO_RODRICK'];
              },
              chat: [
                {
                  text: 'Você aperta o pingente que se encontra no seu bolso, mas você não tem coragem de entregá-lo.',
                },
                {
                  text: 'Entregá-lo levantaria perguntas. Perguntas que você não está pronta para responder.',
                  action: () => {
                    keys['CABIN_TRIED_TO_GIVE_PENDANT_TO_RODRICK'] = true;
                  },
                  goBack: true,
                }
              ]
            },
            {
              text: 'Perguntar o nome da Heroína',
              alreadySeen: () => {
                return keys['CABIN_ASKED_THE_HEROIN_NAME'];
              },
              chat: [
                {
                  text: '"Você por acaso se lembra do nome da Heroína? Ela não se lembra mais dele."',
                },    
                {
                  speaker: 'Rodrick',
                  text: 'Nem o nome da minha esposa eu lembro, como eu vou lembrar do nome daquela heroína?'
                },
                {
                  text: 'Você se arrepende de ter perguntado.',
                  action: () => {
                    keys['CABIN_ASKED_THE_HEROIN_NAME'] = true;
                  },
                  goBack: true,
                }
              ]
            },
            {
              text: 'Sair da cabana',
              chat: [
                {
                  text: 'Você se despede de Rodrick e vai embora.',
                },
                {
                  speaker: 'Rodrick',
                  text: 'Não demore muito.',
                  moveToScene: 'montanha'
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  'floresta': [
    {
      requirements: () => {
        return !keys['FOREST_INTRO_CONCLUDED'];
      },
      auto: true,
      chat: [
        {
          text: 'Depois de um tempo, você chega na floresta.',
          audio: 'to-dream.mp3'
        },
        {
          text: 'Por estar de noite, você mal consegue se orientar entre as árvores.'
        },
        {
          text: 'Você já perdeu as contas de quantas vezes bateu a cabeça em galhos de árvores ou tropeçou em suas raízes.',
        },
        {
          text: 'Como tudo ao seu redor está sumindo, você fica surpresa quando encontra alguns animais ao longo do caminho.'
        },
        {
          text: 'São animais que você nunca viu em sua vida, mas eles não se parecem tão diferentes dos animais que você consegue encontrar em seu mundo.'
        },
        {
          text: 'Seu coração se entristece quando você avista dois animais que parecem com esquilos. Um deles parece agitado enquanto o outro infelizmente cede à maldição e desaparece para sempre.'
        },
        {
          text: 'Você tenta se aproximar do esquilo restante, mas ele foge e some na floresta.'
        },
        {
          text: 'Realmente, nada parece estar a salvo da maldição...'
        },
        {
          text: 'Você leva as suas mãos ao peito, para tentar se acalmar, mas o toque lhe parece estranho.'
        },
        {
          text: 'Ao olhar para suas mãos, você percebe que elas começaram a oscilar. Em um nível bem menor que o resto, mas ainda assim oscilando.'
        },
        {
          text: 'Sua ansiedade aumenta em uma velocidade alarmante. Você dá uns passos para trás e mais uma vez tropeça nas raízes das árvores e cai ao chão.'
        },
        {
          text: 'Você quer que tudo isso acabe. Que a maldição suma. Um café bem feito seria perfeito agora.'
        },
        {
          text: 'Você para um tempo para refletir no que acabou de pensar e então começa a dar risada sozinha. Pensar em café nessa situação?'
        },
        {
          text: 'Ainda caída no chão, você admira as copas das árvores acima de você. Ver tudo sumindo é triste, mas não deixa de ser impressionante.'
        },
        {
          text: 'Como isso é possível? É um fenômeno físico? Mágico? Seria bom ter uma explicação.'
        },
        {
          text: 'Mas não há tempo para isso.'
        },
        {
          text: 'Você levanta, bate as mãos nas suas roupas para tirar a terra e respira fundo.'
        },
        {
          text: 'O objetivo agora é encontrar algum elfo para te ajudar na missão.'
        },
        {
          text: 'Você começa a adentrar novamente na floresta.'
        },
        {
          text: 'Você anda... anda... e anda...'
        },
        {
          text: 'Tudo parece a mesma coisa. Na verdade, você imagina já ter visto a mesma árvore 3 vezes.'
        },
        {
          text: 'Você está perdida.'
        },
        {
          text: 'Como último recurso, você grita:'
        },
        {
          text: '"Alôôôôô! Tem alguém aí? Algum elfo? Eu preciso de ajuda!"'
        },
        {
          text: 'Nenhuma resposta.'
        },
        {
          text: '"Alôôôôôôôôôôôô?"'
        },
        {
          text: 'Nenhuma resposta.'
        },
        {
          text: 'A situação não parece boa.'
        },
        {
          text: '!?',
          audio: 'crow.mp3',
          audioAsync: true,
          wave: true,
        },
        {
          text: 'Você escuta o som parecido de um corvo, porém não consegue avistar nenhum por perto.'
        },
        {
          text: '...',
          audio: 'crow.mp3',
          audioAsync: true,
          wave: true,
        },
        {
          text: 'Você vai em direção ao som, mas não encontra nada. É como se os sons estivessem se materializando do nada.'
        },
        {
          requirements: () => {
            return keys['LAKE_RECEIVED_SMALL_TIP_ABOUT_FOREST'];
          },
          text: 'Talvez isso tenha relação com a pista que Nerida te deu. Seria uma boa ideia voltar para falar com ela.'
        },
        {
          requirements: () => {
            return !keys['LAKE_RECEIVED_SMALL_TIP_ABOUT_FOREST'];
          },
          text: 'Sem entender o que está acontecendo, você analisa a situação.'
        },
        {
          text: 'Nesse momento existem três direções para seguir: esquerda, frente e direita. E, é claro, o caminho para voltar o campo.'
        },
        {
          text: '"Eu preciso encontrar o caminho certo até os elfos", você pensa.',
          action: () => {
            keys['FOREST_INTRO_CONCLUDED'] = true;
          },
          goBackImmediately: true
        },
      ]
    },
    {
      auto: true,
      audio: 'to-dream.mp3',
      chat: [
        {
          requirements: () => {
            return keys['FOREST_LEFT_ONCE'] && !currentForestSequence.length;
          },
          text: 'Você chega na floresta.'
        },
        {
          requirements: () => {
            return keys['FOREST_DID_NOT_SOLVE_MAZE'];
          },
          text: 'Você repara que voltou para o início da floresta.'
        },
        {
          requirements: () => {
            return keys['FOREST_DID_NOT_SOLVE_MAZE'];
          },
          text: 'Você deve pegado algum caminho errado...'
        },
        {
          requirements: () => {
            return !keys['FOREST_SOLVED_MAZE'] && (keys['FOREST_LEFT_ONCE'] || currentForestSequence.length);
          },
          text: 'Você presta atenção aos sons à sua volta.',
          action: () => {
            if (!forestSequence.length || forestSequence.length === currentForestSequence.length) {
              keys['FOREST_DID_NOT_SOLVE_MAZE'] = false;
              forestSequence = [];
              colorsSequence = [];
              currentForestSequence = [];

              let animals = ['crow', 'wolf', 'owl'];
              let colors = ['yellow', 'red', 'green'];
              
              for (let index = 0; index < 10; index++) {
                let animalIndex = Math.floor(Math.random() * (3) + 1) - 1;
                const colorIndex = Math.floor(Math.random() * (3) + 1) - 1;

                // Só para garantir um pouco mais de variedade
                if (forestSequence.length > 2 && forestSequence[forestSequence.length - 2] === animals[animalIndex] && forestSequence[forestSequence.length - 1] === animals[animalIndex]) {
                  animalIndex = Math.floor(Math.random() * (3) + 1) - 1;
                }

                forestSequence.push(animals[animalIndex]);
                colorsSequence.push(colors[colorIndex]);
              }
            }

            handleChatEvents({
              audio: forestSequence[currentForestSequence.length] + '.mp3',
              audioAsync: true,
              wave: true,
              color: colorsSequence[currentForestSequence.length],
            })
          }
        },
        {
          requirements: () => {
            return !keys['FOREST_SOLVED_MAZE'];
          },  
          options: [
            {
              text: 'Virar à esquerda',
              action: () => {
                currentForestSequence.push('left');
                validateForest();
              },
              chat: [
                {
                  text: 'Você vira à esquerda.',
                  moveToScene: 'floresta',
                }
              ]
            },
            {
              text: 'Seguir em frente',
              action: () => {
                currentForestSequence.push('straight');
                validateForest();
              },
              chat: [
                {
                  text: 'Você segue em frente.',
                  moveToScene: 'floresta',
                }
              ]
            },
            {
              text: 'Virar à direita',
              action: () => {
                currentForestSequence.push('right');
                validateForest();
              },
              chat: [
                {
                  text: 'Você vira à direita.',
                  moveToScene: 'floresta',
                }
              ]
            },
            {
              text: 'Voltar para o campo',
              chat: [
                {
                  text: 'Você se dirige para o campo.',
                  goBack: true,
                  moveToScene: 'prado'
                },
              ]
            }
          ]
        },
        {
          requirements: () => {
            return keys['FOREST_SOLVED_MAZE'];
          },
          text: 'Você chegou em um lugar que não tinha visto antes.'
        },
        {
          requirements: () => {
            return keys['FOREST_SOLVED_MAZE'];
          },
          text: 'Os caminhos começam a convergir em apenas um só.'
        },
        {
          requirements: () => {
            return keys['FOREST_SOLVED_MAZE'];
          },
          text: 'Você caminha até chegar no que parece no fim da floresta...',
          moveToScene: 'arvore'
        }
      ]
    }
  ],
  'lago': [
    {
      requirements: () => {
        return !keys['LAKE_NERIDA_ACCEPTED_TO_HELP'];
      },
      auto: true,
      audio: 'countdown.mp3',
      chat: [
        {
          text: 'Você chega ao lago.',
          audio: 'countdown.mp3'
        },
        {
          text: 'Parece ser um lugar calmo, mesmo de noite.',
        },
        {
          text: 'As árvores em volta dão um toque especial ao cenário.',
        },
        {
          text: 'Seria um bom lugar para fazer um piquenique... Se ao menos ele não estivesse prestes a desaparecer.',
        },
        {
          text: 'Você chega perto da água e percebe que ela também é volátil. Você consegue juntar um pouco de água ao formar uma concha com a mão, mas ao despejar de volta no lago, parte se dissipa no caminho.',
        },
        {
          text: 'O lago está morrendo. Igual tudo ao seu redor.',
        },
        {
          text: 'De acordo com a heroína, ela parece ter escutado o som de alguma sereia por aqui.',
        },
        {
          text: 'Você olha em volta a procura desse ser mítico, mas não encontra nada.',
        },
        {
          text: 'Por estar de noite, você não consegue enxergar se existe algo dentro do lago.',
        },
        {
          text: '"Alguém consegue me ouvir!?", você grita.',
        },
        {
          text: '"Alôô?"',
        },
        {
          text: 'A princípio nada acontece. Porém, após alguns segundos, você percebe algumas bolhas se formando na superfície do lago.',
        },
        {
          text: 'As bolhas começam a se formar cada vez mais perto de você, o que te faz dar alguns passos para trás.',
        },
        {
          text: 'Logo em seguida, você percebe uma cabeça de uma mulher saindo da água. Ela possui os cabelos azuis e um rosto muito bonito.',
        },
        {
          text: 'A mulher encara você por alguns segundos, como se estivesse analisando a situação.',
        },
        {
          text: 'E então, ela da um breve sorriso.',
        },
        {
          speaker: 'Sereia',
          text: 'Não imaginei que encontraria uma humana por aqui. Pelo menos, não uma humana além da heroína.',
        },
        {
          text: 'Antes que você pudesse responder, a mulher começa a nadar para fora do lago.',
        },
        {
          text: 'Ela se senta em algumas pedras que se encontram entre a terra e o lago.',
        },
        {
          text: 'Assim que ela puxa o corpo para fora do lago, você percebe que ela não possui pernas, mas sim, uma encantadora cauda de peixe.',
        },
        {
          text: 'Você sabia que estava prestes a se encontrar com uma sereia, mas a visão daquilo acontecendo te deixou surpresa mesmo assim.',
        },
        {
          text: 'A sereia parece estar se divertindo com essa situação.',
        },
        {
          text: 'Porém, olhando mais atentamente, seu semblante parece um misto de divertimento e tristeza. O sorriso, apesar de parecer sincero, não consegue esconder a dor que seus olhos transmitem.',
        },
        {
          speaker: 'Sereia',
          text: 'Meu nome é Nerida. É um prazer te conhecer, minha criança.',
        },
        {
          options: [
            {
              text: 'O prazer é meu. Meu nome é Isabelle.',
              chat: [
                {
                  speaker: 'Nerida',
                  text: 'Que lindo nome. Assim como seus cabelos, se me permite dizer.'
                },
                {
                  text: 'Você fica sem jeito com a resposta que acabou de receber.'
                },
                {
                  speaker: 'Nerida',
                  text: 'Agora, acredito que sua presença aqui nesse mundo deva ter algum motivo... e se isso for verdade, temo que não há muito tempo sobrando para conversar.'
                },
                {
                  speaker: 'Nerida',
                  text: 'Então, diga-me, minha criança. Por que veio para esse lago.'
                },
                {
                  options: [
                    {
                      text: 'Explicar sobre o altar e as Almas Primordiais',
                      chat: [
                        {
                          text: '"Estou na busca de três Almais Primordiais para conseguir abrir um altar ao norte que a heroína encontrou."'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Então, aquela garota conseguiu achar uma pista para salvar esse mundo...'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Muitos duvidaram dela, mas eu sempre tive fé. Sempre vi algo de diferente nela.'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Agora, três Almas Primordiais, certo? Não será tarefa fácil, devo lhe avisar, Isabelle.'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Como pode ver, esse lago está em um completo silêncio...'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Minhas amigas sereias já se foram, veja bem... Todas, infelizmente, sucumbiram a maldição...'
                        },
                        {
                          text: 'Enquanto narra sua história, Nerida olha fixamente para o lago, como se ainda tivesse esperanças de que alguma sereia sairia daquela água.'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Talassa foi a primeira. A mais mandona de todas. Ela tinha o costume de dar broncas em todas as outras sereias. No dia que se foi, nesse lago reinou um silêncio estranho...'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Depois de um tempo, minha melhor amiga, Yara, se foi também. Como sinto saudade de conversar com ela... Ela sempre me entendeu, como ninguém mais conseguia...'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Por último, Dione. A mais brincalhona e arteira. Parecia ser outra sereia em seus últimos momentos, devastada pelas perdas...'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Agora... só resta a mim nesse lago melancólico...'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Até mesmo a minha voz eu perdi... Não essa que você está escutando agora, mas a minha voz de sereia... Essa maldição terrível a tirou de mim...'
                        },
                        {
                          text: 'Nerida respira fundo e, então, olha para você novamente.'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Já perdi tudo que tinha para perder, minha criança.'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Tinha até perdido a minha fé que algo poderia nos salvar... Mas vendo você aqui...'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Irei lhe ajudar, Isabelle. Por sorte, sou uma representante das sereias e possuo uma Alma Primordial.'
                        },
                        {
                          text: 'Você consegue relaxar um pouco ao ouvir isso. Tudo estaria acabado caso ela não fosse uma portadora de uma Alma Primordial.'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'A heroína deve ter te falado o básico de como esse processo funciona.'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Para que eu consiga te transferir minha Alma Primordial, você precisa estar em sintonia comigo e com o que é mais puro para as sereias.'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Não sei como é no seu mundo, mas aqui nós somos um povo que gosta de ajudar o próximo, mais do que qualquer coisa.'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Você vai precisar das Almas Primordiais dos anões e dos elfos também, correto? Então você provavelmente vai precisar ajudá-los de certa forma, para conseguir criar uma sintonia com eles.'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Acho que isso será o bastante para começar. Volte aqui assim que estiver com posse das outras duas almas, e então começaremos o processo para você conseguir a minha também.'
                        },
                        {
                          text: 'Ela parece mais determinada. Pensando em vários planos, mesmo perto do fim...'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Isabelle, eu vou depositar a minha fé em você. Gostaria de te acompanhar em sua jornada, mas já não tenho forças para ficar longe desse lago.'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Venha até mim caso precise de ajuda. Darei o meu melhor para te auxilar nessa missão.'
                        },
                        {
                          text: 'A conversa com a sereia foi melhor do que o esperado.'
                        },
                        {
                          text: 'Você fica contente de ter ajudado ela a recuperar as esperanças, mas também fica triste ao perceber que o corpo da sereia está oscilando.'
                        },
                        {
                          text: 'Não há muito tempo para perder. Existem muitas coisas em jogo.'
                        },
                        {
                          text: '"Muito obrigada pela ajuda, Nerida! Prometo que darei o meu melhor", disse você.'
                        },
                        {
                          text: 'Nerida abre um sorriso, dessa vez um mais reconfortante.'
                        },
                        {
                          speaker: 'Nerida',
                          text: 'Eu que agradeço, minha criança. Que o canto das sereias guiem você nessa jornada.'
                        },
                        {
                          text: 'Nerida volta a encarar o lago.',
                          action: () => {
                            keys['LAKE_NERIDA_ACCEPTED_TO_HELP'] = true;
                          },
                          goBack: true
                        },
                      ]
                    }, 
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      auto: true,
      audio: 'countdown.mp3',
      chat: [
        {
          audio: 'countdown.mp3',
          options: [
            {
              alreadySeen: () => {
                return keys['LAKE_NERIDA_ASKED_THE_HEROIN_NAME'];
              },
              text: 'Perguntar nome da heroína',
              chat: [
                {
                  speaker: 'Nerida',
                  text: 'O nome da heroína? Se me lembro bem era...',
                },
                {
                  speaker: 'Nerida',
                  text: 'Hmm... Acho que começava com G? Ou H? Talvez M...',
                },
                {
                  speaker: 'Nerida',
                  text: 'Sinto que está na ponta da língua...',
                },
                {
                  speaker: 'Nerida',
                  text: '...',
                },
                {
                  speaker: 'Nerida',
                  text: 'Desculpe, criança. Não consigo mais lembrar o nome dela... Mas se eu lembrar, te avisarei.',
                  action: () => {
                    keys['LAKE_NERIDA_ASKED_THE_HEROIN_NAME'] = true;
                  },
                  goBack: true,
                }
              ]
            },
            {
              requirements: () => {
                return !keys['CABIN_RODRICK_ACCEPTED_TO_HELP'];
              },
              text: 'Perguntar sobre os anões',
              alreadySeen: () => {
                return keys['LAKE_NERIDA_ASKED_ABOUT_DWARVES'];
              },
              chat: [
                {
                  speaker: 'Nerida',
                  text: 'Os anões possuem a fama de serem bem teimosos. Porém, não se deixe enganar, eles costumam valorizar aquilo que amam como mais ninguém.'
                },
                {
                  speaker: 'Nerida',
                  text: 'Mostre sua determinação de uma forma respeitosa, e eles irão te ajudar.'
                },
                {
                  speaker: 'Nerida',
                  text: 'Caso esteja com problemas para encontrá-los, basta voltar para o campo e siga o caminho para o oeste, perto das montanhas.',
                  action: () => {
                    keys['LAKE_NERIDA_ASKED_ABOUT_DWARVES'] = true;
                  },
                  goBack: true,
                },
              ]
            },
            {
              requirements: () => {
                return keys['CABIN_RODRICK_ACCEPTED_TO_HELP'];
              },
              alreadySeen: () => {
                return keys['LAKE_NERIDA_ASKED_ABOUT_FEMALE_DWARF'];
              },
              text: 'Perguntar nome da anã que desapareceu',
              chat: [
                {
                  text: 'Você explica sobre seu encontro com Rodrick e sobre a anã que sucumbiu pela maldição.'
                },

                {
                  speaker: 'Nerida',
                  text: 'Oh, minha criança, sinto muito que você teve que presenciar tal cena. E Rodrick... lembro-me dele...'
                },
                {
                  speaker: 'Nerida',
                  text: 'Cabeça-dura... teimoso... mas sempre ajudou nos ajudou com suas habilidades de forja...'
                },
                {
                  text: 'A feição de Nerida se torna triste ao lembrar de Rodrick.'
                },
                {
                  requirements: () => {
                    return keys['MOUNTAIN_GOT_PENDANT'];
                  },
                  text: '"Ah, acabo de me lembrar!", você diz, enquanto tira o pingente do bolso. "Aqui está uma foto da esposa de Rodrick. Você por acaso se lembra do nome dela?"'
                },
                {
                  requirements: () => {
                    return !keys['MOUNTAIN_GOT_PENDANT'];
                  },
                  text: '"Nerida, você por acaso se lembra do nome da esposa de Rodrick?", você pergunta.'
                },
                {
                  text: 'Nerida pausa por um momento, enquanto mantem os olhos fechados e a mão no queixo.'
                },
                {
                  speaker: 'Nerida',
                  text: '...'
                },
                {
                  speaker: 'Nerida',
                  text: 'Peço perdões, Isabelle. Infelizmente não consigo me lembrar do nome dela...'
                },
                {
                  text: 'Suas esperanças começam a abaixar.'
                },
                {
                  speaker: 'Nerida',
                  text: 'Mas me recordo de outra coisa... acho que me lembro de tê-la visto junto de alguns elfos...'
                },
                {
                  speaker: 'Nerida',
                  text: 'Talvez algum elfo consiga te ajudar melhor nessa busca, minha criança.',
                },
                {
                  speaker: 'Nerida',
                  text: 'Pelo menos... assim espero...',
                  action: () => {
                    keys['LAKE_NERIDA_ASKED_ABOUT_FEMALE_DWARF'] = true;
                  },
                  goBack: true
                }
              ]
            },
            {
              requirements: () => {
                return !keys['FOREST_INTRO_CONCLUDED'];
              },
              text: 'Perguntar sobre os elfos',
              alreadySeen: () => {
                return keys['LAKE_RECEIVED_SMALL_TIP_ABOUT_FOREST'];
              },
              chat: [
                {
                  speaker: 'Nerida',
                  text: 'Os elfos vivem muito mais que as outras espécies, chegando a ultrapassar até mil anos de vida.'
                },
                {
                  speaker: 'Nerida',
                  text: 'Eles vivem alojados em casas construídas em cima de árvores. Acredito que exista uma comunidade ao sul do campo que você veio.'
                },
                {
                  speaker: 'Nerida',
                  text: 'Mas mantenha em mente que eles não são tão calorosos com desconhecidos. As florestas em volta dessas comunidades geralmente possuem magias para impedir que estranhos se aproximem.'
                },
                {
                  speaker: 'Nerida',
                  text: 'Geralmente, para atravessar essas florestas, você precisa...'
                },
                {
                  speaker: 'Nerida',
                  text: 'Hmm... não consigo lembrar direito... recentemente a maldição tem afetado a minha memória...'
                },
                {
                  speaker: 'Nerida',
                  text: 'Mas lembro que existe... um padrão... sim, um padrão...'
                },
                {
                  speaker: 'Nerida',
                  text: 'Droga, não consigo lembrar... Mas se você conseguir qualquer pista, traga para mim.',
                },
                {
                  speaker: 'Nerida',
                  text: 'Talvez assim eu consiga lembrar do resto.',
                  action: () => {
                    keys['LAKE_RECEIVED_SMALL_TIP_ABOUT_FOREST'] = true;
                  },
                  goBack: true
                },
              ]
            },
            {
              requirements: () => {
                return keys['FOREST_INTRO_CONCLUDED']
              },
              text: 'Contar sobre o que descobriu na floresta élfica',
              alreadySeen: () => {
                return keys['LAKE_RECEIVED_TIP_ABOUT_FOREST'];
              },
              chat: [
                {
                  text: 'Você conta para Nerida sobre o que presenciou na floresta.'
                },
                {
                  speaker: 'Nerida',
                  text: 'Ah, sim! Os sons dos animais e as cores que se manifestam juntos. Mas não são de verdade, não se engane. São criados através de magias élficas.'
                },
                {
                  speaker: 'Nerida',
                  text: 'Um povo criativo, não acha?'
                },
                {
                  text: 'Nerida parece se animar ao lembrar dos elfos.'
                },
                {
                  speaker: 'Nerida',
                  text: 'Cada som de animal dá uma dica do caminho que você deve seguir. As cores também são importantes, então preste atenção neles também!'
                },
                {
                  speaker: 'Nerida',
                  text: 'E cada tentativa de adentrar a floresta é diferente do anterior, então nem tente passar pela sorte.'
                },
                {
                  speaker: 'Nerida',
                  text: 'É quase como se a floresta estivesse viva! Incrível, não é mesmo?'
                },
                {
                  speaker: 'Nerida',
                  text: 'Agora vem a parte complicada... Hmm... acho que tinha uma cantiga...'
                },
                {
                  speaker: 'Nerida',
                  text: 'Sim! Tinha uma cantiga para encontrar o caminho. Ela é assim:'
                },
                {
                  text: 'Nerida se arruma na rocha e suavemente balança os braços. Luzes saem de suas mãos, o que parece criar alguns instrumentos musicais em sua volta, que permanecem flutuando no ar.'
                },
                {
                  text: 'Ela então coloca uma mão no peito e estica o outro braço para frente, como se estivesse em uma ópera e prestes a cantar.'
                },
                {
                  text: 'Ver ela se divertindo aquece o seu coração.'
                },
                {
                  speaker: 'Nerida',
                  text: '🎵 Oh, pequeno elfo, perdido na floreta você está? 🎵',
                  audio: 'butt.mp3'
                },
                {
                  speaker: 'Nerida',
                  text: '🎵 Então escute bem, pois o Djar, Tulin e o Gutenthap irão te ajudar! 🎵'
                },
                {
                  speaker: 'Nerida',
                  text: '🎵 Os Djars, muito coordenados, nos caminhos da floresta vão se adentrar, 🎵'
                },
                {
                  speaker: 'Nerida',
                  text: '🎵 Esquerda, direita e depois reto, em sequência, hão de se aventurar! 🎵'
                },
                {
                  speaker: 'Nerida',
                  text: '🎵 Os Tulins, que medrosos, fazem tudo para se esconder, 🎵'
                },
                {
                  speaker: 'Nerida',
                  text: '🎵 Olham para onde o último animal entrou, e seguindo o relógio hão de obedecer! 🎵'
                },
                {
                  speaker: 'Nerida',
                  text: '🎵 Os Gutenthap, que abusados, gritam sem temor, 🎵'
                },
                {
                  speaker: 'Nerida',
                  text: '🎵 Verde, amarelo e vermelho, pintam regradamente em um transferidor 🎵'
                },
                {
                  text: 'Nerida parece orgulhosa.',
                  audio: 'countdown.mp3',
                },
                {
                  text: 'É emocionante ver como Nerina canta, mesmo no meio de tanta destruição... mesmo depois de perder os entes mais queridos...'
                },
                {
                  speaker: 'Nerina',
                  text: 'E então? Gostou? Juro que dei o meu melhor!'
                },
                {
                  options: [
                    {
                      text: 'Elogiar o canto',
                      chat: [
                        {
                          text: '"Foi maravilhoso!", você diz.'
                        },
                        {
                          text: '"Mas o que são Djar, Tulin e Gutenhap?", você pergunta.'
                        },
                        {
                          text: 'A cara que Nerina faz é impagável.'
                        },
                        {
                          speaker: 'Nerina',
                          text: 'Ora, não faço ideia! Esses são os nomes que os elfos deram para os animais, agora não me pergunte o motivo.'
                        },
                        {
                          speaker: 'Nerina',
                          text: 'Mas lembro de mais algumas informações que podem te ajudar.'
                        },
                        {
                          speaker: 'Nerina',
                          text: 'O criador da cantiga não conseguiu colocar todas as informações necessárias dentro dela, então elas ficaram de fora.'
                        },
                        {
                          speaker: 'Nerina',
                          text: 'Os Tulin seguirão o caminho das 12 horas, caso sejam os primeiros a entrar na floresta.'
                        },
                        {
                          speaker: 'Nerina',
                          text: 'E os Djar só se importam com eles mesmo, são narcisistas.'
                        },
                        {
                          text: '"Entendo. Bem, acho que tenho que dar um jeito de atravessar a floresta com as informações que temos.", você diz.'
                        },
                        {
                          text: '"Muito obrigada, Nerina. Aliás, você canta muito bem!", você complementa.'
                        },
                        {
                          text: 'O rosto de Nerina fica vermelho.'
                        },
                        {
                          speaker: 'Nerina',
                          text: 'Assim eu fico sem palavras, minha querida.'
                        },
                        {
                          speaker: 'Nerina',
                          text: 'Agradeço o elogio. E espero poder cantar mais vezes para você, criança, mas o tempo é curto. Vá e vença a floresta!'
                        },
                        {
                          text: 'Nerina volta a atenção para o lago.',
                          goBack: true,
                          action: () => {
                            keys['LAKE_RECEIVED_TIP_ABOUT_FOREST'] = true;
                          }
                        },
                      ]
                    }
                  ]
                }
              ]
            },
            {
              text: 'Voltar para o campo',
              chat: [
                {
                  text: 'Você se dirige para o campo.',
                  goBack: true,
                  moveToScene: 'prado'
                },
              ]
            }
          ]
        }
      ]
    }
  ],
  'arvore': [
    {
      requirements: () => {
        return !keys['TREE_FIRST_TALK_CONCLUDED'];
      },
      auto: true,
      audio: '',
      chat: [
        {
          text: 'Você chega em um acampamento élfico.'
        },
        {
          text: 'A árvore na sua frente é enorme. E, em cima dela, existe uma casa tão grande quanto.'
        },
        {
          text: 'É como se fosse uma cena tirada de uma história de fantasia.'
        },
        {
          text: 'Você se aproxima da árvore e encontra uma escada levando para o que parece ser a porta da casa.'
        },
        {
          text: 'Ao chegar na frente da porta, você coloca o ouvido contra a porta, para ver se escuta algum barulho.'
        },
        {
          text: 'Porém, você não escuta nada.'
        },
        {
          text: 'Você bate na porta.'
        },
        {
          text: 'Nada acontece.'
        },
        {
          text: 'Você bate na porta novamente.'
        },
        {
          text: 'Você consegue escutar o barulho de coisas caindo de dentro da casa. Panelas, talvez.'
        },
        {
          text: 'E então um barulho bem mais alto, como se algo pesado tivesse caído.'
        },
        {
          text: 'O que será que está acontecendo lá dentro?'
        },
        {
          text: 'E então a porta se abre, revelando o que parece ser uma elfa.'
        },
        {
          text: 'Ela possui as famosa orelhas pontudas e suas vestes são leves e bem coloridas.'
        },
        {
          text: 'Você não sabe reconhecer a idade de um elfo só através da aparência, mas se ela fosse uma humana, você chutaria que ela tem uns 50 anos ou mais.'
        },
        {
          text: 'Por conta disso, você tenta agir de maneira formal.'
        },
        {
          text: '"Boa noite, meu nome é...", você começa a dizer.'
        },
        {
          speaker: 'Elfa',
          text: 'Oh, pelos deuses! Uma humana! E que linda você é!'
        },
        {
          text: 'A elfa começa a dar pulos de alegria. Não o suficiente, ela também se joga para os seus braços, em uma espécie de abraço.'
        },
        {
          speaker: 'Elfa',
          text: 'Hahahaha! Você não faz ideia de como eu esperei alguém aparecer! Estava muito entediante ficar aqui sozinha!'
        },
        {
          speaker: 'Elfa',
          text: 'Venha! Vamos entrar! Tenho vários jogos aqui dentro!'
        },
        {
          text: 'A elfa pega a sua mão e te conduz para dentro da casa.'
        },
        {
          text: 'Você ainda não está entendendo o que está acontecendo, então você só aceita ser levada.'
        },
        {
          text: 'O interior da casa está uma bagunça. O chão está coberto de livros, utensílios domésticos e brinquedos.'
        },
        {
          text: 'Você pisa em um objeto desconhecido e torce para não ter quebrado. Mas a elfa parece não ter se importado.'
        },
        {
          speaker: 'Elfa',
          text: 'Então, iremos brincar do que primeiro? Corrida pelos galhos das árvores? Invocação de fadas? Gato mia?'
        },
        {
          text: '"Ah, meu cu! Gatos nesse mundo se chamam \'gatos\', então? Por que não me surpreendo de não terem usado gatos nos enigmas da floresta?", você diz indignada.'
        },
        {
          text: 'A elfa não responde. Ela parece estar muito ocupada procurando algo no meio da bagunça.'
        },
        {
          text: '"E por qual motivo vocês acharam que \'Gutenthap\' seria um nome bom para um animal? Por que não apenas \'corvo\'?", você grita histérica.'
        },
        {
          speaker: 'Elfa',
          text: 'Você é engraçada! Hahahaha'
        },
        {
          speaker: 'Elfa',
          text: 'Aliás, qual é seu nome?'
        },
        {
          text: '"Isabelle", você diz, cansada.'
        },
        {
          speaker: 'Elfa',
          text: 'Meu Deus, que nome horrível! Hahahaha!'
        },
        {
          speaker: 'Elfa',
          text: 'O meu nome é Sharia! Sharia Galadonethil Sylvaranthil Thaliondir Ithilnaur Quel\'dorei Elanessë.'
        },
        {
          speaker: 'Sharia',
          text: 'Espero que tenha anotado, talvez seja importante no futuro!'
        },
        {
          speaker: 'Elfa',
          text: 'Ou não! Hahahaha!'
        },
        {
          options: [
            {
              text: 'Explicar sobre o altar e as Almas Primordiais',
              chat: [
                {
                  text: 'Você da a entender que irá falar algo, mas Sharia te interrompe.',
                  action: () => {
                    keys['TREE_FIRST_TALK_CONCLUDED'] = true;
                  }
                }
              ]
            },
            {
              text: '"Escuta aqui, sua..."',
              chat: [
                {
                  text: 'Você da a entender que irá falar algo, mas Sharia te interrompe.',
                  action: () => {
                    keys['TREE_FIRST_TALK_CONCLUDED'] = true;
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      requirements: () => {
        return keys['TREE_FIRST_TALK_CONCLUDED'] && !keys['TREE_IS_LOOKING_FOR_SHARIA'];
      },
      auto: true,
      audio: '',
      chat: [
        {
          speaker: 'Sharia',
          text: 'Já sei! Vamos brincar de esconde-esconde!'
        },
        {
          text: '"Sharia, na verdade, eu preciso da sua ajuda..."'
        },
        {
          speaker: 'Sharia',
          text: 'Ajuda? Hmmm.. pensei que você tinha vindo para brincar...'
        },
        {
          text: '"Não, infelizmente não tenho tempo para isso. O mundo está acabando e eu preciso da sua ajuda para salvar a todos."'
        },
        {
          text: 'A elfa fica com uma cara confusa. Mesmo estando no meio de tantos objetos voláteis, ela parece não entender a real gravidade da situação.'
        },
        {
          speaker: 'Sharia',
          text: 'Salvar... o mundo?'
        },
        {
          speaker: 'Sharia',
          text: '...'
        },
        {
          speaker: 'Sharia',
          text: '......'
        },
        {
          speaker: 'Sharia',
          text: 'Chatooooo! Bem que Lywin disse que humanos são chatos! Eu prefiro brincar de esconde-esconde!'
        },
        {
          speaker: 'Sharia',
          text: 'Brinca de esconde-esconde comigo primeiro, e depois a gente brinca desse seu jogo chato!'
        },
        {
          text: 'Você quer acabar com a raça dela.'
        },
        {
          text: 'O que não seria difícil, já que ela parece ser a última elfa viva.'
        },
        {
          text: 'Parece que você não vai conseguir usar lógica para mudar a situação.'
        },
        {
          text: '"Tudo bem, então", você diz, rendida. "Mas se eu te achar, você terá que me ajudar!"'
        },
        {
          speaker: 'Sharia',
          text: 'Ebaaaaaaaa! Ok, fechado! Fecha os olhos então e conta até 30!'
        },
        {
          text: 'Você respira fundo, fecha os olhos e começa a contar.'
        },
        {
          text: '"1... 2... 3..."'
        },
        {
          text: 'Você consegue escutar barulho de várias coisas caindo no chão.'
        },
        {
          text: '"8... 9... 10..."'
        },
        {
          text: 'Parece que Sharia bateu o dedinho do pé na quina de alguma coisa. O grito dela soou pela casa toda.'
        },
        {
          speaker: 'Sharia',
          text: 'Quem colocou essa PORCARIA aqui no meio?'
        },
        {
          text: '"14... 15... 16..."'
        },
        {
          text: 'Sharia parece indecisa. Ela vai e volta, passando por você várias vezes.'
        },
        {
          text: '"23... 24... 25..."'
        },
        {
          text: 'Você não escuta mais nada ao redor.'
        },
        {
          text: '"29... e 30! Lá vou eu!"',
          action: () => {
            keys['TREE_IS_LOOKING_FOR_SHARIA'] = true;
          }
        },

      ]
    },
    {
      requirements: () => {
        return keys['TREE_IS_LOOKING_FOR_SHARIA'];
      },
      auto: true,
      audio: '',
      chat: [
        {
          text: 'Você olha ao redor.'
        },
        {
          options: [
            {
              text: 'Procurar atrás do sofá'
            },
            {
              text: 'Olhar o segundo andar'
            },
            {
              text: 'Vasculhar a montanha de brinquedos'
            },
            {
              text: 'Procurar atrás do sofá'
            }
          ]
        }
      ]
    }
  ]
}

setTimeout(() => {
  calculateSceneWidth();
}, 0);

calculateSceneWidth();
updateImage();
startImageFluctuation();
getOptions();
initListeners();

function initListeners() {
  const button = document.getElementById('next-button');
  button.addEventListener(('click'), () => handleNextButton());
}

function calculateSceneWidth() {
  let scene = document.getElementById('scene');
  let sceneImg = document.getElementsByClassName('scene-background');
  let chat = document.getElementById('chat');

  if (scene) {
    Array.from(sceneImg).forEach((el) => el.style.width = `${scene.clientHeight}px`);
    chat.style.width = `${scene.clientHeight}px`;
  }
}

function updateImage() {
  const edgeImage = document.getElementById('scene-image-edge');
  const redImage = document.getElementById('scene-image-red');
  const colorImage = document.getElementById('scene-image-color');

  edgeImage.style.backgroundImage = `url(${currentScene}_edge.png)`;
  redImage.style.backgroundImage = `url(${currentScene}_red.png)`;
  colorImage.style.backgroundImage = `url(${currentScene}_color.png)`;
}

function startImageFluctuation() {
  setInterval(() => {
    edgeOpacity++;
    redOpacity++;
    colorOpacity++;

    const edgeImage = document.getElementById('scene-image-edge');
    const redImage = document.getElementById('scene-image-red');
    const colorImage = document.getElementById('scene-image-color');

    if(edgeOpacity > 10) {
      edgeOpacity = 0;
    }
    if(redOpacity > 10) {
      redOpacity = 0;
    }
    if(colorOpacity > 10) {
      colorOpacity = 0;
    }
    
    edgeImage.style.opacity = edgeOpacity * 10;
    redImage.style.opacity = redOpacity * 10;
    colorImage.style.opacity = colorOpacity * 10;
  }, 200)
}

function getOptions() {
  let current = story[currentScene];
  let currentOptions = [];

  current.map((option) => {
    if (!option.requirements || option.requirements()) {
      currentOptions.push(option);
    }
  });

  let autoOption = currentOptions.find((option) => option.auto);
  if (autoOption) {
    showMainOptionOnChat(autoOption);
  }
}

function showMainOptionOnChat(chat) {
  currentChat = chat;
  currentChatIndex = 0;
  showOptionOnChat(chat.chat[0]);
}

function showOptionOnChat(chat) {
  if (chat.requirements && !chat.requirements()) {
    moveToNextText();
    return;
  }

  handleChatEvents(chat);
  
  if (chat.text) {
    writeTextOnChat(chat);
    return;
  }

  if (chat.options) {
    showOptionsToChoose(chat);
    return;
  }
}

function writeTextOnChat(chat) {
  isWritting = true;
  // TODO: Área comentada para agilizar desenvolvimento 
  // hideNextButton();

  const chatMessage = document.getElementById('chat-message');
  chatMessage.textContent = chat.speaker ? `${chat.speaker.toUpperCase()}: ` : '';

  let index = 0;

  writeTextInterval = setInterval(() => {
    chatMessage.textContent = chatMessage.textContent + chat.text[index];
    index++;
    if (index === chat.text.length) {
      clearInterval(writeTextInterval);

      if (currentChat && currentChat.chat.length > currentChatIndex + 1 && currentChat.chat[currentChatIndex + 1].options?.length) {
        handleNextButton();
      } else if (currentChat.chat[currentChatIndex].goBackImmediately) {
        handleNextButton();
      } else {
        showNextButton();
      }
      return;
    }
  }, 20);

  isWritting = false;
}

function showNextButton() {
  const button = document.getElementById('next-button');
  button.hidden = false;
}

function hideNextButton() {
  const button = document.getElementById('next-button');
  button.hidden = true;
}

async function handleNextButton() {
  clearInterval(writeTextInterval);

  if (currentChat) {
    if (currentChat.chat[currentChatIndex].action) {
      currentChat.chat[currentChatIndex].action();
    }

    if (currentChat.chat[currentChatIndex].moveToScene) {
      await moveToScene(currentChat.chat[currentChatIndex].moveToScene);
    }

    if (currentChat.chat[currentChatIndex].goBack || currentChat.chat[currentChatIndex].goBackImmediately) {
      getOptions();
      return;
    }

    moveToNextText();
  }
}

function moveToNextText() {
  if (currentChat.chat.length > currentChatIndex + 1) {
    currentChatIndex++;
    showOptionOnChat(currentChat.chat[currentChatIndex]);
  } else {
    getOptions();
  }
}

function handleChatEvents(chat) {
  if (chat.audio && chat.audio !== currentAudioFile) {
    if (chat.audioAsync) {
      var asyncAudio = new Audio(chat.audio);
      asyncAudio.volume = 1;
      asyncAudio.play();
    } else {
      if (audio) {
        fadeOutAudio(audio);
      }
      
      currentAudioFile = chat.audio;
      audio = new Audio(chat.audio);
      audio.loop = true;
      fadeInAudio(audio);
    }
  }

  if (chat.cleanText) {
    const chatMessage = document.getElementById('chat-message');
    chatMessage.textContent = '';
  }

  if (chat.wave) {
    const scene = document.getElementById('scene');
    
    const wave = document.createElement('div');
    wave.classList.add('scene-wave');

    let color = '';
    if (chat.color) {
      switch(chat.color) {
        case 'yellow':
          color = '#e8e83c';
          break;
        case 'green':
          color = '#28dc28';
          break;
      }
    }

    if (chat.color) {
      wave.style.borderColor = color;
    }

    scene.appendChild(wave);

    setTimeout(() => {
      let waveB = document.createElement('div');
      waveB.classList.add('scene-wave');

      if (chat.color) {
        waveB.style.borderColor = color;
      }

      scene.appendChild(waveB);

      setTimeout(() => {
        scene.removeChild(wave);
        scene.removeChild(waveB);
      }, 1000);
    }, 1000);
  }
}

function fadeOutAudio(audio) {
  let volume = 1;
  let volumeInterval = setInterval(() => {
    volume -= 0.01;

    if (volume <= 0) {
      audio.volume = 0;
      clearInterval(volumeInterval);
      audio.pause();
    } else {
      audio.volume = volume;
    }
  }, 10);
}

function fadeInAudio(audio) {
  let volume = 0;
  audio.volume = 0;
  audio.play();
  let volumeInterval = setInterval(() => {
    volume += 0.01;

    if (volume >= 1) {
      audio.volume = 1;
      clearInterval(volumeInterval);
    } else {
      audio.volume = volume;
    }
  }, 10);
}

function showOptionsToChoose(chat) {
  hideNextButton();
  const chatOptions = document.getElementById('chat-options');

  chat.options.forEach((opt) => {
    if (opt.requirements && !opt.requirements()) {
      return;
    }

    const chatOption = document.createElement('div');
    chatOption.classList.add('chat-option');

    if (opt.alreadySeen && opt.alreadySeen()) {
      chatOption.classList.add('chat-option--already-seen');
    }

    const chatOptionArrow = document.createElement('div');
    chatOptionArrow.classList.add('chat-arrow');

    const chatOptionText = document.createElement('span');
    chatOptionText.textContent = opt.text;

    chatOption.appendChild(chatOptionArrow);
    chatOption.appendChild(chatOptionText);

    chatOptions.appendChild(chatOption);

    chatOption.addEventListener('click', () => {
      if (chat.action) {
        chat.action();
      }

      if (opt.action) {
        opt.action();
      }
    
      if (chat.goBack) {
        getOptions();
      }

      chatOptions.innerHTML = '';
      showMainOptionOnChat(opt);
    });
  });
}

function handleAfterChat(chat) {
  if (chat.action) {
    opt.action();
  }

  if (chat.goBack) {
    getOptions();
  }
}

async function moveToScene(scene) {
  const sceneCover = document.getElementById('scene-cover');

  sceneCover.style.opacity = 1;

  await new Promise((resolve) => setTimeout(() => resolve(), 500));
  currentScene = scene;
  updateImage();
  await new Promise((resolve) => setTimeout(() => resolve(), 500));

  sceneCover.style.opacity = 0;
}

function validateForest() {
  if (forestSequence.length !== currentForestSequence.length) {
    return;
  }

  let last = '';
  let owlCount = 0;
  let valid = forestSequence.every((forest, i) => {
    let current = currentForestSequence[i];

    if (forest === 'crow') {
      let color = colorsSequence[i];

      switch (color) {
        case 'yellow':
          last = 'left';
          return current === 'left';
        case 'red':
          last = 'right';
          return current === 'right';
        case 'green':
          last = 'straight';
          return current === 'straight';
      }
    } else if (forest === 'wolf') {
      if (last) {
        switch (last) {
          case 'left':
            last = 'straight';
            return current === 'straight';
          case 'straight':
            last = 'right';
            return current === 'right';
          case 'right':
            last = 'left';
            return current === 'left';
        }
      } else {
        last = 'straight';
        return current === 'straight';
      }
    } else if (forest === 'owl') {
      switch (owlCount % 3) {
        case 0:
          owlCount++;
          last = 'left';
          return current === 'left';
        case 1:
          owlCount++;
          last = 'right';
          return current === 'right';
        case 2:
          owlCount++;
          last = 'straight';
          return current === 'straight';
      }
    }
  });

  if (valid) {
    alert('valido');
    keys['FOREST_SOLVED_MAZE'] = true;
  } else {
    alert('invalido');
    keys['FOREST_DID_NOT_SOLVE_MAZE'] = true;
  }
}