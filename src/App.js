import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
// import './App.css';

const App=()=>{
    const options ={
        chart: {
        type: 'pie'
      },
      title: {
        text: 'Engineering Department'
      },
       series: [
        {
        name: 'Students',
        colorByPoint: true,
        data: [
          {
            name: 'computer Science',
            y: 39.5,
            sliced: true,
            selected: true
          },
          {
            name: 'Information Technology',
            y: 18.34
          },
          {
            name: 'Electronics and Communication',
            y: 20.2
          },
          {
            name: 'civil',
            y: 10.23
          },
          {
            name: 'Mechanic',
            y:11.73
          }
          ]
      }]
    };
    
    
return( 
    <div>
        <HighchartsReact highcharts={Highcharts} options={options}/>

    </div>
    
);
}
export default App;