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
