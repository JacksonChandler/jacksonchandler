import { TechTable } from "./TechTable";

export interface JobSectionProps {
  headerLabel: string;
  dateRange: string;
  jobTitle: string;
  jobSubtitle: string;
  jobDescription: string;
  techs: string[];
}

export function JobSection(props: JobSectionProps) {
  return (
    <>
      <div className='section'>
        <div className='row'>
          <div className='col-md-10'>
            <h2>{props.headerLabel}</h2>
          </div>
          <div className='col-md-2'>
            <h6>{props.dateRange}</h6>
          </div>
        </div>
        <h4>{props.jobTitle}</h4>
        <h5>{props.jobSubtitle}</h5>
        <p>{props.jobDescription}</p>
        <h4>Technologies Worked With</h4>
        <TechTable techs={props.techs} />
      </div>
      <br />
    </>
  );
}
