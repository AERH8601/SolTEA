import { NavigationCard } from "@/components/NavigationCard"

const Home = () => {
  return (
  
      <main>
          <h1>INICIO SOLTE PROJECT</h1>          
          <div>
            <NavigationCard title= 'services' description= 'Oferta de nuestros servicios' />
            <NavigationCard title= 'projects' description= 'nuestros proyectos' />
            <NavigationCard title= 'blogs' description= 'Información relacionada a la sostenibilidad' />
            <NavigationCard title= 'contact' description= 'Como contactarnos' />
          </div>
      </main>
        );
      };

      export default Home;
