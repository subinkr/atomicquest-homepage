import { useEffect, useMemo, useState } from 'react'

import './App.css'

type Lang = 'ko' | 'en' | 'ja' | 'zh'

type Feature = {
  title: string
  desc: string
}

type Faq = {
  q: string
  a: string
}

type Copy = {
  navFeatures: string
  navHow: string
  navFaq: string
  navPrivacy: string
  ctaStart: string
  heroPill: string
  heroH1: string
  heroLead: string
  heroPoint1: string
  heroPoint2: string
  heroPoint3: string
  heroPrimary: string
  heroSecondary: string
  metaConceptTitle: string
  metaConceptValue: string
  metaSystemTitle: string
  metaSystemValue: string
  metaGrowthTitle: string
  metaGrowthValue: string
  mockToday: string
  mockHeaderTitle: string
  mockGoalLabel: string
  mockGoalText: string
  mockTotalLabel: string
  mockAddAbility: string
  mockTabWeekly: string
  mockTabCalendar: string
  mockWeekRange: string
  mockTodayLabel: string
  mockSuccess: string
  mockFail: string
  mockEdit: string
  mockCollapseAll: string
  mockExpandAll: string
  mockAbility1: string
  mockAbility2: string
  mockAddActivity: string
  mockItem1: string
  mockItem2: string
  mockScheduleExample: string
  mockPerfect: string
  mockLevel: string
  mockA1Title: string
  mockA1Desc: string
  mockA2Title: string
  mockA2Desc: string
  mockA3Title: string
  mockA3Desc: string
  featuresEyebrow: string
  featuresTitle: string
  featuresDesc: string
  howEyebrow: string
  howTitle: string
  howDesc: string
  faqEyebrow: string
  faqTitle: string
  ctaTitle: string
  ctaDesc: string
  ctaBackToTop: string
  ctaViewAppCode: string
  footerNote: string
  privacyEyebrow: string
  privacyTitle: string
  privacyUpdatedAtPrefix: string
  privacyBackHome: string
  privacyIntro: string
  privacySection1Title: string
  privacySection1Body: string
  privacySection2Title: string
  privacySection2Body: string
  privacySection3Title: string
  privacySection3Body: string
  privacySection4Title: string
  privacySection4Body: string
  privacySection5Title: string
  privacySection5BodyPrefix: string
  privacyEmailLabel: string
}

type Translations = {
  copy: Copy
  features: Feature[]
  how: { step: string; title: string; desc: string }[]
  faqs: Faq[]
}

