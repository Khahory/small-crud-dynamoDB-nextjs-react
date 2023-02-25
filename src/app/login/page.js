import LoginForm from "@/app/login/LoginForm";
import CreateTable from "@/app/login/createTable";
import AddData from "@/app/login/adddata";
import ViewData from "@/app/login/viewdata";

const Home = () => {

    return (
        <main>
            <div className={'container'}>
                <LoginForm />
                <CreateTable />
                <ViewData />
                <AddData />
            </div>
        </main>
    );
}

export default Home;
