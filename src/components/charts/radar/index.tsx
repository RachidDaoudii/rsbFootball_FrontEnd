import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const PureComponent = ()=> {

    return (
      <ResponsiveContainer width="50%" height="50%" style={{position:"absolute" ,top:150,right:30}}>
        <RadarChart cx="80%" cy="20%" outerRadius="40%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject"  stroke="#FFF" fill="#FFF"  />
          {/* <PolarRadiusAxis /> */}
          <Radar name="Mike" dataKey="A" stroke="#FF5733" fill="#FF5733" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
}

export default PureComponent;
