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
    <h4 className="vertical-timeline-element-title">AMIoT</h4>
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
    <h4 className="vertical-timeline-element-title">SmartGrid</h4>
    <h6 className="vertical-timeline-element-subtitle">Role - Senior Software Developer</h6>
    <h5 className="vertical-timeline-element-subtitle" style={{marginTop: '0.5rem'}}>
    Tech - C#, Ext JS, SQL, JavaScript.
      </h5>
    <p style={{marginTop: '0.5rem', marginBottom: '0.5rem'}}>
    Contributed to the development of Smart Grid applications used by utility companies to monitor, analyze, and manage energy system operations. 
    Worked across both frontend and backend components, building data-driven displays and implementing efficient database solutions to support real-time operational insights..
    </p>
    <ul className='text-slate-500' style={{ listStyle: 'outside'}}>
      <li>Designed and developed new user interfaces and analytical displays for utility and energy management applications.</li>
      <li>Implemented backend business logic and database operations to support grid monitoring and reporting workflows.</li>
       <li>Developed and optimized SQL queries, stored procedures, and data processing logic for large operational datasets.</li>
       <li>Enhanced application performance and usability by improving data retrieval, filtering, and visualization capabilities.</li>
       <li>ollaborated with cross-functional teams to deliver scalable solutions supporting Smart Grid and utility management operations.</li>
     
    </ul>

  </VerticalTimelineElement>


</VerticalTimeline>
      </div>
    </div>

</section>
  );
};

export default Services;
