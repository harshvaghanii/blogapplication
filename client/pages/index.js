import Link from "next/link";
import Layout from "../components/Layout";
import "../styles/index.module.css";
const Index = () => {
    return (
        <Layout>
            <h2>Index Page</h2>
            <Link href={"/signup"}>Signup</Link>
            <br />
            <Link href={"/login"}>Login</Link>
        </Layout>
    );
};

export default Index;
