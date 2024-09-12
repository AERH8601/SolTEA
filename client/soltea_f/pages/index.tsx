import { NavigationCard } from "@/components/NavigationCard"

const Home = () => {
  return (  
      <main>
          <h1>INICIO SOLTE PROJECT</h1>          
          <div>
            <NavigationCard title= 'services' description= 'Oferta de nuestros servicios' href="href"/>
            <NavigationCard title= 'projects' description= 'nuestros proyectos' href="href" />
            <NavigationCard title= 'blogs' description= 'Información relacionada a la sostenibilidad' href="href" />
            <NavigationCard title= 'contact' description= 'Como contactarnos' href="href" />
          </div>
      </main>
        );
      };

      export default Home;
