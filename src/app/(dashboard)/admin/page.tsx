import UserCard from "@/components/UserCard"

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT SIDE */}
            <div className="w-full lg:w-2/3">
            {/*User Cards*/}
            <div className="">
                <UserCard type="student"/>
                <UserCard type="teacher"/>
                <UserCard type="parent"/>
                <UserCard type="staff"/>
            </div>
            </div>
            {/*Right*/}
            <div className="w-full lg:w-1/3">R</div>
        </div>
    )
}
export default AdminPage