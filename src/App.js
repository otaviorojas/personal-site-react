
import React, { Fragment, Component } from 'react';
//import 'materialize-css/dist/css/materialize.min.css';
import './css/materialize.css';


import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      curiositys: [
        'A cada minuto, cerca de 72 horas de conteúdo são enviadas ao site de vídeos Youtube',
        'O Brasil é o país que possui a maior comunidade japonesa fora do Japão. Só em São Paulo, moram mais de 600 mil japoneses.',
        'Devido a falta de atmosfera, as pegadas dos astronautas ainda estão na Lua'
      ],
      count: 0,
      curiosity: 'O mandarim é o idioma mais falado do mundo, o que se explica pelo fato da China ser o país mais populoso'
    };
  }


  changeWord() {
    setInterval(() => {
      if (this.state.count === this.state.curiositys.length - 1) {
        this.setState({ count: 0 })
      } else {
        this.setState({ count: this.state.count + 1 })
      }

      this.setState({ curiosity: this.state.curiositys[this.state.count] })
    }, 8000);

  }

  componentDidMount() {
    this.changeWord();
  }


  render() {
    return (
      <Fragment>
        <Header />
        <main className="no-padding">
          <div className="section white" >
            <div className="container" >



              {/* <div className="row">
              <img className="bg-image" style={{ display: this.state.visible ? 'block' : 'none' }} src="http://site-rojas.herokuapp.com/images/mold.png" />
            </div> */}




              <div className="row">

                <div className="col s12 m7">
                  <h4 className="start text-primarycolor">Olá!</h4>
                  <br />
                  <p className="start-paragraph-text text-primarycolor">
                    Eu sou o Otavio Rojas, tenho 23 anos e sou apaixonado por tecnologia.
                    </p>
                  <p className="start-paragraph-text text-primarycolor">
                    Sou graduado em Ciencia da Computação, pela Universidade Paulista e atualmente trabalho com desenvolvimento de software na maior empresa de e-commerce da America Latina.
                    </p>
                  <p className="start-paragraph-text text-primarycolor">
                    Se você esta procurando por algum desses tipos de trabalho, voce veio ao lugar certo:
                    </p>

                  <br />
                  <ul className="start-feature-list">
                    <li style={{ display: 'inline-flex' }}><i className="Tiny material-icons">settings_applications</i>&nbsp;Automatização de trabalhos manuais</li><br /><br />
                    <li style={{ display: 'inline-flex' }}><i className="Tiny material-icons">web</i>&nbsp;Desenvolvimento de sites estaticos</li><br /><br />
                    <li style={{ display: 'inline-flex' }}><i className="Tiny material-icons">settings_system_daydream</i>&nbsp;Desenvolvimento sistemas Web</li><br /><br />
                    <li style={{ display: 'inline-flex' }}><i className="Tiny material-icons">developer_mode</i>&nbsp;Desenvolvimento mobile nativo (Android ou IOS)</li><br /><br />
                    <li style={{ display: 'inline-flex' }}><i className="Tiny material-icons">desktop_mac</i>&nbsp;Desenvolvimento Web Apis</li><br /><br />

                  </ul>

                </div>
                {/* <div className="col s6 offset-s3 m5 center" >
                  <div className="col s12">
                    <div className="card-panel blue">
                      <div className="row">
                        <div className="col s12 m6" >
                          <h5 className="white-text">Você sabia que...</h5>
                        </div>
                        <div className="col s12 m6" >
                          <img src={process.env.PUBLIC_URL + '/img/teste.gif'} width="60" />
                        </div>
                      </div>
                      <h6 className="light white-text text-lighten-3">{this.state.curiosity}</h6>
                    </div>
                  </div>
                </div> */}

                <div className="col s12 m5 center" >
                  
                    <div className="card-panel blue">
                  
                  
                          <h5 className="white-text">Você sabia que...</h5>
                  
                  
                          <img src={process.env.PUBLIC_URL + '/img/teste.gif'} width="60" />
                  
                  
                      <h6 className="light white-text text-lighten-3">{this.state.curiosity}</h6>
                      
                    </div>
                  
                </div>

              </div>

            </div>
          </div>
        </main>

        <Footer />
      </Fragment>

    )
  }
}

export default App;
