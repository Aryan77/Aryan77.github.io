import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experiences.length) return null

  return (
    <section id='experience' className='section__experience'>
      <div className='history-tl-container'>
        <br />
        <br />

        <ul className='tl'>
          <li className='tl-item' ng-repeat='item in retailer_history'>
            <div className='item-title'>
              <a
                href='https://unipantry-site.webflow.io/'
                className='link link--nav'
              >
                UniPantry
              </a>
            </div>

            <div className='item-detail'>
              <b>
                Software Engineer Intern <br /> Feb 2022 - Present <br />
                Ithaca, New York
              </b>
              <br />
              <br />
              Beginning my onboarding!
            </div>
          </li>

          <li className='tl-item' ng-repeat='item in retailer_history'>
            <div className='item-title'>
              <a href='https://www.cornelldti.org/' className='link link--nav'>
                AI Learners
              </a>
            </div>

            <div className='item-detail'>
              <b>
                Software Engineer Intern <br /> Dec 2021 - Feb 2022 <br />
                Ithaca, New York
              </b>
              <br />
              <br />
              Worked on a major refactoring of the game engine, so instead of
              coding games manually, the engine would generate them
              automatically by parsing the internal representation of game data.
            </div>
          </li>

          <li className='tl-item' ng-repeat='item in retailer_history'>
            {/*
            <div className='timestamp'>
              <b>Oct 2021 - Present</b>
              <br />
              Ithaca, New York
              <br />
            </div>
            */}
            <div className='item-title'>
              <a href='https://www.cornelldti.org/' className='link link--nav'>
                Cornell DTI
              </a>
            </div>

            <div className='item-detail'>
              <b>
                Software Engineer <br /> Sep 2021 - Feb 2022 (Currently on
                sabbatical) <br /> Ithaca, New York
              </b>
              <br />
              <br />
              Working on{' '}
              <a href='https://courseplan.io/' className='link link--nav'>
                CoursePlan
              </a>
              , specifically on a new feature that would provide students a
              suggested template for a 4-year completion of their major and plan
              classes accordingly.
            </div>
          </li>
          <li className='tl-item' ng-repeat='item in retailer_history'>
            <div className='item-title'>
              <a href='https://www.f1soft.com/' className='link link--nav'>
                F1Soft International
              </a>
            </div>

            <div className='item-detail'>
              <b>
                Junior Software Engineer (part-time) <br /> Aug 2020 - Aug 2021{' '}
                <br /> Kathmandu, Nepal
              </b>
              <br />
              <br />- Worked on the web version of{' '}
              <a href='https://www.esewa.com.np/' className='link link--nav'>
                esewa.com
              </a>
              , the largest online payment service in Nepal with more than 10
              million users; I was part of the team that integrated payment
              services of other companies into our app. <br />
              - Improved user performance significantly by implementing a robust
              system of caching and prefetching most commonly used services.
              <br />
              <br />
              My mentor was kind enough to write me an{' '}
              <a
                href='https://www.linkedin.com/in/aryan-yadav-2b95801b5/'
                className='link link--nav'
              >
                excellent recommendation on my LinkedIn page
              </a>
              .
              <br />
            </div>
          </li>
          <li className='tl-item' ng-repeat='item in retailer_history'>
            <div className='item-title'>
              <a href='https://www.f1soft.com/' className='link link--nav'>
                F1Soft International
              </a>
            </div>
            <div className='item-detail'>
              <b>
                Software Engineer Intern <br /> Jun 2020 - Aug 2020 <br />
                Ithaca, New York
              </b>
              <br />
              <br />
              Documented API spec for new payment services and implemented the
              respective routes, testing everything thoroughly.
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Experience
