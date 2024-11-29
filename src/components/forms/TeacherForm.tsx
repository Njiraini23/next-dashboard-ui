"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
    username: z
    .string()
    .min(4, { message: 'Username must be at least 4 characters long' })
    .max(20, { message: 'Username must be at most 20 characters long' }),
    email: z.string().email({message:"Invalid email address"}),
    password:z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long'})
    .max(20, { message: 'Password must at most be 20 characters long'}),
    firstName:z.string().min(1, { message: 'First name is required!'}),
    firstName:z.string().min(1, { message: 'First name is required!'}),
    firstName:z.string().min(1, { message: 'First name is required!'}),
    firstName:z.string().min(1, { message: 'First name is required!'}),
    firstName:z.string().min(1, { message: 'First name is required!'}),

  });

const TeacherForm = ({
    type, 
    data
}:{
    type:"create" | "update"; 
    data?: any;
})=> {
    return (
        <form className="">input</form>
    )
};

export default TeacherForm;