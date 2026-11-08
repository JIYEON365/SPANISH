/*
 * 학원 노트 데이터 — 매주 Claude가 정리해서 여기에 한 주씩 추가합니다.
 * 가장 최근 주가 배열 맨 앞에 오도록 넣어 주세요.
 *
 * 주(week) 형식
 *   { id: '2026-10-24', date: '2026-10-24', title: '수업 주제', summary: '한 줄 요약', example?: true, items: [...] }
 *
 * 항목(item) 형식 — es, ko, type만 필수, 나머지는 있으면 표시됩니다.
 *   type     : 'vocab'(단어) | 'grammar'(문법) | 'expr'(표현)
 *   es / ko  : 스페인어 / 한국어 뜻
 *   memo     : 수업 때 내가 적은 원래 메모
 *   tables   : [{ title, head: ['', ...], rows: [['yo','...'], ...] }]   ← 활용표, 비교표 등
 *   examples : [{ es, ko }]
 *   related  : [{ es, ko, tag }]   tag 예: '비슷', '반대', '파생', '같이 쓰는', '헷갈림 주의'
 *   tip      : 한 줄 팁 / 자주 하는 실수
 *   quiz     : [{ q, a }]           ← 복습 탭에 카드로 나옵니다
 */
window.CLASS_NOTES = [
  {
    id: '2026-11-08',
    date: '2026-11-08',
    title: '병원·건강, 옷 쇼핑, 부탁과 안부',
    summary: '진료받을 때 증상 말하기, 옷 가게에서 원하는 옷 설명하기, 부탁·안부·연결어 표현들. (11/2 수업 intentar 포함)',
    items: [
      {
        type: 'grammar',
        es: 'intentar + 동사원형',
        ko: '~하려고 해 보다, ~를 시도하다',
        memo: 'Intentar+동사원형 = ~를 시도하다 (11/2 수업)',
        tables: [
          {
            title: 'intentar 활용 (규칙동사)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'intento', 'intenté', 'intentaba'],
              ['tú', 'intentas', 'intentaste', 'intentabas'],
              ['él/ella/Ud.', 'intenta', 'intentó', 'intentaba'],
              ['nosotros', 'intentamos', 'intentamos', 'intentábamos'],
              ['vosotros', 'intentáis', 'intentasteis', 'intentabais'],
              ['ellos/Uds.', 'intentan', 'intentaron', 'intentaban']
            ]
          }
        ],
        examples: [
          { es: 'Intento hablar en español todos los días.', ko: '매일 스페인어로 말하려고 노력해요.' },
          { es: 'Intenté llamarte, pero no contestaste.', ko: '너한테 전화해 보려고 했는데 안 받더라.' },
          { es: 'Voy a intentar dormir más esta semana.', ko: '이번 주엔 잠을 더 자 보려고요.' }
        ],
        related: [
          { es: 'tratar de + 동사원형', ko: '~하려고 애쓰다 (Trato de comer sano.)', tag: '비슷' },
          { es: 'el intento', ko: '시도', tag: '파생' },
          { es: 'probar', ko: '(음식을) 먹어 보다, (옷을) 입어 보다 — 뒤에 주로 명사', tag: '헷갈림 주의' }
        ],
        tip: 'intentar 뒤에는 전치사 없이 바로 동사원형! "Intento de hablar"는 틀려요. 비슷한 tratar는 de가 필요해요: Trato de hablar.',
        quiz: [
          { q: '"매일 일찍 일어나려고 노력해요"', a: 'Intento levantarme temprano todos los días.' },
          { q: '"너한테 전화해 보려고 했어" (단순과거)', a: 'Intenté llamarte.' }
        ]
      },
      {
        type: 'vocab',
        es: 'rápidamente',
        ko: '빨리, 신속하게',
        memo: 'Rapidamente = 빨리, 즉시, 신속하게',
        tables: [
          {
            title: '형용사 → -mente 부사 만들기 (여성형 + mente)',
            head: ['형용사', '부사', '뜻'],
            rows: [
              ['rápido → rápida', 'rápidamente', '빨리'],
              ['tranquilo → tranquila', 'tranquilamente', '차분하게'],
              ['fácil', 'fácilmente', '쉽게'],
              ['normal', 'normalmente', '보통'],
              ['inmediato → inmediata', 'inmediatamente', '즉시']
            ]
          }
        ],
        examples: [
          { es: 'El médico llegó rápidamente.', ko: '의사가 빨리 도착했어요.' },
          { es: 'Tienes que responder rápidamente.', ko: '빨리 답해야 해.' },
          { es: 'Mi hija aprendió a nadar muy rápidamente.', ko: '우리 딸은 수영을 아주 빨리 배웠어요.' }
        ],
        related: [
          { es: 'rápido', ko: '빨리 (말할 때는 부사로도 많이 씀: Habla muy rápido.)', tag: '비슷' },
          { es: 'despacio / lentamente', ko: '천천히', tag: '반대' },
          { es: 'inmediatamente', ko: '즉시, 곧바로', tag: '헷갈림 주의' }
        ],
        tip: '원래 형용사에 강세가 있으면 -mente 뒤에서도 그대로 남아요: rápidamente, fácilmente. "즉시"는 inmediatamente가 더 정확해요.',
        quiz: [
          { q: '"그는 빨리 대답했어요"', a: 'Respondió rápidamente.' }
        ]
      },
      {
        type: 'expr',
        es: 'Le recordamos que…',
        ko: '(손님께) 다시 한번 알려드립니다, 상기시켜 드립니다',
        memo: 'Le recordamos = 당신에게 다시 알려드립니다.',
        tables: [
          {
            title: 'recordar 활용 (o→ue 불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'recuerdo', 'recordé', 'recordaba'],
              ['tú', 'recuerdas', 'recordaste', 'recordabas'],
              ['él/ella/Ud.', 'recuerda', 'recordó', 'recordaba'],
              ['nosotros', 'recordamos', 'recordamos', 'recordábamos'],
              ['vosotros', 'recordáis', 'recordasteis', 'recordabais'],
              ['ellos/Uds.', 'recuerdan', 'recordaron', 'recordaban']
            ]
          },
          {
            title: 'recordar 쓰임 비교',
            head: ['형태', '뜻', '예문'],
            rows: [
              ['recordar algo', '~를 기억하다', 'No recuerdo su nombre.'],
              ['acordarse de algo', '~를 기억하다 (같은 뜻)', 'No me acuerdo de su nombre.'],
              ['recordar a alguien que…', '누구에게 ~를 상기시키다', 'Le recordamos que…']
            ]
          }
        ],
        examples: [
          { es: 'Le recordamos que la tienda cierra a las ocho.', ko: '매장은 8시에 문을 닫는다는 점 다시 알려드립니다.' },
          { es: 'Le recordamos que mañana tiene cita con el médico.', ko: '내일 진료 예약이 있으시다는 점 알려드립니다.' },
          { es: '¿Me recuerdas tu número de teléfono?', ko: '네 전화번호 다시 알려줄래?' }
        ],
        related: [
          { es: 'acordarse de', ko: '~를 기억하다', tag: '비슷' },
          { es: 'olvidar', ko: '잊다', tag: '반대' },
          { es: 'el recuerdo', ko: '추억, 기념품 (dar recuerdos = 안부 전하다)', tag: '파생' }
        ],
        tip: '안내 방송·병원 문자·이메일에 자주 나오는 격식 표현이에요. Le = usted(당신께). 친구에게는 Te recuerdo que… (내가 다시 말해 주는 건데…).',
        quiz: [
          { q: '"(우리가 당신께) 내일은 수업이 없다는 걸 다시 알려드립니다"', a: 'Le recordamos que mañana no hay clase.' }
        ]
      },
      {
        type: 'expr',
        es: 'pedir un favor',
        ko: '부탁을 하다, 도움을 청하다',
        memo: 'Pide un favor = 부탁을 하다, 도움을 요청하다',
        tables: [
          {
            title: 'pedir 활용 (e→i 불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'pido', 'pedí', 'pedía'],
              ['tú', 'pides', 'pediste', 'pedías'],
              ['él/ella/Ud.', 'pide', 'pidió', 'pedía'],
              ['nosotros', 'pedimos', 'pedimos', 'pedíamos'],
              ['vosotros', 'pedís', 'pedisteis', 'pedíais'],
              ['ellos/Uds.', 'piden', 'pidieron', 'pedían']
            ]
          },
          {
            title: 'pedir vs preguntar',
            head: ['동사', '뜻', '예문'],
            rows: [
              ['pedir', '(무언가를) 요청하다, 부탁하다, 주문하다', 'Pido un café. / Te pido un favor.'],
              ['preguntar', '(정보를) 묻다, 질문하다', 'Te pregunto la hora.']
            ]
          }
        ],
        examples: [
          { es: '¿Te puedo pedir un favor?', ko: '부탁 하나 해도 될까?' },
          { es: 'Mi vecina me pidió un favor ayer.', ko: '어제 이웃이 나한테 부탁을 했어요.' },
          { es: 'No me gusta pedir favores.', ko: '저는 부탁하는 걸 좋아하지 않아요.' }
        ],
        related: [
          { es: 'hacer un favor', ko: '부탁을 들어주다 (¿Me haces un favor? 부탁 좀 들어줄래?)', tag: '같이 쓰는' },
          { es: 'pedir ayuda', ko: '도움을 청하다', tag: '비슷' },
          { es: 'preguntar', ko: '질문하다', tag: '헷갈림 주의' }
        ],
        tip: 'pide는 "그/그녀가 부탁한다" 형태예요. 기본형은 pedir! 부탁을 "하는" 건 pedir, "들어주는" 건 hacer un favor.',
        quiz: [
          { q: '"부탁 하나 해도 될까?"', a: '¿Te puedo pedir un favor?' },
          { q: '"그녀가 나에게 부탁을 했어요" (단순과거)', a: 'Ella me pidió un favor.' }
        ]
      },
      {
        type: 'expr',
        es: 'pasar a + 동사원형',
        ko: '~하러 들르다',
        memo: 'Pasar a + 동사원형 = ~를 하러 들르다',
        tables: [
          {
            title: 'pasar 활용 (규칙동사)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'paso', 'pasé', 'pasaba'],
              ['tú', 'pasas', 'pasaste', 'pasabas'],
              ['él/ella/Ud.', 'pasa', 'pasó', 'pasaba'],
              ['nosotros', 'pasamos', 'pasamos', 'pasábamos'],
              ['vosotros', 'pasáis', 'pasasteis', 'pasabais'],
              ['ellos/Uds.', 'pasan', 'pasaron', 'pasaban']
            ]
          },
          {
            title: 'pasar a / pasar por',
            head: ['형태', '뜻', '예문'],
            rows: [
              ['pasar a + 동사원형', '~하러 들르다', 'Paso a recogerte.'],
              ['pasar por + 장소', '~에 들르다', 'Paso por la farmacia.'],
              ['pasar por + 장소 + a + 동사원형', '~에 ~하러 들르다', 'Paso por tu casa a dejarte el libro.']
            ]
          }
        ],
        examples: [
          { es: 'Paso a recogerte a las siete.', ko: '7시에 너 데리러 들를게.' },
          { es: 'Mañana paso a verte.', ko: '내일 너 보러 들를게.' },
          { es: 'Ayer pasé a saludar a mis abuelos.', ko: '어제 조부모님께 인사드리러 들렀어요.' }
        ],
        related: [
          { es: 'pasar por + 장소', ko: '~에 들르다', tag: '같이 쓰는' },
          { es: 'ir a + 동사원형', ko: '~할 것이다 (미래)', tag: '헷갈림 주의' },
          { es: 'pasar a + 명사/동사원형', ko: '(다음 단계로) 넘어가다 (Ahora pasamos a otro tema.)', tag: '헷갈림 주의' }
        ],
        tip: '장소에는 por, 목적(무엇을 하러)에는 a + 동사원형. 수업에서 "Ahora pasamos a…"는 "이제 ~로 넘어갈게요"라는 뜻이에요.',
        quiz: [
          { q: '"8시에 너 데리러 들를게"', a: 'Paso a recogerte a las ocho.' }
        ]
      },
      {
        type: 'expr',
        es: 'encontrarse bien / mal',
        ko: '몸(컨디션)이 좋다 / 안 좋다',
        memo: 'encontrarse bien/mal = 몸 상태가 좋다/나쁘다',
        tables: [
          {
            title: 'encontrarse 활용 (o→ue, 재귀동사)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'me encuentro', 'me encontré', 'me encontraba'],
              ['tú', 'te encuentras', 'te encontraste', 'te encontrabas'],
              ['él/ella/Ud.', 'se encuentra', 'se encontró', 'se encontraba'],
              ['nosotros', 'nos encontramos', 'nos encontramos', 'nos encontrábamos'],
              ['vosotros', 'os encontráis', 'os encontrasteis', 'os encontrabais'],
              ['ellos/Uds.', 'se encuentran', 'se encontraron', 'se encontraban']
            ]
          }
        ],
        examples: [
          { es: 'Hoy no me encuentro bien.', ko: '오늘 몸이 좀 안 좋아요.' },
          { es: '¿Cómo se encuentra usted hoy?', ko: '오늘 몸은 좀 어떠세요?' },
          { es: 'Ayer me encontraba mal, pero hoy estoy mejor.', ko: '어제는 몸이 안 좋았는데 오늘은 나아요.' }
        ],
        related: [
          { es: 'sentirse bien / mal', ko: '기분·몸이 좋다 / 나쁘다', tag: '비슷' },
          { es: 'estar bien / mal', ko: '괜찮다 / 안 좋다', tag: '비슷' },
          { es: 'encontrar', ko: '찾다, 발견하다', tag: '같은 동사' },
          { es: 'encontrarse con alguien', ko: '(우연히) 누구를 만나다', tag: '헷갈림 주의' }
        ],
        tip: '재귀대명사를 꼭 붙여요: "Encuentro bien"이 아니라 "Me encuentro bien". 병원에서 아주 자주 쓰는 말이에요.',
        quiz: [
          { q: '"오늘 몸이 안 좋아요"', a: 'Hoy no me encuentro bien.' }
        ]
      },
      {
        type: 'vocab',
        es: 'azul marino',
        ko: '남색, 네이비',
        memo: 'azul marino = 남색',
        tables: [
          {
            title: '파란 계열 색 + 쓰는 법',
            head: ['스페인어', '뜻'],
            rows: [
              ['una camisa azul marino', '남색 셔츠'],
              ['unos pantalones azul marino', '남색 바지 (복수여도 그대로)'],
              ['azul claro', '연한 파랑, 하늘색'],
              ['azul oscuro', '진한 파랑'],
              ['azul celeste', '하늘색']
            ]
          }
        ],
        examples: [
          { es: 'Busco una chaqueta azul marino.', ko: '남색 재킷을 찾고 있어요.' },
          { es: 'Los pantalones azul marino combinan con todo.', ko: '남색 바지는 뭐에나 잘 어울려요.' },
          { es: 'Mi uniforme del colegio era azul marino.', ko: '제 학교 교복은 남색이었어요.' }
        ],
        related: [
          { es: 'azul oscuro', ko: '진한 파랑', tag: '비슷' },
          { es: 'azul claro', ko: '연한 파랑', tag: '반대' },
          { es: 'el mar / marino', ko: '바다 / 바다의', tag: '파생' }
        ],
        tip: '두 단어로 된 색은 성·수가 변하지 않아요: unas faldas azul marino ("azules marinas" X).',
        quiz: [
          { q: '"남색 재킷을 찾고 있어요"', a: 'Busco una chaqueta azul marino.' }
        ]
      },
      {
        type: 'expr',
        es: 'ir de vacaciones',
        ko: '휴가를 가다',
        memo: 'ir de vacaciones = 휴가를 가다',
        tables: [
          {
            title: 'ir 활용 (완전 불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'voy', 'fui', 'iba'],
              ['tú', 'vas', 'fuiste', 'ibas'],
              ['él/ella/Ud.', 'va', 'fue', 'iba'],
              ['nosotros', 'vamos', 'fuimos', 'íbamos'],
              ['vosotros', 'vais', 'fuisteis', 'ibais'],
              ['ellos/Uds.', 'van', 'fueron', 'iban']
            ]
          }
        ],
        examples: [
          { es: 'Este verano vamos de vacaciones a la playa.', ko: '이번 여름에 우리는 바다로 휴가 가요.' },
          { es: '¿Adónde fuiste de vacaciones?', ko: '휴가 어디로 갔었어?' },
          { es: 'De niña, iba de vacaciones al pueblo de mis abuelos.', ko: '어릴 때 조부모님 시골 마을로 휴가를 가곤 했어요.' }
        ],
        related: [
          { es: 'estar de vacaciones', ko: '휴가 중이다', tag: '같이 쓰는' },
          { es: 'ir de viaje', ko: '여행을 가다', tag: '비슷' },
          { es: 'ir de compras', ko: '쇼핑하러 가다 (같은 구조)', tag: '비슷' },
          { es: 'volver de vacaciones', ko: '휴가에서 돌아오다', tag: '반대' }
        ],
        tip: 'vacaciones는 항상 복수예요. 장소는 a로: ir de vacaciones a España.',
        quiz: [
          { q: '"작년에 우리는 스페인으로 휴가를 갔어요"', a: 'El año pasado fuimos de vacaciones a España.' }
        ]
      },
      {
        type: 'grammar',
        es: 'pensar en qué + 동사원형',
        ko: '무엇을 ~할지 생각하다',
        memo: 'estan pensando en que comer = 뭘 먹을지 생각하는 중이다.',
        tables: [
          {
            title: '의문사 + 동사원형 = "~할지"',
            head: ['스페인어', '뜻'],
            rows: [
              ['qué comer', '뭘 먹을지'],
              ['dónde ir', '어디 갈지'],
              ['cómo decirlo', '그걸 어떻게 말할지'],
              ['a quién invitar', '누구를 초대할지'],
              ['cuándo salir', '언제 나갈지']
            ]
          },
          {
            title: 'pensar 활용 (e→ie 불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'pienso', 'pensé', 'pensaba'],
              ['tú', 'piensas', 'pensaste', 'pensabas'],
              ['él/ella/Ud.', 'piensa', 'pensó', 'pensaba'],
              ['nosotros', 'pensamos', 'pensamos', 'pensábamos'],
              ['vosotros', 'pensáis', 'pensasteis', 'pensabais'],
              ['ellos/Uds.', 'piensan', 'pensaron', 'pensaban']
            ]
          }
        ],
        examples: [
          { es: 'Están pensando en qué comer.', ko: '(그들은) 뭘 먹을지 생각하는 중이에요.' },
          { es: 'Estoy pensando en qué regalarle a mi madre.', ko: '엄마한테 뭘 선물할지 고민 중이에요.' },
          { es: 'No sé dónde ir de vacaciones.', ko: '휴가를 어디로 갈지 모르겠어요.' }
        ],
        related: [
          { es: 'pensar en + 명사', ko: '~를 생각하다 (Pienso en ti.)', tag: '같이 쓰는' },
          { es: 'pensar + 동사원형', ko: '~할 생각이다 (Pienso ir a Madrid.)', tag: '헷갈림 주의' },
          { es: 'no sé qué hacer', ko: '뭘 해야 할지 모르겠다', tag: '비슷' }
        ],
        tip: '여기서 qué는 의문사라 강세 필수! están은 "그들/당신들"이에요. 나라면 Estoy pensando en qué comer.',
        quiz: [
          { q: '"오늘 밤 뭘 먹을지 생각 중이에요"', a: 'Estoy pensando en qué cenar esta noche.' }
        ]
      },
      {
        type: 'expr',
        es: 'en lugar de = en vez de',
        ko: '~ 대신에',
        memo: 'en lugar de = en vez de = ~ 대신에',
        tables: [
          {
            title: '뒤에 오는 것',
            head: ['형태', '예문', '뜻'],
            rows: [
              ['+ 명사', 'en lugar de café', '커피 대신'],
              ['+ 동사원형', 'en vez de ir en coche', '차로 가는 대신'],
              ['+ 대명사', 'en lugar de él', '그 사람 대신']
            ]
          }
        ],
        examples: [
          { es: 'En lugar de café, tomo té.', ko: '커피 대신 차를 마셔요.' },
          { es: 'En vez de ir en coche, voy andando.', ko: '차로 가는 대신 걸어가요.' },
          { es: '¿Por qué no descansas en lugar de trabajar tanto?', ko: '그렇게 일만 하지 말고 좀 쉬는 게 어때?' }
        ],
        related: [
          { es: 'en su lugar', ko: '그 대신에', tag: '파생' },
          { es: 'el lugar', ko: '장소', tag: '파생' },
          { es: 'a cambio de', ko: '~의 대가로, ~와 맞바꿔', tag: '헷갈림 주의' }
        ],
        tip: '뒤에 동사가 오면 항상 원형: en vez de ir ("en vez de voy" X).',
        quiz: [
          { q: '"커피 대신 물을 마셔요"', a: 'En lugar de café, bebo agua. / En vez de café, bebo agua.' }
        ]
      },
      {
        type: 'expr',
        es: 'a través de',
        ko: '~를 통해서',
        memo: 'a traves de = ~를 통해서',
        examples: [
          { es: 'Nos conocimos a través de una amiga.', ko: '우리는 친구를 통해 알게 됐어요.' },
          { es: 'Compro la ropa a través de internet.', ko: '옷은 인터넷으로 사요.' },
          { es: 'La luz entra a través de la ventana.', ko: '빛이 창문을 통해 들어와요.' }
        ],
        related: [
          { es: 'por medio de', ko: '~를 통해서, ~로', tag: '비슷' },
          { es: 'mediante', ko: '~를 통해 (격식)', tag: '비슷' },
          { es: 'por', ko: '~로 (por internet, por teléfono)', tag: '비슷' }
        ],
        tip: 'través에 강세가 있어요. 사람·수단(~를 통해서)에도, 공간(~을 통과해서)에도 써요.',
        quiz: [
          { q: '"친구를 통해 그를 알게 됐어요"', a: 'Lo conocí a través de un amigo.' }
        ]
      },
      {
        type: 'expr',
        es: 'he oído hablar de…',
        ko: '~에 대해 들어본 적 있다',
        memo: 'he oido hablar de ~ = ~에 대해 들어봤다.',
        tables: [
          {
            title: '현재완료 (haber + oído)',
            head: ['', '현재완료'],
            rows: [
              ['yo', 'he oído'],
              ['tú', 'has oído'],
              ['él/ella/Ud.', 'ha oído'],
              ['nosotros', 'hemos oído'],
              ['vosotros', 'habéis oído'],
              ['ellos/Uds.', 'han oído']
            ]
          },
          {
            title: 'oír 활용 (불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'oigo', 'oí', 'oía'],
              ['tú', 'oyes', 'oíste', 'oías'],
              ['él/ella/Ud.', 'oye', 'oyó', 'oía'],
              ['nosotros', 'oímos', 'oímos', 'oíamos'],
              ['vosotros', 'oís', 'oísteis', 'oíais'],
              ['ellos/Uds.', 'oyen', 'oyeron', 'oían']
            ]
          }
        ],
        examples: [
          { es: 'He oído hablar mucho de ti.', ko: '너에 대해 얘기 많이 들었어.' },
          { es: '¿Has oído hablar de este restaurante?', ko: '이 식당 들어본 적 있어?' },
          { es: 'Nunca he oído hablar de ese remedio.', ko: '그 치료법은 들어본 적이 없어요.' }
        ],
        related: [
          { es: 'oír', ko: '들리다, 듣다', tag: '파생' },
          { es: 'escuchar', ko: '(귀 기울여) 듣다', tag: '헷갈림 주의' },
          { es: 'me han dicho que…', ko: '~라고 들었다', tag: '비슷' }
        ],
        tip: 'oído는 o-í-do, í에 강세! hablar는 항상 원형 그대로 둬요.',
        quiz: [
          { q: '"이 식당에 대해 들어본 적 있어?"', a: '¿Has oído hablar de este restaurante?' }
        ]
      },
      {
        type: 'expr',
        es: 'puedo comer de todo',
        ko: '아무거나 다 먹을 수 있어요 (가리는 음식이 없어요)',
        memo: 'puedo comer de todo = 모든 것을 다 먹을 수 있다.',
        tables: [
          {
            title: 'poder 활용 (o→ue 불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'puedo', 'pude', 'podía'],
              ['tú', 'puedes', 'pudiste', 'podías'],
              ['él/ella/Ud.', 'puede', 'pudo', 'podía'],
              ['nosotros', 'podemos', 'pudimos', 'podíamos'],
              ['vosotros', 'podéis', 'pudisteis', 'podíais'],
              ['ellos/Uds.', 'pueden', 'pudieron', 'podían']
            ]
          }
        ],
        examples: [
          { es: 'No soy alérgica a nada, puedo comer de todo.', ko: '알레르기가 없어서 뭐든 다 먹을 수 있어요.' },
          { es: 'Mi hijo come de todo.', ko: '우리 아들은 가리는 거 없이 잘 먹어요.' },
          { es: 'En este supermercado hay de todo.', ko: '이 슈퍼마켓엔 없는 게 없어요.' }
        ],
        related: [
          { es: 'comer de todo', ko: '이것저것 가리지 않고 먹다', tag: '같이 쓰는' },
          { es: 'no puedo comer…', ko: '~를 못 먹어요', tag: '반대' },
          { es: 'ser alérgico/a a', ko: '~에 알레르기가 있다', tag: '같이 쓰는' }
        ],
        tip: 'de todo = "이것저것 다". "Como todo"는 "(있는 걸) 전부 먹어 치운다"는 느낌이라 달라요.',
        quiz: [
          { q: '"저는 가리는 거 없이 다 먹을 수 있어요"', a: 'Puedo comer de todo.' }
        ]
      },
      {
        type: 'expr',
        es: 'me siento pesado/a',
        ko: '속이 더부룩해요, 몸이 무거워요',
        memo: 'me siento pesada = 더부룩하다.',
        tables: [
          {
            title: 'sentirse 활용 (e→ie / e→i 불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'me siento', 'me sentí', 'me sentía'],
              ['tú', 'te sientes', 'te sentiste', 'te sentías'],
              ['él/ella/Ud.', 'se siente', 'se sintió', 'se sentía'],
              ['nosotros', 'nos sentimos', 'nos sentimos', 'nos sentíamos'],
              ['vosotros', 'os sentís', 'os sentisteis', 'os sentíais'],
              ['ellos/Uds.', 'se sienten', 'se sintieron', 'se sentían']
            ]
          }
        ],
        examples: [
          { es: 'Después de cenar tanto, me siento pesada.', ko: '저녁을 너무 많이 먹었더니 속이 더부룩해요.' },
          { es: 'Mi padre se sintió pesado toda la tarde.', ko: '아빠는 오후 내내 속이 더부룩했어요.' },
          { es: 'Si como tarde, me siento pesada por la mañana.', ko: '늦게 먹으면 아침에 속이 더부룩해요.' }
        ],
        related: [
          { es: 'tener el estómago pesado', ko: '속이 더부룩하다', tag: '비슷' },
          { es: 'sentirse ligero/a', ko: '가볍게 느끼다', tag: '반대' },
          { es: 'sentarse', ko: '앉다 (me siento = 나는 앉는다 도 됨!)', tag: '헷갈림 주의' }
        ],
        tip: '주어 성별에 맞춰요: (여자) me siento pesada / (남자) me siento pesado.',
        quiz: [
          { q: '"점심 먹고 나서 속이 더부룩해요" (여자)', a: 'Después de comer me siento pesada.' }
        ]
      },
      {
        type: 'vocab',
        es: 'mareado/a',
        ko: '어지러운, 멀미 나는 (estar mareado/a = 어지럽다)',
        memo: 'mareado/a = 어지럽다',
        tables: [
          {
            title: 'marearse 활용 (규칙, 재귀동사) = 어지러워지다, 멀미하다',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'me mareo', 'me mareé', 'me mareaba'],
              ['tú', 'te mareas', 'te mareaste', 'te mareabas'],
              ['él/ella/Ud.', 'se marea', 'se mareó', 'se mareaba'],
              ['nosotros', 'nos mareamos', 'nos mareamos', 'nos mareábamos'],
              ['vosotros', 'os mareáis', 'os mareasteis', 'os mareabais'],
              ['ellos/Uds.', 'se marean', 'se marearon', 'se mareaban']
            ]
          }
        ],
        examples: [
          { es: 'Estoy un poco mareada.', ko: '좀 어지러워요.' },
          { es: 'Me mareo en el coche.', ko: '저는 차멀미를 해요.' },
          { es: 'Me levanté rápido y me sentí mareado.', ko: '빨리 일어났더니 어지러웠어요.' }
        ],
        related: [
          { es: 'marearse', ko: '어지러워지다, 멀미하다', tag: '파생' },
          { es: 'el mareo', ko: '어지럼증, 멀미', tag: '파생' },
          { es: 'tener náuseas', ko: '메스껍다', tag: '같이 쓰는' }
        ],
        tip: 'mareado는 형용사라 "어지럽다"고 하려면 estar와 같이: Estoy mareada. (ser는 X)',
        quiz: [
          { q: '"좀 어지러워요" (여자)', a: 'Estoy un poco mareada.' }
        ]
      },
      {
        type: 'expr',
        es: '¿Qué le pasa exactamente?',
        ko: '정확히 어디가 어떠세요? (증상이 어떠세요?)',
        memo: '?Que le pasa exactamente? = 정확히 증상이 어때?',
        tables: [
          {
            title: '누구에게 묻는지',
            head: ['스페인어', '뜻'],
            rows: [
              ['¿Qué te pasa?', '(친구에게) 무슨 일이야? 어디 안 좋아?'],
              ['¿Qué le pasa?', '(usted에게) 어디가 불편하세요? / (그·그녀) 왜 그래?'],
              ['¿Qué os pasa? / ¿Qué les pasa?', '(너희/여러분) 무슨 일이에요?'],
              ['¿Qué le pasa a tu perro?', '너희 강아지 왜 그래?']
            ]
          }
        ],
        examples: [
          { es: '—¿Qué le pasa exactamente? —Me duele mucho la cabeza.', ko: '—정확히 어디가 어떠세요? —머리가 많이 아파요.' },
          { es: '¿Qué te pasa? Estás muy callada.', ko: '무슨 일 있어? 너무 조용하네.' },
          { es: '¿Qué le pasa a tu perro? No quiere comer.', ko: '너희 강아지 왜 그래? 밥을 안 먹으려고 하네.' }
        ],
        related: [
          { es: '¿Qué le ha pasado?', ko: '무슨 일이 있었어요?', tag: '비슷' },
          { es: '¿Dónde le duele?', ko: '어디가 아프세요?', tag: '같이 쓰는' },
          { es: '¿Qué tiene?', ko: '어디가 안 좋으세요?', tag: '비슷' }
        ],
        tip: 'le는 usted라서 존댓말이에요 (의사가 환자에게). 친구에게는 ¿Qué te pasa? pasar는 gustar처럼 "일"이 주어예요.',
        quiz: [
          { q: '(친구에게) "무슨 일 있어?"', a: '¿Qué te pasa?' }
        ]
      },
      {
        type: 'expr',
        es: 'gracias a…',
        ko: '~ 덕분에',
        memo: 'Gracias a = ~ 덕분에',
        examples: [
          { es: 'Gracias a ti, aprobé el examen.', ko: '네 덕분에 시험에 붙었어.' },
          { es: 'Gracias a la medicina, ya me encuentro mejor.', ko: '약 덕분에 이제 몸이 나아졌어요.' },
          { es: 'Llegamos a tiempo gracias al taxi.', ko: '택시 덕분에 제시간에 도착했어요.' }
        ],
        related: [
          { es: 'por culpa de', ko: '~ 탓에', tag: '반대' },
          { es: 'debido a', ko: '~ 때문에 (중립)', tag: '비슷' },
          { es: 'gracias por', ko: '~해 줘서 고마워 (Gracias por tu ayuda.)', tag: '헷갈림 주의' }
        ],
        tip: 'a + el = al: gracias al médico. 좋은 결과엔 gracias a, 나쁜 결과엔 por culpa de.',
        quiz: [
          { q: '"약 덕분에 나아졌어요"', a: 'Gracias a la medicina, estoy mejor.' }
        ]
      },
      {
        type: 'vocab',
        es: 'el servicio a domicilio',
        ko: '배달 서비스, 방문 서비스',
        memo: 'el servicio a domicilio = 배송서비스',
        examples: [
          { es: '¿Tienen servicio a domicilio?', ko: '배달 되나요?' },
          { es: 'La farmacia tiene servicio a domicilio.', ko: '그 약국은 배달 서비스가 있어요.' },
          { es: 'Esta noche pedimos la cena a domicilio.', ko: '오늘 밤엔 저녁을 배달시켜요.' }
        ],
        related: [
          { es: 'a domicilio', ko: '집으로 (배달·방문)', tag: '파생' },
          { es: 'el domicilio', ko: '주소, 사는 곳', tag: '파생' },
          { es: 'el envío', ko: '(택배) 배송', tag: '비슷' }
        ],
        tip: 'a domicilio = "집까지". 음식·약 배달, 방문 진료에도 써요. 택배 배송은 el envío가 더 자연스러워요.',
        quiz: [
          { q: '"배달 되나요?"', a: '¿Tienen servicio a domicilio?' }
        ]
      },
      {
        type: 'vocab',
        es: 'la receta',
        ko: '처방전 / (요리) 레시피',
        memo: 'la receta = 처방전',
        tables: [
          {
            title: '두 가지 뜻',
            head: ['뜻', '예문'],
            rows: [
              ['처방전', 'El médico me dio una receta.'],
              ['요리법, 레시피', 'Esta es la receta de mi abuela.']
            ]
          }
        ],
        examples: [
          { es: 'Sin receta no le puedo dar este medicamento.', ko: '처방전 없이는 이 약을 드릴 수 없어요.' },
          { es: 'El médico me hizo una receta para la tos.', ko: '의사가 기침약 처방전을 써 줬어요.' },
          { es: '¿Me das la receta de la tortilla?', ko: '토르티야 레시피 알려줄래?' }
        ],
        related: [
          { es: 'recetar', ko: '처방하다', tag: '파생' },
          { es: 'el medicamento', ko: '약', tag: '같이 쓰는' },
          { es: 'el recibo', ko: '영수증', tag: '헷갈림 주의' }
        ],
        tip: '"처방 없이 살 수 있는 약" = un medicamento sin receta.',
        quiz: [
          { q: '"처방전 있으세요?" (usted)', a: '¿Tiene receta?' }
        ]
      },
      {
        type: 'vocab',
        es: 'proporcionar = ofrecer',
        ko: '제공하다',
        memo: 'proprcionar = ofercer = 제공하다',
        tables: [
          {
            title: 'proporcionar 활용 (규칙동사)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'proporciono', 'proporcioné', 'proporcionaba'],
              ['tú', 'proporcionas', 'proporcionaste', 'proporcionabas'],
              ['él/ella/Ud.', 'proporciona', 'proporcionó', 'proporcionaba'],
              ['nosotros', 'proporcionamos', 'proporcionamos', 'proporcionábamos'],
              ['vosotros', 'proporcionáis', 'proporcionasteis', 'proporcionabais'],
              ['ellos/Uds.', 'proporcionan', 'proporcionaron', 'proporcionaban']
            ]
          },
          {
            title: 'ofrecer 활용 (yo만 불규칙: ofrezco)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'ofrezco', 'ofrecí', 'ofrecía'],
              ['tú', 'ofreces', 'ofreciste', 'ofrecías'],
              ['él/ella/Ud.', 'ofrece', 'ofreció', 'ofrecía'],
              ['nosotros', 'ofrecemos', 'ofrecimos', 'ofrecíamos'],
              ['vosotros', 'ofrecéis', 'ofrecisteis', 'ofrecíais'],
              ['ellos/Uds.', 'ofrecen', 'ofrecieron', 'ofrecían']
            ]
          }
        ],
        examples: [
          { es: 'El hotel proporciona toallas a los clientes.', ko: '호텔은 손님들에게 수건을 제공해요.' },
          { es: 'Te ofrezco mi ayuda.', ko: '내가 도와줄게.' },
          { es: 'La empresa me ofreció un trabajo.', ko: '그 회사가 나한테 일자리를 제안했어요.' }
        ],
        related: [
          { es: 'dar', ko: '주다', tag: '비슷' },
          { es: 'facilitar', ko: '제공하다, 쉽게 해 주다', tag: '비슷' },
          { es: 'la oferta', ko: '제안, 할인 상품', tag: '파생' }
        ],
        tip: 'proporcionar는 정보·서비스 제공에 쓰는 격식체, ofrecer는 "권하다, 제안하다"도 돼요: ¿Te ofrezco un café?',
        quiz: [
          { q: '"내가 도와줄게" (ofrecer)', a: 'Te ofrezco mi ayuda.' }
        ]
      },
      {
        type: 'expr',
        es: 'No lo dudes',
        ko: '망설이지 마, 의심하지 마',
        memo: 'no lo dudes = 의심하지마, 망설이지마',
        tables: [
          {
            title: '부정 명령 (no + 접속법)',
            head: ['tú (친구)', 'usted (존댓말)', '뜻'],
            rows: [
              ['no lo dudes', 'no lo dude', '망설이지 마'],
              ['no lo olvides', 'no lo olvide', '잊지 마'],
              ['no lo hagas', 'no lo haga', '하지 마'],
              ['no lo digas', 'no lo diga', '말하지 마']
            ]
          }
        ],
        examples: [
          { es: 'Si necesitas ayuda, no lo dudes: llámame.', ko: '도움 필요하면 망설이지 말고 전화해.' },
          { es: 'Es una buena oportunidad, no lo dudes.', ko: '좋은 기회야, 망설이지 마.' },
          { es: 'Si tiene alguna pregunta, no dude en llamarnos.', ko: '질문이 있으시면 주저 말고 연락 주세요.' }
        ],
        related: [
          { es: 'no dudes en + 동사원형', ko: '주저하지 말고 ~해', tag: '같이 쓰는' },
          { es: 'la duda', ko: '의심, 궁금한 점', tag: '파생' },
          { es: 'sin duda', ko: '틀림없이', tag: '파생' }
        ],
        tip: '부정 명령은 접속법을 써요: dudar → (no) dudes. 긍정 명령 "dúdalo"와 모양이 달라요.',
        quiz: [
          { q: '"질문 있으면 주저하지 말고 전화해" (tú)', a: 'Si tienes preguntas, no dudes en llamarme.' }
        ]
      },
      {
        type: 'vocab',
        es: 'el remedio casero',
        ko: '민간요법, 집에서 하는 처방',
        memo: 'el remedio casero = 민간요법',
        examples: [
          { es: 'Mi abuela conoce muchos remedios caseros.', ko: '할머니는 민간요법을 많이 아세요.' },
          { es: 'Un remedio casero para la tos es el té con miel.', ko: '기침에 좋은 민간요법은 꿀 넣은 차예요.' },
          { es: '¿Conoces algún remedio casero para dormir mejor?', ko: '잠 잘 자는 민간요법 아는 거 있어?' }
        ],
        related: [
          { es: 'casero/a', ko: '집에서 만든 (comida casera)', tag: '파생' },
          { es: 'el medicamento', ko: '약', tag: '비슷' },
          { es: 'no tener remedio', ko: '어쩔 수 없다, 구제불능이다', tag: '파생' }
        ],
        tip: 'remedio는 남성명사라 casero, comida는 여성이라 casera.',
        quiz: [
          { q: '"꿀은 좋은 민간요법이에요"', a: 'La miel es un buen remedio casero.' }
        ]
      },
      {
        type: 'vocab',
        es: 'compuesto/a (de / por)',
        ko: '~로 구성된, 이루어진',
        memo: 'compuesto = 구성된',
        examples: [
          { es: 'El equipo está compuesto por cinco personas.', ko: '팀은 다섯 명으로 구성돼 있어요.' },
          { es: 'Es un remedio compuesto de miel y limón.', ko: '꿀과 레몬으로 만든 요법이에요.' },
          { es: 'La comida está compuesta de tres platos.', ko: '식사는 세 가지 요리로 구성돼요.' }
        ],
        related: [
          { es: 'componer', ko: '구성하다, 작곡하다', tag: '파생' },
          { es: 'formado/a por', ko: '~로 이루어진', tag: '비슷' },
          { es: 'estar hecho/a de', ko: '~로 만들어지다', tag: '비슷' }
        ],
        tip: '보통 estar compuesto de/por로 써요. 성·수 일치: compuesta, compuestos.',
        quiz: [
          { q: '"이 수업은 학생 열 명으로 구성돼 있어요"', a: 'La clase está compuesta por diez estudiantes.' }
        ]
      },
      {
        type: 'vocab',
        es: 'conocido/a',
        ko: '잘 알려진, 유명한 / (명사) 아는 사람',
        memo: 'conocido = 잘 알려진',
        examples: [
          { es: 'Es un remedio muy conocido.', ko: '아주 잘 알려진 민간요법이에요.' },
          { es: 'Es una cantante muy conocida en España.', ko: '스페인에서 아주 유명한 가수예요.' },
          { es: 'Un conocido mío trabaja en esa farmacia.', ko: '제 지인이 그 약국에서 일해요.' }
        ],
        related: [
          { es: 'famoso/a', ko: '유명한', tag: '비슷' },
          { es: 'desconocido/a', ko: '알려지지 않은, 낯선 사람', tag: '반대' },
          { es: 'conocer', ko: '알다', tag: '파생' }
        ],
        tip: '명사로 쓰면 "지인(아는 사람)" — 친구(amigo)보다 덜 가까운 사이.',
        quiz: [
          { q: '"그녀는 아주 유명한 의사예요"', a: 'Es una médica muy conocida.' }
        ]
      },
      {
        type: 'expr',
        es: 'No lo olvides',
        ko: '잊지 마',
        memo: 'No lo olvides = 잊지마',
        tables: [
          {
            title: 'olvidar 활용 (규칙동사)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'olvido', 'olvidé', 'olvidaba'],
              ['tú', 'olvidas', 'olvidaste', 'olvidabas'],
              ['él/ella/Ud.', 'olvida', 'olvidó', 'olvidaba'],
              ['nosotros', 'olvidamos', 'olvidamos', 'olvidábamos'],
              ['vosotros', 'olvidáis', 'olvidasteis', 'olvidabais'],
              ['ellos/Uds.', 'olvidan', 'olvidaron', 'olvidaban']
            ]
          }
        ],
        examples: [
          { es: 'Mañana es el cumpleaños de mamá, no lo olvides.', ko: '내일 엄마 생신이야, 잊지 마.' },
          { es: 'No olvides el paraguas.', ko: '우산 잊지 마.' },
          { es: 'Se me olvidó la receta en casa.', ko: '처방전을 집에 깜빡 두고 왔어요.' }
        ],
        related: [
          { es: 'olvidarse de', ko: '~를 잊다', tag: '비슷' },
          { es: 'se me olvidó', ko: '(깜빡) 잊어버렸어', tag: '같이 쓰는' },
          { es: 'recordar', ko: '기억하다', tag: '반대' }
        ],
        tip: 'lo는 "그것". 명사를 바로 말할 땐 lo 없이: No olvides las llaves. usted에게는 No lo olvide.',
        quiz: [
          { q: '"열쇠 잊지 마" (tú)', a: 'No olvides las llaves.' }
        ]
      },
      {
        type: 'expr',
        es: '¿Qué le ha pasado?',
        ko: '무슨 일이 있었어요? 어떻게 된 거예요?',
        memo: '?Que le ha pasado? = 무슨 일 있어?',
        tables: [
          {
            title: 'pasa vs ha pasado',
            head: ['스페인어', '쓰임'],
            rows: [
              ['¿Qué le pasa?', '지금 상태 (어디가 안 좋으세요?)'],
              ['¿Qué le ha pasado?', '방금·오늘 일어난 일 (무슨 일이 있었어요?)'],
              ['¿Qué le pasó?', '지난 일 (중남미에서는 방금 일에도 많이 씀)']
            ]
          }
        ],
        examples: [
          { es: '¿Qué le ha pasado en la pierna?', ko: '다리는 어떻게 되신 거예요?' },
          { es: '¿Qué te ha pasado? Estás muy pálida.', ko: '무슨 일 있었어? 얼굴이 너무 창백해.' },
          { es: 'No sé qué ha pasado.', ko: '무슨 일이 있었는지 모르겠어요.' }
        ],
        related: [
          { es: '¿Qué le pasa?', ko: '어디가 안 좋으세요? (현재)', tag: '비슷' },
          { es: '¿Qué pasó?', ko: '무슨 일이었어? (단순과거)', tag: '비슷' },
          { es: '¿Estás bien?', ko: '괜찮아?', tag: '같이 쓰는' }
        ],
        tip: 'le = usted라서 존댓말이에요. 친구에겐 ¿Qué te ha pasado?',
        quiz: [
          { q: '(친구에게) "무슨 일 있었어?"', a: '¿Qué te ha pasado?' }
        ]
      },
      {
        type: 'expr',
        es: 'No sabía nada',
        ko: '전혀 몰랐어',
        memo: 'No sabia nada = 전혀 몰랐어',
        tables: [
          {
            title: 'saber 활용 (불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'sé', 'supe', 'sabía'],
              ['tú', 'sabes', 'supiste', 'sabías'],
              ['él/ella/Ud.', 'sabe', 'supo', 'sabía'],
              ['nosotros', 'sabemos', 'supimos', 'sabíamos'],
              ['vosotros', 'sabéis', 'supisteis', 'sabíais'],
              ['ellos/Uds.', 'saben', 'supieron', 'sabían']
            ]
          }
        ],
        examples: [
          { es: '¿Te casas? ¡No sabía nada!', ko: '결혼한다고? 전혀 몰랐어!' },
          { es: 'No sabía que estabas enfermo.', ko: '네가 아픈 줄 몰랐어.' },
          { es: 'Cuando llegué a España, no sabía nada de español.', ko: '스페인에 왔을 때 스페인어를 하나도 몰랐어요.' }
        ],
        related: [
          { es: 'no tenía ni idea', ko: '전혀 몰랐어', tag: '비슷' },
          { es: 'ya lo sabía', ko: '이미 알고 있었어', tag: '반대' },
          { es: 'me enteré', ko: '(소식을) 알게 됐어', tag: '같이 쓰는' }
        ],
        tip: '"몰랐던 상태"라서 불완료과거 sabía예요. no … nada처럼 부정어를 두 번 써도 맞아요.',
        quiz: [
          { q: '"네가 아픈 줄 몰랐어"', a: 'No sabía que estabas enfermo/a.' }
        ]
      },
      {
        type: 'expr',
        es: 'Estoy muy estresado/a',
        ko: '스트레스를 많이 받고 있어요',
        memo: 'estoy mus extresado = 스트레스를 많이 받는다.',
        examples: [
          { es: 'Estoy muy estresada por el trabajo.', ko: '일 때문에 스트레스를 많이 받고 있어요.' },
          { es: 'Últimamente mi hermano está muy estresado.', ko: '요즘 오빠(형)가 스트레스를 많이 받아요.' },
          { es: 'Cuando estoy estresada, como mucho chocolate.', ko: '스트레스 받으면 초콜릿을 많이 먹어요.' }
        ],
        related: [
          { es: 'el estrés', ko: '스트레스', tag: '파생' },
          { es: 'estresarse', ko: '스트레스 받다', tag: '파생' },
          { es: 'estar relajado/a', ko: '편안하다', tag: '반대' },
          { es: 'tener mucho estrés', ko: '스트레스가 많다', tag: '비슷' }
        ],
        tip: '스페인어는 s+자음으로 시작 못 해서 앞에 e를 붙여요: estrés, estresado ("ex-" 아님). 이유는 por: estresada por los exámenes.',
        quiz: [
          { q: '"시험 때문에 스트레스를 많이 받아요" (여자)', a: 'Estoy muy estresada por los exámenes.' }
        ]
      },
      {
        type: 'vocab',
        es: 'adaptarse (a)',
        ko: '(~에) 적응하다',
        memo: 'adaptarse = 적응하다',
        tables: [
          {
            title: 'adaptarse 활용 (규칙, 재귀동사)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'me adapto', 'me adapté', 'me adaptaba'],
              ['tú', 'te adaptas', 'te adaptaste', 'te adaptabas'],
              ['él/ella/Ud.', 'se adapta', 'se adaptó', 'se adaptaba'],
              ['nosotros', 'nos adaptamos', 'nos adaptamos', 'nos adaptábamos'],
              ['vosotros', 'os adaptáis', 'os adaptasteis', 'os adaptabais'],
              ['ellos/Uds.', 'se adaptan', 'se adaptaron', 'se adaptaban']
            ]
          }
        ],
        examples: [
          { es: 'Me adapté rápidamente a la nueva ciudad.', ko: '새 도시에 빨리 적응했어요.' },
          { es: 'Es difícil adaptarse a otro horario.', ko: '다른 시간대에 적응하는 건 어려워요.' },
          { es: 'Los niños se adaptan muy fácilmente.', ko: '아이들은 아주 쉽게 적응해요.' }
        ],
        related: [
          { es: 'acostumbrarse a', ko: '~에 익숙해지다', tag: '비슷' },
          { es: 'la adaptación', ko: '적응', tag: '파생' },
          { es: 'adaptar', ko: '맞추다, 각색하다', tag: '같은 동사' }
        ],
        tip: '항상 a와 함께: adaptarse a algo. 재귀대명사도 빼먹지 마세요.',
        quiz: [
          { q: '"한국 음식에 적응했어요" (단순과거)', a: 'Me adapté a la comida coreana.' }
        ]
      },
      {
        type: 'vocab',
        es: 'complicado/a',
        ko: '복잡한, 어려운',
        memo: 'complicado = 복잡한',
        examples: [
          { es: 'La gramática española es un poco complicada.', ko: '스페인어 문법은 좀 복잡해요.' },
          { es: 'Hoy ha sido un día muy complicado.', ko: '오늘은 정말 힘든 하루였어요.' },
          { es: 'No es tan complicado como parece.', ko: '보기만큼 복잡하지 않아요.' }
        ],
        related: [
          { es: 'difícil', ko: '어려운', tag: '비슷' },
          { es: 'sencillo/a, fácil', ko: '간단한, 쉬운', tag: '반대' },
          { es: 'complicarse', ko: '복잡해지다', tag: '파생' }
        ],
        tip: '"힘든 하루, 힘든 상황"처럼 사정이 꼬였을 때도 잘 써요. 명사 성에 맞춰 complicada.',
        quiz: [
          { q: '"스페인어 문법은 복잡해요"', a: 'La gramática española es complicada.' }
        ]
      },
      {
        type: 'expr',
        es: 'tener molestias en…',
        ko: '(몸의 어느 부위)가 불편하다, 좀 아프다',
        memo: 'tener molestias en = ~에 대해 불편함을 느끼다',
        tables: [
          {
            title: 'tener 활용 (불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'tengo', 'tuve', 'tenía'],
              ['tú', 'tienes', 'tuviste', 'tenías'],
              ['él/ella/Ud.', 'tiene', 'tuvo', 'tenía'],
              ['nosotros', 'tenemos', 'tuvimos', 'teníamos'],
              ['vosotros', 'tenéis', 'tuvisteis', 'teníais'],
              ['ellos/Uds.', 'tienen', 'tuvieron', 'tenían']
            ]
          }
        ],
        examples: [
          { es: 'Tengo molestias en el estómago.', ko: '배(위)가 좀 불편해요.' },
          { es: 'Desde ayer tengo molestias en la espalda.', ko: '어제부터 허리가 좀 불편해요.' },
          { es: '¿Tiene molestias al comer?', ko: '드실 때 불편하세요?' }
        ],
        related: [
          { es: 'doler', ko: '아프다 (Me duele la espalda.) — 더 강한 통증', tag: '비슷' },
          { es: 'la molestia', ko: '불편함, 가벼운 통증', tag: '파생' },
          { es: 'molestar', ko: '귀찮게 하다, 방해하다', tag: '파생' }
        ],
        tip: 'en 뒤에는 "몸의 부위"가 와요: en el estómago, en la garganta. 진짜 아프면 doler, 살짝 불편하면 molestias.',
        quiz: [
          { q: '"목이 좀 불편해요"', a: 'Tengo molestias en la garganta.' }
        ]
      },
      {
        type: 'expr',
        es: 'dar recuerdos a…',
        ko: '~에게 안부를 전하다',
        memo: 'dar recuerdos a = ~에게 안부 전해줘.',
        tables: [
          {
            title: 'dar 활용 (불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'doy', 'di', 'daba'],
              ['tú', 'das', 'diste', 'dabas'],
              ['él/ella/Ud.', 'da', 'dio', 'daba'],
              ['nosotros', 'damos', 'dimos', 'dábamos'],
              ['vosotros', 'dais', 'disteis', 'dabais'],
              ['ellos/Uds.', 'dan', 'dieron', 'daban']
            ]
          }
        ],
        examples: [
          { es: 'Dale recuerdos a tu madre.', ko: '어머니께 안부 전해 줘.' },
          { es: 'Mis padres te dan recuerdos.', ko: '우리 부모님이 안부 전하래.' },
          { es: 'Da recuerdos a todos de mi parte.', ko: '모두에게 내 안부 전해 줘.' }
        ],
        related: [
          { es: 'saludar a', ko: '~에게 인사하다', tag: '비슷' },
          { es: 'Saludos a…', ko: '~에게 안부를 (짧은 버전)', tag: '비슷' },
          { es: 'el recuerdo', ko: '추억, 기념품', tag: '파생' }
        ],
        tip: '"안부 전해 줘"는 명령형 Dale recuerdos a…(le = 그 사람에게). recuerdos는 항상 복수.',
        quiz: [
          { q: '"너희 아버지께 안부 전해 줘"', a: 'Dale recuerdos a tu padre.' }
        ]
      },
      {
        type: 'expr',
        es: 'por otro lado = por otra parte',
        ko: '한편으로는, 다른 한편으로',
        memo: 'por otro lado = por otro parte = 다른 한 편으로',
        tables: [
          {
            title: '짝으로 쓰기',
            head: ['스페인어', '뜻'],
            rows: [
              ['por un lado…, por otro (lado)…', '한편으로는 …, 다른 한편으로는 …'],
              ['por una parte…, por otra (parte)…', '같은 뜻']
            ]
          }
        ],
        examples: [
          { es: 'Por un lado, quiero viajar; por otro lado, no tengo dinero.', ko: '한편으로는 여행 가고 싶지만, 다른 한편으로는 돈이 없어요.' },
          { es: 'El piso es pequeño. Por otra parte, está muy bien situado.', ko: '집은 작아요. 한편, 위치는 아주 좋아요.' },
          { es: 'Por otra parte, tienes que descansar más.', ko: '그리고 또, 너는 좀 더 쉬어야 해.' }
        ],
        related: [
          { es: 'además', ko: '게다가', tag: '비슷' },
          { es: 'en cambio', ko: '반면에', tag: '비슷' },
          { es: 'sin embargo', ko: '하지만', tag: '비슷' }
        ],
        tip: 'parte는 여성명사라 por otra parte예요 ("otro parte" X). lado는 남성이라 otro lado.',
        quiz: [
          { q: '"한편으로는 피곤하지만, 다른 한편으로는 행복해요"', a: 'Por un lado estoy cansada; por otro lado, estoy feliz.' }
        ]
      },
      {
        type: 'expr',
        es: 'bajar (de) peso = perder peso',
        ko: '살을 빼다',
        memo: 'bajar peso = perder peso = 살을 빼다',
        tables: [
          {
            title: 'perder 활용 (e→ie 불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'pierdo', 'perdí', 'perdía'],
              ['tú', 'pierdes', 'perdiste', 'perdías'],
              ['él/ella/Ud.', 'pierde', 'perdió', 'perdía'],
              ['nosotros', 'perdemos', 'perdimos', 'perdíamos'],
              ['vosotros', 'perdéis', 'perdisteis', 'perdíais'],
              ['ellos/Uds.', 'pierden', 'perdieron', 'perdían']
            ]
          }
        ],
        examples: [
          { es: 'Quiero bajar de peso antes del verano.', ko: '여름 전에 살을 빼고 싶어요.' },
          { es: 'He perdido tres kilos este mes.', ko: '이번 달에 3킬로 빠졌어요.' },
          { es: 'Para perder peso, es bueno caminar todos los días.', ko: '살 빼려면 매일 걷는 게 좋아요.' }
        ],
        related: [
          { es: 'adelgazar', ko: '살이 빠지다, 날씬해지다', tag: '비슷' },
          { es: 'subir de peso / engordar', ko: '살이 찌다', tag: '반대' },
          { es: 'ponerse a dieta', ko: '다이어트를 시작하다', tag: '같이 쓰는' }
        ],
        tip: 'bajar peso, bajar de peso 둘 다 써요. 몇 킬로 빠졌는지는 perder: He perdido dos kilos.',
        quiz: [
          { q: '"살이 찌다"를 스페인어로 두 가지', a: 'subir de peso / engordar (ganar peso)' }
        ]
      },
      {
        type: 'expr',
        es: 'es bueno / malo para…',
        ko: '~에 좋다 / 안 좋다',
        memo: 'Es bueno/malo para = ~에 좋다/안 좋다',
        tables: [
          {
            title: '형태',
            head: ['형태', '예문', '뜻'],
            rows: [
              ['A es bueno para + 명사', 'El té es bueno para la garganta.', '차는 목에 좋아요.'],
              ['A es malo para + 동사원형', 'El café es malo para dormir.', '커피는 잠자는 데 안 좋아요.'],
              ['Es bueno + 동사원형', 'Es bueno caminar.', '걷는 건 좋아요.'],
              ['A son buenos/as para…', 'Las verduras son buenas para la salud.', '채소는 건강에 좋아요.']
            ]
          }
        ],
        examples: [
          { es: 'El té de jengibre es bueno para el estómago.', ko: '생강차는 위에 좋아요.' },
          { es: 'Dormir poco es malo para la salud.', ko: '잠을 적게 자는 건 건강에 안 좋아요.' },
          { es: 'Es bueno caminar después de comer.', ko: '식후에 걷는 건 좋아요.' }
        ],
        related: [
          { es: 'sentar bien / mal', ko: '(음식이 몸에) 맞다 / 안 맞다', tag: '비슷' },
          { es: 'sano/a', ko: '건강한, 몸에 좋은', tag: '비슷' },
          { es: 'la salud', ko: '건강', tag: '같이 쓰는' }
        ],
        tip: '주어가 복수·여성이면 형용사도 맞춰요: Las frutas son buenas para…',
        quiz: [
          { q: '"커피는 위에 안 좋아요"', a: 'El café es malo para el estómago.' }
        ]
      },
      {
        type: 'expr',
        es: 'combinar con todo',
        ko: '뭐에나 잘 어울리다',
        memo: 'combinar con todo = 잘 어울리다',
        tables: [
          {
            title: 'combinar 활용 (규칙동사)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'combino', 'combiné', 'combinaba'],
              ['tú', 'combinas', 'combinaste', 'combinabas'],
              ['él/ella/Ud.', 'combina', 'combinó', 'combinaba'],
              ['nosotros', 'combinamos', 'combinamos', 'combinábamos'],
              ['vosotros', 'combináis', 'combinasteis', 'combinabais'],
              ['ellos/Uds.', 'combinan', 'combinaron', 'combinaban']
            ]
          }
        ],
        examples: [
          { es: 'El negro combina con todo.', ko: '검정은 뭐에나 잘 어울려요.' },
          { es: 'Esta camisa no combina con los pantalones.', ko: '이 셔츠는 바지랑 안 어울려요.' },
          { es: 'Estos zapatos combinan con todo.', ko: '이 신발은 아무 옷에나 잘 어울려요.' }
        ],
        related: [
          { es: 'quedar bien a alguien', ko: '(사람에게) 잘 어울리다 (Te queda bien.)', tag: '헷갈림 주의' },
          { es: 'ir bien con', ko: '~와 잘 맞다', tag: '비슷' },
          { es: 'la combinación', ko: '조합', tag: '파생' }
        ],
        tip: '물건끼리 어울림 = combinar con, 사람에게 어울림 = quedar bien. "그 옷 너한테 잘 어울려" = Te queda muy bien.',
        quiz: [
          { q: '"이 가방은 뭐에나 잘 어울려요"', a: 'Este bolso combina con todo.' }
        ]
      },
      {
        type: 'expr',
        es: 'Voy a ir a la boda de mi hermano, así que quiero ponerme algo oscuro porque es un color elegante y combina con todo.',
        ko: '오빠(형/남동생) 결혼식에 갈 거라서 어두운 옷을 입고 싶어요. 우아하고 뭐에나 잘 어울리는 색이거든요.',
        memo: 'voy a ir a la boda de mi hermano, asi que quiero ponerme algo oscuro porque es un color elegante y combina con todo = 내 형제의 결혼식에 갈거야. 그래서 어두운 옷이 필요해. 왜냐하면 우아하고, 잘 어울려서.',
        tables: [
          {
            title: '연결어',
            head: ['스페인어', '뜻', '예문'],
            rows: [
              ['así que', '그래서 (결과)', 'Hace frío, así que me pongo el abrigo.'],
              ['porque', '왜냐하면 (이유)', 'Me lo pongo porque es cómodo.'],
              ['por eso', '그래서, 그 때문에', 'Llueve. Por eso no salgo.']
            ]
          },
          {
            title: 'ponerse (옷을) 입다 — 불규칙',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'me pongo', 'me puse', 'me ponía'],
              ['tú', 'te pones', 'te pusiste', 'te ponías'],
              ['él/ella/Ud.', 'se pone', 'se puso', 'se ponía'],
              ['nosotros', 'nos ponemos', 'nos pusimos', 'nos poníamos'],
              ['vosotros', 'os ponéis', 'os pusisteis', 'os poníais'],
              ['ellos/Uds.', 'se ponen', 'se pusieron', 'se ponían']
            ]
          }
        ],
        examples: [
          { es: 'Voy a una entrevista, así que quiero ponerme algo formal.', ko: '면접 보러 가니까 격식 있는 옷을 입고 싶어요.' },
          { es: 'Me pongo el vestido negro porque es elegante.', ko: '우아해서 검은 원피스를 입어요.' },
          { es: 'Hace frío, así que voy a ponerme el abrigo.', ko: '추우니까 코트를 입을 거예요.' }
        ],
        related: [
          { es: 'ponerse + 옷', ko: '(옷을) 입다 (동작)', tag: '같이 쓰는' },
          { es: 'llevar + 옷', ko: '(옷을) 입고 있다 (상태)', tag: '헷갈림 주의' },
          { es: 'algo + 형용사', ko: '~한 것 (algo oscuro, algo cómodo)', tag: '같이 쓰는' }
        ],
        tip: 'querer는 "원하다"라서 "입고 싶어"가 맞아요 ("필요해"는 necesitar). algo 뒤 형용사는 항상 남성 단수: algo oscuro.',
        quiz: [
          { q: '"결혼식에 가니까 우아한 걸 입고 싶어요"', a: 'Voy a ir a una boda, así que quiero ponerme algo elegante.' }
        ]
      },
      {
        type: 'expr',
        es: '¿Tiene algún descuento?',
        ko: '할인 있나요?',
        memo: '?Tiene algun descuento? = 할인 있어요?',
        tables: [
          {
            title: 'alguno 형태 변화',
            head: ['형태', '뒤에 오는 말', '예'],
            rows: [
              ['algún', '남성 단수', 'algún descuento'],
              ['alguna', '여성 단수', 'alguna oferta'],
              ['algunos', '남성 복수', 'algunos días'],
              ['algunas', '여성 복수', 'algunas tiendas']
            ]
          }
        ],
        examples: [
          { es: '¿Tiene algún descuento para estudiantes?', ko: '학생 할인 있나요?' },
          { es: 'Hoy hay un descuento del veinte por ciento.', ko: '오늘 20% 할인이 있어요.' },
          { es: '¿Hay alguna oferta esta semana?', ko: '이번 주에 할인 상품 있나요?' }
        ],
        related: [
          { es: 'las rebajas', ko: '세일 (기간)', tag: '비슷' },
          { es: 'la oferta', ko: '특가, 할인 상품', tag: '비슷' },
          { es: '¿Me hace un descuento?', ko: '좀 깎아 주실 수 있어요?', tag: '같이 쓰는' }
        ],
        tip: 'alguno는 남성 단수 명사 앞에서 o가 떨어지고 강세가 붙어요: algún.',
        quiz: [
          { q: '"학생 할인 있나요?"', a: '¿Tiene algún descuento para estudiantes?' }
        ]
      },
      {
        type: 'expr',
        es: '¿Cuánto quiere gastar?',
        ko: '얼마 정도 쓰실 생각이세요? (예산이 어떻게 되세요?)',
        memo: '?Cuanto quiere gastar? = 얼마나 소비하고 싶으세요?',
        tables: [
          {
            title: 'gastar 활용 (규칙동사)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'gasto', 'gasté', 'gastaba'],
              ['tú', 'gastas', 'gastaste', 'gastabas'],
              ['él/ella/Ud.', 'gasta', 'gastó', 'gastaba'],
              ['nosotros', 'gastamos', 'gastamos', 'gastábamos'],
              ['vosotros', 'gastáis', 'gastasteis', 'gastabais'],
              ['ellos/Uds.', 'gastan', 'gastaron', 'gastaban']
            ]
          }
        ],
        examples: [
          { es: '—¿Cuánto quiere gastar? —Unos cien euros.', ko: '—얼마 정도 생각하세요? —100유로 정도요.' },
          { es: 'Gasto mucho dinero en ropa.', ko: '옷에 돈을 많이 써요.' },
          { es: 'Ayer gasté demasiado.', ko: '어제 돈을 너무 많이 썼어요.' }
        ],
        related: [
          { es: 'ahorrar', ko: '저축하다, 아끼다', tag: '반대' },
          { es: 'el presupuesto', ko: '예산', tag: '같이 쓰는' },
          { es: 'el gasto', ko: '지출', tag: '파생' }
        ],
        tip: '"~에 돈을 쓰다"는 gastar dinero en + 물건. 가게 직원이 손님에게 묻는 말이라 quiere(usted).',
        quiz: [
          { q: '"옷에 돈을 많이 써요"', a: 'Gasto mucho dinero en ropa.' }
        ]
      },
      {
        type: 'expr',
        es: 'Quiero un traje elegante, pero cómodo, porque voy a estar muchas horas en la fiesta.',
        ko: '우아하지만 편한 정장을 원해요. 파티에 오래 있을 거라서요.',
        memo: 'Quiero un traje elegante, pero comodo porque voy a estar muchas horas en la fiesta = 우아하지만 편한 정장이 필요해. 왜냐하면 그 파티에 오래 있을 거거든.',
        tables: [
          {
            title: 'cómodo 성·수 일치',
            head: ['명사', '형용사'],
            rows: [
              ['un traje (남성 단수)', 'cómodo'],
              ['una chaqueta (여성 단수)', 'cómoda'],
              ['unos zapatos (남성 복수)', 'cómodos'],
              ['unas botas (여성 복수)', 'cómodas']
            ]
          }
        ],
        examples: [
          { es: 'Busco unos zapatos bonitos, pero cómodos.', ko: '예쁘지만 편한 신발을 찾고 있어요.' },
          { es: 'Mañana voy a estar muchas horas de pie.', ko: '내일은 오랫동안 서 있을 거예요.' },
          { es: 'Quiero un vestido sencillo, pero elegante.', ko: '심플하지만 우아한 원피스를 원해요.' }
        ],
        related: [
          { es: 'el traje', ko: '정장 (남녀 모두)', tag: '같이 쓰는' },
          { es: 'el vestido', ko: '원피스, 드레스', tag: '헷갈림 주의' },
          { es: 'incómodo/a', ko: '불편한', tag: '반대' }
        ],
        tip: 'cómodo는 ó에 강세! "~할 거라서"는 porque voy a + 동사원형. hora는 여성이라 muchas horas.',
        quiz: [
          { q: '"예쁘지만 편한 신발을 원해요"', a: 'Quiero unos zapatos bonitos, pero cómodos.' }
        ]
      },
      {
        type: 'expr',
        es: '¿Puede examinarme?',
        ko: '진찰해 주시겠어요?',
        memo: '?Puede examinarme? = 나 진찰해줄 수 있어?',
        tables: [
          {
            title: '대명사 위치 — 둘 다 맞아요',
            head: ['동사원형 뒤에 붙이기', '동사 앞에 두기'],
            rows: [
              ['¿Puede examinarme?', '¿Me puede examinar?'],
              ['¿Puedes ayudarme?', '¿Me puedes ayudar?'],
              ['Voy a llamarte.', 'Te voy a llamar.']
            ]
          }
        ],
        examples: [
          { es: 'Doctora, ¿puede examinarme la garganta?', ko: '선생님, 목 좀 봐 주시겠어요?' },
          { es: 'El médico me examinó y me dio una receta.', ko: '의사가 진찰하고 처방전을 줬어요.' },
          { es: 'Mañana tengo un examen de español.', ko: '내일 스페인어 시험이 있어요.' }
        ],
        related: [
          { es: 'el examen', ko: '시험, 검사', tag: '파생' },
          { es: 'revisar', ko: '살펴보다, 점검하다', tag: '비슷' },
          { es: 'la consulta', ko: '진료, 진료실', tag: '같이 쓰는' }
        ],
        tip: 'puede는 usted(존댓말)이라 의사에게 쓰기 좋아요. 친구에게는 ¿Puedes…?',
        quiz: [
          { q: '"도와주시겠어요?" (usted, 두 가지)', a: '¿Puede ayudarme? / ¿Me puede ayudar?' }
        ]
      },
      {
        type: 'expr',
        es: '¿Puedo comer algo picante?',
        ko: '매운 거 먹어도 돼요?',
        memo: '?Puedo comer algo picante? = 매운 거 먹어도 돼?',
        tables: [
          {
            title: 'algo / nada + 형용사',
            head: ['스페인어', '뜻'],
            rows: [
              ['algo picante', '매운 것'],
              ['algo ligero', '가벼운 것'],
              ['algo caliente', '따뜻한 것'],
              ['nada picante', '매운 건 아무것도 (안)']
            ]
          }
        ],
        examples: [
          { es: '—¿Puedo comer algo picante? —No, mejor algo ligero.', ko: '—매운 거 먹어도 돼요? —아니요, 가벼운 게 좋아요.' },
          { es: '¿Quieres tomar algo caliente?', ko: '따뜻한 거 마실래?' },
          { es: 'Esta semana no puedo comer nada picante.', ko: '이번 주엔 매운 걸 하나도 못 먹어요.' }
        ],
        related: [
          { es: 'picar', ko: '맵다 (Esto pica mucho.)', tag: '파생' },
          { es: 'suave', ko: '순한, 안 매운', tag: '반대' },
          { es: '¿Puedo + 동사원형?', ko: '~해도 돼요? (허락)', tag: '같이 쓰는' }
        ],
        tip: '¿Puedo + 동사원형? = "~해도 돼요?" 허락을 구하는 가장 쉬운 표현이에요.',
        quiz: [
          { q: '"커피 마셔도 돼요?"', a: '¿Puedo tomar café?' }
        ]
      },
      {
        type: 'expr',
        es: 'Voy a cancelar la cita',
        ko: '예약(약속)을 취소할 거예요',
        memo: 'voy a cancelar la cita = 예약, 약속을 취소하다.',
        tables: [
          {
            title: 'cita와 함께 쓰는 동사',
            head: ['스페인어', '뜻'],
            rows: [
              ['pedir cita', '(병원·미용실) 예약하다'],
              ['tener cita', '예약이 있다'],
              ['cambiar la cita', '예약을 변경하다'],
              ['cancelar la cita', '예약을 취소하다']
            ]
          },
          {
            title: 'cancelar 활용 (규칙동사)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'cancelo', 'cancelé', 'cancelaba'],
              ['tú', 'cancelas', 'cancelaste', 'cancelabas'],
              ['él/ella/Ud.', 'cancela', 'canceló', 'cancelaba'],
              ['nosotros', 'cancelamos', 'cancelamos', 'cancelábamos'],
              ['vosotros', 'canceláis', 'cancelasteis', 'cancelabais'],
              ['ellos/Uds.', 'cancelan', 'cancelaron', 'cancelaban']
            ]
          }
        ],
        examples: [
          { es: 'Estoy enferma, así que voy a cancelar la cita.', ko: '아파서 예약을 취소할 거예요.' },
          { es: 'Quiero pedir cita con el médico.', ko: '진료 예약을 하고 싶어요.' },
          { es: 'Tuve que cancelar la cita con el dentista.', ko: '치과 예약을 취소해야 했어요.' }
        ],
        related: [
          { es: 'anular', ko: '취소하다', tag: '비슷' },
          { es: 'la reserva', ko: '(식당·호텔) 예약', tag: '헷갈림 주의' },
          { es: 'la cita', ko: '(병원) 예약 / (사람과의) 약속, 데이트', tag: '같이 쓰는' }
        ],
        tip: 'voy a + 동사원형 = "~할 거예요"(가까운 미래). 병원·미용실은 cita, 식당·호텔은 reserva.',
        quiz: [
          { q: '"치과 예약을 취소할 거예요"', a: 'Voy a cancelar la cita con el dentista.' }
        ]
      }
    ]
  },
  {
    id: '2026-10-26',
    date: '2026-10-26',
    title: '생활 습관과 변화 이야기하기',
    summary: '내 생활 방식, 어려운 것, 몸에 맞는 음식, 에너지, 감정 변화를 말하는 표현들.',
    items: [
      {
        type: 'expr',
        es: 'llevar una vida + 형용사',
        ko: '~한 삶을 살다',
        memo: 'Llevo una vida =~한 삶을 살다',
        tables: [
          {
            title: 'vida 뒤에 자주 붙는 형용사',
            head: ['스페인어', '뜻'],
            rows: [
              ['una vida tranquila', '평온한 삶'],
              ['una vida sana', '건강한 삶'],
              ['una vida activa', '활동적인 삶'],
              ['una vida sedentaria', '거의 움직이지 않는 삶'],
              ['una vida ordenada / desordenada', '규칙적인 / 불규칙한 삶'],
              ['una vida estresante', '스트레스 많은 삶']
            ]
          },
          {
            title: 'llevar 활용 (규칙동사)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'llevo', 'llevé', 'llevaba'],
              ['tú', 'llevas', 'llevaste', 'llevabas'],
              ['él/ella/Ud.', 'lleva', 'llevó', 'llevaba'],
              ['nosotros', 'llevamos', 'llevamos', 'llevábamos'],
              ['vosotros', 'lleváis', 'llevasteis', 'llevabais'],
              ['ellos/Uds.', 'llevan', 'llevaron', 'llevaban']
            ]
          }
        ],
        examples: [
          { es: 'Quiero llevar una vida más sana.', ko: '더 건강하게 살고 싶어요.' },
          { es: 'Desde que vivo en el campo, llevo una vida más tranquila.', ko: '시골에 산 뒤로 더 평온하게 살고 있어요.' },
          { es: 'Cuando era estudiante, llevaba una vida muy desordenada.', ko: '학생 때는 아주 불규칙하게 살았어요.' }
        ],
        related: [
          { es: 'tener una vida + 형용사', ko: '~한 삶을 가지다', tag: '비슷' },
          { es: 'el estilo de vida', ko: '라이프스타일, 생활 방식', tag: '같이 쓰는' },
          { es: 'llevar + 기간 + -ando', ko: '~한 지 (기간)째 (Llevo dos años estudiando.)', tag: '헷갈림 주의' },
          { es: 'llevar', ko: '가져가다 / (옷을) 입고 있다', tag: '같은 동사' }
        ],
        tip: 'vida 뒤에 형용사를 꼭 붙여요. "Llevo una vida."로 끝내면 어색해요. vida는 여성명사라 형용사도 -a로: tranquila, sana.',
        quiz: [
          { q: '"저는 건강한 삶을 살고 있어요"', a: 'Llevo una vida sana.' },
          { q: '"학생 때는 불규칙하게 살았어요" (불완료과거)', a: 'Cuando era estudiante, llevaba una vida desordenada.' }
        ]
      },
      {
        type: 'expr',
        es: 'me cuesta + 동사원형',
        ko: '~하는 게 어렵다, 힘들다',
        memo: 'me cuesta/n + 동사원형 = ~ 하는 게 어렵다',
        tables: [
          {
            title: '누구에게 어려운지 (gustar와 같은 구조, o→ue 불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['a mí', 'me cuesta', 'me costó', 'me costaba'],
              ['a ti', 'te cuesta', 'te costó', 'te costaba'],
              ['a él/ella/Ud.', 'le cuesta', 'le costó', 'le costaba'],
              ['a nosotros', 'nos cuesta', 'nos costó', 'nos costaba'],
              ['a vosotros', 'os cuesta', 'os costó', 'os costaba'],
              ['a ellos/Uds.', 'les cuesta', 'les costó', 'les costaba']
            ]
          },
          {
            title: 'cuesta / cuestan 고르기',
            head: ['뒤에 오는 것', '형태', '예문'],
            rows: [
              ['동사원형', 'cuesta (항상 단수)', 'Me cuesta levantarme temprano.'],
              ['단수 명사', 'cuesta', 'Me cuesta la gramática.'],
              ['복수 명사', 'cuestan', 'Me cuestan los verbos irregulares.']
            ]
          }
        ],
        examples: [
          { es: 'Me cuesta levantarme temprano.', ko: '일찍 일어나는 게 힘들어요.' },
          { es: '¿Te cuesta hablar en español?', ko: '스페인어로 말하는 게 어려워?' },
          { es: 'Al principio me costaba entender a la profesora.', ko: '처음엔 선생님 말을 알아듣기가 힘들었어요.' }
        ],
        related: [
          { es: 'Es difícil + 동사원형', ko: '~하는 것은 어렵다', tag: '비슷' },
          { es: 'me resulta difícil', ko: '나에게 어렵게 느껴진다 (조금 격식)', tag: '비슷' },
          { es: 'me resulta fácil', ko: '나에게 쉽다', tag: '반대' },
          { es: '¿Cuánto cuesta?', ko: '얼마예요? (costar = 값이 ~이다)', tag: '같은 동사' }
        ],
        tip: '동사원형이 오면 항상 cuesta(단수)예요! "Me cuestan levantarme"는 틀려요. cuestan은 뒤에 복수 명사가 올 때만 써요.',
        quiz: [
          { q: '"아침에 일찍 일어나는 게 힘들어요"', a: 'Me cuesta levantarme temprano por la mañana.' },
          { q: 'Me ___ los verbos irregulares. (cuesta / cuestan)', a: 'cuestan — 뒤에 복수 명사(los verbos)가 와서' }
        ]
      },
      {
        type: 'expr',
        es: 'en vez de + 명사/동사원형',
        ko: '~ 대신에',
        memo: 'en ves de = ~ 대신에',
        examples: [
          { es: 'En vez de café, tomo té por la mañana.', ko: '아침에 커피 대신 차를 마셔요.' },
          { es: 'En vez de ver la tele, leo un libro.', ko: 'TV 보는 대신 책을 읽어요.' },
          { es: '¿Por qué no vamos andando en vez de coger el autobús?', ko: '버스 타는 대신 걸어가는 게 어때?' }
        ],
        related: [
          { es: 'en lugar de', ko: '~ 대신에 (같은 뜻)', tag: '비슷' },
          { es: 'a veces', ko: '가끔 (같은 단어 vez)', tag: '같이 쓰는' },
          { es: 'otra vez', ko: '다시, 한 번 더', tag: '같이 쓰는' },
          { es: 'a cambio de', ko: '~의 대가로, ~와 맞바꿔', tag: '헷갈림 주의' }
        ],
        tip: '철자 주의! ves(너는 본다, ver 동사)가 아니라 vez(번, 회)예요. 발음이 같아서 헷갈리기 쉬워요.',
        quiz: [
          { q: '"고기 대신 생선을 먹어요"', a: 'En vez de carne, como pescado.' },
          { q: 'en vez de와 같은 뜻의 표현은?', a: 'en lugar de' }
        ]
      },
      {
        type: 'expr',
        es: 'desde entonces',
        ko: '그때부터, 그 이후로',
        memo: 'Desde entonces = 그때부터',
        examples: [
          { es: 'Hace un año empecé a hacer yoga y desde entonces duermo mejor.', ko: '1년 전에 요가를 시작했는데, 그때부터 잠을 더 잘 자요.' },
          { es: 'Nos conocimos en 2020 y desde entonces somos amigos.', ko: '2020년에 만났고, 그 이후로 친구예요.' },
          { es: 'Dejé el café en verano. Desde entonces me siento mejor.', ko: '여름에 커피를 끊었어요. 그 뒤로 컨디션이 더 좋아요.' }
        ],
        related: [
          { es: 'desde que + 동사', ko: '~한 이후로 (Desde que hago yoga, duermo mejor.)', tag: '비슷' },
          { es: 'a partir de entonces', ko: '그때부터 (조금 더 문어체)', tag: '비슷' },
          { es: 'hasta entonces', ko: '그때까지', tag: '반대' },
          { es: 'entonces', ko: '그러면 / 그때', tag: '파생' },
          { es: 'desde hace + 기간', ko: '(기간) 전부터', tag: '헷갈림 주의' }
        ],
        tip: '"과거에 한 일(단순과거) + y desde entonces + 지금 상태(현재형)" 구조는 DELE 작문·회화에서 변화를 말할 때 그대로 쓰기 좋아요.',
        quiz: [
          { q: '"작년에 운동을 시작했는데, 그때부터 기분이 더 좋아요"', a: 'El año pasado empecé a hacer ejercicio y desde entonces me siento mejor.' },
          { q: '"그때까지"는?', a: 'hasta entonces' }
        ]
      },
      {
        type: 'expr',
        es: 'además de + 명사/동사원형',
        ko: '~ 외에도, ~뿐만 아니라',
        memo: 'Ademas de = ~ 이외에',
        examples: [
          { es: 'Además de inglés, hablo un poco de español.', ko: '영어 외에도 스페인어를 조금 해요.' },
          { es: 'Además de trabajar, estudio español por las noches.', ko: '일하는 것 말고도 밤에는 스페인어를 공부해요.' },
          { es: 'Además de ser barato, este restaurante es muy bueno.', ko: '이 식당은 싸기도 하고, 게다가 아주 맛있어요.' }
        ],
        related: [
          { es: 'además', ko: '게다가 (단독으로)', tag: '파생' },
          { es: 'no solo... sino también', ko: '~뿐만 아니라 ~도', tag: '비슷' },
          { es: 'también', ko: '또한, ~도', tag: '비슷' },
          { es: 'excepto / menos', ko: '~을 빼고, ~을 제외하고', tag: '헷갈림 주의' }
        ],
        tip: '"~ 이외에"는 "~을 빼고"가 아니라 "~에 더해서"라는 뜻이에요. "~ 빼고"는 excepto / menos를 써요. 철자는 además (á에 강세).',
        quiz: [
          { q: '"일하는 것 외에도 운동을 해요"', a: 'Además de trabajar, hago ejercicio.' },
          { q: '"나 빼고 다 왔어" — además de / excepto 중에 맞는 것은?', a: 'excepto → Vinieron todos excepto yo.' }
        ]
      },
      {
        type: 'vocab',
        es: 'sentar bien / mal',
        ko: '(음식·음료가) 몸에 잘 맞다 / 안 맞다',
        memo: 'sentar bien/mal = (음식, 음료가) 잘 맞다/안 맞다',
        tables: [
          {
            title: '활용 (gustar와 같은 구조, e→ie 불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['a mí', 'me sienta(n)', 'me sentó (sentaron)', 'me sentaba(n)'],
              ['a ti', 'te sienta(n)', 'te sentó (sentaron)', 'te sentaba(n)'],
              ['a él/ella/Ud.', 'le sienta(n)', 'le sentó (sentaron)', 'le sentaba(n)'],
              ['a nosotros', 'nos sienta(n)', 'nos sentó (sentaron)', 'nos sentaba(n)'],
              ['a ellos/Uds.', 'les sienta(n)', 'les sentó (sentaron)', 'les sentaba(n)']
            ]
          },
          {
            title: '세 가지 쓰임',
            head: ['쓰임', '예문'],
            rows: [
              ['음식·음료가 몸에 맞다', 'La leche me sienta mal.'],
              ['옷·머리가 어울리다', 'Ese vestido te sienta muy bien.'],
              ['말·일이 기분 좋다/상하다', 'Me sentó mal su comentario.']
            ]
          }
        ],
        examples: [
          { es: 'El café me sienta mal por la noche.', ko: '밤에 마시는 커피는 저한테 안 맞아요.' },
          { es: 'La comida picante no me sienta bien.', ko: '매운 음식은 저한테 잘 안 맞아요.' },
          { es: 'Me sentó muy bien el paseo.', ko: '산책하고 나니 아주 개운했어요.' }
        ],
        related: [
          { es: 'quedar bien / mal', ko: '(옷이) 어울리다 / 안 어울리다', tag: '비슷' },
          { es: 'caer bien / mal', ko: '(사람이) 마음에 들다 / 안 들다', tag: '같은 구조' },
          { es: 'sentarse', ko: '앉다', tag: '헷갈림 주의' },
          { es: 'sentir(se)', ko: '느끼다 (me siento bien = 컨디션이 좋아)', tag: '헷갈림 주의' }
        ],
        tip: 'gustar처럼 "음식이 나에게 맞는다" 구조예요. 음식이 복수면 sientan: Las verduras me sientan bien. 회화 치트시트의 우유 이야기에 바로 써먹을 수 있어요: La leche no me sienta bien.',
        quiz: [
          { q: '"우유는 저한테 안 맞아요"', a: 'La leche me sienta mal. / La leche no me sienta bien.' },
          { q: '"그 원피스 너한테 잘 어울려"', a: 'Ese vestido te sienta muy bien.' }
        ]
      },
      {
        type: 'expr',
        es: 'me da energía',
        ko: '나에게 에너지를 준다, 힘이 나게 한다',
        memo: 'Me da energia = 나에게 에너지를 주다',
        tables: [
          {
            title: 'dar 활용 (불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'doy', 'di', 'daba'],
              ['tú', 'das', 'diste', 'dabas'],
              ['él/ella/Ud.', 'da', 'dio', 'daba'],
              ['nosotros', 'damos', 'dimos', 'dábamos'],
              ['vosotros', 'dais', 'disteis', 'dabais'],
              ['ellos/Uds.', 'dan', 'dieron', 'daban']
            ]
          },
          {
            title: '같은 패턴: me da + 감정·상태 명사',
            head: ['표현', '뜻'],
            rows: [
              ['me da miedo', '무서워'],
              ['me da pena', '안타까워, 마음 아파'],
              ['me da vergüenza', '창피해, 부끄러워'],
              ['me da sueño', '졸려'],
              ['me da igual', '상관없어']
            ]
          }
        ],
        examples: [
          { es: 'Hacer deporte por la mañana me da energía.', ko: '아침에 운동하면 힘이 나요.' },
          { es: 'El café me da energía, pero solo un rato.', ko: '커피를 마시면 힘이 나지만 잠깐뿐이에요.' },
          { es: 'Este trabajo me quita mucha energía.', ko: '이 일은 에너지를 많이 빼앗아요.' }
        ],
        related: [
          { es: 'me quita energía', ko: '에너지를 빼앗다', tag: '반대' },
          { es: 'me cansa', ko: '나를 피곤하게 해', tag: '반대' },
          { es: 'tener energía', ko: '에너지가 있다', tag: '비슷' },
          { es: 'estar lleno/a de energía', ko: '에너지가 넘치다', tag: '같이 쓰는' }
        ],
        tip: '철자는 energía (í에 강세). 힘이 나게 하는 "원인"이 주어예요: El deporte me da energía. 원인이 복수면 me dan: Las vacaciones me dan energía.',
        quiz: [
          { q: '"아침에 운동하면 힘이 나요"', a: 'Hacer ejercicio por la mañana me da energía.' },
          { q: '"이 영화 무서워" (dar 사용)', a: 'Esta película me da miedo.' }
        ]
      },
      {
        type: 'expr',
        es: 'ponerse + 형용사',
        ko: '(감정·상태가 순간적으로) ~해지다',
        memo: 'Ponerse + 형용사 = ~해지다',
        tables: [
          {
            title: 'ponerse 활용 (불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'me pongo', 'me puse', 'me ponía'],
              ['tú', 'te pones', 'te pusiste', 'te ponías'],
              ['él/ella/Ud.', 'se pone', 'se puso', 'se ponía'],
              ['nosotros', 'nos ponemos', 'nos pusimos', 'nos poníamos'],
              ['vosotros', 'os ponéis', 'os pusisteis', 'os poníais'],
              ['ellos/Uds.', 'se ponen', 'se pusieron', 'se ponían']
            ]
          },
          {
            title: '"~해지다" 동사 비교',
            head: ['동사', '언제 쓰나', '예'],
            rows: [
              ['ponerse', '일시적인 감정·상태 변화', 'ponerse nervioso/a, rojo/a, triste'],
              ['quedarse', '어떤 일의 결과로 남은 상태', 'quedarse dormido/a, sorprendido/a'],
              ['volverse', '성격·성질이 바뀜 (오래감)', 'volverse loco/a, más serio/a'],
              ['hacerse', '노력·과정을 거쳐 됨', 'hacerse rico/a, famoso/a']
            ]
          }
        ],
        examples: [
          { es: 'Me pongo nerviosa cuando hablo en público.', ko: '사람들 앞에서 말할 때 긴장돼요.' },
          { es: 'Mi madre se puso muy contenta con el regalo.', ko: '엄마가 선물 받고 아주 기뻐하셨어요.' },
          { es: 'Si no como, me pongo de mal humor.', ko: '밥을 안 먹으면 기분이 나빠져요.' }
        ],
        related: [
          { es: 'quedarse + 형용사', ko: '(결과로) ~한 상태가 되다', tag: '비슷' },
          { es: 'volverse + 형용사', ko: '(성격이) ~하게 변하다', tag: '비슷' },
          { es: 'estar + 형용사', ko: '~한 상태이다 (변화가 아니라 상태)', tag: '헷갈림 주의' },
          { es: 'ponerse + 옷', ko: '(옷을) 입다 (Me pongo el abrigo.)', tag: '같은 동사' }
        ],
        tip: '형용사는 주어의 성·수에 맞춰요: (여자) me pongo nerviosa / (남자) me pongo nervioso. 순간적인 변화는 ponerse, 성격이 아예 바뀐 건 volverse.',
        quiz: [
          { q: '"시험 전에는 긴장돼요"', a: 'Me pongo nerviosa antes de los exámenes.' },
          { q: '"그는 얼굴이 빨개졌어요" (단순과거)', a: 'Se puso rojo.' }
        ]
      }
    ]
  }
];
