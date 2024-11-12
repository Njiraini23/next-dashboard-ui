import UserCard from "@/components/UserCard"

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT SIDE */}
            <div className="w-full lg:w-2/3">
            {/*User Cards*/}
            <div className="flex gap-4 justify-between flex-wrap">
                <UserCard type="student"/>
                <UserCard type="teacher"/>
                <UserCard type="parent"/>
                <UserCard type="staff"/>
            </div>
            {/*MIDDLE CHARTS*/}
            <div className="flex gap-flex-col lg:flex-row">
              {/*COUNT CHART */}  
            </div>
            {/*BOTTOM CHARTS*/}
            <div className=""></div>
            </div>
            {/*Right*/}
            <div className="w-full lg:w-1/3"></div>
        </div>
    )
}
export default AdminPage