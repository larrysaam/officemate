import { ToolGrid } from '../../components/toolcard';
import './stylee.css'

export const Home = () => {
    return (
        <div className="home">
            <h1 className="logo">OfficeMate</h1>
            <h2 className="subtitle">Choose a Tool</h2>
            <ToolGrid />
        </div>
    );
};