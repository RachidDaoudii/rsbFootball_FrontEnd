import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Physicality',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Pressing',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Goals',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Attacking',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Possession',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Counters',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    subject: 'Defending',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const PureComponent = ()=> {

    return (
      <ResponsiveContainer width="50%" height="50%" style={{position:"absolute" ,top:180,right:30}}>
        <RadarChart cx="80%" cy="20%" outerRadius="40%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject"  stroke="#FFF" fill="#FFF"  />
          <Radar name="Mike" dataKey="A" stroke="#FF5733" fill="#FF5733" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
}

export default PureComponent;
