import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <p>
        Step 2: First add credits to your account.This application uses stripe library to make payments.<br/>
        To make fake payment input as follows <br/> Card no : 4242 4242 4242 4242 <br/>
        date: 09/24 <br/>
        CVC: 424<br/><br/>
        Step 3: After adding credits click on the add button on the bottom right of page and create your survey.
      </p>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
