import { IonIcon } from '@ionic/react';
import { bookOutline } from 'ionicons/icons';

function Resume() {
  return (
    <article className="flex flex-col w-full " data-page="resume">
      <header>
        <h2 className="text-4xl font-bold mb-6  text-white border-b-4 text-start w-[138px] justify-start border-[#cdb05a] ">Resume</h2>
      </header>

      {/* Education Section */}
      <section className="timeline mb-12  ">
        <div className="title-wrapper flex items-center mb-6  ">
          <div className="  flex g-[#202022] shadow-[0.5px_0.5px_3px_2px_black,-0.8px_-0.8px_3px_0px_white]  justify-center  text-center w-9 h-9 m-2 rounded-lg z-10 relative">
            <IonIcon icon={bookOutline} className=" text-2xl mt-1 text-[#ffdb70] z-20 relative "  />
            <span className=' absolute top-10 left-[18px] h-64
transform -translate-x-1/2 w-[2px] sm:h-56 sm:left-1/2  bg-slate-200 z-0'></span>
          </div>
          <h3 className="text-2xl font-semibold text-white">Education</h3>
        </div>

        <ul className="timeline-list list-disc space-y-6 pl-9 sm:pl-10 marker:text-[#cdb05a] z-10 relative ">
          <li className="timeline-item pl-5">
            <h4 className="text-xl font-semibold text-white text-start">R C Patel Institute of Technology, Shirpur</h4>
            <h3 className=" text-[#cdb05a] text-start">2021-Present</h3>
          </li>
          <li className="timeline-item pl-5">
            <h4 className="text-xl font-semibold text-white text-start">M J College, Jalgaon</h4>
            <h3 className="  text-[#cdb05a] text-start">2020-2021</h3>
          </li>
          <li className="timeline-item pl-5">
            <h4 className="text-xl font-semibold text-white text-start">Pragati Madhyamik Shala, Jalgaon</h4>
            <h3 className=" text-[#cdb05a] text-start">2018-2019</h3>
          </li>
        </ul>
      </section>

      {/* Experience Section */}
      {/* <section className="timeline mb-12">
        <div className="title-wrapper flex items-center mb-6">
          <div className="flex g-[#202022] shadow-[0.5px_0.5px_3px_2px_black,-0.8px_-0.8px_3px_0px_white]  justify-center  text-center w-9 h-9 m-2 rounded-lg ">
            <IonIcon icon={bookOutline} className="text-2xl mt-1 text-[#ffdb70]" />
          </div>
          <h3 className="text-2xl font-semibold text-white">Experience</h3>
        </div>

        <ul className="timeline-list space-y-6">
          <li className="timeline-item">
            <h4 className="text-xl font-semibold text-white">Creative Director</h4>
            <span className="  text-[#cdb05a] text-start">2015 — Present</span>
            <p className=" text-white">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="text-xl font-semibold text-white">Art Director</h4>
            <span className="  text-[#cdb05a]">2013 — 2015</span>
            <p className=" text-white">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="text-xl font-semibold  text-white">Web Designer</h4>
            <span className=" text-[#cdb05a]">2010 — 2013</span>
            <p className=" text-white">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
        </ul>
      </section> */}

      {/* Skills Section 1 */}
      <section className="skill">
        <h3 className="text-3xl font-bold text-center mb-6 text-white flex justify-start ">My skills</h3>
        
        <ul className="skills-list grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          
          <li className="skills-item bg-gray-800 text-white p-6 rounded-lg shadow-lg gap-1">
            {/* Skill 1 */}
            <div className="title-wrapper flex justify-between items-center mb-1">
              <h5 className="text-lg font-semibold">Web Developing</h5>
              <data value="60" className="text-lg font-semibold">60%</data>
            </div>
            <div className="skill-progress-bg bg-gray-700 h-2 rounded-full mb-3">
              <div className="skill-progress-fill bg-yellow-500 h-full rounded-full" style={{ width: '60%' }}></div>
            </div>
            {/* skill 1 end */}
            {/* Skill 2 */}
            <div className="title-wrapper flex justify-between items-center mb-1">
              <h5 className="text-lg font-semibold">Web Design</h5>
              <data value="80" className="text-lg font-semibold">80%</data>
            </div>
            <div className="skill-progress-bg bg-gray-700 h-2 rounded-full mb-3">
              <div className="skill-progress-fill bg-yellow-500 h-full rounded-full" style={{ width: '80%' }}></div>
            </div>
            {/* skill 2 end */}
            {/* Skill 3 */}
            <div className="title-wrapper flex justify-between items-center mb-1">
              <h5 className="text-lg font-semibold">Ui/Ux Design</h5>
              <data value="50" className="text-lg font-semibold">50%</data>
            </div>
            <div className="skill-progress-bg bg-gray-700 h-2 rounded-full mb-3">
              <div className="skill-progress-fill bg-yellow-500 h-full rounded-full" style={{ width: '50%' }}></div>
            </div>
            {/* skill 3 end */}
            {/* Skill 4 */}
            <div className="title-wrapper flex justify-between items-center mb-1">
              <h5 className="text-lg font-semibold">Java</h5>
              <data value="70" className="text-lg font-semibold">70%</data>
            </div>
            <div className="skill-progress-bg bg-gray-700 h-2 rounded-full mb-3">
              <div className="skill-progress-fill bg-yellow-500 h-full rounded-full" style={{ width: '70%' }}></div>
            </div>
            {/* skill 4 end */}
            {/* Skill 5 */}
            <div className="title-wrapper flex justify-between items-center mb-1">
              <h5 className="text-lg font-semibold">nodeJs</h5>
              <data value="50" className="text-lg font-semibold">50%</data>
            </div>
            <div className="skill-progress-bg bg-gray-700 h-2 rounded-full mb-3">
              <div className="skill-progress-fill bg-yellow-500 h-full rounded-full" style={{ width: '50%' }}></div>
            </div>
            {/* skill 5 end */}
            {/* Skill 6 */}
            <div className="title-wrapper flex justify-between items-center mb-1">
              <h5 className="text-lg font-semibold">MySQL</h5>
              <data value="70" className="text-lg font-semibold">70%</data>
            </div>
            <div className="skill-progress-bg bg-gray-700 h-2 rounded-full mb-3">
              <div className="skill-progress-fill bg-yellow-500 h-full rounded-full" style={{ width: '70%' }}></div>
            </div>
            {/* skill 6 end */}
           
          </li>
          {/* Other skill items */}

          <li className="skills-item bg-gray-800 text-white p-6 rounded-lg shadow-lg gap-1">
            {/* Skill 1 */}
            <div className="title-wrapper flex justify-between items-center mb-1">
              <h5 className="text-lg font-semibold">Css</h5>
              <data value="90" className="text-lg font-semibold">90%</data>
            </div>
            <div className="skill-progress-bg bg-gray-700 h-2 rounded-full mb-3">
              <div className="skill-progress-fill bg-yellow-500 h-full rounded-full" style={{ width: '90%' }}></div>
            </div>
            {/* skill 1 end */}
            {/* Skill 2 */}
            <div className="title-wrapper flex justify-between items-center mb-1">
              <h5 className="text-lg font-semibold">Tailwind </h5>
              <data value="70" className="text-lg font-semibold">70%</data>
            </div>
            <div className="skill-progress-bg bg-gray-700 h-2 rounded-full mb-3">
              <div className="skill-progress-fill bg-yellow-500 h-full rounded-full" style={{ width: '70%' }}></div>
            </div>
            {/* skill 2 end */}
            {/* Skill 3 */}
            <div className="title-wrapper flex justify-between items-center mb-1">
              <h5 className="text-lg font-semibold">JavaScript</h5>
              <data value="60" className="text-lg font-semibold">60%</data>
            </div>
            <div className="skill-progress-bg bg-gray-700 h-2 rounded-full mb-3">
              <div className="skill-progress-fill bg-yellow-500 h-full rounded-full" style={{ width: '60%' }}></div>
            </div>
            {/* skill 3 end */}
            {/* Skill 4 */}
            <div className="title-wrapper flex justify-between items-center mb-1">
              <h5 className="text-lg font-semibold">React</h5>
              <data value="70" className="text-lg font-semibold">70%</data>
            </div>
            <div className="skill-progress-bg bg-gray-700 h-2 rounded-full mb-3">
              <div className="skill-progress-fill bg-yellow-500 h-full rounded-full" style={{ width: '70%' }}></div>
            </div>
            {/* skill 4 end */}
            {/* Skill 5 */}
            <div className="title-wrapper flex justify-between items-center mb-1">
              <h5 className="text-lg font-semibold">mongoDb</h5>
              <data value="60" className="text-lg font-semibold">60%</data>
            </div>
            <div className="skill-progress-bg bg-gray-700 h-2 rounded-full mb-3">
              <div className="skill-progress-fill bg-yellow-500 h-full rounded-full" style={{ width: '60%' }}></div>
            </div>
            {/* skill 5 end */}
            {/* Skill 6 */}
            <div className="title-wrapper flex justify-between items-center mb-1">
              <h5 className="text-lg font-semibold">Java Servelet</h5>
              <data value="80" className="text-lg font-semibold">80%</data>
            </div>
            <div className="skill-progress-bg bg-gray-700 h-2 rounded-full mb-3">
              <div className="skill-progress-fill bg-yellow-500 h-full rounded-full" style={{ width: '80%' }}></div>
            </div>
            {/* skill 6 end */}
           
          </li>
        </ul>
      </section>
      
    </article>
  );
}

export default Resume;
