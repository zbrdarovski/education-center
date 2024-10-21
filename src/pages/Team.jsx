import React from 'react';

// Example team data
const teamMembers = [
  {
    name: 'Марија Запутил',
    area: 'Професорка српског језика и књижевности',
    bio: 'Успешно је завршила студије на Филозофском факултету Универзитета у Београду, где је стекла звање дипломираног филолога српског језика и књижевности – master. Своју наставничку каријеру започела је 2007. године у Средњој музичкој школи „Стеван Мокрањац“ и Пожаревачкој гимназији, где и данас ради као професорка српског језика и књижевности. Захваљујући својој преданости, професионализму и педагошким вештинама, напредовала је у звању, те је 2022. године стекла звање Самосталног педагошког саветника. Марија Запутил је активно укључена у бројне стручне и професионалне организације. Од 2018. године обавља функцију техничког секретара Друштва за српски језик и књижевност Србије, као и секретара истог друштва за Браничевски округ од 2014. године. Такође, члан је Клуба љубитеља књиге „Мајдан“, Друштва предметних дидактичара Србије и Педагошког друштва Србије. Активно бави лектуром и коректуром текстова, а њена љубав према језику и књижевности огледа се у бројним ангажманима у стручним удружењима и клубовима. Ауторка је бројних ауторских и коауторских радова који обухватају различите аспекте језичке и стилске анализе. До сада је објавила 25 стручна рада, 23 приказа, 6 примера добре праксе, ауторка је једног приручника за ИК БИГЗ, и коауторка двеју збирки тестова у издању Друштва за српски језик и књижевност Србије. Рецензенткиња је 7 акредитованих уџбеника за ИК БИГЗ и Нови Логос. Добитница је бројних захвалница и признања. Са својим ученицима у Пожаревачкој гимназији основала је Лингвистичку секцију. Лингвистичка секција освојила је 5 првих републичких награда и једну другу републичку награду. Такође, њени ученици сваке године освајају републичке награде на разним такмичењима: Такмичење из српског језика и језичке културе (укупно 8 републичких награда), Такмичење из књижевности „Књижевна олимпијада“ (укупно 13 републичких награда), разни литерарни конкурси на различитим нивоима (од школских до међународних).',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Име инструктора',
    area: 'Подручје инструктора',
    bio: 'Биографија инструктора',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Име инструктора',
    area: 'Подручје инструктора',
    bio: 'Биографија инструктора',
    image: 'https://via.placeholder.com/150',
  },
  
  // Add more team members as needed
];

function Instructors() {
  return (
    <div className="relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 z-10 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Инструктори</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white bg-opacity-20 rounded-lg shadow-md p-6 text-left">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p>{member.area}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Instructors;
