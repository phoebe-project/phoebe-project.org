import React, { Component } from 'react';

import {Helmet} from "react-helmet"; // https://www.npmjs.com/package/react-helmet

import {Content, Link} from './common';
import {HeaderLegacy} from './header';

export class LegacyIntro extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | Legacy</title>
          <meta name="description" content="PHOEBE 1 (legacy version)"/>
        </Helmet>
        <HeaderLegacy/>
        <Content>
          <em>Note: the legacy version of PHOEBE (0.x and 1.0) is no longer actively developed. The code is still maintained and any problems should be reported.
          Users starting from scratch should consider using <Link to="/releases">PHOEBE 2</Link> instead.</em>

          <br/><br/>

          <strong>PHOEBE</strong> stands for <strong>PH</strong>ysics <strong>O</strong>f <strong>E</strong>clipsing <strong>B</strong>inari<strong>E</strong>s.
          It is a tool for the modeling of eclipsing binary stars based on real photometric and spectroscopic (radial velocity) data.

          <br/><br/>

          PHOEBE 1.0 (legacy) is based on the <Link to="ftp://ftp.astro.ufl.edu/pub/wilson"><strong>Wilson-Devinney (WD)</strong></Link> code.

          The suite consists of three parts:<br/><br/>

          <ul>
            <li>
              <strong>The library: <code>phoebe-lib</code></strong> <br/>

              This is PHOEBE's scientific and computational core. It contains functions and algorithms that are used for eclipsing binary modeling. It is not a stand-alone application.
              <em> As such, it cannot be run, nor can it be used in any direct fashion. </em> For interaction with the user a driver is needed.
              Provided are three drivers: the GUI, the scripter, and the python wrapper. These are the interfaces between the user and the library.
              If you wish to write your own driver, the library is all you need.
            </li>
            <li>
              <strong>The graphical user interface: <code>phoebe-gui</code></strong> <br/>

              The most straight-forward and intuitive way to start using PHOEBE is through a graphical user interface (GUI). It is a heavily structured
              interface for setting parameter values, plotting light and radial velocity curves, invoking the minimizer and reviewing model results.
              The GUI is suited particularly well for analyzing single objects.
            </li>
            <li>
              <strong>The scripter: <code>phoebe-scripter</code></strong> <br/>

              This is a terminal-based driver that features a full-fledged scripting language developed especially for PHOEBE. It comes with a somewhat steeper learning curve,
              to the benefit of flexibility and the power of scripting.  The scripter may prove useful to users with at least superficial experience in working with the GUI and
              eclipsing binaries in general. It is suited well for statistical tests and the analyses of larger data-sets.
            </li>

            <li>
              <strong>The python wrapper: <code>phoebe-py</code></strong> <br/>

              For python enthusiasts, the forward model of PHOEBE is wrapped into python. It supports core functions: computing light curves, radial velocity curves and
              cost functions. The wrapper is used predominantly for Markov Chain Monte Carlo sampling of the parameter space and probabilistic analysis.
            </li>
          </ul>

          <br/>
          PHOEBE is and will always be free: both free of charge and free in a sense that you may re-use its code in any way you see fit, for as long as your product remains free,
          released under the <Link to="/1.0/gpl">General Public License</Link>. However, please think of PHOEBE as postcardware - if you want to express symbolic recognition and
          stimulate further PHOEBE development, please send a postcard to the <Link to="/help/devel">developers</Link>!

        </Content>
      </div>
    );
  }
}

