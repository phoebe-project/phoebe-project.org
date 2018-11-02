import React, { Component } from 'react';

import {Content, Link} from './common';
import {Header} from './header';

export class News extends Component {
  render() {
    return (
      <div>
        <Header>
          <h1>PHOEBE NEWS</h1>
        </Header>
        <Content>
          <p className="App-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra condimentum augue, commodo feugiat nulla fermentum in. Ut pharetra vestibulum eros in consequat. Nulla ac metus ullamcorper, viverra tortor sit amet, vestibulum felis. Duis rhoncus egestas nunc ac porttitor. Vivamus venenatis lacinia odio, vel porta lacus pellentesque et. Curabitur vitae libero nibh. Aliquam imperdiet nisl nec ante mollis interdum. In nulla lorem, condimentum in luctus ultricies, imperdiet non ligula. Quisque cursus purus justo, ac auctor quam imperdiet hendrerit. Ut non arcu id odio posuere tincidunt sed ac elit. Etiam convallis, sapien quis faucibus tristique, mi magna pharetra odio, quis viverra nunc diam nec urna.

            Ut urna augue, commodo et nisi sed, dapibus rhoncus turpis. Sed quam augue, gravida sed tincidunt a, malesuada in sem. Praesent commodo eget velit non tincidunt. Nunc tincidunt turpis lorem, volutpat scelerisque tellus pulvinar nec. Cras gravida ipsum leo, id laoreet nibh ultricies eget. Donec rutrum eros at rhoncus hendrerit. Aliquam erat volutpat. Integer dolor justo, ultricies accumsan odio id, fermentum tincidunt ante. Sed posuere, tortor non facilisis interdum, velit est imperdiet tellus, eget elementum felis nisl non nisi. Sed et hendrerit sem. Donec imperdiet risus vel odio feugiat tincidunt. Mauris augue urna, dignissim eu magna nec, laoreet vehicula nisl. Etiam augue est, luctus a aliquam non, pulvinar sed erat. Sed pharetra metus in ipsum vestibulum, vel tempor lectus porta. Integer vel orci semper, rutrum magna quis, vulputate justo. Nunc interdum dui sapien, vel mollis turpis imperdiet id.

            Donec tempus elementum sapien, ut auctor libero maximus vel. Ut et mi et sem maximus viverra in id ex. Morbi sed mauris a justo consequat dignissim. Nam at pellentesque diam. Nulla vehicula diam lobortis augue dictum, at egestas risus facilisis. Suspendisse leo purus, placerat nec pretium cursus, maximus eu urna. Maecenas vitae purus malesuada, posuere erat vitae, ullamcorper neque. Mauris molestie laoreet lorem, quis posuere nunc suscipit ac.

            Sed eget fermentum purus, nec congue ipsum. Proin nec orci sit amet elit consequat fermentum at eleifend est. Curabitur tempor leo ipsum, id mattis metus pretium hendrerit. Aenean vitae urna lacus. Vivamus semper leo at ante iaculis, quis lacinia enim rutrum. Mauris dictum, nulla ac luctus suscipit, metus erat euismod lectus, eu gravida arcu orci in ligula. Duis ac pretium leo. Etiam nec hendrerit lectus. Suspendisse fringilla pulvinar quam vel iaculis. Ut vitae nisl sed quam elementum consequat. Aliquam lobortis erat lorem, at auctor ante placerat ut. Vivamus ornare fringilla turpis in elementum.

            Donec at consequat magna. Fusce at sem eleifend risus viverra rhoncus vitae id urna. Ut rutrum, sem sit amet porttitor commodo, enim sapien imperdiet dui, quis dignissim tortor velit sit amet sem. Vestibulum vitae malesuada lectus. Sed ac facilisis nisi, a placerat risus. Curabitur finibus, massa sit amet interdum malesuada, enim sem auctor nisl, vel consectetur nisl eros et risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus in sapien vitae diam hendrerit facilisis. Curabitur eros lacus, consequat nec laoreet quis, tincidunt fringilla erat. Nullam convallis mauris vitae arcu pretium dignissim. Duis tincidunt blandit dolor non pellentesque. Nam consequat, dui sit amet gravida porta, massa risus elementum massa, eu maximus ipsum orci vel lacus. Quisque eu risus tempor, fringilla arcu vel, bibendum quam.

            Praesent cursus leo gravida mauris vestibulum, eget lacinia orci molestie. Nullam sed magna venenatis, aliquet nunc non, rutrum erat. Pellentesque imperdiet gravida libero vel luctus. Sed vel scelerisque lorem. Sed ornare at lectus non viverra. Fusce sit amet ultrices odio. Suspendisse sit amet lacus tellus.

            Morbi volutpat lorem eget ultrices sollicitudin. Curabitur non justo enim. Suspendisse mollis purus vel nisi ultrices vulputate. Nullam malesuada faucibus odio eget facilisis. Mauris ornare orci lorem, non blandit turpis faucibus eu. Cras commodo, risus in suscipit malesuada, arcu metus malesuada magna, id accumsan eros nibh sed elit. Aenean convallis quam non dui pharetra, vel consectetur ligula imperdiet. Donec euismod risus et justo vulputate, in accumsan elit feugiat. Nullam elit leo, fermentum ut arcu vel, vehicula ultricies erat.

            Curabitur placerat, risus finibus congue venenatis, nibh tellus accumsan lectus, vitae rutrum lorem felis at quam. Sed nulla nulla, pharetra in dui quis, egestas condimentum lectus. Mauris facilisis ex est, at posuere eros auctor eu. Nunc nunc nisi, condimentum et erat et, pulvinar blandit magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris venenatis semper tortor ac mattis. In mattis, neque ut hendrerit pharetra, mi tellus rutrum enim, eu volutpat turpis eros eu ex. Integer eu sem leo. Duis ligula urna, vehicula quis hendrerit vitae, interdum quis nisl. Pellentesque convallis leo et lacus interdum vulputate. Curabitur nec porttitor massa. Donec rutrum, dolor eu fermentum ornare, ante mauris sollicitudin diam, in consequat odio felis eu lacus. Vestibulum sed tellus porta, venenatis orci sed, pellentesque magna. Duis malesuada bibendum felis, vel eleifend urna volutpat mollis. Aliquam magna sem, accumsan ac arcu a, tempor tincidunt nibh.

          </p>
        </Content>
      </div>
    );
  }
}