const translations: Record<Lang, Translations> = {
  ko: {
    copy: {
      navFeatures: '기능',
      navHow: '사용 흐름',
      navFaq: 'FAQ',
      navPrivacy: '개인정보처리방침',
      ctaStart: '시작하기',
      heroPill: '목표를 시스템으로 바꾸는 실행 시스템',
      heroH1: '꾸준함이 어려울 때,\n목표를 작게 만들고\n오늘을 완료하세요.',
      heroLead:
        'AtomicQuest는 목표를 능력(Ability)과 활동(Activity)으로 쪼개고, 반복·알림·체크로 “지속 가능한 실행”을 돕는 퀘스트 앱입니다.',
      heroPoint1: '큰 목표를 오늘 할 일로 자동 분해',
      heroPoint2: '반복·알림으로 루틴을 시스템화',
      heroPoint3: '성공/실패 기록으로 꾸준함을 눈에 보이게',
      heroPrimary: '지금 시작하기',
      heroSecondary: '기능 보기',
      metaConceptTitle: '핵심 개념',
      metaConceptValue: 'Goal · Ability · Activity',
      metaSystemTitle: '지속 장치',
      metaSystemValue: 'Repeat · Notification · Check',
      metaGrowthTitle: '성장 지표',
      metaGrowthValue: 'Perfect Day · Level',
      mockToday: '오늘의 퀘스트',
      mockHeaderTitle: 'Atomic Quest',
      mockGoalLabel: 'Goal',
      mockGoalText: '체지방률 18% 이하 유지하고 노년까지 근력 유지하기.',
      mockTotalLabel: 'Total',
      mockAddAbility: '+ Add Ability',
      mockTabWeekly: 'Weekly',
      mockTabCalendar: 'Calendar',
      mockWeekRange: '1/12 – 1/18',
      mockTodayLabel: 'Today',
      mockSuccess: 'Success',
      mockFail: 'Fail',
      mockEdit: 'Edit',
      mockCollapseAll: 'Collapse all',
      mockExpandAll: 'Expand all',
      mockAbility1: 'Eat less',
      mockAbility2: 'Move a lot',
      mockAddActivity: '+ Activity',
      mockItem1: 'Eat a little lunch',
      mockItem2: 'Walk 10,000 steps',
      mockScheduleExample: '18:00 · Mon, Tue, Wed, Thu, Fri, Sat, Sun',
      mockPerfect: '모두 완료하면 Perfect Day',
      mockLevel: 'Level 1',
      mockA1Title: '발음',
      mockA1Desc: 'Shadowing 10분',
      mockA2Title: '말하기',
      mockA2Desc: '1분 스피치 녹음',
      mockA3Title: '듣기',
      mockA3Desc: '뉴스 1개 듣기',
      featuresEyebrow: 'FEATURES',
      featuresTitle: '목표를 실행으로 연결하는 핵심 기능',
      featuresDesc: 'AtomicQuest는 목표를 ‘구조화’하고, 매일의 ‘실행’을 자동화합니다.',
      howEyebrow: 'HOW IT WORKS',
      howTitle: '4단계로 만드는 나만의 퀘스트',
      howDesc: '큰 목표를 오늘 할 수 있는 단위로 쪼개고, 꾸준함을 시스템화합니다.',
      faqEyebrow: 'FAQ',
      faqTitle: '자주 묻는 질문',
      ctaTitle: '오늘의 작은 완료가, 결국 큰 목표를 만듭니다.',
      ctaDesc: 'AtomicQuest로 목표를 퀘스트로 만들고, 반복·알림·체크로 “지속 가능한 실행”을 시작해보세요.',
      ctaBackToTop: '랜딩 상단으로',
      ctaViewAppCode: '앱 코드 보기',
      footerNote: 'AtomicQuest · Goal → Ability → Activity',
      privacyEyebrow: 'PRIVACY',
      privacyTitle: '개인정보처리방침',
      privacyUpdatedAtPrefix: '최종 업데이트',
      privacyBackHome: '홈으로',
      privacyIntro:
        'AtomicQuest는 서비스 제공을 위해 필요한 최소한의 정보만을 사용합니다. 현재 버전의 앱은 별도의 회원가입 및 서버 계정을 요구하지 않으며, 개인정보를 수집/전송하지 않습니다.',
      privacySection1Title: '1. 수집하는 개인정보',
      privacySection1Body: 'AtomicQuest는 개인정보를 수집하지 않습니다.',
      privacySection2Title: '2. 앱 내 저장되는 정보',
      privacySection2Body:
        '사용자가 입력한 목표, 능력, 활동, 체크 기록 등은 기기 내 저장소(로컬)에만 저장될 수 있습니다. 해당 정보는 앱 기능 제공을 위한 목적이며, 원칙적으로 외부 서버로 전송되지 않습니다.',
      privacySection3Title: '3. 알림 권한',
      privacySection3Body:
        'AtomicQuest는 사용자가 설정한 시간에 리마인드를 제공하기 위해 기기의 알림 권한을 사용할 수 있습니다. 알림 내용은 사용자 설정(활동명 등)을 기반으로 생성될 수 있으며, 외부로 전송되지 않습니다.',
      privacySection4Title: '4. 제3자 제공 및 처리 위탁',
      privacySection4Body: 'AtomicQuest는 개인정보를 제3자에게 제공하거나 위탁하지 않습니다.',
      privacySection5Title: '5. 문의',
      privacySection5BodyPrefix: '본 방침에 대한 문의는 아래로 연락해 주세요.',
      privacyEmailLabel: '이메일',
    },
    features: [
      {
        title: '목표를 작은 퀘스트로 쪼개기',
        desc: '큰 목표를 “능력(Ability) → 활동(Activity)” 구조로 나눠, 오늘 할 일만 남깁니다.',
      },
      {
        title: '반복과 알림으로 지속하기',
        desc: '매일/평일/주말/커스텀 반복과 알림으로, 의지보다 시스템에 기대게 합니다.',
      },
      {
        title: '매일 체크로 피드백 받기',
        desc: '오늘의 활동을 선택하고 성공/실패를 기록해 흐름을 놓치지 않습니다.',
      },
      {
        title: '퍼펙트 데이 & 레벨업',
        desc: '선택한 활동을 모두 완료하면 “Perfect Day”가 쌓이고, 꾸준함이 레벨로 환산됩니다.',
      },
    ],
    how: [
      { step: '1', title: '목표를 정한다', desc: '“3개월 안에 영어로 발표하기”처럼 한 문장으로 선언합니다.' },
      { step: '2', title: '능력을 정의한다', desc: '목표를 이루는 데 필요한 역량을 묶어서 정리합니다. (예: 듣기/말하기/발음)' },
      { step: '3', title: '활동을 설정한다', desc: '각 능력별로 실행 가능한 활동을 추가하고 시간/반복 패턴을 지정합니다.' },
      { step: '4', title: '오늘을 체크한다', desc: '오늘의 활동을 선택해 체크하고, 퍼펙트 데이를 쌓아 장기적인 성장을 만듭니다.' },
    ],
    faqs: [
      {
        q: 'AtomicQuest는 어떤 서비스인가요?',
        a: '목표를 능력과 활동으로 나누고, 반복/알림/체크로 “지속 가능한 실행”을 돕는 습관형 퀘스트 앱입니다.',
      },
      {
        q: '매일 같은 루틴이 아니어도 쓸 수 있나요?',
        a: '네. 기본 스케줄을 만들고, 그날그날 활동을 추가/제외하며 유연하게 운영할 수 있습니다.',
      },
      {
        q: '알림은 어떤 방식으로 오나요?',
        a: '설정한 시간과 반복 패턴(매일/평일/주말/커스텀)에 맞춰 로컬 알림으로 리마인드합니다.',
      },
    ],
  },
  en: {
    copy: {
      navFeatures: 'Features',
      navHow: 'How it works',
      navFaq: 'FAQ',
      navPrivacy: 'Privacy Policy',
      ctaStart: 'Get started',
      heroPill: 'Turn goals into a system',
      heroH1: 'When consistency is hard,\nmake the goal smaller\nand complete today.',
      heroLead:
        'AtomicQuest helps you break goals into Abilities and Activities—then stay consistent with repeats, reminders, and check-ins.',
      heroPoint1: 'Break big goals into today’s actions',
      heroPoint2: 'Build routines with repeats & reminders',
      heroPoint3: 'Track success/fail to stay accountable',
      heroPrimary: 'Get started',
      heroSecondary: 'See features',
      metaConceptTitle: 'Core',
      metaConceptValue: 'Goal · Ability · Activity',
      metaSystemTitle: 'System',
      metaSystemValue: 'Repeat · Reminder · Check',
      metaGrowthTitle: 'Growth',
      metaGrowthValue: 'Perfect Day · Level',
      mockToday: "Today's quests",
      mockHeaderTitle: 'Atomic Quest',
      mockGoalLabel: 'Goal',
      mockGoalText: 'Keep body fat under 18% and maintain strength well into old age.',
      mockTotalLabel: 'Total',
      mockAddAbility: '+ Add Ability',
      mockTabWeekly: 'Weekly',
      mockTabCalendar: 'Calendar',
      mockWeekRange: '1/12 – 1/18',
      mockTodayLabel: 'Today',
      mockSuccess: 'Success',
      mockFail: 'Fail',
      mockEdit: 'Edit',
      mockCollapseAll: 'Collapse all',
      mockExpandAll: 'Expand all',
      mockAbility1: 'Eat less',
      mockAbility2: 'Move a lot',
      mockAddActivity: '+ Activity',
      mockItem1: 'Eat a little lunch',
      mockItem2: 'Walk 10,000 steps',
      mockScheduleExample: '18:00 · Mon, Tue, Wed, Thu, Fri, Sat, Sun',
      mockPerfect: 'Complete all for a Perfect Day',
      mockLevel: 'Level 1',
      mockA1Title: 'Pronunciation',
      mockA1Desc: 'Shadowing (10 min)',
      mockA2Title: 'Speaking',
      mockA2Desc: 'Record a 1-minute speech',
      mockA3Title: 'Listening',
      mockA3Desc: 'Listen to 1 news clip',
      featuresEyebrow: 'FEATURES',
      featuresTitle: 'Key features that connect goals to action',
      featuresDesc: 'AtomicQuest structures your goal and automates your daily execution.',
      howEyebrow: 'HOW IT WORKS',
      howTitle: 'Build your quest in 4 steps',
      howDesc: 'Break big goals into what you can do today—and systemize consistency.',
      faqEyebrow: 'FAQ',
      faqTitle: 'Frequently asked questions',
      ctaTitle: 'Small wins today become big goals tomorrow.',
      ctaDesc: 'Turn goals into quests, and start sustainable execution with repeats, reminders, and check-ins.',
      ctaBackToTop: 'Back to top',
      ctaViewAppCode: 'View app code',
      footerNote: 'AtomicQuest · Goal → Ability → Activity',
      privacyEyebrow: 'PRIVACY',
      privacyTitle: 'Privacy Policy',
      privacyUpdatedAtPrefix: 'Last updated',
      privacyBackHome: 'Home',
      privacyIntro:
        'AtomicQuest uses the minimum information necessary to provide the service. The current version does not require an account and does not collect or transmit personal data.',
      privacySection1Title: '1. Personal data we collect',
      privacySection1Body: 'AtomicQuest does not collect personal data.',
      privacySection2Title: '2. Data stored on your device',
      privacySection2Body:
        'Goals, abilities, activities, and check logs you enter may be stored locally on your device. This data is used to provide app features and is not transmitted to external servers by default.',
      privacySection3Title: '3. Notification permission',
      privacySection3Body:
        'AtomicQuest may use your device notification permission to send reminders at configured times. Notification content may be generated from your settings and is not transmitted externally.',
      privacySection4Title: '4. Sharing & processing by third parties',
      privacySection4Body: 'AtomicQuest does not share personal data with third parties or outsource processing.',
      privacySection5Title: '5. Contact',
      privacySection5BodyPrefix: 'If you have questions about this policy, please contact:',
      privacyEmailLabel: 'Email',
    },
    features: [
      { title: 'Turn big goals into small quests', desc: 'Break down goals into “Ability → Activity” so only today’s actions remain.' },
      { title: 'Stay consistent with repeats & reminders', desc: 'Daily/weekday/weekend/custom schedules help you rely on a system—not willpower.' },
      { title: 'Track progress with daily check-ins', desc: 'Select today’s activities and record success/failure to keep momentum.' },
      { title: 'Perfect Day & Level Up', desc: 'Complete everything for a Perfect Day—your consistency turns into levels.' },
    ],
    how: [
      { step: '1', title: 'Set a goal', desc: 'Write it as one sentence, like “Give a talk in English in 3 months.”' },
      { step: '2', title: 'Define abilities', desc: 'Group the skills needed for the goal (e.g., listening, speaking, pronunciation).' },
      { step: '3', title: 'Create activities', desc: 'Add actionable activities and set time + repeat patterns.' },
      { step: '4', title: 'Check in today', desc: 'Select and check off today’s activities to build long-term progress.' },
    ],
    faqs: [
      {
        q: 'What is AtomicQuest?',
        a: 'A quest-style habit app that turns goals into abilities and activities, supporting sustainable execution with repeats, reminders, and check-ins.',
      },
      {
        q: 'Can I use it without a fixed daily routine?',
        a: 'Yes. You can set a baseline schedule and flexibly add or skip activities day by day.',
      },
      {
        q: 'How do reminders work?',
        a: 'Local notifications are scheduled based on your configured time and repeat pattern (daily/weekday/weekend/custom).',
      },
    ],
  },
  ja: {
    copy: {
      navFeatures: '機能',
      navHow: '使い方',
      navFaq: 'FAQ',
      navPrivacy: 'プライバシーポリシー',
      ctaStart: 'はじめる',
      heroPill: '目標を“仕組み”に変える',
      heroH1: '継続が難しいときは、\n目標を小さくして\n今日を完了しよう。',
      heroLead:
        'AtomicQuestは目標を「能力(Ability)」と「活動(Activity)」に分解し、繰り返し・通知・チェックで継続を支えるアプリです。',
      heroPoint1: '大きな目標を「今日の行動」に分解',
      heroPoint2: '繰り返し・通知で習慣を仕組み化',
      heroPoint3: '成功/失敗の記録で継続を見える化',
      heroPrimary: '今すぐ始める',
      heroSecondary: '機能を見る',
      metaConceptTitle: 'コア',
      metaConceptValue: 'Goal · Ability · Activity',
      metaSystemTitle: '継続',
      metaSystemValue: 'Repeat · Reminder · Check',
      metaGrowthTitle: '成長',
      metaGrowthValue: 'Perfect Day · Level',
      mockToday: '今日のクエスト',
      mockHeaderTitle: 'Atomic Quest',
      mockGoalLabel: 'Goal',
      mockGoalText: '体脂肪率18%未満を維持し、老年期まで筋力を保つ。',
      mockTotalLabel: 'Total',
      mockAddAbility: '+ Add Ability',
      mockTabWeekly: 'Weekly',
      mockTabCalendar: 'Calendar',
      mockWeekRange: '1/12 – 1/18',
      mockTodayLabel: 'Today',
      mockSuccess: 'Success',
      mockFail: 'Fail',
      mockEdit: 'Edit',
      mockCollapseAll: 'Collapse all',
      mockExpandAll: 'Expand all',
      mockAbility1: 'Eat less',
      mockAbility2: 'Move a lot',
      mockAddActivity: '+ Activity',
      mockItem1: '軽めの昼食をとる',
      mockItem2: '1万歩歩く',
      mockScheduleExample: '18:00 · Mon, Tue, Wed, Thu, Fri, Sat, Sun',
      mockPerfect: '全部完了でPerfect Day',
      mockLevel: 'Level 1',
      mockA1Title: '発音',
      mockA1Desc: 'シャドーイング10分',
      mockA2Title: 'スピーキング',
      mockA2Desc: '1分スピーチを録音',
      mockA3Title: 'リスニング',
      mockA3Desc: 'ニュースを1本聞く',
      featuresEyebrow: 'FEATURES',
      featuresTitle: '目標を実行につなげる主要機能',
      featuresDesc: 'AtomicQuestは目標を構造化し、毎日の実行を自動化します。',
      howEyebrow: 'HOW IT WORKS',
      howTitle: '4ステップで自分だけのクエスト',
      howDesc: '大きな目標を「今日できる単位」に分け、継続を仕組みにします。',
      faqEyebrow: 'FAQ',
      faqTitle: 'よくある質問',
      ctaTitle: '今日の小さな完了が、いつか大きな目標になります。',
      ctaDesc: '目標をクエストに変え、繰り返し・リマインダー・チェックで継続を始めましょう。',
      ctaBackToTop: 'トップへ',
      ctaViewAppCode: 'アプリコードを見る',
      footerNote: 'AtomicQuest · Goal → Ability → Activity',
      privacyEyebrow: 'PRIVACY',
      privacyTitle: 'プライバシーポリシー',
      privacyUpdatedAtPrefix: '最終更新',
      privacyBackHome: 'ホーム',
      privacyIntro:
        'AtomicQuestはサービス提供に必要な最小限の情報のみを使用します。現在のバージョンはアカウントを必要とせず、個人情報を収集・送信しません。',
      privacySection1Title: '1. 収集する個人情報',
      privacySection1Body: 'AtomicQuestは個人情報を収集しません。',
      privacySection2Title: '2. 端末内に保存される情報',
      privacySection2Body:
        '入力した目標、能力、活動、チェック記録などは端末内(ローカル)に保存される場合があります。これらは機能提供のためで、原則として外部サーバーへ送信されません。',
      privacySection3Title: '3. 通知権限',
      privacySection3Body:
        '設定した時間にリマインドを行うため、通知権限を使用する場合があります。通知内容は設定に基づいて生成され、外部へ送信されません。',
      privacySection4Title: '4. 第三者提供・委託',
      privacySection4Body: 'AtomicQuestは個人情報を第三者に提供または委託しません。',
      privacySection5Title: '5. お問い合わせ',
      privacySection5BodyPrefix: '本ポリシーに関するお問い合わせは以下までご連絡ください。',
      privacyEmailLabel: 'メール',
    },
    features: [
      { title: '目標を小さなクエストに分解', desc: '目標を「Ability → Activity」に分け、今日やることだけを残します。' },
      { title: '繰り返しと通知で継続', desc: '毎日/平日/週末/カスタムのスケジュールと通知で継続を支えます。' },
      { title: '日次チェックで記録', desc: '今日の活動を選び、成功/失敗を記録して流れを保ちます。' },
      { title: 'Perfect Day & レベルアップ', desc: 'すべて完了でPerfect Day。継続がレベルに換算されます。' },
    ],
    how: [
      { step: '1', title: '目標を決める', desc: '「3ヶ月で英語発表」など一文で宣言します。' },
      { step: '2', title: '能力を定義する', desc: '必要なスキルを整理します。(例：聞く/話す/発音)' },
      { step: '3', title: '活動を設定する', desc: '実行可能な活動を追加し、時間と繰り返しを設定します。' },
      { step: '4', title: '今日をチェックする', desc: '今日の活動を選んでチェックし、長期的な成長を作ります。' },
    ],
    faqs: [
      {
        q: 'AtomicQuestとは？',
        a: '目標を能力と活動に分け、繰り返し・通知・チェックで継続的な実行を支えるクエスト型習慣アプリです。',
      },
      {
        q: '毎日同じルーティンでなくても使えますか？',
        a: 'はい。ベースのスケジュールを作り、日々活動を追加/除外して柔軟に運用できます。',
      },
      {
        q: '通知はどう届きますか？',
        a: '設定した時間と繰り返し(毎日/平日/週末/カスタム)に合わせてローカル通知が届きます。',
      },
    ],
  },
  zh: {
    copy: {
      navFeatures: '功能',
      navHow: '使用流程',
      navFaq: '常见问题',
      navPrivacy: '隐私政策',
      ctaStart: '开始',
      heroPill: '把目标变成“系统”',
      heroH1: '当坚持变得困难，\n把目标变小\n先完成今天。',
      heroLead:
        'AtomicQuest 将目标拆成能力(Ability)与活动(Activity)，并用重复、提醒与打卡帮助你持续行动。',
      heroPoint1: '把大目标拆成今天要做的事',
      heroPoint2: '用重复与提醒建立固定节奏',
      heroPoint3: '记录成功/失败，让坚持可视化',
      heroPrimary: '立即开始',
      heroSecondary: '查看功能',
      metaConceptTitle: '核心概念',
      metaConceptValue: 'Goal · Ability · Activity',
      metaSystemTitle: '坚持机制',
      metaSystemValue: 'Repeat · Reminder · Check',
      metaGrowthTitle: '成长指标',
      metaGrowthValue: 'Perfect Day · Level',
      mockToday: '今日任务',
      mockHeaderTitle: 'Atomic Quest',
      mockGoalLabel: 'Goal',
      mockGoalText: '将体脂率保持在 18% 以下，并在老年依然保持力量。',
      mockTotalLabel: 'Total',
      mockAddAbility: '+ Add Ability',
      mockTabWeekly: 'Weekly',
      mockTabCalendar: 'Calendar',
      mockWeekRange: '1/12 – 1/18',
      mockTodayLabel: 'Today',
      mockSuccess: 'Success',
      mockFail: 'Fail',
      mockEdit: 'Edit',
      mockCollapseAll: 'Collapse all',
      mockExpandAll: 'Expand all',
      mockAbility1: 'Eat less',
      mockAbility2: 'Move a lot',
      mockAddActivity: '+ Activity',
      mockItem1: '少吃一点午餐',
      mockItem2: '走 10,000 步',
      mockScheduleExample: '18:00 · Mon, Tue, Wed, Thu, Fri, Sat, Sun',
      mockPerfect: '全部完成获得 Perfect Day',
      mockLevel: 'Level 1',
      mockA1Title: '发音',
      mockA1Desc: '跟读影子训练 10 分钟',
      mockA2Title: '口语',
      mockA2Desc: '录制 1 分钟演讲',
      mockA3Title: '听力',
      mockA3Desc: '听 1 条新闻',
      featuresEyebrow: 'FEATURES',
      featuresTitle: '把目标连接到行动的关键功能',
      featuresDesc: 'AtomicQuest 帮你结构化目标，并自动化每日执行。',
      howEyebrow: 'HOW IT WORKS',
      howTitle: '4 步打造你的专属任务',
      howDesc: '把大目标拆成今天能做的单位，用系统来保持持续。',
      faqEyebrow: 'FAQ',
      faqTitle: '常见问题',
      ctaTitle: '今天的小完成，终将成就更大的目标。',
      ctaDesc: '用 AtomicQuest 把目标变成任务，开始可持续的行动：重复、提醒与打卡。',
      ctaBackToTop: '返回顶部',
      ctaViewAppCode: '查看应用代码',
      footerNote: 'AtomicQuest · Goal → Ability → Activity',
      privacyEyebrow: 'PRIVACY',
      privacyTitle: '隐私政策',
      privacyUpdatedAtPrefix: '最后更新',
      privacyBackHome: '返回首页',
      privacyIntro:
        'AtomicQuest 仅使用提供服务所需的最少信息。当前版本不需要账号，不会收集或传输个人信息。',
      privacySection1Title: '1. 我们收集的个人信息',
      privacySection1Body: 'AtomicQuest 不收集个人信息。',
      privacySection2Title: '2. 存储在设备上的信息',
      privacySection2Body:
        '你输入的目标、能力、活动与打卡记录等可能仅保存在本机(本地存储)。这些数据用于提供功能，默认不会传输到外部服务器。',
      privacySection3Title: '3. 通知权限',
      privacySection3Body:
        'AtomicQuest 可能会使用通知权限在设定时间发送提醒。通知内容可基于你的设置生成，不会传输到外部。',
      privacySection4Title: '4. 第三方共享与委托处理',
      privacySection4Body: 'AtomicQuest 不会向第三方提供个人信息，也不会委托处理。',
      privacySection5Title: '5. 联系方式',
      privacySection5BodyPrefix: '如对本政策有任何疑问，请联系：',
      privacyEmailLabel: '邮箱',
    },
    features: [
      { title: '把大目标拆成小任务', desc: '用“能力 → 活动”的结构，只留下今天要做的事。' },
      { title: '重复与提醒帮助坚持', desc: '每日/工作日/周末/自定义重复，让你依靠系统而不是意志力。' },
      { title: '每日打卡记录进度', desc: '选择今日活动并记录成功/失败，保持节奏。' },
      { title: 'Perfect Day & 升级', desc: '全部完成获得 Perfect Day，坚持会转化为等级。' },
    ],
    how: [
      { step: '1', title: '设定目标', desc: '用一句话写下目标，例如“3个月后用英语做演讲”。' },
      { step: '2', title: '定义能力', desc: '整理实现目标所需的能力(例如：听力/口语/发音)。' },
      { step: '3', title: '设置活动', desc: '添加可执行的活动，并设置时间与重复规则。' },
      { step: '4', title: '完成今天', desc: '选择并打卡今日活动，累积长期成长。' },
    ],
    faqs: [
      {
        q: 'AtomicQuest 是什么？',
        a: '它是一款把目标拆解为能力与活动，并通过重复、提醒与打卡帮助你持续行动的任务型习惯应用。',
      },
      {
        q: '没有固定的每日作息也能用吗？',
        a: '可以。你可以设置基础计划，并按天灵活添加或跳过活动。',
      },
      {
        q: '提醒如何工作？',
        a: '根据你设置的时间和重复规则(每日/工作日/周末/自定义)创建本地通知提醒。',
      },
    ],
  },
}

