"use client"

const FormModel = ({
    table,
    type,
    data,
    id
}:{
    table:
    |"teacher"
    |"student" 
    |"parent"
    |"subject"
    |"class"
    |"lesson"
    |"attendance"
    |"exam"
    |"event"
    |"assignment"
    |"result"
    |"announcement";
    type:"create" | "update" | "delete";
    data?:any;
    id?:number;
})=>{
    return (
        <div className="">FormModel</div>
    )
}