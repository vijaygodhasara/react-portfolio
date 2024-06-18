import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })

      var skills = this.props.data.skills.map(function(skill){
        return <div key={skill.category} className="skills-category">
              <h2>{skill.category}</h2>
                <div className="skills-items">
                  {skill.items.map((item, index) => (
                    <div key={index} className="chip">
                      <div key={index} className="chip-content">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
      })
      //   const { data } = this.props.data;
      //   console.log("data", data);
      //   return (
      //     <div className="skills-container">
      //       {data.skills.map((skill) => (
      //         <div key={skill.name} className="skills-category">
      //           <h2>{skill.name}</h2>
      //           <div className="skills-items">
      //             {skill.items.map((item, index) => (
      //               <div key={index} className="chip">
      //                 {item}
      //               </div>
      //             ))}
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   );
      // };
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

           

				<div className="bars">
					  {skills}
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
