import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Image, Separator} from './common';
import {Header} from './header';

export class Publications extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | Publications</title>
          <meta name="description" content="list of publications about PHOEBE - including poster and conference proceedings."/>
        </Helmet>
        <Header>
          <span className="hidden-xs"><h1>Publications</h1></span>
          <span className="visible-xs"><h1>Papers</h1></span>
        </Header>
        <Content>
          <div style={{textAlign: "center", padding: "25px"}}>
            <Link to="https://doi.org/10.1088/978-0-7503-1287-5" hideExternal={true}><Image src="/images/book_cover.jpg" className="img-dropshadow" height="200px"/><br/><br/>Modeling and Analysis of Eclipsing Binary Stars:<br/>The theory and design principles of PHOEBE<br/>Andrej Prša (2018)</Link>
          </div>

          <h2>PHOEBE Release Series</h2>
          <Publication author="Horvat et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/#abs/2018ApJS..237...26H" pdf="2018Horvat+.pdf" title="Physics of Eclipsing Binaries. III. Spin-Orbit Misalignment" release="2.1"/>
          <Publication author="Prša et al. (2016)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2016ApJS..227...29P" pdf="2016Prsa+.pdf" title="Physics of Eclipsing Binaries. II. Toward the Increased Model Fidelity" release="2.0"/>
          <Publication author="Prša & Zwitter (2005)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2005ApJ...628..426P" pdf="2005Prsa+.pdf" title="A Computational Guide to Physics of Eclipsing Binaries. I. Demonstrations and Perspectives" release="legacy"/>
          <Separator large={false}/>
        </Content>

        <Content dark={true}>
          <h2>PHOEBE Conference Proceedings</h2>
          <Publication author="Degroote et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..277D" title="PHOEBE 2.0 - Where no model has gone before"/>
          <Publication author="Prsa et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..259P" title="Physics of Eclipsing Binaries: Motivation for the New-Age Modeling Suite"/>
          <Publication author="Bloemen et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..269B" title="Physics of Eclipsing Binaries: Modelling in the new era of ultra-high precision photometry"/>
          <Publication author="Conroy et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..295C" title="PHOEBE 2.0 - Triple and multiple systems"/>
          <Publication author="Hambleton et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2013EAS....64..285H" title="Physics of Eclipsing Binaries: Heartbeat Stars and Tidally Induced Pulsations"/>
          <Publication author="Prša et al. (2007)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2007ASPC..370..175P" title="Introducing Powell's Direction Set Method to a Fully Automated Analysis of Eclipsing Binary Stars"/>
          <Separator flip={true} large={false}/>
        </Content>

        <Content>
          <h2>PHOEBE Talks &amp; Posters</h2>
          <Publication author="Conroy et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/#abs/2019AAS...23334827C" title="Considerations and Design Principles for the 2.1 Release of the PHOEBE Eclipsing Binary Modeling Code"/>
          <Publication author="Conroy et al. (2017)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2017AAS...22934422C" title="Robust Modeling of Stellar Triples in PHOEBE"/>
          <Publication author="Horvat et al. (2017)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2017AAS...22934423H" title="Heat Redistribution and Misaligned Orbit Models in PHOEBE"/>
          <Publication author="Prša et al. (2017)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2017AAS...22934409P" title="Using Gaussian Processes to Model Noise in Eclipsing Binary Light Curves"/>
          <Publication author="Prša et al. (2012)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2012IAUS..282..271P" title="Advances in Modeling Eclipsing Binary Stars in the Era of Large All-Sky Surveys with EBAI and PHOEBE"/>
          <Publication author="Prša et al. (2010)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2010AAS...21541931P" title="Revising the Model of Eclipsing Binary Stars for the Kepler Era"/>
          <Separator flip={false} large={false}/>
        </Content>

        <Content dark={true}>
          <h2>Related Papers by the PHOEBE Development Team</h2>
          <Publication author="Kochoska et al. (submitted)" adsLink="https://ui.adsabs.harvard.edu/#abs/2018arXiv180408781K" title="COBAIN: generalized 3D radiative transfer code for contact binary atmospheres"/>
          <Publication author="Horvat et al. (2019, in press)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2018arXiv180907963H" title="Complete bolometric treatment of irradiation effects"/>
          <Publication author="Conroy et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/#abs/2018ApJ...854..163C" title="The Effects of Barycentric and Asymmetric Transverse Velocities on Eclipse and Transit Times"/>
          <Separator flip={true} large={false}/>
        </Content>

        <Content>
          <h2>Papers that Use PHOEBE 2</h2>
          <Link to={"http://github.com/phoebe-project/phoebe-project.org/issues/new?title=new+paper+that+uses+phoebe"} hideExternal={true}><span className="fas fa-fw fa-plus"></span> Suggest New Entry</Link>

          {/* Look through citations in release papers since those listed below, confirm that citation is by "using" PHOEBE 2 instead of just mentioning it, and add new entries to the top */}

          <Publication author="Jones et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2019MNRAS.482L..75J" title="The short orbital period binary star at the heart of the planetary nebula M 3-1★"/>
          <Publication author="Boffin et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2018A&A...619A..84B" title="When nature tries to trick us. An eclipsing eccentric close binary superposed on the central star of the planetary nebula M 3-2"/>
          <Publication author="Papageorgiou et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2018ApJS..238....4P" title="An Updated Catalog of 4680 Northern Eclipsing Binaries with Algol-type Light-curve Morphology in the Catalina Sky Surveys"/>
          <Publication author="Kochukhov et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2018MNRAS.478.1749K" title="HD 66051: the first eclipsing binary hosting an early-type magnetic star"/>
          <Publication author="von Essen et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2018A&A...615A..79V" title="Kepler Object of Interest Network. I. First results combining ground- and space-based observations of Kepler systems with transit timing variations"/>
          <Publication author="Jones & Boffin (2017)" adsLink="https://ui.adsabs.harvard.edu/?#abs/2017NatAs...1E.117J" title="Binary stars as the key to understanding planetary nebulae"/>


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
        <Link to={this.props.adsLink} hideExternal={true}>{this.props.author}</Link>
        {this.props.pdf ? <span> (<Link to={"/pdf/"+this.props.pdf}>download pdf</Link>) </span> : null}
        <span> - {this.props.title}</span>
        {this.props.release ? <span> (<Link to={"/releases/"+this.props.release+"/"}>PHOEBE {this.props.release} release</Link>)</span> : null}
      </div>
    )
  }
}
