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
    id: 'example',
    date: '2026-10-24',
    title: '예시 노트 — 이렇게 채워져요',
    summary: '첫 수업 노트를 보내주시면 이 예시는 지워지고 실제 노트로 바뀝니다.',
    example: true,
    items: [
      {
        type: 'vocab',
        es: 'acordarse de',
        ko: '~을 기억하다, 떠올리다',
        memo: '선생님이 "¿Te acuerdas de mí?" 라고 하심',
        tables: [
          {
            title: '활용 (재귀동사, o→ue 불규칙)',
            head: ['', '현재', '단순과거', '불완료과거'],
            rows: [
              ['yo', 'me acuerdo', 'me acordé', 'me acordaba'],
              ['tú', 'te acuerdas', 'te acordaste', 'te acordabas'],
              ['él/ella/Ud.', 'se acuerda', 'se acordó', 'se acordaba'],
              ['nosotros', 'nos acordamos', 'nos acordamos', 'nos acordábamos'],
              ['vosotros', 'os acordáis', 'os acordasteis', 'os acordabais'],
              ['ellos/Uds.', 'se acuerdan', 'se acordaron', 'se acordaban']
            ]
          }
        ],
        examples: [
          { es: '¿Te acuerdas de mí?', ko: '나 기억나?' },
          { es: 'No me acuerdo de su nombre.', ko: '그 사람 이름이 기억 안 나요.' },
          { es: 'Me acordé de ti cuando vi la foto.', ko: '사진 봤을 때 네 생각났어.' }
        ],
        related: [
          { es: 'recordar', ko: '기억하다 (재귀X, de 없이)', tag: '비슷' },
          { es: 'olvidarse de', ko: '~을 잊다', tag: '반대' },
          { es: 'el recuerdo', ko: '추억, 기념품', tag: '파생' },
          { es: 'acostarse', ko: '눕다, 자러 가다', tag: '헷갈림 주의' }
        ],
        tip: 'acordarse는 꼭 de와 함께! recordar는 de 없이: "Recuerdo tu nombre" = "Me acuerdo de tu nombre".',
        quiz: [
          { q: '"그 사람 이름이 기억 안 나요"를 acordarse로', a: 'No me acuerdo de su nombre.' },
          { q: 'acordarse de = recordar ___ (빈칸: 전치사 필요?)', a: '필요 없음 → Recuerdo su nombre.' }
        ]
      },
      {
        type: 'expr',
        es: 'Me da igual.',
        ko: '상관없어요 / 아무거나 괜찮아요',
        examples: [
          { es: '¿Café o té? — Me da igual.', ko: '커피 아니면 차? — 아무거나요.' },
          { es: 'Me da igual lo que piensen.', ko: '그들이 뭐라 생각하든 상관없어.' }
        ],
        related: [
          { es: 'Me es igual.', ko: '같은 뜻', tag: '비슷' },
          { es: 'No me importa.', ko: '신경 안 써요 (조금 더 단호)', tag: '비슷' },
          { es: 'Como quieras.', ko: '네가 원하는 대로', tag: '같이 쓰는' },
          { es: 'Prefiero...', ko: '저는 ~가 더 좋아요', tag: '반대' }
        ],
        tip: '말투에 따라 무심하게 들릴 수 있어요. 부드럽게: "Cualquiera, me da igual 😊"',
        quiz: [{ q: '"커피든 차든 상관없어요"', a: 'Me da igual, café o té.' }]
      },
      {
        type: 'grammar',
        es: 'Hace + 기간 + que + 현재형',
        ko: '~한 지 (기간)이 됐다',
        tables: [
          {
            title: '같은 뜻, 세 가지 말하기',
            head: ['패턴', '예문'],
            rows: [
              ['Hace + 기간 + que + 현재', 'Hace dos años que estudio español.'],
              ['현재 + desde hace + 기간', 'Estudio español desde hace dos años.'],
              ['Llevar + 기간 + 현재분사', 'Llevo dos años estudiando español.']
            ]
          }
        ],
        examples: [
          { es: 'Hace tres meses que vivo aquí.', ko: '여기 산 지 3개월 됐어요.' },
          { es: '¿Cuánto tiempo hace que estudias español?', ko: '스페인어 공부한 지 얼마나 됐어요?' },
          { es: 'Hace un año fui a México.', ko: '1년 전에 멕시코에 갔어요. (que 없음 = "~전에")' }
        ],
        related: [
          { es: 'desde hace', ko: '~전부터', tag: '비슷' },
          { es: 'llevar + -ando/-iendo', ko: '~하는 중으로 (기간)째', tag: '비슷' },
          { es: 'hace + 기간 (+ 과거)', ko: '~전에', tag: '헷갈림 주의' }
        ],
        tip: '"Hace 2 años que + 현재" = 지금도 계속 중. "Hace 2 años + 과거" = 2년 전에 (끝난 일).',
        quiz: [
          { q: '"여기 산 지 3개월 됐어요" (hace 사용)', a: 'Hace tres meses que vivo aquí.' },
          { q: '같은 문장을 llevar로', a: 'Llevo tres meses viviendo aquí.' }
        ]
      }
    ]
  }
];
