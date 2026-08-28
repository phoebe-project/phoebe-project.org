import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link, Image, Separator, withRouter} from './common';
import {Header, HeaderNavButton} from './header';
import {NotFound} from './errors';


class PublicationHeaderLinks extends Component {
  render() {
    return (
      <div className="row">
         <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
           <HeaderNavButton title="I: PHOEBE 1.0" description="Demonstrations and Perspectives" to={"/publications/2005Prsa+"}/>
         </div>
         <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
           <HeaderNavButton title="II: PHOEBE 2.0" description="Toward the Increased Model Fidelity" to={"/publications/2016Prsa+"}/>
         </div>
         <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
           <HeaderNavButton title="III: Misalignment (2.1)" description="Spin-Orbit Misalignment" to={"/publications/2018Horvat+"}/>
         </div>
         <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
           <HeaderNavButton title="IV: Extinction (2.2)" description="The Impact of Interstellar Extinction on the Light Curves of Eclipsing Binaries" to={"/publications/2020Jones+"}/>
         </div>
         <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
           <HeaderNavButton title="V: Inverse Problem (2.3)" description="General Framework for Solving the Inverse Problem" to={"/publications/2020Conroy+"}/>
         </div>
         <div className="col-md-2" style={{paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px"}}>
           <HeaderNavButton title="VI: Atmospheres (2.5)" description="Atmosphere support for hot, compact stars as well as blending from atmospheres to blackbody and user-defined features" to={"/publications/2026Jones+"}/>
         </div>
       </div>
    )
  }
}

class PublicationEntry extends Component {
  render() {
    let publication = this.props.match.params.publication

    let published = true
    let author = null;
    let authorsFull = null;
    let titleShort = null;
    let title = null;
    let abstract = null;
    let adsLink = null;
    let pdf = null;
    let release = null;
    let figures = [];

    if (publication === '2005Prsa+') {
      published = true
      author = "Prša & Zwitter (2005)"
      authorsFull = "Prša, A.; Zwitter, T."
      titleShort = "PHOEBE I: Demonstrations and Perspectives"
      title = "A Computational Guide to Physics of Eclipsing Binaries. I. Demonstrations and Perspectives"
      abstract = "PHOEBE (PHysics Of Eclipsing BinariEs) is a modeling package for eclipsing binary stars, built on top of the widely used WD program of Wilson & Devinney. This introductory paper gives an overview of the most important scientific extensions (incorporating observational spectra of eclipsing binaries into the solution-seeking process, extracting individual temperatures from observed color indices, main-sequence constraining, and proper treatment of the reddening), numerical innovations (suggested improvements to WD's differential corrections method, the new Nelder & Mead downhill simplex method), and technical aspects (back-end scripter structure, graphical user interface). While PHOEBE retains 100% WD compatibility, its add-ons are a powerful way to enhance WD by encompassing even more physics and solution reliability. The operability of all these extensions is demonstrated on a synthetic main-sequence test binary; applications to real data will be published in follow-up papers. PHOEBE is released under the GNU General Public License, which guarantees it to be free and open to anyone interested in joining in on future development."
      adsLink = "https://ui.adsabs.harvard.edu/abs/2005ApJ...628..426P"
      pdf = "2005Prsa+.pdf"
      release = "1.0"

    } else if (publication === '2016Prsa+') {
      published = true
      author = "Prša et al. (2016)"
      authorsFull = "Prša, A.; Conroy, K. E.; Horvat, M.; Pablo, H.; Kochoska, A.; Bloemen, S.; Giammarco, J.; Hambleton, K. M.; Degroote, P."
      titleShort = "PHOEBE II: Toward the Increased Model Fidelity"
      title = "Physics of Eclipsing Binaries. II. Toward the Increased Model Fidelity"
      abstract = "The precision of photometric and spectroscopic observations has been systematically improved in the last decade, mostly thanks to space-borne photometric missions and ground-based spectrographs dedicated to finding exoplanets. The field of eclipsing binary stars strongly benefited from this development. Eclipsing binaries serve as critical tools for determining fundamental stellar properties (masses, radii, temperatures, and luminosities), yet the models are not capable of reproducing observed data well, either because of the missing physics or because of insufficient precision. This led to a predicament where radiative and dynamical effects, insofar buried in noise, started showing up routinely in the data, but were not accounted for in the models. PHOEBE (PHysics Of Eclipsing BinariEs; https://phoebe-project.org) is an open source modeling code for computing theoretical light and radial velocity curves that addresses both problems by incorporating missing physics and by increasing the computational fidelity. In particular, we discuss triangulation as a superior surface discretization algorithm, meshing of rotating single stars, light travel time effects, advanced phase computation, volume conservation in eccentric orbits, and improved computation of local intensity across the stellar surfaces that includes the photon-weighted mode, the enhanced limb darkening treatment, the better reflection treatment, and Doppler boosting. Here we present the concepts on which PHOEBE is built and proofs of concept that demonstrate the increased model fidelity."
      adsLink = "https://ui.adsabs.harvard.edu/abs/2016ApJS..227...29P"
      pdf = "2016Prsa+.pdf"
      release = "2.0"
      figures = [
                  {"name": "Figure 5", "image": "2016Prsa+_fig5.png", "link": "/docs/2.0/tutorials/intens_weighting"},
                  {"name": "Figure 8", "image": "2016Prsa+_fig8.png", "link": "/docs/2.0/tutorials/irrad_method_horvat"}
                ]

    } else if (publication === '2018Horvat+') {
      published = true
      author = "Horvat et al. (2018)"
      authorsFull = "Horvat, M.; Conroy, K. E.; Pablo, H.; Hambleton, K. M.; Kochoska, A.; Giammarco, J.; Prša, A."
      titleShort = "PHOEBE III: Spin-Orbit Misalignment"
      title = "Physics of Eclipsing Binaries. III. Spin-Orbit Misalignment"
      abstract = "The precision of photometric and spectroscopic observations has been systematically improved in the last decade, mostly thanks to space-borne photometric missions and ground-based spectrographs dedicated to finding exoplanets. The field of eclipsing binary stars strongly benefited from this development. Eclipsing binaries serve as critical tools for determining fundamental stellar properties (masses, radii, temperatures, and luminosities), yet the models are not capable of reproducing observed data well, either because of the missing physics or because of insufficient precision. This led to a predicament where radiative and dynamical effects, insofar buried in noise, started showing up routinely in the data, but were not accounted for in the models. PHOEBE (PHysics Of Eclipsing BinariEs; https://phoebe-project.org) is an open source modeling code for computing theoretical light and radial velocity curves that addresses both problems by incorporating missing physics and by increasing the computational fidelity. In particular, we discuss triangulation as a superior surface discretization algorithm, meshing of rotating single stars, light travel time effects, advanced phase computation, volume conservation in eccentric orbits, and improved computation of local intensity across the stellar surfaces that includes the photon-weighted mode, the enhanced limb darkening treatment, the better reflection treatment, and Doppler boosting. Here we present the concepts on which PHOEBE is built and proofs of concept that demonstrate the increased model fidelity."
      adsLink = "https://ui.adsabs.harvard.edu/abs/2018ApJS..237...26H"
      pdf = "2018Horvat+.pdf"
      release = "2.1"
      figures = [
                  {"name": "Figure 8", "image": "2018Horvat+_fig8.png", "link": "/docs/2.1/examples/diher_misaligned"}
                ]
    } else if (publication === '2020Jones+') {
      published = true
      author = "Jones et al. (2020)"
      authorsFull = "Jones, D.; Conroy, K. E.; Horvat, M.; Giammarco, J.; Kochoska, A.; Pablo, H.; Brown, A.; Sowicka, P.; Prša, A."
      titleShort = "PHOEBE IV: Interstellar Extinction"
      title = "Physics of Eclipsing Binaries. IV. The Impact of Interstellar Extinction on the Light Curves of Eclipsing Binaries"
      abstract = "Traditionally, the effects of interstellar extinction on binary star light curves have been treated as a uniform reduction in the observed brightness of the system that is independent of orbital phase.  However, unless the orbital plane of the system coincides with the plane of the sky, or if the two stars are completely identical and present with minimal mutual irradiation and tidal/rotational distortions, then this is unlikely to be an accurate representation of the effect of interstellar extinction.  Here, we present an updated treatment of interstellar extinction as incorporated in the PHOEBE 2.2 release (publicly available from https://phoebe-project.org) and assess the importance of using such an approach in the modeling of different types of binary systems.  We also present the incorporation of PHOENIX model atmospheres into the PHOEBE 2.2 release, providing increased fidelity on computed observables down to lower temperatures than previously available.  The importance of these new code developments is then highlighted via an extincted toy model of the eclipsing white-dwarf-subdwarf binary SDSS J235524.29+044855.7 -- demonstrating that, in the age of LSST as well as complementary space-based photometric missions, a proper accounting for extinction and as well as the use of realistic model atmospheres will be essential in deriving accurate binary parameters."
      adsLink = "https://ui.adsabs.harvard.edu/abs/2020ApJS..247...63J"
      pdf = "2020Jones+.pdf"
      release = "2.2"
      figures = [
                  {"name": "Figure 1", "image": "2020Jones+_fig1.png", "link": "/docs/2.2/examples/extinction_BK_binary"},
                  {"name": "Figure 2", "image": "2020Jones+_fig2.png", "link": "/docs/2.2/examples/extinction_BK_binary"},
                  {"name": "Figure 3", "image": "2020Jones+_fig3.png", "link": "/docs/2.2/examples/extinction_eclipse_depth_v_teff"},
                  {"name": "Figure 4", "image": "2020Jones+_fig4.png", "link": "/docs/2.2/examples/extinction_wd_subdwarf"}
                ]
    } else if (publication === '2020Conroy+') {
      published = true
      author = "Conroy et al. (2020)"
      authorsFull = "Conroy, K. E.; Kochoska, A.; Hey, D.; Hambleton, K. M.; Pablo, H.; Jones, D.; Giammarco, J.; Prša, A."
      titleShort = "PHOEBE V: Inverse Problem"
      title = "Physics of Eclipsing Binaries. V. General Framework for Solving the Inverse Problem"
      abstract = "PHOEBE 2 is a Python package for modeling the observables of eclipsing star systems, but until now has focused entirely on the forward-model -- that is, generating a synthetic model given fixed values of a large number of parameters describing the system and the observations.  The inverse problem, obtaining orbital and stellar parameters given observational data, is more complicated and computationally expensive as it requires generating a large set of forward-models to determine which set of parameters and uncertainties best represent the available observational data. The process of determining the best solution and also of obtaining reliable and robust uncertainties on those parameters often requires the use of multiple algorithms, including both optimizers and samplers.  Furthermore, the forward-model of PHOEBE has been designed to be as physically robust as possible, but is computationally expensive compared to other codes.  It is useful, therefore, to use whichever code is most efficient given the reasonable assumptions for a specific system, but learning the intricacies of multiple codes presents a barrier to doing this in practice.  Here we present the 2.3 release of PHOEBE (publicly available from https://phoebe-project.org) which introduces a general framework for defining and handling distributions on parameters, utilizing multiple different estimation, optimization, and sampling algorithms around any of several supported forward-models, including the robust model built into PHOEBE itself."
      adsLink = "https://ui.adsabs.harvard.edu/abs/2020ApJS..250...34C"
      pdf = "2020Conroy+.pdf"
      release = "2.3"
      figures = [
                  {"name": "Figure 1", "image": "2020Conroy+_fig1.png", "link": "/docs/2.3/examples/inverse_paper_examples#fig1"},
                  {"name": "Figure 2", "image": "2020Conroy+_fig2.png", "link": "/docs/2.3/examples/inverse_paper_examples#fig2"},
                  {"name": "Figure 3", "image": "2020Conroy+_fig3.png", "link": "/docs/2.3/examples/inverse_paper_examples#fig3"},
                  {"name": "Figure 4", "image": "2020Conroy+_fig4.png", "link": "/docs/2.3/examples/distribution_constraints"},
                  {"name": "Figure 5", "image": "2020Conroy+_fig5.png", "link": "/docs/2.3/examples/inverse_paper_examples#fig5"},
                  {"name": "Figure 6", "image": "2020Conroy+_fig6.png", "link": "/docs/2.3/examples/backends_compare_legacy_jktebop_ellc"},
                  {"name": "Table 2", "image": "2020Conroy+_table2.png", "link": "/docs/2.3/examples/compute_comparison_table"},
                  {"name": "Figure 7", "image": "2020Conroy+_fig7.png", "link": "/docs/2.3/examples/minimal_GPs"},
                  {"name": "Figure 8", "image": "2020Conroy+_fig8.png", "link": "/docs/2.3/examples/inverse_paper_examples#fig8"},
                  {"name": "Figure 9", "image": "2020Conroy+_fig9.png", "link": "/docs/2.3/examples/inverse_paper_examples#fig9"},
                  {"name": "Figure 10", "image": "2020Conroy+_fig10.png", "link": "/docs/2.3/examples/inverse_paper_examples#fig10"},
                  {"name": "Figure 11", "image": "2020Conroy+_fig11.png", "link": "/docs/2.3/examples/inverse_paper_examples#fig11"},
                  {"name": "Figure 12", "image": "2020Conroy+_fig12.png", "link": "/docs/2.3/examples/inverse_paper_examples#fig12"},

                ]

    } else if (publication === '2022Kochoska+') {
      published = false
      author = "Kochoska et al. (in prep)"
      authorsFull = "Kochoska, A.; et al."
      titleShort = "PHOEBE VI"
      title = "Physics of Eclipsing Binaries. VI."
      abstract = "Abstract TBD"
      adsLink = ""
      pdf = ""
      release = "2.4"
      figures = [
                ]
    } else if (publication === '2026Jones+') {
      published = false
      author = "Jones et al. (2026)"
      authorsFull = "Jones, D.; Reindl, N.; Conroy, K.E.; Munday, J.; Tremblay, P-E.; Abdul-Masih, M.; Fabry, M.; Giammarco, J.; Hambleton, K.M.; Pablo, H.; Wrona, M.; Prša, A."
      titleShort = "PHOEBE VI"
      title = "Physics of Eclipsing Binaries. VI. Hot, Compact Stars"
      abstract = "Models of eclipsing binaries require the assignment of appropriate emergent intensities to the surface elements of the binary components. For distance-dependent modelling of flux-calibrated light curves, this necessitates an approximation of the absolute normal intensities of both components of the binary, as well as how their brightness varies across the stellar disks (limb darkening). Such surface intensities are often inferred from other physical properties of the synthetic binary (effective temperature, surface gravity, etc.) through the use of model atmospheres, which in turn are generally suited to a particular range of stellar types or parameters. Here, we present the major developments included in the PHOEBE 2.5 release (publicly available from http://phoebe-project.org), which improve the fidelity of model binaries comprising hot, compact stars. These developments include the incorporation model atmospheres produced using the T¨ubingen Model Atmosphere Package (TMAP) and Montreal/Tremblay codes (complementing the already incorporated PHOENIX and Castelli & Kurucz models, primarily suited to main sequences stars and low-temperature giants). Similarly, PHOEBE v2.5 now allows for blending/extrapolation of model atmospheres, meaning one can continue to make use of model atmospheres in cases when a small number of surface elements have parameters outside the model atmosphere grid. As an added value product, we also present tables of limb-darkening coefficients derived from the newly incorporated model atmospheres, such that they can be used as inputs in other binary modelling codes."
      adsLink = "https://ui.adsabs.harvard.edu/abs/2026ApJS..285...49J"
      pdf = "2026Jones+.pdf"
      release = "2.5"
      figures = [
                  {"name": "Figure 1", "image": "2026Jones+_fig1.png", "link": "/docs/2.5/examples/DA_WD_I0#fig1"},
                  {"name": "Figure 2", "image": "2026Jones+_fig2.png", "link": "/docs/2.5/examples/sdO_LD#fig2"},
                  {"name": "Figure 3", "image": "2026Jones+_fig3.png", "link": "/docs/2.5/examples/TMAP_grids#fig3"},
                  {"name": "Figure 4", "image": "2026Jones+_fig4.png", "link": "/docs/2.5/examples/TMAP_vs_Tremblay#fig4"},
                  {"name": "Figure 7", "image": "2026Jones+_fig7.png", "link": "/docs/2.5/examples/TMAP_vs_BB#fig7"},
                  {"name": "Figure 8", "image": "2026Jones+_fig8.png", "link": "/docs/2.5/examples/Migrating_spot#fig8"},
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
          <PublicationHeaderLinks/>
        </Header>
        <Content>
          <p>
            <h2>{title}</h2>
          </p>
          <p>
            {authorsFull}
          </p>
          {published ?
            <p>
              <span style={{padding: "15px", fontSize: "16pt"}}><Link to={adsLink} hideexternal="true"><span className="ai ai-ads"></span> ADS</Link></span>
              <span style={{padding: "15px", fontSize: "16pt"}}><Link to={"/static/pdf/"+pdf}><span className="far fa-fw fa-file-pdf"></span> PDF</Link></span>
              {release ?
                <span style={{padding: "15px", fontSize: "16pt"}}><Link to={"/releases/"+release}><span className="fas fa-fw fa-tags"></span> {release} Release</Link></span>
                :
                null
              }
            </p>
            :
            <h2><b>THIS PAPER IS NOT YET PUBLISHED - content subject to change</b></h2>
          }
          <p>
            {abstract}
          </p>
          <p>
            {figures.length > 0 ?
              <h3>Reproducible Content</h3>
              :
              null
            }
            {figures.length > 0 ?
              <p>click on any figure/table below to view the relevant script or content</p>
              :
              null
            }

            {figures.map(figure => {
              return (
                <div style={{width: "100%", margin: "auto", paddingTop: "50px", paddingBottom: "50px", textAlign: "center"}}>
                  <h4 style={{fontSize: "16pt"}}>{figure.name}</h4>
                  <Link to={figure.link}><img src={"/images/figures/"+figure.image} width="600px" style={{maxWidth: "100%"}} alt=""/></Link>
                </div>
              )
            })}
          </p>
        </Content>
      </div>
    )
  }
}

export default withRouter(PublicationEntry)

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
          <PublicationHeaderLinks/>
        </Header>
        <Content>
          <div style={{textAlign: "center", padding: "25px"}}>
            <Link to="https://doi.org/10.1088/978-0-7503-1287-5" hideexternal="true"><Image src="/images/book_cover.jpg" className="img-dropshadow" height="200px"/><br/><br/>Modeling and Analysis of Eclipsing Binary Stars:<br/>The theory and design principles of PHOEBE<br/>Andrej Prša (2018)</Link>
          </div>

          <h2>PHOEBE Release Series</h2>
          <Publication author="Jones et al. (2026)" entryLink="/publications/2026Jones+" title="Physics of Eclipsing Binaries. VI. Hot, compact stars" release="2.5"/>
          <Publication author="Conroy et al. (2020)" entryLink="/publications/2020Conroy+" title="Physics of Eclipsing Binaries. V. General Framework for Solving the Inverse Problem" release="2.3"/>
          <Publication author="Jones et al. (2020)" entryLink="/publications/2020Jones+" title="Physics of Eclipsing Binaries. IV. The Impact of Interstellar Extinction on the Light Curves of Eclipsing Binaries" release="2.2"/>
          <Publication author="Horvat et al. (2018)" entryLink="/publications/2018Horvat+" title="Physics of Eclipsing Binaries. III. Spin-Orbit Misalignment" release="2.1"/>
          <Publication author="Prša et al. (2016)" entryLink="/publications/2016Prsa+" title="Physics of Eclipsing Binaries. II. Toward the Increased Model Fidelity" release="2.0"/>
          <Publication author="Prša & Zwitter (2005)" entryLink="/publications/2005Prsa+" title="A Computational Guide to Physics of Eclipsing Binaries. I. Demonstrations and Perspectives" release="legacy"/>
          <Separator large={false}/>
        </Content>

        <Content dark={1}>
          <h2>Papers that Use PHOEBE 2</h2>
          <div style={{marginBottom: "12px"}}>
            <Link to={"https://github.com/phoebe-project/phoebe-project.org/issues/new?title=new+paper+that+uses+phoebe"} hideexternal="true"><span className="fas fa-fw fa-plus"></span> Suggest New Entry</Link>
          </div>

          {/* Look through citations in release papers since those listed below, confirm that citation is by "using" PHOEBE 2 instead of just mentioning it, and add new entries to the top */}
          {/* https://ui.adsabs.harvard.edu/search/q=citations(bibcode%3A2016ApJS..227...29P)%20OR%20citations(bibcode%3A2018ApJS..237...26H)%20OR%20citations(bibcode%3A2020ApJS..247...63J)%20OR%20citations(bibcode%3A2020ApJS..250...34C)&sort=date+desc */}

          {/* 2026: 38+ */}
          <Publication author="Chen et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026NewA..12702566C" title="CSSJ085750.7+400058: A low-mass-ratio binary with a high contact degree"/>
          <Publication author="Gao et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026NewA..12702583G" title="The photometric study of two K-type contact binaries: V400 Lyr and CC Com"/>
          <Publication author="Su et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026AJ....172...37S" title="The First Photometric and Spectroscopic Study of Eight Large Amplitude Totally Eclipsing Contact Binaries"/>
          <Publication author="Yücel et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026AJ....172...15Y" title="Spectral Disentangling Reveals Deep CNO-cycle Exposure in ET Cru"/>
          <Publication author="Boone et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026ApJ..1003..145B" title="Searching for GEMS: Discovery of the Nearby Post-common-envelope Binary System TIC-460388167"/>
          <Publication author="Waisberg &amp; Katz (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026arXiv260630748W" title="The forgotten bright star: Theta Eridani as a millenary stellar transient observed by Hipparchus, Ptolemy and al-Sufi"/>
          <Publication author="Guo et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026RAA....26f5007G" title="LINEAR 16694484: A Short-period, Low-mass-ratio Totally Eclipsing Binary with a Decreasing Orbital Period"/>
          <Publication author="Moharana et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026MNRAS.548ag772M" title="V446 Cephei: a β Cep pulsator in a multiple system"/>
          <Publication author="Zhao et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026ApJ..1004..227Z" title="Nature of HD 251108: An RS CVn Binary with a Long-term Evolving Spot"/>
          <Publication author="Panchal &amp; Li (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026AJ....171..347P" title="Exploring Contact Binaries: Photometric Analysis of Short-period Contact Binaries in OGLE SMC Field"/>
          <Publication author="Kouzuma (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026PASJ...78.1059K" title="Orbital inclination estimates for overcontact binaries using the derivatives of light curves"/>
          <Publication author="Reindl et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026A%26A...709A.112R" title="Two hot pre-white dwarfs inside the red giant branch planetary nebula Pa 13: Double-core evolution or common-envelope-induced rejuvenation"/>
          <Publication author="Tan et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026NewA..12402512T" title="First photometric and orbital-period studies of the near-contact binary V0609 Aur"/>
          <Publication author="Sheikh et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026ApJ..1002L..29S" title="Blue Straggler in the Making: An X-Ray Active Binary in Algol Configuration"/>
          <Publication author="Kounkel et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026AJ....171..320K" title="Probabilistic Neural Network Approach to Determining Parameters of Eclipsing Binaries"/>
          <Publication author="Han et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026RAA....26d5003H" title="Light Curve Modeling of the Nearest Neutron Star Candidate LAMOST J235456.73+335625.9"/>
          <Publication author="Baştürk et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026MNRAS.547ag290B" title="A detailed study of the physical and orbital characteristics, and eclipse timing variations of the Post Common Envelope Binary DD CrB"/>
          <Publication author="Liu et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026RAA....26d5014L" title="An Ultra-low Mass Ratio Contact Binary: WISE J095035.2+354215"/>
          <Publication author="Yu et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026AJ....171..254Y" title="First Photometric, Orbital Period, and Tidal Instability Investigations for Four Contact Binaries with Extremely Low Mass Ratios"/>
          <Publication author="Wang et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026AJ....171..255W" title="Weighing Hidden Companions of Compact Object Candidates via Rotational Broadening"/>
          <Publication author="Blaum Hough &amp; Bloom (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026arXiv260419919B" title="Neural Simulation-based Inference with Hierarchical Priors for Detached Eclipsing Binaries"/>
          <Publication author="Pauli et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026arXiv260421920P" title="First measurement of wind line formation regions in an early O-type star"/>
          <Publication author="Xu et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026AJ....171..119X" title="KIC 9656397: Long-period, Extremely Short-eclipse Detached Eclipsing Binary with Pulsation?"/>
          <Publication author="Szegedi et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026MNRAS.546ag189S" title="[HP99] 159: Properties of the first supersoft X-ray source with a helium star donor"/>
          <Publication author="Sarvari et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026PASP..138c4203S" title="BSN-VI: Multiband Light Curve Modeling of Four W UMa-Type Contact Binaries. I. Revisiting Energy Transfer Mechanisms and Luminosity Behavior"/>
          <Publication author="Jones et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026A%26A...707A.169J" title="Appraising the Necklace: A post-common-envelope carbon dwarf inside an apparently carbon-poor planetary nebula"/>
          <Publication author="Motherway et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026AJ....171..159M" title="A Not-so-compact Companion: Massive, Oversized White Dwarf in a Post-common-envelope Eclipsing Binary"/>
          <Publication author="Ababafi et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026RAA....26c5022A" title="BSN: Light Curve Modeling and Orbital Evolution of the Total-eclipse Contact Binary EZ Oct"/>
          <Publication author="Poro et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026ApJ...998..108P" title="Detailed Investigation of a W UMa Contact Binary with an Ultralow Mass Ratio and a Third Body as a Potential Merger Candidate"/>
          <Publication author="Filiz et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026A%26A...706A.152F" title="Spectral evolution of hot hybrid white dwarfs: II. Photometry"/>
          <Publication author="Li et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026NewA..12302484L" title="Calibrating machine learning with multi-band photometry: Resolving parameter degeneracies in contact binary NSVS 4803568"/>
          <Publication author="Sheikh et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026MNRS.545f2130S" title="First discovery of a fast-rotating blue straggler in a compact binary with a sub-stellar companion"/>
          <Publication author="Švrčková et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026A%26A...705A..99S" title="δ Circini: A massive hierarchical triple system with an eclipsing binary"/>
          <Publication author="Kabáth et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026MNRAS.545f1972K" title="PLATOSpec: a precise spectrograph in support of space missions"/>
          <Publication author="Menon et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026A%26A...705A..43M" title="A new sample of massive B-type contact binary candidates from the OGLE survey of the Magellanic Clouds"/>
          <Publication author="Pawar et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026A%26A...705A.251P" title="A comprehensive study of δ Scuti-type pulsators in eclipsing binaries: Oscillating eclipsing Algols"/>
          <Publication author="Zummer et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026A%26A...705A..60Z" title="Quadruple system HD 135160 in a unique 2+2 configuration"/>
          <Publication author="Yang et al. (2026)" adsLink="https://ui.adsabs.harvard.edu/abs/2026ApJ...996...54Y" title="KIC 5623923: A Faint Eclipsing Binary Consisting of δ Scuti Pulsations"/>

          {/* 2025: 56 */}
          <Publication author="Amestoy et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025sf2a.conf..483A" title="Finding the sweet spot: Modelling of oscillating red giant binaries"/>
          <Publication author="Poro et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025PASP..137l4202P" title="BSN. V. The First Detailed Light Curve Modeling of Eight Totally Eclipsing Contact Binary Stars Using Ground-based and TESS Observations"/>
          <Publication author="Šipková et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025arXiv251214816S" title="Exploiting tidal asteroseismology in binary populations from combined space photometry and time-resolved high-resolution spectroscopy"/>
          <Publication author="Liu et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025Galax..13..135L" title="An Extremely Low Mass Ratio Binary at the Key Stage of Evolution"/>
          <Publication author="Oplištilová et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025A%26A...704A.204O" title="VLTI observations of Orion Belt stars: I. ε Orionis"/>
          <Publication author="Kouzuma (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025PASJ...77.1323K" title="Mass ratio estimates for overcontact binaries using the derivatives of light curves. II. Systems with deep eclipses"/>
          <Publication author="He et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025MNRAS.544.1361H" title="A new Algol-type binary with an accretion disc"/>
          <Publication author="Li et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025ApJS..281....1L" title="A Neural-network Model for Quickly Solving Multiple-band Light Curves of Contact Binaries"/>
          <Publication author="Gao et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025ApJ...994...42G" title="Photometric Analysis of 30 Contact Binaries in M31"/>
          <Publication author="Pan et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025AJ....170..252P" title="Analysis of Six Long-period Low-mass Eclipsing Binaries"/>
          <Publication author="Cook &amp; Kobulnicky (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025AJ....170..281C" title="Observational Constraints on Close Binary Star Evolution. II. Extreme Mass Ratios"/>
          <Publication author="Li et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025ApJ...993...64L" title="Orbital and Pulsation Analysis of 42 Heartbeat Stars Discovered in TESS Data"/>
          <Publication author="Fabry &amp; Prša (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025ApJ...994....7F" title="Attributing the O'Connell Effect in Contact Binaries to a Cooling Mass-transfer Stream"/>
          <Publication author="Houshiar et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025arXiv251122907H" title="BSN: The First Multiband Light Curve Analysis of the W UMa-type Contact Binary System EM Tucanae"/>
          <Publication author="Meir Shani et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025arXiv251017957M" title="The Silent Majority: The Interacting Post-Common-Envelope Binaries Underlying Cataclysmic Variables"/>
          <Publication author="Kouzuma (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025Galax..13..125K" title="Using Light Curve Derivatives to Estimate the Fill-Out Factor of Overcontact Binaries"/>
          <Publication author="Handler et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025A%26A...702A.104H" title="EL CMi: Confirmation of triaxial pulsation theory"/>
          <Publication author="Poro et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025AJ....170..214P" title="BSN. II. The First Light Curve Study of Eight Total Eclipsing Contact Binary Stars with Shallow Fillout Factors"/>
          <Publication author="Larsen &amp; Prša (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025AJ....170..167L" title="Binary Analysis and Period Study of the Long-period, High-mass-ratio Contact Binary KIC 7766185"/>
          <Publication author="Hu et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025ApJ...990...27H" title="Inactive Longitude and Superflare in the Active Single-lined Pre-main-sequence Binary V2279 Cyg"/>
          <Publication author="Jadlovský et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025arXiv250925168J" title="Hidden massive eclipsing binaries in red supergiant systems: The hierarchical triple system KQ Puppis and other candidates"/>
          <Publication author="Holgado et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025A%26A...701A.246H" title="MONOS: Multiplicity Of Northern O-type Spectroscopic systems: III. New orbits and Gaia-TESS analysis for ten SB2E systems"/>
          <Publication author="Marcadon et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025arXiv250917011M" title="RX Gru: a short-period pre-main-sequence eclipsing binary with a distant circumbinary companion"/>
          <Publication author="Guo et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025AJ....170..101G" title="Two Ultralow-mass-ratio Binary Systems at Critical Evolutionary Stages"/>
          <Publication author="Guo et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025AJ....170..115G" title="The Investigation of 84 TESS Totally Eclipsing Contact Binaries"/>
          <Publication author="Kouzuma (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025PASJ...77..746K" title="Classifying the derivatives of light curves for overcontact eclipsing binaries"/>
          <Publication author="Bhat et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025A%26A...700L..23B" title="Ancient, eclipsing, tidally locked: A blue lurker progenitor in the population of extreme-velocity star candidates"/>
          <Publication author="Poro et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025PASP..137h4201P" title="BSN-III: The First Multiband Photometric Study on the Eight Total Eclipse Contact Binary Stars"/>
          <Publication author="Thomsen et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025A%26A...699A.152T" title="Advancing the accuracy in age determinations of old-disk stars using an oscillating red giant in an eclipsing binary"/>
          <Publication author="Callahan et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025OJAp....8E..97C" title="Astronomical Cardiology: A Search For Heartbeat Stars Using Gaia and TESS"/>
          <Publication author="Oláh et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025A%26A...698A.150O" title="Starspots on eclipsing giant stars: I. The sample and eclipse mapping examples"/>
          <Publication author="Skarka et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025A%26A...698A..48S" title="50 Dra: Am-type twins with additional variability in a non-eclipsing system"/>
          <Publication author="Gull et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025ApJ...986...25G" title="A Low Metallicity Massive Contact Binary Star System Candidate in WLM Identified by Hubble and James Webb Space Telescope Imaging"/>
          <Publication author="Liu et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025A%26A...698A..81L" title="A post-common-envelope binary with double-peaked Balmer emission lines from TMTS"/>
          <Publication author="Meng et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025MNRAS.539.3405M" title="TESS photometry, radial velocity, and orbital period investigations of four eclipsing contact binaries"/>
          <Publication author="Pešta &amp; Pejcha (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025A%26A...696A..16P" title="Distinguishing between light curves of ellipsoidal variables with massive dark companions, contact binaries, and semidetached binaries using principal component analysis"/>
          <Publication author="Abdul-Masih (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025CoSka..55c.390A" title="Observations of massive contact binaries in the local universe"/>
          <Publication author="Ádám &amp; Molnár (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025AJ....169..196A" title="Filling the Gap: The Missing Eclipses of γ Persei from 2005 and from 2006"/>
          <Publication author="Poro et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025MNRAS.538.1427P" title="Study on the physical parameters of 18 contact binary stars"/>
          <Publication author="Poro et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025RAA....25c5013P" title="Four Total Eclipsing Contact Binary Systems: The First Photometric Light Curve Solutions Employing TESS and Gaia Surveys"/>
          <Publication author="Poro et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025MNRAS.537.3160P" title="BSN-I: the first in-depth photometric study of seven total-eclipse contact binary systems"/>
          <Publication author="Zhu et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025JHEAp..45..428Z" title="A white dwarf binary candidate discovered by LAMOST using dynamical method"/>
          <Publication author="Strader et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025ApJ...980..124S" title="PSR J1947−1120: A New Huntsman Millisecond Pulsar Binary"/>
          <Publication author="Rittipruk et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025AJ....169...66R" title="Time-series Spectroscopy and TESS Photometry of the Oscillating Eclipsing Algol System V389 Cassiopeiae"/>
          <Publication author="Rodriguez et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025ApJ...980..169R" title="The Secondary Component of the Extremely Low Mass Ratio Massive Binary HD 165246 Revealed by GHOST"/>
          <Publication author="Xiong et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025ApJ...979..108X" title="Discoveries and Properties of EL CVn-type Binaries in the TESS Survey"/>
          <Publication author="He et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025AJ....169...60H" title="Identifying Hierarchically Triple Star Systems with Gaia DR3 and LAMOST"/>
          <Publication author="Yücel et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025AJ....169...71Y" title="Unveiling the Origins and Dynamics of the Hierarchical Triple Star System CN Lyn"/>
          <Publication author="Rowan et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025OJAp....8E..18R" title="Precise and Accurate Mass and Radius Measurements of Fifteen Galactic Red Giants in Detached Eclipsing Binaries"/>
          <Publication author="Li et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025PASJ...77..118L" title="KIC 7914906: An eclipsing heartbeat star with tidally excited oscillations and gamma Doradus/delta Scuti hybrid pulsations"/>
          <Publication author="Schmutz et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025A%26A...693A.103S" title="A Maia-type candidate was misclassified: V424 Cep is an eclipsing β Cep-type pulsator in a triple system"/>
          <Publication author="Jin et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025MNRAS.536.2770J" title="Detecting eclipsing double white dwarfs with electromagnetic and gravitational waves"/>
          <Publication author="Miszuda et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025arXiv250103770M" title="Eclipsing binary systems with β Cephei components. V1216 Sco"/>
          <Publication author="Simpson et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025MNRAS.536.2169S" title="A GTC spectroscopic study of three spider pulsar companions: line-based temperatures, a new face-on redback, and improved mass constraints"/>
          <Publication author="Wang et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025A%26A...693A.131W" title="Photometric analysis of 40 low mass-ratio contact binary systems in the Catalina Sky Survey"/>
          <Publication author="Bókon et al. (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025A%26A...693A.259B" title="Eclipse-mapping study of the eclipsing binary KIC 3858884 with a hybrid δ Sct/γ Dor component"/>

          {/* 2024: 57 */}
          <Publication author="Jin et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024AJ....168..280J" title="KIC 6362386: An Eclipsing Binary with γ Doradus-type Pulsations and Starspots"/>
          <Publication author="Narusawa et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024PASJ...76.1181N" title="Simultaneous spectroscopic and TESS observations of the short-period Algol-type system: U Coronae Borealis"/>
          <Publication author="Pan et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024AJ....168..253P" title="Starspot Coverage on Two New K-type Low-mass Eclipsing Binaries with Radius Inflation"/>
          <Publication author="Baudart &amp; Poro (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024RAA....24l5013B" title="BSN: The First Photometric Analysis of Contact Binary Systems V1961 Cyg and V0890 Lyr"/>
          <Publication author="Zhao et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJ...977..245Z" title="A Massive White Dwarf or Low-mass Neutron Star Discovered by LAMOST"/>
          <Publication author="Ramachandran et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024A%26A...692A..90R" title="X-Shooting ULLYSES: Massive stars at low metallicity. VIII. Stellar and wind parameters of newly revealed stripped stars in Be binaries"/>
          <Publication author="Wang et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJ...976..223W" title="Photometric and Spectroscopic Analysis of Eight Totally Eclipsing Contact Binaries with Small Mass Ratios"/>
          <Publication author="Poro et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024AJ....168..272P" title="BSN: The First Photometric Study of 10 Contact Binary Systems from the Northern and Southern Hemispheres"/>
          <Publication author="Wang et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJS..275...12W" title="An Efficient Method for Batch Derivation of Detached Eclipsing Binary Parameters: Analysis of 34,907 OGLE Systems"/>
          <Publication author="Yang et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJ...975..171Y" title="KIC 8840638: A Newly Discovered Eclipsing Binary with δ Scuti-type Oscillations"/>
          <Publication author="Ding et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024AJ....168..217D" title="Fundamental Parameters of a Binary System Consisting of a Red Dwarf and a Compact Star"/>
          <Publication author="Wang et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024A%26A...690A.201W" title="Lifetime of starspots on detached eclipsing binaries: Detecting the effects of tides on stellar activity"/>
          <Publication author="Aller et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024A%26A...690A.190A" title="Planetary nebulae seen with TESS: New and revisited short-period binary central star candidates from Cycles 1 to 4"/>
          <Publication author="Lipták et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024A%26A...690A.168L" title="Five new eclipsing binaries with low-mass companions"/>
          <Publication author="Sarvari et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024RAA....24j5002S" title="BSN: The First Light Curve Analysis of the Total Eclipse Binary System EL Tuc"/>
          <Publication author="Sen et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJ...973..121S" title="The Orbit and Companion of PSR J1622-0315: Variable Asymmetry and a Massive Neutron Star"/>
          <Publication author="Kemp et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024A%26A...689A.164K" title="KIC 4150611: A quadruply eclipsing heptuple star system with a g-mode period-spacing pattern"/>
          <Publication author="Poro et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024Ap.....67..299P" title="BSN: First Photometric Light Curve Analysis of Two W-Type Contact Binary Systems OP Boo and V0511 Cam"/>
          <Publication author="Paki &amp; Poro (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024Ap.....67..316P" title="Reanalyzing the Light Curves and Absolute Parameters of Twenty Contact Binary Stars Using TESS Data"/>
          <Publication author="Kounkel &amp; Stassun (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024AJ....168..134K" title="Two Young Eclipsing Binaries in Orion with Temperatures and Radii Affected by Spots and Third Bodies"/>
          <Publication author="Puls et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024arXiv240903329P" title="Stellar Atmospheres"/>
          <Publication author="Čeki et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024MNRAS.532.3582C" title="Comprehensive analysis of the eclipsing binaries V527 Dra and V2846 Cyg"/>
          <Publication author="Qi et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024MNRAS.532.1718Q" title="Two dynamically discovered compact object candidate binary systems from LAMOST low-resolution survey"/>
          <Publication author="Meng et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJ...971..113M" title="OO Leo: An Active Contact Binary with Possible Solar-like Differential Rotation"/>
          <Publication author="Wang et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJS..273...31W" title="A Method of Rapidly Deriving Late-type Contact Binary Parameters and Its Application in the Catalina Sky Survey"/>
          <Publication author="O'Doherty et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024AJ....168...44O" title="A Contact Binary Misclassified as an Ellipsoidal Variable: Complications for Detached Black Hole Searches"/>
          <Publication author="Hubrig et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024A%26A...686L...4H" title="Detection of extragalactic magnetic massive stars"/>
          <Publication author="Jeong et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024AJ....167..280J" title="Simultaneous Photometric and Spectroscopic Analysis of V505 Lacertae, a Photospherically and Chromospherically Active Contact Binary Star"/>
          <Publication author="Kolbin et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024AstL...50..335K" title="Spectroscopic and Photometric Study of the New Eclipsing Polar Gaia23cer"/>
          <Publication author="Benvenuto et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024MNRAS.52712253B" title="Light curves from symmetric, polytropic contact binaries"/>
          <Publication author="Martin et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024MNRAS.528..963M" title="The benchmark M dwarf eclipsing binary CM Draconis with TESS: spots, flares, and ultra-precise parameters"/>
          <Publication author="Abdul-Masih (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024IAUS..361..230A" title="3D effects of rotation on spectroscopic observables"/>
          <Publication author="Chen et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024PrPNP.13404083C" title="Binary stars in the new millennium"/>
          <Publication author="Poro et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024NewA..11002227P" title=" Estimating the absolute parameters of W UMa-type binary stars using Gaia DR3 parallax"/>
          <Publication author="Tobin et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024NewA..10902210T" title="Photometric study of the overcontact binary NSVS2910034"/>
          <Publication author="Ding et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024AJ....167..192D" title="Detection of Contact Binary Candidates Observed By TESS Using the Autoencoder Neural Network"/>
          <Publication author="Poro et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024RAA....24e5001P" title="First Light Curve Analysis of NSVS 8294044, V1023 Her, and V1397 Her Contact Binary Systems"/>
          <Publication author="Rowan et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024OJAp....7E..24R" title="High mass function ellipsoidal variables in the Gaia Focused Product Release: searching for black hole candidates in the binary zoo"/>
          <Publication author="Gautam et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJ...964..164G" title="An Estimate of the Binary Star Fraction among Young Stars at the Galactic Center: Possible Evidence of a Radial Dependence"/>
          <Publication author="Cheng et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024AJ....167..148C" title="The First Photometric Analysis of Two Low-mass-ratio Contact Binary Systems in TESS Survey"/>
          <Publication author="Zeng et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024A%26C....4700799Z" title="A fast inversion method of parameters for contact binaries based on differential evolution"/>
          <Publication author="Kumar et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024A%26A...685L...6K" title="Discovery of a hot post-AGB star in Galactic globular cluster E3"/>
          <Publication author="Eze & Handler (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJS..272...25E" title="β Cephei Pulsators in Eclipsing Binaries Observed with TESS"/>
          <Publication author="Rowan et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024MNRAS.529..587R" title="A hidden population of massive white dwarfs: two spotted K + WD binaries"/>
          <Publication author="Poro et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024RAA....24d5018P" title="BSN: Photometric Light Curve Analysis of Two Contact Binary Systems LS Del and V997 Cyg"/>
          <Publication author="Li et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJS..271...32L" title="Physical Parameters of 11,100 Short-period ASAS-SN Eclipsing Contact Binaries"/>
          <Publication author="Zhao et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJ...964..101Z" title="Wide Binaries with White Dwarf or Neutron Star Companions Discovered from Gaia DR3 and LAMOST"/>
          <Publication author="Zhao et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJ...963..160Z" title="Stellar Cycle and Evolution of Polar Spots in an M+WD Binary"/>
          <Publication author="Antunes Amaral et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024A%26A...685A...9A" title="The double low-mass white dwarf eclipsing binary system J2102-4145 and its possible evolution"/>
          <Publication author="Poro et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024PASP..136b4201P" title="Global Parameters of Eight W UMa-type Binary Systems"/>
          <Publication author="Xiong et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJS..270...20X" title="The Distribution of Semidetached Binaries. I. An Efficient Pipeline"/>
          <Publication author="Tsvetkova et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024A%26A...682A..77T" title="The large-scale magnetic field of the M dwarf double-line spectroscopic binary FK Aqr"/>
          <Publication author="Soomandar et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024NewA..10502112S" title="A new look at the YY CrB binary system"/>
          <Publication author="Kounkel et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024MNRAS.527.3806K" title="Stellar properties of an actively accreting Algol-type eclipsing binary 2M16212643+2136590"/>
          <Publication author="Bahar et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024ApJ...960...60B" title="First Chromospheric Activity and Doppler Imaging Study of PW And Using a New Doppler Imaging Code: SpotDIPy"/>
          <Publication author="Paki et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024Ap.....66..452P" title="The First Photometric Study of the Binary System CSS J003106.8+313347"/>
          <Publication author="Schmutz et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024A%26A...681L...9S" title="HD 214220 (BD+56 2813): An eclipsing binary with its primary component at the end of the main sequence"/>

          {/* 2023: 42 */}
          <Publication author="Ou et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023Univ....9..514O" title="Tidal Resonance: A Factor Worth Considering in the Orbital Evolution of Heartbeat Stars"/>
          <Publication author="Baştürk et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023TJAA....4S..83O" title="Zamanlama Yöntemiyle Ötegezegen Keşfi"/>
          <Publication author="Zheng et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023SCPMA..6629512Z" title="The nearest neutron star candidate in a binary revealed by optical time-domain surveys"/>
          <Publication author="Kapusta et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023AcA....73..197K" title="Search for Dormant Black Holes in the OGLE Data"/>
          <Publication author="Esmer et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.525.6050E" title="Testing the planetary hypothesis of NY Virginis: anticipated change in the eclipse timing trend within the next five years"/>
          <Publication author="Villaseñor et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.525.5121V" title="The B-type Binaries Characterisation Programme - II. VFTS 291: a stripped star from a recent mass transfer phase"/>
          <Publication author="Ding et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.525.4596D" title="Fundamental parameters of 318 contact binaries from the TESS survey"/>
          <Publication author="Kouzuma et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023ApJ...958...84K" title="Mass Ratio Estimates for Overcontact Binaries Using the Derivatives of Light Curves"/>
          <Publication author="Cook et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023AJ....166..200C" title="Observational Constraints on Close Binary Star Evolution. I. Putative Contact Binaries with Long Periods and High Mass Ratios"/>
          <Publication author="Munday et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.525.1814M" title="An eclipsing 47 min double white dwarf binary at 400 pc"/>
          <Publication author="Zak et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.524.5749Z" title="Everything that glitters is not gold: V1315 Cas is not a dormant black hole"/>
          <Publication author="Kołaczek-Szymański et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024A%26A...686A.199K" title="Exploring extreme brightness variations in blue supergiant MACHO 80.7443.1718: Evidence for companion-driven enhanced mass loss"/>
          <Publication author="Alizadehsabegh et al. (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024Ap.....67..128A" title="BSN: First Light Curve Study of the Low Mass Contact Binary V0610 Vir"/>
          <Publication author="Jin et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023Univ....9..417J" title="Starspot Activity without Pulsation in the Binary System KIC 5444392 Revisited"/>
          <Publication author="Poro et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023RAA....23i5011P" title="Light Curve Analysis of the AP Dor Binary System using Ground-based and TESS Observations"/>
          <Publication author="Yap et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023ApJ...955...21Y" title="A Light Redback Companion of PSR J1622-0315 and Irradiation Power in Spider Systems"/>
          <Publication author="Nagarajan et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.524.4367N" title=" Spectroscopic follow-up of black hole and neutron star candidates in ellipsoidal variables from Gaia DR3"/>
          <Publication author="Rodriguez et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023ApJ...954...63R" title=" SRGeJ045359.9+622444: A 55 Minute Period Eclipsing AM Canum Venaticorum Star Discovered from a Joint SRG/eROSITA + ZTF Search"/>
          <Publication author="M, Raghu Prasad et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023Ap%26SS.368...72M" title="First investigations of 14 neglected, late-type contact binaries"/>
          <Publication author="Antokhina et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023ARep...67..876A" title="Determination of the Close Binary Systems Parameters by Synthesis Methods: from White Dwarfs to Wolf-Rayet Stars and Black Holes"/>
          <Publication author="Yin et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023RAA....23h5013Y" title="IP Lyn: A Totally Eclipsing Contact Binary with an Extremely Low Mass Ratio"/>
          <Publication author="Rattanamala et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.523.5086R" title="Eclipse timing variations in the WD + dM eclipsing binary RR Cae"/>
          <Publication author="Kovalev et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.523.3741K" title="Application of the binary spectral model to high-resolution spectra. First estimation of the fundamental parameters for HD 20784"/>
          <Publication author="Rowan et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.523.2641R" title="The value-added catalogue of ASAS-SN eclipsing binaries - III. Masses and radii of Gaia spectroscopic binaries"/>
          <Publication author="Papageorgiou et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023ApJ...952..141P" title="A Unique Low-mass-ratio Contact Eclipsing Binary System under the Period Cutoff"/>
          <Publication author="Pandel et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023AJ....166...51P" title="X-Ray and UV Observations of the Contact Binary KIC 9832227"/>
          <Publication author="Wang et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023AJ....166...42W" title="FX UMa: A New Heartbeat Binary System with Linear and Nonlinear Tidal Oscillations and δ Sct Pulsations"/>
          <Publication author="Tobin et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023NewA..10102019T" title="Photometric study of the overcontact binary V826 Aur"/>
          <Publication author="Green et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.522...29G" title="15 000 ellipsoidal binary candidates in TESS: Orbital periods, binary fraction, and tertiary companions"/>
          <Publication author="Ádám et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023A%26A...674A.170A" title="Variable stars in the residual light curves of OGLE-IV eclipsing binaries towards the Galactic Bulge"/>
          <Publication author="Rickard et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023A%26A...674A..56R" title="A low-metallicity massive contact binary undergoing slow Case A mass transfer: A detailed spectroscopic and orbital analysis of SSN 7 in NGC 346 in the SMC"/>
          <Publication author="Tanriver et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023RAA....23e5005T" title="The First Multiband Photometric Light Curve Solutions of the V Gru Binary System from the Southern Hemisphere"/>
          <Publication author="Chen et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023NewA..10001975C" title="Spectroscopic and photometric study of the pulsating eclipsing binary HIP 28271"/>
          <Publication author="Moharana et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.521.1908M" title="Detached eclipsing binaries in compact hierarchical triples: triple-lined systems BD+442258 and KIC 06525196"/>
          <Publication author="Qi et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023AJ....165..187Q" title="Searching for Compact Object Candidates from LAMOST Time-domain Survey of Four K2 Plates"/>
          <Publication author="Pauli et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023A%26A...673A..40P" title="Spectroscopic and evolutionary analyses of the binary system AzV 14 outline paths toward the WR stage at low metallicity"/>
          <Publication author="Rowan et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.520.2386R" title="The value-added catalogue of ASAS-SN eclipsing binaries - II. Properties of extra-physics systems"/>
          <Publication author="Pešta et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023A%26A...672A.176P" title="Mass-ratio distribution of contact binary stars"/>
          <Publication author="Oplištilová et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023A%26A...672A..31O" title="Spectrum of the secondary component and new orbital elements of the massive triple star δ Ori A "/>
          <Publication author="Šmelcer et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.520..353S" title="A photometric study of NSVS 7453183: a probable quadruple system with long-term surface activity"/>
          <Publication author="Strawn et al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.519.5882S" title="The orbital kinematics of η Carinae over three periastra with a possible detection of the elusive secondary's motion"/>
          <Publication author="Kovalev at al. (2023)" adsLink="https://ui.adsabs.harvard.edu/abs/2023MNRAS.519.5454K" title="Fundamental parameters for double-lined spectroscopic and detached eclipsing binary system J064726.39 + 223431.6 "/>

          {/* 2022: 37 */}
          <Publication author="Lin et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2023ApJ...944L...4L" title='An X-Ray-dim \"Isolated\" Neutron Star in a Binary?'/>
          <Publication author="Xiong et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2023AJ....165...30X" title="The Eclipsing Binaries from the LAMOST Medium-resolution Survey. III. A High-precision Empirical Stellar Mass Library"/>
          <Publication author="Landri et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.517.2746L" title="OGLE-BLG504.12.201843: a possible extreme dwarf nova"/>
          <Publication author="Fu et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022ApJ...940..126F" title="Searching for Compact Objects in Binaries with Gaia DR3"/>
          <Publication author="Gao et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022PASP..134k4202G" title="Photometric and Spectroscopic Studies of the Long-Period Low-Mass-Ratio Deep-Contact Binary KN Per"/>
          <Publication author="Ding et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022AJ....164..200D" title="Fast Derivation of Contact Binary Parameters for Large Photometric Surveys"/>
          <Publication author="Moharana et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022pas..conf..198M" title="Evolution and Dynamics of Tight Triple Systems"/>
          <Publication author="Priyatikanto et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.516.1183P" title=" Characterization of the eclipsing post-common-envelope binary TIC 60040774"/>
          <Publication author="Barbá et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.516.1149B" title="The winking eye of a very massive star: WR 21a revealed as an eclipsing binary by TESS"/>
          <Publication author="Chené et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.516.1022C" title="WR 63: a multiple system (O+O) + WR?"/>
          <Publication author="Yi et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022NatAs...6.1203Y" title="A dynamically discovered and characterized non-accreting neutron star-M dwarf binary candidate"/>
          <Publication author="Li et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.515.3370L" title="A Roche lobe-filling hot subdwarf and white dwarf binary: possible detection of an ejected common envelope"/>
          <Publication author="Kobulnicky et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022ApJS..262...12K" title="A Bayesian Analysis of Physical Parameters for 783 Kepler Close Binaries: Extreme-mass-ratio Systems and a New Mass Ratio versus Period Lower Limit"/>
          <Publication author="Mahy et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022A%26A...664A.159M" title="Identifying quiescent compact objects in massive Galactic single-lined spectroscopic binaries"/>
          <Publication author="Dai et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022RAA....22c5022D" title="Physical Properties of 29 sdB+dM Eclipsing Binaries in Zwicky Transient Facility"/>
          <Publication author="Liang et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022ApJ...927..114L" title="DI Herculis Revisited: Starspots, Gravity Darkening, and 3D Obliquities"/>
          <Publication author="Kovalev et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.513.4295K" title="TYC 2990-127-1: an Algol-type SB2 binary system of subgiant and red giant with a probable ongoing mass-transfer."/>
          <Publication author="Poro et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022PASP..134f4201P" title="The Photometric Study of Six W UMa Systems and Investigation of the Mass-Radius Relations for Contact Binary Stars"/>
          <Publication author="El-Badry et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.512.5620E" title="Unicorns and giraffes in the binary zoo: stripped giants with subgiant companions"/>
          <Publication author="Rowan et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.517.2190R" title="The Value-Added Catalog of ASAS-SN Eclipsing Binaries: Parameters of Thirty Thousand Detached Systems"/>
          <Publication author="Hey et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.511.2648H" title="Parameters of the eclipsing binary α Draconis observed by TESS and SONG"/>
          <Publication author="Miszuda et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.514..622M" title="The eclipsing binary systems with δ Scuti component - II. AB Cas"/>
          <Publication author="Wang et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.511.2285W" title="Properties and evolutions of starspots on three detached eclipsing binaries in the LAMOST-Kepler survey"/>
          <Publication author="Hume et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022RNAAS...6...67H" title="On the Detectability of Post-common-envelope Binary Central Stars of Planetary Nebulae"/>
          <Publication author="Pauli et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022A%26A...659A...9P" title="The earliest O-type eclipsing binary in the Small Magellanic Cloud, AzV 476: A comprehensive analysis reveals surprisingly low stellar masses"/>
          <Publication author="Yin et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022RAA....22c5021Y" title="New Massive Contact Twin Binary in a Radio-quiet H II Region Associated with the M17 Complex"/>
          <Publication author="Kobulnicky et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022ApJS..262...12K" title="A Bayesian Analysis of Physical Parameters for 783 Kepler Close Binaries: Extreme-Mass-Ratio Systems and a New Mass Ratio versus Period Lower Limit"/>
          <Publication author="Odesse et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022ApJ...926...46O" title="Using Computational Models to Uncover the Parameters of Three Kepler Binaries: KIC 5957123, KIC 8314879, and KIC 10727668"/>
          <Publication author="Esmer et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.511.5207E" title="Detection of two additional circumbinary planets around Kepler-451"/>
          <Publication author="Jones et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.510.3102J" title="The post-common-envelope binary central star of the planetary nebula Ou 5: a doubly eclipsing post-red-giant-branch system"/>
          <Publication author="El-Badry et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.516.3602E" title="Birth of a Be star: an APOGEE search for Be stars forming through binary mass transfer"/>
          <Publication author="Niu et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022RAA....22a5016N" title="Spot and Facula Activity Variations of the Eccentric Detached Eclipsing Binary KIC 8098300 Based on the Time-series Orbital Solutions"/>
          <Publication author="Wrona et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022ApJ...928..135W" title="Photometric Analysis of the OGLE Heartbeat Stars"/>
          <Publication author="Way et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.514..200W" title="Discovery of a Highly Eccentric, Chromospherically Active Binary: ASASSN-V J192114.84+624950.8"/>
          <Publication author="Jayasinghe et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.516.5945J" title="The Giraffe: Discovery of a stripped red giant in an interacting binary with a  ∼2 M⊙  lower giant"/>
          <Publication author="Niu et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022RAA....22a5016N" title="Spot and Facula Activity Variations of the Eccentric Detached Eclipsing Binary KIC 8098300 Based on the Time-series Orbital Solutions"/>
          <Publication author="Saracino et al. (2022)" adsLink="https://ui.adsabs.harvard.edu/abs/2022MNRAS.511.2914S" title="A black hole detected in the young massive LMC cluster NGC 1850"/>

          {/* 2021: 25 */}
          <Publication author="Helminiak et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.5687H" title="Orbital and physical parameters of eclipsing binaries from the ASAS catalogue - XII. A sample of systems with K2 photometry"/>
          <Publication author="El-Badry et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.4106E" title="Birth of the ELMs: a ZTF survey for evolved cataclysmic variables turning into extremely low-mass white dwarfs"/>
          <Publication author="Wang et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021PASP..133k4201W" title="Photometric Analysis of the TESS Light Curve for the Asynchronous Polar V1500 Cyg"/>
          <Publication author="Rowan et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021RNAAS...5..147R" title="ASASSN-21co: A Detached Eclipsing Binary with an 11.9 yr Period"/>
          <Publication author="Gautam et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021ASPC..528..393G" title="Constraints on the Density of the Dark Cusp Around the Galactic Center Supermassive Black Hole With a Newly Detected, Old, ~79 Day Period Stellar Binary Syste"/>
          <Publication author="Yin et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021AJ....162...52Y" title="Census of Variable Stars toward Serpens Main"/>
          <Publication author="Ding et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021PASJ...73..786D" title="A machine-learning method to derive the parameters of contact binaries"/>
          <Publication author="Li et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021ApJ...922..122L" title="Two Contact Binaries with Mass Ratios Close to the Minimum Mass Ratio"/>
          <Publication author="Ou et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021MNRAS.508.3967O" title="Searching for orbital decay in a heartbeat star system KIC 3766353"/>
          <Publication author="Yang et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021ApJ...923..226Y" title="LTD064402+245919: A Subgiant with a 1-3 M ⊙ Undetected Companion Identified from LAMOST-TD Data"/>
          <Publication author="Miller et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021AJ....162..131M" title="2M17091769+3127589: A Mass-transfer Binary with an Extreme Mass Ratio"/>
          <Publication author="Abdul-Masih et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021A%26A...651A..96A" title="Constraining the overcontact phase in massive binary evolution. I. Mixing in V382 Cyg, VFTS 352, and OGLE SMC-SC10 108086"/>
          <Publication author="Wang et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021MNRAS.504.4302W" title="KIC 5359678: a detached eclipsing binary with starspots"/>
          <Publication author="Papageorgiou et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021MNRAS.503.2979P" title="Detection of period variations of eclipsing binaries in the Catalina Sky Survey"/>
          <Publication author="El-Badry et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021MNRAS.505.2051E" title="LAMOST J0140355+392651: An evolved cataclysmic variable donor transitioning to become an extremely low mass white dwarf"/>
          <Publication author="Rappaport et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021MNRAS.503..254R" title="A tidally tilted sectoral dipole pulsation mode in the eclipsing binary TIC 633280200"/>
          <Publication author="Jayasinghe et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021MNRAS.504.2577J" title="A Unicorn in Monoceros: the  3M⊙  dark companion to the bright, nearby red giant V723 Mon is a non-interacting, mass-gap black hole candidate"/>
          <Publication author="Kochukhov et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021MNRAS.500.2577K" title="V772 Cas: an ellipsoidal HgMn star in an eclipsing binary"/>
          <Publication author="Gomel et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021MNRAS.501.2822G" title="Search for Dormant Black Holes in Ellipsoidal Variables I. Revisiting the Expected Amplitudes of the Photometric Modulation"/>
          <Publication author="Broens et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021MNRAS.501.4935B" title="Photometric analysis of three totally eclipsing W UMa stars with increasing periods: TYC 3700-1384-1, V1511 Her and V1179 Her"/>
          <Publication author="Steindl et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021A%26A...645A.119S" title="Tidally perturbed pulsations in the pre-main sequence  δ  Scuti binary RS Cha"/>
          <Publication author="Korth et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021CoSka..51...58K" title="Consequences of parameterization choice on eclipsing binary light curve solutions"/>
          <Publication author="Janssens et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021A%26A...646A..33J" title="BAT99 126: A multiple Wolf-Rayet system in the Large Magellanic Cloud with a massive near-contact binary"/>
          <Publication author="Clavel et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021A%26A...645A..72C" title="Using radial velocities to reveal black holes in binaries: a test case"/>
          <Publication author="Kołaczek-Szymański et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021A%26A...647A..12K" title="Massive heartbeat stars from TESS. I. TESS sectors 1-16"/>

          {/* 2020: 10 */}
          <Publication author="van Kooten et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020MNRAS.499.2817V" title="Periodic brightening of Kepler light curves: investigating the possibility of forward scattering due to dust clouds"/>
          <Publication author="Sekaran et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020A%26A...643A.162S" title="Tango of celestial dancers: A sample of detached eclipsing binary systems containing g-mode pulsating components. A case study of KIC9850387"/>
          <Publication author="Munday et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020MNRAS.498.6005M" title="The post-common-envelope binary central star of the planetary nebula ETHOS 1"/>
          <Publication author="Cunningham et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020AJ....160..187C" title="A KELT-TESS Eclipsing Binary in a Young Triple System Associated with a 'Stellar String' Theia 301"/>
          <Publication author="Jones et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020A%26A...642A.108J" title="The post-common-envelope binary central star of the planetary nebula PN G283.7-05.1: A possible post-red-giant-branch planetary nebula central star"/>
          <Publication author="Engel et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020MNRAS.497.4884E" title="BEER analysis of Kepler and CoRoT light curves. V. eBEER: Extension of the Algorithm to Eccentric Binaries"/>
          <Publication author="Maxted et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020MNRAS.498..332M" title="The TESS light curve of AI Phoenicis"/>
          <Publication author="Kurtz et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020MNRAS.494.5118K" title="The single-sided pulsator CO Camelopardalis"/>
          <Publication author="Aller et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020A%26A...635A.128A" title="Planetary Nebulae seen by TESS: Discovery of new binary central star candidates from Cycle 1"/>
          <Publication author="Kabath et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020PASP..132c5002K" title="Ondrejov Echelle Spectrograph, Ground Based Support Facility for Exoplanet Missions"/>

          {/* 2019: 3 */}
          <Publication author="Abdul-Masih et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/abs/2019ApJ...880..115A" title="Clues on the Origin and Evolution of Massive Contact Binaries: Atmosphere Analysis of VFTS 352"/>
          <Publication author="Kabath et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/abs/2019PASP..131h5001K" title="Detection limits of exoplanetary atmospheres with 2-m class telescopes"/>
          <Publication author="Jones et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/abs/2019MNRAS.482L..75J" title="The short orbital period binary star at the heart of the planetary nebula M 3-1★"/>

          {/* 2018: 4 */}
          <Publication author="Boffin et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/abs/2018A&A...619A..84B" title="When nature tries to trick us. An eclipsing eccentric close binary superposed on the central star of the planetary nebula M 3-2"/>
          <Publication author="Papageorgiou et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/abs/2018ApJS..238....4P" title="An Updated Catalog of 4680 Northern Eclipsing Binaries with Algol-type Light-curve Morphology in the Catalina Sky Surveys"/>
          <Publication author="Kochukhov et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/abs/2018MNRAS.478.1749K" title="HD 66051: the first eclipsing binary hosting an early-type magnetic star"/>
          <Publication author="von Essen et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/abs/2018A&A...615A..79V" title="Kepler Object of Interest Network. I. First results combining ground- and space-based observations of Kepler systems with transit timing variations"/>

          {/* 2017: 1 */}
          <Publication author="Jones & Boffin (2017)" adsLink="https://ui.adsabs.harvard.edu/abs/2017NatAs...1E.117J" title="Binary stars as the key to understanding planetary nebulae"/>

          <Separator flip={true} large={false}/>
        </Content>

        <Content dark={0}>
          <h2>PHOEBE Conference Proceedings</h2>
          <Publication author="Kochoska et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020CoSka..50..539K" title="Beyond DC and MCMC: alternative algorithms and approaches to fitting light curves"/>
          <Publication author="Conroy et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020CoSka..50..530C" title="Upcoming support for triple stellar systems in PHOEBE"/>
          <Publication author="Degroote et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/abs/2013EAS....64..277D" title="PHOEBE 2.0 - Where no model has gone before"/>
          <Publication author="Prša et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/abs/2013EAS....64..259P" title="Physics of Eclipsing Binaries: Motivation for the New-Age Modeling Suite"/>
          <Publication author="Bloemen et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/abs/2013EAS....64..269B" title="Physics of Eclipsing Binaries: Modelling in the new era of ultra-high precision photometry"/>
          <Publication author="Conroy et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/abs/2013EAS....64..295C" title="PHOEBE 2.0 - Triple and multiple systems"/>
          <Publication author="Hambleton et al. (2013)" adsLink="https://ui.adsabs.harvard.edu/abs/2013EAS....64..285H" title="Physics of Eclipsing Binaries: Heartbeat Stars and Tidally Induced Pulsations"/>
          <Publication author="Prša et al. (2007)" adsLink="https://ui.adsabs.harvard.edu/abs/2007ASPC..370..175P" title="Introducing Powell's Direction Set Method to a Fully Automated Analysis of Eclipsing Binary Stars"/>
          <Separator flip={false} large={false}/>
        </Content>

        <Content dark={1}>
          <h2>PHOEBE Talks &amp; Posters</h2>
          <Publication author="Prša (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021AAS...23713303P" title="Advanced models of pulsating components in eclipsing binary systems"/>
          <Publication author="Kochoska et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021AAS...23713302K" title="phoetting: guidelines and best practices for fitting with PHOEBE"/>
          <Publication author="Conroy et al. (2021)" adsLink="https://ui.adsabs.harvard.edu/abs/2021AAS...23714003C" title="Introducing Inverse Problem Solvers in the 2.3 Release of the PHOEBE Eclipsing Binary Modeling Code"/>
          <Publication author="Jones et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020sea..confE.150J" title="PHOEBE binary star modelling in the era of Kepler and TESS"/>
          <Publication author="Conroy et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020AAS...23511405C" title="New Physics and Features in the 2.2 Release of the PHOEBE Eclipsing Binary Modeling Code"/>
          <Publication author="Kochoska et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020AAS...23511403K" title="Fitting in the wild: exploration of new approaches and methods for estimating binary system parameters from light curve data"/>
          <Publication author="Conroy et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/abs/2019AAS...23334827C" title="Considerations and Design Principles for the 2.1 Release of the PHOEBE Eclipsing Binary Modeling Code"/>
          <Publication author="Conroy et al. (2017)" adsLink="https://ui.adsabs.harvard.edu/abs/2017AAS...22934422C" title="Robust Modeling of Stellar Triples in PHOEBE"/>
          <Publication author="Horvat et al. (2017)" adsLink="https://ui.adsabs.harvard.edu/abs/2017AAS...22934423H" title="Heat Redistribution and Misaligned Orbit Models in PHOEBE"/>
          <Publication author="Prša et al. (2017)" adsLink="https://ui.adsabs.harvard.edu/abs/2017AAS...22934409P" title="Using Gaussian Processes to Model Noise in Eclipsing Binary Light Curves"/>
          <Publication author="Prša et al. (2012)" adsLink="https://ui.adsabs.harvard.edu/abs/2012IAUS..282..271P" title="Advances in Modeling Eclipsing Binary Stars in the Era of Large All-Sky Surveys with EBAI and PHOEBE"/>
          <Publication author="Prša et al. (2010)" adsLink="https://ui.adsabs.harvard.edu/abs/2010AAS...21541931P" title="Revising the Model of Eclipsing Binary Stars for the Kepler Era"/>
          <Separator flip={true} large={false}/>
        </Content>

        <Content dark={0}>
          <h2>Related Papers by the PHOEBE Development Team</h2>
          <Publication author="Wrona &amp; Prša (2025)" adsLink="https://ui.adsabs.harvard.edu/abs/2025ApJS..277....1W" title="The Eclipsing Binaries via Artificial Intelligence. II. Need for Speed in PHOEBE Forward Models"/>
          <Publication author="Abdul-Masih (2024)" adsLink="https://ui.adsabs.harvard.edu/abs/2024IAUS..361..157A" title="SPAMMS: applications and use cases for the 3D spectroscopic analysis technique to study deformed massive stars"/>
          <Publication author="Abdul-Masih et al. (2020)" adsLink="https://ui.adsabs.harvard.edu/abs/2020A%26A...636A..59A" title="Spectroscopic patch model for massive stars using PHOEBE II and FASTWIND"/>
          <Publication author="Prša et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/abs/2019PASP..131f8001P" title="Finding the Needle in a Haystack: Detrending Photometric Timeseries Data of Strictly Periodic Astrophysical Objects"/>
          <Publication author="Kochoska et al. (arXiv, 2018)" adsLink="https://ui.adsabs.harvard.edu/abs/2018arXiv180408781K" title="COBAIN: generalized 3D radiative transfer code for contact binary atmospheres"/>
          <Publication author="Horvat et al. (2019)" adsLink="https://ui.adsabs.harvard.edu/abs/2019ApJS..240...36H" title="Bolometric Treatment of Irradiation Effects: General Discussion and Application to Binary Stars"/>
          <Publication author="Conroy et al. (2018)" adsLink="https://ui.adsabs.harvard.edu/abs/2018ApJ...854..163C" title="The Effects of Barycentric and Asymmetric Transverse Velocities on Eclipse and Transit Times"/>
          <Publication author="Prša et al. (2008)" adsLink="https://ui.adsabs.harvard.edu/abs/2008ApJ...687..542P" title="Artificial Intelligence Approach to the Determination of Physical Properties of Eclipsing Binaries. I. The EBAI Project"/>
        </Content>
      </div>
    );
  }
}

class Publication extends Component {
  render() {
    // props: adsLink, authors, title, release (optional)
    return (
      <div style={{marginBottom: "4px"}}>
        <Link to={this.props.entryLink || this.props.adsLink} hideexternal="true">{this.props.author}</Link>
        {this.props.pdf ? <span> (<Link to={"/static/pdf/"+this.props.pdf}>download pdf</Link>) </span> : null}
        <span> - {this.props.title}</span>
        {this.props.release ? <span> (<Link to={"/releases/"+this.props.release+"/"}>PHOEBE {this.props.release} release</Link>)</span> : null}
      </div>
    )
  }
}
