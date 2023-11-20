import pdf from "../components/files/TrevorBlanchardResume.pdf"

export default function Resume() {
  return (
    <div className="container">
      <h2 className='pt-3 pb-5'>Contact</h2>
      {/*went to https://stackoverflow.com/questions/69289110/how-to-create-a-download-link-pdf-in-react to learn how to set up a link to download a pdf. Also credited in the readme.
      Simon, et al. “Image Height Same as Width.” Stack Overflow, 20 July 2018,    
        stackoverflow.com/questions/51447317/image-height-same-as-width. */}
      <p className="pb-2">Download my <a className="download-link" href={pdf} download="TrevorBlanchardResume.pdf">resume</a></p>
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
