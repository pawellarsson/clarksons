import React, { useState, useEffect } from 'react';

const Reactcomp = date => {
  const [newDate, setNewDate] = useState(null);

  const callRestApi = async dateString => {
    try {
      await fetch('http://localhost:3000/', {
        method: 'POST',
        body: JSON.stringify(dateString)
      })
      .then(json => json)
      .then(data => {
        setNewDate({
          startDate: "2020-11-26T00:00:00",
          startDateVal: 637419456000000000,
          endDate: "2020-11-29T00:00:00",
          endDateVal: 637422048000000000,
          text: "26 - 29 Nov 20"
        })
      }); // This should be like this .then(data => setNewDate(data));
    }
    catch(e) { console.warn(e) }
  };

  useEffect(() => {
    callRestApi(date.date);
  }, []);

  return (
    <div>
      {
        newDate && Object.keys(newDate).map(d => <div>{d}: {newDate[d]}</div>)
      }
    </div>
  )
};

export default Reactcomp;
