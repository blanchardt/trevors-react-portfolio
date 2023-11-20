import { Link } from 'react-router-dom';

export default function Resume() {
  return (
    <div className="container">
      <h2 className='pt-3 pb-5'>Contact</h2>
      <p className="pb-2">Download my <Link to="../assets/files/Trevor%20Blanchard%20Resume.pdf">resume</Link></p>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
      </ul>
    </div>
  );
}
