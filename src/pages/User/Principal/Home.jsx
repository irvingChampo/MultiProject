import React from 'react';
import Footer from "../../../components/pages/footer/Footer";
import Header from "../../../components/pages/header/Header";
import { MasVendido } from '../../../components/MasVendido';
import { AgregadoReciente } from '../../../components/AgregadoReciente';
import { MasAgregado } from '../../../components/MasAgregado';
import { Descripcion } from '../../../components/Descripcion';

function Home() {
  return (
      <section >
        <Header />
        <section className='px-8'>
          <div>
            <Descripcion/>
          </div>
          <div className='my-10'>
            <MasVendido/>
          </div>
          <AgregadoReciente/>
          {/* <MasAgregado/> */}
        </section>
        <Footer />
      </section>

  );
}

export default Home;