function normalizeLang(v: string | null | undefined): Lang | null {
  if (!v) return null
  const raw = v.toLowerCase().trim()
  if (raw === 'ko') return 'ko'
  if (raw === 'en') return 'en'
  if (raw === 'ja' || raw === 'jp') return 'ja'
  if (raw === 'zh' || raw === 'zh-cn' || raw === 'cn') return 'zh'
  return null
}

function useLang() {
  const [lang, setLangState] = useState<Lang>(() => {
    const params = new URLSearchParams(window.location.search)
    const fromQuery = normalizeLang(params.get('lang'))
    if (fromQuery) return fromQuery
    const fromStorage = normalizeLang(window.localStorage.getItem('lang'))
    if (fromStorage) return fromStorage
    const nav = normalizeLang(navigator.language)
    return nav ?? 'ko'
  })

  const setLang = (next: Lang) => {
    setLangState(next)
    window.localStorage.setItem('lang', next)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.replaceState(null, '', url.toString())
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search)
      const fromQuery = normalizeLang(params.get('lang'))
      if (fromQuery) setLangState(fromQuery)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return { lang, setLang }
}

function LogoMark() {
  return (
    <div className="logoMark" aria-hidden="true">
      <span className="logoDot" />
      <span className="logoText">AtomicQuest</span>
    </div>
  )
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="sectionTitle">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {desc ? <p className="sectionDesc">{desc}</p> : null}
    </div>
  )
}

