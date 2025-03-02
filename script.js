// Шаблоны классов с расширенными характеристиками
const classTemplates = {
    'fullstack-wizard': {
        title: 'Fullstack Wizard',
        weapon: 'Жезл Full-Stack',
        spells: ['git push --force', 'npm install', 'docker-compose up'],
        baseLevel: 10,
        specialty: 'Мастер всех технологий',
        ultimate: 'Full Stack Overflow',
        companions: ['Junior Bot', 'Stack Overflow Spirit'],
        achievement: 'Покоритель всех языков',
        ascii: `
           /\\
          /  \\
         /    \\
        /______\\
          |  |
          |__|
        `
    },
    'devops-paladin': {
        title: 'DevOps Paladin',
        weapon: 'Священный Docker',
        spells: ['kubectl apply', 'terraform plan', 'ansible-playbook'],
        baseLevel: 12,
        specialty: 'Хранитель инфраструктуры',
        ultimate: 'Zero Downtime Deploy',
        companions: ['Jenkins Bot', 'Kubernetes Pod'],
        achievement: 'Властелин контейнеров',
        ascii: `
         /|\\
        / | \\
       /__|__\\
          |
         /|\\
        / | \\
        `
    },
    'bug-hunter': {
        title: 'Bug Hunter',
        weapon: 'Отладчик судьбы',
        spells: ['console.log', 'debugger', 'break-point'],
        baseLevel: 8,
        specialty: 'Истребитель багов',
        ultimate: 'Stack Trace Master',
        companions: ['Debug Duck', 'Error Logger'],
        achievement: 'Повелитель исключений',
        ascii: `
          ,_,
         (o,o)
         (   )
          "-"
        `
    },
    'frontend-samurai': {
        title: 'Frontend Samurai',
        weapon: 'Катана CSS',
        spells: ['flex-box', 'grid-master', 'media-query'],
        baseLevel: 9,
        specialty: 'Мастер пикселей',
        ultimate: 'Pixel Perfect Strike',
        companions: ['Chrome DevTools', 'Figma Spirit'],
        achievement: 'Гуру адаптивности',
        ascii: `
          ⚔️
         /|\\
        / | \\
          |
         / \\
        `
    },
    'backend-necromancer': {
        title: 'Backend Necromancer',
        weapon: 'Посох Legacy Code',
        spells: ['sql-injection', 'cache-invalidation', 'async-await'],
        baseLevel: 11,
        specialty: 'Повелитель баз данных',
        ultimate: 'Database Resurrection',
        companions: ['Redis Cache', 'SQL Phantom'],
        achievement: 'Властелин серверов',
        ascii: `
         /^\\
        |o o|
        |_-_|
         |||
        `
    }
};

// Генератор случайных достижений
const achievements = [
    '🏆 Победитель хакатона',
    '🎯 Мастер чистого кода',
    '🚀 Первый деплой',
    '🐛 Истребитель багов',
    '📚 Хранитель документации',
    '⚡ Молниеносный дебаггер',
    '🔥 Огненный рефакторинг',
    '🌟 Звезда GitHub',
    '🎮 Геймификатор кода',
    '🌈 Радужный CSS-мастер'
];

// Генератор случайных питомцев
const pets = [
    { name: 'Debug Duck', type: '🦆', bonus: '+5 к отладке' },
    { name: 'Git Cat', type: '🐱', bonus: '+3 к коммитам' },
    { name: 'Python Snake', type: '🐍', bonus: '+4 к автоматизации' },
    { name: 'Docker Whale', type: '🐋', bonus: '+6 к контейнеризации' },
    { name: 'JavaScript Owl', type: '🦉', bonus: '+5 к асинхронности' }
];

// Генератор случайных квестов
const quests = [
    'Победить легаси код в древнем репозитории',
    'Найти святой грааль идеальной архитектуры',
    'Приручить дикий микросервис',
    'Собрать все звёзды на GitHub',
    'Пережить код-ревью старшего разработчика',
    'Оптимизировать легендарный монолит',
    'Завершить спринт без технического долга'
];

// Вдохновляющие цитаты
const quotes = [
    'Код - это поэзия в движении',
    'Баг - это не ошибка, это незадокументированная фича',
    'Ctrl+S - путь к спокойствию',
    'git commit -m "Magic happens here"',
    'Работает? Не трогай!',
    'Любой код можно улучшить, кроме идеального',
    'В поисках вечного рефакторинга'
];

// Обработчик формы
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rpgForm');
    const copyBtn = document.getElementById('copyBtn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        generateProfile();
    });

    copyBtn.addEventListener('click', () => {
        const preview = document.getElementById('preview');
        navigator.clipboard.writeText(preview.innerText);
        copyBtn.textContent = 'Скопировано!';
        setTimeout(() => {
            copyBtn.textContent = 'Копировать код';
        }, 2000);
    });
});

function generateProfile() {
    const classType = document.getElementById('class').value;
    const skills = document.getElementById('skills').value
        .split(',')
        .map(s => s.trim())
        .filter(s => s.length > 0);

    const template = classTemplates[classType];
    const level = template.baseLevel + Math.floor(Math.random() * 5);
    const exp = Math.floor(Math.random() * 1000);
    const randomPet = pets[Math.floor(Math.random() * pets.length)];
    const randomAchievements = shuffleArray(achievements).slice(0, 3);
    
    const profile = `## 🎮 README RPG Profile  

${template.ascii}

### ⚔️ Характеристики персонажа
- 🧙‍♂️ **Класс:** ${template.title}  
- 💪 **Уровень:** ${level} (${exp}/1000 XP)
- 🎯 **Специализация:** ${template.specialty}
- ⚡ **Ультимативная способность:** \`${template.ultimate}\`

### 🎒 Снаряжение
- ⚔️ **Основное оружие:** \`${template.weapon}\`  
- 🔮 **Заклинания:** ${template.spells.map(spell => `\`${spell}\``).join(', ')}  
- 🛡️ **Боевые навыки:** ${skills.map(skill => `\`${skill}\``).join(', ')}

### 🐾 Питомец
- **${randomPet.type} ${randomPet.name}** (${randomPet.bonus})

### 🏆 Достижения
${randomAchievements.map(a => `- ${a}`).join('\n')}

### 📜 Текущий квест
"${getRandomItem(quests)}" (Прогресс: ${generateProgressBar()})

> *${getRandomItem(quotes)}*`;

    document.getElementById('preview').innerText = profile;
}

function generateProgressBar() {
    const progress = Math.floor(Math.random() * 100);
    const filled = Math.floor(progress / 20);
    return `[${'▰'.repeat(filled)}${'▱'.repeat(5-filled)}] ${progress}%`;
}

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
} 
