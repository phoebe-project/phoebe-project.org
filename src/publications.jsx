import React, { Component } from 'react';

import {Content, Link} from './common';
import {Header} from './header';

export class Publications extends Component {
  render() {
    return (
      <div>
        <Header>
          <h1>Publications</h1>
        </Header>
        <Content>
          <h1>PHOEBE Paper Series</h1>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/#abs/2018ApJS..237...26H" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span> Horvat et al. (2018)</a> - Physics of Eclipsing Binaries. III. Spin-Orbit Misalignment (<a href="/docs/2.1">PHOEBE 2.1</a>)
          </div>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/?#abs/2016ApJS..227...29P" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span> Prsa et al. (2016)</a> - Physics of Eclipsing Binaries. II. Toward the Increased Model Fidelity (<a href="/docs/2.0">PHOEBE 2.0</a>)
          </div>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/?#abs/2005ApJ...628..426P" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span> Prsa et al. (2005)</a> - A Computational Guide to Physics of Eclipsing Binaries. I. Demonstrations and Perspectives (<a href="/1.0">PHOEBE 1.0 legacy</a>)
          </div>


          <h1>PHOEBE Conference Proceedings</h1>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..277D" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span>  Degroote et al. (2013)</a> - PHOEBE 2.0 - Where no model has gone before
          </div>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..259P" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span>  Prsa et al. (2013)</a> - Physics of Eclipsing Binaries: Motivation for the New-Age Modeling Suite
          </div>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..269B" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span>  Bloemen et al. (2013)</a> - Physics of Eclipsing Binaries: Modelling in the new era of ultra-high precision photometry
          </div>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..295C" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span>  Conroy et al. (2013)</a> - PHOEBE 2.0 - Triple and multiple systems
          </div>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..285H" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span>  Hambleton et al. (2013)</a> - Physics of Eclipsing Binaries: Heartbeat Stars and Tidally Induced Pulsations
          </div>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/?#abs/2007ASPC..370..175P" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span>  Prsa et al. (2007)</a> - Introducing Powell's Direction Set Method to a Fully Automated Analysis of Eclipsing Binary Stars
          </div>


          <h1>PHOEBE Talks &amp; Posters</h1>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/?#abs/2017AAS...22934422C" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span>  Conroy et al. (2017)</a> - Robust Modeling of Stellar Triples in PHOEBE
          </div>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/?#abs/2017AAS...22934423H" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span>  Horvat et al. (2017)</a> - Heat Redistribution and Misaligned Orbit Models in PHOEBE
          </div>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/?#abs/2017AAS...22934409P" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span>  Prsa et al. (2017)</a> - Using Gaussian Processes to Model Noise in Eclipsing Binary Light Curves
          </div>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/?#abs/2012IAUS..282..271P" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span>  Prsa et al. (2012)</a> - Advances in Modeling Eclipsing Binary Stars in the Era of Large All-Sky Surveys with EBAI and PHOEBE
          </div>
          <div class="row">
              <a class="" href="https://ui.adsabs.harvard.edu/?#abs/2010AAS...21541931P" target="_blank" rel="noopener noreferrer"><span class="fa fa-external-link"></span>  Prsa et al. (2010)</a> - Revising the Model of Eclipsing Binary Stars for the Kepler Era
          </div>

        </Content>
      </div>
    );
  }
}