export class NewsEntry extends Component {
  render() {
    return (
      <div>
        <Header>
          <h1>PHOEBE NEWS ENTRY</h1>
        </Header>
        <Content>
          <p className="App-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra condimentum augue, commodo feugiat nulla fermentum in. Ut pharetra vestibulum eros in consequat. Nulla ac metus ullamcorper, viverra tortor sit amet, vestibulum felis. Duis rhoncus egestas nunc ac porttitor. Vivamus venenatis lacinia odio, vel porta lacus pellentesque et. Curabitur vitae libero nibh. Aliquam imperdiet nisl nec ante mollis interdum. In nulla lorem, condimentum in luctus ultricies, imperdiet non ligula. Quisque cursus purus justo, ac auctor quam imperdiet hendrerit. Ut non arcu id odio posuere tincidunt sed ac elit. Etiam convallis, sapien quis faucibus tristique, mi magna pharetra odio, quis viverra nunc diam nec urna.

            Ut urna augue, commodo et nisi sed, dapibus rhoncus turpis. Sed quam augue, gravida sed tincidunt a, malesuada in sem. Praesent commodo eget velit non tincidunt. Nunc tincidunt turpis lorem, volutpat scelerisque tellus pulvinar nec. Cras gravida ipsum leo, id laoreet nibh ultricies eget. Donec rutrum eros at rhoncus hendrerit. Aliquam erat volutpat. Integer dolor justo, ultricies accumsan odio id, fermentum tincidunt ante. Sed posuere, tortor non facilisis interdum, velit est imperdiet tellus, eget elementum felis nisl non nisi. Sed et hendrerit sem. Donec imperdiet risus vel odio feugiat tincidunt. Mauris augue urna, dignissim eu magna nec, laoreet vehicula nisl. Etiam augue est, luctus a aliquam non, pulvinar sed erat. Sed pharetra metus in ipsum vestibulum, vel tempor lectus porta. Integer vel orci semper, rutrum magna quis, vulputate justo. Nunc interdum dui sapien, vel mollis turpis imperdiet id.

            Donec tempus elementum sapien, ut auctor libero maximus vel. Ut et mi et sem maximus viverra in id ex. Morbi sed mauris a justo consequat dignissim. Nam at pellentesque diam. Nulla vehicula diam lobortis augue dictum, at egestas risus facilisis. Suspendisse leo purus, placerat nec pretium cursus, maximus eu urna. Maecenas vitae purus malesuada, posuere erat vitae, ullamcorper neque. Mauris molestie laoreet lorem, quis posuere nunc suscipit ac.

            Sed eget fermentum purus, nec congue ipsum. Proin nec orci sit amet elit consequat fermentum at eleifend est. Curabitur tempor leo ipsum, id mattis metus pretium hendrerit. Aenean vitae urna lacus. Vivamus semper leo at ante iaculis, quis lacinia enim rutrum. Mauris dictum, nulla ac luctus suscipit, metus erat euismod lectus, eu gravida arcu orci in ligula. Duis ac pretium leo. Etiam nec hendrerit lectus. Suspendisse fringilla pulvinar quam vel iaculis. Ut vitae nisl sed quam elementum consequat. Aliquam lobortis erat lorem, at auctor ante placerat ut. Vivamus ornare fringilla turpis in elementum.

            Donec at consequat magna. Fusce at sem eleifend risus viverra rhoncus vitae id urna. Ut rutrum, sem sit amet porttitor commodo, enim sapien imperdiet dui, quis dignissim tortor velit sit amet sem. Vestibulum vitae malesuada lectus. Sed ac facilisis nisi, a placerat risus. Curabitur finibus, massa sit amet interdum malesuada, enim sem auctor nisl, vel consectetur nisl eros et risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus in sapien vitae diam hendrerit facilisis. Curabitur eros lacus, consequat nec laoreet quis, tincidunt fringilla erat. Nullam convallis mauris vitae arcu pretium dignissim. Duis tincidunt blandit dolor non pellentesque. Nam consequat, dui sit amet gravida porta, massa risus elementum massa, eu maximus ipsum orci vel lacus. Quisque eu risus tempor, fringilla arcu vel, bibendum quam.

            Praesent cursus leo gravida mauris vestibulum, eget lacinia orci molestie. Nullam sed magna venenatis, aliquet nunc non, rutrum erat. Pellentesque imperdiet gravida libero vel luctus. Sed vel scelerisque lorem. Sed ornare at lectus non viverra. Fusce sit amet ultrices odio. Suspendisse sit amet lacus tellus.

            Morbi volutpat lorem eget ultrices sollicitudin. Curabitur non justo enim. Suspendisse mollis purus vel nisi ultrices vulputate. Nullam malesuada faucibus odio eget facilisis. Mauris ornare orci lorem, non blandit turpis faucibus eu. Cras commodo, risus in suscipit malesuada, arcu metus malesuada magna, id accumsan eros nibh sed elit. Aenean convallis quam non dui pharetra, vel consectetur ligula imperdiet. Donec euismod risus et justo vulputate, in accumsan elit feugiat. Nullam elit leo, fermentum ut arcu vel, vehicula ultricies erat.

            Curabitur placerat, risus finibus congue venenatis, nibh tellus accumsan lectus, vitae rutrum lorem felis at quam. Sed nulla nulla, pharetra in dui quis, egestas condimentum lectus. Mauris facilisis ex est, at posuere eros auctor eu. Nunc nunc nisi, condimentum et erat et, pulvinar blandit magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris venenatis semper tortor ac mattis. In mattis, neque ut hendrerit pharetra, mi tellus rutrum enim, eu volutpat turpis eros eu ex. Integer eu sem leo. Duis ligula urna, vehicula quis hendrerit vitae, interdum quis nisl. Pellentesque convallis leo et lacus interdum vulputate. Curabitur nec porttitor massa. Donec rutrum, dolor eu fermentum ornare, ante mauris sollicitudin diam, in consequat odio felis eu lacus. Vestibulum sed tellus porta, venenatis orci sed, pellentesque magna. Duis malesuada bibendum felis, vel eleifend urna volutpat mollis. Aliquam magna sem, accumsan ac arcu a, tempor tincidunt nibh.

          </p>
        </Content>
      </div>
    );
  }
}
