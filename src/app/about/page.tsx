import React from 'react';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';

export default function page() {
  return (
    <div style={{ backgroundImage: `url(/movie.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="min-h-screen ">
        <Heading title="About" iconClass="fas fa-info" />
        <SubHeading title="FLix Finder" iconClass="fas fa-film" />
        <div className="container gap-5 grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto">
          <div className="card items-center border-2 rounded-md shadow-lg bg-base-300">
            <div className="card-title">
              <SubHeading title='card title' iconClass='fas fa-info-circle'/>
            </div>
            <div className="card-body">
              <p>content 1</p>
            </div>
          </div>
          <div className="card items-center border-2 rounded-md shadow-lg bg-base-300">
            <div className="card-title">
              <SubHeading title='card title' iconClass='fas fa-info-circle'/>
            </div>
            <div className="card-body">
              <p>card body</p>
            </div>
          </div>
          <div className="card items-center border-2 rounded-md shadow-lg bg-base-300">
            <div className="card-title">
              <SubHeading title='card title' iconClass='fas fa-info-circle'/>
            </div>
            <div className="card-body">
              <p>card body</p>
            </div>
          </div>
          <div className="card items-center border-2 rounded-md shadow-lg bg-base-300">
            <div className="card-title">
              <SubHeading title='card title' iconClass='fas fa-info-circle'/>
            </div>
            <div className="card-body">
              <p>card body</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}