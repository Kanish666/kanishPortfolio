import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Services = () => {
  return (
    <section  className="bg-bg_light_primary" id="projects">
    <div className="md:container px-5 py-14 bg-bg_light_primary">
      <h2 className="title" data-aos="fade-down">
        {"Projects"}
      </h2>
      <h4 className="subtitle" data-aos="fade-down">
        {"My Experience"}
      </h4>
      <br />
      <div className="flex gap-5 justify-between flex-wrap group">
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{color: '#fff', borderTop: "4px solid #B6CCF5" }}
    contentArrowStyle={{ borderRight: '7px solid  #D5E3F1' }}
    iconStyle={{ background: '#B6CCF5', color: '#fff' }}
    date="Sep 2023 - present"
  >
    <h6>Open Access Technology International</h6>
    <h4 className="vertical-timeline-element-title">AMIHeadend</h4>
    <h6 className="vertical-timeline-element-subtitle">Role - Software Developer</h6>
    <h5 className="vertical-timeline-element-subtitle" style={{marginTop: '0.5rem'}}>
      Tech - Ext JS, C#
    </h5>
    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
    Web Application design, working with Design System Team
    </p>
    <ul className='text-slate-500' style={{ listStyle: 'outside'}}>
      <li>Design and Developed multiple components consumed by Web application.</li>
      <li>Handling the different version of common components.</li>
      <li> Created new displays and implemented features to enhance user experience and interface functionality.</li>
      <li> focusing on innovative design and seamless delivery within the energy management and utility sectors.
</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Nov 2024 - present"
    contentStyle={{color: '#fff', borderTop: "4px solid #B6CCF5" }}
    contentArrowStyle={{ borderRight: '7px solid  #D5E3F1' }}
    iconStyle={{ background: '#B6CCF5', color: '#fff' }}
  >
    <h6>Open Access Technology International</h6>
    <h4 className="vertical-timeline-element-title">Grafana</h4>
    <h6 className="vertical-timeline-element-subtitle">Role - Software Developer</h6>
    <h5 className="vertical-timeline-element-subtitle" style={{marginTop: '0.5rem'}}>
    Tech -ReactJS, TypeScript, Grafana Plugin SDK
      </h5>
    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
    Contributed to the Grafana platform, enabling advanced monitoring, visualization, and alerting for real-time system metrics and data insights.
    </p>
    <ul className='text-slate-500' style={{ listStyle: 'outside'}}>
      <li>Improved dashboards to make data more useful and easy to understand.</li>
      <li>Optimized dashboards and visualizations to provide actionable insights for end users.</li>
     
    </ul>

  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Nov 2021 - May 2022"
    contentStyle={{color: '#fff', borderTop: "4px solid #B6CCF5" }}
    contentArrowStyle={{ borderRight: '7px solid  #D5E3F1' }}
    iconStyle={{ background: '#B6CCF5', color: '#fff' }}
    
  >
    <h6>ThoughtWorks</h6>
    <h4 className="vertical-timeline-element-title">Finance & Bank Domain</h4>
    <h6 className="vertical-timeline-element-subtitle">Role - UI Developer</h6>
    <h5 className="vertical-timeline-element-subtitle" style={{marginTop: '0.5rem'}}>
    Tech - Angular JS, SCSS, Jasmine
      </h5>
    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
    Worked in Customer engagement software which tracks all investment accounts under one platform
    </p>
    <ul className='text-slate-500' style={{ listStyle: 'outside'}}>
    <li>Worked mainly in legacy tech stack, onboarded quickly.</li>
      <li>Provided multiple KT session on Web Performance to the team.</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Dec 2019 - Oct 2021"
    contentStyle={{color: '#fff', borderTop: "4px solid #B6CCF5" }}
    contentArrowStyle={{ borderRight: '7px solid  #D5E3F1' }}
    iconStyle={{ background: '#B6CCF5', color: '#fff' }}
    
  >
    <h6>ThoughtWorks</h6>
    <h4 className="vertical-timeline-element-title">Health Analytics Domain</h4>
    <h6 className="vertical-timeline-element-subtitle">Role - UI Developer</h6>
    <h5 className="vertical-timeline-element-subtitle" style={{marginTop: '0.5rem'}}>Tech - Angular 8, Jasmine, Springboot, Azure log analytics</h5>
    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>Reporting and CRM for Value based care management </p>
    <ul className='text-slate-500' style={{ listStyle: 'outside'}}>
      <li>Developed and owned multiple features.</li>
      <li>Provide multiple KT’s in the team as well as to the clients.</li>
      <li>Point of Contact from UI.</li>
      <li>Followed TDD.</li>
      <li>Not only in UI but also worked on multiple task in springboot.</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Feb 2018- July 2019"
    contentStyle={{color: '#fff', borderTop: "4px solid #B6CCF5" }}
    contentArrowStyle={{ borderRight: '7px solid  #D5E3F1' }}
    iconStyle={{ background: '#B6CCF5', color: '#fff' }}
   
  >
    <h4 className="vertical-timeline-element-title">Mark Software Systems, Chandigarh</h4>
    <h6 className="vertical-timeline-element-subtitle">Role - Web Designer</h6>
    <h5 className="vertical-timeline-element-subtitle" style={{marginTop: '0.5rem'}}>Tech - Angular 2+, Javascript, HTML5, CSS3</h5>
    <ul className='text-slate-500' style={{ listStyle: 'outside'}}>
      <li>Designed and developed responsive websites with a focus on client requirements.</li>
      <li>Successfully managed projects in Angular 2+. </li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Aug 2017- Feb 2018"
    contentStyle={{color: '#fff', borderTop: "4px solid #B6CCF5" }}
    contentArrowStyle={{ borderRight: '7px solid  #D5E3F1' }}
    iconStyle={{ background: '#B6CCF5', color: '#fff' }}
  >
    <h6>Next57, Chandigarh</h6>
    <h4 className="vertical-timeline-element-title">Review Toolbar</h4>
    <h6 className="vertical-timeline-element-subtitle">Role - Frontend Devloper (Internship)</h6>
    <h5 style={{marginTop: '0.5rem'}}>Tech - ReactJS, Javascript, HTML5, CSS3</h5>
    <ul className='text-slate-500' style={{ listStyle: 'outside'}}>
      <li>Designed, developed, and maintained a responsive website using React JS.</li>
      <li>Created and implemented a Review Toolbar, consolidating ratings and reviews from various platforms into a single, streamlined toolbar.</li>
    </ul>
  </VerticalTimelineElement> */}

</VerticalTimeline>
      </div>
    </div>

</section>
  );
};

export default Services;
