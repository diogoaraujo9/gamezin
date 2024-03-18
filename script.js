var currentScene = 'prado';
var edgeOpacity = 0;
var redOpacity = 3;
var colorOpacity = 6;

var currentChat;
var currentChatIndex = 0;

var isWritting = false;
var writeTextInterval;

var audio;
var currentAudioFile = '';

var keys = {
  'INIT': true,
  'FIRST_TALK_TO_HEROIN': false,
  'CHOSE_TO_GET_CLOSE_TO_HEROIN': false,
  'HEROIN_MAIN_QUESTIONS': false,
  'HEROIN_ASKED_REASON_TO_COME_TO_THIS_WORLD': false,
  'HEROIN_ASKED_WHAT_WAS_HAPPENING_TO_THIS_WORLD': false,
  'HEROIN_ASKED_ABOUT_THE_DOOR_LOCK': false,
  'HEROIN_ASKED_HOW_TO_SAVE_THE_WORLD': false,
  'HEROIN_FIRST_TALK_CONCLUDED': false,
  'HEROIN_HESITATED_TO_SEARCH_THE_SOULS': false,
  'STARTED_QUEST': false,
}

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
          text: 'A grama aos seus pés. As árvores que se encontram na linha do horizonte. Até mesmo as estrelas no céu...'
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
          text: 'Você abaixa os braços e vê uma mulher deitada, com as costas apoiada em uma rocha. Ela possui uma aparência fraca e está toda machucada.'
        },
        {
          text: 'Sua forma também é volátil, igual a rocha e a grama que estão abaixos dela.'
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
                    keys['FIRST_TALK_TO_HEROIN'] = true;
                    keys['CHOSE_TO_GET_CLOSE_TO_HEROIN'] = true;
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
                            keys['FIRST_TALK_TO_HEROIN'] = true;
                            keys['CHOSE_TO_GET_CLOSE_TO_HEROIN'] = true;
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
                            keys['FIRST_TALK_TO_HEROIN'] = true;
                            keys['CHOSE_TO_GET_CLOSE_TO_HEROIN'] = false;
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
        return keys['FIRST_TALK_TO_HEROIN']
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
          text: 'Infelizmente já não o lembro mais... só lembro que eu costumava ser a heroína desse mundo.'
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
            keys['HEROIN_MAIN_QUESTIONS'] = true;
            keys['FIRST_TALK_TO_HEROIN'] = false;
          },
          goBackImmediately: true,
        }
      ]
    },
    {
      requirements: () => {
        return keys['HEROIN_MAIN_QUESTIONS']
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
                  text: 'Me dói pensar nisto... em pensar que por causa da minha incapacidade, eu acabei te colocando nessa situação.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Se você está aqui... então talvez signifique que este mundo ainda não desistiu... talvez exista uma chance de salvá-lo.'
                },
                {
                  speaker: 'Heroína',
                  text: 'O que significaria... que você é a nossa última esperança...',
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
                  text: 'Esse mundo foi amaldiaçoado há muito tempo... Tentamos de tudo para libertá-lo... mas nada deu certo.'
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
                  text: 'Procure as três Almas Primordiais e abra a porta do Altar ao norte.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Espero que ainda existam sobreviventes para te ajudar nessa jornada...'
                },
                {
                  speaker: 'Heroína',
                  text: 'Os anões podem ser encontradas ao oeste, perto das montanhas. Eles são teimosos, então seja insistente.'
                },
                {
                  speaker: 'Heroína',
                  text: 'A comunidade elfíca mais próxima se encontra na floresta ao sul. Eles não confiam facilmente em estranhos, então não fique chateada caso não receba uma recepção calorosa.'
                },
                {
                  speaker: 'Heroína',
                  text: 'A última vez que ouvi um canto de uma sereia foi vindo do lago localizado ao leste. Elas são inofensivas, diferentemente das sereias mencionadas nas mitologias do nosso mundo de origem. Elas irão te ajudar.'
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
                  text: 'Como somos humanas, nossas almas podem não ter muito valor nesse mundo... mas isso permite que consigamos herdar Almas Primordias das outras raças.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Abrir mão de uma Alma Primordial não é algo fácil. As raças estão certas ao tomarem o máximo de cuidado para que elas não caiam nas mãos erradas.'
                },
                {
                  speaker: 'Heroína',
                  text: 'Além disso, mesmo se você conseguir a confiança desses representantes, herdar uma Alma Primordial vai requerer que você entre em sintonia com o que é mais puro para cada raça. Não será algo fácil.'
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
                      keys['HEROIN_MAIN_QUESTIONS'] = false;
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
                    keys['HEROIN_MAIN_QUESTIONS'] = false;
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
                    keys['HEROIN_MAIN_QUESTIONS'] = true;
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
                  speaker: 'Heroína',
                  text: 'Onde você está indo, criança? Você ainda precisa das três Almas Primordiais antes de partir para o templo.'
                },
                {
                  text: 'Lembrando do que precisa ser feito, você volta para o meio do campo.',
                  goBack: true,
                },
              ]
            },
            {
              text: 'Ir para o sul',
              chat: [
                {
                  speaker: 'Heroína',
                  text: 'Onde você está indo, criança? Você ainda precisa das três Almas Primordiais antes de partir para o templo.'
                },
                {
                  text: 'Lembrando do que precisa ser feito, você volta para o meio do campo.',
                  goBack: true,
                },
              ]
            },
            {
              text: 'Ir para o leste',
              chat: [
                {
                  speaker: 'Heroína',
                  text: 'Onde você está indo, criança? Você ainda precisa das três Almas Primordiais antes de partir para o templo.'
                },
                {
                  text: 'Lembrando do que precisa ser feito, você volta para o meio do campo.',
                  goBack: true,
                },
              ]
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
    if (option.requirements) {
      let valid = option.requirements();
      if (valid) {
        currentOptions.push(option);
      }
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

function handleNextButton() {
  clearInterval(writeTextInterval);

  if (currentChat) {
    if (currentChat.chat[currentChatIndex].action) {
      currentChat.chat[currentChatIndex].action();
    }

    if (currentChat.chat[currentChatIndex].goBack || currentChat.chat[currentChatIndex].goBackImmediately) {
      getOptions();
      return;
    }

    if (currentChat.chat.length > currentChatIndex + 1) {
      currentChatIndex++;
      showOptionOnChat(currentChat.chat[currentChatIndex]);
    } else {
      getOptions();
    }
  }
}

function handleChatEvents(chat) {
  if (chat.audio && chat.audio !== currentAudioFile) {
    if (audio) {
      audio.pause();
    }
    
    currentAudioFile = chat.audio;
    audio = new Audio(chat.audio);
    audio.loop = true;
    audio.play();
  }

  if (chat.cleanText) {
    const chatMessage = document.getElementById('chat-message');
    chatMessage.textContent = '';
  }
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