export class LegacyGPL extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | Legacy | License</title>
        </Helmet>
        <HeaderLegacy/>
        <Content>
          PHOEBE is released under the GNU General Public License. License contents are given in full detail below. PHOEBE is and always will remain free.

          <hr/>

          <ul>
          <li><a name="TOC1" href="gpl#SEC1">GNU GENERAL PUBLIC LICENSE</a><ul><li><a name="TOC2" href="gpl#SEC2">Preamble</a>
        </li><li><a name="TOC3" href="gpl#SEC3">Terms and conditions for copying, distribution and modification</a>
          </li></ul>
          </li></ul>

          <hr/>

          <center><h2><a name="SEC1">GNU GENERAL PUBLIC LICENSE</a></h2></center>

          Version 2, June 1991

          <pre>Copyright (C) 1989, 1991 Free Software Foundation, Inc.
          51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA

          Everyone is permitted to copy and distribute verbatim copies
          of this license document, but changing it is not allowed.
          </pre>

          <center><h2><a name="SEC2">Preamble</a></h2></center>

          The licenses for most software are designed to take away your freedom to share and change it.  By contrast, the GNU General Public License is intended to guarantee your freedom to share and change free software--to make sure the software is free for all its users.  This General Public License applies to most of the Free Software Foundation's software and to any other program whose authors commit to using it.  (Some other Free Software Foundation software is covered by the GNU Lesser General Public License instead.)  You can apply it to your programs, too.

          When we speak of free software, we are referring to freedom, not price.  Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for this service if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs; and that you know you can do these things.

          To protect your rights, we need to make restrictions that forbid anyone to deny you these rights or to ask you to surrender the rights. These restrictions translate to certain responsibilities for you if you distribute copies of the software, or if you modify it.

          For example, if you distribute copies of such a program, whether gratis or for a fee, you must give the recipients all the rights that you have.  You must make sure that they, too, receive or can get the source code.  And you must show them these terms so they know their rights.

          We protect your rights with two steps: (1) copyright the software, and (2) offer you this license which gives you legal permission to copy, distribute and/or modify the software.

          Also, for each author's protection and ours, we want to make certain that everyone understands that there is no warranty for this free software.  If the software is modified by someone else and passed on, we want its recipients to know that what they have is not the original, so that any problems introduced by others will not reflect on the original authors' reputations.

          Finally, any free program is threatened constantly by software patents.  We wish to avoid the danger that redistributors of a free program will individually obtain patent licenses, in effect making the program proprietary.  To prevent this, we have made it clear that any patent must be licensed for everyone's free use or not licensed at all.

          The precise terms and conditions for copying, distribution and modification follow.

          <center><h2><a name="SEC3">Terms and conditions for copying, distribution and modification</a></h2></center>

          <center><strong>0.</strong></center>

          This License applies to any program or other work which contains a notice placed by the copyright holder saying it may be distributed under the terms of this General Public License.  The "Program", below, refers to any such program or work, and a "work based on the Program" means either the Program or any derivative work under copyright law: that is to say, a work containing the Program or a portion of it, either verbatim or with modifications and/or translated into another language.  (Hereinafter, translation is included without limitation in the term "modification".)  Each licensee is addressed as "you".

          Activities other than copying, distribution and modification are not covered by this License; they are outside its scope.  The act of running the Program is not restricted, and the output from the Program is covered only if its contents constitute a work based on the Program (independent of having been made by running the Program). Whether that is true depends on what the Program does.

          <center><strong>1.</strong></center>

          You may copy and distribute verbatim copies of the Program's source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice and disclaimer of warranty; keep intact all the notices that refer to this License and to the absence of any warranty; and give any other recipients of the Program a copy of this License along with the Program.

          You may charge a fee for the physical act of transferring a copy, and you may at your option offer warranty protection in exchange for a fee.

          <center><strong>2.</strong></center>

          You may modify your copy or copies of the Program or any portion of it, thus forming a work based on the Program, and copy and distribute such modifications or work under the terms of Section 1 above, provided that you also meet all of these conditions:


          <dl><dt></dt><dd><strong>a)</strong> You must cause the modified files to carry prominent notices stating that you changed the files and the date of any change.</dd></dl><dl><dt></dt><dd><strong>b)</strong> You must cause any work that you distribute or publish, that in whole or in part contains or is derived from the Program or any part thereof, to be licensed as a whole at no charge to all third parties under the terms of this License. </dd></dl><dl><dt></dt><dd><strong>c)</strong> If the modified program normally reads commands interactively when run, you must cause it, when started running for such interactive use in the most ordinary way, to print or display an announcement including an appropriate copyright notice and a notice that there is no warranty (or else, saying that you provide a warranty) and that users may redistribute the program under these conditions, and telling the user how to view a copy of this License.  (Exception: if the Program itself is interactive but does not normally print such an announcement, your work based on the Program is not required to print an announcement.) </dd></dl>


          These requirements apply to the modified work as a whole. If identifiable sections of that work are not derived from the Program, and can be reasonably considered independent and separate works in themselves, then this License, and its terms, do not apply to those sections when you distribute them as separate works.  But when you distribute the same sections as part of a whole which is a work based on the Program, the distribution of the whole must be on the terms of
          this License, whose permissions for other licensees extend to the entire whole, and thus to each and every part regardless of who wrote it.

          Thus, it is not the intent of this section to claim rights or contest your rights to work written entirely by you; rather, the intent is to exercise the right to control the distribution of derivative or collective works based on the Program.

          In addition, mere aggregation of another work not based on the Program with the Program (or with a work based on the Program) on a volume of a storage or distribution medium does not bring the other work under the scope of this License.

          <center><strong>3.</strong></center>

          You may copy and distribute the Program (or a work based on it, under Section 2) in object code or executable form under the terms of Sections 1 and 2 above provided that you also do one of the following:


          <dl><dt></dt><dd><strong>a)</strong> Accompany it with the complete corresponding machine-readable source code, which must be distributed under the terms of Sections 1 and 2 above on a medium customarily used for software interchange; or, </dd></dl><dl><dt></dt><dd><strong>b)</strong> Accompany it with a written offer, valid for at least three years, to give any third party, for a charge no more than your cost of physically performing source distribution, a complete machine-readable copy of the corresponding source code, to be distributed under the terms of Sections 1 and 2 above on a medium customarily used for software interchange; or, </dd></dl><dl><dt></dt><dd><strong>c)</strong> Accompany it with the information you received as to the offer to distribute corresponding source code.  (This alternative is allowed only for noncommercial distribution and only if you received the program in object code or executable form with such an offer, in accord with Subsection b above.) </dd></dl>


          The source code for a work means the preferred form of the work for making modifications to it.  For an executable work, complete source code means all the source code for all modules it contains, plus any associated interface definition files, plus the scripts used to control compilation and installation of the executable.  However, as a special exception, the source code distributed need not include anything that is normally distributed (in either source or binary form) with the major components (compiler, kernel, and so on) of the operating system on which the executable runs, unless that component itself accompanies the executable.

          If distribution of executable or object code is made by offering access to copy from a designated place, then offering equivalent access to copy the source code from the same place counts as distribution of the source code, even though third parties are not compelled to copy the source along with the object code.

          <center><strong>4.</strong></center>

          You may not copy, modify, sublicense, or distribute the Program except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense or distribute the Program is void, and will automatically terminate your rights under this License. However, parties who have received copies, or rights, from you under this License will not have their licenses terminated so long as such parties remain in full compliance.

          <center><strong>5.</strong></center>

          You are not required to accept this License, since you have not signed it.  However, nothing else grants you permission to modify or distribute the Program or its derivative works.  These actions are prohibited by law if you do not accept this License.  Therefore, by modifying or distributing the Program (or any work based on the Program), you indicate your acceptance of this License to do so, and all its terms and conditions for copying, distributing or modifying the Program or works based on it.

          <center><strong>6.</strong></center>

          Each time you redistribute the Program (or any work based on the Program), the recipient automatically receives a license from the original licensor to copy, distribute or modify the Program subject to these terms and conditions.  You may not impose any further restrictions on the recipients' exercise of the rights granted herein. You are not responsible for enforcing compliance by third parties to this License.

          <center><strong>7.</strong></center>

          If, as a consequence of a court judgment or allegation of patent infringement or for any other reason (not limited to patent issues), conditions are imposed on you (whether by court order, agreement or otherwise) that contradict the conditions of this License, they do not excuse you from the conditions of this License.  If you cannot distribute so as to satisfy simultaneously your obligations under this License and any other pertinent obligations, then as a consequence you may not distribute the Program at all.  For example, if a patent license would not permit royalty-free redistribution of the Program by all those who receive copies directly or indirectly through you, then the only way you could satisfy both it and this License would be to refrain entirely from distribution of the Program.

          If any portion of this section is held invalid or unenforceable under any particular circumstance, the balance of the section is intended to apply and the section as a whole is intended to apply in other circumstances.

          It is not the purpose of this section to induce you to infringe any patents or other property right claims or to contest validity of any such claims; this section has the sole purpose of protecting the integrity of the free software distribution system, which is implemented by public license practices.  Many people have made generous contributions to the wide range of software distributed through that system in reliance on consistent application of that system; it is up to the author/donor to decide if he or she is willing to distribute software through any other system and a licensee cannot impose that choice.

          This section is intended to make thoroughly clear what is believed to be a consequence of the rest of this License.

          <center><strong>8.</strong></center>

          If the distribution and/or use of the Program is restricted in certain countries either by patents or by copyrighted interfaces, the original copyright holder who places the Program under this License may add an explicit geographical distribution limitation excluding those countries, so that distribution is permitted only in or among countries not thus excluded.  In such case, this License incorporates the limitation as if written in the body of this License.

          <center><strong>9.</strong></center>

          The Free Software Foundation may publish revised and/or new versions of the General Public License from time to time.  Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.

          Each version is given a distinguishing version number.  If the Program specifies a version number of this License which applies to it and "any later version", you have the option of following the terms and  conditions either of that version or of any later version published by the Free Software Foundation.  If the Program does not specify a version number of this License, you may choose any version ever published by the Free Software Foundation.

          <center><strong>10.</strong></center>

          If you wish to incorporate parts of the Program into other free programs whose distribution conditions are different, write to the author to ask for permission.  For software which is copyrighted by the Free Software Foundation, write to the Free Software Foundation; we sometimes make exceptions for this.  Our decision will be guided by the two goals of preserving the free status of all derivatives of our free software and of promoting the sharing and reuse of software generally.

          <center><strong>NO WARRANTY</strong></center>

          <center><strong>11.</strong></center>

          BECAUSE THE PROGRAM IS LICENSED FREE OF CHARGE, THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER  EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

          <center><strong>12.</strong></center>

          IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

          <center><h2>END OF TERMS AND CONDITIONS</h2></center>



        </Content>
      </div>
    );
  }
}

