import React from 'react';
import './Emailmsg.css';

const Emailmsg = () => {
  return (
    <div className="email">
      <div className="date">Date</div>
      <div className="subject">Subject</div>
      <div className="from">From</div>
      <div className="attachments">Attachments</div>
      <div className="type">Type</div>
    </div>
  )
};

export default Emailmsg;
