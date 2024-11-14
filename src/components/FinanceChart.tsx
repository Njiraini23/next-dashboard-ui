"use client"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      income: 4000,
      expenses: 2400,
    },
    {
      name: 'Feb',
      income: 3000,
      expenses: 1398,
     },
    {
      name: 'March',
      income: 2000,
      expenses: 9800,
      },
    {
      name: 'April',
      income: 2780,
       expenses: 3908,
     },
    {
      name: 'May',
      income: 1890,
      expenses: 4800,
      },
    {
      name: 'June',
      income: 2390,
      expenses: 3800,
      },
    {
      name: 'July',
      income: 3490,
      expenses: 4300,
      },
    {
        name: 'Aug',
        income: 3490,
        expenses: 4300,
      },
      {
        name: 'Sept',
        income: 3490,
        expenses: 4300,
      },
      {
        name: 'Oct',
        income: 3490,
        expenses: 4300,
        },
      {
        name: 'Nov',
        income: 3490,
        expenses: 4300,
        },
      {
        name: 'Dec',
        income: 3490,
        expenses: 4300,
        },
  ];
  

const FinanceChart =()=>{
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20}/>
            </div>
            <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} 
          tick={{fill:"#d1d5db"}} 
          tickLine={false} 
          />
          <YAxis axisLine={false} 
          tick={{fill:"#d1d5db"}} 
          tickLine={false} />
          <Tooltip />
          <Legend />
          <Line type="monotone" 
          dataKey="income" 
          stroke="#C3EBFA" 
          activeDot={{ r: 8 }}
           />
          <Line type="monotone" 
          dataKey="expenses" 
          stroke="#CFCEFF" />
        </LineChart>
      </ResponsiveContainer>
            </div>
    )
}

export default FinanceChart;