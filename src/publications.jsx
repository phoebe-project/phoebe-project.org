import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Image, Separator} from './common';
import {Header} from './header';
import {NotFound} from './errors';

export class PublicationEntry extends Component {
  render() {
    var publication = this.props.match.params.publication

    var author = null;
    var authorsFull = null;
    var titleShort = null;
    var title = null;
    var abstract = null;
    var adsLink = null;
    var pdf = null;
    var release = null;
    var figures = [];

    if (publication=='2005Prsa+') {
      author = "Prša & Zwitter (2005)"
      authorsFull = "Prša, A.; Zwitter, T."
      titleShort = "PHOEBE I: Demonstrations and Perspectives"
      title = "A Computational Guide to Physics of Eclipsing Binaries. I. Demonstrations and Perspectives"
      abstract = "PHOEBE (PHysics Of Eclipsing BinariEs) is a modeling package for eclipsing binary stars, built on top of the widely used WD program of Wilson & Devinney. This introductory paper gives an overview of the most important scientific extensions (incorporating observational spectra of eclipsing binaries into the solution-seeking process, extracting individual temperatures from observed color indices, main-sequence constraining, and proper treatment of the reddening), numerical innovations (suggested improvements to WD's differential corrections method, the new Nelder & Mead downhill simplex method), and technical aspects (back-end scripter structure, graphical user interface). While PHOEBE retains 100% WD compatibility, its add-ons are a powerful way to enhance WD by encompassing even more physics and solution reliability. The operability of all these extensions is demonstrated on a synthetic main-sequence test binary; applications to real data will be published in follow-up papers. PHOEBE is released under the GNU General Public License, which guarantees it to be free and open to anyone interested in joining in on future development."
      adsLink = "https://ui.adsabs.harvard.edu/abs/2005ApJ...628..426P"
      pdf = "2005Prsa+.pdf"
      release = "1.0"

    } else if (publication=='2016Prsa+') {
      author = "Prša et al. (2016)"
      authorsFull = "Prša, A.; Conroy, K. E.; Horvat, M.; Pablo, H.; Kochoska, A.; Bloemen, S.; Giammarco, J.; Hambleton, K. M.; Degroote, P."
      titleShort = "PHOEBE II: Toward the Increased Model Fidelity"
      title = "Physics of Eclipsing Binaries. II. Toward the Increased Model Fidelity"
      abstract = "The precision of photometric and spectroscopic observations has been systematically improved in the last decade, mostly thanks to space-borne photometric missions and ground-based spectrographs dedicated to finding exoplanets. The field of eclipsing binary stars strongly benefited from this development. Eclipsing binaries serve as critical tools for determining fundamental stellar properties (masses, radii, temperatures, and luminosities), yet the models are not capable of reproducing observed data well, either because of the missing physics or because of insufficient precision. This led to a predicament where radiative and dynamical effects, insofar buried in noise, started showing up routinely in the data, but were not accounted for in the models. PHOEBE (PHysics Of Eclipsing BinariEs; http://phoebe-project.org) is an open source modeling code for computing theoretical light and radial velocity curves that addresses both problems by incorporating missing physics and by increasing the computational fidelity. In particular, we discuss triangulation as a superior surface discretization algorithm, meshing of rotating single stars, light travel time effects, advanced phase computation, volume conservation in eccentric orbits, and improved computation of local intensity across the stellar surfaces that includes the photon-weighted mode, the enhanced limb darkening treatment, the better reflection treatment, and Doppler boosting. Here we present the concepts on which PHOEBE is built and proofs of concept that demonstrate the increased model fidelity."
      adsLink = "https://ui.adsabs.harvard.edu/abs/2016ApJS..227...29P"
      pdf = "2016Prsa+.pdf"
      release = "2.0"
      figures = [
                  {"name": "Figure 5", "image": "2016Prsa+_fig5.png", "link": "/docs/2.0/tutorials/intens_weighting"},
                  {"name": "Figure 8", "image": "2016Prsa+_fig8.png", "link": "/docs/2.0/tutorials/irrad_method_horvat"}
                ]

    } else if (publication=='2018Horvat+') {
      author = "Horvat et al. (2018)"
      authorsFull = "Prša, A.; Conroy, K. E.; Horvat, M.; Pablo, H.; Kochoska, A.; Bloemen, S.; Giammarco, J.; Hambleton, K. M.; Degroote, P."
      titleShort = "PHOEBE III: Spin-Orbit Misalignment"
      title = "Physics of Eclipsing Binaries. III. Spin-Orbit Misalignment"
      abstract = "The precision of photometric and spectroscopic observations has been systematically improved in the last decade, mostly thanks to space-borne photometric missions and ground-based spectrographs dedicated to finding exoplanets. The field of eclipsing binary stars strongly benefited from this development. Eclipsing binaries serve as critical tools for determining fundamental stellar properties (masses, radii, temperatures, and luminosities), yet the models are not capable of reproducing observed data well, either because of the missing physics or because of insufficient precision. This led to a predicament where radiative and dynamical effects, insofar buried in noise, started showing up routinely in the data, but were not accounted for in the models. PHOEBE (PHysics Of Eclipsing BinariEs; http://phoebe-project.org) is an open source modeling code for computing theoretical light and radial velocity curves that addresses both problems by incorporating missing physics and by increasing the computational fidelity. In particular, we discuss triangulation as a superior surface discretization algorithm, meshing of rotating single stars, light travel time effects, advanced phase computation, volume conservation in eccentric orbits, and improved computation of local intensity across the stellar surfaces that includes the photon-weighted mode, the enhanced limb darkening treatment, the better reflection treatment, and Doppler boosting. Here we present the concepts on which PHOEBE is built and proofs of concept that demonstrate the increased model fidelity."
      adsLink = "https://ui.adsabs.harvard.edu/abs/2018ApJS..237...26H"
      pdf = "2018Horvat+.pdf"
      release = "2.1"
      figures = [
                  {"name": "Figure 8", "image": "2018Horvat+_fig8.png", "link": "/docs/2.1/examples/diher_misaligned"}
                ]
    } else if (publication=='2020Jones+') {
      author = "Jones et al. (2020)"
      authorsFull = "Jones, D.; Conroy, K. E., Horvat, M.; Giammarco, J.; Kochoska, A.; Pablo, H.; Brown, A.; Sowicka, P., Prša, A."
      titleShort = "PHOEBE IV: Interstellar Extinction"
      title = "Physics of Eclipsing Binaries. IV. The Impact of Interstellar Extinction on the Light Curves of Eclipsing Binaries"
      abstract = "Traditionally, the effects of interstellar extinction on binary star light curves have been treated as a uniform reduction in the observed brightness of the system that is independent of orbital phase.  However, unless the orbital plane of the system coincides with the plane of the sky, or if the two stars are completely identical and present with minimal mutual irradiation and tidal/rotational distortions, then this is unlikely to be an accurate representation of the effect of interstellar extinction.  Here, we present an updated treatment of interstellar extinction as incorporated in the PHOEBE 2.2 release (publicly available from http://phoebe-project.org) and assess the importance of using such an approach in the modeling of different types of binary systems.  We also present the incorporation of PHOENIX model atmospheres into the PHOEBE 2.2 release, providing increased fidelity on computed observables down to lower temperatures than previously available.  The importance of these new code developments is then highlighted via an extincted toy model of the eclipsing white-dwarf-subdwarf binary SDSS~J235524.29+044855.7 -- demonstrating that, in the age of LSST as well as complementary space-based photometric missions, a proper accounting for extinction and as well as the use of realistic model atmospheres will be essential in deriving accurate binary parameters."
      adsLink = "https://ui.adsabs.harvard.edu/abs/2020ApJS..247...63J"
      pdf = "2020Jones+.pdf"
      release = "2.2"
      figures = [
                  {"name": "Figure 1", "image": "2020Jones+_fig1.png", "link": "/docs/2.2/examples/extinction_BK_binary"},
                  {"name": "Figure 2", "image": "2020Jones+_fig2.png", "link": "/docs/2.2/examples/extinction_BK_binary"},
                  {"name": "Figure 3", "image": "2020Jones+_fig3.png", "link": "/docs/2.2/examples/extinction_eclipse_depth_v_teff"},
                  {"name": "Figure 4", "image": "2020Jones+_fig4.png", "link": "/docs/2.2/examples/extinction_wd_subdwarf"}
                ]

    } else {
      return (
        <NotFound>
          <h1>No publication with name: {publication}</h1>
        </NotFound>
      )
    }

    return (
      <div>
        <Helmet>
          <title>PHOEBE | Publication | {titleShort}</title>
        </Helmet>
        <Header>
          <h1>{titleShort}</h1>
        </Header>
        <Content>
          <p>
            <h2>{title}</h2>
          </p>
          <p>
            {authorsFull}
          </p>
          <p>
            <span style={{padding: "15px", fontSize: "16pt"}}><Link to={adsLink} hideExternal={true}><span className="ai ai-ads"></span> ADS</Link></span>
            <span style={{padding: "15px", fontSize: "16pt"}}><Link to={"/pdf/"+pdf}><span className="far fa-fw fa-file-pdf"></span> PDF</Link></span>
            {release ?
              <span style={{padding: "15px", fontSize: "16pt"}}><Link to={"/releases/"+release}><span className="fas fa-fw fa-tags"></span> {release} Release</Link></span>
              :
              null
            }
          </p>
          <p>
            {abstract}
          </p>
          <p>
            {figures.length > 0 ?
              <h3>Reproducible Content</h3>
              :
              null
            }
            {figures.map(figure => {
              return (
                <div>
                  <h4 style={{fontSize: "14pt"}}>{figure.name}</h4>
                  <Link to={figure.link}><img src={"/images/figures/"+figure.image} width="600px" style={{maxWidth: "100%"}}/></Link>
                </div>
              )
            })}
          </p>
        </Content>
      </div>
    )
  }
}

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
          <Publication author="Jones et al. (2020)" entryLink="/publications/2020Jones+" title="Physics of Eclipsing Binaries. IV. The Impact of Interstellar Extinction on the Light Curves of Eclipsing Binaries" release="2.2"/>
          <Publication author="Horvat et al. (2018)" entryLink="/publications/2018Horvat+" title="Physics of Eclipsing Binaries. III. Spin-Orbit Misalignment" release="2.1"/>
          <Publication author="Prša et al. (2016)" entryLink="/publications/2016Prsa+" title="Physics of Eclipsing Binaries. II. Toward the Increased Model Fidelity" release="2.0"/>
          <Publication author="Prša & Zwitter (2005)" entryLink="/publications/2005Prsa+" title="A Computational Guide to Physics of Eclipsing Binaries. I. Demonstrations and Perspectives" release="legacy"/>
          <Separator large={false}/>
        </Content>

        <Content dark={true}>
          <h2>PHOEBE Conference Proceedings</h2>
          <Publication author="Kochoska et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020CoSka..50..539K" title="Beyond DC and MCMC: alternative algorithms and approaches to fitting light curves"/>
          <Publication author="Conroy et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020CoSka..50..530C" title="Upcoming support for triple stellar systems in PHOEBE"/>
          <Publication author="Degroote et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/abs/2013EAS....64..277D" title="PHOEBE 2.0 - Where no model has gone before"/>
          <Publication author="Prša et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/abs/2013EAS....64..259P" title="Physics of Eclipsing Binaries: Motivation for the New-Age Modeling Suite"/>
          <Publication author="Bloemen et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/abs/2013EAS....64..269B" title="Physics of Eclipsing Binaries: Modelling in the new era of ultra-high precision photometry"/>
          <Publication author="Conroy et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/abs/2013EAS....64..295C" title="PHOEBE 2.0 - Triple and multiple systems"/>
          <Publication author="Hambleton et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/abs/2013EAS....64..285H" title="Physics of Eclipsing Binaries: Heartbeat Stars and Tidally Induced Pulsations"/>
          <Publication author="Prša et al. (2007)" adsLink="https://ui.adsabs.harvard.edu/abs/2007ASPC..370..175P" title="Introducing Powell's Direction Set Method to a Fully Automated Analysis of Eclipsing Binary Stars"/>
          <Separator flip={true} large={false}/>
        </Content>

        <Content>
          <h2>PHOEBE Talks &amp; Posters</h2>
          <Publication author="Conroy et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020AAS...23511405C" title="New Physics and Features in the 2.2 Release of the PHOEBE Eclipsing Binary Modeling Code"/>
          <Publication author="Kochoska et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020AAS...23511403K" title="Fitting in the wild: exploration of new approaches and methods for estimating binary system parameters from light curve data"/>
          <Publication author="Conroy et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/abs/2019AAS...23334827C" title="Considerations and Design Principles for the 2.1 Release of the PHOEBE Eclipsing Binary Modeling Code"/>
          <Publication author="Conroy et al. (2017)" adsLink="https://ui.adsabs.harvard.edu/abs/2017AAS...22934422C" title="Robust Modeling of Stellar Triples in PHOEBE"/>
          <Publication author="Horvat et al. (2017)" adsLink="https://ui.adsabs.harvard.edu/abs/2017AAS...22934423H" title="Heat Redistribution and Misaligned Orbit Models in PHOEBE"/>
          <Publication author="Prša et al. (2017)" adsLink="https://ui.adsabs.harvard.edu/abs/2017AAS...22934409P" title="Using Gaussian Processes to Model Noise in Eclipsing Binary Light Curves"/>
          <Publication author="Prša et al. (2012)" adsLink="https://ui.adsabs.harvard.edu/abs/2012IAUS..282..271P" title="Advances in Modeling Eclipsing Binary Stars in the Era of Large All-Sky Surveys with EBAI and PHOEBE"/>
          <Publication author="Prša et al. (2010)" adsLink="https://ui.adsabs.harvard.edu/abs/2010AAS...21541931P" title="Revising the Model of Eclipsing Binary Stars for the Kepler Era"/>
          <Separator flip={false} large={false}/>
        </Content>

        <Content dark={true}>
          <h2>Related Papers by the PHOEBE Development Team</h2>
          <Publication author="Prša et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/abs/2019PASP..131f8001P" title="Finding the Needle in a Haystack: Detrending Photometric Timeseries Data of Strictly Periodic Astrophysical Objects"/>
          <Publication author="Kochoska et al. (arXiv, 2018)" adsLink="https://ui.adsabs.harvard.edu/abs/2018arXiv180408781K" title="COBAIN: generalized 3D radiative transfer code for contact binary atmospheres"/>
          <Publication author="Horvat et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/abs/2019ApJS..240...36H" title="Bolometric Treatment of Irradiation Effects: General Discussion and Application to Binary Stars"/>
          <Publication author="Conroy et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/abs/2018ApJ...854..163C" title="The Effects of Barycentric and Asymmetric Transverse Velocities on Eclipse and Transit Times"/>
          <Publication author="Prša et al. (2008)" adsLink="https://ui.adsabs.harvard.edu/abs/2008ApJ...687..542P" title="Artificial Intelligence Approach to the Determination of Physical Properties of Eclipsing Binaries. I. The EBAI Project"/>
          <Separator flip={true} large={false}/>
        </Content>

        <Content>
          <h2>Papers that Use PHOEBE 2</h2>
          <Link to={"http://github.com/phoebe-project/phoebe-project.org/issues/new?title=new+paper+that+uses+phoebe"} hideExternal={true}><span className="fas fa-fw fa-plus"></span> Suggest New Entry</Link>

          {/* Look through citations in release papers since those listed below, confirm that citation is by "using" PHOEBE 2 instead of just mentioning it, and add new entries to the top */}

          {/* <Publication author="Aller et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2019arXiv191109991A" title="Planetary Nebulae seen by TESS: Results and discovery of new binary central star candidates from Cycle 1"/> */}
          <Publication author="Kabath et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020arXiv200101001K" title="Ondrejov echelle spectrograph, ground based support facility for exoplanet missions"/>
          <Publication author="Abdul-Masih et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/abs/2019ApJ...880..115A" title="Clues on the Origin and Evolution of Massive Contact Binaries: Atmosphere Analysis of VFTS 352"/>
          <Publication author="Kabath et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/abs/2019PASP..131h5001K" title="Detection limits of exoplanetary atmospheres with 2-m class telescopes"/>
          <Publication author="Jones et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/abs/2019MNRAS.482L..75J" title="The short orbital period binary star at the heart of the planetary nebula M 3-1★"/>
          <Publication author="Boffin et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/abs/2018A&A...619A..84B" title="When nature tries to trick us. An eclipsing eccentric close binary superposed on the central star of the planetary nebula M 3-2"/>
          <Publication author="Papageorgiou et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/abs/2018ApJS..238....4P" title="An Updated Catalog of 4680 Northern Eclipsing Binaries with Algol-type Light-curve Morphology in the Catalina Sky Surveys"/>
          <Publication author="Kochukhov et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/abs/2018MNRAS.478.1749K" title="HD 66051: the first eclipsing binary hosting an early-type magnetic star"/>
          <Publication author="von Essen et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/abs/2018A&A...615A..79V" title="Kepler Object of Interest Network. I. First results combining ground- and space-based observations of Kepler systems with transit timing variations"/>
          <Publication author="Jones & Boffin (2017)" adsLink="https://ui.adsabs.harvard.edu/abs/2017NatAs...1E.117J" title="Binary stars as the key to understanding planetary nebulae"/>


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
        <Link to={this.props.entryLink || this.props.adsLink} hideExternal={true}>{this.props.author}</Link>
        {this.props.pdf ? <span> (<Link to={"/pdf/"+this.props.pdf}>download pdf</Link>) </span> : null}
        <span> - {this.props.title}</span>
        {this.props.release ? <span> (<Link to={"/releases/"+this.props.release+"/"}>PHOEBE {this.props.release} release</Link>)</span> : null}
      </div>
    )
  }
}
