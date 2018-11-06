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
          <Publication author="Horvat et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/#abs/2018ApJS..237...26H" pdf="pdf/horvat+2018.pdf" title="Physics of Eclipsing Binaries. III. Spin-Orbit Misalignment" release="2.1"/>
          <Publication author="Prsa et al. (2016)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2016ApJS..227...29P" pdf="pdf/prsa+2016.pdf" title="Physics of Eclipsing Binaries. II. Toward the Increased Model Fidelity" release="2.0"/>
          <Publication author="Prsa et al. (2005)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2005ApJ...628..426P" title="A Computational Guide to Physics of Eclipsing Binaries. I. Demonstrations and Perspectives" release="1.0"/>

          <h1>PHOEBE Conference Proceedings</h1>
          <Publication author="Degroote et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..277D" title="PHOEBE 2.0 - Where no model has gone before"/>
          <Publication author="Prsa et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..259P" title="Physics of Eclipsing Binaries: Motivation for the New-Age Modeling Suite"/>
          <Publication author="Bloemen et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..269B" title="Physics of Eclipsing Binaries: Modelling in the new era of ultra-high precision photometry"/>
          <Publication author="Conroy et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..295C" title="PHOEBE 2.0 - Triple and multiple systems"/>
          <Publication author="Hambleton et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..285H" title="Physics of Eclipsing Binaries: Heartbeat Stars and Tidally Induced Pulsations"/>
          <Publication author="Prsa et al. (2007)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2007ASPC..370..175P" title="Introducing Powell's Direction Set Method to a Fully Automated Analysis of Eclipsing Binary Stars"/>

          <h1>PHOEBE Talks &amp; Posters</h1>
          <Publication author="Conroy et al. (2017)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2017AAS...22934422C" title="Robust Modeling of Stellar Triples in PHOEBE"/>
          <Publication author="Horvat et al. (2017)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2017AAS...22934423H" title="Heat Redistribution and Misaligned Orbit Models in PHOEBE"/>
          <Publication author="Prsa et al. (2017)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2017AAS...22934409P" title="Using Gaussian Processes to Model Noise in Eclipsing Binary Light Curves"/>
          <Publication author="Prsa et al. (2012)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2012IAUS..282..271P" title="Advances in Modeling Eclipsing Binary Stars in the Era of Large All-Sky Surveys with EBAI and PHOEBE"/>
          <Publication author="Prsa et al. (2010)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2010AAS...21541931P" title="Revising the Model of Eclipsing Binary Stars for the Kepler Era"/>

        </Content>
      </div>
    );
  }
}

class Publication extends Component {
  render() {
    // props: adsLink, authors, title, release (optional)
    return (
      <div className="row">
        <Link to={this.props.adsLink}>{this.props.author}</Link>
        {this.props.pdf ? <span> (<Link to={"/"+this.props.pdf}>download pdf</Link>) </span> : null}
        <span> - {this.props.title}</span>
        {this.props.release ? <span> (PHOEBE {this.props.release} <Link to={"/releases/"+this.props.release+"/"}>release</Link>, <Link to={"/docs/"+this.props.release+"/"}>documentation</Link>)</span> : null}
      </div>
    )
  }
}