export class LegacyDocs extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | Legacy | Documentation</title>
        </Helmet>
        <HeaderLegacy/>
        <Content>
          Although we strive to make PHOEBE as intuitive as possible, there are a number of scientific, numerical and technical details that need precise and thorough description. For that reason we have initiated several booklets that are freely downloadable. Still, given the enormous amount of work that the developers are presented with, it is very difficult to keep the documentation as up-to-date as we would like it to be. That is why all booklets are envisoned to be community-driven: we need volunteers to help us create and improve them.<br/><br/>

          <table align="center" valign="middle" width="90%">
              <tbody><tr>
              <th width="30%"> Booklet title: </th>
              <th width="15%"> No. of pages: </th>
              <th width="15%"> Last modified: </th>
              <th width="15%"> Download: </th>
              </tr>
              <tr style={{borderBottom: "1px solid gray"}}><td colspan="100%"></td></tr>
              <tr>
              <td> PHOEBE scientific reference </td>
              <td> 182pp </td>
              <td> 2011-06-14 </td>
              <td> <Link to="/static/legacy/docs/phoebe_science.pdf"> pdf </Link> </td>
              </tr>
              <tr>
              <td> PHOEBE API </td>
              <td> 71pp </td>
              <td> 2008-04-21 </td>
              <td> <Link to="/static/legacy/docs/phoebe_api.pdf"> pdf </Link> </td>
              </tr>
              <tr>
              <td> PHOEBE user manual </td>
              <td> 21pp </td>
              <td> 2011-04-13 </td>
              <td> <Link to="/static/legacy/docs/phoebe_manual.pdf"> pdf </Link> </td>
              </tr>
              <tr style={{borderBottom: "1px solid gray"}}><td colspan="100%"></td></tr>
              <tr>
              <td> PHOEBE tutorial </td>
              <td> 36pp </td>
              <td> 2007-06-20 </td>
              <td> <Link to="/static/legacy/docs/phoebe_tutorial/phoebe_tutorial.html"> html </Link> </td>
              </tr>
              <tr>
              <td> PHOEBE library API </td>
              <td>  </td>
              <td> 2018-04-27 </td>
              <td> <Link to="/static/legacy/docs/api/index.html"> html </Link> </td>
              </tr>
              <tr>
              <td> PHOEBE FAQ </td>
              <td>  </td>
              <td> 2018-04-27 </td>
              <td> <Link to="/1.0/faq"> html </Link> </td>
              </tr>
          </tbody></table>
        </Content>
      </div>
    );
  }
}