function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return pathname
}

function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented) return
    if (e.button !== 0) return
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return
    if (href.startsWith('#')) return
    if (!href.startsWith('/')) return

    e.preventDefault()
    window.history.pushState(null, '', href)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  )
}

function LanguageSwitcher({ lang, onChange }: { lang: Lang; onChange: (v: Lang) => void }) {
  return (
    <label className="langLabel">
      <span className="srOnly">Language</span>
      <select className="langSelect" value={lang} onChange={(e) => onChange(e.target.value as Lang)}>
        <option value="ko">한국어</option>
        <option value="en">English</option>
        <option value="ja">日本語</option>
        <option value="zh">中文</option>
      </select>
    </label>
  )
}

function splitLines(v: string) {
  return v.split('\n')
}

function LandingPage({ lang, setLang }: { lang: Lang; setLang: (v: Lang) => void }) {
  const t = translations[lang]
  const c = t.copy
  const heroLines = (() => {
    const lines = splitLines(c.heroH1)
    while (lines.length < 3) lines.push('')
    return lines
  })()
  return (
    <div className="page">
      <header className="header">
        <div className="container headerInner">
          <NavLink className="brand" href="#top">
            <LogoMark />
          </NavLink>
          <nav className="nav" aria-label="주요 메뉴">
            <a href="#features">{c.navFeatures}</a>
            <a href="#how">{c.navHow}</a>
            <a href="#faq">{c.navFaq}</a>
          </nav>
          <div className="headerCta">
            <LanguageSwitcher lang={lang} onChange={setLang} />
            <a className="btn btnGhost" href="#cta">
              {c.ctaStart}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container heroInner">
            <div className="heroCopy">
              <div className="pill">{c.heroPill}</div>
              <h1>
                {heroLines[0]}
                <br />
                {heroLines[1]}
                <br />
                {heroLines[2]}
              </h1>
              <p className="heroLead">{c.heroLead}</p>
              <ul className="heroPoints">
                <li className="heroPoint">{c.heroPoint1}</li>
                <li className="heroPoint">{c.heroPoint2}</li>
                <li className="heroPoint">{c.heroPoint3}</li>
              </ul>
              <div className="heroActions">
                <a className="btn btnPrimary" href="#cta">
                  {c.heroPrimary}
                </a>
                <a className="btn btnSecondary" href="#features">
                  {c.heroSecondary}
                </a>
              </div>
              <div className="heroMeta">
                <div className="metaItem">
                  <div className="metaTitle">{c.metaConceptTitle}</div>
                  <div className="metaValue">{c.metaConceptValue}</div>
                </div>
                <div className="metaItem">
                  <div className="metaTitle">{c.metaSystemTitle}</div>
                  <div className="metaValue">{c.metaSystemValue}</div>
                </div>
                <div className="metaItem">
                  <div className="metaTitle">{c.metaGrowthTitle}</div>
                  <div className="metaValue">{c.metaGrowthValue}</div>
                </div>
              </div>
            </div>
            <div className="heroVisual" aria-hidden="true">
              <div className="appMock">
                <div className="appMockTop">
                  <div className="appMockTitle">{c.mockHeaderTitle}</div>
                  <div className="appMockIcon" />
                </div>

                <div className="appGoalCard">
                  <div className="appGoalHeader">
                    <div className="appGoalLabel">{c.mockGoalLabel}</div>
                    <div className="appGoalTotal">
                      {c.mockTotalLabel} 0y · 0w · 0d
                    </div>
                  </div>
                  <div className="appGoalText">{c.mockGoalText}</div>
                  <div className="appGoalProgress">
                    <div className="appGoalBar" />
                    <div className="appGoalStats">
                      <span>0/52w</span>
                      <span>0/7d</span>
                    </div>
                  </div>
                  <div className="appGoalActions">
                    <button className="appBtn" type="button">
                      {c.mockAddAbility}
                    </button>
                  </div>
                </div>

                <div className="appToday">
                  <div className="appTodayHeader">
                    <div className="appTodayLeft">1/16</div>
                    <div className="appTodayRight">
                      <span className="appTodayMeta">
                        {c.mockSuccess} 0 · {c.mockFail} 0
                      </span>
                      <span className="appTodayEdit">{c.mockEdit}</span>
                    </div>
                  </div>
                  <div className="appChecklist">
                    <div className="appCheckRow">
                      <div className="appCheckText">{c.mockItem1}</div>
                      <div className="appCheckActions">
                        <span className="appMiniBtn" />
                        <span className="appMiniBtn appMiniBtnActive" />
                      </div>
                    </div>
                    <div className="appCheckRow">
                      <div className="appCheckText">{c.mockItem2}</div>
                      <div className="appCheckActions">
                        <span className="appMiniBtn" />
                        <span className="appMiniBtn" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="appMockFooter">
                  <div className="mockHint">{c.mockPerfect}</div>
                  <div className="mockChip">{c.mockLevel}</div>
                </div>
              </div>
              <div className="glow" />
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <SectionTitle
              eyebrow={c.featuresEyebrow}
              title={c.featuresTitle}
              desc={c.featuresDesc}
            />

            <div className="grid grid2">
              {t.features.map((f) => (
                <article key={f.title} className="card">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="section alt">
          <div className="container">
            <SectionTitle
              eyebrow={c.howEyebrow}
              title={c.howTitle}
              desc={c.howDesc}
            />

            <ol className="steps">
              {t.how.map((s) => (
                <li key={s.step} className="step">
                  <div className="stepNo" aria-hidden="true">
                    {s.step}
                  </div>
                  <div className="stepBody">
                    <div className="stepTitle">{s.title}</div>
                    <div className="stepDesc">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <SectionTitle eyebrow={c.faqEyebrow} title={c.faqTitle} />
            <div className="faq">
              {t.faqs.map((f) => (
                <details key={f.q} className="faqItem">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="section cta">
          <div className="container ctaInner">
            <div>
              <h2>{c.ctaTitle}</h2>
              <p>{c.ctaDesc}</p>
            </div>
            <div className="ctaActions">
              <a className="btn btnPrimary" href="#top">
                {c.ctaBackToTop}
              </a>
              <a className="btn btnSecondary" href="../atomicquest" target="_blank" rel="noreferrer">
                {c.ctaViewAppCode}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">
            <LogoMark />
            <div className="footerNote">{c.footerNote}</div>
          </div>
          <div className="footerRight">
            <a href="#features">{c.navFeatures}</a>
            <a href="#how">{c.navHow}</a>
            <a href="#faq">{c.navFaq}</a>
            <NavLink href={`/privacy?lang=${lang}`}>{c.navPrivacy}</NavLink>
          </div>
        </div>
      </footer>
    </div>
  )
}

function PrivacyPage({ lang, setLang }: { lang: Lang; setLang: (v: Lang) => void }) {
  const updatedAt = useMemo(() => new Date().toISOString().slice(0, 10), [])
  const t = translations[lang]
  const c = t.copy

  return (
    <div className="page">
      <header className="header">
        <div className="container headerInner">
          <NavLink className="brand" href={`/?lang=${lang}`}>
            <LogoMark />
          </NavLink>
          <div className="headerCta">
            <LanguageSwitcher lang={lang} onChange={setLang} />
            <NavLink className="btn btnGhost" href={`/?lang=${lang}`}>
              {c.privacyBackHome}
            </NavLink>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <SectionTitle
              eyebrow={c.privacyEyebrow}
              title={c.privacyTitle}
              desc={`${c.privacyUpdatedAtPrefix}: ${updatedAt}`}
            />

            <div className="legal">
              <p>{c.privacyIntro}</p>

              <h3>{c.privacySection1Title}</h3>
              <p>{c.privacySection1Body}</p>

              <h3>{c.privacySection2Title}</h3>
              <p>{c.privacySection2Body}</p>

              <h3>{c.privacySection3Title}</h3>
              <p>{c.privacySection3Body}</p>

              <h3>{c.privacySection4Title}</h3>
              <p>{c.privacySection4Body}</p>

              <h3>{c.privacySection5Title}</h3>
              <p>
                {c.privacySection5BodyPrefix}
                <br />
                {c.privacyEmailLabel}: support@atomic.quest
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">
            <LogoMark />
            <div className="footerNote">AtomicQuest</div>
          </div>
          <div className="footerRight">
            <NavLink href="/">홈</NavLink>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const pathname = usePathname()
  const route = pathname.replace(/\/$/, '') || '/'

  const { lang, setLang } = useLang()

  return route === '/privacy' ? (
    <PrivacyPage lang={lang} setLang={setLang} />
  ) : (
    <LandingPage lang={lang} setLang={setLang} />
  )
}

export default App
