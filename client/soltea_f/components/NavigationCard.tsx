import { title } from "process";

interface NavigationCardProps {
    title: string;
    description: string;
    href: string;
}

const NavigationCard = ({title, description, href}: NavigationCardProps) => {
    return (
        <div>
            <a href="href">
                <div>
                    <h3> {title} </h3>
                    <span>{description}</span>
                </div>
            </a>
        </div>
    );
    
};

export { NavigationCard };