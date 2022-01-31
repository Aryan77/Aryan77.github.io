import { about } from '../../portfolio'
import './Current.css'

const Current = () => {
  const { name, role, description, resume, social } = about
  return (
    <div className='about center'>
      <h2 className='section__title'>Currently learning</h2>
      <p className='about__desc'>
        My class on{' '}
        <a
          href='http://www.cs.cornell.edu/courses/cs4414/2021fa/'
          className='link link--nav'
        >
          Systems programming
        </a>{' '}
        has inspired in me a love for distributed systems and cloud computing,
        and I am thus making my way through{' '}
        <a href='https://dataintensive.net/' className='link link--nav'>
          Designing Data Intensive Applications
        </a>{' '}
        by Martin Kleppman, and enjoying it immensely.
        <br />
        <br />
        Some modern databases like{' '}
        <a
          href='https://github.com/cockroachdb/cockroach'
          className='link link--nav'
        >
          cockroachdb
        </a>{' '}
        have piqued my interest, I hope to contribute to it once I have the
        adequate background. <br />
        <br />
      </p>
    </div>
  )
}

export default Current
