import React from 'react';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';

export default function page() {
  return (
    <div
      style={{
        backgroundImage: `url(/movie.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="min-h-screen ">
        <div className="flex items-center justify-center bg-base-300 w-1/3 mx-auto mb-4 rounded glass">
          <SubHeading title="about FLixer" iconClass="fas fa-film" />
        </div>
        <div className="container gap-5 grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto mb-4 ">
          <div className="card items-center border-2 rounded-md shadow-lg bg-base-300 m-7">
            <div className="card-title">
              <SubHeading
                title="what is flixer..?"
                iconClass="fas fa-info-circle"
              />
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <i className="fas fa-check p-2"></i>
                  The flixer app lets you search the vast imdb database to
                  discover info on your favorite tv shows and movies
                </li>
                <li>
                  <i className="fas fa-check p-2"></i>
                  Search by your favorite actor, movie or TV show
                </li>
              </ul>
            </div>
          </div>
          <div className="card items-center border-2 rounded-md shadow-lg bg-base-300 m-7">
            <div className="card-title">
              <SubHeading
                title="upcoming features"
                iconClass="fas fa-info-circle"
              />
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <i className="fas fa-check p-2"></i>
                  Additional info for each result using dynamic routes (for the
                  nerds). Whatever will enhance the user experience.
                </li>
                <li>
                  <i className="fas fa-check p-2"></i>
                  An add to favorite lists seems like the next logical feature.
                </li>
              </ul>
            </div>
          </div>
          <div className="card items-center border-2 rounded-md shadow-lg bg-base-300 m-7">
            <div className="card-title">
              <SubHeading title="Feedback" iconClass="fas fa-info-circle" />
            </div>
            <div className="card-body">
              <p>Please provide feedback on the your user experience.</p>
              <br />
              <p>Your feedback is what I draw on to make improvements 😊</p>
            </div>
          </div>
          <div className="card items-center border-2 rounded-md shadow-lg bg-base-300 m-7">
            <div className="card-title">
              <SubHeading
                title="Upcoming versions"
                iconClass="fas fa-info-circle"
              />
            </div>
            <div className="card-body">
              <p>
                As changes are made the user interface will change over time.
              </p>
              <br/>
              <p>
                I will be adding additional features to the app as time goes on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}