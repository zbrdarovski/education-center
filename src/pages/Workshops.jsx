import React from 'react';

// Import your images
import choir from '../assets/images/choir.jpg';
import classes from '../assets/images/classes.jpg';
import finals from '../assets/images/finals.jpg';
import kids from '../assets/images/kids.jpg';

const workshops = [
  {
    title: 'Програм малци-зналци',
    date: 'Програм почиње са радом 01.11.2024 године и траје до 30.06.2025 године. Време одржавања наставе је понедељак среда и петак. Беби зналци од 17.00 до 17.45. Јуниор зналци од 18.00 до 18.45. Сениори зналци од 19.00 до 20.00 часова.',
    instructor: 'Име инструктора',
    description: 'Програм малци-зналци је програм кој се базира на побољшање моторичких способности деце узраста од 4 до 6 година кроз вежбе и игру, подстицање креативног развоја код деце (цртање и израда предмета) упознавање деце са наукама као што су хемија, физика, математика, билологија, историја и географија кроз игру и начине које су прилагођене узрасту полазника. У зависности од узраста часови трају од 45 до 60 минута (4 ГОДИНА ЧАС 45 МИНУТА, 5 ГОДИНА ЧАС 45 МИНУТА И 6 ГОДИНА ЧАС 60 МИНУТА). Програм се реализује у континуитету и то три пута недељно у групама од по 10 полазника.',
    image: kids, // Add image here
    email: 'malciznalci@ecmrezaznanja.com',
    subject: 'Пријава за програм малци-зналци'
  },
  {
    title: 'Програм допуне знања школарци-зналци за основну школу',
    date: 'Програм школарци-зналци почиње са радом од 01.11.2024 и траје до 30.05.2025 године. Настава се одвија уторком и четвртком.',
    instructor: 'Име инструктора',
    description: 'Програм допуне знања школарци-зналци за основну школу је програм намењен ученицима школског узраста и то од првог до четвртог разреда. Програм је осмишљен да полазницима пружи подршку у усвајању функционалног знања уз помоћ учитеља и педагога са посебним освртом на технике учења. Програм се реализује два пута недељно у трајењу од 60 минута у групама до 5 полазника.',
    // No image for this workshop
    email: 'skolarciznalci@ecmrezaznanja.com',
    subject: 'Пријава за програм допуне знања школарци-зналци'
  },
  {
    title: 'Програм допуне знања и лакше савладавање задатака',
    date: 'Програм почиње са радом од 01.11.2024 и траје до 30.05.2025 године.',
    instructor: 'Име инструктора',
    description: 'Програм допуне знања и лакше савладавање задатака је намењен ученицима од петог до седмог разреда. У овом програму настава се реализује једанпута недељно по предмету у трајењу од 60 минута, односно три пута недељно за групу од три предмета. Програм нуди индивидуалне часове као и групну наставу. Овај програм нуди и могућност професијоналне оријентације, као и могућност технике учења ради стицања функционалног знања. Модул часова: индивидуални и група до пет полазника. Приступ индивидуализовани.',
    image: classes, // Add image here
    email: 'office@ecmrezaznanja.com',
    subject: 'Пријава за програм допуне знања и лакше савладавање задатака'
  },
  {
    title: 'Завршни испит',
    date: 'Циклус припреме почиње са тестирањима 30.11 и 01.12.2024 а настава почиње 07.12.2024 и траје све до 15.06.2025 године.',
    instructor: 'Име инструктора',
    description: 'Програм завршног испита је програм прилагођен припремној настави за завршни испит, настава се одвија по групама, и то група до пет полазника или група до дванаест полазника, полазници програма минимум пута месечно врше проверу знања, а законски заступници родитељи/старатељи на месечном нивоу добијају анализу постигнутих резултата. На основу индикатора креирани од стране предметног наставника, психолга и педагога врши се анализа савладаног знања, чиме се доприноси да сваки полазник добије индивидуализовани приступ и потребну подршку за постизање изузетних резултата на завршном испиту. Програм обухвата следеће предмете српски језик и књижевност, математика и изборни предмет по жељи полазника. Настава се одвија суботом и недељом у трајању од 3 сата и 30 минута (три часа од по 60 минута са паузама од 15 минута између сваког предмета). За полазнике програма завршних разреда обезбеђени су бесплатни тестови професионалног оријентисања.',
    image: finals, // Add image here
    email: 'office@ecmrezaznanja.com',
    subject: 'Пријава за програм припреме за завршни испит'
  },
  {
    title: 'ХОРИЋ',
    date: 'Хорић понедељак и петак од 19.00 до 20.00. Популано певање се одвија суботом од 13.00 или у току недеље у договору са професором.',
    instructor: 'Име инструктора',
    description: 'Едукативни центар има и своји хорић чланови хора су деца узраста од 6 година до 12 година. Два пута недељно у трајењу од 60 минута. Популано певање 60 минута једном недељно.',
    image: choir,
    email: 'horic@ecmrezaznanja.com',
    subject: 'Пријава за програм Хорић'
  },
  // Add more workshops as needed
];

function Workshops() {
  // Function to copy email to clipboard
  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    alert('Емаил је копиран!');
  };

  return (
    <div className="relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 z-10 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Радионице</h2>
        <div className="space-y-6">
          {workshops.map((workshop, index) => (
            <div key={index} className="bg-white bg-opacity-25 rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-center mb-4">{workshop.title}</h3>
              {workshop.image && (
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full sm:w-1/2 h-auto object-cover rounded-md mb-4 mx-auto"
                />
              )}
              <p className="text-base mb-2">{workshop.date}</p>
              <p className="text-base mb-2">Инструктор: {workshop.instructor}</p>
              <p className="text-base mb-2">{workshop.description}</p>

              {/* Email Section */}
              <div className="mt-4 flex flex-col items-center">
                <label className="text-base mb-2">Емаил за пријаву:</label>
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <input
                    type="text"
                    value={workshop.email}
                    readOnly
                    className="text-black px-3 py-2 rounded-md w-full sm:w-auto text-center"
                  />
                  <button
                    onClick={() => handleCopyEmail(workshop.email)}
                    className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-900"
                  >
                    Копирај емаил
                  </button>
                </div>
              </div>

              {/* Registration Button */}
              <div className="mt-4 flex justify-center">
                <a
                  href={`mailto:${workshop.email}?subject=${encodeURIComponent(workshop.subject)}`}
                  className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-900"
                >
                  Пријавите се
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Workshops;