export class LegacyDownload extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>PHOEBE | Legacy | Download & Install</title>
        </Helmet>
        <HeaderLegacy/>
        <Content>
          <details>
          <summary><font size="4">Download the latest legacy version</font></summary><br/>

          <strong>Git</strong> (<Link to="https://git-scm.com/">https://git-scm.com</Link>) is a version control system that keeps track of all modifications and additions to PHOEBE source code. It logs all changes that have been made and generates the backtrack policy that enables developers to update the source without the overhead of keeping the stable release backed up: git is capable of recreating the exact contents of the source at any given time.
          <br/><br/>

          PHOEBE is served on <Link to="http://github.com/phoebe-project">github</Link>. To browse the repository, click <Link to="https://github.com/phoebe-project/phoebe1">here</Link>.

          For those unfamiliar with git and/or version control systems in general, here is the official <Link to="https://git-scm.com/doc">documentation page</Link> for git. It provides manuals, books and videos to get you started.
          <br/><br/>

          PHOEBE uses the repository for two main purposes:

          <ul>
          <li> to issue bugfixes of the stable branch as soon as they are made and </li>
          <li> to promote active development and give the users a chance to test new features and provide feedback in the case of encountered problems.
          </li></ul>

          To download PHOEBE from github, issue:<br/><br/>

          <table align="center" width="98%" border="1">
          <tbody><tr><td><code>git clone https://github.com/phoebe-project/phoebe1.git</code></td></tr>
          </tbody></table>
          <br/>

          This will create a <code>phoebe1</code> directory and download the latest sources. To compile it, follow the generic instructions in the top-level <code>INSTALL</code> file.

          </details>

          <details>
          <summary><font size="4">Download the stable version</font></summary><br/>

          The latest stable release is 0.31a. Download it directly from the link below:<br/><br/>

          <table align="center" valign="middle" width="95%">
          <tbody><tr><th valign="middle" width="35%"> PHOEBE version    </th>
          <th valign="middle" width="15%"> Size              </th>
          <th valign="middle" width="15%"> Format            </th>
          <th valign="middle" width="15%"> Release Date      </th>
          <th valign="middle" width="15%"> ChangeLog         </th>

          </tr><tr style={{borderBottom: "1px solid gray"}}><td colspan="100%"></td></tr>

          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-lib-0.31a.tar.gz"> PHOEBE Lib 0.31a </Link></td>
          <td valign="middle"> 2.3MB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 2008-06-16 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-lib-0.31a"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-scripter-0.31a.tar.gz"> PHOEBE Scripter 0.31a </Link></td>
          <td valign="middle"> 206KB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 2008-06-16 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-scripter-0.31a"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-gui-0.31a.tar.gz"> PHOEBE GUI 0.31a </Link></td>
          <td valign="middle"> 220KB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 2008-06-16 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-GUI-0.31a"> View </Link> </td>
          </tr>

          <tr style={{borderBottom: "1px solid gray"}}><td colspan="100%"></td></tr>

          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-lib-0.31.tar.gz"> PHOEBE Lib 0.31 </Link></td>
          <td valign="middle"> 2.3MB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 2008-06-01 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-lib-0.31"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-scripter-0.31.tar.gz"> PHOEBE Scripter 0.31 </Link></td>
          <td valign="middle"> 205KB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 2008-06-01 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-scripter-0.31"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-gui-0.31.tar.gz"> PHOEBE GUI 0.31 </Link></td>
          <td valign="middle"> 217KB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 2008-06-01 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-GUI-0.31"> View </Link> </td>
          </tr>

          <tr style={{borderBottom: "1px solid gray"}}><td colspan="100%"></td></tr>

          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-lib-0.30.tar.gz"> PHOEBE Lib 0.30 </Link></td>
          <td valign="middle"> 1.6MB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 2007-11-15 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-lib-0.30"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-scripter-0.30.tar.gz"> PHOEBE Scripter 0.30 </Link></td>
          <td valign="middle"> 199KB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 2007-11-15 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-scripter-0.30"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-gui-0.30.tar.gz"> PHOEBE GUI 0.30 </Link></td>
          <td valign="middle"> 191KB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 2007-11-15 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-GUI-0.30"> View </Link> </td>
          </tr>

          <tr style={{borderBottom: "1px solid gray"}}><td colspan="100%"></td></tr>

          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-lib-0.30rc2.tar.gz"> PHOEBE Lib 0.30RC2 </Link></td>
          <td valign="middle"> 1.6MB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 2007-11-03 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.30rc2"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-scripter-0.30rc2.tar.gz"> PHOEBE Scripter 0.30RC2 </Link></td>
          <td valign="middle"> 199KB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 2007-11-03 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.30rc2"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-gui-0.30rc2.tar.gz"> PHOEBE GUI 0.30RC2 </Link></td>
          <td valign="middle"> 184KB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 2007-11-03 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.30rc2"> View </Link> </td>
          </tr>

          <tr style={{borderBottom: "1px solid gray"}}><td colspan="100%"></td></tr>

          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-0.30rc1.tar.gz"> PHOEBE 0.30RC1 (monolithic) </Link></td>
          <td valign="middle"> 3.6MB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 2007-10-15 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.30RC1"> View </Link> </td>
          </tr>
          </tbody></table><br/>

          To build PHOEBE 0.3x, first build the library from the <code>phoebe-lib</code> tarball, and then build the scripter and the GUI from the <code>phoebe-scripter</code> and <code>phoebe-gui</code> tarballs by following generic instructions in each directory (the usual <code>./configure; make; sudo make install</code> should work just fine if you have all pre-requisites installed).

          <br/><br/>

          There have been several development versions released in the past, the so-called pre-releases. These are provided below for the sake of completeness, but if you wish to use the development version of PHOEBE, please use the <Link to="https://github.com/phoebe-project/phoebe1">development version</Link> hosted on git.<br/><br/>

          <table align="center" valign="middle" width="95%">
          <tbody><tr><th valign="middle" width="35%"> PHOEBE version    </th>
          <th valign="middle" width="15%"> Size              </th>
          <th valign="middle" width="15%"> Format            </th>
          <th valign="middle" width="15%"> Release Date      </th>
          <th valign="middle" width="15%"> ChangeLog         </th>

          </tr><tr style={{borderBottom: "1px solid gray"}}><td colspan="100%"></td></tr>

          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-0.30pre4.tar.gz"> PHOEBE 0.30pre4 </Link></td>
          <td valign="middle"> 1.8MB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 16. 05. 2005 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.30pre4"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-0.30pre3.tar.gz"> PHOEBE 0.30pre3 </Link></td>
          <td valign="middle"> 1.5MB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 15. 03. 2005 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.30pre3"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-0.30pre2.tar.gz"> PHOEBE 0.30pre2 </Link></td>
          <td valign="middle"> 1.4MB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 26. 07. 2004 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.30pre2"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-0.30pre1.tar.gz"> PHOEBE 0.30pre1 </Link></td>
          <td valign="middle"> 524KB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 26. 03. 2004 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.30pre1"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/phoebe-0.30pre0.tar.gz"> PHOEBE 0.30pre0 </Link></td>
          <td valign="middle"> 512KB </td>
          <td valign="middle"> Tarball (.tar.gz) </td>
          <td valign="middle"> 07. 01. 2004 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.30pre0"> View </Link> </td>
          </tr>
          </tbody></table>

          <br/><br/>
          </details>

          <details>
          <summary><font size="4">Download the Windows version</font></summary><br/>

          As of version 0.31, PHOEBE is available to MS Windows users. It has been built using GNU libraries, which implies a somewhat large self-extracting executable (~15MB). Click on the link below to initiate the download. Please report any problems to the <Link to="/help/contact/phoebe-devel">phoebe-devel</Link> mailing list.<br/><br/>

          <table align="center" valign="middle" width="95%">
          <tbody><tr><th valign="middle" width="35%"> PHOEBE version    </th>
          <th valign="middle" width="15%"> Size              </th>
          <th valign="middle" width="15%"> Format            </th>
          <th valign="middle" width="15%"> Release Date      </th>
          <th valign="middle" width="15%"> ChangeLog         </th>

          </tr><tr style={{borderBottom: "1px solid gray"}}><td colspan="100%"></td></tr>

          <tr>
          <td valign="middle"> <Link to="/static/legacy/windows_builds/phoebe0.32-setup.exe"> PHOEBE 0.32-snapshot </Link></td>
          <td valign="middle"> 13MB </td>
          <td valign="middle"> Executable (.exe) </td>
          <td valign="middle"> 2017-09-25 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-lib-0.31a"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/windows_builds/phoebe0.31a-setup.exe"> PHOEBE 0.31a </Link></td>
          <td valign="middle"> 15MB </td>
          <td valign="middle"> Executable (.exe) </td>
          <td valign="middle"> 2008-06-16 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-lib-0.31a"> View </Link> </td>
          </tr>
          <tr>
          <td valign="middle"> <Link to="/static/legacy/windows_builds/phoebe0.31-setup.exe"> PHOEBE 0.31 </Link></td>
          <td valign="middle"> 15MB </td>
          <td valign="middle"> Executable (.exe) </td>
          <td valign="middle"> 2008-06-01 </td>
          <td valign="middle"> <Link to="/static/legacy/ChangeLog-lib-0.31"> View </Link> </td>
          </tr>
          </tbody></table>

          </details>

          <details>
          <summary><font size="4">Download the Mac version</font></summary><br/>

          These instructions are graciously provided by Carla Maceroni, and further edited by Francesc Villardel. It is still somewhat tricky to install PHOEBE on Macs. Here we provide general instructions in hope they are useful. Please report problems to <Link to="/help/contact/phoebe-devel">phoebe-devel</Link> mailing list.<br/><br/>

          <ol>
          <li> Install the <code>Xcode</code> tools from MacOS installation disk or from the web page:

            <Link to="http://developer.apple.com/technology/xcode.html"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> http://developer.apple.com/technology/xcode.html</Link>

          Note: <code>X11</code> is also needed and should be installed in <code>/Applications/Utilities/X11.app</code> and libraries in <code>/usr/X11</code>. If not available, install it from the installation disk.

          </li><li> Install gfortran from <Link to="http://hpc.sourceforge.net"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> http://hpc.sourceforge.net</Link>.

          </li><li> Install some kind of open source porting system, for example, <code>fink</code> found at <Link to="http://www.finkproject.org/"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> The Fink Project</Link>. Binaries existed for Leopard (OS X 10.5.x) but not Snow Leopard (OS X 10.6.x) at the time of this writing. However, there were instructions and an automated build/install system for <code>fink</code> to run in Snow Leopard.

          </li><li> Install the <Link to="?q=node/3">libraries required by PHOEBE</Link>, as well as gnuplot. Use <code>fink</code> install commands to do this. This may take a considerable time if you need to compile everything from source.</li>

          <li> Be sure environment flags are properly set so the libraries are findable when compiling PHOEBE. For example, <code>fink</code> installs under <code>/sw</code> and an example of flag settings may be:<br/>

          <pre>export CFLAGS=-I/sw/include
          export LDFLAGS=-L/sw/lib
          export CXXFLAGS=$CFLAGS
          export CPPFLAGS=$CXXFLAGS
          export ACLOCAL_FLAGS="-I /sw/share/aclocal"
          export PKG_CONFIG_PATH="/sw/lib/pkgconfig"
          export PATH=/sw/var/lib/fink/path-prefix-10.6:$PATH
          export MACOSX_DEPLOYMENT_TARGET=10.5
          </pre>
          </li><li> Download PHOEBE sources and unpack them: <code>tar xvzf phoebe-*-0.31.tar.gz</code>

          </li><li> Install <code>phoebe-lib</code> with:

          <pre>&gt;$ cd phoebe-lib
          &gt;$ ./configure F77=gfortran FFLAGS="-std=legacy -Wl,-single_module"
          &gt;$ make
          &gt;$ sudo make install
          </pre>

          Comments:
          <ul>
          <li> the <code>-std=legacy</code> flag might be obsolete in leopard/snow.
          </li><li> if you have not set environment flags the paths to fink or macports libraries may have to be included (as <code>CFLAGS="-I&lt;path&gt;"</code> and <code>LDFLAGS="-L&lt;path&gt;"</code>
          </li></ul>

          </li><li> Install <code>phoebe-scripter</code> with:
          <pre>&gt;$ cd phoebe-scripter
          &gt;$ ./configure [CFLAGS="-I&lt;path&gt;"] [LDFLAGS="-L&lt;path&gt;"] # (CFLAGS and LDFLAGS are optional)
          &gt;$ make
          &gt;$ sudo make install
          </pre>

          </li><li> Configure <code>phoebe-gui</code> with:
          <pre>&gt;$ ./configure [CFLAGS="-I&lt;path&gt;"] [LDFLAGS="-L&lt;path&gt;"]
          </pre>

          Then edit <code>src/Makefile</code> and change <code>phoebe_gui_LDFLAGS</code> to:<br/>
          <code> phoebe_gui_LDFLAGS = -flat_namespace -undefined suppress</code> <br/><br/>
          Then issue:
          <pre>&gt;$ make
          &gt;$ sudo make install
          </pre>
          </li><li> Run <code>phoebe-gui</code>.
          </li></ol>

          </details>

          <details>
            <summary><font size="4">Download the archival version</font></summary><br/>

            Pre-0.30 versions of PHOEBE were distributed as a monolithic package; they did not support scripting (well, there was a very primitive pseudo-scripter but its capabilities were very limited) nor independent library functions. Still, the graphical user interface has been appreciated as an important technical advancement. While the 2.x (and legacy 0.3x) versions are winning over because of their flexibility, the original 0.2x GUI may still be occasionally used because it has been fairly well tested. Below you may find a list of archival releases and their respective ChangeLogs.<br/><br/>

            <table align="center" valign="middle" width="95%">
            <tbody><tr><th valign="middle" width="35%"> PHOEBE version    </th>
            <th valign="middle" width="15%"> Size              </th>
            <th valign="middle" width="15%"> Format            </th>
            <th valign="middle" width="15%"> Release Date      </th>
            <th valign="middle" width="15%"> ChangeLog         </th>

            </tr><tr style={{borderBottom: "1px solid gray"}}><td colspan="100%"></td></tr>

            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.29d.tar.gz"> PHOEBE 0.29d </Link></td>
            <td valign="middle"> 1689KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 25. 09. 2007 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.29d"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.29c.tar.gz"> PHOEBE 0.29c </Link></td>
            <td valign="middle"> 1560KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 04. 07. 2006 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.29c"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.29b.tar.gz"> PHOEBE 0.29b </Link></td>
            <td valign="middle"> 1560KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 21. 06. 2006 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.29b"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.29a.tar.gz"> PHOEBE 0.29a </Link></td>
            <td valign="middle"> 1618KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 31. 01. 2006 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.29a"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.29.tar.gz"> PHOEBE 0.29 </Link></td>
            <td valign="middle"> 1610KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 13. 01. 2006 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.29"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.28a.tar.gz"> PHOEBE 0.28a </Link></td>
            <td valign="middle"> 1609KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 10. 11. 2005 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.28a"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.28.tar.gz"> PHOEBE 0.28 </Link></td>
            <td valign="middle"> 1609KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 01. 11. 2005 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.28"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.27.tar.gz"> PHOEBE 0.27 </Link></td>
            <td valign="middle"> 1625KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 30. 05. 2005 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.27"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.26.tar.gz"> PHOEBE 0.26 </Link></td>
            <td valign="middle"> 1472KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 21. 10. 2004 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.26"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.25.tar.gz"> PHOEBE 0.25 </Link></td>
            <td valign="middle"> 1471KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 23. 07. 2004 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.25"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.24.tar.gz"> PHOEBE 0.24 </Link></td>
            <td valign="middle"> 1473KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 03. 05. 2004 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.24"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.23.tar.gz"> PHOEBE 0.23 </Link></td>
            <td valign="middle"> 1463KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 14. 04. 2004 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.23"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.22.tar.gz"> PHOEBE 0.22 </Link></td>
            <td valign="middle"> 1472KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 19. 01. 2004 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.22"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.21.tar.gz"> PHOEBE 0.21 </Link></td>
            <td valign="middle"> 1472KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 17. 12. 2003 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.21"> View </Link> </td>
            </tr>
            <tr>
            <td valign="middle"> <Link to="/static/legacy/phoebe-0.20.tar.gz">PHOEBE 0.20</Link></td>
            <td valign="middle"> 684KB </td>
            <td valign="middle"> Tarball (.tar.gz) </td>
            <td valign="middle"> 01. 06. 2003 </td>
            <td valign="middle"> <Link to="/static/legacy/ChangeLog-0.20">              View </Link></td>
            </tr>
            </tbody></table> <br/>
          </details>

          <details>
            <summary><font size="4">Download limb darkening tables</font></summary><br/>

              Extensive computation of limb darkening coefficients is facilitated by providing precomputed tables from which PHOEBE can interpolate the coefficients. PHOEBE can either use the Van Hamme (1993) limb darkening tables or the internal limb darkening tables.<br/><br/>

              Download <Link to="/static/legacy/ld/ld_vanhamme1993.tar.gz">Van Hamme (1993) tables</Link>. To install, unpack them in a directory of your choice, start PHOEBE and click on <code>Settings-&gt;Preferences</code>. Then select <code>Van Hamme (1993) tables</code> and enter the directory to which you saved the tables. <em>You do not need <code>models.list</code> or any of the tables listed below.</em> If Van Hamme tables are all you are going to use, you are done.<br/><br/>

              Download <Link to="/static/legacy/ld/ld_phoebe.tar.gz">internal (2011) tables</Link>. To install, unpack them in a directory of your choice, start PHOEBE and click on <code>Settings-&gt;Preferences</code>. Then select <code>PHOEBE (2011) tables</code> and enter the directory to which you saved the files. The internal limb darkening tables are computed per-passband and new passbands are being added as they become available. The list below lists all currently available passbands. For fine-grained control you can download only the tables you will use.<br/><br/>

              <font color="#ff0000">IMPORTANT:</font> do not put the two tables in the same directory. PHOEBE tables read in the contents for the entire directory and will use up a lot of time to needlessly parse the (incompatible) Van Hamme tables.<br/><br/>

              Limb darkening coefficients in the internal tables are given for the following 5 limb darkening formulae, where μ=cos θ:<br/><br/>

              <div align="center">
              <table width="80%">
              <tbody><tr>
              <td> linear cosine: </td>
              <td> I(μ)/I<sub>0</sub> = 1 - x<sub>lin</sub> (1-μ), </td>
              </tr>
              <tr>
              <td> logarithmic: </td>
              <td> I(μ)/I<sub>0</sub> = 1 - x<sub>log</sub> (1-μ) - y<sub>log</sub> μ log(μ), </td>
              </tr>
              <tr>
              <td> square root: </td>
              <td> I(μ)/I<sub>0</sub> = 1 - x<sub>sqrt</sub> (1-μ) - y<sub>sqrt</sub> (1-μ<sup>1/2</sup>), </td>
              </tr>
              <tr>
              <td> quadratic: </td>
              <td> I(μ)/I<sub>0</sub> = 1 - x<sub>quad</sub> (1-μ) - y<sub>quad</sub> (1-μ)<sup>2</sup>, and </td>
              </tr>
              <tr>
              <td> 4<sup>th</sup> order non-linear: </td>
              <td> I(μ)/I<sub>0</sub> = 1 - c<sub>1</sub> (1-μ<sup>1/2</sup>) - c<sub>2</sub> (1-μ) - c<sub>3</sub> (1-μ<sup>3/2</sup>) - c<sub>4</sub> (1-μ<sup>2</sup>). </td>
              </tr>
              </tbody></table>
              </div><br/>

              The coefficients have been precomputed across the H-R diagram. The file <Link to="/static/legacy/ld/models.list">models.list</Link> contains 3 columns: Teff, log(g) and [M/H], and 3800 rows, one for each model from Castelli &amp; Kurucz's (2004) atlas. This file is used for index lookup and must be present in the designated LD directory.<br/><br/>

              All remaining files are limb darkening coefficients for a given passband. They start with a header that contains the following keywords: PASS_SET for the passband set (i.e. Johnson), PASSBAND for the passband name (i.e. J), and VERSION to allow for versioning when, for example, a better transmission curve becomes available. Any comments (lines starting with `#') are ignored. What follows is a table with 11 columns and 3800 rows. The columns are: x<sub>lin</sub>, x<sub>log</sub>, y<sub>log</sub>, x<sub>sqrt</sub>, y<sub>sqrt</sub>, x<sub>quad</sub>, y<sub>quad</sub>, c<sub>1</sub>, c<sub>2</sub>, c<sub>3</sub> and c<sub>4</sub>, for each limb darkening law. The 3800 rows are indexed according to the <code>models.list</code> lookup table.<br/><br/>

              The following table contains all passbands that have been computed so far.<br/><br/>

              <div align="center">
              <table width="80%">
              <tbody><tr><th> File: </th> <th> Passband reference: </th>
              </tr><tr>
              <td> <Link to="/static/legacy/ld/models.list">models.list</Link> </td>
              <td> Indexing (lookup) table </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/2mass_j.ld">2MASS J</Link> </td>
              <td> <Link to="http://www.ipac.caltech.edu/2mass/releases/second/doc/sec3_1b1.html"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> 2MASS handbook</Link> </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/2mass_h.ld">2MASS H</Link> </td>
              <td> <Link to="http://www.ipac.caltech.edu/2mass/releases/second/doc/sec3_1b1.html"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> 2MASS handbook</Link> </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/2mass_ks.ld">2MASS Ks</Link> </td>
              <td> <Link to="http://www.ipac.caltech.edu/2mass/releases/second/doc/sec3_1b1.html"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> 2MASS handbook</Link> </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/bolometric.ld">Bolometric</Link> </td>
              <td> Flat on the 300-1000nm range </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/corot_exo.ld">CoRoT exo</Link> </td>
              <td> Carla Maceroni, priv.comm. </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/corot_sis.ld">CoRoT sismo</Link> </td>
              <td> Carla Maceroni, priv.comm. </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/cousins_r.ld">Cousins R</Link> </td>
              <td> <Link to="http://adsabs.harvard.edu/abs/1976MmRAS..81...25C"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> Cousins (1976), MmRAS 81, 25</Link> </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/cousins_i.ld">Cousins I</Link> </td>
              <td> <Link to="http://adsabs.harvard.edu/abs/1976MmRAS..81...25C"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> Cousins (1976), MmRAS 81, 25</Link> </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/geneva_u.ld">Geneva U</Link> </td>
              <td> <Link to="http://adsabs.harvard.edu/abs/1988A%26A...206..357R"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> Rufener &amp; Nicolet (1988), A&amp;A 206, 357</Link> </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/geneva_b.ld">Geneva B</Link> </td>
              <td> <Link to="http://adsabs.harvard.edu/abs/1988A%26A...206..357R"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> Rufener &amp; Nicolet (1988), A&amp;A 206, 357</Link> </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/geneva_b1.ld">Geneva B1</Link> </td>
              <td> <Link to="http://adsabs.harvard.edu/abs/1988A%26A...206..357R"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> Rufener &amp; Nicolet (1988), A&amp;A 206, 357</Link> </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/geneva_b2.ld">Geneva B2</Link> </td>
              <td> <Link to="http://adsabs.harvard.edu/abs/1988A%26A...206..357R"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> Rufener &amp; Nicolet (1988), A&amp;A 206, 357</Link> </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/geneva_v.ld">Geneva V</Link> </td>
              <td> <Link to="http://adsabs.harvard.edu/abs/1988A%26A...206..357R"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> Rufener &amp; Nicolet (1988), A&amp;A 206, 357</Link> </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/geneva_v1.ld">Geneva V1</Link> </td>
              <td> <Link to="http://adsabs.harvard.edu/abs/1988A%26A...206..357R"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> Rufener &amp; Nicolet (1988), A&amp;A 206, 357</Link> </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/geneva_g.ld">Geneva G</Link> </td>
              <td> <Link to="http://adsabs.harvard.edu/abs/1988A%26A...206..357R"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> Rufener &amp; Nicolet (1988), A&amp;A 206, 357</Link> </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/hipparcos.ld">Hipparcos Hp</Link> </td>
              <td> Hipparcos and Tycho Catalogues, ESA pub. SP-1200, Vol. 1, pg. 39 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/tycho_bT.ld">Hipparcos (Tycho) bT</Link> </td>
              <td> Maiz Apellaniz (2006), AJ 131, 1184 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/tycho_vT.ld">Hipparcos (Tycho) vT</Link> </td>
              <td> Maiz Apellaniz (2006), AJ 131, 1184 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/johnson_u.ld">Johnson U</Link> </td>
              <td> Maiz Apellaniz (2006), AJ 131, 1184 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/johnson_b.ld">Johnson B</Link> </td>
              <td> Maiz Apellaniz (2006), AJ 131, 1184 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/johnson_v.ld">Johnson V</Link> </td>
              <td> Maiz Apellaniz (2006), AJ 131, 1184 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/kepler.ld">Kepler</Link> </td>
              <td> Kepler Science Book </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/lsst_u.ld">LSST u</Link> </td>
              <td> LSST Science Book </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/lsst_g.ld">LSST g</Link> </td>
              <td> LSST Science Book </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/lsst_r.ld">LSST r</Link> </td>
              <td> LSST Science Book </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/lsst_i.ld">LSST i</Link> </td>
              <td> LSST Science Book </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/lsst_z.ld">LSST z</Link> </td>
              <td> LSST Science Book </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/lsst_y3.ld">LSST y3</Link> </td>
              <td> LSST Science Book </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/lsst_y4.ld">LSST y4</Link> </td>
              <td> LSST Science Book </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/most.ld">MOST</Link> </td>
              <td> Walker et al. (2003), PASP 115, 1023 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/sloan_u.ld">Sloan u'</Link> </td>
              <td> Fukugita et al. (1996) AJ 111, 1748 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/sloan_g.ld">Sloan g'</Link> </td>
              <td> Fukugita et al. (1996) AJ 111, 1748 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/sloan_r.ld">Sloan r'</Link> </td>
              <td> Fukugita et al. (1996) AJ 111, 1748 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/sloan_i.ld">Sloan i'</Link> </td>
              <td> Fukugita et al. (1996) AJ 111, 1748 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/sloan_z.ld">Sloan z'</Link> </td>
              <td> Fukugita et al. (1996) AJ 111, 1748 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/stromgren_u.ld">Stromgren u</Link> </td>
              <td> Maiz Apellaniz (2006), AJ 131, 1184 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/stromgren_v.ld">Stromgren v</Link> </td>
              <td> Maiz Apellaniz (2006), AJ 131, 1184 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/stromgren_b.ld">Stromgren b</Link> </td>
              <td> Maiz Apellaniz (2006), AJ 131, 1184 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/stromgren_y.ld">Stromgren y</Link> </td>
              <td> Maiz Apellaniz (2006), AJ 131, 1184 </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/swasp_2004.ld">SuperWASP pre-2004</Link> </td>
              <td> <Link to="https://ui.adsabs.harvard.edu/#abs/2006PASP..118.1407P/abstract"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> Pollacco et al. (2006), PASP 118, 1407</Link> </td>
              </tr>
              <tr>
              <td> <Link to="/static/legacy/ld/swasp_2006.ld">SuperWASP post-2004</Link> </td>
              <td> <Link to="https://ui.adsabs.harvard.edu/#abs/2006PASP..118.1407P/abstract"  target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link"></span> Pollacco et al. (2006), PASP 118, 1407</Link> </td>
              </tr>
              </tbody></table>
              </div><br/>
          </details>



        </Content>
      </div>
    );
  }
}
